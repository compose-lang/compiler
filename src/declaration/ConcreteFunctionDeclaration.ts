import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import Context from "../context/Context";
import WasmModule from "../module/wasm/WasmModule";
import ICompilable from "../compiler/ICompilable";
import OpCode from "../compiler/OpCode";
import IType from "../type/IType";
import IFunctionDeclaration from "./IFunctionDeclaration";
import * as assert from "assert";
import Identifier from "../builder/Identifier";
import Accessibility from "./Accessibility";
import StatementList from "../statement/StatementList";
import CompilationUnit from "../compiler/CompilationUnit";
import AnyType from "../type/AnyType";
import ParameterList from "../parameter/ParameterList";
import CompilerFlags from "../compiler/CompilerFlags";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

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
        module.declareConcreteFunction(this, this.isModuleExport());
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module), this);
        this.statements.declare(local, module);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        if(this.isGeneric())
            return;
        context = this._unit.context;
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        const local = context.newLocalContext();
        this.parameters.rehearse(local, module, body);
        this.statements.rehearse(local, module, body);
        // parameters are compiled by function call
        this.statements.compile(local, module, flags, body);
        body.addOpCode(OpCode.END);
    }

    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration {
        assert.ok(this.isGeneric());
        return GenericFunctionInstance.instantiate(this, typeArguments);
    }
}

class GenericFunctionInstance extends ConcreteFunctionDeclaration {

    static instantiate(decl: ConcreteFunctionDeclaration, typeArguments: IType[]) {
        const name = decl.name + typeArguments.map(t => "$" + t.typeName).join("");
        const parameters = ParameterList.from(decl.parameters.map(param => param.withType(decl.resolveGenericType(param.type, typeArguments))));
        const returnType = decl.resolveGenericType(decl.returnType, typeArguments);
        const proto = new Prototype(new Identifier(name), [], parameters, returnType);
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
