import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import StructType from "./StructType.ts";

export default class ClassType extends StructType implements IValueType {

    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super(id);
        this.klass = klass || null;
    }

    getClass(context: Context): ClassDeclaration {
        this.ensureClass(context);
        return this.klass;
    }

    checkMember(context: Context, memberId: Identifier): IType {
        this.ensureClass(context);
        const member = this.klass.findMember(context, memberId);
        assertTrue(member);
        return member.type;
    }

    private ensureClass(context: Context) {
        if(!this.klass) {
            this.klass = context.getRegisteredClass(this.id);
            assertTrue(this.klass, "Cannot find class '" + this.id.value + "'");
        }
    }
}
