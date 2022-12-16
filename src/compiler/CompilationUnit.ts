import IDeclaration from "../declaration/IDeclaration";
import IStatement from "../statement/IStatement";

export default class CompilationUnit {

    statements: IStatement[] = [];
    declarations: IDeclaration[] = [];

    constructor(statements: IStatement[], declarations: IDeclaration[]) {
        this.statements = statements;
        this.declarations = declarations;
    }
}
