import Variable from "../context/Variable";
import IExpression from "../expression/IExpression";
import IWasmTarget from "../compiler/IWasmTarget";
import ICompilable from "../compiler/ICompilable";
import WasmModule from "./WasmModule";
import Context from "../context/Context";
import FunctionBody from "./FunctionBody";
import OpCode from "../compiler/OpCode";
import InstanceModifier from "../statement/InstanceModifier";
import CompilationUnit from "../compiler/CompilationUnit";
import CompilerFlags from "../compiler/CompilerFlags";
import assert from "assert";

export default class Global implements ICompilable {

    readonly unit: CompilationUnit;
    readonly index: number;
    readonly exported: boolean;
    readonly variable: Variable;
    value: IExpression;
    readonly body: FunctionBody = new FunctionBody();

    constructor(unit: CompilationUnit, index: number, exported: boolean, variable: Variable, value: IExpression) {
        this.unit = unit;
        this.index = index;
        this.variable = variable;
        this.value = value;
        this.exported = exported;
    }

    writeTo(target: IWasmTarget) {
        this.variable.type.writeTo(target);
        target.writeUInts(this.variable.modifier == InstanceModifier.CONST ? 1 : 0);
        assert.ok(false)
        // this.body.writeInstructionsTo(target);
    }

    declare(context: Context, module: WasmModule): void {
        this.value.declare(context, module);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags): void {
        const value = this.value.constify(context);
        value.compile(context, module, flags);
        assert.ok(false)
        // this.body.addOpCode(OpCode.END);
    }

}

