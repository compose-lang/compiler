import LiteralBase from "./LiteralBase.ts";
import Context from "../context/Context.ts";
import IType from "../type/IType.ts";
import StringType from "../type/StringType.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";
import IResult from "../expression/IResult.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import {ExpressionRef} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {i32, PackedType, TypeBuilder} from "../binaryen/binaryen_wasm.js";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import ArrayType from "../type/ArrayType.ts";
import FunctionFinder from "../finder/FunctionFinder.ts";
import UInt8Type from "../type/UInt8Type.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";

export default class StringLiteral extends LiteralBase<string> {

    constructor(text: string) {
        super(text, text.substring(1, text.length - 1));
    }

    toNative(): string {
        return this.value;
    }

    check(_context: Context): IType {
        return StringType.instance;
    }

    declare(context: Context, module: WasmModule) {
        super.declare(context, module);
        const decl = this.findRuntimeDeclaration(context);
        module.declareImportedFunction(decl);
    }

    findRuntimeDeclaration(context: Context): IFunctionDeclaration {
        return FunctionFinder.findRuntimeDeclaration(context, "String", "fromUTF8", [ new ArrayType(UInt8Type.instance) ]);
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const charsRef = this.compileCharsArray(context, module, flags, body);
        const decl = this.findRuntimeDeclaration(context);
        const result = module.call(decl.fullName, [charsRef], decl.returnType.asType(context));
        return { ref: result, type: decl.returnType };
    }

    private compileCharsArray(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): ExpressionRef {
        const itemsRef = this.compileItems(context, module, flags, body);
        const returnType = new ArrayType(UInt8Type.instance);
        returnType.isReadOnly = true;
        const wrapperType = returnType.asType(context);
        const wrapperHeapType = TypeBuilder.heapTypeFromType(wrapperType);
        const arrayInfo = ReflectionRegistry.instance.getArrayTypeInfo(context, returnType.elementType);
        return module.structs.newFromFields(wrapperHeapType, [ module.i32.const(arrayInfo.typeIndex), itemsRef ]);
    }

    private compileItems(_context: Context, module: WasmModule, _flags: CompilerFlags, _body: FunctionBody): ExpressionRef {
        const [index, offset, size] = module.addString(this.value);
        const elemType = {type: i32, packedType: PackedType.Int8, mutable: false};
        const arrayGCType = HeapTypeRegistry.instance.getArrayGCType(elemType, false);
        return module.arrays.newFromData(arrayGCType.heapType, index.toString(), module.i32.const(offset), module.i32.const(size));
    }

}
