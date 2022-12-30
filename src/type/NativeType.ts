import CodeFragment from "../builder/CodeFragment";
import IDataType from "./IDataType";
import IWasmTarget from "../compiler/IWasmTarget";
import IType from "./IType";
import Context from "../context/Context";
import * as assert from "assert";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

export default abstract class NativeType extends CodeFragment {

    nullable = false;
    typeName: string;

    protected constructor(typeName: string) {
        super();
        this.typeName = typeName;
    }

    toString() {
        return this.typeName;
    }

    count(): number {
        return 1;
    }

    byteLength(): number {
        return 1;
    }

    abstract writeTo(target: IWasmTarget): void;

    isAssignableFrom(context: Context, type: IType): boolean {
        return type === this;
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        assert.ok(false);
    }

    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType {
        if(tryReverse)
            return rightType.compileAdd(context, this, module, body, false);
        else
            assert.ok(false);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

}
