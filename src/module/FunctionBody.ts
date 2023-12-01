import IType from "../type/IType";
import IValueType from "../type/IValueType";
import binaryen from "binaryen";
import Fragment from "../builder/Fragment";
import ExpressionRef = binaryen.ExpressionRef;
import FunctionRef = binaryen.FunctionRef;
import Module = binaryen.Module;
import Type = binaryen.Type;

enum LocalScope {
    PARAM,
    LOCAL,
    GLOBAL
}

interface Local {
    index:number;
    scope: LocalScope;
    name: string;
    type: IType;
}

/* TODO remove once binaryen.js is upgraded */
type IFunction = {
    // @ts-ignore
    getName(func: FunctionRef): string;
    getParams(func: FunctionRef): Type;
    getResults(func: FunctionRef): Type;
    getNumVars(func: FunctionRef): number;
    getVar(func: FunctionRef, index: number): Type;
    getNumLocals(func: FunctionRef): number;
    hasLocalName(func: FunctionRef, index: number): boolean;
    getLocalName(func: FunctionRef, index: number): string;
    setLocalName(func: ExpressionRef, index: number, name: string): void;
    getBody(func: FunctionRef): ExpressionRef;
    setBody(func: FunctionRef, bodyExpr: ExpressionRef): void;
    optimize(func: FunctionRef, module: Module): void;
    runPasses(func: FunctionRef, module: Module, passes: string[], numPasses: number): void;
    setDebugLocation(func: FunctionRef, expr: ExpressionRef, fileIndex: number, lineNumber: number, columnNumber: number): void;
};

export default class FunctionBody {

    locals: Local[] = [];
    localsMap = new Map<string, Local>();
    debugFragments = new Map<binaryen.ExpressionRef, Fragment>();

    registerParameter(name: string, type: IValueType) {
        const local = { index: this.locals.length, scope: LocalScope.PARAM, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    registerLocal(name: string, type: IType) {
        const local = { index: this.locals.length, scope: LocalScope.LOCAL, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    getRegisteredLocal(name: string) {
        return this.localsMap.get(name)
    }

    compileLocals(): number[] {
        return this.locals.map(local => local.type.asType());
    }

    setLocalNames(func: number) {
        const funcs = binaryen["Function" as keyof typeof binaryen] as any as IFunction;
        this.locals.forEach(local => funcs.setLocalName(func, local.index, local.name));
    }

    registerDebugInfo(ref: binaryen.ExpressionRef, fragment: Fragment) {
        this.debugFragments.set(ref, fragment);
    }
}
