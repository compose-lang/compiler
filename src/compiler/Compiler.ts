import CompilationUnit from "./CompilationUnit";
import ITarget from "./ITarget";

export default class Compiler {

    target: ITarget;

    constructor(target: ITarget) {
        this.target = target;
    }

    compile(unit: CompilationUnit) {
        console.log("Compiling " + unit.toString());
    }
}
