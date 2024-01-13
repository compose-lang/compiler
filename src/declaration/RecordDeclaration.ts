import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import IdentifierList from "../builder/IdentifierList.ts";
import FunctionList from "../builder/FunctionList.ts";
import DeclarationBase from "./DeclarationBase.ts";
import Context from "../context/Context.ts";
import Accessibility from "./Accessibility.ts";
import IType from "../type/IType.ts";
import ClassType from "../type/ClassType.ts";
import IFunctionDeclaration from "./IFunctionDeclaration.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import FieldList from "../builder/FieldList.ts";
import IClassMember from "./IClassMember.ts";
import { assertTrue } from "../../deps.ts";
import RecordType from "../type/RecordType.ts";

export default class RecordDeclaration extends DeclarationBase implements IDeclaration {

    attributes: IdentifierList;
    parents: IdentifierList;

    constructor(id: Identifier, attributes: IdentifierList, parents: IdentifierList) {
        super(id);
        this.attributes = attributes;
        this.parents = parents;
    }

    get name(): string {
        return this.id.value;
    }

    register(context: Context): void {
        context.registerRecord(this);
    }

    hasParent(context: Context, parent: Identifier): boolean {
        return this.parents.some(p => p.value == parent.value)
            || this.parents.some(p => context.getRegisteredRecord(p).hasParent(context, parent));
    }

    check(context: Context): IType {
        // TODO this.attributes.forEach(a => a.check(context));
        // TODO this.parents.forEach(p => p.check)
        return new RecordType(this.id, this);
    }

    findMember(context: Context, memberId: Identifier): IClassMember {
        const name = memberId.value;
        const attr = this.attributes.find(a => a.value == name);
        if(attr)
            return context.getRegisteredAttribute(memberId);
        else
            return this.findInheritedMember(context, memberId);
    }


    private findInheritedMember(context: Context, memberId: Identifier) {
        for(let i=0; i<this.parents.length; i++) {
            const parent = context.getRegisteredRecord(this.parents[i]);
            assertTrue(parent);
            const member = parent.findMember(context, memberId);
            if(member)
                return member;
        }
        return null;
    }

}
