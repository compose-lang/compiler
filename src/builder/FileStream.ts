import type { FileStream } from "npm:antlr4";
let ActualFileStream: typeof FileStream;
if(Deno)
    ActualFileStream = (await import("./Antlr4FileStream.ts")).default;
else
    ActualFileStream = (await import("./MockFileStream.ts")).default;
export default ActualFileStream;


