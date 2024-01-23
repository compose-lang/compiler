import TypeInfo from "./TypeInfo.ts"
import InterfaceInfo from "./InterfaceInfo.ts";
import AttributeInfo from "./AttributeInfo.ts";
import MethodInfo from "./MethodInfo.ts";

export default class ClassInfo extends TypeInfo {
    get parents(): ClassInfo[] {
        return [];
    }
    get interfaces(): InterfaceInfo[] {
        return [];
    }
    get attributes(): AttributeInfo[] {
        return [];
    }
    get methods(): MethodInfo[] {
        return [];
    }
}
