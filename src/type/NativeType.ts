import CodeFragment from "../builder/CodeFragment";
import IWasmTarget from "../compiler/IWasmTarget";
import IType from "./IType";
import Context from "../context/Context";
import * as assert from "assert";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IExpression from "../expression/IExpression";
import Identifier from "../builder/Identifier";
import BinaryOperator from "../expression/BinaryOperator";
import UnaryOperator from "../expression/UnaryOperator";

export default abstract class NativeType extends CodeFragment implements IType {

    nullable = false;
    typeName: string;

    protected constructor(typeName: string) {
        super();
        this.typeName = typeName;
    }

    toString() {
        return this.typeName;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return type === this;
    }

    abstract defaultValue(): IExpression;

    count(): number {
        return 1;
    }

    byteLength(): number {
        return 1;
    }

    abstract writeTo(target: IWasmTarget): void;

    prepareContext(context: Context): Context {
        return context;
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
        if(tryReverse)
            return rightType.checkAdd(context, this, false);
        else
            assert.ok(false);
    }

    compileAdd(context: Context, rightType: IType, module: WasmModule, body: FunctionBody, tryReverse: boolean): IType {
        if(tryReverse)
            return rightType.compileAdd(context, this, module, body, false);
        else
            assert.ok(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assert.ok(false);
    }

    checkSubtract(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

    checkBitsOperator(context: Context, operator: BinaryOperator, rightType: IType): IType {
        assert.ok(false);
    }

    checkUnaryOperator(context: Context, operator: UnaryOperator): IType {
        assert.ok(false);
    }

}
