import IFunctionDeclaration from "./IFunctionDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import Prototype from "./Prototype";
import FunctionType from "../type/FunctionType";

export default abstract class FunctionDeclarationBase extends DeclarationBase implements IFunctionDeclaration {

    parameters: ParameterList;
    returnTypes: TypeList;

    protected constructor(proto: Prototype) {
        super(proto.id);
        this.parameters = proto.parameters;
        this.returnTypes = proto.returnTypes || [];
    }

    type(): FunctionType {
        return new FunctionType(this.parameters, this.returnTypes);
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.parameters, this.returnTypes);
    }

}
