import Builder from "../builder/Builder";
import CompilationUnit from "./CompilationUnit";

export default class Compiler {

    static compile(args: string[]) {
        const unit = Builder.parse_unit(args[1]);
        const compiler = new Compiler(args[2]);
        compiler.compile(unit);
    }

    targetPath: string;

    constructor(targetPath: string) {
        this.targetPath = targetPath;
    }

    compile(unit: CompilationUnit) {
        console.log("Compiling " + unit.toString());
    }
}