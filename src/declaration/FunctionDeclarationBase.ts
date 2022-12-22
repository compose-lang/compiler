import IFunctionDeclaration from "./IFunctionDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import TypeList from "../type/TypeList";
import Prototype from "./Prototype";
import FunctionType from "../type/FunctionType";
import Context from "../context/Context";
import IType from "../type/IType";

export default abstract class FunctionDeclarationBase extends DeclarationBase implements IFunctionDeclaration {

    parameters: ParameterList;
    returnType: IType;

    protected constructor(proto: Prototype) {
        super(proto.id);
        this.parameters = proto.parameters;
        this.returnType = proto.returnType || null;
    }

    type(): FunctionType {
        return new FunctionType(this.parameters, this.returnType);
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.parameters, this.returnType);
    }

}
