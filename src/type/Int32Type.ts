import IntegerType from "./IntegerType";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import BinaryOperator from "../expression/BinaryOperator";
import UInt32Type from "./UInt32Type";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";
import binaryen from "binaryen";
import IExpression from "../expression/IExpression";
import FunctionBody from "../module/FunctionBody";
import UnaryOperator from "../expression/UnaryOperator";
import ExpressionRef = binaryen.ExpressionRef;

export default class Int32Type extends IntegerType {

    static instance = new Int32Type();

    private constructor() {
        super("i32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.Int32;
    }

    asType(): number {
        return binaryen.i32;
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

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {

        switch (operator) {
            case UnaryOperator.PRE_INC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const result = module.i32.add(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType()), type: value.type};
            }
            case UnaryOperator.PRE_DEC: {
                const refs: number[] = [];
                let value = expression.compile(context, module, flags, body);
                const result = module.i32.sub(value.ref, module.i32.const(1));
                value = expression.compileAssign(context, module, flags, body, result);
                refs.push(value.ref);
                value = expression.compile(context, module, flags, body);
                refs.push(value.ref);
                return {ref: module.block(null, refs, value.type.asType()), type: value.type};
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
                return {ref: module.block(null, refs, value.type.asType()), type};
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
                return {ref: module.block(null, refs, value.type.asType()), type};
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
