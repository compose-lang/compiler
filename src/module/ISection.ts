import SectionType from "./SectionType";
import IWasmTarget from "../compiler/IWasmTarget";

export default interface ISection {

    get type(): SectionType;
    get length(): number;
    writeTo(target: IWasmTarget): void;
}
