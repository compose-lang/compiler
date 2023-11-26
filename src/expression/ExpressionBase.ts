import CodeFragment from "../builder/CodeFragment";
import IExpression from "./IExpression";
import Module from "../module/WasmModule";
import Context from "../context/Context";
import FunctionBody from "../module/wasm/FunctionBody";
import IType from "../type/IType";
import assert from "assert";
import CompilerFlags from "../compiler/CompilerFlags";

export default abstract class ExpressionBase extends CodeFragment implements IExpression {

    abstract check(context: Context): IType;

    isConst(context: Context): boolean {
        return false;
    }

    constify(context: Context): IExpression {
        assert.ok(false); // must override if isConst returns true
    }

    abstract declare(context: Context, module: Module): void;

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        assert.ok(false, "Missing rehearse method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        assert.ok(false,  "Missing compile method for " + Object.getPrototypeOf(this).constructor.name);
    }

    compileAssign(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): void {
        assert.ok(false,  "Missing compileAssign method for " + Object.getPrototypeOf(this).constructor.name);
    }

};
