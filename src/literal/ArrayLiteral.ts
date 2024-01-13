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
import { assertTrue } from "../../deps.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { PackedType } from "../binaryen/binaryen_wasm.js";

export default class ArrayLiteral extends LiteralBase<any[]> {

    type: ArrayType = null;

    constructor(text: string, values: IExpression[], elemType?: IType) {
        super(text, values);
        if(elemType)
            this.type = new ArrayType(elemType);
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
                assertTrue(elemType);
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
        const elemType = { type: this.type.elementType.asType(), packedType: PackedType.NotPacked, mutable: true };
        const gcType = HeapTypeRegistry.instance.getArrayGCType(elemType, true);
        const valueRefs = this.value.map(v => v.compile(context, module, flags, body)).map(r => r.ref);
        const ref = module.arrays.newFromItems(gcType.heapType, valueRefs);
        return { ref, type: this.type }
    }

}
