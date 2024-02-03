import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import IValueType from "./IValueType.ts";
import StructTypeBase from "./StructTypeBase.ts";
import { assertTrue } from "../platform/deno/AssertUtils.ts";

export default class ClassType extends StructTypeBase implements IValueType {

    _readOnly: boolean;
    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super(id);
        this.klass = klass || null;
    }

    get isReadOnly(): boolean {
        return this._readOnly;
    }

    set isReadOnly(value: boolean) {
        this._readOnly = value;
    }

    isMutable(): boolean {
        return true;
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
