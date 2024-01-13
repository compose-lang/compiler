import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import RecordDeclaration from "../declaration/RecordDeclaration.ts";
import StructType from "./StructType.ts";

export default class RecordType extends StructType implements IValueType {

    record: RecordDeclaration;

    constructor(id: Identifier, record?: RecordDeclaration) {
        super(id);
        this.record = record || null;
    }

    getRecord(context: Context): RecordDeclaration {
        this.ensureRecord(context);
        return this.record;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(type == NullType.instance || type.typeName == this.typeName)
            return true;
        else
            assertTrue(false); // TODO
    }

    prepareContext(context: Context): Context {
        assertTrue(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        this.ensureRecord(context);
        const member = this.record.findMember(context, memberId);
        assertTrue(member);
        return member.type;
    }

     private ensureRecord(context: Context) {
        if(!this.record) {
            this.record = context.getRegisteredRecord(this.id);
            assertTrue(this.record, "Cannot find record '" + this.id.value + "'");
        }
    }
}
