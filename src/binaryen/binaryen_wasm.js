// @ts-ignore
import Binaryen from "./binaryen_raw_wasm.js";
const JSModule = await Binaryen();
const _malloc = JSModule._malloc;
const _free = JSModule._free;
const HEAP8 = JSModule.HEAP8;
const HEAPU8 = JSModule.HEAPU8;
const HEAP32 = JSModule.HEAP32;
const HEAPU32 = JSModule.HEAPU32;
const stringToAscii = JSModule.stringToAscii;
const stackSave = JSModule.stackSave;
const stackAlloc = JSModule.stackAlloc;
const stackRestore = JSModule.stackRestore;
const allocateUTF8OnStack = JSModule.allocateUTF8OnStack;
const UTF8ToString = JSModule.UTF8ToString;
const __i32_store = JSModule['__i32_store'];
const __i32_load = JSModule['__i32_load'];
const utils = JSModule['utils'];
const swapOut = utils.swapOut;
const _BinaryenSizeofLiteral = utils._BinaryenSizeofLiteral;
const _BinaryenSizeofAllocateAndWriteResult = utils._BinaryenSizeofAllocateAndWriteResult;
function preserveStack(func) {
    try {
        var stack = stackSave();
        return func();
    }
    finally {
        stackRestore(stack);
    }
}
function strToStack(str) {
    return str ? allocateUTF8OnStack(str) : 0;
}
function i32sToStack(i32s) {
    const ret = stackAlloc(i32s.length << 2);
    HEAP32.set(i32s, ret >>> 2);
    return ret;
}
function i8sToStack(i8s) {
    const ret = stackAlloc(i8s.length);
    HEAP8.set(i8s, ret);
    return ret;
}
function getAllNested(ref, numFn, getFn) {
    const num = numFn(ref);
    const ret = new Array(num);
    for (let i = 0; i < num; ++i)
        ret[i] = getFn(ref, i);
    return ret;
}
export const sizeOfLiteral = _BinaryenSizeofLiteral();
export const none = JSModule['_BinaryenTypeNone']();
export const i32 = JSModule['_BinaryenTypeInt32']();
export const i64 = JSModule['_BinaryenTypeInt64']();
export const f32 = JSModule['_BinaryenTypeFloat32']();
export const f64 = JSModule['_BinaryenTypeFloat64']();
export const v128 = JSModule['_BinaryenTypeVec128']();
export const funcref = JSModule['_BinaryenTypeFuncref']();
export const externref = JSModule['_BinaryenTypeExternref']();
export const anyref = JSModule['_BinaryenTypeAnyref']();
export const eqref = JSModule['_BinaryenTypeEqref']();
export const i31ref = JSModule['_BinaryenTypeI31ref']();
export const structref = JSModule['_BinaryenTypeStructref']();
/* explicitly skipping string stuff until it's reprioritized
export const stringref: Type = JSModule['_BinaryenTypeStringref']();
export const stringview_wtf8: Type = JSModule['_BinaryenTypeStringviewWTF8']();
export const stringview_wtf16: Type = JSModule['_BinaryenTypeStringviewWTF16']();
export const stringview_iter: Type = JSModule['_BinaryenTypeStringviewIter']();
*/
export const unreachable = JSModule['_BinaryenTypeUnreachable']();
export const auto = JSModule['_BinaryenTypeAuto']();
export function createType(types) {
    return preserveStack(() => JSModule['_BinaryenTypeCreate'](i32sToStack(types), types.length));
}
export function expandType(type) {
    return preserveStack(() => {
        const numTypes = JSModule['_BinaryenTypeArity'](type);
        const array = stackAlloc(numTypes << 2);
        JSModule['_BinaryenTypeExpand'](type, array);
        const types = new Array(numTypes);
        for (let i = 0; i < numTypes; i++) {
            types[i] = HEAPU32[(array >>> 2) + i];
        }
        return types;
    });
}
export var ExternalKinds;
(function (ExternalKinds) {
    ExternalKinds[ExternalKinds["Function"] = JSModule['_BinaryenExternalFunction']()] = "Function";
    ExternalKinds[ExternalKinds["Table"] = JSModule['_BinaryenExternalTable']()] = "Table";
    ExternalKinds[ExternalKinds["Memory"] = JSModule['_BinaryenExternalMemory']()] = "Memory";
    ExternalKinds[ExternalKinds["Global"] = JSModule['_BinaryenExternalGlobal']()] = "Global";
    ExternalKinds[ExternalKinds["Tag"] = JSModule['_BinaryenExternalTag']()] = "Tag";
})(ExternalKinds || (ExternalKinds = {}));
export var Feature;
(function (Feature) {
    Feature[Feature["MVP"] = JSModule['_BinaryenFeatureMVP']()] = "MVP";
    Feature[Feature["Atomics"] = JSModule['_BinaryenFeatureAtomics']()] = "Atomics";
    Feature[Feature["BulkMemory"] = JSModule['_BinaryenFeatureBulkMemory']()] = "BulkMemory";
    Feature[Feature["MutableGlobals"] = JSModule['_BinaryenFeatureMutableGlobals']()] = "MutableGlobals";
    Feature[Feature["NontrappingFPToInt"] = JSModule['_BinaryenFeatureNontrappingFPToInt']()] = "NontrappingFPToInt";
    Feature[Feature["SignExt"] = JSModule['_BinaryenFeatureSignExt']()] = "SignExt";
    Feature[Feature["SIMD128"] = JSModule['_BinaryenFeatureSIMD128']()] = "SIMD128";
    Feature[Feature["ExceptionHandling"] = JSModule['_BinaryenFeatureExceptionHandling']()] = "ExceptionHandling";
    Feature[Feature["TailCall"] = JSModule['_BinaryenFeatureTailCall']()] = "TailCall";
    Feature[Feature["ReferenceTypes"] = JSModule['_BinaryenFeatureReferenceTypes']()] = "ReferenceTypes";
    Feature[Feature["Multivalue"] = JSModule['_BinaryenFeatureMultivalue']()] = "Multivalue";
    Feature[Feature["GC"] = JSModule['_BinaryenFeatureGC']()] = "GC";
    Feature[Feature["Memory64"] = JSModule['_BinaryenFeatureMemory64']()] = "Memory64";
    Feature[Feature["RelaxedSIMD"] = JSModule['_BinaryenFeatureRelaxedSIMD']()] = "RelaxedSIMD";
    Feature[Feature["ExtendedConst"] = JSModule['_BinaryenFeatureExtendedConst']()] = "ExtendedConst";
    /* explicitly skipping string stuff until it's reprioritized
    Strings = JSModule['_BinaryenFeatureStrings'](),
    */
    Feature[Feature["All"] = JSModule['_BinaryenFeatureAll']()] = "All";
})(Feature || (Feature = {}));
export var Operations;
(function (Operations) {
    Operations[Operations["ClzInt32"] = JSModule['_BinaryenClzInt32']()] = "ClzInt32";
    Operations[Operations["CtzInt32"] = JSModule['_BinaryenCtzInt32']()] = "CtzInt32";
    Operations[Operations["PopcntInt32"] = JSModule['_BinaryenPopcntInt32']()] = "PopcntInt32";
    Operations[Operations["NegFloat32"] = JSModule['_BinaryenNegFloat32']()] = "NegFloat32";
    Operations[Operations["AbsFloat32"] = JSModule['_BinaryenAbsFloat32']()] = "AbsFloat32";
    Operations[Operations["CeilFloat32"] = JSModule['_BinaryenCeilFloat32']()] = "CeilFloat32";
    Operations[Operations["FloorFloat32"] = JSModule['_BinaryenFloorFloat32']()] = "FloorFloat32";
    Operations[Operations["TruncFloat32"] = JSModule['_BinaryenTruncFloat32']()] = "TruncFloat32";
    Operations[Operations["NearestFloat32"] = JSModule['_BinaryenNearestFloat32']()] = "NearestFloat32";
    Operations[Operations["SqrtFloat32"] = JSModule['_BinaryenSqrtFloat32']()] = "SqrtFloat32";
    Operations[Operations["EqZInt32"] = JSModule['_BinaryenEqZInt32']()] = "EqZInt32";
    Operations[Operations["ClzInt64"] = JSModule['_BinaryenClzInt64']()] = "ClzInt64";
    Operations[Operations["CtzInt64"] = JSModule['_BinaryenCtzInt64']()] = "CtzInt64";
    Operations[Operations["PopcntInt64"] = JSModule['_BinaryenPopcntInt64']()] = "PopcntInt64";
    Operations[Operations["NegFloat64"] = JSModule['_BinaryenNegFloat64']()] = "NegFloat64";
    Operations[Operations["AbsFloat64"] = JSModule['_BinaryenAbsFloat64']()] = "AbsFloat64";
    Operations[Operations["CeilFloat64"] = JSModule['_BinaryenCeilFloat64']()] = "CeilFloat64";
    Operations[Operations["FloorFloat64"] = JSModule['_BinaryenFloorFloat64']()] = "FloorFloat64";
    Operations[Operations["TruncFloat64"] = JSModule['_BinaryenTruncFloat64']()] = "TruncFloat64";
    Operations[Operations["NearestFloat64"] = JSModule['_BinaryenNearestFloat64']()] = "NearestFloat64";
    Operations[Operations["SqrtFloat64"] = JSModule['_BinaryenSqrtFloat64']()] = "SqrtFloat64";
    Operations[Operations["EqZInt64"] = JSModule['_BinaryenEqZInt64']()] = "EqZInt64";
    Operations[Operations["ExtendSInt32"] = JSModule['_BinaryenExtendSInt32']()] = "ExtendSInt32";
    Operations[Operations["ExtendUInt32"] = JSModule['_BinaryenExtendUInt32']()] = "ExtendUInt32";
    Operations[Operations["WrapInt64"] = JSModule['_BinaryenWrapInt64']()] = "WrapInt64";
    Operations[Operations["TruncSFloat32ToInt32"] = JSModule['_BinaryenTruncSFloat32ToInt32']()] = "TruncSFloat32ToInt32";
    Operations[Operations["TruncSFloat32ToInt64"] = JSModule['_BinaryenTruncSFloat32ToInt64']()] = "TruncSFloat32ToInt64";
    Operations[Operations["TruncUFloat32ToInt32"] = JSModule['_BinaryenTruncUFloat32ToInt32']()] = "TruncUFloat32ToInt32";
    Operations[Operations["TruncUFloat32ToInt64"] = JSModule['_BinaryenTruncUFloat32ToInt64']()] = "TruncUFloat32ToInt64";
    Operations[Operations["TruncSFloat64ToInt32"] = JSModule['_BinaryenTruncSFloat64ToInt32']()] = "TruncSFloat64ToInt32";
    Operations[Operations["TruncSFloat64ToInt64"] = JSModule['_BinaryenTruncSFloat64ToInt64']()] = "TruncSFloat64ToInt64";
    Operations[Operations["TruncUFloat64ToInt32"] = JSModule['_BinaryenTruncUFloat64ToInt32']()] = "TruncUFloat64ToInt32";
    Operations[Operations["TruncUFloat64ToInt64"] = JSModule['_BinaryenTruncUFloat64ToInt64']()] = "TruncUFloat64ToInt64";
    Operations[Operations["TruncSatSFloat32ToInt32"] = JSModule['_BinaryenTruncSatSFloat32ToInt32']()] = "TruncSatSFloat32ToInt32";
    Operations[Operations["TruncSatSFloat32ToInt64"] = JSModule['_BinaryenTruncSatSFloat32ToInt64']()] = "TruncSatSFloat32ToInt64";
    Operations[Operations["TruncSatUFloat32ToInt32"] = JSModule['_BinaryenTruncSatUFloat32ToInt32']()] = "TruncSatUFloat32ToInt32";
    Operations[Operations["TruncSatUFloat32ToInt64"] = JSModule['_BinaryenTruncSatUFloat32ToInt64']()] = "TruncSatUFloat32ToInt64";
    Operations[Operations["TruncSatSFloat64ToInt32"] = JSModule['_BinaryenTruncSatSFloat64ToInt32']()] = "TruncSatSFloat64ToInt32";
    Operations[Operations["TruncSatSFloat64ToInt64"] = JSModule['_BinaryenTruncSatSFloat64ToInt64']()] = "TruncSatSFloat64ToInt64";
    Operations[Operations["TruncSatUFloat64ToInt32"] = JSModule['_BinaryenTruncSatUFloat64ToInt32']()] = "TruncSatUFloat64ToInt32";
    Operations[Operations["TruncSatUFloat64ToInt64"] = JSModule['_BinaryenTruncSatUFloat64ToInt64']()] = "TruncSatUFloat64ToInt64";
    Operations[Operations["ReinterpretFloat32"] = JSModule['_BinaryenReinterpretFloat32']()] = "ReinterpretFloat32";
    Operations[Operations["ReinterpretFloat64"] = JSModule['_BinaryenReinterpretFloat64']()] = "ReinterpretFloat64";
    Operations[Operations["ConvertSInt32ToFloat32"] = JSModule['_BinaryenConvertSInt32ToFloat32']()] = "ConvertSInt32ToFloat32";
    Operations[Operations["ConvertSInt32ToFloat64"] = JSModule['_BinaryenConvertSInt32ToFloat64']()] = "ConvertSInt32ToFloat64";
    Operations[Operations["ConvertUInt32ToFloat32"] = JSModule['_BinaryenConvertUInt32ToFloat32']()] = "ConvertUInt32ToFloat32";
    Operations[Operations["ConvertUInt32ToFloat64"] = JSModule['_BinaryenConvertUInt32ToFloat64']()] = "ConvertUInt32ToFloat64";
    Operations[Operations["ConvertSInt64ToFloat32"] = JSModule['_BinaryenConvertSInt64ToFloat32']()] = "ConvertSInt64ToFloat32";
    Operations[Operations["ConvertSInt64ToFloat64"] = JSModule['_BinaryenConvertSInt64ToFloat64']()] = "ConvertSInt64ToFloat64";
    Operations[Operations["ConvertUInt64ToFloat32"] = JSModule['_BinaryenConvertUInt64ToFloat32']()] = "ConvertUInt64ToFloat32";
    Operations[Operations["ConvertUInt64ToFloat64"] = JSModule['_BinaryenConvertUInt64ToFloat64']()] = "ConvertUInt64ToFloat64";
    Operations[Operations["PromoteFloat32"] = JSModule['_BinaryenPromoteFloat32']()] = "PromoteFloat32";
    Operations[Operations["DemoteFloat64"] = JSModule['_BinaryenDemoteFloat64']()] = "DemoteFloat64";
    Operations[Operations["ReinterpretInt32"] = JSModule['_BinaryenReinterpretInt32']()] = "ReinterpretInt32";
    Operations[Operations["ReinterpretInt64"] = JSModule['_BinaryenReinterpretInt64']()] = "ReinterpretInt64";
    Operations[Operations["ExtendS8Int32"] = JSModule['_BinaryenExtendS8Int32']()] = "ExtendS8Int32";
    Operations[Operations["ExtendS16Int32"] = JSModule['_BinaryenExtendS16Int32']()] = "ExtendS16Int32";
    Operations[Operations["ExtendS8Int64"] = JSModule['_BinaryenExtendS8Int64']()] = "ExtendS8Int64";
    Operations[Operations["ExtendS16Int64"] = JSModule['_BinaryenExtendS16Int64']()] = "ExtendS16Int64";
    Operations[Operations["ExtendS32Int64"] = JSModule['_BinaryenExtendS32Int64']()] = "ExtendS32Int64";
    Operations[Operations["AddInt32"] = JSModule['_BinaryenAddInt32']()] = "AddInt32";
    Operations[Operations["SubInt32"] = JSModule['_BinaryenSubInt32']()] = "SubInt32";
    Operations[Operations["MulInt32"] = JSModule['_BinaryenMulInt32']()] = "MulInt32";
    Operations[Operations["DivSInt32"] = JSModule['_BinaryenDivSInt32']()] = "DivSInt32";
    Operations[Operations["DivUInt32"] = JSModule['_BinaryenDivUInt32']()] = "DivUInt32";
    Operations[Operations["RemSInt32"] = JSModule['_BinaryenRemSInt32']()] = "RemSInt32";
    Operations[Operations["RemUInt32"] = JSModule['_BinaryenRemUInt32']()] = "RemUInt32";
    Operations[Operations["AndInt32"] = JSModule['_BinaryenAndInt32']()] = "AndInt32";
    Operations[Operations["OrInt32"] = JSModule['_BinaryenOrInt32']()] = "OrInt32";
    Operations[Operations["XorInt32"] = JSModule['_BinaryenXorInt32']()] = "XorInt32";
    Operations[Operations["ShlInt32"] = JSModule['_BinaryenShlInt32']()] = "ShlInt32";
    Operations[Operations["ShrUInt32"] = JSModule['_BinaryenShrUInt32']()] = "ShrUInt32";
    Operations[Operations["ShrSInt32"] = JSModule['_BinaryenShrSInt32']()] = "ShrSInt32";
    Operations[Operations["RotLInt32"] = JSModule['_BinaryenRotLInt32']()] = "RotLInt32";
    Operations[Operations["RotRInt32"] = JSModule['_BinaryenRotRInt32']()] = "RotRInt32";
    Operations[Operations["EqInt32"] = JSModule['_BinaryenEqInt32']()] = "EqInt32";
    Operations[Operations["NeInt32"] = JSModule['_BinaryenNeInt32']()] = "NeInt32";
    Operations[Operations["LtSInt32"] = JSModule['_BinaryenLtSInt32']()] = "LtSInt32";
    Operations[Operations["LtUInt32"] = JSModule['_BinaryenLtUInt32']()] = "LtUInt32";
    Operations[Operations["LeSInt32"] = JSModule['_BinaryenLeSInt32']()] = "LeSInt32";
    Operations[Operations["LeUInt32"] = JSModule['_BinaryenLeUInt32']()] = "LeUInt32";
    Operations[Operations["GtSInt32"] = JSModule['_BinaryenGtSInt32']()] = "GtSInt32";
    Operations[Operations["GtUInt32"] = JSModule['_BinaryenGtUInt32']()] = "GtUInt32";
    Operations[Operations["GeSInt32"] = JSModule['_BinaryenGeSInt32']()] = "GeSInt32";
    Operations[Operations["GeUInt32"] = JSModule['_BinaryenGeUInt32']()] = "GeUInt32";
    Operations[Operations["AddInt64"] = JSModule['_BinaryenAddInt64']()] = "AddInt64";
    Operations[Operations["SubInt64"] = JSModule['_BinaryenSubInt64']()] = "SubInt64";
    Operations[Operations["MulInt64"] = JSModule['_BinaryenMulInt64']()] = "MulInt64";
    Operations[Operations["DivSInt64"] = JSModule['_BinaryenDivSInt64']()] = "DivSInt64";
    Operations[Operations["DivUInt64"] = JSModule['_BinaryenDivUInt64']()] = "DivUInt64";
    Operations[Operations["RemSInt64"] = JSModule['_BinaryenRemSInt64']()] = "RemSInt64";
    Operations[Operations["RemUInt64"] = JSModule['_BinaryenRemUInt64']()] = "RemUInt64";
    Operations[Operations["AndInt64"] = JSModule['_BinaryenAndInt64']()] = "AndInt64";
    Operations[Operations["OrInt64"] = JSModule['_BinaryenOrInt64']()] = "OrInt64";
    Operations[Operations["XorInt64"] = JSModule['_BinaryenXorInt64']()] = "XorInt64";
    Operations[Operations["ShlInt64"] = JSModule['_BinaryenShlInt64']()] = "ShlInt64";
    Operations[Operations["ShrUInt64"] = JSModule['_BinaryenShrUInt64']()] = "ShrUInt64";
    Operations[Operations["ShrSInt64"] = JSModule['_BinaryenShrSInt64']()] = "ShrSInt64";
    Operations[Operations["RotLInt64"] = JSModule['_BinaryenRotLInt64']()] = "RotLInt64";
    Operations[Operations["RotRInt64"] = JSModule['_BinaryenRotRInt64']()] = "RotRInt64";
    Operations[Operations["EqInt64"] = JSModule['_BinaryenEqInt64']()] = "EqInt64";
    Operations[Operations["NeInt64"] = JSModule['_BinaryenNeInt64']()] = "NeInt64";
    Operations[Operations["LtSInt64"] = JSModule['_BinaryenLtSInt64']()] = "LtSInt64";
    Operations[Operations["LtUInt64"] = JSModule['_BinaryenLtUInt64']()] = "LtUInt64";
    Operations[Operations["LeSInt64"] = JSModule['_BinaryenLeSInt64']()] = "LeSInt64";
    Operations[Operations["LeUInt64"] = JSModule['_BinaryenLeUInt64']()] = "LeUInt64";
    Operations[Operations["GtSInt64"] = JSModule['_BinaryenGtSInt64']()] = "GtSInt64";
    Operations[Operations["GtUInt64"] = JSModule['_BinaryenGtUInt64']()] = "GtUInt64";
    Operations[Operations["GeSInt64"] = JSModule['_BinaryenGeSInt64']()] = "GeSInt64";
    Operations[Operations["GeUInt64"] = JSModule['_BinaryenGeUInt64']()] = "GeUInt64";
    Operations[Operations["AddFloat32"] = JSModule['_BinaryenAddFloat32']()] = "AddFloat32";
    Operations[Operations["SubFloat32"] = JSModule['_BinaryenSubFloat32']()] = "SubFloat32";
    Operations[Operations["MulFloat32"] = JSModule['_BinaryenMulFloat32']()] = "MulFloat32";
    Operations[Operations["DivFloat32"] = JSModule['_BinaryenDivFloat32']()] = "DivFloat32";
    Operations[Operations["CopySignFloat32"] = JSModule['_BinaryenCopySignFloat32']()] = "CopySignFloat32";
    Operations[Operations["MinFloat32"] = JSModule['_BinaryenMinFloat32']()] = "MinFloat32";
    Operations[Operations["MaxFloat32"] = JSModule['_BinaryenMaxFloat32']()] = "MaxFloat32";
    Operations[Operations["EqFloat32"] = JSModule['_BinaryenEqFloat32']()] = "EqFloat32";
    Operations[Operations["NeFloat32"] = JSModule['_BinaryenNeFloat32']()] = "NeFloat32";
    Operations[Operations["LtFloat32"] = JSModule['_BinaryenLtFloat32']()] = "LtFloat32";
    Operations[Operations["LeFloat32"] = JSModule['_BinaryenLeFloat32']()] = "LeFloat32";
    Operations[Operations["GtFloat32"] = JSModule['_BinaryenGtFloat32']()] = "GtFloat32";
    Operations[Operations["GeFloat32"] = JSModule['_BinaryenGeFloat32']()] = "GeFloat32";
    Operations[Operations["AddFloat64"] = JSModule['_BinaryenAddFloat64']()] = "AddFloat64";
    Operations[Operations["SubFloat64"] = JSModule['_BinaryenSubFloat64']()] = "SubFloat64";
    Operations[Operations["MulFloat64"] = JSModule['_BinaryenMulFloat64']()] = "MulFloat64";
    Operations[Operations["DivFloat64"] = JSModule['_BinaryenDivFloat64']()] = "DivFloat64";
    Operations[Operations["CopySignFloat64"] = JSModule['_BinaryenCopySignFloat64']()] = "CopySignFloat64";
    Operations[Operations["MinFloat64"] = JSModule['_BinaryenMinFloat64']()] = "MinFloat64";
    Operations[Operations["MaxFloat64"] = JSModule['_BinaryenMaxFloat64']()] = "MaxFloat64";
    Operations[Operations["EqFloat64"] = JSModule['_BinaryenEqFloat64']()] = "EqFloat64";
    Operations[Operations["NeFloat64"] = JSModule['_BinaryenNeFloat64']()] = "NeFloat64";
    Operations[Operations["LtFloat64"] = JSModule['_BinaryenLtFloat64']()] = "LtFloat64";
    Operations[Operations["LeFloat64"] = JSModule['_BinaryenLeFloat64']()] = "LeFloat64";
    Operations[Operations["GtFloat64"] = JSModule['_BinaryenGtFloat64']()] = "GtFloat64";
    Operations[Operations["GeFloat64"] = JSModule['_BinaryenGeFloat64']()] = "GeFloat64";
    Operations[Operations["AtomicRMWAdd"] = JSModule['_BinaryenAtomicRMWAdd']()] = "AtomicRMWAdd";
    Operations[Operations["AtomicRMWSub"] = JSModule['_BinaryenAtomicRMWSub']()] = "AtomicRMWSub";
    Operations[Operations["AtomicRMWAnd"] = JSModule['_BinaryenAtomicRMWAnd']()] = "AtomicRMWAnd";
    Operations[Operations["AtomicRMWOr"] = JSModule['_BinaryenAtomicRMWOr']()] = "AtomicRMWOr";
    Operations[Operations["AtomicRMWXor"] = JSModule['_BinaryenAtomicRMWXor']()] = "AtomicRMWXor";
    Operations[Operations["AtomicRMWXchg"] = JSModule['_BinaryenAtomicRMWXchg']()] = "AtomicRMWXchg";
    Operations[Operations["SplatVecI8x16"] = JSModule['_BinaryenSplatVecI8x16']()] = "SplatVecI8x16";
    Operations[Operations["ExtractLaneSVecI8x16"] = JSModule['_BinaryenExtractLaneSVecI8x16']()] = "ExtractLaneSVecI8x16";
    Operations[Operations["ExtractLaneUVecI8x16"] = JSModule['_BinaryenExtractLaneUVecI8x16']()] = "ExtractLaneUVecI8x16";
    Operations[Operations["ReplaceLaneVecI8x16"] = JSModule['_BinaryenReplaceLaneVecI8x16']()] = "ReplaceLaneVecI8x16";
    Operations[Operations["SplatVecI16x8"] = JSModule['_BinaryenSplatVecI16x8']()] = "SplatVecI16x8";
    Operations[Operations["ExtractLaneSVecI16x8"] = JSModule['_BinaryenExtractLaneSVecI16x8']()] = "ExtractLaneSVecI16x8";
    Operations[Operations["ExtractLaneUVecI16x8"] = JSModule['_BinaryenExtractLaneUVecI16x8']()] = "ExtractLaneUVecI16x8";
    Operations[Operations["ReplaceLaneVecI16x8"] = JSModule['_BinaryenReplaceLaneVecI16x8']()] = "ReplaceLaneVecI16x8";
    Operations[Operations["SplatVecI32x4"] = JSModule['_BinaryenSplatVecI32x4']()] = "SplatVecI32x4";
    Operations[Operations["ExtractLaneVecI32x4"] = JSModule['_BinaryenExtractLaneVecI32x4']()] = "ExtractLaneVecI32x4";
    Operations[Operations["ReplaceLaneVecI32x4"] = JSModule['_BinaryenReplaceLaneVecI32x4']()] = "ReplaceLaneVecI32x4";
    Operations[Operations["SplatVecI64x2"] = JSModule['_BinaryenSplatVecI64x2']()] = "SplatVecI64x2";
    Operations[Operations["ExtractLaneVecI64x2"] = JSModule['_BinaryenExtractLaneVecI64x2']()] = "ExtractLaneVecI64x2";
    Operations[Operations["ReplaceLaneVecI64x2"] = JSModule['_BinaryenReplaceLaneVecI64x2']()] = "ReplaceLaneVecI64x2";
    Operations[Operations["SplatVecF32x4"] = JSModule['_BinaryenSplatVecF32x4']()] = "SplatVecF32x4";
    Operations[Operations["ExtractLaneVecF32x4"] = JSModule['_BinaryenExtractLaneVecF32x4']()] = "ExtractLaneVecF32x4";
    Operations[Operations["ReplaceLaneVecF32x4"] = JSModule['_BinaryenReplaceLaneVecF32x4']()] = "ReplaceLaneVecF32x4";
    Operations[Operations["SplatVecF64x2"] = JSModule['_BinaryenSplatVecF64x2']()] = "SplatVecF64x2";
    Operations[Operations["ExtractLaneVecF64x2"] = JSModule['_BinaryenExtractLaneVecF64x2']()] = "ExtractLaneVecF64x2";
    Operations[Operations["ReplaceLaneVecF64x2"] = JSModule['_BinaryenReplaceLaneVecF64x2']()] = "ReplaceLaneVecF64x2";
    Operations[Operations["EqVecI8x16"] = JSModule['_BinaryenEqVecI8x16']()] = "EqVecI8x16";
    Operations[Operations["NeVecI8x16"] = JSModule['_BinaryenNeVecI8x16']()] = "NeVecI8x16";
    Operations[Operations["LtSVecI8x16"] = JSModule['_BinaryenLtSVecI8x16']()] = "LtSVecI8x16";
    Operations[Operations["LtUVecI8x16"] = JSModule['_BinaryenLtUVecI8x16']()] = "LtUVecI8x16";
    Operations[Operations["GtSVecI8x16"] = JSModule['_BinaryenGtSVecI8x16']()] = "GtSVecI8x16";
    Operations[Operations["GtUVecI8x16"] = JSModule['_BinaryenGtUVecI8x16']()] = "GtUVecI8x16";
    Operations[Operations["LeSVecI8x16"] = JSModule['_BinaryenLeSVecI8x16']()] = "LeSVecI8x16";
    Operations[Operations["LeUVecI8x16"] = JSModule['_BinaryenLeUVecI8x16']()] = "LeUVecI8x16";
    Operations[Operations["GeSVecI8x16"] = JSModule['_BinaryenGeSVecI8x16']()] = "GeSVecI8x16";
    Operations[Operations["GeUVecI8x16"] = JSModule['_BinaryenGeUVecI8x16']()] = "GeUVecI8x16";
    Operations[Operations["EqVecI16x8"] = JSModule['_BinaryenEqVecI16x8']()] = "EqVecI16x8";
    Operations[Operations["NeVecI16x8"] = JSModule['_BinaryenNeVecI16x8']()] = "NeVecI16x8";
    Operations[Operations["LtSVecI16x8"] = JSModule['_BinaryenLtSVecI16x8']()] = "LtSVecI16x8";
    Operations[Operations["LtUVecI16x8"] = JSModule['_BinaryenLtUVecI16x8']()] = "LtUVecI16x8";
    Operations[Operations["GtSVecI16x8"] = JSModule['_BinaryenGtSVecI16x8']()] = "GtSVecI16x8";
    Operations[Operations["GtUVecI16x8"] = JSModule['_BinaryenGtUVecI16x8']()] = "GtUVecI16x8";
    Operations[Operations["LeSVecI16x8"] = JSModule['_BinaryenLeSVecI16x8']()] = "LeSVecI16x8";
    Operations[Operations["LeUVecI16x8"] = JSModule['_BinaryenLeUVecI16x8']()] = "LeUVecI16x8";
    Operations[Operations["GeSVecI16x8"] = JSModule['_BinaryenGeSVecI16x8']()] = "GeSVecI16x8";
    Operations[Operations["GeUVecI16x8"] = JSModule['_BinaryenGeUVecI16x8']()] = "GeUVecI16x8";
    Operations[Operations["EqVecI32x4"] = JSModule['_BinaryenEqVecI32x4']()] = "EqVecI32x4";
    Operations[Operations["NeVecI32x4"] = JSModule['_BinaryenNeVecI32x4']()] = "NeVecI32x4";
    Operations[Operations["LtSVecI32x4"] = JSModule['_BinaryenLtSVecI32x4']()] = "LtSVecI32x4";
    Operations[Operations["LtUVecI32x4"] = JSModule['_BinaryenLtUVecI32x4']()] = "LtUVecI32x4";
    Operations[Operations["GtSVecI32x4"] = JSModule['_BinaryenGtSVecI32x4']()] = "GtSVecI32x4";
    Operations[Operations["GtUVecI32x4"] = JSModule['_BinaryenGtUVecI32x4']()] = "GtUVecI32x4";
    Operations[Operations["LeSVecI32x4"] = JSModule['_BinaryenLeSVecI32x4']()] = "LeSVecI32x4";
    Operations[Operations["LeUVecI32x4"] = JSModule['_BinaryenLeUVecI32x4']()] = "LeUVecI32x4";
    Operations[Operations["GeSVecI32x4"] = JSModule['_BinaryenGeSVecI32x4']()] = "GeSVecI32x4";
    Operations[Operations["GeUVecI32x4"] = JSModule['_BinaryenGeUVecI32x4']()] = "GeUVecI32x4";
    Operations[Operations["EqVecI64x2"] = JSModule['_BinaryenEqVecI64x2']()] = "EqVecI64x2";
    Operations[Operations["NeVecI64x2"] = JSModule['_BinaryenNeVecI64x2']()] = "NeVecI64x2";
    Operations[Operations["LtSVecI64x2"] = JSModule['_BinaryenLtSVecI64x2']()] = "LtSVecI64x2";
    Operations[Operations["GtSVecI64x2"] = JSModule['_BinaryenGtSVecI64x2']()] = "GtSVecI64x2";
    Operations[Operations["LeSVecI64x2"] = JSModule['_BinaryenLeSVecI64x2']()] = "LeSVecI64x2";
    Operations[Operations["GeSVecI64x2"] = JSModule['_BinaryenGeSVecI64x2']()] = "GeSVecI64x2";
    Operations[Operations["EqVecF32x4"] = JSModule['_BinaryenEqVecF32x4']()] = "EqVecF32x4";
    Operations[Operations["NeVecF32x4"] = JSModule['_BinaryenNeVecF32x4']()] = "NeVecF32x4";
    Operations[Operations["LtVecF32x4"] = JSModule['_BinaryenLtVecF32x4']()] = "LtVecF32x4";
    Operations[Operations["GtVecF32x4"] = JSModule['_BinaryenGtVecF32x4']()] = "GtVecF32x4";
    Operations[Operations["LeVecF32x4"] = JSModule['_BinaryenLeVecF32x4']()] = "LeVecF32x4";
    Operations[Operations["GeVecF32x4"] = JSModule['_BinaryenGeVecF32x4']()] = "GeVecF32x4";
    Operations[Operations["EqVecF64x2"] = JSModule['_BinaryenEqVecF64x2']()] = "EqVecF64x2";
    Operations[Operations["NeVecF64x2"] = JSModule['_BinaryenNeVecF64x2']()] = "NeVecF64x2";
    Operations[Operations["LtVecF64x2"] = JSModule['_BinaryenLtVecF64x2']()] = "LtVecF64x2";
    Operations[Operations["GtVecF64x2"] = JSModule['_BinaryenGtVecF64x2']()] = "GtVecF64x2";
    Operations[Operations["LeVecF64x2"] = JSModule['_BinaryenLeVecF64x2']()] = "LeVecF64x2";
    Operations[Operations["GeVecF64x2"] = JSModule['_BinaryenGeVecF64x2']()] = "GeVecF64x2";
    Operations[Operations["NotVec128"] = JSModule['_BinaryenNotVec128']()] = "NotVec128";
    Operations[Operations["AndVec128"] = JSModule['_BinaryenAndVec128']()] = "AndVec128";
    Operations[Operations["OrVec128"] = JSModule['_BinaryenOrVec128']()] = "OrVec128";
    Operations[Operations["XorVec128"] = JSModule['_BinaryenXorVec128']()] = "XorVec128";
    Operations[Operations["AndNotVec128"] = JSModule['_BinaryenAndNotVec128']()] = "AndNotVec128";
    Operations[Operations["BitselectVec128"] = JSModule['_BinaryenBitselectVec128']()] = "BitselectVec128";
    Operations[Operations["RelaxedFmaVecF32x4"] = JSModule['_BinaryenRelaxedFmaVecF32x4']()] = "RelaxedFmaVecF32x4";
    Operations[Operations["RelaxedFmsVecF32x4"] = JSModule['_BinaryenRelaxedFmsVecF32x4']()] = "RelaxedFmsVecF32x4";
    Operations[Operations["RelaxedFmaVecF64x2"] = JSModule['_BinaryenRelaxedFmaVecF64x2']()] = "RelaxedFmaVecF64x2";
    Operations[Operations["RelaxedFmsVecF64x2"] = JSModule['_BinaryenRelaxedFmsVecF64x2']()] = "RelaxedFmsVecF64x2";
    Operations[Operations["LaneselectI8x16"] = JSModule['_BinaryenLaneselectI8x16']()] = "LaneselectI8x16";
    Operations[Operations["LaneselectI16x8"] = JSModule['_BinaryenLaneselectI16x8']()] = "LaneselectI16x8";
    Operations[Operations["LaneselectI32x4"] = JSModule['_BinaryenLaneselectI32x4']()] = "LaneselectI32x4";
    Operations[Operations["LaneselectI64x2"] = JSModule['_BinaryenLaneselectI64x2']()] = "LaneselectI64x2";
    Operations[Operations["DotI8x16I7x16AddSToVecI32x4"] = JSModule['_BinaryenDotI8x16I7x16AddSToVecI32x4']()] = "DotI8x16I7x16AddSToVecI32x4";
    Operations[Operations["AnyTrueVec128"] = JSModule['_BinaryenAnyTrueVec128']()] = "AnyTrueVec128";
    Operations[Operations["PopcntVecI8x16"] = JSModule['_BinaryenPopcntVecI8x16']()] = "PopcntVecI8x16";
    Operations[Operations["AbsVecI8x16"] = JSModule['_BinaryenAbsVecI8x16']()] = "AbsVecI8x16";
    Operations[Operations["NegVecI8x16"] = JSModule['_BinaryenNegVecI8x16']()] = "NegVecI8x16";
    Operations[Operations["AllTrueVecI8x16"] = JSModule['_BinaryenAllTrueVecI8x16']()] = "AllTrueVecI8x16";
    Operations[Operations["BitmaskVecI8x16"] = JSModule['_BinaryenBitmaskVecI8x16']()] = "BitmaskVecI8x16";
    Operations[Operations["ShlVecI8x16"] = JSModule['_BinaryenShlVecI8x16']()] = "ShlVecI8x16";
    Operations[Operations["ShrSVecI8x16"] = JSModule['_BinaryenShrSVecI8x16']()] = "ShrSVecI8x16";
    Operations[Operations["ShrUVecI8x16"] = JSModule['_BinaryenShrUVecI8x16']()] = "ShrUVecI8x16";
    Operations[Operations["AddVecI8x16"] = JSModule['_BinaryenAddVecI8x16']()] = "AddVecI8x16";
    Operations[Operations["AddSatSVecI8x16"] = JSModule['_BinaryenAddSatSVecI8x16']()] = "AddSatSVecI8x16";
    Operations[Operations["AddSatUVecI8x16"] = JSModule['_BinaryenAddSatUVecI8x16']()] = "AddSatUVecI8x16";
    Operations[Operations["SubVecI8x16"] = JSModule['_BinaryenSubVecI8x16']()] = "SubVecI8x16";
    Operations[Operations["SubSatSVecI8x16"] = JSModule['_BinaryenSubSatSVecI8x16']()] = "SubSatSVecI8x16";
    Operations[Operations["SubSatUVecI8x16"] = JSModule['_BinaryenSubSatUVecI8x16']()] = "SubSatUVecI8x16";
    Operations[Operations["MinSVecI8x16"] = JSModule['_BinaryenMinSVecI8x16']()] = "MinSVecI8x16";
    Operations[Operations["MinUVecI8x16"] = JSModule['_BinaryenMinUVecI8x16']()] = "MinUVecI8x16";
    Operations[Operations["MaxSVecI8x16"] = JSModule['_BinaryenMaxSVecI8x16']()] = "MaxSVecI8x16";
    Operations[Operations["MaxUVecI8x16"] = JSModule['_BinaryenMaxUVecI8x16']()] = "MaxUVecI8x16";
    Operations[Operations["AvgrUVecI8x16"] = JSModule['_BinaryenAvgrUVecI8x16']()] = "AvgrUVecI8x16";
    Operations[Operations["AbsVecI16x8"] = JSModule['_BinaryenAbsVecI16x8']()] = "AbsVecI16x8";
    Operations[Operations["NegVecI16x8"] = JSModule['_BinaryenNegVecI16x8']()] = "NegVecI16x8";
    Operations[Operations["AllTrueVecI16x8"] = JSModule['_BinaryenAllTrueVecI16x8']()] = "AllTrueVecI16x8";
    Operations[Operations["BitmaskVecI16x8"] = JSModule['_BinaryenBitmaskVecI16x8']()] = "BitmaskVecI16x8";
    Operations[Operations["ShlVecI16x8"] = JSModule['_BinaryenShlVecI16x8']()] = "ShlVecI16x8";
    Operations[Operations["ShrSVecI16x8"] = JSModule['_BinaryenShrSVecI16x8']()] = "ShrSVecI16x8";
    Operations[Operations["ShrUVecI16x8"] = JSModule['_BinaryenShrUVecI16x8']()] = "ShrUVecI16x8";
    Operations[Operations["AddVecI16x8"] = JSModule['_BinaryenAddVecI16x8']()] = "AddVecI16x8";
    Operations[Operations["AddSatSVecI16x8"] = JSModule['_BinaryenAddSatSVecI16x8']()] = "AddSatSVecI16x8";
    Operations[Operations["AddSatUVecI16x8"] = JSModule['_BinaryenAddSatUVecI16x8']()] = "AddSatUVecI16x8";
    Operations[Operations["SubVecI16x8"] = JSModule['_BinaryenSubVecI16x8']()] = "SubVecI16x8";
    Operations[Operations["SubSatSVecI16x8"] = JSModule['_BinaryenSubSatSVecI16x8']()] = "SubSatSVecI16x8";
    Operations[Operations["SubSatUVecI16x8"] = JSModule['_BinaryenSubSatUVecI16x8']()] = "SubSatUVecI16x8";
    Operations[Operations["MulVecI16x8"] = JSModule['_BinaryenMulVecI16x8']()] = "MulVecI16x8";
    Operations[Operations["MinSVecI16x8"] = JSModule['_BinaryenMinSVecI16x8']()] = "MinSVecI16x8";
    Operations[Operations["MinUVecI16x8"] = JSModule['_BinaryenMinUVecI16x8']()] = "MinUVecI16x8";
    Operations[Operations["MaxSVecI16x8"] = JSModule['_BinaryenMaxSVecI16x8']()] = "MaxSVecI16x8";
    Operations[Operations["MaxUVecI16x8"] = JSModule['_BinaryenMaxUVecI16x8']()] = "MaxUVecI16x8";
    Operations[Operations["AvgrUVecI16x8"] = JSModule['_BinaryenAvgrUVecI16x8']()] = "AvgrUVecI16x8";
    Operations[Operations["Q15MulrSatSVecI16x8"] = JSModule['_BinaryenQ15MulrSatSVecI16x8']()] = "Q15MulrSatSVecI16x8";
    Operations[Operations["ExtMulLowSVecI16x8"] = JSModule['_BinaryenExtMulLowSVecI16x8']()] = "ExtMulLowSVecI16x8";
    Operations[Operations["ExtMulHighSVecI16x8"] = JSModule['_BinaryenExtMulHighSVecI16x8']()] = "ExtMulHighSVecI16x8";
    Operations[Operations["ExtMulLowUVecI16x8"] = JSModule['_BinaryenExtMulLowUVecI16x8']()] = "ExtMulLowUVecI16x8";
    Operations[Operations["ExtMulHighUVecI16x8"] = JSModule['_BinaryenExtMulHighUVecI16x8']()] = "ExtMulHighUVecI16x8";
    Operations[Operations["DotSVecI16x8ToVecI32x4"] = JSModule['_BinaryenDotSVecI16x8ToVecI32x4']()] = "DotSVecI16x8ToVecI32x4";
    Operations[Operations["ExtMulLowSVecI32x4"] = JSModule['_BinaryenExtMulLowSVecI32x4']()] = "ExtMulLowSVecI32x4";
    Operations[Operations["ExtMulHighSVecI32x4"] = JSModule['_BinaryenExtMulHighSVecI32x4']()] = "ExtMulHighSVecI32x4";
    Operations[Operations["ExtMulLowUVecI32x4"] = JSModule['_BinaryenExtMulLowUVecI32x4']()] = "ExtMulLowUVecI32x4";
    Operations[Operations["ExtMulHighUVecI32x4"] = JSModule['_BinaryenExtMulHighUVecI32x4']()] = "ExtMulHighUVecI32x4";
    Operations[Operations["AbsVecI32x4"] = JSModule['_BinaryenAbsVecI32x4']()] = "AbsVecI32x4";
    Operations[Operations["NegVecI32x4"] = JSModule['_BinaryenNegVecI32x4']()] = "NegVecI32x4";
    Operations[Operations["AllTrueVecI32x4"] = JSModule['_BinaryenAllTrueVecI32x4']()] = "AllTrueVecI32x4";
    Operations[Operations["BitmaskVecI32x4"] = JSModule['_BinaryenBitmaskVecI32x4']()] = "BitmaskVecI32x4";
    Operations[Operations["ShlVecI32x4"] = JSModule['_BinaryenShlVecI32x4']()] = "ShlVecI32x4";
    Operations[Operations["ShrSVecI32x4"] = JSModule['_BinaryenShrSVecI32x4']()] = "ShrSVecI32x4";
    Operations[Operations["ShrUVecI32x4"] = JSModule['_BinaryenShrUVecI32x4']()] = "ShrUVecI32x4";
    Operations[Operations["AddVecI32x4"] = JSModule['_BinaryenAddVecI32x4']()] = "AddVecI32x4";
    Operations[Operations["SubVecI32x4"] = JSModule['_BinaryenSubVecI32x4']()] = "SubVecI32x4";
    Operations[Operations["MulVecI32x4"] = JSModule['_BinaryenMulVecI32x4']()] = "MulVecI32x4";
    Operations[Operations["MinSVecI32x4"] = JSModule['_BinaryenMinSVecI32x4']()] = "MinSVecI32x4";
    Operations[Operations["MinUVecI32x4"] = JSModule['_BinaryenMinUVecI32x4']()] = "MinUVecI32x4";
    Operations[Operations["MaxSVecI32x4"] = JSModule['_BinaryenMaxSVecI32x4']()] = "MaxSVecI32x4";
    Operations[Operations["MaxUVecI32x4"] = JSModule['_BinaryenMaxUVecI32x4']()] = "MaxUVecI32x4";
    Operations[Operations["AbsVecI64x2"] = JSModule['_BinaryenAbsVecI64x2']()] = "AbsVecI64x2";
    Operations[Operations["NegVecI64x2"] = JSModule['_BinaryenNegVecI64x2']()] = "NegVecI64x2";
    Operations[Operations["AllTrueVecI64x2"] = JSModule['_BinaryenAllTrueVecI64x2']()] = "AllTrueVecI64x2";
    Operations[Operations["BitmaskVecI64x2"] = JSModule['_BinaryenBitmaskVecI64x2']()] = "BitmaskVecI64x2";
    Operations[Operations["ShlVecI64x2"] = JSModule['_BinaryenShlVecI64x2']()] = "ShlVecI64x2";
    Operations[Operations["ShrSVecI64x2"] = JSModule['_BinaryenShrSVecI64x2']()] = "ShrSVecI64x2";
    Operations[Operations["ShrUVecI64x2"] = JSModule['_BinaryenShrUVecI64x2']()] = "ShrUVecI64x2";
    Operations[Operations["AddVecI64x2"] = JSModule['_BinaryenAddVecI64x2']()] = "AddVecI64x2";
    Operations[Operations["SubVecI64x2"] = JSModule['_BinaryenSubVecI64x2']()] = "SubVecI64x2";
    Operations[Operations["MulVecI64x2"] = JSModule['_BinaryenMulVecI64x2']()] = "MulVecI64x2";
    Operations[Operations["ExtMulLowSVecI64x2"] = JSModule['_BinaryenExtMulLowSVecI64x2']()] = "ExtMulLowSVecI64x2";
    Operations[Operations["ExtMulHighSVecI64x2"] = JSModule['_BinaryenExtMulHighSVecI64x2']()] = "ExtMulHighSVecI64x2";
    Operations[Operations["ExtMulLowUVecI64x2"] = JSModule['_BinaryenExtMulLowUVecI64x2']()] = "ExtMulLowUVecI64x2";
    Operations[Operations["ExtMulHighUVecI64x2"] = JSModule['_BinaryenExtMulHighUVecI64x2']()] = "ExtMulHighUVecI64x2";
    Operations[Operations["AbsVecF32x4"] = JSModule['_BinaryenAbsVecF32x4']()] = "AbsVecF32x4";
    Operations[Operations["NegVecF32x4"] = JSModule['_BinaryenNegVecF32x4']()] = "NegVecF32x4";
    Operations[Operations["SqrtVecF32x4"] = JSModule['_BinaryenSqrtVecF32x4']()] = "SqrtVecF32x4";
    Operations[Operations["AddVecF32x4"] = JSModule['_BinaryenAddVecF32x4']()] = "AddVecF32x4";
    Operations[Operations["SubVecF32x4"] = JSModule['_BinaryenSubVecF32x4']()] = "SubVecF32x4";
    Operations[Operations["MulVecF32x4"] = JSModule['_BinaryenMulVecF32x4']()] = "MulVecF32x4";
    Operations[Operations["DivVecF32x4"] = JSModule['_BinaryenDivVecF32x4']()] = "DivVecF32x4";
    Operations[Operations["MinVecF32x4"] = JSModule['_BinaryenMinVecF32x4']()] = "MinVecF32x4";
    Operations[Operations["MaxVecF32x4"] = JSModule['_BinaryenMaxVecF32x4']()] = "MaxVecF32x4";
    Operations[Operations["PMinVecF32x4"] = JSModule['_BinaryenPMinVecF32x4']()] = "PMinVecF32x4";
    Operations[Operations["PMaxVecF32x4"] = JSModule['_BinaryenPMaxVecF32x4']()] = "PMaxVecF32x4";
    Operations[Operations["CeilVecF32x4"] = JSModule['_BinaryenCeilVecF32x4']()] = "CeilVecF32x4";
    Operations[Operations["FloorVecF32x4"] = JSModule['_BinaryenFloorVecF32x4']()] = "FloorVecF32x4";
    Operations[Operations["TruncVecF32x4"] = JSModule['_BinaryenTruncVecF32x4']()] = "TruncVecF32x4";
    Operations[Operations["NearestVecF32x4"] = JSModule['_BinaryenNearestVecF32x4']()] = "NearestVecF32x4";
    Operations[Operations["AbsVecF64x2"] = JSModule['_BinaryenAbsVecF64x2']()] = "AbsVecF64x2";
    Operations[Operations["NegVecF64x2"] = JSModule['_BinaryenNegVecF64x2']()] = "NegVecF64x2";
    Operations[Operations["SqrtVecF64x2"] = JSModule['_BinaryenSqrtVecF64x2']()] = "SqrtVecF64x2";
    Operations[Operations["AddVecF64x2"] = JSModule['_BinaryenAddVecF64x2']()] = "AddVecF64x2";
    Operations[Operations["SubVecF64x2"] = JSModule['_BinaryenSubVecF64x2']()] = "SubVecF64x2";
    Operations[Operations["MulVecF64x2"] = JSModule['_BinaryenMulVecF64x2']()] = "MulVecF64x2";
    Operations[Operations["DivVecF64x2"] = JSModule['_BinaryenDivVecF64x2']()] = "DivVecF64x2";
    Operations[Operations["MinVecF64x2"] = JSModule['_BinaryenMinVecF64x2']()] = "MinVecF64x2";
    Operations[Operations["MaxVecF64x2"] = JSModule['_BinaryenMaxVecF64x2']()] = "MaxVecF64x2";
    Operations[Operations["PMinVecF64x2"] = JSModule['_BinaryenPMinVecF64x2']()] = "PMinVecF64x2";
    Operations[Operations["PMaxVecF64x2"] = JSModule['_BinaryenPMaxVecF64x2']()] = "PMaxVecF64x2";
    Operations[Operations["CeilVecF64x2"] = JSModule['_BinaryenCeilVecF64x2']()] = "CeilVecF64x2";
    Operations[Operations["FloorVecF64x2"] = JSModule['_BinaryenFloorVecF64x2']()] = "FloorVecF64x2";
    Operations[Operations["TruncVecF64x2"] = JSModule['_BinaryenTruncVecF64x2']()] = "TruncVecF64x2";
    Operations[Operations["NearestVecF64x2"] = JSModule['_BinaryenNearestVecF64x2']()] = "NearestVecF64x2";
    Operations[Operations["ExtAddPairwiseSVecI8x16ToI16x8"] = JSModule['_BinaryenExtAddPairwiseSVecI8x16ToI16x8']()] = "ExtAddPairwiseSVecI8x16ToI16x8";
    Operations[Operations["ExtAddPairwiseUVecI8x16ToI16x8"] = JSModule['_BinaryenExtAddPairwiseUVecI8x16ToI16x8']()] = "ExtAddPairwiseUVecI8x16ToI16x8";
    Operations[Operations["ExtAddPairwiseSVecI16x8ToI32x4"] = JSModule['_BinaryenExtAddPairwiseSVecI16x8ToI32x4']()] = "ExtAddPairwiseSVecI16x8ToI32x4";
    Operations[Operations["ExtAddPairwiseUVecI16x8ToI32x4"] = JSModule['_BinaryenExtAddPairwiseUVecI16x8ToI32x4']()] = "ExtAddPairwiseUVecI16x8ToI32x4";
    Operations[Operations["TruncSatSVecF32x4ToVecI32x4"] = JSModule['_BinaryenTruncSatSVecF32x4ToVecI32x4']()] = "TruncSatSVecF32x4ToVecI32x4";
    Operations[Operations["TruncSatUVecF32x4ToVecI32x4"] = JSModule['_BinaryenTruncSatUVecF32x4ToVecI32x4']()] = "TruncSatUVecF32x4ToVecI32x4";
    Operations[Operations["ConvertSVecI32x4ToVecF32x4"] = JSModule['_BinaryenConvertSVecI32x4ToVecF32x4']()] = "ConvertSVecI32x4ToVecF32x4";
    Operations[Operations["ConvertUVecI32x4ToVecF32x4"] = JSModule['_BinaryenConvertUVecI32x4ToVecF32x4']()] = "ConvertUVecI32x4ToVecF32x4";
    Operations[Operations["Load8SplatVec128"] = JSModule['_BinaryenLoad8SplatVec128']()] = "Load8SplatVec128";
    Operations[Operations["Load16SplatVec128"] = JSModule['_BinaryenLoad16SplatVec128']()] = "Load16SplatVec128";
    Operations[Operations["Load32SplatVec128"] = JSModule['_BinaryenLoad32SplatVec128']()] = "Load32SplatVec128";
    Operations[Operations["Load64SplatVec128"] = JSModule['_BinaryenLoad64SplatVec128']()] = "Load64SplatVec128";
    Operations[Operations["Load8x8SVec128"] = JSModule['_BinaryenLoad8x8SVec128']()] = "Load8x8SVec128";
    Operations[Operations["Load8x8UVec128"] = JSModule['_BinaryenLoad8x8UVec128']()] = "Load8x8UVec128";
    Operations[Operations["Load16x4SVec128"] = JSModule['_BinaryenLoad16x4SVec128']()] = "Load16x4SVec128";
    Operations[Operations["Load16x4UVec128"] = JSModule['_BinaryenLoad16x4UVec128']()] = "Load16x4UVec128";
    Operations[Operations["Load32x2SVec128"] = JSModule['_BinaryenLoad32x2SVec128']()] = "Load32x2SVec128";
    Operations[Operations["Load32x2UVec128"] = JSModule['_BinaryenLoad32x2UVec128']()] = "Load32x2UVec128";
    Operations[Operations["Load32ZeroVec128"] = JSModule['_BinaryenLoad32ZeroVec128']()] = "Load32ZeroVec128";
    Operations[Operations["Load64ZeroVec128"] = JSModule['_BinaryenLoad64ZeroVec128']()] = "Load64ZeroVec128";
    Operations[Operations["Load8LaneVec128"] = JSModule['_BinaryenLoad8LaneVec128']()] = "Load8LaneVec128";
    Operations[Operations["Load16LaneVec128"] = JSModule['_BinaryenLoad16LaneVec128']()] = "Load16LaneVec128";
    Operations[Operations["Load32LaneVec128"] = JSModule['_BinaryenLoad32LaneVec128']()] = "Load32LaneVec128";
    Operations[Operations["Load64LaneVec128"] = JSModule['_BinaryenLoad64LaneVec128']()] = "Load64LaneVec128";
    Operations[Operations["Store8LaneVec128"] = JSModule['_BinaryenStore8LaneVec128']()] = "Store8LaneVec128";
    Operations[Operations["Store16LaneVec128"] = JSModule['_BinaryenStore16LaneVec128']()] = "Store16LaneVec128";
    Operations[Operations["Store32LaneVec128"] = JSModule['_BinaryenStore32LaneVec128']()] = "Store32LaneVec128";
    Operations[Operations["Store64LaneVec128"] = JSModule['_BinaryenStore64LaneVec128']()] = "Store64LaneVec128";
    Operations[Operations["NarrowSVecI16x8ToVecI8x16"] = JSModule['_BinaryenNarrowSVecI16x8ToVecI8x16']()] = "NarrowSVecI16x8ToVecI8x16";
    Operations[Operations["NarrowUVecI16x8ToVecI8x16"] = JSModule['_BinaryenNarrowUVecI16x8ToVecI8x16']()] = "NarrowUVecI16x8ToVecI8x16";
    Operations[Operations["NarrowSVecI32x4ToVecI16x8"] = JSModule['_BinaryenNarrowSVecI32x4ToVecI16x8']()] = "NarrowSVecI32x4ToVecI16x8";
    Operations[Operations["NarrowUVecI32x4ToVecI16x8"] = JSModule['_BinaryenNarrowUVecI32x4ToVecI16x8']()] = "NarrowUVecI32x4ToVecI16x8";
    Operations[Operations["ExtendLowSVecI8x16ToVecI16x8"] = JSModule['_BinaryenExtendLowSVecI8x16ToVecI16x8']()] = "ExtendLowSVecI8x16ToVecI16x8";
    Operations[Operations["ExtendHighSVecI8x16ToVecI16x8"] = JSModule['_BinaryenExtendHighSVecI8x16ToVecI16x8']()] = "ExtendHighSVecI8x16ToVecI16x8";
    Operations[Operations["ExtendLowUVecI8x16ToVecI16x8"] = JSModule['_BinaryenExtendLowUVecI8x16ToVecI16x8']()] = "ExtendLowUVecI8x16ToVecI16x8";
    Operations[Operations["ExtendHighUVecI8x16ToVecI16x8"] = JSModule['_BinaryenExtendHighUVecI8x16ToVecI16x8']()] = "ExtendHighUVecI8x16ToVecI16x8";
    Operations[Operations["ExtendLowSVecI16x8ToVecI32x4"] = JSModule['_BinaryenExtendLowSVecI16x8ToVecI32x4']()] = "ExtendLowSVecI16x8ToVecI32x4";
    Operations[Operations["ExtendHighSVecI16x8ToVecI32x4"] = JSModule['_BinaryenExtendHighSVecI16x8ToVecI32x4']()] = "ExtendHighSVecI16x8ToVecI32x4";
    Operations[Operations["ExtendLowUVecI16x8ToVecI32x4"] = JSModule['_BinaryenExtendLowUVecI16x8ToVecI32x4']()] = "ExtendLowUVecI16x8ToVecI32x4";
    Operations[Operations["ExtendHighUVecI16x8ToVecI32x4"] = JSModule['_BinaryenExtendHighUVecI16x8ToVecI32x4']()] = "ExtendHighUVecI16x8ToVecI32x4";
    Operations[Operations["ExtendLowSVecI32x4ToVecI64x2"] = JSModule['_BinaryenExtendLowSVecI32x4ToVecI64x2']()] = "ExtendLowSVecI32x4ToVecI64x2";
    Operations[Operations["ExtendHighSVecI32x4ToVecI64x2"] = JSModule['_BinaryenExtendHighSVecI32x4ToVecI64x2']()] = "ExtendHighSVecI32x4ToVecI64x2";
    Operations[Operations["ExtendLowUVecI32x4ToVecI64x2"] = JSModule['_BinaryenExtendLowUVecI32x4ToVecI64x2']()] = "ExtendLowUVecI32x4ToVecI64x2";
    Operations[Operations["ExtendHighUVecI32x4ToVecI64x2"] = JSModule['_BinaryenExtendHighUVecI32x4ToVecI64x2']()] = "ExtendHighUVecI32x4ToVecI64x2";
    Operations[Operations["ConvertLowSVecI32x4ToVecF64x2"] = JSModule['_BinaryenConvertLowSVecI32x4ToVecF64x2']()] = "ConvertLowSVecI32x4ToVecF64x2";
    Operations[Operations["ConvertLowUVecI32x4ToVecF64x2"] = JSModule['_BinaryenConvertLowUVecI32x4ToVecF64x2']()] = "ConvertLowUVecI32x4ToVecF64x2";
    Operations[Operations["TruncSatZeroSVecF64x2ToVecI32x4"] = JSModule['_BinaryenTruncSatZeroSVecF64x2ToVecI32x4']()] = "TruncSatZeroSVecF64x2ToVecI32x4";
    Operations[Operations["TruncSatZeroUVecF64x2ToVecI32x4"] = JSModule['_BinaryenTruncSatZeroUVecF64x2ToVecI32x4']()] = "TruncSatZeroUVecF64x2ToVecI32x4";
    Operations[Operations["DemoteZeroVecF64x2ToVecF32x4"] = JSModule['_BinaryenDemoteZeroVecF64x2ToVecF32x4']()] = "DemoteZeroVecF64x2ToVecF32x4";
    Operations[Operations["PromoteLowVecF32x4ToVecF64x2"] = JSModule['_BinaryenPromoteLowVecF32x4ToVecF64x2']()] = "PromoteLowVecF32x4ToVecF64x2";
    Operations[Operations["RelaxedTruncSVecF32x4ToVecI32x4"] = JSModule['_BinaryenRelaxedTruncSVecF32x4ToVecI32x4']()] = "RelaxedTruncSVecF32x4ToVecI32x4";
    Operations[Operations["RelaxedTruncUVecF32x4ToVecI32x4"] = JSModule['_BinaryenRelaxedTruncUVecF32x4ToVecI32x4']()] = "RelaxedTruncUVecF32x4ToVecI32x4";
    Operations[Operations["RelaxedTruncZeroSVecF64x2ToVecI32x4"] = JSModule['_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4']()] = "RelaxedTruncZeroSVecF64x2ToVecI32x4";
    Operations[Operations["RelaxedTruncZeroUVecF64x2ToVecI32x4"] = JSModule['_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4']()] = "RelaxedTruncZeroUVecF64x2ToVecI32x4";
    Operations[Operations["SwizzleVecI8x16"] = JSModule['_BinaryenSwizzleVecI8x16']()] = "SwizzleVecI8x16";
    Operations[Operations["RelaxedSwizzleVecI8x16"] = JSModule['_BinaryenRelaxedSwizzleVecI8x16']()] = "RelaxedSwizzleVecI8x16";
    Operations[Operations["RelaxedMinVecF32x4"] = JSModule['_BinaryenRelaxedMinVecF32x4']()] = "RelaxedMinVecF32x4";
    Operations[Operations["RelaxedMaxVecF32x4"] = JSModule['_BinaryenRelaxedMaxVecF32x4']()] = "RelaxedMaxVecF32x4";
    Operations[Operations["RelaxedMinVecF64x2"] = JSModule['_BinaryenRelaxedMinVecF64x2']()] = "RelaxedMinVecF64x2";
    Operations[Operations["RelaxedMaxVecF64x2"] = JSModule['_BinaryenRelaxedMaxVecF64x2']()] = "RelaxedMaxVecF64x2";
    Operations[Operations["RelaxedQ15MulrSVecI16x8"] = JSModule['_BinaryenRelaxedQ15MulrSVecI16x8']()] = "RelaxedQ15MulrSVecI16x8";
    Operations[Operations["DotI8x16I7x16SToVecI16x8"] = JSModule['_BinaryenDotI8x16I7x16SToVecI16x8']()] = "DotI8x16I7x16SToVecI16x8";
    Operations[Operations["RefAsNonNull"] = JSModule['_BinaryenRefAsNonNull']()] = "RefAsNonNull";
    Operations[Operations["RefAsExternInternalize"] = JSModule['_BinaryenRefAsExternInternalize']()] = "RefAsExternInternalize";
    Operations[Operations["RefAsExternExternalize"] = JSModule['_BinaryenRefAsExternExternalize']()] = "RefAsExternExternalize";
    Operations[Operations["BrOnNull"] = JSModule['_BinaryenBrOnNull']()] = "BrOnNull";
    Operations[Operations["BrOnNonNull"] = JSModule['_BinaryenBrOnNonNull']()] = "BrOnNonNull";
    Operations[Operations["BrOnCast"] = JSModule['_BinaryenBrOnCast']()] = "BrOnCast";
    Operations[Operations["BrOnCastFail"] = JSModule['_BinaryenBrOnCastFail']()] = "BrOnCastFail";
    /* explicitly skipping string stuff until it's reprioritized
    StringNewUTF8 = JSModule['_BinaryenStringNewUTF8'](),
    StringNewWTF8 = JSModule['_BinaryenStringNewWTF8'](),
    StringNewLossyUTF8 = JSModule['_BinaryenStringNewLossyUTF8'](),
    StringNewWTF16 = JSModule['_BinaryenStringNewWTF16'](),
    StringNewUTF8Array = JSModule['_BinaryenStringNewUTF8Array'](),
    StringNewWTF8Array = JSModule['_BinaryenStringNewWTF8Array'](),
    StringNewLossyUTF8Array = JSModule['_BinaryenStringNewLossyUTF8Array'](),
    StringNewWTF16Array = JSModule['_BinaryenStringNewWTF16Array'](),
    StringNewFromCodePoint = JSModule['_BinaryenStringNewFromCodePoint'](),
    StringMeasureUTF8 = JSModule['_BinaryenStringMeasureUTF8'](),
    StringMeasureWTF8 = JSModule['_BinaryenStringMeasureWTF8'](),
    StringMeasureWTF16 = JSModule['_BinaryenStringMeasureWTF16'](),
    StringMeasureIsUSV = JSModule['_BinaryenStringMeasureIsUSV'](),
    StringMeasureWTF16View = JSModule['_BinaryenStringMeasureWTF16View'](),
    StringEncodeUTF8 = JSModule['_BinaryenStringEncodeUTF8'](),
    StringEncodeLossyUTF8 = JSModule['_BinaryenStringEncodeLossyUTF8'](),
    StringEncodeWTF8 = JSModule['_BinaryenStringEncodeWTF8'](),
    StringEncodeWTF16 = JSModule['_BinaryenStringEncodeWTF16'](),
    StringEncodeUTF8Array = JSModule['_BinaryenStringEncodeUTF8Array'](),
    StringEncodeLossyUTF8Array = JSModule['_BinaryenStringEncodeLossyUTF8Array'](),
    StringEncodeWTF8Array = JSModule['_BinaryenStringEncodeWTF8Array'](),
    StringEncodeWTF16Array = JSModule['_BinaryenStringEncodeWTF16Array'](),
    StringAsWTF8 = JSModule['_BinaryenStringAsWTF8'](),
    StringAsWTF16 = JSModule['_BinaryenStringAsWTF16'](),
    StringAsIter = JSModule['_BinaryenStringAsIter'](),
    StringIterMoveAdvance = JSModule['_BinaryenStringIterMoveAdvance'](),
    StringIterMoveRewind = JSModule['_BinaryenStringIterMoveRewind'](),
    StringSliceWTF8 = JSModule['_BinaryenStringSliceWTF8'](),
    StringSliceWTF16 = JSModule['_BinaryenStringSliceWTF16'](),
    StringEqEqual = JSModule['_BinaryenStringEqEqual'](),
    StringEqCompare = JSModule['_BinaryenStringEqCompare']()
    */
})(Operations || (Operations = {}));
export var SideEffects;
(function (SideEffects) {
    SideEffects[SideEffects["None"] = JSModule['_BinaryenSideEffectNone']()] = "None";
    SideEffects[SideEffects["Branches"] = JSModule['_BinaryenSideEffectBranches']()] = "Branches";
    SideEffects[SideEffects["Calls"] = JSModule['_BinaryenSideEffectCalls']()] = "Calls";
    SideEffects[SideEffects["ReadsLocal"] = JSModule['_BinaryenSideEffectReadsLocal']()] = "ReadsLocal";
    SideEffects[SideEffects["WritesLocal"] = JSModule['_BinaryenSideEffectWritesLocal']()] = "WritesLocal";
    SideEffects[SideEffects["ReadsGlobal"] = JSModule['_BinaryenSideEffectReadsGlobal']()] = "ReadsGlobal";
    SideEffects[SideEffects["WritesGlobal"] = JSModule['_BinaryenSideEffectWritesGlobal']()] = "WritesGlobal";
    SideEffects[SideEffects["ReadsMemory"] = JSModule['_BinaryenSideEffectReadsMemory']()] = "ReadsMemory";
    SideEffects[SideEffects["WritesMemory"] = JSModule['_BinaryenSideEffectWritesMemory']()] = "WritesMemory";
    SideEffects[SideEffects["ReadsTable"] = JSModule['_BinaryenSideEffectReadsTable']()] = "ReadsTable";
    SideEffects[SideEffects["WritesTable"] = JSModule['_BinaryenSideEffectWritesTable']()] = "WritesTable";
    SideEffects[SideEffects["ImplicitTrap"] = JSModule['_BinaryenSideEffectImplicitTrap']()] = "ImplicitTrap";
    SideEffects[SideEffects["IsAtomic"] = JSModule['_BinaryenSideEffectIsAtomic']()] = "IsAtomic";
    SideEffects[SideEffects["Throws"] = JSModule['_BinaryenSideEffectThrows']()] = "Throws";
    SideEffects[SideEffects["DanglingPop"] = JSModule['_BinaryenSideEffectDanglingPop']()] = "DanglingPop";
    SideEffects[SideEffects["TrapsNeverHappen"] = JSModule['_BinaryenSideEffectTrapsNeverHappen']()] = "TrapsNeverHappen";
    SideEffects[SideEffects["Any"] = JSModule['_BinaryenSideEffectAny']()] = "Any";
})(SideEffects || (SideEffects = {}));
export var PackedType;
(function (PackedType) {
    PackedType[PackedType["NotPacked"] = JSModule['_BinaryenPackedTypeNotPacked']()] = "NotPacked";
    PackedType[PackedType["Int8"] = JSModule['_BinaryenPackedTypeInt8']()] = "Int8";
    PackedType[PackedType["Int16"] = JSModule['_BinaryenPackedTypeInt16']()] = "Int16";
})(PackedType || (PackedType = {}));
export class Function {
    constructor(func) {
        this.func = func;
    }
    getName() {
        return UTF8ToString(JSModule['_BinaryenFunctionGetName'](this.func));
    }
    getParams() {
        return JSModule['_BinaryenFunctionGetParams'](this.func);
    }
    getResults() {
        return JSModule['_BinaryenFunctionGetResults'](this.func);
    }
    getNumVars() {
        return JSModule['_BinaryenFunctionGetNumVars'](this.func);
    }
    getVar(index) {
        return JSModule['_BinaryenFunctionGetVar'](this.func, index);
    }
    getNumLocals() {
        return JSModule['_BinaryenFunctionGetNumLocals'](this.func);
    }
    hasLocalName(index) {
        return Boolean(JSModule['_BinaryenFunctionHasLocalName'](this.func, index));
    }
    getLocalName(index) {
        return UTF8ToString(JSModule['_BinaryenFunctionGetLocalName'](this.func, index));
    }
    setLocalName(index, name) {
        preserveStack(() => {
            JSModule['_BinaryenFunctionSetLocalName'](this.func, index, strToStack(name));
        });
    }
    getBody() {
        return JSModule['_BinaryenFunctionGetBody'](this.func);
    }
    setBody(bodyExpr) {
        JSModule['_BinaryenFunctionSetBody'](this.func, bodyExpr);
    }
    setDebugLocation(expr, fileIndex, lineNumber, columnNumber) {
        JSModule['_BinaryenFunctionSetDebugLocation'](this.func, expr, fileIndex, lineNumber, columnNumber);
    }
    getInfo() {
        return {
            'name': this.getName(),
            'module': UTF8ToString(JSModule['_BinaryenFunctionImportGetModule'](this.func)),
            'base': UTF8ToString(JSModule['_BinaryenFunctionImportGetBase'](this.func)),
            'params': this.getParams(),
            'results': this.getResults(),
            'vars': getAllNested(this.func, this.getNumVars, this.getVar),
            'body': this.getBody()
        };
    }
}
function getOptimizeLevel() {
    return JSModule['_BinaryenGetOptimizeLevel']();
}
function setOptimizeLevel(level) {
    JSModule['_BinaryenSetOptimizeLevel'](level);
}
function getShrinkLevel() {
    return JSModule['_BinaryenGetShrinkLevel']();
}
function setShrinkLevel(level) {
    JSModule['_BinaryenSetShrinkLevel'](level);
}
function getDebugInfo() {
    return Boolean(JSModule['_BinaryenGetDebugInfo']());
}
function setDebugInfo(on) {
    JSModule['_BinaryenSetDebugInfo'](on);
}
function getLowMemoryUnused() {
    return Boolean(JSModule['_BinaryenGetLowMemoryUnused']());
}
function setLowMemoryUnused(on) {
    JSModule['_BinaryenSetLowMemoryUnused'](on);
}
function getZeroFilledMemory() {
    return Boolean(JSModule['_BinaryenGetZeroFilledMemory']());
}
function setZeroFilledMemory(on) {
    JSModule['_BinaryenSetZeroFilledMemory'](on);
}
function getFastMath() {
    return Boolean(JSModule['_BinaryenGetFastMath']());
}
function setFastMath(on) {
    JSModule['_BinaryenSetFastMath'](on);
}
function getPassArgument(key) {
    return preserveStack(() => {
        const ret = JSModule['_BinaryenGetPassArgument'](strToStack(key));
        return ret !== 0 ? UTF8ToString(ret) : null;
    });
}
function setPassArgument(key, value) {
    preserveStack(() => { JSModule['_BinaryenSetPassArgument'](strToStack(key), strToStack(value)); });
}
function clearPassArguments() {
    JSModule['_BinaryenClearPassArguments']();
}
function getAlwaysInlineMaxSize() {
    return JSModule['_BinaryenGetAlwaysInlineMaxSize']();
}
function setAlwaysInlineMaxSize(size) {
    JSModule['_BinaryenSetAlwaysInlineMaxSize'](size);
}
function getFlexibleInlineMaxSize() {
    return JSModule['_BinaryenGetFlexibleInlineMaxSize']();
}
function setFlexibleInlineMaxSize(size) {
    JSModule['_BinaryenSetFlexibleInlineMaxSize'](size);
}
function getOneCallerInlineMaxSize() {
    return JSModule['_BinaryenGetOneCallerInlineMaxSize']();
}
function setOneCallerInlineMaxSize(size) {
    JSModule['_BinaryenSetOneCallerInlineMaxSize'](size);
}
function getAllowInliningFunctionsWithLoops() {
    return Boolean(JSModule['_BinaryenGetAllowInliningFunctionsWithLoops']());
}
function setAllowInliningFunctionsWithLoops(on) {
    JSModule['_BinaryenSetAllowInliningFunctionsWithLoops'](on);
}
function exit(status) {
    if (status != 0)
        throw new Error('Exiting due to error: ' + status);
}
export class Module {
    static readBinary(data) {
        const buffer = _malloc(data.length);
        HEAP8.set(data, buffer);
        const ptr = JSModule['_BinaryenModuleRead'](buffer, data.length);
        _free(buffer);
        return new Module(ptr);
    }
    static parseText(text) {
        const buffer = _malloc(text.length + 1);
        stringToAscii(text, buffer);
        const ptr = JSModule['_BinaryenModuleParse'](buffer);
        _free(buffer);
        return new Module(ptr);
    }
    constructor(ptr) {
        this.ptr = ptr || JSModule['_BinaryenModuleCreate']();
    }
    dispose() {
        JSModule['_BinaryenModuleDispose'](this.ptr);
    }
    setStart(start) {
        JSModule['_BinaryenSetStart'](this.ptr, start);
    }
    setFeatures(...features) {
        const flags = features.reduce((previous, current) => previous |= current, 0);
        JSModule['_BinaryenModuleSetFeatures'](this.ptr, flags);
    }
    getFeatures() {
        const flags = JSModule['_BinaryenModuleGetFeatures'](this.ptr);
        const features = new Set();
        Object.keys(Feature).forEach(key => {
            const entry = Feature[key];
            if (typeof (entry) == "string" && entry != "All") {
                const value = Feature[entry];
                if ((flags & value) != 0)
                    features.add(value);
            }
        });
        return features;
    }
    addFeature(feature) {
        let flags = JSModule['_BinaryenModuleGetFeatures'](this.ptr);
        flags |= feature;
        JSModule['_BinaryenModuleSetFeatures'](this.ptr, flags);
    }
    hasFeature(feature) {
        const flags = JSModule['_BinaryenModuleGetFeatures'](this.ptr);
        return (flags & feature) != 0;
    }
    autoDrop() {
        JSModule['_BinaryenModuleAutoDrop'](this.ptr);
    }
    addCustomSection(name, contents) {
        preserveStack(() => JSModule['_BinaryenAddCustomSection'](this.ptr, strToStack(name), i8sToStack(contents), contents.length));
    }
    addDebugInfoFileName(filename) {
        return preserveStack(() => JSModule['_BinaryenModuleAddDebugInfoFileName'](this.ptr, strToStack(filename)));
    }
    getDebugInfoFileName(index) {
        return UTF8ToString(JSModule['_BinaryenModuleGetDebugInfoFileName'](this.ptr, index));
    }
    validate() {
        return JSModule['_BinaryenModuleValidate'](this.ptr);
    }
    optimize() {
        return JSModule['_BinaryenModuleOptimize'](this.ptr);
    }
    optimizeFunction(func) {
        if (typeof func === 'string')
            func = this.functions.getRefByName(func);
        return JSModule['_BinaryenFunctionOptimize'](func, this.ptr);
    }
    runPasses(passes) {
        preserveStack(() => JSModule['_BinaryenModuleRunPasses'](this.ptr, i32sToStack(passes.map(strToStack)), passes.length));
    }
    runPassesOnFunction(func, passes) {
        if (typeof func === 'string')
            func = this.functions.getRefByName(func);
        preserveStack(() => JSModule['_BinaryenFunctionRunPasses'](func, this.ptr, i32sToStack(passes.map(strToStack)), passes.length));
    }
    emitText() {
        const textPtr = JSModule['_BinaryenModuleAllocateAndWriteText'](this.ptr);
        const text = textPtr ? UTF8ToString(textPtr) : null;
        if (textPtr)
            _free(textPtr);
        return text;
    }
    emitStackIR(optimize) {
        const textPtr = JSModule['_BinaryenModuleAllocateAndWriteStackIR'](this.ptr, optimize);
        const text = textPtr ? UTF8ToString(textPtr) : null;
        if (textPtr)
            _free(textPtr);
        return text;
    }
    emitAsmjs() {
        let text = '';
        const old = swapOut(s => { text += s + '\n'; });
        JSModule['_BinaryenModulePrintAsmjs'](this.ptr);
        swapOut(old);
        return text;
    }
    emitBinary(sourceMapUrl) {
        return preserveStack(() => {
            const tempBuffer = stackAlloc(_BinaryenSizeofAllocateAndWriteResult());
            JSModule['_BinaryenModuleAllocateAndWrite'](tempBuffer, this.ptr, strToStack(sourceMapUrl));
            const binaryPtr = HEAPU32[tempBuffer >>> 2];
            const binaryBytes = HEAPU32[(tempBuffer >>> 2) + 1];
            const sourceMapPtr = HEAPU32[(tempBuffer >>> 2) + 2];
            try {
                const buffer = new Uint8Array(binaryBytes);
                buffer.set(HEAPU8.subarray(binaryPtr, binaryPtr + binaryBytes));
                return typeof sourceMapUrl === 'undefined' ? buffer : { 'binary': buffer, 'sourceMap': UTF8ToString(sourceMapPtr) };
            }
            finally {
                _free(binaryPtr);
                if (sourceMapPtr)
                    _free(sourceMapPtr);
            }
        });
    }
    interpret() {
        JSModule['_BinaryenModuleInterpret'](this.ptr);
    }
    block(label, children, resultType) {
        return preserveStack(() => JSModule['_BinaryenBlock'](this.ptr, label ? strToStack(label) : 0, i32sToStack(children), children.length, typeof resultType !== 'undefined' ? resultType : none));
    }
    if(condition, ifTrue, ifFalse) {
        return JSModule['_BinaryenIf'](this.ptr, condition, ifTrue, ifFalse);
    }
    loop(label, body) {
        return preserveStack(() => JSModule['_BinaryenLoop'](this.ptr, strToStack(label), body));
    }
    br(label, condition, value) {
        return preserveStack(() => JSModule['_BinaryenBreak'](this.ptr, strToStack(label), condition, value));
    }
    br_if(label, condition, value) {
        return this.br(label, condition, value);
    }
    switch(labels, defaultLabel, condition, value) {
        return preserveStack(() => JSModule['_BinaryenSwitch'](this.ptr, i32sToStack(labels.map(strToStack)), labels.length, strToStack(defaultLabel), condition, value));
    }
    call(name, operands, returnType) {
        return preserveStack(() => JSModule['_BinaryenCall'](this.ptr, strToStack(name), i32sToStack(operands), operands.length, returnType));
    }
    call_indirect(table, target, operands, params, results) {
        return preserveStack(() => JSModule['_BinaryenCallIndirect'](this.ptr, strToStack(table), target, i32sToStack(operands), operands.length, params, results));
    }
    return_call(name, operands, returnType) {
        return preserveStack(() => JSModule['_BinaryenReturnCall'](this.ptr, strToStack(name), i32sToStack(operands), operands.length, returnType));
    }
    return_call_indirect(table, target, operands, params, results) {
        return preserveStack(() => JSModule['_BinaryenReturnCallIndirect'](this.ptr, strToStack(table), target, i32sToStack(operands), operands.length, params, results));
    }
    select(condition, ifTrue, ifFalse, type) {
        return JSModule['_BinaryenSelect'](this.ptr, condition, ifTrue, ifFalse, typeof type !== 'undefined' ? type : JSModule['auto']);
    }
    drop(value) {
        return JSModule['_BinaryenDrop'](this.ptr, value);
    }
    return(value) {
        return JSModule['_BinaryenReturn'](this.ptr, value);
    }
    nop() {
        return JSModule['_BinaryenNop'](this.ptr);
    }
    unreachable() {
        return JSModule['_BinaryenUnreachable'](this.ptr);
    }
    try(name, body, catchTags, catchBodies, delegateTarget) {
        return preserveStack(() => JSModule['_BinaryenTry'](this.ptr, name ? strToStack(name) : 0, body, i32sToStack(catchTags.map(strToStack)), catchTags.length, i32sToStack(catchBodies), catchBodies.length, delegateTarget ? strToStack(delegateTarget) : 0));
    }
    throw(tag, operands) {
        return preserveStack(() => JSModule['_BinaryenThrow'](this.ptr, strToStack(tag), i32sToStack(operands), operands.length));
    }
    rethrow(target) {
        return JSModule['_BinaryenRethrow'](this.ptr, strToStack(target));
    }
    get i32() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        const load = (size, signed, offset, align, ptr, name) => JSModule['_BinaryenLoad'](this.ptr, size, signed, offset, align, i32, ptr, strToStack(name));
        const store = (size, offset, align, ptr, value, name) => JSModule['_BinaryenStore'](this.ptr, size, offset, align, ptr, value, i32, strToStack(name));
        const atomic_load = (size, offset, ptr, name) => JSModule['_BinaryenAtomicLoad'](this.ptr, size, offset, i32, ptr, strToStack(name));
        const atomic_store = (size, offset, ptr, value, name) => JSModule['_BinaryenAtomicStore'](this.ptr, size, offset, ptr, value, i32, strToStack(name));
        const atomic_rmw = (op, size, offset, ptr, value, name) => JSModule['_BinaryenAtomicRMW'](this.ptr, op, size, offset, ptr, value, i32, strToStack(name));
        return {
            load: (offset, align, ptr, name) => load(4, true, offset, align, ptr, name),
            load8_s: (offset, align, ptr, name) => load(1, true, offset, align, ptr, name),
            load8_u: (offset, align, ptr, name) => load(1, false, offset, align, ptr, name),
            load16_s: (offset, align, ptr, name) => load(2, true, offset, align, ptr, name),
            load16_u: (offset, align, ptr, name) => load(2, false, offset, align, ptr, name),
            store: (offset, align, ptr, value, name) => store(4, offset, align, ptr, value, name),
            store8: (offset, align, ptr, value, name) => store(1, offset, align, ptr, value, name),
            store16: (offset, align, ptr, value, name) => store(2, offset, align, ptr, value, name),
            const: (value) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralInt32'](tempLiteral, value);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            clz: (value) => unary(Operations.ClzInt32, value),
            ctz: (value) => unary(Operations.CtzInt32, value),
            popcnt: (value) => unary(Operations.PopcntInt32, value),
            eqz: (value) => unary(Operations.EqZInt32, value),
            trunc_s: {
                f32: (value) => unary(Operations.TruncSFloat32ToInt32, value),
                f64: (value) => unary(Operations.TruncSFloat64ToInt32, value)
            },
            trunc_u: {
                f32: (value) => unary(Operations.TruncUFloat32ToInt32, value),
                f64: (value) => unary(Operations.TruncUFloat64ToInt32, value)
            },
            trunc_s_sat: {
                f32: (value) => unary(Operations.TruncSatSFloat32ToInt32, value),
                f64: (value) => unary(Operations.TruncSatSFloat64ToInt32, value)
            },
            trunc_u_sat: {
                f32: (value) => unary(Operations.TruncSatUFloat32ToInt32, value),
                f64: (value) => unary(Operations.TruncSatUFloat64ToInt32, value)
            },
            reinterpret_f32: (value) => unary(Operations.ReinterpretFloat32, value),
            extend8_s: (value) => unary(Operations.ExtendS8Int32, value),
            extend16_s: (value) => unary(Operations.ExtendS16Int32, value),
            wrap_i64: (value) => unary(Operations.WrapInt64, value),
            add: (left, right) => binary(Operations.AddInt32, left, right),
            sub: (left, right) => binary(Operations.SubInt32, left, right),
            mul: (left, right) => binary(Operations.MulInt32, left, right),
            div_s: (left, right) => binary(Operations.DivSInt32, left, right),
            div_u: (left, right) => binary(Operations.DivUInt32, left, right),
            rem_s: (left, right) => binary(Operations.RemSInt32, left, right),
            rem_u: (left, right) => binary(Operations.RemUInt32, left, right),
            and: (left, right) => binary(Operations.AndInt32, left, right),
            or: (left, right) => binary(Operations.OrInt32, left, right),
            xor: (left, right) => binary(Operations.XorInt32, left, right),
            shl: (left, right) => binary(Operations.ShlInt32, left, right),
            shr_u: (left, right) => binary(Operations.ShrUInt32, left, right),
            shr_s: (left, right) => binary(Operations.ShrSInt32, left, right),
            rotl: (left, right) => binary(Operations.RotLInt32, left, right),
            rotr: (left, right) => binary(Operations.RotRInt32, left, right),
            eq: (left, right) => binary(Operations.EqInt32, left, right),
            ne: (left, right) => binary(Operations.NeInt32, left, right),
            lt_s: (left, right) => binary(Operations.LtSInt32, left, right),
            lt_u: (left, right) => binary(Operations.LtUInt32, left, right),
            le_s: (left, right) => binary(Operations.LeSInt32, left, right),
            le_u: (left, right) => binary(Operations.LeUInt32, left, right),
            gt_s: (left, right) => binary(Operations.GtSInt32, left, right),
            gt_u: (left, right) => binary(Operations.GtUInt32, left, right),
            ge_s: (left, right) => binary(Operations.GeSInt32, left, right),
            ge_u: (left, right) => binary(Operations.GeUInt32, left, right),
            pop: () => JSModule['_BinaryenPop'](this.ptr, i32),
            atomic: {
                load: (offset, ptr, name) => atomic_load(4, offset, ptr, name),
                load8_u: (offset, ptr, name) => atomic_load(1, offset, ptr, name),
                load16_u: (offset, ptr, name) => atomic_load(2, offset, ptr, name),
                store: (offset, ptr, value, name) => atomic_store(4, offset, ptr, value, name),
                store8: (offset, ptr, value, name) => atomic_store(1, offset, ptr, value, name),
                store16: (offset, ptr, value, name) => atomic_store(2, offset, ptr, value, name),
                rmw: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 4, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 4, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 4, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 4, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 4, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 4, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 4, offset, ptr, expected, replacement, i32, strToStack(name))
                },
                rmw8_u: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 1, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 1, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 1, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 1, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 1, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 1, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 1, offset, ptr, expected, replacement, i32, strToStack(name))
                },
                rmw16_u: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 2, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 2, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 2, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 2, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 2, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 2, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 2, offset, ptr, expected, replacement, i32, strToStack(name))
                }
            }
        };
    }
    get i64() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        const load = (size, signed, offset, align, ptr, name) => JSModule['_BinaryenLoad'](this.ptr, size, signed, offset, align, i64, ptr, strToStack(name));
        const store = (size, offset, align, ptr, value, name) => JSModule['_BinaryenStore'](this.ptr, size, offset, align, ptr, value, i64, strToStack(name));
        const atomic_load = (size, offset, ptr, name) => JSModule['_BinaryenAtomicLoad'](this.ptr, size, offset, i64, ptr, strToStack(name));
        const atomic_store = (size, offset, ptr, value, name) => JSModule['_BinaryenAtomicStore'](this.ptr, size, offset, ptr, value, i64, strToStack(name));
        const atomic_rmw = (op, size, offset, ptr, value, name) => JSModule['_BinaryenAtomicRMW'](this.ptr, op, size, offset, ptr, value, i64, strToStack(name));
        return {
            load: (offset, align, ptr, name) => load(8, true, offset, align, ptr, name),
            load8_s: (offset, align, ptr, name) => load(1, true, offset, align, ptr, name),
            load8_u: (offset, align, ptr, name) => load(1, false, offset, align, ptr, name),
            load16_s: (offset, align, ptr, name) => load(2, true, offset, align, ptr, name),
            load16_u: (offset, align, ptr, name) => load(2, false, offset, align, ptr, name),
            load32_s: (offset, align, ptr, name) => load(4, true, offset, align, ptr, name),
            load32_u: (offset, align, ptr, name) => load(4, false, offset, align, ptr, name),
            store: (offset, align, ptr, value, name) => store(4, offset, align, ptr, value, name),
            store8: (offset, align, ptr, value, name) => store(1, offset, align, ptr, value, name),
            store16: (offset, align, ptr, value, name) => store(2, offset, align, ptr, value, name),
            store32: (offset, align, ptr, value, name) => store(4, offset, align, ptr, value, name),
            const: (low, high) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralInt64'](tempLiteral, low, high);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            clz: (value) => unary(Operations.ClzInt64, value),
            ctz: (value) => unary(Operations.CtzInt64, value),
            popcnt: (value) => unary(Operations.PopcntInt64, value),
            eqz: (value) => unary(Operations.EqZInt64, value),
            trunc_s: {
                f32: (value) => unary(Operations.TruncSFloat32ToInt64, value),
                f64: (value) => unary(Operations.TruncSFloat64ToInt64, value)
            },
            trunc_u: {
                f32: (value) => unary(Operations.TruncUFloat32ToInt64, value),
                f64: (value) => unary(Operations.TruncUFloat64ToInt64, value)
            },
            trunc_s_sat: {
                f32: (value) => unary(Operations.TruncSatSFloat32ToInt64, value),
                f64: (value) => unary(Operations.TruncSatSFloat64ToInt64, value)
            },
            trunc_u_sat: {
                f32: (value) => unary(Operations.TruncSatUFloat32ToInt64, value),
                f64: (value) => unary(Operations.TruncSatUFloat64ToInt64, value)
            },
            reinterpret_f64: (value) => unary(Operations.ReinterpretFloat64, value),
            extend8_s: (value) => unary(Operations.ExtendS8Int64, value),
            extend16_s: (value) => unary(Operations.ExtendS16Int64, value),
            extend32_s: (value) => unary(Operations.ExtendS32Int64, value),
            extend_s: (value) => unary(Operations.ExtendSInt32, value),
            extend_u: (value) => unary(Operations.ExtendUInt32, value),
            add: (left, right) => binary(Operations.AddInt64, left, right),
            sub: (left, right) => binary(Operations.SubInt64, left, right),
            mul: (left, right) => binary(Operations.MulInt32, left, right),
            div_s: (left, right) => binary(Operations.DivSInt64, left, right),
            div_u: (left, right) => binary(Operations.DivUInt64, left, right),
            rem_s: (left, right) => binary(Operations.RemSInt64, left, right),
            rem_u: (left, right) => binary(Operations.RemUInt64, left, right),
            and: (left, right) => binary(Operations.AndInt64, left, right),
            or: (left, right) => binary(Operations.OrInt64, left, right),
            xor: (left, right) => binary(Operations.XorInt64, left, right),
            shl: (left, right) => binary(Operations.ShlInt64, left, right),
            shr_u: (left, right) => binary(Operations.ShrUInt64, left, right),
            shr_s: (left, right) => binary(Operations.ShrSInt64, left, right),
            rotl: (left, right) => binary(Operations.RotLInt64, left, right),
            rotr: (left, right) => binary(Operations.RotRInt64, left, right),
            eq: (left, right) => binary(Operations.EqInt64, left, right),
            ne: (left, right) => binary(Operations.NeInt64, left, right),
            lt_s: (left, right) => binary(Operations.LtSInt64, left, right),
            lt_u: (left, right) => binary(Operations.LtUInt64, left, right),
            le_s: (left, right) => binary(Operations.LeSInt64, left, right),
            le_u: (left, right) => binary(Operations.LeUInt64, left, right),
            gt_s: (left, right) => binary(Operations.GtSInt64, left, right),
            gt_u: (left, right) => binary(Operations.GtUInt64, left, right),
            ge_s: (left, right) => binary(Operations.GeSInt64, left, right),
            ge_u: (left, right) => binary(Operations.GeUInt64, left, right),
            pop: () => JSModule['_BinaryenPop'](this.ptr, i64),
            atomic: {
                load: (offset, ptr, name) => atomic_load(8, offset, ptr, name),
                load8_u: (offset, ptr, name) => atomic_load(1, offset, ptr, name),
                load16_u: (offset, ptr, name) => atomic_load(2, offset, ptr, name),
                load32_u: (offset, ptr, name) => atomic_load(4, offset, ptr, name),
                store: (offset, ptr, value, name) => atomic_store(4, offset, ptr, value, name),
                store8: (offset, ptr, value, name) => atomic_store(1, offset, ptr, value, name),
                store16: (offset, ptr, value, name) => atomic_store(2, offset, ptr, value, name),
                store32: (offset, ptr, value, name) => atomic_store(4, offset, ptr, value, name),
                rmw: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 8, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 8, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 8, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 8, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 8, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 8, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 8, offset, ptr, expected, replacement, i64, strToStack(name))
                },
                rmw8_u: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 1, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 1, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 1, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 1, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 1, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 1, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 1, offset, ptr, expected, replacement, i64, strToStack(name))
                },
                rmw16_u: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 2, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 2, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 2, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 2, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 2, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 2, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 2, offset, ptr, expected, replacement, i32, strToStack(name))
                },
                rmw32_u: {
                    add: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAdd, 4, offset, ptr, value, name),
                    sub: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWSub, 4, offset, ptr, value, name),
                    and: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWAnd, 4, offset, ptr, value, name),
                    or: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWOr, 4, offset, ptr, value, name),
                    xor: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXor, 4, offset, ptr, value, name),
                    xchg: (offset, ptr, value, name) => atomic_rmw(Operations.AtomicRMWXchg, 4, offset, ptr, value, name),
                    cmpxchg: (offset, ptr, expected, replacement, name) => JSModule['_BinaryenAtomicCmpxchg'](this.ptr, 4, offset, ptr, expected, replacement, i32, strToStack(name))
                }
            }
        };
    }
    get f32() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            load: (offset, align, ptr, name) => JSModule['_BinaryenLoad'](this.ptr, 4, true, offset, align, f32, ptr, strToStack(name)),
            store: (offset, align, ptr, value, name) => JSModule['_BinaryenStore'](this.ptr, 4, offset, align, ptr, value, f32, strToStack(name)),
            const: (value) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralFloat32'](tempLiteral, value);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            const_bits: (value) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralFloat32Bits'](tempLiteral, value);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            neg: (value) => unary(Operations.NegFloat32, value),
            abs: (value) => unary(Operations.AbsFloat32, value),
            ceil: (value) => unary(Operations.CeilFloat32, value),
            floor: (value) => unary(Operations.FloorFloat32, value),
            trunc: (value) => unary(Operations.TruncFloat32, value),
            nearest: (value) => unary(Operations.NearestFloat32, value),
            sqrt: (value) => unary(Operations.SqrtFloat32, value),
            reinterpret_i32: (value) => unary(Operations.ReinterpretInt32, value),
            convert_s: {
                i32: (value) => unary(Operations.ConvertSInt32ToFloat32, value),
                i64: (value) => unary(Operations.ConvertSInt64ToFloat32, value)
            },
            convert_u: {
                i32: (value) => unary(Operations.ConvertUInt32ToFloat32, value),
                i64: (value) => unary(Operations.ConvertUInt64ToFloat32, value)
            },
            demote_f64: (value) => unary(Operations.DemoteFloat64, value),
            add: (left, right) => binary(Operations.AddFloat32, left, right),
            sub: (left, right) => binary(Operations.SubFloat32, left, right),
            mul: (left, right) => binary(Operations.MulFloat32, left, right),
            div: (left, right) => binary(Operations.DivFloat32, left, right),
            copysign: (left, right) => binary(Operations.CopySignFloat32, left, right),
            min: (left, right) => binary(Operations.MinFloat32, left, right),
            max: (left, right) => binary(Operations.MaxFloat32, left, right),
            eq: (left, right) => binary(Operations.EqFloat32, left, right),
            ne: (left, right) => binary(Operations.NeFloat32, left, right),
            lt: (left, right) => binary(Operations.LtFloat32, left, right),
            le: (left, right) => binary(Operations.LeFloat32, left, right),
            gt: (left, right) => binary(Operations.GtFloat32, left, right),
            ge: (left, right) => binary(Operations.GeFloat32, left, right),
            pop: () => JSModule['_BinaryenPop'](this.ptr, f32)
        };
    }
    get f64() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            load: (offset, align, ptr, name) => JSModule['_BinaryenLoad'](this.ptr, 8, true, offset, align, f64, ptr, strToStack(name)),
            store: (offset, align, ptr, value, name) => JSModule['_BinaryenStore'](this.ptr, 8, offset, align, ptr, value, f64, strToStack(name)),
            const: (value) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralFloat64'](tempLiteral, value);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            const_bits: (value) => preserveStack(() => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralFloat64Bits'](tempLiteral, value);
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            }),
            neg: (value) => unary(Operations.NegFloat64, value),
            abs: (value) => unary(Operations.AbsFloat64, value),
            ceil: (value) => unary(Operations.CeilFloat64, value),
            floor: (value) => unary(Operations.FloorFloat64, value),
            trunc: (value) => unary(Operations.TruncFloat64, value),
            nearest: (value) => unary(Operations.NearestFloat64, value),
            sqrt: (value) => unary(Operations.SqrtFloat64, value),
            reinterpret_i64: (value) => unary(Operations.ReinterpretInt64, value),
            convert_s: {
                i32: (value) => unary(Operations.ConvertSInt32ToFloat64, value),
                i64: (value) => unary(Operations.ConvertSInt64ToFloat64, value)
            },
            convert_u: {
                i32: (value) => unary(Operations.ConvertUInt32ToFloat64, value),
                i64: (value) => unary(Operations.ConvertUInt64ToFloat64, value)
            },
            promote_f32: (value) => unary(Operations.PromoteFloat32, value),
            add: (left, right) => binary(Operations.AddFloat64, left, right),
            sub: (left, right) => binary(Operations.SubFloat64, left, right),
            mul: (left, right) => binary(Operations.MulFloat64, left, right),
            div: (left, right) => binary(Operations.DivFloat64, left, right),
            copysign: (left, right) => binary(Operations.CopySignFloat64, left, right),
            min: (left, right) => binary(Operations.MinFloat64, left, right),
            max: (left, right) => binary(Operations.MaxFloat64, left, right),
            eq: (left, right) => binary(Operations.EqFloat64, left, right),
            ne: (left, right) => binary(Operations.NeFloat64, left, right),
            lt: (left, right) => binary(Operations.LtFloat64, left, right),
            le: (left, right) => binary(Operations.LeFloat64, left, right),
            gt: (left, right) => binary(Operations.GtFloat64, left, right),
            ge: (left, right) => binary(Operations.GeFloat64, left, right),
            pop: () => JSModule['_BinaryenPop'](this.ptr, f64)
        };
    }
    get v128() {
        const simd_load = (op, offset, align, ptr, name) => JSModule['_BinaryenSIMDLoad'](this.ptr, op, offset, align, ptr, strToStack(name));
        const simd_lane = (op, offset, align, index, ptr, vec, name) => JSModule['_BinaryenSIMDLoadStoreLane'](this.ptr, op, offset, align, index, ptr, vec, strToStack(name));
        return {
            load: (offset, align, ptr, name) => JSModule['_BinaryenLoad'](this.ptr, 16, false, offset, align, v128, ptr, strToStack(name)),
            load8_splat: (offset, align, ptr, name) => simd_load(Operations.Load8SplatVec128, offset, align, ptr, name),
            load16_splat: (offset, align, ptr, name) => simd_load(Operations.Load16SplatVec128, offset, align, ptr, name),
            load32_splat: (offset, align, ptr, name) => simd_load(Operations.Load32SplatVec128, offset, align, ptr, name),
            load64_splat: (offset, align, ptr, name) => simd_load(Operations.Load64SplatVec128, offset, align, ptr, name),
            load8x8_s: (offset, align, ptr, name) => simd_load(Operations.Load8x8SVec128, offset, align, ptr, name),
            load8x8_u: (offset, align, ptr, name) => simd_load(Operations.Load8x8UVec128, offset, align, ptr, name),
            load16x4_s: (offset, align, ptr, name) => simd_load(Operations.Load16x4SVec128, offset, align, ptr, name),
            load16x4_u: (offset, align, ptr, name) => simd_load(Operations.Load16x4UVec128, offset, align, ptr, name),
            load32x2_s: (offset, align, ptr, name) => simd_load(Operations.Load32x2SVec128, offset, align, ptr, name),
            load32x2_u: (offset, align, ptr, name) => simd_load(Operations.Load32x2UVec128, offset, align, ptr, name),
            load32_zero: (offset, align, ptr, name) => simd_load(Operations.Load32ZeroVec128, offset, align, ptr, name),
            load64_zero: (offset, align, ptr, name) => simd_load(Operations.Load64ZeroVec128, offset, align, ptr, name),
            load8_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Load8LaneVec128, offset, align, index, ptr, vec, name),
            load16_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Load16LaneVec128, offset, align, index, ptr, vec, name),
            load32_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Load32LaneVec128, offset, align, index, ptr, vec, name),
            load64_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Load64LaneVec128, offset, align, index, ptr, vec, name),
            store8_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Store8LaneVec128, offset, align, index, ptr, vec, name),
            store16_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Store16LaneVec128, offset, align, index, ptr, vec, name),
            store32_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Store32LaneVec128, offset, align, index, ptr, vec, name),
            store64_lane: (offset, align, index, ptr, vec, name) => simd_lane(Operations.Store64LaneVec128, offset, align, index, ptr, vec, name),
            store: (offset, align, ptr, value, name) => JSModule['_BinaryenStore'](this.ptr, 16, offset, align, ptr, value, v128, strToStack(name)),
            const: (i8s) => {
                const tempLiteral = stackAlloc(sizeOfLiteral);
                JSModule['_BinaryenLiteralVec128'](tempLiteral, i8sToStack(i8s));
                return JSModule['_BinaryenConst'](this.ptr, tempLiteral);
            },
            not: (value) => JSModule['_BinaryenUnary'](this.ptr, Operations.NotVec128, value),
            any_true: (value) => JSModule['_BinaryenUnary'](this.ptr, Operations.AnyTrueVec128, value),
            and: (left, right) => JSModule['_BinaryenBinary'](this.ptr, Operations.AndVec128, left, right),
            or: (left, right) => JSModule['_BinaryenBinary'](this.ptr, Operations.OrVec128, left, right),
            xor: (left, right) => JSModule['_BinaryenBinary'](this.ptr, Operations.XorVec128, left, right),
            andnot: (left, right) => JSModule['_BinaryenBinary'](this.ptr, Operations.AndNotVec128, left, right),
            bitselect: (left, right, cond) => JSModule['_BinaryenBinary'](this.ptr, Operations.BitselectVec128, left, right),
            pop: () => JSModule['_BinaryenPop'](this.ptr, v128)
        };
    }
    get i8x16() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            shuffle: (left, right, mask) => preserveStack(() => JSModule['_BinaryenSIMDShuffle'](this.ptr, left, right, i8sToStack(mask))),
            swizzle: (left, right) => binary(Operations.SwizzleVecI8x16, left, right),
            splat: (value) => unary(Operations.SplatVecI8x16, value),
            extract_lane_s: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneSVecI8x16, vec, index),
            extract_lane_u: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneUVecI8x16, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, JSModule['ReplaceLaneVecI8x16'], vec, index, value),
            eq: (left, right) => binary(Operations.EqVecI8x16, left, right),
            ne: (left, right) => binary(Operations.NeVecI8x16, left, right),
            lt_s: (left, right) => binary(Operations.LtSVecI8x16, left, right),
            lt_u: (left, right) => binary(Operations.LtUVecI8x16, left, right),
            gt_s: (left, right) => binary(Operations.GtSVecI8x16, left, right),
            gt_u: (left, right) => binary(Operations.GtUVecI8x16, left, right),
            le_s: (left, right) => binary(Operations.LeSVecI8x16, left, right),
            le_u: (left, right) => binary(Operations.LeUVecI8x16, left, right),
            ge_s: (left, right) => binary(Operations.GeSVecI8x16, left, right),
            ge_u: (left, right) => binary(Operations.GeUVecI8x16, left, right),
            abs: (value) => unary(Operations.AbsVecI8x16, value),
            neg: (value) => unary(Operations.NegVecI8x16, value),
            all_true: (value) => unary(Operations.AllTrueVecI8x16, value),
            bitmask: (value) => unary(Operations.BitmaskVecI8x16, value),
            popcnt: (value) => unary(Operations.PopcntVecI8x16, value),
            shl: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShlVecI8x16, vec, shift),
            shr_s: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrSVecI8x16, vec, shift),
            shr_u: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrUVecI8x16, vec, shift),
            add: (left, right) => binary(Operations.AddVecI8x16, left, right),
            add_saturate_s: (left, right) => binary(Operations.AddSatSVecI8x16, left, right),
            add_saturate_u: (left, right) => binary(Operations.AddSatUVecI8x16, left, right),
            sub: (left, right) => binary(Operations.SubVecI8x16, left, right),
            sub_saturate_s: (left, right) => binary(Operations.SubSatSVecI8x16, left, right),
            sub_saturate_u: (left, right) => binary(Operations.SubSatUVecI8x16, left, right),
            min_s: (left, right) => binary(Operations.MinSVecI8x16, left, right),
            min_u: (left, right) => binary(Operations.MinUVecI8x16, left, right),
            max_s: (left, right) => binary(Operations.MaxSVecI8x16, left, right),
            max_u: (left, right) => binary(Operations.MaxUVecI8x16, left, right),
            avgr_u: (left, right) => binary(Operations.AvgrUVecI8x16, left, right),
            narrow_i16x8_s: (left, right) => binary(Operations.NarrowSVecI16x8ToVecI8x16, left, right),
            narrow_i16x8_u: (left, right) => binary(Operations.NarrowUVecI16x8ToVecI8x16, left, right)
        };
    }
    get i16x8() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            splat: (value) => unary(Operations.SplatVecI16x8, value),
            extract_lane_s: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneSVecI16x8, vec, index),
            extract_lane_u: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneUVecI16x8, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, Operations.ReplaceLaneVecI16x8, vec, index, value),
            eq: (left, right) => binary(Operations.EqVecI16x8, left, right),
            ne: (left, right) => binary(Operations.NeVecI16x8, left, right),
            lt_s: (left, right) => binary(Operations.LtSVecI16x8, left, right),
            lt_u: (left, right) => binary(Operations.LtUVecI16x8, left, right),
            gt_s: (left, right) => binary(Operations.GtSVecI16x8, left, right),
            gt_u: (left, right) => binary(Operations.GtUVecI16x8, left, right),
            le_s: (left, right) => binary(Operations.LeSVecI16x8, left, right),
            le_u: (left, right) => binary(Operations.LeUVecI16x8, left, right),
            ge_s: (left, right) => binary(Operations.GeSVecI16x8, left, right),
            ge_u: (left, right) => binary(Operations.GeUVecI16x8, left, right),
            abs: (value) => unary(Operations.AbsVecI16x8, value),
            neg: (value) => unary(Operations.NegVecI16x8, value),
            all_true: (value) => unary(Operations.AllTrueVecI16x8, value),
            bitmask: (value) => unary(Operations.BitmaskVecI16x8, value),
            shl: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShlVecI16x8, vec, shift),
            shr_s: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrSVecI16x8, vec, shift),
            shr_u: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrUVecI16x8, vec, shift),
            add: (left, right) => binary(Operations.AddVecI16x8, left, right),
            add_saturate_s: (left, right) => binary(Operations.AddSatSVecI16x8, left, right),
            add_saturate_u: (left, right) => binary(Operations.AddSatUVecI16x8, left, right),
            sub: (left, right) => binary(Operations.SubVecI16x8, left, right),
            sub_saturate_s: (left, right) => binary(Operations.SubSatSVecI16x8, left, right),
            sub_saturate_u: (left, right) => binary(Operations.SubSatUVecI16x8, left, right),
            mul: (left, right) => binary(Operations.MulVecI16x8, left, right),
            min_s: (left, right) => binary(Operations.MinSVecI16x8, left, right),
            min_u: (left, right) => binary(Operations.MinUVecI16x8, left, right),
            max_s: (left, right) => binary(Operations.MaxSVecI16x8, left, right),
            max_u: (left, right) => binary(Operations.MaxUVecI16x8, left, right),
            q15mulr_sat_s: (left, right) => binary(Operations.Q15MulrSatSVecI16x8, left, right),
            extmul_low_i8x16_s: (left, right) => binary(Operations.ExtMulLowSVecI16x8, left, right),
            extmul_high_i8x16_s: (left, right) => binary(Operations.ExtMulHighSVecI16x8, left, right),
            extmul_low_i8x16_u: (left, right) => binary(Operations.ExtMulLowUVecI16x8, left, right),
            extmul_high_i8x16_u: (left, right) => binary(Operations.ExtMulHighUVecI16x8, left, right),
            extadd_pairwise_i8x16_s: (value) => unary(Operations.ExtAddPairwiseSVecI8x16ToI16x8, value),
            extadd_pairwise_i8x16_u: (value) => unary(Operations.ExtAddPairwiseUVecI8x16ToI16x8, value),
            narrow_i32x4_s: (left, right) => binary(Operations.NarrowSVecI32x4ToVecI16x8, left, right),
            narrow_i32x4_u: (left, right) => binary(Operations.NarrowUVecI32x4ToVecI16x8, left, right),
            extend_low_i8x16_s: (value) => unary(Operations.ExtendLowSVecI8x16ToVecI16x8, value),
            extend_high_i8x16_s: (value) => unary(Operations.ExtendHighSVecI8x16ToVecI16x8, value),
            extend_low_i8x16_u: (value) => unary(Operations.ExtendLowUVecI8x16ToVecI16x8, value),
            extend_high_i8x16_u: (value) => unary(Operations.ExtendHighUVecI8x16ToVecI16x8, value)
        };
    }
    get i32x4() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            splat: (value) => unary(Operations.SplatVecI32x4, value),
            extract_lane: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneVecI32x4, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, Operations.ReplaceLaneVecI32x4, vec, index, value),
            eq: (left, right) => binary(Operations.EqVecI32x4, left, right),
            ne: (left, right) => binary(Operations.NeVecI32x4, left, right),
            lt_s: (left, right) => binary(Operations.LtSVecI32x4, left, right),
            lt_u: (left, right) => binary(Operations.LtUVecI32x4, left, right),
            gt_s: (left, right) => binary(Operations.GtSVecI32x4, left, right),
            gt_u: (left, right) => binary(Operations.GtUVecI32x4, left, right),
            le_s: (left, right) => binary(Operations.LeSVecI32x4, left, right),
            le_u: (left, right) => binary(Operations.LeUVecI32x4, left, right),
            ge_s: (left, right) => binary(Operations.GeSVecI32x4, left, right),
            ge_u: (left, right) => binary(Operations.GeUVecI32x4, left, right),
            abs: (value) => unary(Operations.AbsVecI32x4, value),
            neg: (value) => unary(Operations.NegVecI32x4, value),
            all_true: (value) => unary(Operations.AllTrueVecI32x4, value),
            bitmask: (value) => unary(Operations.BitmaskVecI32x4, value),
            shl: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShlVecI32x4, vec, shift),
            shr_s: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrSVecI32x4, vec, shift),
            shr_u: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrUVecI32x4, vec, shift),
            add: (left, right) => binary(Operations.AddVecI32x4, left, right),
            sub: (left, right) => binary(Operations.SubVecI32x4, left, right),
            mul: (left, right) => binary(Operations.MulVecI32x4, left, right),
            min_s: (left, right) => binary(Operations.MinSVecI32x4, left, right),
            min_u: (left, right) => binary(Operations.MinUVecI32x4, left, right),
            max_s: (left, right) => binary(Operations.MaxSVecI32x4, left, right),
            max_u: (left, right) => binary(Operations.MaxUVecI32x4, left, right),
            dot_i16x8_s: (left, right) => binary(Operations.DotSVecI16x8ToVecI32x4, left, right),
            extmul_low_i16x8_s: (left, right) => binary(Operations.ExtMulLowSVecI32x4, left, right),
            extmul_high_i16x8_s: (left, right) => binary(Operations.ExtMulHighSVecI32x4, left, right),
            extmul_low_i16x8_u: (left, right) => binary(Operations.ExtMulLowUVecI32x4, left, right),
            extmul_high_i16x8_u: (left, right) => binary(Operations.ExtMulHighUVecI32x4, left, right),
            extadd_pairwise_i16x8_s: (value) => unary(Operations.ExtAddPairwiseSVecI16x8ToI32x4, value),
            extadd_pairwise_i16x8_u: (value) => unary(Operations.ExtAddPairwiseUVecI16x8ToI32x4, value),
            trunc_sat_f32x4_s: (left, right) => binary(Operations.TruncSatSVecF32x4ToVecI32x4, left, right),
            trunc_sat_f32x4_u: (left, right) => binary(Operations.TruncSatUVecF32x4ToVecI32x4, left, right),
            extend_low_i16x8_s: (value) => unary(Operations.ExtendLowSVecI16x8ToVecI32x4, value),
            extend_high_i16x8_s: (value) => unary(Operations.ExtendHighSVecI16x8ToVecI32x4, value),
            extend_low_i16x8_u: (value) => unary(Operations.ExtendLowUVecI16x8ToVecI32x4, value),
            extend_high_i16x8_u: (value) => unary(Operations.ExtendHighUVecI16x8ToVecI32x4, value),
            trunc_sat_f64x2_s_zero: (left, right) => binary(Operations.TruncSatZeroSVecF64x2ToVecI32x4, left, right),
            trunc_sat_f64x2_u_zero: (left, right) => binary(Operations.TruncSatZeroUVecF64x2ToVecI32x4, left, right)
        };
    }
    get i64x2() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            splat: (value) => unary(Operations.SplatVecI64x2, value),
            extract_lane: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneVecI64x2, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, Operations.ReplaceLaneVecI64x2, vec, index, value),
            eq: (left, right) => binary(Operations.EqVecI64x2, left, right),
            ne: (left, right) => binary(Operations.NeVecI64x2, left, right),
            lt_s: (left, right) => binary(Operations.LtSVecI64x2, left, right),
            gt_s: (left, right) => binary(Operations.GtSVecI64x2, left, right),
            le_s: (left, right) => binary(Operations.LeSVecI64x2, left, right),
            ge_s: (left, right) => binary(Operations.GeSVecI64x2, left, right),
            abs: (value) => unary(Operations.AbsVecI64x2, value),
            neg: (value) => unary(Operations.NegVecI64x2, value),
            all_true: (value) => unary(Operations.AllTrueVecI64x2, value),
            bitmask: (value) => unary(Operations.BitmaskVecI64x2, value),
            shl: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShlVecI64x2, vec, shift),
            shr_s: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrSVecI64x2, vec, shift),
            shr_u: (vec, shift) => JSModule['_BinaryenSIMDShift'](this.ptr, Operations.ShrUVecI64x2, vec, shift),
            add: (left, right) => binary(Operations.AddVecI64x2, left, right),
            sub: (left, right) => binary(Operations.SubVecI64x2, left, right),
            mul: (left, right) => binary(Operations.MulVecI64x2, left, right),
            extmul_low_i32x4_s: (left, right) => binary(Operations.ExtMulLowSVecI64x2, left, right),
            extmul_high_i32x4_s: (left, right) => binary(Operations.ExtMulHighSVecI64x2, left, right),
            extmul_low_i32x4_u: (left, right) => binary(Operations.ExtMulLowUVecI64x2, left, right),
            extmul_high_i32x4_u: (left, right) => binary(Operations.ExtMulHighUVecI64x2, left, right),
            extend_low_i32x4_s: (value) => unary(Operations.ExtendLowSVecI32x4ToVecI64x2, value),
            extend_high_i32x4_s: (value) => unary(Operations.ExtendHighSVecI32x4ToVecI64x2, value),
            extend_low_i32x4_u: (value) => unary(Operations.ExtendLowUVecI32x4ToVecI64x2, value),
            extend_high_i32x4_u: (value) => unary(Operations.ExtendHighUVecI32x4ToVecI64x2, value)
        };
    }
    get f32x4() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            splat: (value) => unary(Operations.SplatVecF32x4, value),
            extract_lane: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneVecF32x4, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, Operations.ReplaceLaneVecF32x4, vec, index, value),
            eq: (left, right) => binary(Operations.EqVecF32x4, left, right),
            ne: (left, right) => binary(Operations.NeVecF32x4, left, right),
            lt: (left, right) => binary(Operations.LtVecF32x4, left, right),
            gt: (left, right) => binary(Operations.GtVecF32x4, left, right),
            le: (left, right) => binary(Operations.LeVecF32x4, left, right),
            ge: (left, right) => binary(Operations.GeVecF32x4, left, right),
            abs: (value) => unary(Operations.AbsVecF32x4, value),
            neg: (value) => unary(Operations.NegVecF32x4, value),
            sqrt: (value) => unary(Operations.SqrtVecF32x4, value),
            add: (left, right) => binary(Operations.AddVecF32x4, left, right),
            sub: (left, right) => binary(Operations.SubVecF32x4, left, right),
            mul: (left, right) => binary(Operations.MulVecF32x4, left, right),
            div: (left, right) => binary(Operations.DivVecF32x4, left, right),
            min: (left, right) => binary(Operations.MinVecF32x4, left, right),
            max: (left, right) => binary(Operations.MaxVecF32x4, left, right),
            pmin: (left, right) => binary(Operations.PMinVecF32x4, left, right),
            pmax: (left, right) => binary(Operations.PMaxVecF32x4, left, right),
            ceil: (value) => unary(Operations.CeilVecF32x4, value),
            floor: (value) => unary(Operations.FloorVecF32x4, value),
            trunc: (value) => unary(Operations.TruncVecF32x4, value),
            nearest: (value) => unary(Operations.NearestVecF32x4, value),
            convert_i32x4_s: (value) => unary(Operations.ConvertSVecI32x4ToVecF32x4, value),
            convert_i32x4_u: (value) => unary(Operations.ConvertUVecI32x4ToVecF32x4, value),
            demote_f64x2_zero: (value) => unary(Operations.DemoteZeroVecF64x2ToVecF32x4, value)
        };
    }
    get f64x2() {
        const unary = (op, value) => JSModule['_BinaryenUnary'](this.ptr, op, value);
        const binary = (op, left, right) => JSModule['_BinaryenBinary'](this.ptr, op, left, right);
        return {
            splat: (value) => unary(Operations.SplatVecF64x2, value),
            extract_lane: (vec, index) => JSModule['_BinaryenSIMDExtract'](this.ptr, Operations.ExtractLaneVecF64x2, vec, index),
            replace_lane: (vec, index, value) => JSModule['_BinaryenSIMDReplace'](this.ptr, Operations.ReplaceLaneVecF64x2, vec, index, value),
            eq: (left, right) => binary(Operations.EqVecF64x2, left, right),
            ne: (left, right) => binary(Operations.NeVecF64x2, left, right),
            lt: (left, right) => binary(Operations.LtVecF64x2, left, right),
            gt: (left, right) => binary(Operations.GtVecF64x2, left, right),
            le: (left, right) => binary(Operations.LeVecF64x2, left, right),
            ge: (left, right) => binary(Operations.GeVecF64x2, left, right),
            abs: (value) => unary(Operations.AbsVecF64x2, value),
            neg: (value) => unary(Operations.NegVecF64x2, value),
            sqrt: (value) => unary(Operations.SqrtVecF64x2, value),
            add: (left, right) => binary(Operations.AddVecF64x2, left, right),
            sub: (left, right) => binary(Operations.SubVecF64x2, left, right),
            mul: (left, right) => binary(Operations.MulVecF64x2, left, right),
            div: (left, right) => binary(Operations.DivVecF64x2, left, right),
            min: (left, right) => binary(Operations.MinVecF64x2, left, right),
            max: (left, right) => binary(Operations.MaxVecF64x2, left, right),
            pmin: (left, right) => binary(Operations.PMinVecF64x2, left, right),
            pmax: (left, right) => binary(Operations.PMaxVecF64x2, left, right),
            ceil: (value) => unary(Operations.CeilVecF64x2, value),
            floor: (value) => unary(Operations.FloorVecF64x2, value),
            trunc: (value) => unary(Operations.TruncVecF64x2, value),
            nearest: (value) => unary(Operations.NearestVecF64x2, value),
            convert_low_i32x4_s: (value) => unary(Operations.ConvertLowSVecI32x4ToVecF64x2, value),
            convert_low_i32x4_u: (value) => unary(Operations.ConvertLowUVecI32x4ToVecF64x2, value),
            promote_low_f32x4: (value) => unary(Operations.PromoteLowVecF32x4ToVecF64x2, value)
        };
    }
    get funcref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, funcref)
        };
    }
    get externref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, externref)
        };
    }
    get anyref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, anyref)
        };
    }
    get eqref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, eqref)
        };
    }
    get i31ref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, i31ref)
        };
    }
    get structref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, structref)
        };
    }
    /* explicitly skipping string stuff until it's reprioritized
    get stringref() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, stringref)
        }
    }
    get stringview_wtf8() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, stringview_wtf8)
        }
    }
    get stringview_wtf16() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, stringview_wtf16)
        }
    }
    get stringview_iter() {
        return {
            pop: () => JSModule['_BinaryenPop'](this.ptr, stringview_iter)
        }
    }
    */
    get ref() {
        return {
            null: (type) => JSModule['_BinaryenRefNull'](this.ptr, type),
            is_null: (value) => JSModule['_BinaryenRefIsNull'](this.ptr, value),
            i31: (value) => JSModule['_BinaryenRefI31'](this.ptr, value),
            func: (name, type) => JSModule['_BinaryenRefFunc'](this.ptr, strToStack(name), type),
            eq: (left, right) => JSModule['_BinaryenRefEq'](this.ptr, left, right),
            as_non_null: (value) => JSModule['_BinaryenRefAs'](this.ptr, Operations.RefAsNonNull, value)
        };
    }
    get i31() {
        return {
            get_s: (i31) => JSModule['_BinaryenI31Get'](this.ptr, i31, 1),
            get_u: (i31) => JSModule['_BinaryenI31Get'](this.ptr, i31, 0)
        };
    }
    get atomic() {
        return {
            fence: () => JSModule['_BinaryenAtomicFence'](this.ptr)
        };
    }
    get locals() {
        return {
            get: (index, type) => JSModule['_BinaryenLocalGet'](this.ptr, index, type),
            set: (index, value) => JSModule['_BinaryenLocalSet'](this.ptr, index, value),
            tee: (index, value, type) => {
                if (typeof type === 'undefined') {
                    throw new Error("local.tee's type should be defined");
                }
                return JSModule['_BinaryenLocalTee'](this.ptr, index, value, type);
            }
        };
    }
    get globals() {
        return {
            add: (name, type, mutable, init) => preserveStack(() => JSModule['_BinaryenAddGlobal'](this.ptr, strToStack(name), type, mutable, init)),
            getRefByName: (name) => preserveStack(() => JSModule['_BinaryenGetGlobal'](this.ptr, strToStack(name))),
            getRefByIndex: (index) => JSModule['_BinaryenGetGlobalByIndex'](this.ptr, index),
            remove: (name) => preserveStack(() => JSModule['_BinaryenRemoveGlobal'](this.ptr, strToStack(name))),
            count: () => JSModule['_BinaryenGetNumGlobals'](this.ptr),
            set: (name, value) => JSModule['_BinaryenGlobalSet'](this.ptr, strToStack(name), value),
            get: (name, type) => JSModule['_BinaryenGlobalGet'](this.ptr, strToStack(name), type),
            addImport: (internalName, externalModuleName, externalBaseName, globalType, mutable) => preserveStack(() => JSModule['_BinaryenAddGlobalImport'](this.ptr, strToStack(internalName), strToStack(externalModuleName), strToStack(externalBaseName), globalType, mutable)),
            addExport: (internalName, externalName) => preserveStack(() => JSModule['_BinaryenAddGlobalExport'](this.ptr, strToStack(internalName), strToStack(externalName))),
            getInfo: (ref) => {
                return {
                    'name': UTF8ToString(JSModule['_BinaryenGlobalGetName'](ref)),
                    'module': UTF8ToString(JSModule['_BinaryenGlobalImportGetModule'](ref)),
                    'base': UTF8ToString(JSModule['_BinaryenGlobalImportGetBase'](ref)),
                    'type': JSModule['_BinaryenGlobalGetType'](ref),
                    'mutable': Boolean(JSModule['_BinaryenGlobalIsMutable'](ref)),
                    'init': JSModule['_BinaryenGlobalGetInitExpr'](ref)
                };
            }
        };
    }
    get tables() {
        return {
            add: (name, initial, maximum, type) => preserveStack(() => JSModule['_BinaryenAddTable'](this.ptr, strToStack(name), initial, maximum, type)),
            getRefByName: (name) => preserveStack(() => JSModule['_BinaryenGetTable'](this.ptr, strToStack(name))),
            getRefByIndex: (index) => JSModule['_BinaryenGetTableByIndex'](this.ptr, index),
            remove: (name) => preserveStack(() => JSModule['_BinaryenRemoveTable'](this.ptr, strToStack(name))),
            count: () => JSModule['_BinaryenGetNumTables'](this.ptr),
            get: (name, index, type) => JSModule['_BinaryenTableGet'](this.ptr, strToStack(name), index, type),
            set: (name, index, value) => JSModule['_BinaryenTableSet'](this.ptr, strToStack(name), index, value),
            size: (name) => JSModule['_BinaryenTableSize'](this.ptr, strToStack(name)),
            grow: (name, value, delta) => JSModule['_BinaryenTableGrow'](this.ptr, strToStack(name), value, delta),
            addImport: (internalName, externalModuleName, externalBaseName) => preserveStack(() => JSModule['_BinaryenAddTableImport'](this.ptr, strToStack(internalName), strToStack(externalModuleName), strToStack(externalBaseName))),
            addExport: (internalName, externalName) => preserveStack(() => JSModule['_BinaryenAddTableExport'](this.ptr, strToStack(internalName), strToStack(externalName))),
            getInfo: (table) => {
                const hasMax = Boolean(JSModule['_BinaryenTableHasMax'](this.ptr, table));
                const withMax = hasMax ? { max: JSModule['_BinaryenTableGetMax'](this.ptr, table) } : {};
                return Object.assign({
                    'name': UTF8ToString(JSModule['_BinaryenTableGetName'](table)),
                    'module': UTF8ToString(JSModule['_BinaryenTableImportGetModule'](table)),
                    'base': UTF8ToString(JSModule['_BinaryenTableImportGetBase'](table)),
                    'initial': JSModule['_BinaryenTableGetInitial'](table),
                }, withMax);
            }
        };
        /* TODO
        a._BinaryenTableGetName = Q.My;
        a._BinaryenTableSetName = Q.Ny;
        a._BinaryenTableGetInitial = Q.Oy;
        a._BinaryenTableSetInitial = Q.Py;
        a._BinaryenTableHasMax = Q.Qy;
        a._BinaryenTableGetMax = Q.Ry;
        a._BinaryenTableSetMax = Q.Sy;
        a._BinaryenTableGetType = Q.Ty;
        a._BinaryenTableSetType = Q.Uy;
        */
    }
    get tuples() {
        return {
            make: (elements) => preserveStack(() => JSModule['_BinaryenTupleMake'](this.ptr, i32sToStack(elements), elements.length)),
            extract: (tuple, index) => JSModule['_BinaryenTupleExtract'](this.ptr, tuple, index)
        };
    }
    get functions() {
        return {
            add: (name, params, results, varTypes, body) => preserveStack(() => JSModule['_BinaryenAddFunction'](this.ptr, strToStack(name), params, results, i32sToStack(varTypes), varTypes.length, body)),
            getRefByName: (name) => preserveStack(() => JSModule['_BinaryenGetFunction'](this.ptr, strToStack(name))),
            getRefByIndex: (index) => JSModule['_BinaryenGetFunctionByIndex'](this.ptr, index),
            remove: (name) => preserveStack(() => JSModule['_BinaryenRemoveFunction'](this.ptr, strToStack(name))),
            count: () => JSModule['_BinaryenGetNumFunctions'](this.ptr),
            addImport: (internalName, externalModuleName, externalBaseName, params, results) => preserveStack(() => JSModule['_BinaryenAddFunctionImport'](this.ptr, strToStack(internalName), strToStack(externalModuleName), strToStack(externalBaseName), params, results)),
            addExport: (internalName, externalName) => preserveStack(() => JSModule['_BinaryenAddFunctionExport'](this.ptr, strToStack(internalName), strToStack(externalName)))
        };
    }
    get tags() {
        return {
            add: (name, params, results) => preserveStack(() => JSModule['_BinaryenAddTag'](this.ptr, strToStack(name), params, results)),
            getRefByName: (name) => preserveStack(() => JSModule['_BinaryenGetTag'](this.ptr, strToStack(name))),
            remove: (name) => preserveStack(() => JSModule['_BinaryenRemoveTag'](this.ptr, strToStack(name))),
            addImport: (internalName, externalModuleName, externalBaseName, params, results) => preserveStack(() => JSModule['_BinaryenAddTagImport'](this.ptr, strToStack(internalName), strToStack(externalModuleName), strToStack(externalBaseName), params, results)),
            addExport: (internalName, externalName) => preserveStack(() => JSModule['_BinaryenAddTagExport'](this.ptr, strToStack(internalName), strToStack(externalName))),
            getInfo: (tag) => {
                return {
                    'name': UTF8ToString(JSModule['_BinaryenTagGetName'](tag)),
                    'module': UTF8ToString(JSModule['_BinaryenTagImportGetModule'](tag)),
                    'base': UTF8ToString(JSModule['_BinaryenTagImportGetBase'](tag)),
                    'params': JSModule['_BinaryenTagGetParams'](tag),
                    'results': JSModule['_BinaryenTagGetResults'](tag)
                };
            }
        };
    }
    get memory() {
        return {
            init: (segment, dest, offset, size, name) => preserveStack(() => JSModule['_BinaryenMemoryInit'](this.ptr, strToStack(segment), dest, offset, size, strToStack(name))),
            has: () => Boolean(JSModule['_BinaryenHasMemory'](this.ptr)),
            size: (name, memory64) => JSModule['_BinaryenMemorySize'](this.ptr, strToStack(name), memory64),
            grow: (value, name, memory64) => JSModule['_BinaryenMemoryGrow'](this.ptr, value, strToStack(name), memory64),
            copy: (dest, source, size, destName, sourceName) => JSModule['_BinaryenMemoryCopy'](this.ptr, dest, source, size, strToStack(destName), strToStack(sourceName)),
            fill: (dest, value, size, name) => JSModule['_BinaryenMemoryFill'](this.ptr, dest, value, size, strToStack(name)),
            set: (initial, maximum, exportName, segments, shared, memory64, internalName) => preserveStack(() => {
                const segmentsLen = segments ? segments.length : 0;
                const segmentData = new Array(segmentsLen);
                const segmentDataLen = new Array(segmentsLen);
                const segmentPassive = new Array(segmentsLen);
                const segmentOffset = new Array(segmentsLen);
                for (let i = 0; i < segmentsLen; i++) {
                    const { data, offset, passive } = segments[i];
                    segmentData[i] = _malloc(data.length);
                    HEAP8.set(data, segmentData[i]);
                    segmentDataLen[i] = data.length;
                    segmentPassive[i] = passive;
                    segmentOffset[i] = offset;
                }
                const ret = JSModule['_BinaryenSetMemory'](this.ptr, initial, maximum, strToStack(exportName), i32sToStack(segmentData), i8sToStack(segmentPassive), i32sToStack(segmentOffset), i32sToStack(segmentDataLen), segmentsLen, shared, memory64, strToStack(internalName));
                for (let i = 0; i < segmentsLen; i++) {
                    _free(segmentData[i]);
                }
                return ret;
            }),
            getInfo: (name) => {
                const hasMax = Boolean(JSModule['_BinaryenMemoryHasMax'](this.ptr, strToStack(name)));
                const withMax = hasMax ? { max: JSModule['_BinaryenMemoryGetMax'](this.ptr, strToStack(name)) } : {};
                return Object.assign({
                    module: UTF8ToString(JSModule['_BinaryenMemoryImportGetModule'](this.ptr, strToStack(name))),
                    base: UTF8ToString(JSModule['_BinaryenMemoryImportGetBase'](this.ptr, strToStack(name))),
                    initial: JSModule['_BinaryenMemoryGetInitial'](this.ptr, strToStack(name)),
                    shared: Boolean(JSModule['_BinaryenMemoryIsShared'](this.ptr, strToStack(name))),
                    is64: Boolean(JSModule['_BinaryenMemoryIs64'](this.ptr, strToStack(name))),
                }, withMax);
            },
            countSegments: () => JSModule['_BinaryenGetNumMemorySegments'](this.ptr),
            getSegmentInfoByIndex: (index) => {
                const passive = Boolean(JSModule['_BinaryenGetMemorySegmentPassive'](this.ptr, index));
                const offset = passive ? 0 : JSModule['_BinaryenGetMemorySegmentByteOffset'](this.ptr, index);
                const size = JSModule['_BinaryenGetMemorySegmentByteLength'](this.ptr, index);
                const ptr = _malloc(size);
                JSModule['_BinaryenCopyMemorySegmentData'](this.ptr, index, ptr);
                const data = new Uint8Array(size);
                data.set(HEAP8.subarray(ptr, ptr + size));
                _free(ptr);
                return { offset, data, passive };
            },
            countElementSegments: () => JSModule['_BinaryenGetNumElementSegments'](this.ptr),
            getElementSegmentByIndex: (index) => JSModule['_BinaryenGetElementSegmentByIndex'](this.ptr, index),
            getElementSegmentInfo: (segment) => {
                const segmentLength = JSModule['_BinaryenElementSegmentGetLength'](segment);
                const names = new Array(segmentLength);
                for (let j = 0; j < segmentLength; j++) {
                    names[j] = UTF8ToString(JSModule['_BinaryenElementSegmentGetData'](segment, j));
                }
                return {
                    'name': UTF8ToString(JSModule['_BinaryenElementSegmentGetName'](segment)),
                    'table': UTF8ToString(JSModule['_BinaryenElementSegmentGetTable'](segment)),
                    'offset': JSModule['_BinaryenElementSegmentGetOffset'](segment),
                    'data': names
                };
            },
            addImport: (internalName, externalModuleName, externalBaseName, shared) => preserveStack(() => JSModule['_BinaryenAddMemoryImport'](this.ptr, strToStack(internalName), strToStack(externalModuleName), strToStack(externalBaseName), shared)),
            addExport: (internalName, externalName) => preserveStack(() => JSModule['_BinaryenAddMemoryExport'](this.ptr, strToStack(internalName), strToStack(externalName))),
            atomic: {
                notify: (ptr, notifyCount, name) => JSModule['_BinaryenAtomicNotify'](this.ptr, ptr, notifyCount, strToStack(name)),
                wait32: (ptr, expected, timeout, name) => JSModule['_BinaryenAtomicWait'](this.ptr, ptr, expected, timeout, JSModule['i32'], strToStack(name)),
                wait64: (ptr, expected, timeout, name) => JSModule['_BinaryenAtomicWait'](this.ptr, ptr, expected, timeout, JSModule['i64'], strToStack(name))
            }
        };
    }
    get data() {
        return {
            drop: (segment) => preserveStack(() => JSModule['_BinaryenDataDrop'](this.ptr, strToStack(segment)))
        };
    }
    get exports() {
        return {
            getRefByName: (externalName) => preserveStack(() => JSModule['_BinaryenGetExport'](this.ptr, strToStack(externalName))),
            getRefByIndex: (index) => JSModule['_BinaryenGetExportByIndex'](this.ptr, index),
            remove: (externalName) => preserveStack(() => JSModule['_BinaryenRemoveExport'](this.ptr, strToStack(externalName))),
            count: () => JSModule['_BinaryenGetNumExports'](this.ptr),
            getInfo: (export_) => {
                return {
                    'kind': JSModule['_BinaryenExportGetKind'](export_),
                    'name': UTF8ToString(JSModule['_BinaryenExportGetName'](export_)),
                    'value': UTF8ToString(JSModule['_BinaryenExportGetValue'](export_))
                };
            }
        };
    }
    get expressions() {
        return {
            copy: (expr) => JSModule['_BinaryenExpressionCopy'](expr, this.ptr),
            getType: (expression) => JSModule['_BinaryenExpressionGetType'](expression),
            getInfo: (expression) => getExpressionInfo(expression),
            getSideEffects: (expression) => JSModule['_BinaryenExpressionGetSideEffects'](expression, this.ptr),
            emitText: (expression) => {
                let text = '';
                const old = swapOut(s => { text += s + '\n'; });
                JSModule['_BinaryenExpressionPrint'](expression);
                swapOut(old);
                return text;
            }
        };
    }
    get arrays() {
        return {
            newFromInit: (heapType, size, init) => JSModule['BinaryenArrayNew'](this.ptr, heapType, size, init),
            newFromItems: (heapType, values) => {
                const ptr = _malloc(Math.max(8, values.length * 4));
                let offset = ptr;
                values.forEach(value => {
                    __i32_store(offset, value);
                    offset += 4;
                });
                const result = JSModule['_BinaryenArrayNewFixed'](this.ptr, heapType, ptr, values.length);
                _free(ptr);
                return result;
            },
            copy: (destArray, destItem, srcArray, srcItem, numItems) => JSModule['_BinaryenArrayCopy'](this.ptr, destArray, destItem, srcArray, srcItem, numItems),
            getItem: (array, item, type, signed) => JSModule['_BinaryenArrayGet'](this.ptr, array, item, type, signed),
            setItem: (array, item, value) => JSModule['_BinaryenArraySet'](this.ptr, array, item, value),
            length: (array) => JSModule['_BinaryenArrayLen'](this.ptr, array)
        };
    }
    get structs() {
        return {
            newFromFields: (heapType, values) => {
                const ptr = _malloc(4 * values.length);
                let offset = ptr;
                values.forEach(value => {
                    __i32_store(offset, value);
                    offset += 4;
                });
                const result = JSModule['_BinaryenStructNew'](this.ptr, ptr, values.length, heapType);
                _free(ptr);
                return result;
            },
            getMember: (struct, memberIndex, resultType, signed) => JSModule['_BinaryenStructGet'](this.ptr, memberIndex, struct, resultType, signed),
            setMember: (struct, memberIndex, value) => JSModule['_BinaryenStructSet'](this.ptr, memberIndex, struct, value)
        };
    }
}
export class Relooper {
    constructor(module, ref) {
        this.ref = ref || JSModule['_RelooperCreate'](module.ptr);
    }
    addBlock(code) {
        return JSModule['_RelooperAddBlock'](this.ref, code);
    }
    addBranch(from, to, condition, code) {
        JSModule['_RelooperAddBranch'](from, to, condition, code);
    }
    addBlockWithSwitch(code, condition) {
        return JSModule['_RelooperAddBlockWithSwitch'](this.ref, code, condition);
    }
    addBranchForSwitch(from, to, indexes, code) {
        preserveStack(() => JSModule['_RelooperAddBranchForSwitch'](from, to, i32sToStack(indexes), indexes.length, code));
    }
    renderAndDispose(entry, labelHelper) {
        return JSModule['_RelooperRenderAndDispose'](this.ref, entry, labelHelper);
    }
}
export var ExpressionRunnerFlags;
(function (ExpressionRunnerFlags) {
    ExpressionRunnerFlags[ExpressionRunnerFlags["Default"] = JSModule['_ExpressionRunnerFlagsDefault']()] = "Default";
    ExpressionRunnerFlags[ExpressionRunnerFlags["PreserveSideEffects"] = JSModule['_ExpressionRunnerFlagsPreserveSideeffects']()] = "PreserveSideEffects";
    ExpressionRunnerFlags[ExpressionRunnerFlags["TraverseCalls"] = JSModule['_ExpressionRunnerFlagsTraverseCalls']()] = "TraverseCalls";
})(ExpressionRunnerFlags || (ExpressionRunnerFlags = {}));
export class ExpressionRunner {
    constructor(module, flags, maxDepth, maxLoopIterations) {
        this.ref = JSModule['_ExpressionRunnerCreate'](module.ptr, flags, maxDepth, maxLoopIterations);
    }
    setLocalValue(index, valueExpr) {
        return Boolean(JSModule['_ExpressionRunnerSetLocalValue'](this.ref, index, valueExpr));
    }
    setGlobalValue(name, valueExpr) {
        return preserveStack(() => Boolean(JSModule['_ExpressionRunnerSetGlobalValue'](this.ref, strToStack(name), valueExpr)));
    }
    runAndDispose(expr) {
        return JSModule['_ExpressionRunnerRunAndDispose'](this.ref, expr);
    }
}
export class TypeBuilder {
    static typeFromTempHeapType(heapType, nullable) {
        return JSModule['_BinaryenTypeFromHeapType'](heapType, nullable);
    }
    static heapTypeFromType(type) {
        return JSModule['_BinaryenTypeGetHeapType'](type);
    }
    static arrayElementType(heapType) {
        return JSModule['_BinaryenArrayTypeGetElementType'](heapType);
    }
    static structMemberCount(heapType) {
        return JSModule['_BinaryenStructTypeGetNumFields'](heapType);
    }
    static structMemberType(heapType, index) {
        return JSModule['_BinaryenStructTypeGetFieldType'](heapType, index);
    }
    constructor(slots) {
        this.ref = JSModule['_TypeBuilderCreate'](slots);
    }
    setArrayType(slot, elementType) {
        JSModule['_TypeBuilderSetArrayType'](this.ref, slot, elementType.type, elementType.packedType, elementType.mutable);
        return this;
    }
    setStructType(slot, fieldTypes) {
        const types = _malloc(4 * fieldTypes.length);
        const packedTypes = _malloc(4 * fieldTypes.length);
        // assume sizeof(bool) is 4
        const mutables = _malloc(4 * fieldTypes.length);
        let typesPtr = types, packedTypesPtr = packedTypes, mutablesPtr = mutables;
        fieldTypes.forEach(field => {
            __i32_store(typesPtr, field.type);
            typesPtr += 4;
            __i32_store(packedTypesPtr, field.packedType);
            packedTypesPtr += 4;
            __i32_store(mutablesPtr, field.mutable ? 1 : 0);
            mutablesPtr += 4;
        });
        JSModule['_TypeBuilderSetStructType'](this.ref, slot, types, packedTypes, mutables, fieldTypes.length);
        _free(mutables);
        _free(packedTypes);
        _free(types);
        return this;
    }
    getTempHeapType(slot) {
        return JSModule['_TypeBuilderGetTempHeapType'](this.ref, slot);
    }
    buildAndDispose() {
        const size = JSModule['_TypeBuilderGetSize'](this.ref);
        const ptr = _malloc(4 + 4 + (4 * size)); // assume 4-bytes memory reference
        const errorIndexPtr = ptr;
        const errorReasonPtr = ptr + 4;
        const heapTypesPtr = ptr + 8;
        const ok = JSModule['_TypeBuilderBuildAndDispose'](this.ref, heapTypesPtr, errorIndexPtr, errorReasonPtr);
        const errorIndex = __i32_load(errorIndexPtr);
        const errorReason = __i32_load(errorReasonPtr);
        const heapTypes = [];
        if (ok) {
            for (let i = 0, offset = heapTypesPtr; i < size; i++, offset += 4) {
                const type = __i32_load(offset);
                heapTypes.push(type);
            }
        }
        _free(ptr);
        return { heapTypes, errorIndex, errorReason };
    }
}
function getExpressionInfo(expression) {
    const id = JSModule['_BinaryenExpressionGetId'](expression);
    const type = JSModule['_BinaryenExpressionGetType'](expression);
    switch (id) {
        case JSModule['BlockId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenBlockGetName'](expression)),
                'children': getAllNested(expression, JSModule['_BinaryenBlockGetNumChildren'], JSModule['_BinaryenBlockGetChildAt'])
            };
        case JSModule['IfId']:
            return {
                'id': id,
                'type': type,
                'condition': JSModule['_BinaryenIfGetCondition'](expression),
                'ifTrue': JSModule['_BinaryenIfGetIfTrue'](expression),
                'ifFalse': JSModule['_BinaryenIfGetIfFalse'](expression)
            };
        case JSModule['LoopId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenLoopGetName'](expression)),
                'body': JSModule['_BinaryenLoopGetBody'](expression)
            };
        case JSModule['BreakId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenBreakGetName'](expression)),
                'condition': JSModule['_BinaryenBreakGetCondition'](expression),
                'value': JSModule['_BinaryenBreakGetValue'](expression)
            };
        case JSModule['SwitchId']:
            return {
                'id': id,
                'type': type,
                // Do not pass the index as the second parameter to UTF8ToString as that will cut off the string.
                'names': getAllNested(expression, JSModule['_BinaryenSwitchGetNumNames'], JSModule['_BinaryenSwitchGetNameAt']).map(p => UTF8ToString(p)),
                'defaultName': UTF8ToString(JSModule['_BinaryenSwitchGetDefaultName'](expression)),
                'condition': JSModule['_BinaryenSwitchGetCondition'](expression),
                'value': JSModule['_BinaryenSwitchGetValue'](expression)
            };
        case JSModule['CallId']:
            return {
                'id': id,
                'type': type,
                'isReturn': Boolean(JSModule['_BinaryenCallIsReturn'](expression)),
                'target': UTF8ToString(JSModule['_BinaryenCallGetTarget'](expression)),
                'operands': getAllNested(expression, JSModule['_BinaryenCallGetNumOperands'], JSModule['_BinaryenCallGetOperandAt'])
            };
        case JSModule['CallIndirectId']:
            return {
                'id': id,
                'type': type,
                'isReturn': Boolean(JSModule['_BinaryenCallIndirectIsReturn'](expression)),
                'target': JSModule['_BinaryenCallIndirectGetTarget'](expression),
                'table': JSModule['_BinaryenCallIndirectGetTable'](expression),
                'operands': getAllNested(expression, JSModule['_BinaryenCallIndirectGetNumOperands'], JSModule['_BinaryenCallIndirectGetOperandAt'])
            };
        case JSModule['LocalGetId']:
            return {
                'id': id,
                'type': type,
                'index': JSModule['_BinaryenLocalGetGetIndex'](expression)
            };
        case JSModule['LocalSetId']:
            return {
                'id': id,
                'type': type,
                'isTee': Boolean(JSModule['_BinaryenLocalSetIsTee'](expression)),
                'index': JSModule['_BinaryenLocalSetGetIndex'](expression),
                'value': JSModule['_BinaryenLocalSetGetValue'](expression)
            };
        case JSModule['GlobalGetId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenGlobalGetGetName'](expression))
            };
        case JSModule['GlobalSetId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenGlobalSetGetName'](expression)),
                'value': JSModule['_BinaryenGlobalSetGetValue'](expression)
            };
        case JSModule['TableGetId']:
            return {
                'id': id,
                'type': type,
                'table': UTF8ToString(JSModule['_BinaryenTableGetGetTable'](expression)),
                'index': JSModule['_BinaryenTableGetGetIndex'](expression)
            };
        case JSModule['TableSetId']:
            return {
                'id': id,
                'type': type,
                'table': UTF8ToString(JSModule['_BinaryenTableSetGetTable'](expression)),
                'index': JSModule['_BinaryenTableSetGetIndex'](expression),
                'value': JSModule['_BinaryenTableSetGetValue'](expression)
            };
        case JSModule['TableSizeId']:
            return {
                'id': id,
                'type': type,
                'table': UTF8ToString(JSModule['_BinaryenTableSizeGetTable'](expression)),
            };
        case JSModule['TableGrowId']:
            return {
                'id': id,
                'type': type,
                'table': UTF8ToString(JSModule['_BinaryenTableGrowGetTable'](expression)),
                'value': JSModule['_BinaryenTableGrowGetValue'](expression),
                'delta': JSModule['_BinaryenTableGrowGetDelta'](expression),
            };
        case JSModule['LoadId']:
            return {
                'id': id,
                'type': type,
                'isAtomic': Boolean(JSModule['_BinaryenLoadIsAtomic'](expression)),
                'isSigned': Boolean(JSModule['_BinaryenLoadIsSigned'](expression)),
                'offset': JSModule['_BinaryenLoadGetOffset'](expression),
                'bytes': JSModule['_BinaryenLoadGetBytes'](expression),
                'align': JSModule['_BinaryenLoadGetAlign'](expression),
                'ptr': JSModule['_BinaryenLoadGetPtr'](expression)
            };
        case JSModule['StoreId']:
            return {
                'id': id,
                'type': type,
                'isAtomic': Boolean(JSModule['_BinaryenStoreIsAtomic'](expression)),
                'offset': JSModule['_BinaryenStoreGetOffset'](expression),
                'bytes': JSModule['_BinaryenStoreGetBytes'](expression),
                'align': JSModule['_BinaryenStoreGetAlign'](expression),
                'ptr': JSModule['_BinaryenStoreGetPtr'](expression),
                'value': JSModule['_BinaryenStoreGetValue'](expression)
            };
        case JSModule['ConstId']: {
            let value;
            switch (type) {
                case i32:
                    value = JSModule['_BinaryenConstGetValueI32'](expression);
                    break;
                case i64:
                    value = {
                        'low': JSModule['_BinaryenConstGetValueI64Low'](expression),
                        'high': JSModule['_BinaryenConstGetValueI64High'](expression)
                    };
                    break;
                case f32:
                    value = JSModule['_BinaryenConstGetValueF32'](expression);
                    break;
                case f64:
                    value = JSModule['_BinaryenConstGetValueF64'](expression);
                    break;
                case v128:
                    {
                        preserveStack(() => {
                            const tempBuffer = stackAlloc(16);
                            JSModule['_BinaryenConstGetValueV128'](expression, tempBuffer);
                            value = new Array(16);
                            for (let i = 0; i < 16; i++) {
                                value[i] = HEAPU8[tempBuffer + i];
                            }
                        });
                    }
                    break;
                default:
                    throw new Error('unexpected type: ' + type);
            }
            return {
                'id': id,
                'type': type,
                'value': value
            };
        }
        case JSModule['UnaryId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenUnaryGetOp'](expression),
                'value': JSModule['_BinaryenUnaryGetValue'](expression)
            };
        case JSModule['BinaryId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenBinaryGetOp'](expression),
                'left': JSModule['_BinaryenBinaryGetLeft'](expression),
                'right': JSModule['_BinaryenBinaryGetRight'](expression)
            };
        case JSModule['SelectId']:
            return {
                'id': id,
                'type': type,
                'ifTrue': JSModule['_BinaryenSelectGetIfTrue'](expression),
                'ifFalse': JSModule['_BinaryenSelectGetIfFalse'](expression),
                'condition': JSModule['_BinaryenSelectGetCondition'](expression)
            };
        case JSModule['DropId']:
            return {
                'id': id,
                'type': type,
                'value': JSModule['_BinaryenDropGetValue'](expression)
            };
        case JSModule['ReturnId']:
            return {
                'id': id,
                'type': type,
                'value': JSModule['_BinaryenReturnGetValue'](expression)
            };
        case JSModule['NopId']:
            return {
                'id': id,
                'type': type
            };
        case JSModule['UnreachableId']:
            return {
                'id': id,
                'type': type
            };
        case JSModule['PopId']:
            return {
                'id': id,
                'type': type
            };
        case JSModule['MemorySizeId']:
            return {
                'id': id,
                'type': type
            };
        case JSModule['MemoryGrowId']:
            return {
                'id': id,
                'type': type,
                'delta': JSModule['_BinaryenMemoryGrowGetDelta'](expression)
            };
        case JSModule['AtomicRMWId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenAtomicRMWGetOp'](expression),
                'bytes': JSModule['_BinaryenAtomicRMWGetBytes'](expression),
                'offset': JSModule['_BinaryenAtomicRMWGetOffset'](expression),
                'ptr': JSModule['_BinaryenAtomicRMWGetPtr'](expression),
                'value': JSModule['_BinaryenAtomicRMWGetValue'](expression)
            };
        case JSModule['AtomicCmpxchgId']:
            return {
                'id': id,
                'type': type,
                'bytes': JSModule['_BinaryenAtomicCmpxchgGetBytes'](expression),
                'offset': JSModule['_BinaryenAtomicCmpxchgGetOffset'](expression),
                'ptr': JSModule['_BinaryenAtomicCmpxchgGetPtr'](expression),
                'expected': JSModule['_BinaryenAtomicCmpxchgGetExpected'](expression),
                'replacement': JSModule['_BinaryenAtomicCmpxchgGetReplacement'](expression)
            };
        case JSModule['AtomicWaitId']:
            return {
                'id': id,
                'type': type,
                'ptr': JSModule['_BinaryenAtomicWaitGetPtr'](expression),
                'expected': JSModule['_BinaryenAtomicWaitGetExpected'](expression),
                'timeout': JSModule['_BinaryenAtomicWaitGetTimeout'](expression),
                'expectedType': JSModule['_BinaryenAtomicWaitGetExpectedType'](expression)
            };
        case JSModule['AtomicNotifyId']:
            return {
                'id': id,
                'type': type,
                'ptr': JSModule['_BinaryenAtomicNotifyGetPtr'](expression),
                'notifyCount': JSModule['_BinaryenAtomicNotifyGetNotifyCount'](expression)
            };
        case JSModule['AtomicFenceId']:
            return {
                'id': id,
                'type': type,
                'order': JSModule['_BinaryenAtomicFenceGetOrder'](expression)
            };
        case JSModule['SIMDExtractId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDExtractGetOp'](expression),
                'vec': JSModule['_BinaryenSIMDExtractGetVec'](expression),
                'index': JSModule['_BinaryenSIMDExtractGetIndex'](expression)
            };
        case JSModule['SIMDReplaceId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDReplaceGetOp'](expression),
                'vec': JSModule['_BinaryenSIMDReplaceGetVec'](expression),
                'index': JSModule['_BinaryenSIMDReplaceGetIndex'](expression),
                'value': JSModule['_BinaryenSIMDReplaceGetValue'](expression)
            };
        case JSModule['SIMDShuffleId']:
            return preserveStack(() => {
                const tempBuffer = stackAlloc(16);
                JSModule['_BinaryenSIMDShuffleGetMask'](expression, tempBuffer);
                const mask = new Array(16);
                for (let i = 0; i < 16; i++) {
                    mask[i] = HEAPU8[tempBuffer + i];
                }
                return {
                    'id': id,
                    'type': type,
                    'left': JSModule['_BinaryenSIMDShuffleGetLeft'](expression),
                    'right': JSModule['_BinaryenSIMDShuffleGetRight'](expression),
                    'mask': mask
                };
            });
        case JSModule['SIMDTernaryId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDTernaryGetOp'](expression),
                'a': JSModule['_BinaryenSIMDTernaryGetA'](expression),
                'b': JSModule['_BinaryenSIMDTernaryGetB'](expression),
                'c': JSModule['_BinaryenSIMDTernaryGetC'](expression)
            };
        case JSModule['SIMDShiftId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDShiftGetOp'](expression),
                'vec': JSModule['_BinaryenSIMDShiftGetVec'](expression),
                'shift': JSModule['_BinaryenSIMDShiftGetShift'](expression)
            };
        case JSModule['SIMDLoadId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDLoadGetOp'](expression),
                'offset': JSModule['_BinaryenSIMDLoadGetOffset'](expression),
                'align': JSModule['_BinaryenSIMDLoadGetAlign'](expression),
                'ptr': JSModule['_BinaryenSIMDLoadGetPtr'](expression)
            };
        case JSModule['SIMDLoadStoreLaneId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenSIMDLoadStoreLaneGetOp'](expression),
                'offset': JSModule['_BinaryenSIMDLoadStoreLaneGetOffset'](expression),
                'align': JSModule['_BinaryenSIMDLoadStoreLaneGetAlign'](expression),
                'index': JSModule['_BinaryenSIMDLoadStoreLaneGetIndex'](expression),
                'ptr': JSModule['_BinaryenSIMDLoadStoreLaneGetPtr'](expression),
                'vec': JSModule['_BinaryenSIMDLoadStoreLaneGetVec'](expression)
            };
        case JSModule['MemoryInitId']:
            return {
                'id': id,
                'type': type,
                'segment': UTF8ToString(JSModule['_BinaryenMemoryInitGetSegment'](expression)),
                'dest': JSModule['_BinaryenMemoryInitGetDest'](expression),
                'offset': JSModule['_BinaryenMemoryInitGetOffset'](expression),
                'size': JSModule['_BinaryenMemoryInitGetSize'](expression)
            };
        case JSModule['DataDropId']:
            return {
                'id': id,
                'type': type,
                'segment': UTF8ToString(JSModule['_BinaryenDataDropGetSegment'](expression)),
            };
        case JSModule['MemoryCopyId']:
            return {
                'id': id,
                'type': type,
                'dest': JSModule['_BinaryenMemoryCopyGetDest'](expression),
                'source': JSModule['_BinaryenMemoryCopyGetSource'](expression),
                'size': JSModule['_BinaryenMemoryCopyGetSize'](expression)
            };
        case JSModule['MemoryFillId']:
            return {
                'id': id,
                'type': type,
                'dest': JSModule['_BinaryenMemoryFillGetDest'](expression),
                'value': JSModule['_BinaryenMemoryFillGetValue'](expression),
                'size': JSModule['_BinaryenMemoryFillGetSize'](expression)
            };
        case JSModule['RefNullId']:
            return {
                'id': id,
                'type': type
            };
        case JSModule['RefIsNullId']:
            return {
                'id': id,
                'type': type,
                'value': JSModule['_BinaryenRefIsNullGetValue'](expression)
            };
        case JSModule['RefAsId']:
            return {
                'id': id,
                'type': type,
                'op': JSModule['_BinaryenRefAsGetOp'](expression),
                'value': JSModule['_BinaryenRefAsGetValue'](expression)
            };
        case JSModule['RefFuncId']:
            return {
                'id': id,
                'type': type,
                'func': UTF8ToString(JSModule['_BinaryenRefFuncGetFunc'](expression)),
            };
        case JSModule['RefEqId']:
            return {
                'id': id,
                'type': type,
                'left': JSModule['_BinaryenRefEqGetLeft'](expression),
                'right': JSModule['_BinaryenRefEqGetRight'](expression)
            };
        case JSModule['TryId']:
            return {
                'id': id,
                'type': type,
                'name': UTF8ToString(JSModule['_BinaryenTryGetName'](expression)),
                'body': JSModule['_BinaryenTryGetBody'](expression),
                'catchTags': getAllNested(expression, JSModule['_BinaryenTryGetNumCatchTags'], JSModule['_BinaryenTryGetCatchTagAt']),
                'catchBodies': getAllNested(expression, JSModule['_BinaryenTryGetNumCatchBodies'], JSModule['_BinaryenTryGetCatchBodyAt']),
                'hasCatchAll': JSModule['_BinaryenTryHasCatchAll'](expression),
                'delegateTarget': UTF8ToString(JSModule['_BinaryenTryGetDelegateTarget'](expression)),
                'isDelegate': JSModule['_BinaryenTryIsDelegate'](expression)
            };
        case JSModule['ThrowId']:
            return {
                'id': id,
                'type': type,
                'tag': UTF8ToString(JSModule['_BinaryenThrowGetTag'](expression)),
                'operands': getAllNested(expression, JSModule['_BinaryenThrowGetNumOperands'], JSModule['_BinaryenThrowGetOperandAt'])
            };
        case JSModule['RethrowId']:
            return {
                'id': id,
                'type': type,
                'target': UTF8ToString(JSModule['_BinaryenRethrowGetTarget'](expression))
            };
        case JSModule['TupleMakeId']:
            return {
                'id': id,
                'type': type,
                'operands': getAllNested(expression, JSModule['_BinaryenTupleMakeGetNumOperands'], JSModule['_BinaryenTupleMakeGetOperandAt'])
            };
        case JSModule['TupleExtractId']:
            return {
                'id': id,
                'type': type,
                'tuple': JSModule['_BinaryenTupleExtractGetTuple'](expression),
                'index': JSModule['_BinaryenTupleExtractGetIndex'](expression)
            };
        case JSModule['RefI31Id']:
            return {
                'id': id,
                'type': type,
                'value': JSModule['_BinaryenRefI31GetValue'](expression)
            };
        case JSModule['I31GetId']:
            return {
                'id': id,
                'type': type,
                'i31': JSModule['_BinaryenI31GetGetI31'](expression),
                'isSigned': Boolean(JSModule['_BinaryenI31GetIsSigned'](expression))
            };
        default:
            throw Error('unexpected id: ' + id);
    }
}
