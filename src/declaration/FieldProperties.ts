import Accessibility from "./Accessibility.ts";

export default interface FieldProperties {
    accessibility: Accessibility;
    isStatic: boolean;
    isReadOnly: boolean;
}
