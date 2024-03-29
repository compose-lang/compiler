/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {Feature, Module} from "../binaryen/binaryen_wasm.js";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import IExpression from "../expression/IExpression.ts";
import Variable from "../context/Variable.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import Global from "./Global.ts";
import Prototype from "../declaration/Prototype.ts";
import { assertTrue } from "../../deps.ts";
import StringPool from "./StringPool.ts";
import DataPool from "./DataPool.ts";
import {MEMORY_BLOB_URL} from "../utils/Constants.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import Context from "../context/Context.ts";

export default class WasmModule extends Module {
    _url: URL;
    globalsList: Global[] = [];
    globalsByName = new Map<string, Global>();
    functionsList: IFunctionDeclaration[] = [];
    functionsByName = new Map<string, Map<Prototype, number>>();
    dataPool = new DataPool();
    stringPool = new StringPool(this.dataPool);
    declaredClasses = new Set<ClassDeclaration>();
    contextGetter?: () => Context;

    constructor(contextGetter?: () => Context, url: URL = MEMORY_BLOB_URL, ptr?: number) {
        super(ptr);
        this.contextGetter = contextGetter;
        if(!ptr) {
            this.setFeatures(Feature.BulkMemory, Feature.GC, Feature.ReferenceTypes);
            // need a minimal memory for compilation to succeed, will be replaced by dataPool
            this.memory.set(this.i32.const(1), this.i32.const(1));
        }
        this._url = url;
    }

    get url() {
        return this._url;
    }

    set url(value: URL) {
        if (value != this._url) {
            if (value == MEMORY_BLOB_URL)
                throw new Error(`Changing path from ${this._url} to ${MEMORY_BLOB_URL.toString()}`);
            this._url = value;
        }
    }

    addString(value: string): [number, number, number] {
        return this.stringPool.add(value);
    }

    declareImportedGlobal(unit: CompilationUnit, variable: Variable) {
        this.globals.addImport(variable.name, unit.url.toString(), variable.name, variable.type.asType(unit.context), false);
    }

    declareImportedFunction(decl: IFunctionDeclaration) {
        const unit = decl.unit;
        this.functions.addImport(decl.fullName, unit.module.url.toString(), decl.fullName, decl.prototype(this.contextGetter()).asType(unit.context), decl.returnType.asType(unit.context));
    }

    declareGlobal(unit: CompilationUnit, variable: Variable, value: IExpression, mutable: boolean, exported: boolean): number {
        assertTrue(!this.globalsByName.has(variable.name));
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
        assertTrue(global);
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
        const prototype = decl.prototype(this.contextGetter());
        assertTrue(!prototypes.has(prototype));
        prototypes.set(prototype, this.functionsList.length);
        this.functionsList.push(decl);
    }

    getFunctionByDecl(decl: IFunctionDeclaration): number {
        const prototypes = this.functionsByName.get(decl.name);
        return prototypes.get(decl.prototype(this.contextGetter()));
    }

    declareClass(decl: ClassDeclaration): boolean {
        if(this.declaredClasses.has(decl))
            return false;
        this.declaredClasses.add(decl);
        return true;
    }


}
