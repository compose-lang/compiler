import AttributeDeclaration from "../declaration/AttributeDeclaration";
import ClassDeclaration from "../declaration/ClassDeclaration";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import * as assert from "assert";
import Variable from "./Variable";
import Identifier from "../builder/Identifier";

export default class Context {

    static newGlobalsContext(): Context {
        const context = new Context();
        context.globals = context;
        context.calling = null;
        context.parent = null;
        return context;
    }

    globals: Context;
    calling: Context | null = null;
    parent: Context | null = null;
    attributes = new Map<string, AttributeDeclaration>();
    classes = new Map<string, ClassDeclaration>();
    // enums = new Map<string, EnumDeclaration>();
    functions = new Map<string, Map<string, IFunctionDeclaration>>();
    locals = new Map<string, Variable>();

    private constructor(globals?: Context) {
        this.globals = globals || this;
    }

    isGlobal() {
        return this === this.globals;
    }

    newLocalContext() {
        const context = new Context();
        context.globals = this.globals;
        context.calling = this;
        context.parent = null;
        return context;
    }

    newChildContext() {
        const context = new Context();
        context.globals = this.globals;
        context.calling = this.calling;
        context.parent = this;
        return context;
    }

    registerFunction(decl: IFunctionDeclaration) {
        if(!this.functions.has(decl.name))
            this.functions.set(decl.name, new Map<string, IFunctionDeclaration>());
        const protos = this.functions.get(decl.name);
        const proto = decl.type().toString();
        assert.ok(!protos.has(proto));
        protos.set(proto, decl);
    }

    registerLocal(local: Variable) {
        assert.ok(!this.locals.has(local.name));
        this.locals.set(local.name, local);
    }

    getRegisteredLocal(id: Identifier) {
        return this.locals.get(id.value) || null;
    }

    getRegisteredFunctions(id: Identifier): IFunctionDeclaration[] {
        const map = new Map<string, IFunctionDeclaration>();
        this.collectFunctions(id, map);
        return Array.from(map.values());
    }

    private collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        // collect parents first, override with locals
        if(this.parent !== null)
            this.parent.collectFunctions(id, map);
        else if(this != this.globals)
            this.globals.collectFunctions(id, map);
        if(this.functions.has(id.value)) {
            const local = this.functions.get(id.value);
            local.forEach((decl, key) => map.set(key, decl));
        }
    }
}
