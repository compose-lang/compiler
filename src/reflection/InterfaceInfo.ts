import TypeInfo from "./TypeInfo.ts"
import AttributeInfo from "./AttributeInfo.ts";
import MethodInfo from "./MethodInfo.ts";

export default class InterfaceInfo extends TypeInfo {
    get parents(): InterfaceInfo[] {
        return [];
    }
    get attributes(): AttributeInfo[] {
        return [];
    }
    get methods(): MethodInfo[] {
        return [];
    }
}
