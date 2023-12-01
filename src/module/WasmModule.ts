import binaryen from "binaryen";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import IExpression from "../expression/IExpression";
import Variable from "../context/Variable";
import CompilationUnit from "../compiler/CompilationUnit";
import * as assert from "assert";
import Global from "./Global";
import Prototype from "../declaration/Prototype";

export default class WasmModule extends binaryen.Module {

    globals: Global[] = [];
    globalsByName = new Map<string, Global>();
    functions: IFunctionDeclaration[] = [];
    functionsByName = new Map<string, Map<Prototype, number>>();

    addMemory(minPages: number, maxPages?: number) {
        maxPages = Math.max(minPages, maxPages || 0);
        this.setMemory(minPages, maxPages);
    }

    declareImportedGlobal(unit: CompilationUnit, variable: Variable) {
        this.addGlobalImport(variable.name, unit.path, variable.name, variable.type.asType());
    }

    declareGlobal(unit: CompilationUnit, variable: Variable, value: IExpression, mutable: boolean, exported: boolean): number {
        assert.ok(!this.globalsByName.has(variable.name));
        const global = new Global(unit, this.globals.length, mutable, exported, variable, value);
        this.globals.push(global);
        this.globalsByName.set(variable.name, global);
        return global.index
    }

    getRegisteredGlobal(name: string): Global {
        return this.globalsByName.get(name) || null;
    }


    setGlobalValue(variable: Variable, value: IExpression) {
        const global = this.globalsByName.get(variable.name);
        assert.ok(global);
        global.value = value;
    }

    private getPrototypesMap(decl: IFunctionDeclaration): Map<Prototype, number> {
        let prototypes = this.functionsByName.get(decl.name);
        if(!prototypes) {
            prototypes = new Map<Prototype, number>();
            this.functionsByName.set(decl.name, prototypes);
        }
        return prototypes;
    }

    declareFunction(decl: IFunctionDeclaration) {
        const prototypes = this.getPrototypesMap(decl);
        const prototype = decl.prototype();
        assert.ok(!prototypes.has(prototype));
        prototypes.set(prototype, this.functions.length);
        this.functions.push(decl);
    }

    getFunctionByDecl(decl: IFunctionDeclaration): number {
        const prototypes = this.functionsByName.get(decl.name);
        return prototypes.get(decl.prototype());
    }


}
