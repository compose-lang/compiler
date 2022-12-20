import CodeFragment from "../builder/CodeFragment";
import IDataType from "./IDataType";
import IWasmTarget from "../compiler/IWasmTarget";
import IType from "./IType";

export default abstract class NativeType extends CodeFragment implements IDataType {

    nullable = false;
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

    isAssignableFrom(type: IType): boolean {
        return type === this;
    }

}
