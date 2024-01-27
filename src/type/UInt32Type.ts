import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import IExpression from "../expression/IExpression.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import Int32Type from "./Int32Type.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import FunctionBody from "../module/FunctionBody.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i32} from "../binaryen/binaryen_wasm.js";
import Comparator from "../expression/Comparator.ts";
import BooleanType from "./BooleanType.ts";
import NumberType from "./NumberType.ts";

export default class UInt32Type extends IntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt32;
    }

    asType(_context: Context): Type {
        return i32;
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right.type instanceof Int32Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: right.type };
        } else if(right.type instanceof UInt32Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: this };
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
    }

    compileSubtract(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult): IResult {
        if(right.type instanceof Int32Type) {
            return { ref: module.i32.sub(left.ref, right.ref), type: right.type };
        } else if(right.type instanceof UInt32Type) {
            return { ref: module.i32.sub(left.ref, right.ref), type: this };
        } else
            return super.compileSubtract(context, module, flags, left, right);
    }

    compileEquals(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, left: IResult, right: IResult, reverse: boolean): IResult {
        // TODO deal with type, size and sign of right type
        const ref = reverse ? module.i32.ne(left.ref, right.ref) : module.i32.eq(left.ref, right.ref);
        return { ref, type: BooleanType.instance };
    }

    compileCompare(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, left: IResult, right: IResult, comparator: Comparator): IResult {
        // TODO deal with type, size and sign of right type
        if(right.type instanceof NumberType) {
            switch(comparator) {
                case Comparator.GT:
                    return { ref: module.i32.gt_u(left.ref, right.ref), type: BooleanType.instance };
                case Comparator.GTE:
                    return { ref: module.i32.ge_u(left.ref, right.ref), type: BooleanType.instance };
                case Comparator.LT:
                    return { ref: module.i32.lt_u(left.ref, right.ref), type: BooleanType.instance };
                case Comparator.LTE:
                    return { ref: module.i32.le_u(left.ref, right.ref), type: BooleanType.instance };
            }
        }
        return super.compileCompare(context, module, flags, body, left, right, comparator);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        if(right.type.asType(context) == i32) {
            switch(operator) {
                case BinaryOperator.LSHIFT:
                    return { ref: module.i32.shl(left.ref, right.ref), type: this };
                case BinaryOperator.RSHIFT:
                case BinaryOperator.URSHIFT:
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
                */
            case UnaryOperator.POST_INC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const type = value.type;
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                const result = module.i32.add(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType(context)), type};
            }
                /*
            case UnaryOperator.POST_DEC:
                expression.compile(context, module, body);
                expression.compile(context, module, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_SUB);
                expression.compileAssign(context, module, body);
                return this; */
            case UnaryOperator.BIT_NOT: {
                const result = expression.compile(context, module, flags, body);
                const ref = module.i32.xor(result.ref, module.i32.const(-1));
                return { ref, type: this };
            }
            default:
                return super.compileUnaryOperator(context, module, flags, body, expression, operator);
        }
    }



}
