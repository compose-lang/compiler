import CodeFragment from "../builder/CodeFragment";
import IDataType from "./IDataType";
import IWasmTarget from "../compiler/IWasmTarget";

export default abstract class NativeType extends CodeFragment implements IDataType {

    typeName: string;

    protected constructor(typeName: string) {
        super();
        this.typeName = typeName;
    }

    toString() {
        return this.typeName;
    }

    byteLength(): number {
        return 1;
    }

    abstract writeTo(target: IWasmTarget): void;

}
