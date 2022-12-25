import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import ICompilable from "../compiler/ICompilable";
import OpCode from "../compiler/OpCode";
import IType from "../type/IType";
import IFunctionDeclaration from "./IFunctionDeclaration";
import * as assert from "assert";
import Identifier from "../builder/Identifier";
import Accessibility from "./Accessibility";

export default class ConcreteFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

    isStatic: boolean;
    statements: IStatement[];

    constructor(accessibility: Accessibility, isStatic: boolean, proto: Prototype, statements: IStatement[]) {
        super(accessibility, proto);
        this.isStatic = isStatic;
        this.statements = statements;
    }


    register(context: Context): void {
        context.registerFunction(this);
    }

    check(context: Context): void {
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.register(local));
        this.statements.forEach(stmt => stmt.check(local));
    }

    declare(context: Context, module: WasmModule): void {
        if(!this.isGeneric())
            module.declareFunction(this, this.isExported());
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.declare(local, module));
        this.statements.forEach(stmt => stmt.declare(local, module));
    }

    compile(context: Context, module: WasmModule): void {
        const section = module.getCodeSection();
        const body = section.createFunctionCode();
        const local = context.newLocalContext();
        this.parameters.forEach(param => param.rehearse(local, module, body));
        this.statements.forEach(stmt => stmt.rehearse(local, module, body));
        // parameters are compiled by function call
        this.statements.forEach(stmt => stmt.compile(local, module, body), this);
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
        const parameters = decl.parameters.map(param => param.withType(decl.resolveGenericType(param.type, typeArguments)));
        const returnType = decl.resolveGenericType(decl.returnType, typeArguments);
        const proto = new Prototype(new Identifier(name), [], parameters, returnType);
        const typeMap = new Map<string, IType>();
        for(let i=0; i<decl.generics.length; i++) {
            typeMap.set(decl.generics[i].name, typeArguments[i]);
        }
        return new GenericFunctionInstance(proto, decl.statements, typeMap);
    }

    typeMap: Map<string, IType>;

    constructor(proto: Prototype, statements: IStatement[], typeMap: Map<string, IType>) {
        super(Accessibility.PUBLIC, false, proto, statements);
        this.typeMap = typeMap;
    }

    register(context: Context): void {
        context.registerFunction(this);
    }

    check(context: Context): void {
        super.check(context.withTypeMap(this.typeMap));
    }

    declare(context: Context, module: WasmModule): void {
        super.declare(context.withTypeMap(this.typeMap), module);
    }

    compile(context: Context, module: WasmModule): void {
        super.compile(context.withTypeMap(this.typeMap), module);
    }
}
