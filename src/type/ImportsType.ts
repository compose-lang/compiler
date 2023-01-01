import IType from "./IType";
import WasmModule from "../module/WasmModule";
import IWasmTarget from "../compiler/IWasmTarget";
import FunctionBody from "../module/FunctionBody";
import * as assert from "assert";
import Context from "../context/Context";
import Identifier from "../builder/Identifier";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";

export default class ImportsType extends Map<string, IFunctionDeclaration> implements IType {

    nullable = false;
    typeName: string;

    constructor(id: Identifier) {
        super();
        this.typeName = "imports<" + id.value + ">";
    }

    byteLength(): number {
        assert.ok(false); // should never get there
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        assert.ok(false); // should never get there
    }

    prepareContext(context: Context): Context {
        return context.newImportsContext(this);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        assert.ok(false); // should never get there
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assert.ok(false); // should never get there
    }

    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType {
        assert.ok(false); // should never get there
    }

    count(): number {
        assert.ok(false); // should never get there
    }

    writeTo(target: IWasmTarget): void {
        assert.ok(false); // should never get there
    }

}