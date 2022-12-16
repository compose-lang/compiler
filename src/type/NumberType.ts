import NativeType from "./NativeType";
import IType from "./IType";

export default abstract class NumberType extends NativeType {

    isAssignableFrom(type: IType): boolean {
        return type instanceof NumberType;
    }
}
