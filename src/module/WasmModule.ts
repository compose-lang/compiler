/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {Feature, Module} from "../binaryen/binaryen_wasm.js";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import IExpression from "../expression/IExpression.ts";
import Variable from "../context/Variable.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import Global from "./Global.ts";
import Prototype from "../declaration/Prototype.ts";
import { assert } from "../../deps.ts";

export default class WasmModule extends Module {

    globalsList: Global[] = [];
    globalsByName = new Map<string, Global>();
    functionsList: IFunctionDeclaration[] = [];
    functionsByName = new Map<string, Map<Prototype, number>>();

    constructor(ptr?: number) {
        super(ptr);
        if(!ptr) {
            this.setFeatures(Feature.GC, Feature.ReferenceTypes);
        }
    }
    addMemory(minPages: number, maxPages?: number) {
        maxPages = Math.max(minPages, maxPages || 0);
        this.memory.set(minPages, maxPages);
    }

    declareImportedGlobal(unit: CompilationUnit, variable: Variable) {
        this.globals.addImport(variable.name, unit.path, variable.name, variable.type.asType(), false);
    }

    declareGlobal(unit: CompilationUnit, variable: Variable, value: IExpression, mutable: boolean, exported: boolean): number {
        assert(!this.globalsByName.has(variable.name));
        const global = new Global(unit, this.globalsList.length, mutable, exported, variable, value);
        this.globalsList.push(global);
        this.globalsByName.set(variable.name, global);
        return global.index
    }

    getRegisteredGlobal(name: string): Global {
        return this.globalsByName.get(name) || null;
    }


    setGlobalValue(variable: Variable, value: IExpression) {
        const global = this.globalsByName.get(variable.name);
        assert(global);
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
        assert(!prototypes.has(prototype));
        prototypes.set(prototype, this.functionsList.length);
        this.functionsList.push(decl);
    }

    getFunctionByDecl(decl: IFunctionDeclaration): number {
        const prototypes = this.functionsByName.get(decl.name);
        return prototypes.get(decl.prototype());
    }


}
