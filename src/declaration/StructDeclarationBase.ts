import IDeclaration from "./IDeclaration.ts";
import Identifier from "../builder/Identifier.ts";
import IdentifierList from "../builder/IdentifierList.ts";
import DeclarationBase from "./DeclarationBase.ts";
import Context from "../context/Context.ts";
import IClassMember from "./IClassMember.ts";
import { assertTrue } from "../../deps.ts";
import StructTypeBase from "../type/StructTypeBase.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {PackedType} from "../binaryen/binaryen_wasm.js";
import { FieldType } from "../binaryen/binaryen_wasm.d.ts";
import FieldList from "../builder/FieldList.ts";

export default abstract class StructDeclarationBase extends DeclarationBase implements IDeclaration {

    attributes: IdentifierList;
    parents: IdentifierList;
    fields: FieldList;

    constructor(id: Identifier, attributes: IdentifierList, parents: IdentifierList, fields: FieldList) {
        super(id);
        this.attributes = attributes;
        this.parents = parents;
        this.fields = fields;
    }

    get name(): string {
        return this.id.value;
    }

    abstract getIType(context: Context): StructTypeBase;

    hasParent(context: Context, parent: Identifier): boolean {
        return this.parents.some(p => p.value == parent.value)
            || this.parents.some(p => context.getRegisteredStructBase(p).hasParent(context, parent));
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

    getMemberIndex(context: Context, memberId: Identifier) {
        const name = memberId.value;
        return this.attributes.findIndex(a => a.value == name);
    }


    private findInheritedMember(context: Context, memberId: Identifier) {
        for(let i=0; i<this.parents.length; i++) {
            const parent = context.getRegisteredStructBase(this.parents[i]);
            assertTrue(parent);
            const member = parent.findMember(context, memberId);
            if(member)
                return member;
        }
        return null;
    }

    getFieldTypes(context: Context) {
        const fieldTypes: FieldType[] = [];
        const namesSet = new Set<string>();
        this._collectFieldTypes(context,  fieldTypes, namesSet);
        return fieldTypes;
    }
    private _collectFieldTypes(context: Context, fieldTypes: FieldType[], namesSet: Set<string>) {
        this._collectParentFieldTypes(context, fieldTypes, namesSet);
        this._collectLocalFieldTypes(context, fieldTypes, namesSet);
    }

    private _collectParentFieldTypes(context: Context, fieldTypes: FieldType[], namesSet: Set<string>) {
        if (this.parents) {
            this.parents.forEach(parent => {
                const decl = context.getRegisteredStructBase(parent);
                decl._collectFieldTypes(context, fieldTypes, namesSet);
            });
        }
    }

    private _collectLocalFieldTypes(context: Context, fieldTypes: FieldType[], namesSet: Set<string>) {
        if (this.attributes) {
            this.attributes
                .filter(attr => !namesSet.has(attr.value))
                .forEach(attr => {
                    namesSet.add(attr.value);
                    const decl = context.getRegisteredAttribute(attr);
                    const fieldType = { type: decl.type.asType(context), packedType: PackedType.NotPacked, mutable: true }; // TODO support readonly attributes
                    fieldTypes.push(fieldType);
                });
        }
        if (this.fields) {
            this.fields
                .filter(field => !namesSet.has(field.name))
                .forEach(field => {
                    namesSet.add(field.name);
                    const fieldType = { type: field.type.asType(context), packedType: PackedType.NotPacked, mutable: !field.type.isReadOnly };
                    fieldTypes.push(fieldType);
                });

        }
    }
}
