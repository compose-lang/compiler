import {CharStream} from "npm:antlr4";
import Preprocessor from "./Preprocessor.ts";

export default function preprocessedStream(stream: CharStream, directives: Map<string, boolean>) {
    const preprocessor = new Preprocessor(directives);
    preprocessor.analyze(stream.toString());
    const superLA = stream.LA.bind(stream);
    stream.LA = (offset: number): number => preprocessor.LA(stream.index + offset, () => superLA(offset));
    return stream;
}
