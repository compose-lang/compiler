import ISection from "./ISection";
import SectionType from "./SectionType";
import IWasmTarget from "../compiler/IWasmTarget";

export default abstract class SectionBase implements ISection {

    abstract get length(): number;
    abstract get type(): SectionType;
    abstract writeContentsTo(target: IWasmTarget): void;

    writeTo(target: IWasmTarget): void {
        target.writeBytes(this.type);
        target.writeUInts(this.length);
        this.writeContentsTo(target);
    }


}
