import Variable from "../context/Variable.ts";
import IExpression from "../expression/IExpression.ts";
import ICompilable from "../compiler/ICompilable.ts";
import WasmModule from "./WasmModule.ts";
import Context from "../context/Context.ts";
import FunctionBody from "./FunctionBody.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";

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
        module.globals.add(this.variable.name, this.variable.type.asType(context), this.mutable, value.ref);
        if(this.exported)
            module.globals.addExport(this.variable.name, this.variable.name);
    }

}

