import FunctionDeclarationBase from "./FunctionDeclarationBase.ts";
import Prototype from "./Prototype.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import IFunctionDeclaration from "./IFunctionDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import Accessibility from "./Accessibility.ts";
import StatementList from "../statement/StatementList.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import AnyType from "../type/AnyType.ts";
import ParameterList from "../parameter/ParameterList.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import FunctionBody from "../module/FunctionBody.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { Function } from "../binaryen/binaryen_wasm.js";
import { assertTrue } from "../../deps.ts";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase {

    isStatic: boolean;
    statements: StatementList;

    constructor(accessibility: Accessibility, isStatic: boolean, proto: Prototype, statements: StatementList) {
        super(accessibility, proto);
        this.isStatic = isStatic;
        this.statements = statements;
    }

    check(context: Context): IType {
        context = this._unit.context;
        this.checkRestParameters(context);
        if(this.isGeneric())
            return AnyType.instance;
        else {
            const local = context.newLocalContext();
            this.parameters.forEach(param => param.register(local));
            return this.statements.check(local, this.returnType);
        }
    }

    isConst(context: Context): boolean {
        context = this._unit.context;
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local));
        return this.statements.every(stmt => stmt.isConst(context));
    }

    declare(context: Context, module: WasmModule): void {
        if(this.isGeneric())
            return;
        context = this._unit.context;
        module.declareFunction(this);
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module), this);
        this.statements.declare(local, module);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        if(this.isGeneric())
            return;
        if(this.isModuleExport())
            module.functions.addExport(this.name, this.name); // TODO mangle name
        context = this._unit.context;
        const body = new FunctionBody();
        // first rehearse such that body knows all locals
        let local = context.newLocalContext();
        this.parameters.rehearse(local, module, body);
        this.statements.rehearse(local, module, body);
        // now compile
        local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local), this);
        const results = this.statements.compile(local, module, flags, body);
        const block = module.block(null, results.refs, results.type.asType(context));
        // compile local types using calling context because parameters are compiled by function call
        const locals = body.compileLocals(context);
        const funcref = module.functions.add(this.name, this.functionType(context).asType(context), results.type.asType(context), locals, block);
        body.setLocalNames(funcref);
        if(flags.debug) {
            const file = module.addDebugInfoFileName(this.fragment.url.toString());
            const func = new Function(funcref);
            body.debugFragments.forEach((fragment, ref) => func.setDebugLocation(ref, file, fragment.startLocation.line + 1, fragment.startLocation.column + 1))            ;
        }
    }

    instantiateGeneric(context: Context, typeArguments: IType[]): IFunctionDeclaration {
        assertTrue(this.isGeneric());
        return GenericFunctionInstance.instantiate(context, this, typeArguments);
    }
}

class GenericFunctionInstance extends ConcreteFunctionDeclaration {

    static instantiate(context: Context, decl: ConcreteFunctionDeclaration, typeArguments: IType[]) {
        const name = decl.name + typeArguments.map(t => "$" + t.typeName).join("");
        const parentType = decl.parentClass ? decl.parentClass.getIType(context) : null;
        const parameters = ParameterList.from(decl.parameters.map(param => param.withType(decl.resolveGenericType(param.type, typeArguments))));
        const returnType = decl.resolveGenericType(decl.returnType, typeArguments);
        const proto = new Prototype(parentType, new Identifier(name), [], parameters, returnType);
        const typeMap = new Map<string, IType>();
        for(let i=0; i<decl.generics.length; i++) {
            typeMap.set(decl.generics[i].name, typeArguments[i]);
        }
        return new GenericFunctionInstance(decl.unit, proto, decl.statements, typeMap);
    }

    typeMap: Map<string, IType>;

    constructor(unit: CompilationUnit, proto: Prototype, statements: StatementList, typeMap: Map<string, IType>) {
        super(Accessibility.PUBLIC, false, proto, statements);
        this.unit = unit;
        this.typeMap = typeMap;
    }

    register(context: Context): void {
        context.registerFunction(this);
    }

    check(context: Context): IType {
        return super.check(context.withTypeMap(this.typeMap));
    }

    declare(context: Context, module: WasmModule): void {
        super.declare(context.withTypeMap(this.typeMap), module);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        super.compile(context.withTypeMap(this.typeMap), module, flags);
    }
}
