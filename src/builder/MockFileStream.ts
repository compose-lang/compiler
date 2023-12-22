import type { FileStream } from "npm:antlr4";
import { CharStream } from "npm:antlr4";

export default class MockFileStream extends CharStream implements FileStream {

    fileName: string;

    constructor(_fileName: string, _encoding?: string, _decodeToUnicodeCodePoints?: boolean) {
        super(_fileName);
        throw new Error("Antlr file streams are not supported in browsers!")
    }
}
