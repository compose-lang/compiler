import LiteralBase from "./LiteralBase.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import TypeMap from "../type/TypeMap.ts";
import ArrayType from "../type/ArrayType.ts";
import MissingType from "../type/MissingType.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IResult from "../expression/IResult.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import { assert } from "../../deps.ts";

export default class ArrayLiteral extends LiteralBase<any[]> {

    type: ArrayType = null;

    constructor(text: string, values: IExpression[]) {
        super(text, values);
    }

    toNative(): any[] {
        return this.value.map(v => v instanceof LiteralBase ? v.toNative() : v.toString());
    }

    check(context: Context): ArrayType {
        if(this.type == null) {
            const elemType = this.checkElementType(context);
            this.type = new ArrayType(elemType);
        }
        return this.type;
    }

    checkElementType(context: Context): IType {
        if(this.value.length) {
            const typeMap = new TypeMap();
            this.value.forEach(v => {
                const elemType = v.check();
                assert(elemType);
                typeMap.add(elemType);
            });
            return typeMap.inferType(context);
        }  else
            return MissingType.instance;
    }

    resolveType(context: Context, type: IType) {
        this.check(context);
        if(type instanceof ArrayType) {
            const elementType = this.type.elementType;
            if (elementType == MissingType.instance)
                this.type = type;
        }
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const elemType = this.type.elementType.asType();
        const types = HeapTypeRegistry.instance.getArrayType(elemType, true);
        const values = this.value.map(v => v.compile(context, module, flags, body)).map(r => r.ref);
        const ref = module.arrays.fromValues(types[1], values);
        return { ref, type: this.type }
    }

}
