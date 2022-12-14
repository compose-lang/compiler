import IMethodDeclaration from "./IMethodDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import Prototype from "./Prototype";
import MethodType from "../type/MethodType";

export default abstract class MethodDeclarationBase extends DeclarationBase implements IMethodDeclaration {

    parameters: ParameterList;
    returnTypes: TypeList;

    protected constructor(proto: Prototype) {
        super(proto.id);
        this.parameters = proto.parameters;
        this.returnTypes = proto.returnTypes || [];
    }

    type(): MethodType {
        return new MethodType(this.parameters, this.returnTypes);
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.parameters, this.returnTypes);
    }

}
