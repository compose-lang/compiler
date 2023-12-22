import IType from "../type/IType.ts";
import IValueType from "../type/IValueType.ts";
import Fragment from "../builder/Fragment.ts";
import {ExpressionRef, FunctionRef} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { Function } from "../binaryen/binaryen_wasm.js";

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

export default class FunctionBody {

    locals: Local[] = [];
    localsMap = new Map<string, Local>();
    debugFragments = new Map<ExpressionRef, Fragment>();

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

    setLocalNames(ref: FunctionRef) {
        const func = new Function(ref);
        this.locals.forEach(local => func.setLocalName(local.index, local.name));
    }

    registerDebugInfo(ref: ExpressionRef, fragment: Fragment) {
        this.debugFragments.set(ref, fragment);
    }
}
