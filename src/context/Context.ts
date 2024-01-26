import AttributeDeclaration from "../declaration/AttributeDeclaration.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import Variable from "./Variable.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import ClassType from "../type/ClassType.ts";
import EnumDeclaration from "../declaration/EnumDeclaration.ts";
import ImportsType from "../type/ImportsType.ts";
import IExpression from "../expression/IExpression.ts";
import AssertFunction from "../builtins/AssertFunction.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import {assertTrue, assertFalse} from "../../deps.ts";
import StructDeclaration from "../declaration/StructDeclaration.ts";
import StructDeclarationBase from "../declaration/StructDeclarationBase.ts";
import UnresolvedIdentifierExpression from "../expression/UnresolvedIdentifierExpression.ts";
import ArrayType from "../type/ArrayType.ts";

type RuntimeClassContextLocator = (className: string) => Context;

export default class Context {

    static newGlobalsContext(runtimeClassContextLocator: RuntimeClassContextLocator): Context {
        const context = new GlobalContext(runtimeClassContextLocator);
        context.globals = context;
        context.calling = null;
        context.parent = null;
        return context;
    }

    globals: GlobalContext;
    calling: Context | null = null;
    parent: Context | null = null;
    attributes = new Map<string, AttributeDeclaration>();
    structs = new Map<string, StructDeclaration>();
    classes = new Map<string, ClassDeclaration>();
    enums = new Map<string, EnumDeclaration>();
    functions = new Map<string, Map<string, IFunctionDeclaration>>();
    locals = new Map<string, Variable>();
    values = new Map<string, IExpression>();

    isGlobal() {
        return false;
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

    newMemberContext(type: IType): Context {
        const context = new MemberContext(type);
        context.globals = this.globals;
        context.calling = this.calling;
        context.parent = this;
        return context;
    }

    newImportsContext(type: ImportsType): Context {
        const context = new ImportsContext(type);
        context.globals = this.globals;
        context.calling = this.calling;
        context.parent = this;
        return context;
    }

    registerBuiltins() {
        const unit = new CompilationUnit([], [], [], null, null);
        unit.context = this.globals;
        new AssertFunction(unit).register(this);
    }

    registerAttribute(attr: AttributeDeclaration) {
        assertTrue(!this.attributes.has(attr.name));
        this.attributes.set(attr.name, attr);
    }
    registerStruct(struct: StructDeclaration) {
        assertTrue(!this.structs.has(struct.name) && !this.classes.has(struct.name) && !this.enums.has(struct.name));
        this.structs.set(struct.name, struct);
    }

    registerClass(klass: ClassDeclaration) {
        assertTrue(!this.structs.has(klass.name) && !this.classes.has(klass.name) && !this.enums.has(klass.name));
        this.classes.set(klass.name, klass);
    }

    registerEnum(decl: EnumDeclaration) {
        assertTrue(!this.structs.has(decl.name) && !this.classes.has(decl.name) && !this.enums.has(decl.name));
        this.enums.set(decl.name, decl);
    }

    registerFunction(decl: IFunctionDeclaration) {
        if(!this.functions.has(decl.name))
            this.functions.set(decl.name, new Map<string, IFunctionDeclaration>());
        const protos = this.functions.get(decl.name);
        const proto = decl.functionType().toString();
        assertTrue(!protos.has(proto));
        protos.set(proto, decl);
    }

    registerLocal(local: Variable) {
        assertFalse(this.locals.has(local.name), `duplicate local: ${local.name}`);
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

    registerGlobal(global: Variable) {
        if(this.globals && !this.isGlobal())
            this.globals.registerGlobal(global);
        else
            this.registerLocal(global);
    }

    getRegisteredGlobal(id: Identifier): Variable {
        if(this.globals)
            return this.globals.getRegisteredLocal(id);
        else
            return null;
    }

    registerGlobalValue(id: Identifier, value: IExpression) {
        if(this.globals)
            this.globals.values.set(id.value, value);
    }

    getRegisteredGlobalValue(id: Identifier): IExpression {
        if(this.globals && this.globals.values.has(id.value))
            return this.globals.values.get(id.value);
        else
            return null;
    }


    getRegisteredAttribute(id: Identifier): AttributeDeclaration {
        const result = this.attributes.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredAttribute(id);
        else if(this.globals && !this.isGlobal())
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
        else if(this.globals && !this.isGlobal())
            return this.globals.getRegisteredEnum(id);
        else
            return null;
    }

    getRegisteredStructBase(id: Identifier): StructDeclarationBase {
        const record = this.getRegisteredStruct(id);
        if (record != null)
            return record;
        else
            return this.getRegisteredClass(id);
    }

    getRegisteredStruct(id: Identifier): StructDeclaration {
        const result = this.structs.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredStruct(id);
        else if(this.globals && !this.isGlobal())
            return this.globals.getRegisteredStruct(id);
        else
            return null;
    }
    getRegisteredClass(id: Identifier): ClassDeclaration {
        const result = this.classes.get(id.value) || null;
        if(result)
            return result
        else if(this.parent)
            return this.parent.getRegisteredClass(id);
        else if(this.globals && !this.isGlobal())
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
        else if(this.globals && !this.isGlobal())
            this.globals.collectFunctions(id, map);
        if(this.functions.has(id.value)) {
            const local = this.functions.get(id.value);
            local.forEach((decl, key) => map.set(key, decl));
        }
    }

    withTypeMap(_typeMap: Map<string, IType>) {
        return this;
    }

}

class GlobalContext extends Context {

    readonly runtimeClassContexts = new Map<string, Context>();
    readonly runtimeClassContextLocator: RuntimeClassContextLocator;

    constructor(runtimeClassContextLocator: RuntimeClassContextLocator) {
        super();
        this.globals = this;
        this.runtimeClassContextLocator = runtimeClassContextLocator;
    }

    isGlobal() {
        return true;
    }

    resolveRuntimeClassContext(parent: IExpression): Context {
        if(parent instanceof UnresolvedIdentifierExpression) {
            if(!this.runtimeClassContexts.has(parent.name)) {
                const context = this.runtimeClassContextLocator(parent.name);
                if(context) {
                    this.runtimeClassContexts.set(parent.name, context);
                } else {
                    throw new Error(`Could not locate class '${parent.name}'`)
                }
            }
            return this.runtimeClassContexts.get(parent.name) || null;
        }
        throw new Error("Method not implemented.");
    }

}

class TypedContext extends Context {

    type: IType;

    constructor(type: IType) {
        super();
        this.type = type;
    }
}

class StaticContext extends TypedContext {

    protected collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        super.collectFunctions(id, map);
        if(this.type instanceof ClassType)
            this.type.klass.collectStaticFunctions(id, map);
    }
}

class MemberContext extends TypedContext {

    protected collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        super.collectFunctions(id, map);
        if(this.type instanceof ClassType)
            this.type.klass.collectMemberFunctions(id, map);
        // TODO remove, below is tactical, until we use a class for Arrays
        else if(this.type instanceof ArrayType)
            this.type.collectMemberFunctions(id, map);
    }
}

class ImportsContext extends Context {

    type: ImportsType;

    constructor(type: ImportsType) {
        super();
        this.type = type;
    }

    protected collectFunctions(id: Identifier, map: Map<string, IFunctionDeclaration>) {
        super.collectFunctions(id, map);
        if (this.type.has(id.value)) {
            map.set(id.value, this.type.get(id.value));
        }
    }
}
