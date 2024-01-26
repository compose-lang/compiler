import IDeclaration from "../declaration/IDeclaration.ts";
import IGlobalStatement from "../statement/IGlobalStatement.ts";
import ImportStatement from "../module/ImportStatement.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import IWasmTarget from "./IWasmTarget.ts";
import PipelineOptions from "./PipelineOptions.ts";
import { writePathSync } from "../platform/deno/FileUtils.ts";


export default class CompilationUnit {

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

    get url(): URL {
        return this.module.url;
    }

    set url(value: URL) {
        this.module.url = value;
    }

   processImports(options: PipelineOptions) {
       if(options.logUrls)
           console.log("Unit path before process imports: " + this.url);
       this.imports.forEach(imp => imp.process(this, options), this);
       if(options.logUrls)
           console.log("Unit path after process imports: " + this.url);
    }

    populateContextAndCheck(parseBuiltins: (context: Context) => void, options: PipelineOptions) {
        // parse and register cots builtins
        parseBuiltins(this.context);
        // register special builtins
        this.context.registerBuiltins();
        // register imports
        if(options.logUrls)
            console.log("Unit path before register imports: " + this.url);
        this.imports.forEach(imp => imp.register(this.context), this);
        if(options.logUrls)
            console.log("Unit path before check imports: " + this.url);
        this.imports.forEach(imp => imp.check(this.context), this);
        if(options.logUrls)
            console.log("Unit path after check imports: " + this.url);
        // register declarations
        this.declarations.forEach(decl => decl.register(this.context), this);
        // register then check globals (once declarations are registered)
        this.statements.forEach(stmt => stmt.register(this.context), this);
        this.statements.forEach(stmt => stmt.check(this.context), this);
        // check declarations
        this.declarations.forEach(decl => decl.check(this.context), this);
    }

    declare(options: PipelineOptions) {
        if(options.logUrls)
            console.log("Unit path before declare imports: " + this.url);
        this.imports.forEach(imp => imp.declare(this.context, this.module), this);
        if(options.logUrls)
            console.log("Unit path after declare imports: " + this.url);
        this.declarations.filter(decl => decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.declarations.filter(decl => !decl.isModuleImport()).forEach(decl => decl.declare(this.context, this.module), this);
        this.statements.forEach(stmt => stmt.declare(this.context, this.module), this);

    }

    compileAtoms(options: PipelineOptions) {
        if(options.logUrls)
            console.log("Unit path before compile imports: " + this.url);
        this.imports.forEach(imp => imp.compile(this.context, this.module, options.compilerFlags, null), this);
        if(options.logUrls)
            console.log("Unit path after compile imports: " + this.url);
        // compile globals in the order of their registration in the globals section
        this.module.globalsList.forEach(glob => glob.compile(this.context, this.module, options.compilerFlags, null), this);
        // compile functions in the order of their registration in the functions section
        this.module.functionsList.forEach(decl => decl.compile(this.context, this.module, options.compilerFlags, null), this);
        // compile memory segments, now complete, supersedes default memory allocated by WasmModule contructor
        this.module.dataPool.compile(this.module);
    }

    assembleModule(wasmTarget: IWasmTarget, options: PipelineOptions) {
        let mapFilePath: string = undefined;
        if(options.compilerFlags.debug && this.url.protocol != "blob:") {
            if(options.debugDir) {
                const urlStr = this.url.toString();
                const thisName = urlStr.substring(urlStr.lastIndexOf("/"));
                mapFilePath = options.debugDir + thisName + ".map";
            }
        }
        if(mapFilePath) {
            const wasm = this.module.emitBinary(mapFilePath);
            wasmTarget.open();
            wasmTarget.writeUint8Array(wasm.binary);
            wasmTarget.close();
            writePathSync(mapFilePath, wasm.sourceMap);
        } else {
            const binary = this.module.emitBinary();
            wasmTarget.open();
            wasmTarget.writeUint8Array(binary);
            wasmTarget.close();
        }
    }

 }
