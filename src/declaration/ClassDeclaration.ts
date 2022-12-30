import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IdentifierList from "../builder/IdentifierList";
import FunctionList from "../builder/FunctionList";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";
import Accessibility from "./Accessibility";
import IType from "../type/IType";
import ClassType from "../type/ClassType";
import IFunctionDeclaration from "./IFunctionDeclaration";
import WasmModule from "../module/WasmModule";

export default class ClassDeclaration extends DeclarationBase implements IDeclaration {

    accessibility: Accessibility;
    attributes: IdentifierList;
    parents: IdentifierList;
    functions: FunctionList;
    abstract: boolean;

    constructor(accessibility: Accessibility, id: Identifier, attributes: IdentifierList, parents: IdentifierList, functions: FunctionList, abstract: boolean) {
        super(id);
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.attributes = attributes;
        this.parents = parents;
        this.functions = functions;
        this.abstract = abstract;
        this.functions.forEach(f => f.parentClass = this);
    }

    get name(): string {
        return this.id.value;
    }

    register(context: Context): void {
        context.registerClass(this);
    }

    check(context: Context): IType {
        // this.attributes.forEach(a => a.check(context));
        // this.parents.forEach(p => p.check)
        return new ClassType(this.id, this);
    }

    declare(context: Context, module: WasmModule): void {
        this.functions.forEach(f => f.declare(context, module));
    }

    collectInstanceFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => !f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.type().toString(), f));
    }

    collectStaticFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.type().toString(), f));
    }
}
