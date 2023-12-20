import Identifier from "../builder/Identifier.ts";
import ImportSource from "./ImportSource.ts";
import CodeFragment from "../builder/CodeFragment.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import IDeclaration from "../declaration/IDeclaration.ts";
import IStatement from "../statement/IStatement.ts";
import DeclarationBase from "../declaration/DeclarationBase.ts";
import StatementBase from "../statement/StatementBase.ts";
import PipelineOptions from "../compiler/PipelineOptions.ts";
import Context from "../context/Context.ts";
import WasmModule from "./WasmModule.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import FunctionBody from "./FunctionBody.ts";
import FunctionDeclarationBase from "../declaration/FunctionDeclarationBase.ts";
import DeclareInstanceStatement from "../statement/DeclareInstanceStatement.ts";
import Variable from "../context/Variable.ts";
import InstanceModifier from "../statement/InstanceModifier.ts";

export default class ImportStatement extends CodeFragment {

    mainSymbol: Identifier;
    childSymbols: Identifier[];
    source: ImportSource;
    importedUnit: CompilationUnit;

    constructor(mainSymbol: Identifier, childSymbols: Identifier[], source: ImportSource) {
        super();
        this.mainSymbol = mainSymbol;
        this.childSymbols = childSymbols;
        this.source = source;
    }

    process(unit: CompilationUnit, options: PipelineOptions) {
        if(options.logPaths)
            console.log("Processing import of: " + this.source.value + " from: " + unit.path);
        const path = options.resolveSource(unit.path, this.source.value);
        assert(path);
        if(options.logPaths)
            console.log("Resolved import of: " + this.source.value + " from: " + unit.path + " to: " + path);
        this.importedUnit = options.sourceAdded(path);
        if(this.mainSymbol)
            assert.equal(this.mainSymbol.value, this.importedUnit.mainExport.name);
        this.childSymbols.forEach(symbol => {
            const childExport = this.importedUnit.childExports.find(child => child.name == symbol.value);
            assert(childExport);
        })
    }

    withImported( apply: (imported: IDeclaration | IStatement) => void ) {
        if(this.mainSymbol)
            apply(this.importedUnit.mainExport);
        this.childSymbols.forEach(symbol => {
            const childExport = this.importedUnit.childExports.find(child => child.name == symbol.value);
            apply(childExport);
        })
    }

    register(context: Context) {
        this.withImported((imported: IDeclaration | IStatement) => this.registerImported(context, imported));
    }


    // noinspection JSMethodCanBeStatic
    private registerImported(context: Context, imported: IDeclaration | IStatement) {
        if(imported instanceof DeclarationBase)
            imported.register(context);
        else if(imported instanceof StatementBase)
            return;
        else
            assert(false); // not supported
    }

    check(context: Context) {
        this.withImported((imported: IDeclaration | IStatement) => this.checkImported(context, imported));
    }

    // noinspection JSMethodCanBeStatic
    private checkImported(context: Context, imported: IDeclaration | IStatement) {
        if(imported instanceof DeclarationBase)
            return;
        else if(imported instanceof StatementBase)
            imported.check(context);
        else
            assert(false); // not supported
    }

    declare(context: Context, module: WasmModule) {
        this.withImported((imported: IDeclaration | IStatement) => this.declareImported(context, module, imported));
    }

    private declareImported(context: Context, module: WasmModule, imported: IDeclaration | IStatement) {
        if(imported instanceof FunctionDeclarationBase)
            module.declareFunction(imported);
        else if(imported instanceof DeclareInstanceStatement) {
            const variable = new Variable(InstanceModifier.CONST, imported.id, imported.type);
            module.declareImportedGlobal(this.importedUnit, variable);
        } else
            assert(false); // not supported
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody) {
        this.withImported((imported: IDeclaration | IStatement) => this.compileImported(context, module, flags, body, imported));
    }

    // noinspection JSMethodCanBeStatic
    private compileImported(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody, imported: IDeclaration | IStatement) {
        if(imported instanceof DeclarationBase)
            return;
        else if(imported instanceof StatementBase)
            return;
        else
            assert(false); // not supported
    }

}
