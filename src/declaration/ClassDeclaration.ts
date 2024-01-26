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
import IClassMember from "./IClassMember.ts";
import StructDeclarationBase from "./StructDeclarationBase.ts";

export default class ClassDeclaration extends StructDeclarationBase implements IDeclaration {

    accessibility: Accessibility;
    fields: FieldList;
    functions: FunctionList;
    abstract: boolean;

    constructor(accessibility: Accessibility, isAbstract: boolean, id: Identifier, attributes: IdentifierList, parents: IdentifierList, fields: FieldList, functions: FunctionList) {
        super(id, attributes, parents);
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.abstract = isAbstract;
        this.fields = fields;
        this.functions = functions;
        this.functions.forEach(f => f.parentClass = this);
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
            this.functions.forEach(f => f.declare(context, module));
    }

    collectMemberFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => !f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.functionType().toString(), f));
    }

    collectStaticFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        this.functions.filter(f => f.isStatic).filter(f => f.name == id.value).forEach(f => map.set(f.functionType().toString(), f));
    }

    findMember(context: Context, memberId: Identifier): IClassMember {
        const name = memberId.value;
        const field = this.fields.find(f => f.name == name) || null;
        if(field)
            return field;
        else
            return super.findMember(context, memberId);
    }

}
