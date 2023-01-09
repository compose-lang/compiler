import IntegerType from "./IntegerType";
import IWasmTarget from "../compiler/IWasmTarget";
import NumberPrecedence from "./NumberPrecedence";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IType from "./IType";
import BinaryOperator from "../expression/BinaryOperator";
import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";
import UnaryOperator from "../expression/UnaryOperator";
import LEB128 from "../utils/LEB128";

export default class UInt32Type extends IntegerType {

    static instance = new UInt32Type();

    private constructor() {
        super("u32");
    }

    get precedence(): NumberPrecedence {
        return NumberPrecedence.UInt32;
    }

    sizeof(): number {
        return 4;
    }

    writeTo(target: IWasmTarget): void {
        target.writeUInts(0x7F);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, body: FunctionBody, rightType: IType, operator: BinaryOperator): IType {
        if(rightType instanceof UInt32Type) {
            switch(operator) {
                case BinaryOperator.RSHIFT:
                    body.addOpCode(OpCode.I32_SHR_U);
                    return this;
                case BinaryOperator.BIT_AND:
                    body.addOpCode(OpCode.I32_AND);
                    return this;
            }
        }
        return super.compileBinaryBitsOperator(context, module, body, rightType, operator);
    }

    compileUnaryOperator(context: Context, module: WasmModule, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IType {
        let bytes: number[] = null;
        switch(operator) {
            /*
            case UnaryOperator.PRE_INC:
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
                return this;
             */
            case UnaryOperator.BIT_NOT:
                expression.compile(context, module, body);
                bytes = [];
                LEB128.emitSigned(-1, byte => bytes.push(byte))
                body.addOpCode(OpCode.I32_CONST, bytes);
                body.addOpCode(OpCode.I32_XOR);
                return this;
            default:
                return super.compileUnaryOperator(context, module, body, expression, operator);
        }
    }



}
