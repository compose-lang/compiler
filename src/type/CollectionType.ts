import NativeType from "./NativeType.ts";
import IType from "./IType.ts";

export default abstract class CollectionType extends NativeType {

    _readOnly: boolean;
    elementType: IType

    constructor(typeName: string, atomicType: IType) {
        super(typeName);
        this.elementType = atomicType;
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


}
