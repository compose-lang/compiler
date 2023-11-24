import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import IType from "./IType";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";
import UnaryOperator from "../expression/UnaryOperator";
import BinaryOperator from "../expression/BinaryOperator";
import LEB128 from "../utils/LEB128";
import UInt32Type from "./UInt32Type";
import CompilerFlags from "../compiler/CompilerFlags";

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

    compileAdd(context: Context, module: WasmModule, body: FunctionBody, leftType: IType, rightType: IType, tryReverse: boolean): IType {
        if(rightType instanceof Int32Type || rightType instanceof UInt32Type) {
            body.addOpCode(OpCode.I32_ADD);
            return this;
        } else
            return super.compileAdd(context, module, body, leftType, rightType, tryReverse);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, rightType: IType, operator: BinaryOperator): IType {
        if(rightType instanceof Int32Type) {
            switch(operator) {
                case BinaryOperator.LSHIFT:
                    body.addOpCode(OpCode.I32_SHL);
                    return this;
                case BinaryOperator.RSHIFT:
                    body.addOpCode(OpCode.I32_SHR_S);
                    return this;
                case BinaryOperator.BIT_AND:
                    body.addOpCode(OpCode.I32_AND);
                    return this;
                case BinaryOperator.BIT_OR:
                    body.addOpCode(OpCode.I32_OR);
                    return this;
                case BinaryOperator.BIT_XOR:
                    body.addOpCode(OpCode.I32_XOR);
                    return this;
            }
        }
        return super.compileBinaryBitsOperator(context, module, flags, body, rightType, operator);
    }

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IType {
        let bytes: number[] = null;
        switch(operator) {
            case UnaryOperator.PRE_INC:
                expression.compile(context, module, flags, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_ADD);
                expression.compileAssign(context, module, flags, body);
                expression.compile(context, module, flags, body);
                return this;
            case UnaryOperator.PRE_DEC:
                expression.compile(context, module, flags, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_SUB);
                expression.compileAssign(context, module, flags, body);
                expression.compile(context, module, flags, body);
                return this;
            case UnaryOperator.POST_INC:
                expression.compile(context, module, flags, body);
                expression.compile(context, module, flags, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_ADD);
                expression.compileAssign(context, module, flags, body);
                return this;
            case UnaryOperator.POST_DEC:
                expression.compile(context, module, flags, body);
                expression.compile(context, module, flags, body);
                body.addOpCode(OpCode.I32_CONST, [1]);
                body.addOpCode(OpCode.I32_SUB);
                expression.compileAssign(context, module, flags, body);
                return this;
            case UnaryOperator.BIT_NOT:
                expression.compile(context, module, flags, body);
                bytes = [];
                LEB128.emitSigned(-1, byte => bytes.push(byte))
                body.addOpCode(OpCode.I32_CONST, bytes);
                body.addOpCode(OpCode.I32_XOR);
                return this;
            default:
                return super.compileUnaryOperator(context, module, flags, body, expression, operator);
        }
    }



}
