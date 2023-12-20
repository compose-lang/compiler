import {FileStream} from "npm:antlr4";
import Preprocessor from "./Preprocessor.ts";

export default class PreprocessedFileStream extends FileStream {

    preprocessor: Preprocessor;

    constructor(path: string, directives: Map<string, boolean>) {
        super(path);
        this.preprocessor = new Preprocessor(directives);
        this.preprocessor.analyze(this.toString());
    }

    LA(offset: number): number {
        return this.preprocessor.LA(this.index + offset, () => super.LA(offset));
    }
}
