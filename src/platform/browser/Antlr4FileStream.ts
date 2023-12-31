import { CharStream } from "npm:antlr4"

export class FileStream extends CharStream {

    constructor(fileName: string, encoding?: string, decodeToUnicodeCodePoints?: boolean) {
        super("", decodeToUnicodeCodePoints);
        throw new Error("FileStream not supported in browser!");
    }
}