import NativeType from "./NativeType";
import IType from "./IType";
import Context from "../context/Context";

export default abstract class NumberType extends NativeType {

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof NumberType;
    }
}
