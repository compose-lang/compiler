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
        this.statements = statements.map(stmt => { stmt.unit = this; return stmt; });
        this.declarations = declarations.map(decl => { decl.unit = this; return decl; });
        this.mainExport = mainExport;
        this.childExports = childExports;
    }

   processImports(options: PipelineOptions) {
       console.log("Unit path before process imports: " + this.path);
        this.imports.forEach(imp => imp.process(this, options), this);
       console.log("Unit path after process imports: " + this.path);
    }

    populateContextAndCheck(parseBuiltins: (context: Context) => void) {
        // parse and register cots builtins
        parseBuiltins(this.context);
        // register special builtins
        this.context.registerBuiltins();
        // register imports
        console.log("Unit path before register imports: " + this.path);
        this.imports.forEach(imp => imp.register(this.context), this);
        console.log("Unit path before check imports: " + this.path);
        this.imports.forEach(imp => imp.check(this.context), this);
        console.log("Unit path after check imports: " + this.path);
        // register declarations
        this.declarations.forEach(decl => decl.register(this.context), this);
        // register then check globals (once declarations are registered)
        this.statements.forEach(stmt => stmt.register(this.context), this);
        this.statements.forEach(stmt => stmt.check(this.context), this);
        // check declarations
        this.declarations.forEach(decl => decl.check(this.context), this);
    }

    declare() {
        console.log("Unit path before declare imports: " + this.path);
        this.imports.forEach(imp => imp.declare(this.context, this.module), this);
        console.log("Unit path after declare imports: " + this.path);
        this.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.statements.forEach(stmt => stmt.declare(this.context, this.module), this);

    }

    compileAtoms(compilerFlags: CompilerFlags) {
        console.log("Unit path before compile imports: " + this.path);
        this.imports.forEach(imp => imp.compile(this.context, this.module, compilerFlags, null), this);
        console.log("Unit path after compile imports: " + this.path);
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
