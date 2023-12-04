import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import UserType from "./UserType";
import ClassDeclaration from "../declaration/ClassDeclaration";
import IValueType from "./IValueType";
import * as assert from "assert";
import NullType from "./NullType";
import BooleanType from "./BooleanType";
import binaryen from "binaryen";
import Type = binaryen.Type;

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
        assert.ok(false); // TODO
    }

    asType(): Type {
        assert.ok(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(type == NullType.instance || type.typeName == this.typeName)
            return true;
        else
            assert.ok(false); // TODO
    }

    prepareContext(context: Context): Context {
        assert.ok(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        this.ensureClass(context);
        const member = this.klass.findMember(context, memberId);
        assert.ok(member);
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
            assert.ok(this.klass, "Cannot find class '" + this.id.value + "'");
        }
   }
}
