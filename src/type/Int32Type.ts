import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IExpression from "../expression/IExpression";
import UnaryOperator from "../expression/UnaryOperator";
import BinaryOperator from "../expression/BinaryOperator";
import UInt32Type from "./UInt32Type";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";

export default class Int32Type extends IntegerType {

    static instance = new Int32Type();

    private constructor() {
        super("i32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right.type instanceof Int32Type || right.type instanceof UInt32Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: this };
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        if(right.type instanceof Int32Type) {
            switch(operator) {
                case BinaryOperator.LSHIFT:
                    return { ref: module.i32.shl(left.ref, right.ref), type: this };
                case BinaryOperator.RSHIFT:
                    return { ref: module.i32.shr_s(left.ref, right.ref), type: this };
                case BinaryOperator.BIT_AND:
                    return { ref: module.i32.and(left.ref, right.ref), type: this };
                case BinaryOperator.BIT_OR:
                    return { ref: module.i32.or(left.ref, right.ref), type: this };
                case BinaryOperator.BIT_XOR:
                    return { ref: module.i32.xor(left.ref, right.ref), type: this };
            }
        }
        return super.compileBinaryBitsOperator(context, module, flags, left, right, operator);
    }

    /*
    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        switch(operator) {
            case UnaryOperator.PRE_INC:
            {
                const value = expression.compile(context, module, flags);
                const ref = module.i32.add(value.ref, module.i32.const(1));
                expression.compileAssign(context, module, flags, body, { ref, type: this });
                return expression.compile(context, module, flags);
            }
            case UnaryOperator.PRE_DEC:
            {
                const value = expression.compile(context, module, flags);
                const ref = module.i32.sub(value.ref, module.i32.const(1));
                expression.compileAssign(context, module, flags, body, { ref, type: this });
                return expression.compile(context, module, flags);
            }
            case UnaryOperator.POST_INC:
            {
                const result = expression.compile(context, module, flags);
                const value = expression.compile(context, module, flags);
                const ref = module.i32.add(value.ref, module.i32.const(1));
                expression.compileAssign(context, module, flags, body, {ref, type: this});
                return result;
            }
            case UnaryOperator.POST_DEC:
            {
                const result = expression.compile(context, module, flags);
                const value = expression.compile(context, module, flags);
                const ref = module.i32.sub(value.ref, module.i32.const(1));
                expression.compileAssign(context, module, flags, body, {ref, type: this});
                return result;
            }
            case UnaryOperator.BIT_NOT:
            {
                const value = expression.compile(context, module, flags);
                const ref = module.i32.xor(value.ref, module.i32.const(1));
                return { ref, type: this };
            }
            default:
                return super.compileUnaryOperator(context, module, flags, body, expression, operator);
        }
    }
    */


}
