import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import IExpression from "../expression/IExpression.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import FunctionBody from "../module/FunctionBody.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { i32, PackedType } from "../binaryen/binaryen_wasm.js";
import UInt32Type from "./UInt32Type.ts";
import Int8Type from "./Int8Type.ts";
import Int32Type from "./Int32Type.ts";

export default class UInt8Type extends IntegerType {

    static instance = new UInt8Type();

    private constructor() {
        super("u8");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt8;
    }

    asType(context: Context): Type {
        return i32;
    }

    packedType(): typeof PackedType {
        return PackedType.Int8;
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right.type instanceof Int8Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: right.type };
        } else if(right.type instanceof UInt8Type) {
            return { ref: module.i32.add(left.ref, right.ref), type: this };
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
    }

    compileEquals(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, left: IResult, right: IResult, reverse: boolean): IResult {
        return UInt32Type.instance.compileEquals(context, module, flags, body, left, right, reverse);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        // TODO factorize
        if(right.type.asType(context) == i32) {
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
        // TODO factorize
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
