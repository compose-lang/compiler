import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/FunctionBody";
import IType from "../type/IType";
import assert from "assert";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "./IResult";
import binaryen from "binaryen";
import ExpressionRef = binaryen.ExpressionRef;

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    abstract check(context: Context): IType;

    isConst(context: Context): boolean {
        return false;
    }

    constify(context: Context): IExpression {
        assert.ok(false); // must override if isConst returns true
    }

    abstract declare(context: Context, module: WasmModule): void;

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assert.ok(false, "Missing rehearse method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        assert.ok(false,  "Missing compile method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compileAssign(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, value: ExpressionRef): IResult {
        assert.ok(false,  "Missing compileAssign method for " + Object.getPrototypeOf(this).constructor.name);
    }

};
