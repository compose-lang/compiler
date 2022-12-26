import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import Context from "../context/Context";
import Accessibility from "./Accessibility";
import IType from "../type/IType";

export default class AbstractFunctionDeclaration extends FunctionDeclarationBase {

    constructor(accessibility: Accessibility, proto: Prototype) {
        super(accessibility, proto);
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): IType {
        // TODO
        return this.returnType;
    }

}
