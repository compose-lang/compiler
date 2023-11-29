import IStatement from "./IStatement";
import IType from "../type/IType";
import Context from "../context/Context";
import VoidType from "../type/VoidType";
import * as assert from "assert";
import TypeMap from "../type/TypeMap";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";
import CompilerFlags from "../compiler/CompilerFlags";
import IResults from "./IResults";

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResults {
        const results = this.map(stmt => stmt.compile(context, module, flags, body));
        const typeMap = new TypeMap();
        results.filter(result => result && result.type!=VoidType.instance).forEach(result => typeMap.add(result.type));
        return { type: typeMap.inferType(context), refs: results.filter(result => result).map(result => result.refs).flat() }
    }
}
