import NativeType from "./NativeType.ts";
import IType from "./IType.ts";

export default abstract class CollectionType extends NativeType {

    elementType: IType

    constructor(typeName: string, atomicType: IType) {
        super(typeName);
        this.elementType = atomicType;
    }
}
