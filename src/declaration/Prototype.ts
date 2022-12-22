import ParameterList from "../parameter/ParameterList";
import Identifier from "../builder/Identifier";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";
import GenericParameter from "./GenericParameter";

export default class Prototype extends FunctionType {

    id: Identifier;
    generics: GenericParameter[];

    constructor(id: Identifier, generics: GenericParameter[], parameters: ParameterList, returnType: IType) {
        super(parameters, returnType);
        this.id = id;
        this.generics = generics;
    }

}
