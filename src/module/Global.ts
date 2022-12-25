import Variable from "../context/Variable";
import IExpression from "../expression/IExpression";
import IWasmTarget from "../compiler/IWasmTarget";
import ICompilable from "../compiler/ICompilable";
import WasmModule from "./WasmModule";
import Context from "../context/Context";
import FunctionBody from "./FunctionBody";
import OpCode from "../compiler/OpCode";
import InstanceModifier from "../statement/InstanceModifier";

export default class Global implements ICompilable {

    variable: Variable;
    value: IExpression;
    body: FunctionBody = new FunctionBody();

    constructor(variable: Variable, value: IExpression) {
        this.variable = variable;
        this.value = value;
    }

    get length(): number {
        return this.variable.type.byteLength()
            + 1 // mutable ?
            + this.body.instructionsLength();
    }

    writeTo(target: IWasmTarget) {
        this.variable.type.writeTo(target);
        target.writeUInts(this.variable.modifier == InstanceModifier.CONST ? 1 : 0);
        this.body.writeInstructionsTo(target);
    }

    declare(context: Context, module: WasmModule): void {
        this.value.declare(context, module);
    }

    compile(context: Context, module: WasmModule): void {
        this.value.compile(context, module, this.body);
        this.body.addOpCode(OpCode.END);
    }

}

