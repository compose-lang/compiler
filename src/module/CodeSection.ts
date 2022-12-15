import SectionType from "./SectionType";
import SectionBase from "./SectionBase";
import IWasmTarget from "../compiler/IWasmTarget";
import FunctionCode from "./FunctionCode";
import LEB128 from "../utils/LEB128";

export default class CodeSection extends SectionBase {

    functionCodes: FunctionCode[] = [];

    get type(): SectionType {
        return SectionType.CODE;
    }

    get length(): number {
        return LEB128.unsignedLength(this.functionCodes.length)
            + this.functionCodes.map(code => code.length).reduce((p, v) => p+ v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.functionCodes.length);
        this.functionCodes.forEach(code => code.writeContentsTo(target));
    }

    createFunctionCode(): FunctionCode {
        const code = new FunctionCode();
        this.functionCodes.push(code);
        return code;
    }
}
