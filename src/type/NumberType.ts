import NativeType from "./NativeType";
import IType from "./IType";
import Context from "../context/Context";
import IDataType from "./IDataType";

export default abstract class NumberType extends NativeType implements IDataType {

    abstract sizeof(): number;

    alignof(): number {
        return 4;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof NumberType;
    }

}
