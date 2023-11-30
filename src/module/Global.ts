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
    readonly mutable: boolean;
    readonly exported: boolean;
    readonly variable: Variable;
    value: IExpression;
    readonly body: FunctionBody = new FunctionBody();

    constructor(unit: CompilationUnit, index: number, mutable: boolean, exported: boolean, variable: Variable, value: IExpression) {
        this.unit = unit;
        this.index = index;
        this.mutable = mutable;
        this.exported = exported;
        this.variable = variable;
        this.value = value;
    }

    declare(context: Context, module: WasmModule): void {
        this.value.declare(context, module);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): void {
        const expression = this.value.constify(context);
        const value = expression.compile(context, module, flags, body);
        module.addGlobal(this.variable.name, this.variable.type.asType(), this.mutable, value.ref);
    }

}

