import NativeType from "./NativeType";
import IType from "./IType";

export default abstract class CollectionType extends NativeType {

    elementType: IType

    constructor(typeName: string, atomicType: IType) {
        super(typeName);
        this.elementType = atomicType;
    }
}
