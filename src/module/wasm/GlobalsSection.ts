import SectionType from "./SectionType";
import IWasmTarget from "../../compiler/IWasmTarget";
import SectionBase from "./SectionBase";
import LEB128 from "../../utils/LEB128";
import Global from "./Global";

export default class GlobalsSection extends SectionBase {

    globals: Global[] = [];

    get type(): SectionType {
        return SectionType.GLOBALS;
    }

    get byteLength(): number {
        return LEB128.unsignedLength(this.globals.length)
            + this.globals.map(glob => glob.length).reduce((p, v) => p + v, 0);
    }

    writeContentsTo(target: IWasmTarget): void {
        target.writeUInts(this.globals.length);
        this.globals.forEach(glob => glob.writeTo(target));
    }

    addGlobal(global: Global) {
        this.globals.push(global);
        return this.globals.length - 1; // O-based index
    }

    getGlobalIndex(name: string) {
        return this.globals.findIndex(g => g.variable.name == name);
    }

    getGlobal(name: string) {
        return this.globals.find(g => g.variable.name == name);
    }
}
