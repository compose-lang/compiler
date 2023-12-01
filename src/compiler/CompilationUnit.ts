import IDeclaration from "../declaration/IDeclaration";
import IGlobalStatement from "../statement/IGlobalStatement";
import ImportStatement from "../module/ImportStatement";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import CompilerFlags from "./CompilerFlags";
import IWasmTarget from "./IWasmTarget";
import PipelineOptions from "./PipelineOptions";
import {dirname} from "path";
import {writeFileSync} from "fs";

export default class CompilationUnit {

    private _path: string = "<memory>";
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

    get path() {
        return this._path;
    }

    set path(value: string) {
        if(value == "<memory>")
            throw new Error("Changing path from " + this._path + " to <memory>");
        this._path = value;
    }

   processImports(options: PipelineOptions) {
       if(options.logPaths)
           console.log("Unit path before process imports: " + this.path);
       this.imports.forEach(imp => imp.process(this, options), this);
       if(options.logPaths)
           console.log("Unit path after process imports: " + this.path);
    }

    populateContextAndCheck(parseBuiltins: (context: Context) => void, options: PipelineOptions) {
        // parse and register cots builtins
        parseBuiltins(this.context);
        // register special builtins
        this.context.registerBuiltins();
        // register imports
        if(options.logPaths)
            console.log("Unit path before register imports: " + this.path);
        this.imports.forEach(imp => imp.register(this.context), this);
        if(options.logPaths)
            console.log("Unit path before check imports: " + this.path);
        this.imports.forEach(imp => imp.check(this.context), this);
        if(options.logPaths)
            console.log("Unit path after check imports: " + this.path);
        // register declarations
        this.declarations.forEach(decl => decl.register(this.context), this);
        // register then check globals (once declarations are registered)
        this.statements.forEach(stmt => stmt.register(this.context), this);
        this.statements.forEach(stmt => stmt.check(this.context), this);
        // check declarations
        this.declarations.forEach(decl => decl.check(this.context), this);
    }

    declare(options: PipelineOptions) {
        if(options.logPaths)
            console.log("Unit path before declare imports: " + this.path);
        this.imports.forEach(imp => imp.declare(this.context, this.module), this);
        if(options.logPaths)
            console.log("Unit path after declare imports: " + this.path);
        this.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.statements.forEach(stmt => stmt.declare(this.context, this.module), this);

    }

    compileAtoms(options: PipelineOptions) {
        if(options.logPaths)
            console.log("Unit path before compile imports: " + this.path);
        this.imports.forEach(imp => imp.compile(this.context, this.module, options.compilerFlags, null), this);
        if(options.logPaths)
            console.log("Unit path after compile imports: " + this.path);
        // compile globals in the order of their registration in the globals section
        this.module.globals.forEach(glob => glob.compile(this.context, this.module, options.compilerFlags, null), this);
        // compile functions in the order of their registration in the functions section
        this.module.functions.forEach(decl => decl.compile(this.context, this.module, options.compilerFlags, null), this);
    }

    assembleModule(wasmTarget: IWasmTarget, options: PipelineOptions) {
        let mapFilePath: string;
        if(options.compilerFlags.debug && this.path!="<memory>") {
            if(options.debugDir) {
                const thisName = this.path.substring(this.path.lastIndexOf("/"));
                mapFilePath = options.debugDir + thisName + ".map";
            }
        }
        const wasm = this.module.emitBinary(mapFilePath);
        wasmTarget.open();
        wasmTarget.writeUint8Array(wasm.binary);
        wasmTarget.close();
        if(mapFilePath && wasm.sourceMap)
            writeFileSync(mapFilePath, wasm.sourceMap);
    }

 }
