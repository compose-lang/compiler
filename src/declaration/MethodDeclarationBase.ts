import IMethodDeclaration from "./IMethodDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import MethodPrototype from "./MethodPrototype";

export default abstract class MethodDeclarationBase extends DeclarationBase implements IMethodDeclaration {
    parameters: ParameterList;
    returnTypes: TypeList;

    protected constructor(proto: MethodPrototype) {
        super(proto.id);
        this.parameters = proto.parameters;
        this.returnTypes = proto.returnTypes;
    }

}
