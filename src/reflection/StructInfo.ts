import TypeInfo from "./TypeInfo.ts"
import AttributeInfo from "./AttributeInfo.ts";

export default class StructInfo extends TypeInfo {
    get parents(): StructInfo[] {
        return [];
    }
    get attributes(): AttributeInfo[] {
        return [];
    }
}
