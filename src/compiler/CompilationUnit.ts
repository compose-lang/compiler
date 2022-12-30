import IDeclaration from "../declaration/IDeclaration";
import IStatement from "../statement/IStatement";
import ImportStatement from "../module/ImportStatement";
import Context from "../context/Context";

export default class CompilationUnit {

    path: string = "<memory>";
    imports: ImportStatement[] = [];
    statements: IStatement[] = [];
    declarations: IDeclaration[] = [];
    mainExport: any = null;
    childExports: any[] = [];
    context: Context = null;

    constructor(imports: ImportStatement[], statements: IStatement[], declarations: IDeclaration[], mainExport: any, childExports: any[]) {
        this.imports = imports;
        this.statements = statements;
        this.declarations = declarations;
        this.mainExport = mainExport;
        this.childExports = childExports;
        this.statements.forEach(stmt => stmt.unit = this);
        this.declarations.forEach(decl => decl.unit = this);
    }
}
