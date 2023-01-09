import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IExpression from "../expression/IExpression";
import Identifier from "../builder/Identifier";
import UnaryOperator from "../expression/UnaryOperator";
import BinaryOperator from "../expression/BinaryOperator";

export default interface IType {

    typeName: string;
    nullable: boolean;

    isAssignableFrom(context: Context, type: IType): boolean;
    defaultValue(): IExpression;

    count(): number;
    byteLength(): number;
    writeTo(target: IWasmTarget): void;

    prepareContext(context: Context): Context;

    checkMember(context: Context, memberId: Identifier): IType;

    checkEquals(context: Context, rightType: IType): IType;

    checkCompare(context: Context, rightType: IType): IType;

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType;

    compileAdd(context: Context, module: WasmModule, body: FunctionBody, rightType: IType, tryReverse: boolean): IType;

    checkSubtract(context: Context, rightType: IType): IType;

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType;

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType;
    compileBinaryBitsOperator(context: Context, module: WasmModule, body: FunctionBody, rightType: IType, operator: BinaryOperator): IType;

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType;
    compileUnaryOperator(context: Context, module: WasmModule, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IType;

    convertExpression(context: Context, expression: IExpression): IExpression;

}
