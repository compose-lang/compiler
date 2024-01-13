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
import StructTypeBase from "./StructTypeBase.ts";
import StructDeclarationBase from "../declaration/StructDeclarationBase.ts";

export default class ClassType extends StructTypeBase implements IValueType {

    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super(id);
        this.klass = klass || null;
    }

    getDeclaration(context: Context): ClassDeclaration {
        this.ensureDeclaration(context);
        return this.klass;
    }

    checkMember(context: Context, memberId: Identifier): IType {
        this.ensureDeclaration(context);
        const member = this.klass.findMember(context, memberId);
        assertTrue(member);
        return member.type;
    }

    private ensureDeclaration(context: Context) {
        if(!this.klass) {
            this.klass = context.getRegisteredClass(this.id);
            assertTrue(this.klass, "Cannot find class '" + this.id.value + "'");
        }
    }
}
