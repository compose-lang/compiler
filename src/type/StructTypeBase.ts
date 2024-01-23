import IType from "./IType.ts";
import Identifier from "../builder/Identifier.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import IValueType from "./IValueType.ts";
import NullType from "./NullType.ts";
import BooleanType from "./BooleanType.ts";
import { FieldType, Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";
import StructDeclarationBase from "../declaration/StructDeclarationBase.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";

export default abstract class StructTypeBase extends UserType implements IValueType {

    nullable = false;
    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get typeName(): string {
        return this.id.value;
    }

    asType(context: Context): Type {
        const gcType = HeapTypeRegistry.instance.getStructGCType(context,  this,  true);
        return gcType.type;
    }

    asTypeInfo(context: Context): TypeInfo {
        return ReflectionRegistry.instance.getAtomicTypeInfo(this);
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

    checkEquals(context: Context, rightType: IType): IType {
        if(this.typeName == rightType.typeName || rightType == NullType.instance)
            return BooleanType.instance;
        else
            return super.checkEquals(context, rightType);
    }

    abstract getDeclaration(context: Context): StructDeclarationBase;

    getFieldTypes(context): FieldType[] {
        return this.getDeclaration(context).getFieldTypes(context);
    }

    getMemberIndex(context: Context, id: Identifier) {
        return this.getDeclaration(context).getMemberIndex(context, id);
    }


}
