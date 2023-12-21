import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";

export default class ClassType extends UserType implements IValueType {

    nullable = false;
    id: Identifier;
    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super();
        this.id = id;
        this.klass = klass || null;
    }

    get typeName(): string {
        return this.id.value;
    }

    getClass(context: Context): ClassDeclaration {
        this.ensureClass(context);
        return this.klass;
    }

    count(): number {
        assert(false); // TODO
    }

    asType(): Type {
        assert(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(type == NullType.instance || type.typeName == this.typeName)
            return true;
        else
            assert(false); // TODO
    }

    prepareContext(context: Context): Context {
        assert(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        this.ensureClass(context);
        const member = this.klass.findMember(context, memberId);
        assert(member);
        return member.type;
    }

    checkEquals(context: Context, rightType: IType): IType {
        if(this.typeName == rightType.typeName || rightType == NullType.instance)
            return BooleanType.instance;
        else
            return super.checkEquals(context, rightType);
    }

    private ensureClass(context: Context) {
        if(!this.klass) {
            this.klass = context.getRegisteredClass(this.id);
            assert(this.klass, "Cannot find class '" + this.id.value + "'");
        }
   }
}
