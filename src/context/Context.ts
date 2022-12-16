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
    methods = new Map<string, Map<string, IFunctionDeclaration>>();
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

    registerMethod(method: IFunctionDeclaration) {
        if(!this.methods.has(method.name))
            this.methods.set(method.name, new Map<string, IFunctionDeclaration>());
        const protos = this.methods.get(method.name);
        const proto = method.type().toString();
        assert.ok(!protos.has(proto));
        protos.set(proto, method);
    }

    registerLocal(local: Variable) {
        assert.ok(!this.locals.has(local.name));
        this.locals.set(local.name, local);
    }

    getRegisteredLocal(id: Identifier) {
        return this.locals.get(id.value) || null;
    }

}
