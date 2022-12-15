import OpCode from "../compiler/OpCode";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";
import IType from "../type/IType";

class Local {

    name: string;
    type: IType;

    constructor(name: string, type: IType) {
        this.name = name;
        this.type = type;
    }

}

export default class FunctionCode {

    instructions: number[][] = [];
    locals: Local[] = [];
    localsMap = new Map<string, number>();

    get length(): number {
        const bodyLength = this.bodyLength();
        return LEB128.unsignedLength(bodyLength) + bodyLength;
    }

    addOpCode(op: OpCode, bytes?: number[]) {
        const instruction = bytes ? [op].concat(bytes) : [op];
        this.dropRedundantReturn(op);
        this.instructions.push(instruction);
    }

    writeContentsTo(target: IWasmTarget) {
        target.writeUInts(this.bodyLength(), this.locals.length);
        if(this.locals.length > 0) {
            target.writeUInts(this.locals.length);
            this.locals.forEach(local => local.type.writeTo(target));
        }
        this.instructions.forEach(inst => target.writeBytesArray(inst));
    }

    private instructionsLength() {
        return this.instructions.map(inst => inst.length).reduce((p, v) => p + v, 0);
    }

    private localsLength() {
        return (this.locals.length > 0 ? LEB128.unsignedLength(this.locals.length) : 0)
                + this.locals.map(local => local.type.byteLength()).reduce((p, v) => p + v, 0);
    }

    private bodyLength() {
        return LEB128.unsignedLength(this.locals.length) + this.localsLength() + this.instructionsLength();
    }

    private dropRedundantReturn(op: OpCode) {
        if(op === OpCode.END || op === OpCode.RETURN) {
            if (this.instructions.length > 0 && this.instructions[this.instructions.length - 1][0] === OpCode.RETURN) {
                this.instructions.pop();
            }
        }
    }

    registerLocal(name: string, type: IType) {
        this.locals.push(new Local(name, type));
        const index = this.locals.length - 1; // 0-based
        this.localsMap.set(name, index);
        return index;
    }

    getRegisteredLocalIndex(name: string) {
        if(this.localsMap.has(name))
            return this.localsMap.get(name)
        else
            return -1;
    }
}
