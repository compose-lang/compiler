import OpCode from "../../compiler/OpCode";
import LEB128 from "../../utils/LEB128";
import IWasmTarget from "../../compiler/IWasmTarget";
import IType from "../../type/IType";
import IValueType from "../../type/IValueType";

interface Local {

    name: string;
    type: IType;
    isLocal: boolean

}

interface LocalType {

    count: number;
    type: IType;

}

export default class FunctionBody {

    instructions: number[][] = [];
    locals: Local[] = [];
    localsMap = new Map<string, number>();
    localTypes: LocalType[] = null;

    get length(): number {
        const bodyLength = this.bodyLength();
        return LEB128.unsignedLength(bodyLength) + bodyLength;
    }

    addOpCode(op: OpCode, bytes?: number[]) {
        let instruction: number[] = [];
        if(op & 0xFF000000)
            instruction.push((op >> 24) & 0xFF);
        if(op & 0x00FF0000)
            instruction.push((op >> 16) & 0xFF);
        if(op & 0x0000FF00)
            instruction.push((op >> 8) & 0xFF);
        instruction.push(op & 0xFF);
        if(bytes)
            instruction = instruction.concat(bytes);
        this.dropRedundantReturn(op);
        this.instructions.push(instruction);
    }

    writeContentsTo(target: IWasmTarget) {
        target.writeUInts(this.bodyLength(), this.localTypes.length);
        this.localTypes.forEach(local => {
            target.writeUInts(local.count);
            local.type.writeTo(target)
        }, this);
        this.writeInstructionsTo(target);
    }

    instructionsLength() {
        return this.instructions.map(inst => inst.length).reduce((p, v) => p + v, 0);
    }

    writeInstructionsTo(target: IWasmTarget) {
        this.instructions.forEach(inst => target.writeBytesArray(inst));
    }

    private computeLocalTypes(): void {
        if(this.localTypes == null) {
            const localTypes: LocalType[] = [];
            this.locals.filter(local => local.isLocal)
                .forEach(local => {
                    const currentType = localTypes.length ? localTypes.at(-1) : null;
                    if (currentType != null && currentType.type == local.type)
                        currentType.count++;
                    else
                        localTypes.push({count: 1, type: local.type});
                });
            this.localTypes = localTypes;
        }
    }

    private localTypesLength() {
        return this.localTypes.map(local => LEB128.unsignedLength(local.count) + local.type.byteLength())
            .reduce((p, v) => p + v, 0);
    }

    private bodyLength() {
        this.computeLocalTypes();
        return LEB128.unsignedLength(this.localTypes.length) + this.localTypesLength() + this.instructionsLength();
    }

    private dropRedundantReturn(op: OpCode) {
        if(op === OpCode.END || op === OpCode.RETURN) {
            if (this.instructions.length > 0 && this.instructions[this.instructions.length - 1][0] === OpCode.RETURN) {
                this.instructions.pop();
            }
        }
    }

    registerParameter(name: string, type: IValueType) {
        this.locals.push({ name, type, isLocal: false });
        const index = this.locals.length - 1; // 0-based
        this.localsMap.set(name, index);
        return index;
    }

    registerLocal(name: string, type: IType) {
        this.locals.push({ name, type, isLocal: true });
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
