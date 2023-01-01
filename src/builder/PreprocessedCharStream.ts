import {CharStream} from "antlr4";
import Preprocessor from "./Preprocessor";

export default class PreprocessedCharStream extends CharStream {

    preprocessor: Preprocessor;

    constructor(data: string, directives: Map<string, boolean>) {
        super(data);
        this.preprocessor = new Preprocessor(directives);
        this.preprocessor.analyze(this.toString());
    }

    LA(offset: number): number {
        return this.preprocessor.LA(this.index + offset, () => super.LA(offset));
    }
}
