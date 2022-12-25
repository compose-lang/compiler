import FunctionDeclarationBase from "./FunctionDeclarationBase";
import ICompilable from "../compiler/ICompilable";
import IStatement from "../statement/IStatement";
import Accessibility from "./Accessibility";
import Prototype from "./Prototype";
import Instruction from "../assembly/Instruction";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import * as assert from "assert";

export default class NativeFunctionDeclaration extends FunctionDeclarationBase implements ICompilable {

    instructions: Instruction[];

    constructor(accessibility: Accessibility, proto: Prototype, instructions: Instruction[]) {
        super(accessibility, proto);
        this.instructions = instructions;
    }

    get isStatic(): boolean {
        return true;
    }

    register(context: Context): void {
        assert.ok(false); // TODO
    }

    check(context: Context): void {
        assert.ok(false); // TODO
    }

    declare(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

    compile(context: Context, module: WasmModule): void {
        assert.ok(false); // TODO
    }

}

