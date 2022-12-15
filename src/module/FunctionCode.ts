import OpCode from "../compiler/OpCode";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";

export default class FunctionCode {

    instructions: number[][] = [];
    locals: any[] = [];

    get length(): number {
        const bodyLength = this.bodyLength();
        return LEB128.unsignedLength(bodyLength) + bodyLength;
    }

    addOpCode(op: OpCode, bytes?: number[]) {
        const instruction = bytes ? [op].concat(bytes) : [op];
        this.instructions.push(instruction);
    }

    writeContentsTo(target: IWasmTarget) {
        target.writeUInts(this.bodyLength(), this.locals.length);
        this.locals.forEach(local => {}); // TODO
        this.instructions.forEach(inst => target.writeBytesArray(inst));
    }

    private instructionsLength() {
        return this.instructions.map(inst => inst.length).reduce((p, v) => p + v, 0);
    }

    private localsLength() {
        return 0; // TODO
    }

    private bodyLength() {
        return LEB128.unsignedLength(this.locals.length) + this.localsLength() + this.instructionsLength();
    }
}
