import IDeclaration from "../declaration/IDeclaration";

export default class CompilationUnit {

    declarations = [] as IDeclaration[];

    constructor(declarations: IDeclaration[]) {
        this.declarations = declarations;
    }
}
