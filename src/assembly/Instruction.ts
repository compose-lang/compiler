import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

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

    declare(context: Context, module: WasmModule): void {
        this.expressions.forEach(e => e.declare(context, module), this);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.expressions.forEach(e => e.rehearse(context, module, body), this);
    }

    compile(context: Context, module: WasmModule, body: FunctionBody) {
        this.expressions.forEach(e => e.compile(context, module, body), this);
        body.addOpCode(this.opcode, this.variants);
    }
}
