import IntegerType from "./IntegerType.ts";
import NumberPrecedence from "./NumberPrecedence.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import IExpression from "../expression/IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { i32, PackedType } from "../binaryen/binaryen_wasm.js";
import Int32Type from "./Int32Type.ts";

export default class Int8Type extends IntegerType {

    static instance = new Int8Type();

    private constructor() {
        super("i8");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int8;
    }

    asType(context: Context): Type {
        return i32;
    }

    packedType(): typeof PackedType {
        return PackedType.Int8;
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right.type instanceof IntegerType && right.type.precedence <= NumberPrecedence.Int8) {
            return { ref: module.i32.add(left.ref, right.ref), type: this };
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        // TODO factorize
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

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        // TODO factorize
        switch (operator) {
            case UnaryOperator.PRE_INC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const result = module.i32.add(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType(context)), type: value.type};
            }
            case UnaryOperator.PRE_DEC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const result = module.i32.sub(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType(context)), type: value.type};
            }
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
            case UnaryOperator.POST_DEC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const type = value.type;
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                const result = module.i32.sub(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType(context)), type};
            }
            case UnaryOperator.BIT_NOT: {
                const value = expression.compile(context, module, flags, body);
                const ref = module.i32.xor(value.ref, module.i32.const(1));
                return {ref, type: this};
            }
            default:
                return super.compileUnaryOperator(context, module, flags, body, expression, operator);
        }
    }



}
