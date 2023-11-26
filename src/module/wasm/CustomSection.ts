import SectionBase from "./SectionBase";
import SectionType from "./SectionType";

export default abstract class CustomSection extends SectionBase {

    get type(): SectionType {
        return SectionType.CUSTOM;
    }

    abstract get name(): string;


}
