import SectionType from "./SectionType";
import IWasmTarget from "../compiler/IWasmTarget";
import SectionBase from "./SectionBase";

export default class FunctionsSection extends SectionBase {

    get type(): SectionType {
        return SectionType.FUNCTIONS;
    }

    get length(): number {
        return 0;
    }

    writeContentsTo(target: IWasmTarget): void {
        // TODO
    }

}
