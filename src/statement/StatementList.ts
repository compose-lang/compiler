import IStatement from "./IStatement";
import IType from "../type/IType";
import Context from "../context/Context";
import VoidType from "../type/VoidType";
import * as assert from "assert";
import TypeMap from "../type/TypeMap";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

export default class StatementList extends Array<IStatement> {

    static from(statements: IStatement[]): StatementList {
        const result = Array.from(statements);
        Object.setPrototypeOf(result, StatementList.prototype);
        return result as StatementList;
    }

    check(context: Context, returnType: IType): IType {
        if(returnType == VoidType.instance) {
            this.forEach(stmt => {
                const type = stmt.check(context) || null;
                assert.ok(type != VoidType.instance);
            }, this);
            return VoidType.instance
        } else {
            const typeMap = new TypeMap();
            if(returnType != null)
                typeMap.add(returnType);
            this.forEach(stmt => {
                const type = stmt.check(context) || null;
                if(type)
                    typeMap.add(type);
            }, this);
            const type = typeMap.inferType(context);
            return returnType || type;
        }
    }

    declare(context: Context, module: WasmModule) {
        this.forEach(stmt => stmt.declare(context, module), this);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.forEach(stmt => stmt.rehearse(context, module, body), this);
    }

    compile(context: Context, module: WasmModule, body: FunctionBody): IType {
        const typeMap = new TypeMap();
        this.forEach(stmt => {
            const type = stmt.compile(context, module, body) || null;
            if(type && type!=VoidType.instance)
                typeMap.add(type);
        }, this);
        return typeMap.inferType(context);
    }
}
