import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import assert from "assert";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    abstract check(context: Context): IType;
    abstract declare(context: Context, module: WasmModule): void;
    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false);
    }
    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        assert.ok(false);
    }

};
