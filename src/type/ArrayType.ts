import CollectionType from "./CollectionType.ts";
import IType from "./IType.ts";
import IExpression from "../expression/IExpression.ts";
import Context from "../context/Context.ts";
import HeapTypeRegistry from "../registry/HeapTypeRegistry.ts";
import { Type } from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import { none, PackedType, TypeBuilder } from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";
import ReflectionRegistry from "../registry/ReflectionRegistry.ts";
import Identifier from "../builder/Identifier.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import VoidType from "./VoidType.ts";
import Prototype from "../declaration/Prototype.ts";
import ParameterList from "../parameter/ParameterList.ts";
import TypedParameter from "../parameter/TypedParameter.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "../expression/IResult.ts";
import FunctionBody from "../module/FunctionBody.ts";
import { IntegerType, UInt32Type } from "./index.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import CharType from "./CharType.ts";
import GenericsId from "../builder/GenericsId.ts";

export default class ArrayType extends CollectionType {
    constructor(elementType: IType) {
        super("array<" + elementType.typeName + ">", elementType);
    }

    defaultValue(): IExpression {
        assertTrue(false); // TODO
    }

    asType(context: Context): Type {
        // the array must be mutable, see https://github.com/WebAssembly/gc/issues/515
        const elementType = { type: this.elementType.asType(context), packedType: this.elementType.packedType(), mutable: true };
        const arrayType = HeapTypeRegistry.instance.getArrayDataGCType(elementType, false);
        // the array field must be mutable for resizing the array
        const valueType = { type: arrayType.type, packedType: PackedType.NotPacked, mutable: true };
        const gcType = HeapTypeRegistry.instance.getFieldWrapperGCType(valueType, false);
        return gcType.type;
    }

    asTypeInfo(context: Context): TypeInfo {
        return ReflectionRegistry.instance.getArrayTypeInfo(context, this.elementType);
    }

    compileLength(context: Context, module: WasmModule, _flags: CompilerFlags, _body: FunctionBody, parent: IResult): IResult {
        // both the array and the field holding it must be mutable, see https://github.com/WebAssembly/gc/issues/515
        const elementType = { type: this.elementType.asType(context), packedType: this.elementType.packedType(), mutable: true };
        const arrayType = HeapTypeRegistry.instance.getArrayDataGCType(elementType, false);
        const arrayRef = module.structs.getMember(parent.ref, 1, arrayType.type, false);
        return { ref: module.arrays.length(arrayRef), type: UInt32Type.instance };
    }


    isAssignableFrom(context: Context, type: IType): boolean {
        return type instanceof ArrayType && this.elementType.isAssignableFrom(context, type.elementType);
    }

    checkItem(context: Context, item: IExpression): IType {
        const itemType = item.check(context);
        assertTrue(itemType instanceof IntegerType)
        return this.elementType;
    }

    // TODO remove, below is tactical, until we use a class for Arrays
    collectMemberFunctions(context: Context, id: Identifier, map: Map<string, IFunctionDeclaration>) {
        if(id.value == "push") {
            map.set(PUSH_CHAR_DECL.functionType(context).toString(), PUSH_CHAR_DECL);
        }
    }
}

// TODO remove, below is tactical, until we use a class for Arrays
export const unit = new CompilationUnit([], [], [], null, []);
unit.url = new URL("file:///Users/ericvergnaud/Development/compose/compiler/runtime/core/Array.cots");

const ClassDeclaration = (await import("../declaration/ClassDeclaration.ts")).default;
const CHAR_ARRAY_CLASS_DECL = new ClassDeclaration(null, false, GenericsId.of(new Identifier("Array<char>")), null, null, null, null);
let PUSH_CHAR_DECL: IFunctionDeclaration;

import("../declaration/BuiltinFunctionDeclaration.ts")
    .then(module => {
        const BuiltinFunctionDeclaration = module.default;
        class PushFunctionDeclaration extends BuiltinFunctionDeclaration {

            readonly arrayType: ArrayType;

            constructor(elementType: IType) {
                const valueParam = new TypedParameter(new Identifier("value"), elementType);
                const params = ParameterList.from([valueParam]);
                // const fullName = `Array<${elementType.typeName}>:push`;
                const prototype = new Prototype(CHAR_ARRAY_CLASS_DECL.getIType(null), new Identifier("push"), null, params, VoidType.instance)
                super(null, prototype);
                this.unit = unit;
                this.parentClass = CHAR_ARRAY_CLASS_DECL;
                unit.declarations.push(this);
                this.arrayType = new ArrayType(elementType);
                this.arrayType.isReadOnly = false;
            }

            compile(context: Context, module: WasmModule, _flags: CompilerFlags) {
                module.functions.addExport(this.fullName, this.fullName);
                const body = new FunctionBody();
                // first rehearse such that body knows all locals
                let local = context.newLocalContext();
                const thisParam = new TypedParameter(new Identifier("this"), this.arrayType);
                const params = new ParameterList();
                params.push(thisParam);
                params.push.apply(params, this.parameters);
                params.rehearse(local, module, body);
                // now compile
                local = context.newLocalContext();
                params.forEach(param => param.register(local), this);
                // fetch the array
                const wrapperType = this.arrayType.asType(context);
                const wrapperHeapType = TypeBuilder.heapTypeFromType(wrapperType);
                const arrayType = TypeBuilder.structMemberType(wrapperHeapType, 1);
                const arrayHeapType = TypeBuilder.heapTypeFromType(arrayType);
                const wrapperRef = module.locals.get(0, this.arrayType.asType(context));
                const arrayRef = module.structs.getMember(wrapperRef, 1, arrayType, false)
                // grow it and push item
                const newArrayRef = module.arrays.newFromInit(arrayHeapType, module.i32.add(module.arrays.length(arrayRef), module.i32.const(1)));
                const setMemberRef = module.structs.setMember(wrapperRef, 1, newArrayRef);
                const copyRef = module.arrays.copy(newArrayRef, module.i32.const(0), arrayRef, module.i32.const(0), module.arrays.length(arrayRef));
                const setItemRef = module.arrays.setItem(newArrayRef, module.arrays.length(arrayRef), module.locals.get(1, this.arrayType.elementType.asType(context)));
                // create body
                const block = module.block(null, [ setMemberRef, copyRef, setItemRef ], none);
                // compile local types using calling context because parameters are compiled by function call
                const locals = body.compileLocals(context);
                const funcref = module.functions.add(this.fullName, this.functionType(context).asType(context), none, locals, block);
                body.setLocalNames(funcref);
                /*
                if(flags.debug) {
                    const file = module.addDebugInfoFileName(this.fragment.url.toString());
                    const func = new Function(funcref);
                    body.debugFragments.forEach((fragment, ref) => func.setDebugLocation(ref, file, fragment.startLocation.line + 1, fragment.startLocation.column + 1))            ;
                }
                */
            }
        }

        PUSH_CHAR_DECL = new PushFunctionDeclaration(CharType.instance);
    });


