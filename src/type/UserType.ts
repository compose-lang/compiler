import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import Context from "../context/Context";
import assert from "assert";
import IWasmTarget from "../compiler/IWasmTarget";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import IExpression from "../expression/IExpression";
import NullLiteral from "../literal/NullLiteral";
import Identifier from "../builder/Identifier";

export default abstract class UserType extends CodeFragment implements IType {

    nullable: boolean;

    abstract get typeName(): string;
    abstract byteLength(): number;
    abstract count(): number;
    abstract writeTo(target: IWasmTarget): void;
    abstract isAssignableFrom(context: Context, type: IType): boolean;
    abstract prepareContext(context: Context): Context;

    defaultValue(): IExpression {
        return new NullLiteral();
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

    checkSubtract(context: Context, rightType: IType): IType {
        assert.ok(false);
    }

    checkMultiply(context: Context, rightType: IType, tryReverse: boolean): IType {
        if(tryReverse)
            return rightType.checkMultiply(context, this, false);
        else
            assert.ok(false);
    }

    checkBitsOperation(context: Context, rightType: IType): IType {
        assert.ok(false);
    }
}
