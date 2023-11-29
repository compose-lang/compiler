import binaryen from "binaryen";
import IWasmTarget from "../compiler/IWasmTarget";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import ICompilable from "../compiler/ICompilable";
import IExpression from "../expression/IExpression";
import Variable from "../context/Variable";
import CompilationUnit from "../compiler/CompilationUnit";
import * as assert from "assert";
import Global from "./Global";
import Prototype from "../declaration/Prototype";

enum Scope {
    LOCAL,
    IMPORTED,
    EXPORTED
}
interface IFunctionScope { index: number, scope: Scope }

export default class WasmModule extends binaryen.Module {

    globals: Global[] = [];
    globalsByName = new Map<string, Global>();
    functions: IFunctionDeclaration[] = [];
    functionsByName = new Map<string, Map<Prototype,IFunctionScope>>();

    declareGlobal(unit: CompilationUnit, variable: Variable, value: IExpression, mutable: boolean, exported: boolean): number {
        assert.ok(!this.globalsByName.has(variable.name));
        const global = new Global(unit, this.globals.length, mutable, exported, variable, value);
        this.globals.push(global);
        this.globalsByName.set(variable.name, global)
        return global.index
    }


    setGlobalValue(variable: Variable, value: IExpression) {
        const global = this.globalsByName.get(variable.name);
        assert.ok(global);
        global.value = value;
    }

    private getPrototypesMap(decl: IFunctionDeclaration): Map<Prototype, IFunctionScope> {
        let prototypes = this.functionsByName.get(decl.name);
        if(!prototypes) {
            prototypes = new Map<Prototype, IFunctionScope>();
            this.functionsByName.set(decl.name, prototypes);
        }
        return prototypes;
    }

    declareImportedFunction(decl: IFunctionDeclaration) {
        const prototypes = this.getPrototypesMap(decl);
        const prototype = decl.prototype();
        assert.ok(!prototypes.has(prototype));
        prototypes.set(prototype, { index: this.functions.length, scope: Scope.IMPORTED });
        this.functions.push(decl);
        this.addFunctionImport(decl.name, decl.name, decl.getModuleImportName(), decl.functionType().asType(), decl.returnType.asType());
    }

    declareConcreteFunction(decl: IFunctionDeclaration, exported: boolean) {
        const prototypes = this.getPrototypesMap(decl);
        const prototype = decl.prototype();
        assert.ok(!prototypes.has(prototype));
        prototypes.set(prototype, { index: this.functions.length, scope: exported ? Scope.EXPORTED : Scope.LOCAL });
        this.functions.push(decl);
        if(exported) {
            this.addFunctionExport(decl.name, decl.name); // TODO mangle name
        }
    }

    getFunctionByDecl(decl: IFunctionDeclaration): number {
        const prototypes = this.functionsByName.get(decl.name);
        const entry = prototypes.get(decl.prototype());
        return entry.index;
    }


}
