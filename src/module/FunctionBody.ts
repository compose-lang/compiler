import IType from "../type/IType.ts";
import IValueType from "../type/IValueType.ts";
import Fragment from "../builder/Fragment.ts";
import {ExpressionRef, FunctionRef} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { Function } from "../binaryen/binaryen_wasm.js";
import Context from "../context/Context.ts";
import {assertEquals, assertTrue} from "../platform/deno/AssertUtils.ts";

enum Scope {
    PARAM,
    LOCAL,
    GLOBAL
}

interface Local {
    index:number;
    scope: Scope;
    name: string;
    type: IType;
}

export type ScopeId = number;

export default class FunctionBody {

    // Wasm does not support scoped locals therefore we need
    // to manage local names, they need to be distinct
    localsScopeIndexMap = new Map<ScopeId, number>();
    activeLocalScopeIds: ScopeId[] = [];
    locals: Local[] = [];
    localsMap = new Map<string, Local>();
    debugFragments = new Map<ExpressionRef, Fragment>();

    createAndPushLocalsScope(scopeId: ScopeId): void  {
        // scope ids must be unique
        assertTrue(!this.localsScopeIndexMap.has(scopeId));
        this.localsScopeIndexMap.set(scopeId, this.localsScopeIndexMap.size + 1);
        this.activeLocalScopeIds.push(scopeId);
    }

    pushLocalsScope(scopeId: ScopeId): void  {
        assertTrue(this.localsScopeIndexMap.has(scopeId));
        assertTrue(this.activeLocalScopeIds.findIndex(s => s==scopeId) < 0);
        this.activeLocalScopeIds.push(scopeId);
    }

    popLocalsScope(scopeId: ScopeId) {
        assertEquals(scopeId, this.activeLocalScopeIds.pop());
    }


    registerParameter(name: string, type: IValueType) {
        assertEquals(0, this.activeLocalScopeIds.length);
        const local = { index: this.locals.length, scope: Scope.PARAM, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    registerLocal(name: string, type: IType) {
        if(this.activeLocalScopeIds.length > 0) {
            const currentScopeId = this.activeLocalScopeIds[this.activeLocalScopeIds.length - 1];
            name += "$" + this.localsScopeIndexMap.get(currentScopeId);
        }
        const local = { index: this.locals.length, scope: Scope.LOCAL, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    getRegisteredLocal(name: string, depth?: number): Local {
        if(!(depth >= 0))
            return this.getRegisteredLocal(name, this.activeLocalScopeIds.length);
        const scopedName = this.computeScopedName(name, depth);
        const local = this.localsMap.get(scopedName);
        if(local)
            return local;
        else if(depth > 0)
            return this.getRegisteredLocal(name, depth - 1);
        else
            return null;
    }

    computeScopedName(name: string, depth: number): string {
        if(depth == 0)
            return name;
        const localScopeId = this.activeLocalScopeIds[depth - 1];
        return name + "$" + this.localsScopeIndexMap.get(localScopeId);

    }

    compileLocals(context: Context): number[] {
        return this.locals.filter(local => local.scope == Scope.LOCAL).map(local => local.type.asType(context));
    }

    setLocalNames(ref: FunctionRef) {
        const func = new Function(ref);
        this.locals.filter(local => local.scope == Scope.LOCAL).forEach(local => func.setLocalName(local.index, local.name));
    }

    registerDebugInfo(ref: ExpressionRef, fragment: Fragment) {
        this.debugFragments.set(ref, fragment);
    }
}
