import MethodDeclarationBase from "./MethodDeclarationBase";
import MethodPrototype from "./MethodPrototype";

export default class AbstractMethodDeclaration extends MethodDeclarationBase {

    constructor(proto: MethodPrototype) {
        super(proto);
    }
}
