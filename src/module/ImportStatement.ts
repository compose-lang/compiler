import Identifier from "../builder/Identifier";
import ImportSource from "./ImportSource";

export default class ImportStatement {

    mainSymbol: Identifier;
    childSymbols: Identifier[];
    source: ImportSource;

    constructor(mainSymbol: Identifier, childSymbols: Identifier[], source: ImportSource) {
        this.mainSymbol = mainSymbol;
        this.childSymbols = childSymbols;
        this.source = source;
    }


}
