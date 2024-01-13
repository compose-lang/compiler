import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import StructDeclaration from "../declaration/StructDeclaration.ts";
import StructTypeBase from "./StructTypeBase.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";

export default class StructType extends StructTypeBase implements IValueType {

    struct: StructDeclaration;

    constructor(id: Identifier, struct?: StructDeclaration) {
        super(id);
        this.struct = struct || null;
    }

    getDeclaration(context: Context): StructDeclaration {
        this.ensureDeclaration(context);
        return this.struct;
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
        this.ensureDeclaration(context);
        const member = this.struct.findMember(context, memberId);
        assertTrue(member);
        return member.type;
    }

     private ensureDeclaration(context: Context) {
        if(!this.struct) {
            this.struct = context.getRegisteredStruct(this.id);
            assertTrue(this.struct, "Cannot find record '" + this.id.value + "'");
        }
    }
}
