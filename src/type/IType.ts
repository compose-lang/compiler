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
    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType;

    checkSubtract(context: Context, rightType: IType): IType;

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType;

    checkBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType;

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType;
}
