import NativeType from "./NativeType";
import IType from "./IType";
import Context from "../context/Context";
import IValueType from "./IValueType";
import NumberPrecedence from "./NumberPrecedence";
import WasmModule from "../module/WasmModule";
import BooleanType from "./BooleanType";
import IResult from "../expression/IResult";
import CompilerFlags from "../compiler/CompilerFlags";

export default abstract class NumberType extends NativeType implements IValueType {

    abstract get precedence(): NumberPrecedence;

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

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if(right instanceof NumberType) {
            const resultType = NumberType.bestType(this, right);
            return resultType.compileAdd(context, module, flags, left, right, tryReverse);
        } else
            return super.compileAdd(context, module, flags, left, right, tryReverse);
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
