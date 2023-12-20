import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import {Type} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";


export default class ArrayType extends CollectionType {

    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assert(false); // TODO
    }

    asType(): Type {
        const types = HeapTypeRegistry.instance.getArrayType(this.elementType.asType(), true);
        return types[0];
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof ArrayType && this.elementType.isAssignableFrom(context, type.elementType);
    }
}
