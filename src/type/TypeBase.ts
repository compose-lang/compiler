import IType from "./IType.ts";
import Context from "../context/Context.ts";
import IExpression from "../expression/IExpression.ts";
import Identifier from "../builder/Identifier.ts";
import WasmModule from "../module/WasmModule.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import CodeFragment from "../builder/CodeFragment.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import FunctionBody from "../module/FunctionBody.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assert} from "../../deps.ts";


export default abstract class TypeBase extends CodeFragment implements IType {

    nullable: boolean = false;

    abstract get typeName(): string;

    abstract count(): number;

    abstract asType(): Type;

    isAssignableFrom(context: Context, type: IType): boolean {
        return type === this;
    }

    prepareContext(context: Context): Context {
        return context;
    }

    abstract defaultValue(): IExpression;

    convertExpression(context: Context, expression: IExpression): IExpression {
        const type = expression.check(context);
        if(type == this)
            return expression;
        else
            return this.convertTypedExpression(type, expression);
    }

    convertTypedExpression(type: IType, expression: IExpression): IExpression {
        assert(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        assert(false);
    }

    checkEquals(context: Context, rightType: IType): IType {
        assert(false);
    }

    checkCompare(context: Context, rightType: IType): IType {
        assert(false);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkAdd(context, this, false);
        else
            assert(false);
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if (tryReverse)
            return right.type.compileAdd(context, module, flags, left, right, false);
        else
            assert(false);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assert(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assert(false);
    }

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        assert(false);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        assert(false);
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        assert(false);
    }

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        assert(false);
    }

}
