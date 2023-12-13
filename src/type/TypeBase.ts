import IType from "./IType";
import Context from "../context/Context";
import IExpression from "../expression/IExpression";
import assert from "assert";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import BinaryOperator from "../expression/BinaryOperator";
import UnaryOperator from "../expression/UnaryOperator";
import CodeFragment from "../builder/CodeFragment";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "../expression/IResult";
import FunctionBody from "../module/FunctionBody";
import {Type} from "../binaryen/binaryen_ts";


export default abstract class TypeBase extends CodeFragment implements IType {

    nullable: boolean;

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
        assert.ok(false); // TODO
    }

    checkMember(context: Context, memberId: Identifier): IType {
        assert.ok(false);
    }

    checkEquals(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

    checkCompare(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkAdd(context, this, false);
        else
            assert.ok(false);
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        if (tryReverse)
            return right.type.compileAdd(context, module, flags, left, right, false);
        else
            assert.ok(false);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assert.ok(false);
    }

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        assert.ok(false);
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        assert.ok(false);
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        assert.ok(false);
    }

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        assert.ok(false);
    }

}
