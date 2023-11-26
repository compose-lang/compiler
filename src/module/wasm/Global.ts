import Variable from "../../context/Variable";
import IExpression from "../../expression/IExpression";
import IWasmTarget from "../../compiler/IWasmTarget";
import ICompilable from "../../compiler/ICompilable";
import Module from "./WasmModule";
import Context from "../../context/Context";
import FunctionBody from "./FunctionBody";
import OpCode from "../../compiler/OpCode";
import InstanceModifier from "../../statement/InstanceModifier";
import CompilationUnit from "../../compiler/CompilationUnit";
import CompilerFlags from "../../compiler/CompilerFlags";

export default class Global implements ICompilable {

    unit: CompilationUnit;
    variable: Variable;
    value: IExpression;
    body: FunctionBody = new FunctionBody();

    constructor(unit: CompilationUnit, variable: Variable, value: IExpression) {
        this.unit = unit;
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

    declare(context: Context, module: Module): void {
        this.value.declare(context, module);
    }

    compile(context: Context, module: Module, flags: CompilerFlags): void {
        const value = this.value.constify(context);
        value.compile(context, module, flags, this.body);
        this.body.addOpCode(OpCode.END);
    }

}

