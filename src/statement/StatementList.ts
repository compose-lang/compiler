import IStatement from "./IStatement.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import VoidType from "../type/VoidType.ts";
import TypeMap from "../type/TypeMap.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResults from "./IResults.ts";
import {assert} from "../../deps.ts";
import {ExpressionRef} from "../binaryen/binaryen_wasm.d.ts";

export default class StatementList extends Array<IStatement> {

    static from(statements: IStatement[]): StatementList {
        const result = Array.from(statements);
        Object.setPrototypeOf(result, StatementList.prototype);
        return result as StatementList;
    }

    check(context: Context, returnType: IType): IType {
        if(returnType == VoidType.instance) {
            this.forEach(stmt => {
                const type = stmt.check(context);
                assert(type != VoidType.instance);
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
        const results = this.map(stmt => {
            const result = stmt.compile(context, module, flags, body)
            stmt.registerDebugInfo(body, result.refs);
            return result;
        });
        const typeMap = new TypeMap();
        results.filter(result => result && result.type!=VoidType.instance).forEach(result => typeMap.add(result.type));
        return { type: typeMap.inferType(context), refs: results.filter(result => result).map(result => result.refs).flat() as ExpressionRef[] }
    }
}
