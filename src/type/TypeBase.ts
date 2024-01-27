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
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { PackedType } from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import Comparator from "../expression/Comparator.ts";
// can't use index.ts here because MissingType needs TypeBase
let MissingType: typeof import("./MissingType.ts").default;
import("./MissingType.ts").then(module => MissingType = module.default);


export default abstract class TypeBase extends CodeFragment implements IType {

    nullable = false;

    abstract get typeName(): string;

    abstract asType(context: Context): Type;
    abstract asTypeInfo(context: Context): TypeInfo;

    packedType(): typeof PackedType {
        return PackedType.NotPacked;
    }

    isAssignableFrom(_context: Context, type: IType): boolean {
        return type === this || type == MissingType.instance;
    }

    prepareContext(context: Context): Context {
        return context.newMemberContext(this);
    }

    abstract defaultValue(): IExpression;

    convertExpression(context: Context, expression: IExpression): IExpression {
        const type = expression.check(context);
        if(type == this)
            return expression;
        else
            return this.convertTypedExpression(type, expression);
    }

    convertTypedExpression(_type: IType, _expression: IExpression): IExpression {
        assertTrue(false); // TODO
    }

    checkMember(_context: Context, _memberId: Identifier): IType {
        assertTrue(false);
    }

    checkItem(_context: Context, _item: IExpression): IType {
        assertTrue(false);
    }

    checkEquals(_context: Context, _rightType: IType): IType {
        assertTrue(false);
    }

    compileEquals(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, left: IResult, right: IResult, reverse: boolean): IResult {
        assertTrue(false);
    }

    checkCompare(_context: Context, _rightType: IType): IType {
        assertTrue(false);
    }

    compileCompare(_context: Context, _module: WasmModule, _flags: CompilerFlags, _body: FunctionBody, _left: IResult, _right: IResult, _comparator: Comparator): IResult {
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

    checkSubtract(_context: Context, _rightType: IType): IType {
        assertTrue(false);
    }

    compileSubtract(_context: Context, _module: WasmModule, _flags: CompilerFlags, _left: IResult, _right: IResult): IResult {
        assertTrue(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if (tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assertTrue(false);
    }

    checkBinaryBitsOperator(_context: Context, _operator: BinaryOperator, _rightType: IType): IType {
        assertTrue(false);
    }

    compileBinaryBitsOperator(_context: Context, _module: WasmModule, _flags: CompilerFlags, _left: IResult, _right: IResult, _operator: BinaryOperator): IResult {
        assertTrue(false);
    }

    checkUnaryOperator(_context: Context, _operator: UnaryOperator): IType {
        assertTrue(false);
    }

    compileUnaryOperator(_context: Context, _module: WasmModule, _flags: CompilerFlags, _body: FunctionBody, _expression: IExpression, _operator: UnaryOperator): IResult {
        assertTrue(false);
    }

}
