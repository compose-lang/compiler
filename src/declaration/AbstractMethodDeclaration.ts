import MethodDeclarationBase from "./MethodDeclarationBase";
import Prototype from "./Prototype";

export default class AbstractMethodDeclaration extends MethodDeclarationBase {

    constructor(proto: Prototype) {
        super(proto);
    }
}
