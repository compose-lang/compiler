import FunctionDeclarationBase from "./FunctionDeclarationBase";
import Prototype from "./Prototype";
import Context from "../context/Context";

export default class AbstractFunctionDeclaration extends FunctionDeclarationBase {

    constructor(proto: Prototype) {
        super(proto);
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): void {
        // TODO
    }

}
