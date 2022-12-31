import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import Identifier from "../builder/Identifier";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";
import UserType from "./UserType";
import ClassDeclaration from "../declaration/ClassDeclaration";
import IDataType from "./IDataType";
import * as assert from "assert";

export default class ClassType extends UserType implements IDataType {

    nullable = false;
    id: Identifier;
    klass: ClassDeclaration;

    constructor(id: Identifier, klass?: ClassDeclaration) {
        super();
        this.id = id;
        this.klass = klass;
    }

    get typeName(): string {
        return this.id.value;
    }

    sizeof(): number {
        assert.ok(false); // TODO
    }

    alignof(): number {
        assert.ok(false); // TODO
    }

    count(): number {
        assert.ok(false); // TODO
    }

    byteLength(): number {
        assert.ok(false); // TODO
    }

    writeTo(target: IWasmTarget): void {
        assert.ok(false); // TODO
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        assert.ok(false); // TODO
    }

    prepareContext(context: Context): Context {
        assert.ok(false); // TODO
    }

}
