import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import Module from "../module/WasmModule";
import Context from "../context/Context";
import IType from "../type/IType";
import * as assert from "assert";
import FunctionBody from "../module/wasm/FunctionBody";
import OpCode from "../compiler/OpCode";
import IExpression from "./IExpression";
import ClassDeclaration from "../declaration/ClassDeclaration";
import TypeType from "../type/TypeType";
import CompilerFlags from "../compiler/CompilerFlags";


export default class UnresolvedIdentifierExpression extends ExpressionBase {

    id: Identifier
    resolved: IExpression = null;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    check(context: Context): IType {
        this.resolve(context);
        return this.resolved.check(context);
    }

    isConst(context: Context): boolean {
        this.resolve(context);
        return this.resolved.isConst(context);
    }

    constify(context: Context): IExpression {
        this.resolve(context);
        return this.resolved.constify(context);
    }

    declare(context: Context, module: Module): void {
        this.resolve(context);
        this.resolved.declare(context, module);
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        this.resolve(context);
        this.resolved.rehearse(context, module, body);
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        this.resolve(context);
        return this.resolved.compile(context, module, flags, body);
    }

    compileAssign(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): void {
        this.resolve(context);
        this.resolved.compileAssign(context, module, flags, body);
    }

    private resolve(context: Context) {
        if(!this.resolved) {
            this.resolved = this.resolveLocalVariable(context);
            assert.ok(this.resolved, "Could not resolve '" + this.name + "' at " + this.fragment.toString());
        }
    }

    private resolveLocalVariable(context: Context) {
        const local = context.isGlobal() ? null : context.getRegisteredLocal(this.id);
        if(local)
            return LocalVariableExpression.from(this);
        else
            return this.resolveGlobalVariable(context);
    }

    private resolveGlobalVariable(context: Context) {
        const global = context.getRegisteredGlobal(this.id);
        if(global)
            return GlobalVariableExpression.from(this);
        else
            return this.resolveGlobalValue(context);
    }

    private resolveGlobalValue(context: Context) {
        const global = context.getRegisteredGlobalValue(this.id);
        if(global)
            return GlobalVariableExpression.from(this);
        else
            return this.resolveAttributeExpression(context);
    }

    private resolveAttributeExpression(context: Context) {
        /* const attr = context.getRegisteredAttribute(this.id)
        if(attr)
            return new AttributeExpression(this.id);
        else */
            return this.resolveEnumExpression(context);
    }

    private resolveEnumExpression(context: Context) {
        /* const enum_ = context.getRegisteredEnum(this.id)
        if(enum_)
            return new EnumExpression(this.id);
        else */
            return this.resolveClassExpression(context);
    }

    private resolveClassExpression(context: Context) {
        const klass = context.getRegisteredClass(this.id)
        if(klass)
            return ClassExpression.from(this, klass);
        else
            return null;
    }
}

class LocalVariableExpression extends ExpressionBase {

    static from(source: UnresolvedIdentifierExpression) {
        const result = new LocalVariableExpression(source.id);
        result.fragment = source.fragment;
        return result;
    }

    id: Identifier

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    check(context: Context): IType {
        const local = context.getRegisteredLocal(this.id);
        assert.ok(local !== null, "Could not resolve local '" + this.name + "' at " + this.fragment.toString());
        return local.type;
    }

    declare(context: Context, module: Module): void {
        // nothing to do
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        // nothing to do
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        const index = body.getRegisteredLocalIndex(this.id.value);
        body.addOpCode(OpCode.LOCAL_GET, [index]); // TODO encode if index > 0x7F
        return context.getRegisteredLocal(this.id).type;
    }

    compileAssign(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): void {
        const index = body.getRegisteredLocalIndex(this.id.value);
        body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
    }
}

class GlobalVariableExpression extends ExpressionBase {

    static from(source: UnresolvedIdentifierExpression) {
        const result = new GlobalVariableExpression(source.id);
        result.fragment = source.fragment;
        return result;
    }

    id: Identifier

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

    check(context: Context): IType {
        const global = context.getRegisteredGlobal(this.id);
        if(global)
            return global.type;
        const value = context.getRegisteredGlobalValue(this.id);
        assert.ok(value !== null);
        return value.check(context);
    }

    isConst(context: Context): boolean {
        return true; // all globals must be initialized with a const expression
    }

    constify(context: Context): IExpression {
        const value = context.getRegisteredGlobalValue(this.id);
        assert.ok(value);
        return value.constify(context);
    }

    declare(context: Context, module: Module): void {
        // nothing to do
    }

    rehearse(context: Context, module: Module, body: FunctionBody): void {
        // nothing to do
    }

    compile(context: Context, module: Module, flags: CompilerFlags, body: FunctionBody): IType {
        const index = module.getGlobalsSection().getGlobalIndex(this.name);
        assert.ok(index >= 0);
        body.addOpCode(OpCode.GLOBAL_GET, [index]); // TODO encode if index > 0x7F
        return context.getRegisteredGlobal(this.id).type;
    }
}

class ClassExpression extends ExpressionBase {

    static from(source: UnresolvedIdentifierExpression, klass: ClassDeclaration) {
        const result = new ClassExpression(source.id, klass);
        result.fragment = source.fragment;
        return result;
    }

    id: Identifier;
    klass: ClassDeclaration;

    constructor(id: Identifier, klass: ClassDeclaration) {
        super();
        this.id = id;
        this.klass = klass;
    }

    check(context: Context): IType {
        const type = this.klass.check(context);
        return new TypeType(type);
    }

    declare(context: Context, module: Module): void {
        assert.ok(false);
    }

}
