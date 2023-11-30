import IDeclaration from "../declaration/IDeclaration";
import IGlobalStatement from "../statement/IGlobalStatement";
import ImportStatement from "../module/ImportStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import CompilerFlags from "./CompilerFlags";
import IWasmTarget from "./IWasmTarget";
import PipelineOptions from "./PipelineOptions";

export default class CompilationUnit {

    path: string = "<memory>";
    imports: ImportStatement[] = [];
    statements: IGlobalStatement[] = [];
    declarations: IDeclaration[] = [];
    mainExport: any = null;
    childExports: any[] = [];
    context: Context = null;
    module = new WasmModule();

    constructor(imports: ImportStatement[], statements: IGlobalStatement[], declarations: IDeclaration[], mainExport: any, childExports: any[]) {
        this.imports = imports;
        this.statements = statements;
        this.declarations = declarations;
        this.mainExport = mainExport;
        this.childExports = childExports;
        this.statements.forEach(stmt => stmt.unit = this);
        this.declarations.forEach(decl => decl.unit = this);
    }

   processImports(options: PipelineOptions) {
        this.imports.forEach(imp => imp.process(this, options), this);
    }

    populateContextAndCheck(parseBuiltins: (context: Context) => void) {
        // parse and register cots builtins
        parseBuiltins(this.context);
        // register special builtins
        this.context.registerBuiltins();
        // register declarations
        this.declarations.forEach(decl => decl.register(this.context));
        // register then check globals (once declarations are registered)
        this.statements.forEach(stmt => stmt.register(this.context));
        this.statements.forEach(stmt => stmt.check(this.context));
        // check declarations
        this.declarations.forEach(decl => decl.check(this.context));
    }

    declare() {
        this.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.statements.forEach(stmt => stmt.declare(this.context, this.module), this);

    }

    compileAtoms(compilerFlags: CompilerFlags) {
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(this.context, this.module, compilerFlags, null), this);
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(this.context, this.module, compilerFlags, null), this);
    }

    assembleModule(wasmTarget: IWasmTarget, flags: CompilerFlags) {
        const bytes = this.module.emitBinary();
        wasmTarget.open();
        wasmTarget.writeUint8Array(bytes);
        wasmTarget.close();
    }

 }
