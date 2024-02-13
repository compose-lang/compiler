import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import IdentifierList from "../builder/IdentifierList.ts";
import FunctionList from "../builder/FunctionList.ts";
import Context from "../context/Context.ts";
import Accessibility from "./Accessibility.ts";
import IType from "../type/IType.ts";
import ClassType from "../type/ClassType.ts";
import IFunctionDeclaration from "./IFunctionDeclaration.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import FieldList from "../builder/FieldList.ts";
import StructDeclarationBase from "./StructDeclarationBase.ts";
import GenericsId from "../builder/GenericsId.ts";

export default class ClassDeclaration extends StructDeclarationBase implements IDeclaration {

    abstract: boolean;
    accessibility: Accessibility;
    functions: FunctionList;
    genericId: GenericsId;

    constructor(accessibility: Accessibility, isAbstract: boolean, id: GenericsId, attributes: IdentifierList, parents: GenericsId[], fields: FieldList, functions: FunctionList) {
        super(id, attributes, parents, fields);
        this.abstract = isAbstract;
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.functions = functions;
        if(functions)
            this.functions.forEach(f => f.parentClass = this);
        this.genericId = id;
    }

    getIType(_context: Context) {
        return new ClassType(this.id, this);
    }
    set unit(unit: CompilationUnit) {
        this._unit = unit;
        this.functions.forEach(f => f.unit = unit);
    }

    register(context: Context): void {
        context.registerClass(this);
    }

    check(_context: Context): IType {
        // this.attributes.forEach(a => a.check(context));
        // this.parents.forEach(p => p.check)
        // this.fields.forEach(p => p.check)
        // this.functions.forEach(p => p.check)
        return new ClassType(this.id, this);
    }

    declare(context: Context, module: WasmModule): void {
        // prevent reentrance and duplicates
        if(module.declareClass(this))
            this.functions.filter(f => f.name !== "constructor").forEach(f => f.declare(context, module));
    }

    collectMemberFunctions(context: Context, id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => !f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.functionType(context).toString(), f));
    }

    collectStaticFunctions(context: Context, id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.functionType(context).toString(), f));
    }

}
