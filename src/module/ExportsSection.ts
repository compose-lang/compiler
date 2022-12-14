import SectionType from "./SectionType";
import SectionBase from "./SectionBase";
import IWasmTarget from "../compiler/IWasmTarget";

export default class ExportsSection extends SectionBase {

    get type(): SectionType {
        return SectionType.EXPORTS;
    }

    get length(): number {
        return 0;
    }

    writeContentsTo(target: IWasmTarget): void {
        // TODO
    }

}
