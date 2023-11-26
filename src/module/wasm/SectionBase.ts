import ISection from "./ISection";
import SectionType from "./SectionType";
import IWasmTarget from "../../compiler/IWasmTarget";

export default abstract class SectionBase implements ISection {

    abstract get byteLength(): number;
    abstract get type(): SectionType;
    abstract writeContentsTo(target: IWasmTarget): void;

    writeTo(target: IWasmTarget): void {
        target.writeBytes(this.type);
        target.writeUInts(this.byteLength);
        this.writeContentsTo(target);
    }


}
