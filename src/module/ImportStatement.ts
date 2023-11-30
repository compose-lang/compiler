import Identifier from "../builder/Identifier";
import ImportSource from "./ImportSource";
import CodeFragment from "../builder/CodeFragment";
import CompilationUnit from "../compiler/CompilationUnit";
import * as assert from "assert";
import ComposeBuilder from "../builder/ComposeBuilder";
import IDeclaration from "../declaration/IDeclaration";
import IStatement from "../statement/IStatement";
import DeclarationBase from "../declaration/DeclarationBase";
import StatementBase from "../statement/StatementBase";
import PipelineOptions from "../compiler/PipelineOptions";

export default class ImportStatement extends CodeFragment {

    mainSymbol: Identifier;
    childSymbols: Identifier[];
    source: ImportSource;

    constructor(mainSymbol: Identifier, childSymbols: Identifier[], source: ImportSource) {
        super();
        this.mainSymbol = mainSymbol;
        this.childSymbols = childSymbols;
        this.source = source;
    }

    process(unit: CompilationUnit, options: PipelineOptions) {
        const path = options.resolveSource(unit.path, this.source.value);
        assert.ok(path);
        const importedUnit = options.sourceAdded(path);
        if(this.mainSymbol) {
            assert.equal(this.mainSymbol.value, importedUnit.mainExport.name);
            ImportStatement.import(unit, importedUnit.mainExport);
        }
        this.childSymbols.forEach(symbol => {
            const childExport = importedUnit.childExports.find(child => child.name == symbol.value);
            assert.ok(childExport);
            ImportStatement.import(unit, childExport);
        })
    }

    private static import(unit: CompilationUnit, imported: IDeclaration | IStatement) {
        if(imported instanceof DeclarationBase)
            imported.register(unit.context);
        else if(imported instanceof StatementBase)
            imported.check(unit.context);
        else
            assert.ok(false); // not supported
    }
}
