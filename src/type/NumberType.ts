import NativeType from "./NativeType";
import IType from "./IType";
import Context from "../context/Context";
import IValueType from "./IValueType";
import NumberPrecedence from "./NumberPrecedence";
import WasmModule from "../module/wasm/WasmModule";
import FunctionBody from "../module/wasm/FunctionBody";
import BooleanType from "./BooleanType";

export default abstract class NumberType extends NativeType implements IValueType {

    abstract sizeof(): number;
    abstract get precedence(): NumberPrecedence;

    alignof(): number {
        return 4;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof NumberType;
    }

    checkEquals(context: Context, rightType: IType): IType {
        if(rightType instanceof NumberType)
            return BooleanType.instance;
        else
            return super.checkEquals(context, rightType);
    }

    checkCompare(context: Context, rightType: IType): IType {
        if(rightType instanceof NumberType)
            return BooleanType.instance;
        else
            return super.checkCompare(context, rightType);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType instanceof NumberType)
            return NumberType.bestType(this, rightType);
        else
            return super.checkAdd(context, rightType, tryReverse);
    }

    compileAdd(context: Context, module: WasmModule, body: FunctionBody, leftType: IType, rightType: IType, tryReverse: boolean): IType {
        if(rightType instanceof NumberType) {
            const resultType = NumberType.bestType(this, rightType);
            return resultType.compileAdd(context, module, body, leftType, rightType, tryReverse);
        } else
            return super.compileAdd(context, module, body, leftType, rightType, tryReverse);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        if(rightType instanceof NumberType)
            return NumberType.bestType(this, rightType);
        else
            return super.checkSubtract(context, rightType);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(rightType instanceof NumberType)
            return NumberType.bestType(this, rightType);
        else
            return super.checkMultiply(context, rightType, tryReverse);
    }

    static bestType(type1: NumberType, type2: NumberType): NumberType {
        const prec1 = type1.precedence;
        const prec2 = type2.precedence;
        return prec1 >= prec2 ? type1 : type2;
    }
}
