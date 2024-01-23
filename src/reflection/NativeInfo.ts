import TypeInfo from "./TypeInfo.ts";

export default class NativeInfo extends TypeInfo {

    readonly nativeType: number;

    constructor(typeIndex: number, name: string, nativeType: number) {
        super(typeIndex, name);
        this.nativeType = nativeType;
    }
}
