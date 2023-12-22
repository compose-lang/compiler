import ParameterList from "../parameter/ParameterList.ts";
import Identifier from "../builder/Identifier.ts";
import FunctionType from "../type/FunctionType.ts";
import IType from "../type/IType.ts";
import GenericParameter from "./GenericParameter.ts";
import {equalArrays} from "../utils/ObjectUtils.ts";

export default class Prototype extends FunctionType {

    id: Identifier;
    generics: GenericParameter[];

    constructor(id: Identifier, generics: GenericParameter[], parameters: ParameterList, returnType: IType) {
        super(parameters, returnType);
        this.id = id;
        this.generics = generics;
    }

    equals(other: any): boolean {
        return this == other || (other instanceof Prototype && this.equalsPrototype(other));
    }

    equalsPrototype(other: Prototype) {
        return this.id.value == other.id.value && equalArrays(this.generics, other.generics, (a1, a2) => a1.equals(a2)) && super.equals(other);
    }

}
