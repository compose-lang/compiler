import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";
import Context from "../context/Context";
import Module from "../module/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import CompilerFlags from "../compiler/CompilerFlags";

export default class Instruction {

    expressions: IExpression[];
    opcode: OpCode;
    variants: number[];

    constructor(expressions: IExpression[], opcode: OpCode, variants: number[]) {
        this.expressions = expressions;
        this.opcode = opcode;
        this.variants = variants;
    }

    check(context: Context): void {
        this.expressions.forEach(e => e.check(context), this);
    }

    declare(context: Context, module: Module): void {
        this.expressions.forEach(e => e.declare(context, module), this);
    }

    rehearse(context: Context, module: Module, body: FunctionBody) {
        this.expressions.forEach(e => e.rehearse(context, module, body), this);
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody) {
        this.expressions.forEach(e => e.compile(context, module, flags, body), this);
        body.addOpCode(this.opcode, this.variants);
    }
}
