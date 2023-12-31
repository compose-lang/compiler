import CodeFragment from "../builder/CodeFragment.ts";
import IExpression from "./IExpression.ts";
import WasmModule from "../module/WasmModule.ts";
import Context from "../context/Context.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IType from "../type/IType.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import { ExpressionRef } from "../binaryen/binaryen_wasm.d.ts";
import { assertTrue } from "../../deps.ts";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    abstract check(context: Context): IType;

    isConst(context: Context): boolean {
        return false;
    }

    constify(context: Context): IExpression {
        assertTrue(false); // must override if isConst returns true
    }

    abstract declare(context: Context, module: WasmModule): void;

    resolveType(context: Context, type: IType) {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        assertTrue(false, "Missing rehearse method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        assertTrue(false,  "Missing compile method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compileAssign(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, value: ExpressionRef): IResult {
        assertTrue(false,  "Missing compileAssign method for " + Object.getPrototypeOf(this).constructor.name);
    }

};
