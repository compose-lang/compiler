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
import {assertTrue} from "../../deps.ts";


export default abstract class TypeBase extends CodeFragment implements IType {

    nullable = false;

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
        assertTrue(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        assertTrue(false);
    }

    checkItem(context: Context, item: IExpression): IType {
        assertTrue(false);
    }

    checkEquals(context: Context, rightType: IType): IType {
        assertTrue(false);
    }

    checkCompare(context: Context, rightType: IType): IType {
        assertTrue(false);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkAdd(context, this, false);
        else
            assertTrue(false);
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if (tryReverse)
            return right.type.compileAdd(context, module, flags, left, right, false);
        else
            assertTrue(false);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assertTrue(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assertTrue(false);
    }

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        assertTrue(false);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        assertTrue(false);
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        assertTrue(false);
    }

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        assertTrue(false);
    }

}
