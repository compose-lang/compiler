import TypeInfo from "./TypeInfo.ts"

export default class ArrayInfo extends TypeInfo {

    _elementType: TypeInfo
    constructor(typeIndex: number, elementType: TypeInfo) {
        super(typeIndex, "Array<" + elementType.name + ">");
    }
    get elementType(): TypeInfo {
        return this._elementType;
    }
}
