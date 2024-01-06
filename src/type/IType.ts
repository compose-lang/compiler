import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IExpression from "../expression/IExpression.ts";
import Identifier from "../builder/Identifier.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";

export default interface IType {

    typeName: string;
    nullable: boolean;

    isAssignableFrom(context: Context, type: IType): boolean;
    defaultValue(): IExpression;

    count(): number;

    asType(): Type;

    prepareContext(context: Context): Context;

    checkMember(context: Context, memberId: Identifier): IType;
    checkItem(context: Context, item: IExpression): IType;

    checkEquals(context: Context, rightType: IType): IType;

    checkCompare(context: Context, rightType: IType): IType;

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType;
    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult;

    checkSubtract(context: Context, rightType: IType): IType;

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType;

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType;
    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult;

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType;

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult;

    convertExpression(context: Context, expression: IExpression): IExpression;

}
