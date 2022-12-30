import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import Context from "../context/Context";
import IType from "../type/IType";
import * as assert from "assert";
import FunctionBody from "../module/FunctionBody";
import OpCode from "../compiler/OpCode";
import IExpression from "./IExpression";
import ClassDeclaration from "../declaration/ClassDeclaration";
import TypeType from "../type/TypeType";


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

    declare(context: Context, module: WasmModule): void {
        this.resolve(context);
        this.resolved.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        this.resolve(context);
        this.resolved.rehearse(context, module, body);
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        this.resolve(context);
        return this.resolved.compile(context, module, body);
    }

    private resolve(context: Context) {
        if(!this.resolved) {
            this.resolved = this.resolveLocalVariable(context);
            assert.ok(this.resolved);
        }
    }

    private resolveLocalVariable(context: Context) {
        const local = context.getRegisteredLocal(this.id);
        if(local)
            return new LocalVariableExpression(this.id);
        else
            return this.resolveGlobalVariable(context);
    }

    private resolveGlobalVariable(context: Context) {
        const global = context.getRegisteredGlobal(this.id);
        if(global)
            return new GlobalVariableExpression(this.id);
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
            return new ClassExpression(this.id, klass);
        else
            return null;
    }
}

class LocalVariableExpression extends ExpressionBase {

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
        assert.ok(local !== null);
        return local.type;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        // nothing to do
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const index = body.getRegisteredLocalIndex(this.id.value);
        body.addOpCode(OpCode.LOCAL_GET, [index]); // TODO encode if index > 0x7F
        return context.getRegisteredLocal(this.id).type;
    }

}

class GlobalVariableExpression extends ExpressionBase {

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
        assert.ok(global !== null);
        return global.type;
    }

    declare(context: Context, module: WasmModule): void {
        // nothing to do
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody): void {
        // nothing to do
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const index = module.getGlobalsSection().getGlobalIndex(this.name);
        assert.ok(index >= 0);
        body.addOpCode(OpCode.GLOBAL_GET, [index]); // TODO encode if index > 0x7F
        return context.getRegisteredGlobal(this.id).type;
    }
}

class ClassExpression extends ExpressionBase {

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

    declare(context: Context, module: WasmModule): void {
        assert.ok(false);
    }

}