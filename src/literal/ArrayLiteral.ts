import LiteralBase from "./LiteralBase";
import IExpression from "../expression/IExpression";
import Context from "../context/Context";
import IType from "../type/IType";
import TypeMap from "../type/TypeMap";
import assert from "assert";
import ArrayType from "../type/ArrayType";
import MissingType from "../type/MissingType";
import WasmModule from "../module/WasmModule";
import CompilerFlags from "../compiler/CompilerFlags";
import FunctionBody from "../module/FunctionBody";
import IResult from "../expression/IResult";
import binaryen from "binaryen";
import Type = binaryen.Type;
import ExpressionRef = binaryen.ExpressionRef;

export default class ArrayLiteral extends LiteralBase<any[]> {

    type: IType = null;

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
        return this.type as ArrayType;
    }

    checkElementType(context: Context): IType {
        if(this.value.length) {
            const typeMap = new TypeMap();
            this.value.forEach(v => {
                const elemType = v.check();
                assert.ok(elemType);
                typeMap.add(elemType);
            });
            return typeMap.inferType(context);
        }  else
            return MissingType.instance;
    }

    resolveType(context: Context, type: IType) {
        this.check(context);
        if(type instanceof ArrayType) {
            const elementType = (this.type as ArrayType).elementType;
            if (elementType == MissingType.instance)
                this.type = type;
        }
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        assert.ok(this.type);
        const elemType = this.type.asType();
        const new_array_fixed = binaryen["_BinaryenArrayNewFixed" as keyof typeof binaryen] as (module: WasmModule, type: Type, values: ExpressionRef[], length: number) => ExpressionRef;
        const refs = this.value.map(v => v.compile(context, module, flags, body)).map(r => r.ref);
        const ref = new_array_fixed(module, elemType, refs, refs.length);
        return { ref, type: this.type }
    }

}
