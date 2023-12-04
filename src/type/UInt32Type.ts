import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import IExpression from "../expression/IExpression";
import UnaryOperator from "../expression/UnaryOperator";
import BinaryOperator from "../expression/BinaryOperator";
import Int32Type from "./Int32Type";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";
import binaryen from "binaryen";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";
import Type = binaryen.Type;

export default class UInt32Type extends IntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt32;
    }

    asType(): Type {
        return binaryen.i32;
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right.type instanceof Int32Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: right.type };
        } else if(right.type instanceof UInt32Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: this };
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        if(right.type instanceof UInt32Type) {
            switch(operator) {
                case BinaryOperator.LSHIFT:
                    return { ref: module.i32.shl(left.ref, right.ref), type: this };
                case BinaryOperator.RSHIFT:
                    return { ref: module.i32.shr_u(left.ref, right.ref), type: this };
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

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        switch(operator) {
        /*    case UnaryOperator.PRE_INC:
                expression.compile(context, module, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_ADD);
                expression.compileAssign(context, module, body);
                expression.compile(context, module, body);
                return this;
            case UnaryOperator.PRE_DEC:
                expression.compile(context, module, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_SUB);
                expression.compileAssign(context, module, body);
                expression.compile(context, module, body);
                return this;
            case UnaryOperator.POST_INC:
                expression.compile(context, module, body);
                expression.compile(context, module, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_ADD);
                expression.compileAssign(context, module, body);
                return this;
            case UnaryOperator.POST_DEC:
                expression.compile(context, module, body);
                expression.compile(context, module, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_SUB);
                expression.compileAssign(context, module, body);
                return this; */
            case UnaryOperator.BIT_NOT:
            {
                const result = expression.compile(context, module, flags, body);
                const ref = module.i32.xor(result.ref, module.i32.const(-1));
                return { ref, type: this };
            }
            default:
                return super.compileUnaryOperator(context, module, flags, body, expression, operator);
        }
    }



}
