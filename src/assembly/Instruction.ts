import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import CompilerFlags from "../compiler/CompilerFlags";
import binaryen from "binaryen";
import ComposeLexer from "../parser/ComposeLexer";

export interface IIndexable {
    [key: string]: any;
}

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags): binaryen.ExpressionRef {
        const fn = this.locateModuleFunction(module);
        const args = this.expressions.map(exp => exp.compile(context, module, flags)).map(res => res.ref);
        return fn.apply(null, args);
    }

    locateModuleFunction(module: WasmModule): Function {
        const name = OpCode[this.opcode];
        const token = ComposeLexer[name as keyof typeof ComposeLexer] as number;
        let literal = ComposeLexer.literalNames[token];
        literal = literal.substring(1, literal.length - 1)
        const parts = literal.split("\.");
        let source = module as IIndexable;
        for(;;) {
            const part = parts.splice(0, 1)[0];
            const member = source[part];
            if(parts.length == 0)
                return member as Function;
            else
                source = member as IIndexable;
        }
    }
}
