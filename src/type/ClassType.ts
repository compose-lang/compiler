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

    sizeof(): number {
        assert.ok(false); // TODO
    }

    alignof(): number {
        assert.ok(false); // TODO
    }

    offsetof(member: Identifier): number {
        assert.ok(false); // TODO
    }

    count(): number {
        assert.ok(false); // TODO
    }

    byteLength(): number {
        assert.ok(false); // TODO
    }

    writeTo(target: IWasmTarget): void {
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
            assert.ok(this.klass);
        }
   }
}
