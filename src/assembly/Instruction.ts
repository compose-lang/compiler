import OpCode from "../compiler/OpCode.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import ComposeLexer from "../parser/ComposeLexer.ts";
import {ExpressionRef} from "../binaryen/binaryen_ts.ts";
import {assert} from "../../deps.ts";

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): ExpressionRef {
        const fn = this.locateModuleFunction(module);
        const args = this.expressions.map(exp => exp.compile(context, module, flags, body)).map(res => res.ref);
        return fn.apply(null, args);
    }

    locateModuleFunction(module: WasmModule): Function {
        const name = OpCode[this.opcode];
        const token = ComposeLexer[name as keyof typeof ComposeLexer] as number;
        let literal = ComposeLexer.literalNames[token];
        assert(literal)
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
