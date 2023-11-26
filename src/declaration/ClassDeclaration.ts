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
import WasmModule from "../module/wasm/WasmModule";
import CompilationUnit from "../compiler/CompilationUnit";
import FieldList from "../builder/FieldList";
import IClassMember from "./IClassMember";
import * as assert from "assert";

export default class ClassDeclaration extends DeclarationBase implements IDeclaration {

    accessibility: Accessibility;
    attributes: IdentifierList;
    parents: IdentifierList;
    fields: FieldList;
    functions: FunctionList;
    abstract: boolean;

    constructor(accessibility: Accessibility, isAbstract: boolean, id: Identifier, attributes: IdentifierList, parents: IdentifierList, fields: FieldList, functions: FunctionList) {
        super(id);
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.abstract = isAbstract;
        this.attributes = attributes;
        this.parents = parents;
        this.fields = fields;
        this.functions = functions;
        this.functions.forEach(f => f.parentClass = this);
    }

    get name(): string {
        return this.id.value;
    }

    set unit(unit: CompilationUnit) {
        this._unit = unit;
        this.functions.forEach(f => f.unit = unit);
    }

    register(context: Context): void {
        context.registerClass(this);
    }

    hasParent(context: Context, parent: Identifier): boolean {
        return this.parents.some(p => p.value == parent.value)
            || this.parents.some(p => context.getRegisteredClass(p).hasParent(context, parent));
    }

    check(context: Context): IType {
        // this.attributes.forEach(a => a.check(context));
        // this.parents.forEach(p => p.check)
        // this.fields.forEach(p => p.check)
        // this.functions.forEach(p => p.check)
        return new ClassType(this.id, this);
    }

    declare(context: Context, module: WasmModule): void {
        this.functions.forEach(f => f.declare(context, module));
    }

    collectInstanceFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
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
        const attr = this.attributes.find(a => a.value == name);
        if(attr)
            return context.getRegisteredAttribute(memberId);
        else
            return this.findInheritedMember(context, memberId);
    }


    private findInheritedMember(context: Context, memberId: Identifier) {
        for(let i=0; i<this.parents.length; i++) {
            const parent = context.getRegisteredClass(this.parents[i]);
            assert.ok(parent);
            const member = parent.findMember(context, memberId);
            if(member)
                return member;
        }
        return null;
    }

}
