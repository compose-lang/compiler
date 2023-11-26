import Dwarf_DIE from "./Dwarf_DIE";
import CompilationUnit from "../../compiler/CompilationUnit";

export default class Dwarf_CU extends Dwarf_DIE {

    readonly unit: CompilationUnit;

    constructor(unit: CompilationUnit) {
        super();
        this.unit = unit;
    }
}
