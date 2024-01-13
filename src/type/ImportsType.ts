import IType from "./IType.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import Context from "../context/Context.ts";
import Identifier from "../builder/Identifier.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import IExpression from "../expression/IExpression.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import {assertTrue} from "../../deps.ts";

export default class ImportsType extends Map<string, IFunctionDeclaration> implements IType {

    nullable = false;
    typeName: string;

    constructor(id: Identifier) {
        super();
        this.typeName = "imports<" + id.value + ">";
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        assertTrue(false, "Should never get there!");
    }

    defaultValue(): IExpression {
        assertTrue(false, "Should never get there!");
    }

    convertExpression(context: Context, expression: IExpression): IExpression {
        assertTrue(false, "Should never get there!");
    }

    asType(context: Context): Type {
        assertTrue(false, "Should never get there!");
    }

    prepareContext(context: Context): Context {
        return context.newImportsContext(this);
    }

    checkMember(context: Context, memberId: Identifier): IType {
        assertTrue(false, "Should never get there!");
    }

    checkItem(context: Context, item: IExpression): IType {
        assertTrue(false, "Should never get there!");
    }

    checkEquals(context: Context, rightType: IType): IType {
        assertTrue(false, "Should never get there!");
    }

    checkCompare(context: Context, rightType: IType): IType {
        assertTrue(false, "Should never get there!");
    }

    checkAdd(context: Context, rightType: IType, tryReverse: boolean): IType {
        assertTrue(false, "Should never get there!");
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assertTrue(false, "Should never get there!");
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        assertTrue(false, "Should never get there!");
    }

    compileAdd(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, tryReverse: boolean): IResult {
        assertTrue(false, "Should never get there!");
    }

    checkBinaryBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        assertTrue(false, "Should never get there!");
    }

    compileBinaryBitsOperator(context: Context, module: WasmModule, flags: CompilerFlags, left: IResult, right: IResult, operator: BinaryOperator): IResult {
        assertTrue(false, "Should never get there!");
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        assertTrue(false, "Should never get there!");
    }

    compileUnaryOperator(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, expression: IExpression, operator: UnaryOperator): IResult {
        assertTrue(false, "Should never get there!");
    }

}
