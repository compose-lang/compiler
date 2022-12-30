import AttributeDeclaration from "../declaration/AttributeDeclaration";
import ClassDeclaration from "../declaration/ClassDeclaration";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import * as assert from "assert";
import Variable from "./Variable";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import ClassType from "../type/ClassType";
import EnumDeclaration from "../declaration/EnumDeclaration";

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
    enums = new Map<string, EnumDeclaration>();
    functions = new Map<string, Map<string, IFunctionDeclaration>>();
    locals = new Map<string, Variable>();

    protected constructor(globals?: Context) {
        this.globals = globals || this;
    }

    isGlobal() {
        return this === this.globals;
    }

    newLocalContext(): Context {
        const context = new Context();
        context.globals = this.globals;
        context.calling = this;
        context.parent = null;
        return context;
    }

    newChildContext(): Context {
        const context = new Context();
        context.globals = this.globals;
        context.calling = this.calling;
        context.parent = this;
        return context;
    }

    newStaticContext(type: IType): Context {
        const context = new StaticContext(type);
        context.globals = this.globals;
        context.calling = this.calling;
        context.parent = this;
        return context;
    }

    registerClass(klass: ClassDeclaration) {
        assert.ok(!this.classes.has(klass.name) && !this.enums.has(klass.name));
        this.classes.set(klass.name, klass);
    }

    registerEnum(decl: EnumDeclaration) {
        assert.ok(!this.classes.has(decl.name) && !this.enums.has(decl.name));
        this.enums.set(decl.name, decl);
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

    getRegisteredLocal(id: Identifier): Variable {
        const result = this.locals.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredLocal(id);
        else
            return null;
    }

    getRegisteredGlobal(id: Identifier): Variable {
        const result = this.getRegisteredLocal(id);
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredGlobal(id);
        else if(this.globals && this.globals != this)
            return this.globals.getRegisteredGlobal(id);
        else
            return null;
    }

    getRegisteredAttribute(id: Identifier): AttributeDeclaration {
        const result = this.attributes.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredAttribute(id);
        else if(this.globals && this.globals != this)
            return this.globals.getRegisteredAttribute(id);
        else
            return null;
    }

    getRegisteredEnum(id: Identifier): EnumDeclaration {
        const result = this.enums.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredEnum(id);
        else if(this.globals && this.globals != this)
            return this.globals.getRegisteredEnum(id);
        else
            return null;
    }

    getRegisteredClass(id: Identifier): ClassDeclaration {
        const result = this.classes.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredClass(id);
        else if(this.globals && this.globals != this)
            return this.globals.getRegisteredClass(id);
        else
            return null;
    }

    getRegisteredFunctions(id: Identifier): IFunctionDeclaration[] {
        const map = new Map<string, IFunctionDeclaration>();
        this.collectFunctions(id, map);
        return Array.from(map.values());
    }

    protected collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
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

    withTypeMap(typeMap: Map<string, IType>) {
        return this;
    }

}

class StaticContext extends Context {

    type: IType;

    constructor(type: IType) {
        super();
        this.type = type;
    }

    protected collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        super.collectFunctions(id, map);
        if(this.type instanceof ClassType)
            this.type.klass.collectStaticFunctions(id, map);
    }
}
