import AttributeDeclaration from "../declaration/AttributeDeclaration";
import ClassDeclaration from "../declaration/ClassDeclaration";
import IMethodDeclaration from "../declaration/IMethodDeclaration";
import * as assert from "assert";

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
    methods = new Map<string, Map<string, IMethodDeclaration>>();

    private constructor(globals?: Context) {
        this.globals = globals || this;
    }

    registerMethod(method: IMethodDeclaration) {
        if(!this.methods.has(method.name))
            this.methods.set(method.name, new Map<string, IMethodDeclaration>());
        const protos = this.methods.get(method.name);
        const proto = method.type().toString();
        assert.ok(!protos.has(proto));
        protos.set(proto, method);
    }
}
