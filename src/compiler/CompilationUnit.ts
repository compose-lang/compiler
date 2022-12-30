import IDeclaration from "../declaration/IDeclaration";
import IStatement from "../statement/IStatement";
import ImportStatement from "../module/ImportStatement";

export default class CompilationUnit {

    path: string = "<memory>";
    imports: ImportStatement[] = [];
    statements: IStatement[] = [];
    declarations: IDeclaration[] = [];
    mainExport: any = null;
    childExports: any[] = [];

    constructor(imports: ImportStatement[], statements: IStatement[], declarations: IDeclaration[], mainExport: any, childExports: any[]) {
        this.imports = imports;
        this.statements = statements;
        this.declarations = declarations;
        this.mainExport = mainExport;
        this.childExports = childExports;
    }
}
