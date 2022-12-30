import NativeType from "./NativeType";
import IType from "./IType";
import Context from "../context/Context";
import IDataType from "./IDataType";

export default abstract class NumberType extends NativeType implements IDataType {

    abstract sizeof(): number;

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof NumberType;
    }

}
