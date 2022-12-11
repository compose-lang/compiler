import MethodDeclarationBase from "./MethodDeclarationBase";
import Prototype from "./Prototype";
import IStatement from "../statement/IStatement";

export default class ConcreteMethodDeclaration extends MethodDeclarationBase {

    statements: IStatement[];

    constructor(proto: Prototype, statements: IStatement[]) {
        super(proto);
        this.statements = statements;
    }

}
