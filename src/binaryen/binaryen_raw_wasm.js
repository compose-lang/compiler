
var Binaryen = (() => {
  var _scriptDir = import.meta.url;
  
  return (
function(moduleArg = {}) {

// include: shell.js
// The Module object: Our interface to the outside world. We import
// and export values on it. There are various ways Module can be used:
// 1. Not defined. We create it here
// 2. A function parameter, function(Module) { ..generated code.. }
// 3. pre-run appended it, var Module = {}; ..generated code..
// 4. External script tag defines var Module.
// We need to check if Module already exists (e.g. case 3 above).
// Substitution will be replaced with actual code on later stage of the build,
// this way Closure Compiler will not mangle it (e.g. case 4. above).
// Note that if you want to run closure, and also to use Module
// after the generated code, you will need to define   var Module = {};
// before the code. Then that object will be used in the code, and you
// can continue to use Module afterwards as well.
var Module = moduleArg;

// Set up the promise that indicates the Module is initialized
var readyPromiseResolve, readyPromiseReject;
Module['ready'] = new Promise((resolve, reject) => {
  readyPromiseResolve = resolve;
  readyPromiseReject = reject;
});
["_malloc","_free","getExceptionMessage","___get_exception_message","_memory","_BinaryenTypeNone","_BinaryenTypeInt32","_BinaryenTypeInt64","_BinaryenTypeFloat32","_BinaryenTypeFloat64","_BinaryenTypeVec128","_BinaryenTypeFuncref","_BinaryenTypeExternref","_BinaryenTypeAnyref","_BinaryenTypeEqref","_BinaryenTypeI31ref","_BinaryenTypeStructref","_BinaryenTypeArrayref","_BinaryenTypeStringref","_BinaryenTypeStringviewWTF8","_BinaryenTypeStringviewWTF16","_BinaryenTypeStringviewIter","_BinaryenTypeNullref","_BinaryenTypeNullExternref","_BinaryenTypeNullFuncref","_BinaryenTypeUnreachable","_BinaryenTypeAuto","_BinaryenTypeCreate","_BinaryenTypeArity","_BinaryenTypeExpand","_BinaryenPackedTypeNotPacked","_BinaryenPackedTypeInt8","_BinaryenPackedTypeInt16","_BinaryenHeapTypeExt","_BinaryenHeapTypeFunc","_BinaryenHeapTypeAny","_BinaryenHeapTypeEq","_BinaryenHeapTypeI31","_BinaryenHeapTypeStruct","_BinaryenHeapTypeArray","_BinaryenHeapTypeString","_BinaryenHeapTypeStringviewWTF8","_BinaryenHeapTypeStringviewWTF16","_BinaryenHeapTypeStringviewIter","_BinaryenHeapTypeNone","_BinaryenHeapTypeNoext","_BinaryenHeapTypeNofunc","_BinaryenHeapTypeIsBasic","_BinaryenHeapTypeIsSignature","_BinaryenHeapTypeIsStruct","_BinaryenHeapTypeIsArray","_BinaryenHeapTypeIsBottom","_BinaryenHeapTypeGetBottom","_BinaryenHeapTypeIsSubType","_BinaryenStructTypeGetNumFields","_BinaryenStructTypeGetFieldType","_BinaryenStructTypeGetFieldPackedType","_BinaryenStructTypeIsFieldMutable","_BinaryenArrayTypeGetElementType","_BinaryenArrayTypeGetElementPackedType","_BinaryenArrayTypeIsElementMutable","_BinaryenSignatureTypeGetParams","_BinaryenSignatureTypeGetResults","_BinaryenTypeGetHeapType","_BinaryenTypeIsNullable","_BinaryenTypeFromHeapType","_BinaryenInvalidId","_BinaryenNopId","_BinaryenBlockId","_BinaryenIfId","_BinaryenLoopId","_BinaryenBreakId","_BinaryenSwitchId","_BinaryenCallId","_BinaryenCallIndirectId","_BinaryenLocalGetId","_BinaryenLocalSetId","_BinaryenGlobalGetId","_BinaryenGlobalSetId","_BinaryenLoadId","_BinaryenStoreId","_BinaryenAtomicRMWId","_BinaryenAtomicCmpxchgId","_BinaryenAtomicWaitId","_BinaryenAtomicNotifyId","_BinaryenAtomicFenceId","_BinaryenSIMDExtractId","_BinaryenSIMDReplaceId","_BinaryenSIMDShuffleId","_BinaryenSIMDTernaryId","_BinaryenSIMDShiftId","_BinaryenSIMDLoadId","_BinaryenSIMDLoadStoreLaneId","_BinaryenMemoryInitId","_BinaryenDataDropId","_BinaryenMemoryCopyId","_BinaryenMemoryFillId","_BinaryenConstId","_BinaryenUnaryId","_BinaryenBinaryId","_BinaryenSelectId","_BinaryenDropId","_BinaryenReturnId","_BinaryenMemorySizeId","_BinaryenMemoryGrowId","_BinaryenUnreachableId","_BinaryenPopId","_BinaryenRefNullId","_BinaryenRefIsNullId","_BinaryenRefFuncId","_BinaryenRefEqId","_BinaryenTableGetId","_BinaryenTableSetId","_BinaryenTableSizeId","_BinaryenTableGrowId","_BinaryenTableFillId","_BinaryenTableCopyId","_BinaryenTryId","_BinaryenTryTableId","_BinaryenThrowId","_BinaryenRethrowId","_BinaryenThrowRefId","_BinaryenTupleMakeId","_BinaryenTupleExtractId","_BinaryenRefI31Id","_BinaryenI31GetId","_BinaryenCallRefId","_BinaryenRefTestId","_BinaryenRefCastId","_BinaryenBrOnId","_BinaryenStructNewId","_BinaryenStructGetId","_BinaryenStructSetId","_BinaryenArrayNewId","_BinaryenArrayNewDataId","_BinaryenArrayNewElemId","_BinaryenArrayNewFixedId","_BinaryenArrayGetId","_BinaryenArraySetId","_BinaryenArrayLenId","_BinaryenArrayCopyId","_BinaryenArrayFillId","_BinaryenArrayInitDataId","_BinaryenArrayInitElemId","_BinaryenRefAsId","_BinaryenStringNewId","_BinaryenStringConstId","_BinaryenStringMeasureId","_BinaryenStringEncodeId","_BinaryenStringConcatId","_BinaryenStringEqId","_BinaryenStringAsId","_BinaryenStringWTF8AdvanceId","_BinaryenStringWTF16GetId","_BinaryenStringIterNextId","_BinaryenStringIterMoveId","_BinaryenStringSliceWTFId","_BinaryenStringSliceIterId","_BinaryenResumeId","_BinaryenExternalFunction","_BinaryenExternalTable","_BinaryenExternalMemory","_BinaryenExternalGlobal","_BinaryenExternalTag","_BinaryenFeatureMVP","_BinaryenFeatureAtomics","_BinaryenFeatureBulkMemory","_BinaryenFeatureMutableGlobals","_BinaryenFeatureNontrappingFPToInt","_BinaryenFeatureSignExt","_BinaryenFeatureSIMD128","_BinaryenFeatureExceptionHandling","_BinaryenFeatureTailCall","_BinaryenFeatureReferenceTypes","_BinaryenFeatureMultivalue","_BinaryenFeatureGC","_BinaryenFeatureMemory64","_BinaryenFeatureRelaxedSIMD","_BinaryenFeatureExtendedConst","_BinaryenFeatureStrings","_BinaryenFeatureMultiMemory","_BinaryenFeatureAll","_BinaryenModuleCreate","_BinaryenModuleDispose","_BinaryenLiteralInt32","_BinaryenLiteralInt64","_BinaryenLiteralFloat32","_BinaryenLiteralFloat64","_BinaryenLiteralVec128","_BinaryenLiteralFloat32Bits","_BinaryenLiteralFloat64Bits","_BinaryenClzInt32","_BinaryenCtzInt32","_BinaryenPopcntInt32","_BinaryenNegFloat32","_BinaryenAbsFloat32","_BinaryenCeilFloat32","_BinaryenFloorFloat32","_BinaryenTruncFloat32","_BinaryenNearestFloat32","_BinaryenSqrtFloat32","_BinaryenEqZInt32","_BinaryenClzInt64","_BinaryenCtzInt64","_BinaryenPopcntInt64","_BinaryenNegFloat64","_BinaryenAbsFloat64","_BinaryenCeilFloat64","_BinaryenFloorFloat64","_BinaryenTruncFloat64","_BinaryenNearestFloat64","_BinaryenSqrtFloat64","_BinaryenEqZInt64","_BinaryenExtendSInt32","_BinaryenExtendUInt32","_BinaryenWrapInt64","_BinaryenTruncSFloat32ToInt32","_BinaryenTruncSFloat32ToInt64","_BinaryenTruncUFloat32ToInt32","_BinaryenTruncUFloat32ToInt64","_BinaryenTruncSFloat64ToInt32","_BinaryenTruncSFloat64ToInt64","_BinaryenTruncUFloat64ToInt32","_BinaryenTruncUFloat64ToInt64","_BinaryenReinterpretFloat32","_BinaryenReinterpretFloat64","_BinaryenExtendS8Int32","_BinaryenExtendS16Int32","_BinaryenExtendS8Int64","_BinaryenExtendS16Int64","_BinaryenExtendS32Int64","_BinaryenConvertSInt32ToFloat32","_BinaryenConvertSInt32ToFloat64","_BinaryenConvertUInt32ToFloat32","_BinaryenConvertUInt32ToFloat64","_BinaryenConvertSInt64ToFloat32","_BinaryenConvertSInt64ToFloat64","_BinaryenConvertUInt64ToFloat32","_BinaryenConvertUInt64ToFloat64","_BinaryenPromoteFloat32","_BinaryenDemoteFloat64","_BinaryenReinterpretInt32","_BinaryenReinterpretInt64","_BinaryenAddInt32","_BinaryenSubInt32","_BinaryenMulInt32","_BinaryenDivSInt32","_BinaryenDivUInt32","_BinaryenRemSInt32","_BinaryenRemUInt32","_BinaryenAndInt32","_BinaryenOrInt32","_BinaryenXorInt32","_BinaryenShlInt32","_BinaryenShrUInt32","_BinaryenShrSInt32","_BinaryenRotLInt32","_BinaryenRotRInt32","_BinaryenEqInt32","_BinaryenNeInt32","_BinaryenLtSInt32","_BinaryenLtUInt32","_BinaryenLeSInt32","_BinaryenLeUInt32","_BinaryenGtSInt32","_BinaryenGtUInt32","_BinaryenGeSInt32","_BinaryenGeUInt32","_BinaryenAddInt64","_BinaryenSubInt64","_BinaryenMulInt64","_BinaryenDivSInt64","_BinaryenDivUInt64","_BinaryenRemSInt64","_BinaryenRemUInt64","_BinaryenAndInt64","_BinaryenOrInt64","_BinaryenXorInt64","_BinaryenShlInt64","_BinaryenShrUInt64","_BinaryenShrSInt64","_BinaryenRotLInt64","_BinaryenRotRInt64","_BinaryenEqInt64","_BinaryenNeInt64","_BinaryenLtSInt64","_BinaryenLtUInt64","_BinaryenLeSInt64","_BinaryenLeUInt64","_BinaryenGtSInt64","_BinaryenGtUInt64","_BinaryenGeSInt64","_BinaryenGeUInt64","_BinaryenAddFloat32","_BinaryenSubFloat32","_BinaryenMulFloat32","_BinaryenDivFloat32","_BinaryenCopySignFloat32","_BinaryenMinFloat32","_BinaryenMaxFloat32","_BinaryenEqFloat32","_BinaryenNeFloat32","_BinaryenLtFloat32","_BinaryenLeFloat32","_BinaryenGtFloat32","_BinaryenGeFloat32","_BinaryenAddFloat64","_BinaryenSubFloat64","_BinaryenMulFloat64","_BinaryenDivFloat64","_BinaryenCopySignFloat64","_BinaryenMinFloat64","_BinaryenMaxFloat64","_BinaryenEqFloat64","_BinaryenNeFloat64","_BinaryenLtFloat64","_BinaryenLeFloat64","_BinaryenGtFloat64","_BinaryenGeFloat64","_BinaryenAtomicRMWAdd","_BinaryenAtomicRMWSub","_BinaryenAtomicRMWAnd","_BinaryenAtomicRMWOr","_BinaryenAtomicRMWXor","_BinaryenAtomicRMWXchg","_BinaryenTruncSatSFloat32ToInt32","_BinaryenTruncSatSFloat32ToInt64","_BinaryenTruncSatUFloat32ToInt32","_BinaryenTruncSatUFloat32ToInt64","_BinaryenTruncSatSFloat64ToInt32","_BinaryenTruncSatSFloat64ToInt64","_BinaryenTruncSatUFloat64ToInt32","_BinaryenTruncSatUFloat64ToInt64","_BinaryenSplatVecI8x16","_BinaryenExtractLaneSVecI8x16","_BinaryenExtractLaneUVecI8x16","_BinaryenReplaceLaneVecI8x16","_BinaryenSplatVecI16x8","_BinaryenExtractLaneSVecI16x8","_BinaryenExtractLaneUVecI16x8","_BinaryenReplaceLaneVecI16x8","_BinaryenSplatVecI32x4","_BinaryenExtractLaneVecI32x4","_BinaryenReplaceLaneVecI32x4","_BinaryenSplatVecI64x2","_BinaryenExtractLaneVecI64x2","_BinaryenReplaceLaneVecI64x2","_BinaryenSplatVecF32x4","_BinaryenExtractLaneVecF32x4","_BinaryenReplaceLaneVecF32x4","_BinaryenSplatVecF64x2","_BinaryenExtractLaneVecF64x2","_BinaryenReplaceLaneVecF64x2","_BinaryenEqVecI8x16","_BinaryenNeVecI8x16","_BinaryenLtSVecI8x16","_BinaryenLtUVecI8x16","_BinaryenGtSVecI8x16","_BinaryenGtUVecI8x16","_BinaryenLeSVecI8x16","_BinaryenLeUVecI8x16","_BinaryenGeSVecI8x16","_BinaryenGeUVecI8x16","_BinaryenEqVecI16x8","_BinaryenNeVecI16x8","_BinaryenLtSVecI16x8","_BinaryenLtUVecI16x8","_BinaryenGtSVecI16x8","_BinaryenGtUVecI16x8","_BinaryenLeSVecI16x8","_BinaryenLeUVecI16x8","_BinaryenGeSVecI16x8","_BinaryenGeUVecI16x8","_BinaryenEqVecI32x4","_BinaryenNeVecI32x4","_BinaryenLtSVecI32x4","_BinaryenLtUVecI32x4","_BinaryenGtSVecI32x4","_BinaryenGtUVecI32x4","_BinaryenLeSVecI32x4","_BinaryenLeUVecI32x4","_BinaryenGeSVecI32x4","_BinaryenGeUVecI32x4","_BinaryenEqVecI64x2","_BinaryenNeVecI64x2","_BinaryenLtSVecI64x2","_BinaryenGtSVecI64x2","_BinaryenLeSVecI64x2","_BinaryenGeSVecI64x2","_BinaryenEqVecF32x4","_BinaryenNeVecF32x4","_BinaryenLtVecF32x4","_BinaryenGtVecF32x4","_BinaryenLeVecF32x4","_BinaryenGeVecF32x4","_BinaryenEqVecF64x2","_BinaryenNeVecF64x2","_BinaryenLtVecF64x2","_BinaryenGtVecF64x2","_BinaryenLeVecF64x2","_BinaryenGeVecF64x2","_BinaryenNotVec128","_BinaryenAndVec128","_BinaryenOrVec128","_BinaryenXorVec128","_BinaryenAndNotVec128","_BinaryenBitselectVec128","_BinaryenRelaxedFmaVecF32x4","_BinaryenRelaxedFmsVecF32x4","_BinaryenRelaxedFmaVecF64x2","_BinaryenRelaxedFmsVecF64x2","_BinaryenLaneselectI8x16","_BinaryenLaneselectI16x8","_BinaryenLaneselectI32x4","_BinaryenLaneselectI64x2","_BinaryenDotI8x16I7x16AddSToVecI32x4","_BinaryenAnyTrueVec128","_BinaryenAbsVecI8x16","_BinaryenNegVecI8x16","_BinaryenAllTrueVecI8x16","_BinaryenBitmaskVecI8x16","_BinaryenPopcntVecI8x16","_BinaryenShlVecI8x16","_BinaryenShrSVecI8x16","_BinaryenShrUVecI8x16","_BinaryenAddVecI8x16","_BinaryenAddSatSVecI8x16","_BinaryenAddSatUVecI8x16","_BinaryenSubVecI8x16","_BinaryenSubSatSVecI8x16","_BinaryenSubSatUVecI8x16","_BinaryenMinSVecI8x16","_BinaryenMinUVecI8x16","_BinaryenMaxSVecI8x16","_BinaryenMaxUVecI8x16","_BinaryenAvgrUVecI8x16","_BinaryenAbsVecI16x8","_BinaryenNegVecI16x8","_BinaryenAllTrueVecI16x8","_BinaryenBitmaskVecI16x8","_BinaryenShlVecI16x8","_BinaryenShrSVecI16x8","_BinaryenShrUVecI16x8","_BinaryenAddVecI16x8","_BinaryenAddSatSVecI16x8","_BinaryenAddSatUVecI16x8","_BinaryenSubVecI16x8","_BinaryenSubSatSVecI16x8","_BinaryenSubSatUVecI16x8","_BinaryenMulVecI16x8","_BinaryenMinSVecI16x8","_BinaryenMinUVecI16x8","_BinaryenMaxSVecI16x8","_BinaryenMaxUVecI16x8","_BinaryenAvgrUVecI16x8","_BinaryenQ15MulrSatSVecI16x8","_BinaryenExtMulLowSVecI16x8","_BinaryenExtMulHighSVecI16x8","_BinaryenExtMulLowUVecI16x8","_BinaryenExtMulHighUVecI16x8","_BinaryenAbsVecI32x4","_BinaryenNegVecI32x4","_BinaryenAllTrueVecI32x4","_BinaryenBitmaskVecI32x4","_BinaryenShlVecI32x4","_BinaryenShrSVecI32x4","_BinaryenShrUVecI32x4","_BinaryenAddVecI32x4","_BinaryenSubVecI32x4","_BinaryenMulVecI32x4","_BinaryenMinSVecI32x4","_BinaryenMinUVecI32x4","_BinaryenMaxSVecI32x4","_BinaryenMaxUVecI32x4","_BinaryenDotSVecI16x8ToVecI32x4","_BinaryenExtMulLowSVecI32x4","_BinaryenExtMulHighSVecI32x4","_BinaryenExtMulLowUVecI32x4","_BinaryenExtMulHighUVecI32x4","_BinaryenAbsVecI64x2","_BinaryenNegVecI64x2","_BinaryenAllTrueVecI64x2","_BinaryenBitmaskVecI64x2","_BinaryenShlVecI64x2","_BinaryenShrSVecI64x2","_BinaryenShrUVecI64x2","_BinaryenAddVecI64x2","_BinaryenSubVecI64x2","_BinaryenMulVecI64x2","_BinaryenExtMulLowSVecI64x2","_BinaryenExtMulHighSVecI64x2","_BinaryenExtMulLowUVecI64x2","_BinaryenExtMulHighUVecI64x2","_BinaryenAbsVecF32x4","_BinaryenNegVecF32x4","_BinaryenSqrtVecF32x4","_BinaryenAddVecF32x4","_BinaryenSubVecF32x4","_BinaryenMulVecF32x4","_BinaryenDivVecF32x4","_BinaryenMinVecF32x4","_BinaryenMaxVecF32x4","_BinaryenPMinVecF32x4","_BinaryenCeilVecF32x4","_BinaryenFloorVecF32x4","_BinaryenTruncVecF32x4","_BinaryenNearestVecF32x4","_BinaryenPMaxVecF32x4","_BinaryenAbsVecF64x2","_BinaryenNegVecF64x2","_BinaryenSqrtVecF64x2","_BinaryenAddVecF64x2","_BinaryenSubVecF64x2","_BinaryenMulVecF64x2","_BinaryenDivVecF64x2","_BinaryenMinVecF64x2","_BinaryenMaxVecF64x2","_BinaryenPMinVecF64x2","_BinaryenPMaxVecF64x2","_BinaryenCeilVecF64x2","_BinaryenFloorVecF64x2","_BinaryenTruncVecF64x2","_BinaryenNearestVecF64x2","_BinaryenExtAddPairwiseSVecI8x16ToI16x8","_BinaryenExtAddPairwiseUVecI8x16ToI16x8","_BinaryenExtAddPairwiseSVecI16x8ToI32x4","_BinaryenExtAddPairwiseUVecI16x8ToI32x4","_BinaryenTruncSatSVecF32x4ToVecI32x4","_BinaryenTruncSatUVecF32x4ToVecI32x4","_BinaryenConvertSVecI32x4ToVecF32x4","_BinaryenConvertUVecI32x4ToVecF32x4","_BinaryenLoad8SplatVec128","_BinaryenLoad16SplatVec128","_BinaryenLoad32SplatVec128","_BinaryenLoad64SplatVec128","_BinaryenLoad8x8SVec128","_BinaryenLoad8x8UVec128","_BinaryenLoad16x4SVec128","_BinaryenLoad16x4UVec128","_BinaryenLoad32x2SVec128","_BinaryenLoad32x2UVec128","_BinaryenLoad32ZeroVec128","_BinaryenLoad64ZeroVec128","_BinaryenLoad8LaneVec128","_BinaryenLoad16LaneVec128","_BinaryenLoad32LaneVec128","_BinaryenLoad64LaneVec128","_BinaryenStore8LaneVec128","_BinaryenStore16LaneVec128","_BinaryenStore32LaneVec128","_BinaryenStore64LaneVec128","_BinaryenNarrowSVecI16x8ToVecI8x16","_BinaryenNarrowUVecI16x8ToVecI8x16","_BinaryenNarrowSVecI32x4ToVecI16x8","_BinaryenNarrowUVecI32x4ToVecI16x8","_BinaryenExtendLowSVecI8x16ToVecI16x8","_BinaryenExtendHighSVecI8x16ToVecI16x8","_BinaryenExtendLowUVecI8x16ToVecI16x8","_BinaryenExtendHighUVecI8x16ToVecI16x8","_BinaryenExtendLowSVecI16x8ToVecI32x4","_BinaryenExtendHighSVecI16x8ToVecI32x4","_BinaryenExtendLowUVecI16x8ToVecI32x4","_BinaryenExtendHighUVecI16x8ToVecI32x4","_BinaryenExtendLowSVecI32x4ToVecI64x2","_BinaryenExtendHighSVecI32x4ToVecI64x2","_BinaryenExtendLowUVecI32x4ToVecI64x2","_BinaryenExtendHighUVecI32x4ToVecI64x2","_BinaryenConvertLowSVecI32x4ToVecF64x2","_BinaryenConvertLowUVecI32x4ToVecF64x2","_BinaryenTruncSatZeroSVecF64x2ToVecI32x4","_BinaryenTruncSatZeroUVecF64x2ToVecI32x4","_BinaryenDemoteZeroVecF64x2ToVecF32x4","_BinaryenPromoteLowVecF32x4ToVecF64x2","_BinaryenRelaxedTruncSVecF32x4ToVecI32x4","_BinaryenRelaxedTruncUVecF32x4ToVecI32x4","_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4","_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4","_BinaryenSwizzleVecI8x16","_BinaryenRelaxedSwizzleVecI8x16","_BinaryenRelaxedMinVecF32x4","_BinaryenRelaxedMaxVecF32x4","_BinaryenRelaxedMinVecF64x2","_BinaryenRelaxedMaxVecF64x2","_BinaryenRelaxedQ15MulrSVecI16x8","_BinaryenDotI8x16I7x16SToVecI16x8","_BinaryenRefAsNonNull","_BinaryenRefAsExternInternalize","_BinaryenRefAsExternExternalize","_BinaryenBrOnNull","_BinaryenBrOnNonNull","_BinaryenBrOnCast","_BinaryenBrOnCastFail","_BinaryenStringNewUTF8","_BinaryenStringNewWTF8","_BinaryenStringNewLossyUTF8","_BinaryenStringNewWTF16","_BinaryenStringNewUTF8Array","_BinaryenStringNewWTF8Array","_BinaryenStringNewLossyUTF8Array","_BinaryenStringNewWTF16Array","_BinaryenStringNewFromCodePoint","_BinaryenStringMeasureUTF8","_BinaryenStringMeasureWTF8","_BinaryenStringMeasureWTF16","_BinaryenStringMeasureIsUSV","_BinaryenStringMeasureWTF16View","_BinaryenStringEncodeUTF8","_BinaryenStringEncodeLossyUTF8","_BinaryenStringEncodeWTF8","_BinaryenStringEncodeWTF16","_BinaryenStringEncodeUTF8Array","_BinaryenStringEncodeLossyUTF8Array","_BinaryenStringEncodeWTF8Array","_BinaryenStringEncodeWTF16Array","_BinaryenStringAsWTF8","_BinaryenStringAsWTF16","_BinaryenStringAsIter","_BinaryenStringIterMoveAdvance","_BinaryenStringIterMoveRewind","_BinaryenStringSliceWTF8","_BinaryenStringSliceWTF16","_BinaryenStringEqEqual","_BinaryenStringEqCompare","_BinaryenBlock","_BinaryenIf","_BinaryenLoop","_BinaryenBreak","_BinaryenSwitch","_BinaryenCall","_BinaryenReturnCall","_BinaryenCallIndirect","_BinaryenReturnCallIndirect","_BinaryenLocalGet","_BinaryenLocalSet","_BinaryenLocalTee","_BinaryenGlobalGet","_BinaryenGlobalSet","_BinaryenLoad","_BinaryenStore","_BinaryenConst","_BinaryenUnary","_BinaryenBinary","_BinaryenSelect","_BinaryenDrop","_BinaryenReturn","_BinaryenMemorySize","_BinaryenMemoryGrow","_BinaryenNop","_BinaryenUnreachable","_BinaryenAtomicLoad","_BinaryenAtomicStore","_BinaryenAtomicRMW","_BinaryenAtomicCmpxchg","_BinaryenAtomicWait","_BinaryenAtomicNotify","_BinaryenAtomicFence","_BinaryenSIMDExtract","_BinaryenSIMDReplace","_BinaryenSIMDShuffle","_BinaryenSIMDTernary","_BinaryenSIMDShift","_BinaryenSIMDLoad","_BinaryenSIMDLoadStoreLane","_BinaryenMemoryInit","_BinaryenDataDrop","_BinaryenMemoryCopy","_BinaryenMemoryFill","_BinaryenTupleMake","_BinaryenTupleExtract","_BinaryenPop","_BinaryenRefNull","_BinaryenRefIsNull","_BinaryenRefAs","_BinaryenRefFunc","_BinaryenRefEq","_BinaryenTableGet","_BinaryenTableSet","_BinaryenTableSize","_BinaryenTableGrow","_BinaryenTry","_BinaryenThrow","_BinaryenRethrow","_BinaryenRefI31","_BinaryenI31Get","_BinaryenCallRef","_BinaryenRefTest","_BinaryenRefCast","_BinaryenBrOn","_BinaryenStructNew","_BinaryenStructGet","_BinaryenStructSet","_BinaryenArrayNew","_BinaryenArrayNewData","_BinaryenArrayNewFixed","_BinaryenArrayGet","_BinaryenArraySet","_BinaryenArrayLen","_BinaryenArrayCopy","_BinaryenStringNew","_BinaryenStringConst","_BinaryenStringMeasure","_BinaryenStringEncode","_BinaryenStringConcat","_BinaryenStringEq","_BinaryenStringAs","_BinaryenStringWTF8Advance","_BinaryenStringWTF16Get","_BinaryenStringIterNext","_BinaryenStringIterMove","_BinaryenStringSliceWTF","_BinaryenStringSliceIter","_BinaryenExpressionGetId","_BinaryenExpressionGetType","_BinaryenExpressionSetType","_BinaryenExpressionPrint","_BinaryenExpressionFinalize","_BinaryenExpressionCopy","_BinaryenBlockGetName","_BinaryenBlockSetName","_BinaryenBlockGetNumChildren","_BinaryenBlockGetChildAt","_BinaryenBlockSetChildAt","_BinaryenBlockAppendChild","_BinaryenBlockInsertChildAt","_BinaryenBlockRemoveChildAt","_BinaryenIfGetCondition","_BinaryenIfSetCondition","_BinaryenIfGetIfTrue","_BinaryenIfSetIfTrue","_BinaryenIfGetIfFalse","_BinaryenIfSetIfFalse","_BinaryenLoopGetName","_BinaryenLoopSetName","_BinaryenLoopGetBody","_BinaryenLoopSetBody","_BinaryenBreakGetName","_BinaryenBreakSetName","_BinaryenBreakGetCondition","_BinaryenBreakSetCondition","_BinaryenBreakGetValue","_BinaryenBreakSetValue","_BinaryenSwitchGetNumNames","_BinaryenSwitchGetNameAt","_BinaryenSwitchSetNameAt","_BinaryenSwitchAppendName","_BinaryenSwitchInsertNameAt","_BinaryenSwitchRemoveNameAt","_BinaryenSwitchGetDefaultName","_BinaryenSwitchSetDefaultName","_BinaryenSwitchGetCondition","_BinaryenSwitchSetCondition","_BinaryenSwitchGetValue","_BinaryenSwitchSetValue","_BinaryenCallGetTarget","_BinaryenCallSetTarget","_BinaryenCallGetNumOperands","_BinaryenCallGetOperandAt","_BinaryenCallSetOperandAt","_BinaryenCallAppendOperand","_BinaryenCallInsertOperandAt","_BinaryenCallRemoveOperandAt","_BinaryenCallIsReturn","_BinaryenCallSetReturn","_BinaryenCallIndirectGetTarget","_BinaryenCallIndirectSetTarget","_BinaryenCallIndirectGetTable","_BinaryenCallIndirectSetTable","_BinaryenCallIndirectGetNumOperands","_BinaryenCallIndirectGetOperandAt","_BinaryenCallIndirectSetOperandAt","_BinaryenCallIndirectAppendOperand","_BinaryenCallIndirectInsertOperandAt","_BinaryenCallIndirectRemoveOperandAt","_BinaryenCallIndirectIsReturn","_BinaryenCallIndirectSetReturn","_BinaryenCallIndirectGetParams","_BinaryenCallIndirectSetParams","_BinaryenCallIndirectGetResults","_BinaryenCallIndirectSetResults","_BinaryenLocalGetGetIndex","_BinaryenLocalGetSetIndex","_BinaryenLocalSetIsTee","_BinaryenLocalSetGetIndex","_BinaryenLocalSetSetIndex","_BinaryenLocalSetGetValue","_BinaryenLocalSetSetValue","_BinaryenGlobalGetGetName","_BinaryenGlobalGetSetName","_BinaryenGlobalSetGetName","_BinaryenGlobalSetSetName","_BinaryenGlobalSetGetValue","_BinaryenGlobalSetSetValue","_BinaryenTableGetGetTable","_BinaryenTableGetSetTable","_BinaryenTableGetGetIndex","_BinaryenTableGetSetIndex","_BinaryenTableSetGetTable","_BinaryenTableSetSetTable","_BinaryenTableSetGetIndex","_BinaryenTableSetSetIndex","_BinaryenTableSetGetValue","_BinaryenTableSetSetValue","_BinaryenTableSizeGetTable","_BinaryenTableSizeSetTable","_BinaryenTableGrowGetTable","_BinaryenTableGrowSetTable","_BinaryenTableGrowGetValue","_BinaryenTableGrowSetValue","_BinaryenTableGrowGetDelta","_BinaryenTableGrowSetDelta","_BinaryenMemoryGrowGetDelta","_BinaryenMemoryGrowSetDelta","_BinaryenLoadIsAtomic","_BinaryenLoadSetAtomic","_BinaryenLoadIsSigned","_BinaryenLoadSetSigned","_BinaryenLoadGetBytes","_BinaryenLoadSetBytes","_BinaryenLoadGetOffset","_BinaryenLoadSetOffset","_BinaryenLoadGetAlign","_BinaryenLoadSetAlign","_BinaryenLoadGetPtr","_BinaryenLoadSetPtr","_BinaryenStoreIsAtomic","_BinaryenStoreSetAtomic","_BinaryenStoreGetBytes","_BinaryenStoreSetBytes","_BinaryenStoreGetOffset","_BinaryenStoreSetOffset","_BinaryenStoreGetAlign","_BinaryenStoreSetAlign","_BinaryenStoreGetPtr","_BinaryenStoreSetPtr","_BinaryenStoreGetValue","_BinaryenStoreSetValue","_BinaryenStoreGetValueType","_BinaryenStoreSetValueType","_BinaryenConstGetValueI32","_BinaryenConstSetValueI32","_BinaryenConstGetValueI64","_BinaryenConstSetValueI64","_BinaryenConstGetValueI64Low","_BinaryenConstSetValueI64Low","_BinaryenConstGetValueI64High","_BinaryenConstSetValueI64High","_BinaryenConstGetValueF32","_BinaryenConstSetValueF32","_BinaryenConstGetValueF64","_BinaryenConstSetValueF64","_BinaryenConstGetValueV128","_BinaryenConstSetValueV128","_BinaryenUnaryGetOp","_BinaryenUnarySetOp","_BinaryenUnaryGetValue","_BinaryenUnarySetValue","_BinaryenBinaryGetOp","_BinaryenBinarySetOp","_BinaryenBinaryGetLeft","_BinaryenBinarySetLeft","_BinaryenBinaryGetRight","_BinaryenBinarySetRight","_BinaryenSelectGetIfTrue","_BinaryenSelectSetIfTrue","_BinaryenSelectGetIfFalse","_BinaryenSelectSetIfFalse","_BinaryenSelectGetCondition","_BinaryenSelectSetCondition","_BinaryenDropGetValue","_BinaryenDropSetValue","_BinaryenReturnGetValue","_BinaryenReturnSetValue","_BinaryenAtomicRMWGetOp","_BinaryenAtomicRMWSetOp","_BinaryenAtomicRMWGetBytes","_BinaryenAtomicRMWSetBytes","_BinaryenAtomicRMWGetOffset","_BinaryenAtomicRMWSetOffset","_BinaryenAtomicRMWGetPtr","_BinaryenAtomicRMWSetPtr","_BinaryenAtomicRMWGetValue","_BinaryenAtomicRMWSetValue","_BinaryenAtomicCmpxchgGetBytes","_BinaryenAtomicCmpxchgSetBytes","_BinaryenAtomicCmpxchgGetOffset","_BinaryenAtomicCmpxchgSetOffset","_BinaryenAtomicCmpxchgGetPtr","_BinaryenAtomicCmpxchgSetPtr","_BinaryenAtomicCmpxchgGetExpected","_BinaryenAtomicCmpxchgSetExpected","_BinaryenAtomicCmpxchgGetReplacement","_BinaryenAtomicCmpxchgSetReplacement","_BinaryenAtomicWaitGetPtr","_BinaryenAtomicWaitSetPtr","_BinaryenAtomicWaitGetExpected","_BinaryenAtomicWaitSetExpected","_BinaryenAtomicWaitGetTimeout","_BinaryenAtomicWaitSetTimeout","_BinaryenAtomicWaitGetExpectedType","_BinaryenAtomicWaitSetExpectedType","_BinaryenAtomicNotifyGetPtr","_BinaryenAtomicNotifySetPtr","_BinaryenAtomicNotifyGetNotifyCount","_BinaryenAtomicNotifySetNotifyCount","_BinaryenAtomicFenceGetOrder","_BinaryenAtomicFenceSetOrder","_BinaryenSIMDExtractGetOp","_BinaryenSIMDExtractSetOp","_BinaryenSIMDExtractGetVec","_BinaryenSIMDExtractSetVec","_BinaryenSIMDExtractGetIndex","_BinaryenSIMDExtractSetIndex","_BinaryenSIMDReplaceGetOp","_BinaryenSIMDReplaceSetOp","_BinaryenSIMDReplaceGetVec","_BinaryenSIMDReplaceSetVec","_BinaryenSIMDReplaceGetIndex","_BinaryenSIMDReplaceSetIndex","_BinaryenSIMDReplaceGetValue","_BinaryenSIMDReplaceSetValue","_BinaryenSIMDShuffleGetLeft","_BinaryenSIMDShuffleSetLeft","_BinaryenSIMDShuffleGetRight","_BinaryenSIMDShuffleSetRight","_BinaryenSIMDShuffleGetMask","_BinaryenSIMDShuffleSetMask","_BinaryenSIMDTernaryGetOp","_BinaryenSIMDTernarySetOp","_BinaryenSIMDTernaryGetA","_BinaryenSIMDTernarySetA","_BinaryenSIMDTernaryGetB","_BinaryenSIMDTernarySetB","_BinaryenSIMDTernaryGetC","_BinaryenSIMDTernarySetC","_BinaryenSIMDShiftGetOp","_BinaryenSIMDShiftSetOp","_BinaryenSIMDShiftGetVec","_BinaryenSIMDShiftSetVec","_BinaryenSIMDShiftGetShift","_BinaryenSIMDShiftSetShift","_BinaryenSIMDLoadGetOp","_BinaryenSIMDLoadSetOp","_BinaryenSIMDLoadGetOffset","_BinaryenSIMDLoadSetOffset","_BinaryenSIMDLoadGetAlign","_BinaryenSIMDLoadSetAlign","_BinaryenSIMDLoadGetPtr","_BinaryenSIMDLoadSetPtr","_BinaryenSIMDLoadStoreLaneGetOp","_BinaryenSIMDLoadStoreLaneSetOp","_BinaryenSIMDLoadStoreLaneGetOffset","_BinaryenSIMDLoadStoreLaneSetOffset","_BinaryenSIMDLoadStoreLaneGetAlign","_BinaryenSIMDLoadStoreLaneSetAlign","_BinaryenSIMDLoadStoreLaneGetIndex","_BinaryenSIMDLoadStoreLaneSetIndex","_BinaryenSIMDLoadStoreLaneGetPtr","_BinaryenSIMDLoadStoreLaneSetPtr","_BinaryenSIMDLoadStoreLaneGetVec","_BinaryenSIMDLoadStoreLaneSetVec","_BinaryenSIMDLoadStoreLaneIsStore","_BinaryenMemoryInitGetSegment","_BinaryenMemoryInitSetSegment","_BinaryenMemoryInitGetDest","_BinaryenMemoryInitSetDest","_BinaryenMemoryInitGetOffset","_BinaryenMemoryInitSetOffset","_BinaryenMemoryInitGetSize","_BinaryenMemoryInitSetSize","_BinaryenDataDropGetSegment","_BinaryenDataDropSetSegment","_BinaryenMemoryCopyGetDest","_BinaryenMemoryCopySetDest","_BinaryenMemoryCopyGetSource","_BinaryenMemoryCopySetSource","_BinaryenMemoryCopyGetSize","_BinaryenMemoryCopySetSize","_BinaryenMemoryFillGetDest","_BinaryenMemoryFillSetDest","_BinaryenMemoryFillGetValue","_BinaryenMemoryFillSetValue","_BinaryenMemoryFillGetSize","_BinaryenMemoryFillSetSize","_BinaryenRefIsNullGetValue","_BinaryenRefIsNullSetValue","_BinaryenRefAsGetOp","_BinaryenRefAsSetOp","_BinaryenRefAsGetValue","_BinaryenRefAsSetValue","_BinaryenRefFuncGetFunc","_BinaryenRefFuncSetFunc","_BinaryenRefEqGetLeft","_BinaryenRefEqSetLeft","_BinaryenRefEqGetRight","_BinaryenRefEqSetRight","_BinaryenTryGetName","_BinaryenTrySetName","_BinaryenTryGetBody","_BinaryenTrySetBody","_BinaryenTryGetNumCatchTags","_BinaryenTryGetNumCatchBodies","_BinaryenTryGetCatchTagAt","_BinaryenTrySetCatchTagAt","_BinaryenTryAppendCatchTag","_BinaryenTryInsertCatchTagAt","_BinaryenTryRemoveCatchTagAt","_BinaryenTryGetCatchBodyAt","_BinaryenTrySetCatchBodyAt","_BinaryenTryAppendCatchBody","_BinaryenTryInsertCatchBodyAt","_BinaryenTryRemoveCatchBodyAt","_BinaryenTryHasCatchAll","_BinaryenTryGetDelegateTarget","_BinaryenTrySetDelegateTarget","_BinaryenTryIsDelegate","_BinaryenThrowGetTag","_BinaryenThrowSetTag","_BinaryenThrowGetNumOperands","_BinaryenThrowGetOperandAt","_BinaryenThrowSetOperandAt","_BinaryenThrowAppendOperand","_BinaryenThrowInsertOperandAt","_BinaryenThrowRemoveOperandAt","_BinaryenRethrowGetTarget","_BinaryenRethrowSetTarget","_BinaryenTupleMakeGetNumOperands","_BinaryenTupleMakeGetOperandAt","_BinaryenTupleMakeSetOperandAt","_BinaryenTupleMakeAppendOperand","_BinaryenTupleMakeInsertOperandAt","_BinaryenTupleMakeRemoveOperandAt","_BinaryenTupleExtractGetTuple","_BinaryenTupleExtractSetTuple","_BinaryenTupleExtractGetIndex","_BinaryenTupleExtractSetIndex","_BinaryenRefI31GetValue","_BinaryenRefI31SetValue","_BinaryenI31GetGetI31","_BinaryenI31GetSetI31","_BinaryenI31GetIsSigned","_BinaryenI31GetSetSigned","_BinaryenCallRefGetNumOperands","_BinaryenCallRefGetOperandAt","_BinaryenCallRefSetOperandAt","_BinaryenCallRefAppendOperand","_BinaryenCallRefInsertOperandAt","_BinaryenCallRefRemoveOperandAt","_BinaryenCallRefGetTarget","_BinaryenCallRefSetTarget","_BinaryenCallRefIsReturn","_BinaryenCallRefSetReturn","_BinaryenRefTestGetRef","_BinaryenRefTestSetRef","_BinaryenRefTestGetCastType","_BinaryenRefTestSetCastType","_BinaryenRefCastGetRef","_BinaryenRefCastSetRef","_BinaryenBrOnGetOp","_BinaryenBrOnSetOp","_BinaryenBrOnGetName","_BinaryenBrOnSetName","_BinaryenBrOnGetRef","_BinaryenBrOnSetRef","_BinaryenBrOnGetCastType","_BinaryenBrOnSetCastType","_BinaryenStructNewGetNumOperands","_BinaryenStructNewGetOperandAt","_BinaryenStructNewSetOperandAt","_BinaryenStructNewAppendOperand","_BinaryenStructNewInsertOperandAt","_BinaryenStructNewRemoveOperandAt","_BinaryenStructGetGetIndex","_BinaryenStructGetSetIndex","_BinaryenStructGetGetRef","_BinaryenStructGetSetRef","_BinaryenStructGetIsSigned","_BinaryenStructGetSetSigned","_BinaryenStructSetGetIndex","_BinaryenStructSetSetIndex","_BinaryenStructSetGetRef","_BinaryenStructSetSetRef","_BinaryenStructSetGetValue","_BinaryenStructSetSetValue","_BinaryenArrayNewGetInit","_BinaryenArrayNewSetInit","_BinaryenArrayNewGetSize","_BinaryenArrayNewSetSize","_BinaryenArrayNewFixedGetNumValues","_BinaryenArrayNewFixedGetValueAt","_BinaryenArrayNewFixedSetValueAt","_BinaryenArrayNewFixedAppendValue","_BinaryenArrayNewFixedInsertValueAt","_BinaryenArrayNewFixedRemoveValueAt","_BinaryenArrayGetGetRef","_BinaryenArrayGetSetRef","_BinaryenArrayGetGetIndex","_BinaryenArrayGetSetIndex","_BinaryenArrayGetIsSigned","_BinaryenArrayGetSetSigned","_BinaryenArraySetGetRef","_BinaryenArraySetSetRef","_BinaryenArraySetGetIndex","_BinaryenArraySetSetIndex","_BinaryenArraySetGetValue","_BinaryenArraySetSetValue","_BinaryenArrayLenGetRef","_BinaryenArrayLenSetRef","_BinaryenArrayCopyGetDestRef","_BinaryenArrayCopySetDestRef","_BinaryenArrayCopyGetDestIndex","_BinaryenArrayCopySetDestIndex","_BinaryenArrayCopyGetSrcRef","_BinaryenArrayCopySetSrcRef","_BinaryenArrayCopyGetSrcIndex","_BinaryenArrayCopySetSrcIndex","_BinaryenArrayCopyGetLength","_BinaryenArrayCopySetLength","_BinaryenStringNewGetOp","_BinaryenStringNewSetOp","_BinaryenStringNewGetPtr","_BinaryenStringNewSetPtr","_BinaryenStringNewGetLength","_BinaryenStringNewSetLength","_BinaryenStringNewGetStart","_BinaryenStringNewSetStart","_BinaryenStringNewGetEnd","_BinaryenStringNewSetEnd","_BinaryenStringNewSetTry","_BinaryenStringNewIsTry","_BinaryenStringConstGetString","_BinaryenStringConstSetString","_BinaryenStringMeasureGetOp","_BinaryenStringMeasureSetOp","_BinaryenStringMeasureGetRef","_BinaryenStringMeasureSetRef","_BinaryenStringEncodeGetOp","_BinaryenStringEncodeSetOp","_BinaryenStringEncodeGetRef","_BinaryenStringEncodeSetRef","_BinaryenStringEncodeGetPtr","_BinaryenStringEncodeSetPtr","_BinaryenStringEncodeGetStart","_BinaryenStringEncodeSetStart","_BinaryenStringConcatGetLeft","_BinaryenStringConcatSetLeft","_BinaryenStringConcatGetRight","_BinaryenStringConcatSetRight","_BinaryenStringEqGetOp","_BinaryenStringEqSetOp","_BinaryenStringEqGetLeft","_BinaryenStringEqSetLeft","_BinaryenStringEqGetRight","_BinaryenStringEqSetRight","_BinaryenStringAsGetOp","_BinaryenStringAsSetOp","_BinaryenStringAsGetRef","_BinaryenStringAsSetRef","_BinaryenStringWTF8AdvanceGetRef","_BinaryenStringWTF8AdvanceSetRef","_BinaryenStringWTF8AdvanceGetPos","_BinaryenStringWTF8AdvanceSetPos","_BinaryenStringWTF8AdvanceGetBytes","_BinaryenStringWTF8AdvanceSetBytes","_BinaryenStringWTF16GetGetRef","_BinaryenStringWTF16GetSetRef","_BinaryenStringWTF16GetGetPos","_BinaryenStringWTF16GetSetPos","_BinaryenStringIterNextGetRef","_BinaryenStringIterNextSetRef","_BinaryenStringIterMoveGetOp","_BinaryenStringIterMoveSetOp","_BinaryenStringIterMoveGetRef","_BinaryenStringIterMoveSetRef","_BinaryenStringIterMoveGetNum","_BinaryenStringIterMoveSetNum","_BinaryenStringSliceWTFGetOp","_BinaryenStringSliceWTFSetOp","_BinaryenStringSliceWTFGetRef","_BinaryenStringSliceWTFSetRef","_BinaryenStringSliceWTFGetStart","_BinaryenStringSliceWTFSetStart","_BinaryenStringSliceWTFGetEnd","_BinaryenStringSliceWTFSetEnd","_BinaryenStringSliceIterGetRef","_BinaryenStringSliceIterSetRef","_BinaryenStringSliceIterGetNum","_BinaryenStringSliceIterSetNum","_BinaryenAddFunction","_BinaryenAddFunctionWithHeapType","_BinaryenGetFunction","_BinaryenRemoveFunction","_BinaryenGetNumFunctions","_BinaryenGetFunctionByIndex","_BinaryenAddGlobal","_BinaryenGetGlobal","_BinaryenRemoveGlobal","_BinaryenGetNumGlobals","_BinaryenGetGlobalByIndex","_BinaryenAddTag","_BinaryenGetTag","_BinaryenRemoveTag","_BinaryenAddFunctionImport","_BinaryenAddTableImport","_BinaryenAddMemoryImport","_BinaryenAddGlobalImport","_BinaryenAddTagImport","_BinaryenAddFunctionExport","_BinaryenAddTableExport","_BinaryenAddMemoryExport","_BinaryenAddGlobalExport","_BinaryenAddTagExport","_BinaryenGetExport","_BinaryenRemoveExport","_BinaryenGetNumExports","_BinaryenGetExportByIndex","_BinaryenAddTable","_BinaryenRemoveTable","_BinaryenGetNumTables","_BinaryenGetTable","_BinaryenGetTableByIndex","_BinaryenAddActiveElementSegment","_BinaryenAddPassiveElementSegment","_BinaryenRemoveElementSegment","_BinaryenGetElementSegment","_BinaryenGetElementSegmentByIndex","_BinaryenGetNumElementSegments","_BinaryenElementSegmentGetOffset","_BinaryenElementSegmentGetLength","_BinaryenElementSegmentGetData","_BinaryenSetMemory","_BinaryenGetNumMemorySegments","_BinaryenGetMemorySegmentByteOffset","_BinaryenHasMemory","_BinaryenMemoryGetInitial","_BinaryenMemoryHasMax","_BinaryenMemoryGetMax","_BinaryenMemoryImportGetModule","_BinaryenMemoryImportGetBase","_BinaryenMemoryIsShared","_BinaryenMemoryIs64","_BinaryenGetMemorySegmentByteLength","_BinaryenGetMemorySegmentPassive","_BinaryenCopyMemorySegmentData","_BinaryenSetStart","_BinaryenModuleGetFeatures","_BinaryenModuleSetFeatures","_BinaryenModuleParse","_BinaryenModulePrint","_BinaryenModulePrintStackIR","_BinaryenModulePrintAsmjs","_BinaryenModuleValidate","_BinaryenModuleOptimize","_BinaryenModuleUpdateMaps","_BinaryenGetOptimizeLevel","_BinaryenSetOptimizeLevel","_BinaryenGetShrinkLevel","_BinaryenSetShrinkLevel","_BinaryenGetDebugInfo","_BinaryenSetDebugInfo","_BinaryenGetLowMemoryUnused","_BinaryenSetLowMemoryUnused","_BinaryenGetZeroFilledMemory","_BinaryenSetZeroFilledMemory","_BinaryenGetFastMath","_BinaryenSetFastMath","_BinaryenGetPassArgument","_BinaryenSetPassArgument","_BinaryenClearPassArguments","_BinaryenGetAlwaysInlineMaxSize","_BinaryenSetAlwaysInlineMaxSize","_BinaryenGetFlexibleInlineMaxSize","_BinaryenSetFlexibleInlineMaxSize","_BinaryenGetOneCallerInlineMaxSize","_BinaryenSetOneCallerInlineMaxSize","_BinaryenGetAllowInliningFunctionsWithLoops","_BinaryenSetAllowInliningFunctionsWithLoops","_BinaryenModuleRunPasses","_BinaryenModuleAutoDrop","_BinaryenModuleWrite","_BinaryenModuleWriteText","_BinaryenModuleWriteStackIR","_BinaryenModuleWriteWithSourceMap","_BinaryenModuleAllocateAndWrite","_BinaryenModuleAllocateAndWriteText","_BinaryenModuleAllocateAndWriteStackIR","_BinaryenModuleRead","_BinaryenModuleInterpret","_BinaryenModuleAddDebugInfoFileName","_BinaryenModuleGetDebugInfoFileName","_BinaryenFunctionGetName","_BinaryenFunctionGetParams","_BinaryenFunctionGetResults","_BinaryenFunctionGetNumVars","_BinaryenFunctionGetVar","_BinaryenFunctionAddVar","_BinaryenFunctionGetNumLocals","_BinaryenFunctionHasLocalName","_BinaryenFunctionGetLocalName","_BinaryenFunctionSetLocalName","_BinaryenFunctionGetBody","_BinaryenFunctionSetBody","_BinaryenFunctionOptimize","_BinaryenFunctionRunPasses","_BinaryenFunctionSetDebugLocation","_BinaryenTableGetName","_BinaryenTableSetName","_BinaryenTableGetInitial","_BinaryenTableSetInitial","_BinaryenTableHasMax","_BinaryenTableGetMax","_BinaryenTableSetMax","_BinaryenTableGetType","_BinaryenTableSetType","_BinaryenElementSegmentGetName","_BinaryenElementSegmentSetName","_BinaryenElementSegmentGetTable","_BinaryenElementSegmentSetTable","_BinaryenElementSegmentIsPassive","_BinaryenGlobalGetName","_BinaryenGlobalGetType","_BinaryenGlobalIsMutable","_BinaryenGlobalGetInitExpr","_BinaryenTagGetName","_BinaryenTagGetParams","_BinaryenTagGetResults","_BinaryenFunctionImportGetModule","_BinaryenTableImportGetModule","_BinaryenGlobalImportGetModule","_BinaryenTagImportGetModule","_BinaryenFunctionImportGetBase","_BinaryenTableImportGetBase","_BinaryenGlobalImportGetBase","_BinaryenTagImportGetBase","_BinaryenExportGetKind","_BinaryenExportGetName","_BinaryenExportGetValue","_BinaryenAddCustomSection","_BinaryenSideEffectNone","_BinaryenSideEffectBranches","_BinaryenSideEffectCalls","_BinaryenSideEffectReadsLocal","_BinaryenSideEffectWritesLocal","_BinaryenSideEffectReadsGlobal","_BinaryenSideEffectWritesGlobal","_BinaryenSideEffectReadsMemory","_BinaryenSideEffectWritesMemory","_BinaryenSideEffectReadsTable","_BinaryenSideEffectWritesTable","_BinaryenSideEffectImplicitTrap","_BinaryenSideEffectTrapsNeverHappen","_BinaryenSideEffectIsAtomic","_BinaryenSideEffectThrows","_BinaryenSideEffectDanglingPop","_BinaryenSideEffectAny","_BinaryenExpressionGetSideEffects","_RelooperCreate","_RelooperAddBlock","_RelooperAddBranch","_RelooperAddBlockWithSwitch","_RelooperAddBranchForSwitch","_RelooperRenderAndDispose","_ExpressionRunnerFlagsDefault","_ExpressionRunnerFlagsPreserveSideeffects","_ExpressionRunnerFlagsTraverseCalls","_ExpressionRunnerCreate","_ExpressionRunnerSetLocalValue","_ExpressionRunnerSetGlobalValue","_ExpressionRunnerRunAndDispose","_TypeBuilderErrorReasonSelfSupertype","_TypeBuilderErrorReasonInvalidSupertype","_TypeBuilderErrorReasonForwardSupertypeReference","_TypeBuilderErrorReasonForwardChildReference","_TypeBuilderCreate","_TypeBuilderGrow","_TypeBuilderGetSize","_TypeBuilderSetSignatureType","_TypeBuilderSetStructType","_TypeBuilderSetArrayType","_TypeBuilderGetTempHeapType","_TypeBuilderGetTempTupleType","_TypeBuilderGetTempRefType","_TypeBuilderSetSubType","_TypeBuilderSetOpen","_TypeBuilderCreateRecGroup","_TypeBuilderBuildAndDispose","_BinaryenModuleSetTypeName","_BinaryenModuleSetFieldName","_BinaryenSetColorsEnabled","_BinaryenAreColorsEnabled","_BinaryenSizeofLiteral","_BinaryenSizeofAllocateAndWriteResult","__i32_store8","__i32_store16","__i32_store","__f32_store","__f64_store","__i32_load8_s","__i32_load8_u","__i32_load16_s","__i32_load16_u","__i32_load","__f32_load","__f64_load","___indirect_function_table","_fflush","onRuntimeInitialized"].forEach((prop) => {
  if (!Object.getOwnPropertyDescriptor(Module['ready'], prop)) {
    Object.defineProperty(Module['ready'], prop, {
      get: () => abort('You are getting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
      set: () => abort('You are setting ' + prop + ' on the Promise object, instead of the instance. Use .then() to get called back with the instance, see the MODULARIZE docs in src/settings.js'),
    });
  }
});

// --pre-jses are emitted after the Module integration code, so that they can
// refer to Module (if they choose; they can also define Module)


// Sometimes an existing Module object exists with properties
// meant to overwrite the default module functionality. Here
// we collect those properties and reapply _after_ we configure
// the current environment's defaults to avoid having to be so
// defensive during initialization.
var moduleOverrides = Object.assign({}, Module);

var arguments_ = [];
var thisProgram = './this.program';
var quit_ = (status, toThrow) => {
  throw toThrow;
};

// Determine the runtime environment we are in. You can customize this by
// setting the ENVIRONMENT setting at compile time (see settings.js).

// Attempt to auto-detect the environment
var ENVIRONMENT_IS_WEB = typeof window == 'object';
var ENVIRONMENT_IS_WORKER = typeof importScripts == 'function';
// N.b. Electron.js environment is simultaneously a NODE-environment, but
// also a web environment.
var ENVIRONMENT_IS_NODE = typeof process == 'object' && typeof process.versions == 'object' && typeof process.versions.node == 'string';
var ENVIRONMENT_IS_SHELL = !ENVIRONMENT_IS_WEB && !ENVIRONMENT_IS_NODE && !ENVIRONMENT_IS_WORKER;

if (Module['ENVIRONMENT']) {
  throw new Error('Module.ENVIRONMENT has been deprecated. To force the environment, use the ENVIRONMENT compile-time option (for example, -sENVIRONMENT=web or -sENVIRONMENT=node)');
}

// `/` should be present at the end if `scriptDirectory` is not empty
var scriptDirectory = '';
function locateFile(path) {
  if (Module['locateFile']) {
    return Module['locateFile'](path, scriptDirectory);
  }
  return scriptDirectory + path;
}

// Hooks that are implemented differently in different runtime environments.
var read_,
    readAsync,
    readBinary;

if (ENVIRONMENT_IS_SHELL) {

  if ((typeof process == 'object' && typeof require === 'function') || typeof window == 'object' || typeof importScripts == 'function') throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  if (typeof read != 'undefined') {
    read_ = read;
  }

  readBinary = (f) => {
    if (typeof readbuffer == 'function') {
      return new Uint8Array(readbuffer(f));
    }
    let data = read(f, 'binary');
    assert(typeof data == 'object');
    return data;
  };

  readAsync = (f, onload, onerror) => {
    setTimeout(() => onload(readBinary(f)));
  };

  if (typeof clearTimeout == 'undefined') {
    globalThis.clearTimeout = (id) => {};
  }

  if (typeof setTimeout == 'undefined') {
    // spidermonkey lacks setTimeout but we use it above in readAsync.
    globalThis.setTimeout = (f) => (typeof f == 'function') ? f() : abort();
  }

  if (typeof scriptArgs != 'undefined') {
    arguments_ = scriptArgs;
  } else if (typeof arguments != 'undefined') {
    arguments_ = arguments;
  }

  if (typeof quit == 'function') {
    quit_ = (status, toThrow) => {
      // Unlike node which has process.exitCode, d8 has no such mechanism. So we
      // have no way to set the exit code and then let the program exit with
      // that code when it naturally stops running (say, when all setTimeouts
      // have completed). For that reason, we must call `quit` - the only way to
      // set the exit code - but quit also halts immediately.  To increase
      // consistency with node (and the web) we schedule the actual quit call
      // using a setTimeout to give the current stack and any exception handlers
      // a chance to run.  This enables features such as addOnPostRun (which
      // expected to be able to run code after main returns).
      setTimeout(() => {
        if (!(toThrow instanceof ExitStatus)) {
          let toLog = toThrow;
          if (toThrow && typeof toThrow == 'object' && toThrow.stack) {
            toLog = [toThrow, toThrow.stack];
          }
          err(`exiting due to exception: ${toLog}`);
        }
        quit(status);
      });
      throw toThrow;
    };
  }

  if (typeof print != 'undefined') {
    // Prefer to use print/printErr where they exist, as they usually work better.
    if (typeof console == 'undefined') console = /** @type{!Console} */({});
    console.log = /** @type{!function(this:Console, ...*): undefined} */ (print);
    console.warn = console.error = /** @type{!function(this:Console, ...*): undefined} */ (typeof printErr != 'undefined' ? printErr : print);
  }

} else

// Note that this includes Node.js workers when relevant (pthreads is enabled).
// Node.js workers are detected as a combination of ENVIRONMENT_IS_WORKER and
// ENVIRONMENT_IS_NODE.
if (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER) {
  if (ENVIRONMENT_IS_WORKER) { // Check worker, not web, since window could be polyfilled
    scriptDirectory = self.location.href;
  } else if (typeof document != 'undefined' && document.currentScript) { // web
    scriptDirectory = document.currentScript.src;
  }
  // When MODULARIZE, this JS may be executed later, after document.currentScript
  // is gone, so we saved it, and we use it here instead of any other info.
  if (_scriptDir) {
    scriptDirectory = _scriptDir;
  }
  // blob urls look like blob:http://site.com/etc/etc and we cannot infer anything from them.
  // otherwise, slice off the final part of the url to find the script directory.
  // if scriptDirectory does not contain a slash, lastIndexOf will return -1,
  // and scriptDirectory will correctly be replaced with an empty string.
  // If scriptDirectory contains a query (starting with ?) or a fragment (starting with #),
  // they are removed because they could contain a slash.
  if (scriptDirectory.indexOf('blob:') !== 0) {
    scriptDirectory = scriptDirectory.substr(0, scriptDirectory.replace(/[?#].*/, "").lastIndexOf('/')+1);
  } else {
    scriptDirectory = '';
  }

  if (!(typeof window == 'object' || typeof importScripts == 'function')) throw new Error('not compiled for this environment (did you build to HTML and try to run it not on the web, or set ENVIRONMENT to something - like node - and run it someplace else - like on the web?)');

  // Differentiate the Web Worker from the Node Worker case, as reading must
  // be done differently.
  {
// include: web_or_worker_shell_read.js
read_ = (url) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.responseText;
  }

  if (ENVIRONMENT_IS_WORKER) {
    readBinary = (url) => {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.responseType = 'arraybuffer';
      xhr.send(null);
      return new Uint8Array(/** @type{!ArrayBuffer} */(xhr.response));
    };
  }

  readAsync = (url, onload, onerror) => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = () => {
      if (xhr.status == 200 || (xhr.status == 0 && xhr.response)) { // file URLs can return 0
        onload(xhr.response);
        return;
      }
      onerror();
    };
    xhr.onerror = onerror;
    xhr.send(null);
  }

// end include: web_or_worker_shell_read.js
  }
} else
{
  throw new Error('environment detection error');
}

var out = Module['print'] || console.log.bind(console);
var err = Module['printErr'] || console.error.bind(console);

// Merge back in the overrides
Object.assign(Module, moduleOverrides);
// Free the object hierarchy contained in the overrides, this lets the GC
// reclaim data used e.g. in memoryInitializerRequest, which is a large typed array.
moduleOverrides = null;
checkIncomingModuleAPI();

// Emit code to handle expected values on the Module object. This applies Module.x
// to the proper local x. This has two benefits: first, we only emit it if it is
// expected to arrive, and second, by using a local everywhere else that can be
// minified.

if (Module['arguments']) arguments_ = Module['arguments'];legacyModuleProp('arguments', 'arguments_');

if (Module['thisProgram']) thisProgram = Module['thisProgram'];legacyModuleProp('thisProgram', 'thisProgram');

if (Module['quit']) quit_ = Module['quit'];legacyModuleProp('quit', 'quit_');

// perform assertions in shell.js after we set up out() and err(), as otherwise if an assertion fails it cannot print the message
// Assertions on removed incoming Module JS APIs.
assert(typeof Module['memoryInitializerPrefixURL'] == 'undefined', 'Module.memoryInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['pthreadMainPrefixURL'] == 'undefined', 'Module.pthreadMainPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['cdInitializerPrefixURL'] == 'undefined', 'Module.cdInitializerPrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['filePackagePrefixURL'] == 'undefined', 'Module.filePackagePrefixURL option was removed, use Module.locateFile instead');
assert(typeof Module['read'] == 'undefined', 'Module.read option was removed (modify read_ in JS)');
assert(typeof Module['readAsync'] == 'undefined', 'Module.readAsync option was removed (modify readAsync in JS)');
assert(typeof Module['readBinary'] == 'undefined', 'Module.readBinary option was removed (modify readBinary in JS)');
assert(typeof Module['setWindowTitle'] == 'undefined', 'Module.setWindowTitle option was removed (modify emscripten_set_window_title in JS)');
assert(typeof Module['TOTAL_MEMORY'] == 'undefined', 'Module.TOTAL_MEMORY has been renamed Module.INITIAL_MEMORY');
legacyModuleProp('asm', 'wasmExports');
legacyModuleProp('read', 'read_');
legacyModuleProp('readAsync', 'readAsync');
legacyModuleProp('readBinary', 'readBinary');
legacyModuleProp('setWindowTitle', 'setWindowTitle');
var IDBFS = 'IDBFS is no longer included by default; build with -lidbfs.js';
var PROXYFS = 'PROXYFS is no longer included by default; build with -lproxyfs.js';
var WORKERFS = 'WORKERFS is no longer included by default; build with -lworkerfs.js';
var FETCHFS = 'FETCHFS is no longer included by default; build with -lfetchfs.js';
var ICASEFS = 'ICASEFS is no longer included by default; build with -licasefs.js';
var JSFILEFS = 'JSFILEFS is no longer included by default; build with -ljsfilefs.js';
var OPFS = 'OPFS is no longer included by default; build with -lopfs.js';

var NODEFS = 'NODEFS is no longer included by default; build with -lnodefs.js';

assert(!ENVIRONMENT_IS_NODE, "node environment detected but not enabled at build time.  Add 'node' to `-sENVIRONMENT` to enable.");

assert(!ENVIRONMENT_IS_SHELL, "shell environment detected but not enabled at build time.  Add 'shell' to `-sENVIRONMENT` to enable.");


// end include: shell.js
// include: preamble.js
// === Preamble library stuff ===

// Documentation for the public APIs defined in this file must be updated in:
//    site/source/docs/api_reference/preamble.js.rst
// A prebuilt local version of the documentation is available at:
//    site/build/text/docs/api_reference/preamble.js.txt
// You can also build docs locally as HTML or other formats in site/
// An online HTML version (which may be of a different version of Emscripten)
//    is up at http://kripken.github.io/emscripten-site/docs/api_reference/preamble.js.html

var wasmBinary; 
if (Module['wasmBinary']) wasmBinary = Module['wasmBinary'];legacyModuleProp('wasmBinary', 'wasmBinary');

if (typeof WebAssembly != 'object') {
  abort('no native wasm support detected');
}

// include: base64Utils.js
// Converts a string of base64 into a byte array (Uint8Array).
function intArrayFromBase64(s) {

  var decoded = atob(s);
  var bytes = new Uint8Array(decoded.length);
  for (var i = 0 ; i < decoded.length ; ++i) {
    bytes[i] = decoded.charCodeAt(i);
  }
  return bytes;
}

// If filename is a base64 data URI, parses and returns data (Buffer on node,
// Uint8Array otherwise). If filename is not a base64 data URI, returns undefined.
function tryParseAsDataURI(filename) {
  if (!isDataURI(filename)) {
    return;
  }

  return intArrayFromBase64(filename.slice(dataURIPrefix.length));
}
// end include: base64Utils.js
// Wasm globals

var wasmMemory;

//========================================
// Runtime essentials
//========================================

// whether we are quitting the application. no code should run after this.
// set in exit() and abort()
var ABORT = false;

// set by exit() and abort().  Passed to 'onExit' handler.
// NOTE: This is also used as the process return code code in shell environments
// but only when noExitRuntime is false.
var EXITSTATUS;

// In STRICT mode, we only define assert() when ASSERTIONS is set.  i.e. we
// don't define it at all in release modes.  This matches the behaviour of
// MINIMAL_RUNTIME.
// TODO(sbc): Make this the default even without STRICT enabled.
/** @type {function(*, string=)} */
function assert(condition, text) {
  if (!condition) {
    abort('Assertion failed' + (text ? ': ' + text : ''));
  }
}

// We used to include malloc/free by default in the past. Show a helpful error in
// builds with assertions.

// Memory management

var HEAP,
/** @type {!Int8Array} */
  HEAP8,
/** @type {!Uint8Array} */
  HEAPU8,
/** @type {!Int16Array} */
  HEAP16,
/** @type {!Uint16Array} */
  HEAPU16,
/** @type {!Int32Array} */
  HEAP32,
/** @type {!Uint32Array} */
  HEAPU32,
/** @type {!Float32Array} */
  HEAPF32,
/** @type {!Float64Array} */
  HEAPF64;

function updateMemoryViews() {
  var b = wasmMemory.buffer;
  Module['HEAP8'] = HEAP8 = new Int8Array(b);
  Module['HEAP16'] = HEAP16 = new Int16Array(b);
  Module['HEAPU8'] = HEAPU8 = new Uint8Array(b);
  Module['HEAPU16'] = HEAPU16 = new Uint16Array(b);
  Module['HEAP32'] = HEAP32 = new Int32Array(b);
  Module['HEAPU32'] = HEAPU32 = new Uint32Array(b);
  Module['HEAPF32'] = HEAPF32 = new Float32Array(b);
  Module['HEAPF64'] = HEAPF64 = new Float64Array(b);
}

assert(!Module['STACK_SIZE'], 'STACK_SIZE can no longer be set at runtime.  Use -sSTACK_SIZE at link time')

assert(typeof Int32Array != 'undefined' && typeof Float64Array !== 'undefined' && Int32Array.prototype.subarray != undefined && Int32Array.prototype.set != undefined,
       'JS engine does not provide full typed array support');

// If memory is defined in wasm, the user can't provide it, or set INITIAL_MEMORY
assert(!Module['wasmMemory'], 'Use of `wasmMemory` detected.  Use -sIMPORTED_MEMORY to define wasmMemory externally');
assert(!Module['INITIAL_MEMORY'], 'Detected runtime INITIAL_MEMORY setting.  Use -sIMPORTED_MEMORY to define wasmMemory dynamically');

// include: runtime_stack_check.js
// Initializes the stack cookie. Called at the startup of main and at the startup of each thread in pthreads mode.
function writeStackCookie() {
  var max = _emscripten_stack_get_end();
  assert((max & 3) == 0);
  // If the stack ends at address zero we write our cookies 4 bytes into the
  // stack.  This prevents interference with SAFE_HEAP and ASAN which also
  // monitor writes to address zero.
  if (max == 0) {
    max += 4;
  }
  // The stack grow downwards towards _emscripten_stack_get_end.
  // We write cookies to the final two words in the stack and detect if they are
  // ever overwritten.
  HEAPU32[((max)>>2)] = 0x02135467;
  HEAPU32[(((max)+(4))>>2)] = 0x89BACDFE;
  // Also test the global address 0 for integrity.
  HEAPU32[((0)>>2)] = 1668509029;
}

function checkStackCookie() {
  if (ABORT) return;
  var max = _emscripten_stack_get_end();
  // See writeStackCookie().
  if (max == 0) {
    max += 4;
  }
  var cookie1 = HEAPU32[((max)>>2)];
  var cookie2 = HEAPU32[(((max)+(4))>>2)];
  if (cookie1 != 0x02135467 || cookie2 != 0x89BACDFE) {
    abort(`Stack overflow! Stack cookie has been overwritten at ${ptrToString(max)}, expected hex dwords 0x89BACDFE and 0x2135467, but received ${ptrToString(cookie2)} ${ptrToString(cookie1)}`);
  }
  // Also test the global address 0 for integrity.
  if (HEAPU32[((0)>>2)] != 0x63736d65 /* 'emsc' */) {
    abort('Runtime error: The application has corrupted its heap memory area (address zero)!');
  }
}
// end include: runtime_stack_check.js
// include: runtime_assertions.js
// Endianness check
(function() {
  var h16 = new Int16Array(1);
  var h8 = new Int8Array(h16.buffer);
  h16[0] = 0x6373;
  if (h8[0] !== 0x73 || h8[1] !== 0x63) throw 'Runtime error: expected the system to be little-endian! (Run with -sSUPPORT_BIG_ENDIAN to bypass)';
})();

// end include: runtime_assertions.js
var __ATPRERUN__  = []; // functions called before the runtime is initialized
var __ATINIT__    = []; // functions called during startup
var __ATEXIT__    = []; // functions called during shutdown
var __ATPOSTRUN__ = []; // functions called after the main() is called

var runtimeInitialized = false;

function preRun() {
  if (Module['preRun']) {
    if (typeof Module['preRun'] == 'function') Module['preRun'] = [Module['preRun']];
    while (Module['preRun'].length) {
      addOnPreRun(Module['preRun'].shift());
    }
  }
  callRuntimeCallbacks(__ATPRERUN__);
}

function initRuntime() {
  assert(!runtimeInitialized);
  runtimeInitialized = true;

  checkStackCookie();

  
if (!Module["noFSInit"] && !FS.init.initialized)
  FS.init();
FS.ignorePermissions = false;

TTY.init();
  callRuntimeCallbacks(__ATINIT__);
}

function postRun() {
  checkStackCookie();

  if (Module['postRun']) {
    if (typeof Module['postRun'] == 'function') Module['postRun'] = [Module['postRun']];
    while (Module['postRun'].length) {
      addOnPostRun(Module['postRun'].shift());
    }
  }

  callRuntimeCallbacks(__ATPOSTRUN__);
}

function addOnPreRun(cb) {
  __ATPRERUN__.unshift(cb);
}

function addOnInit(cb) {
  __ATINIT__.unshift(cb);
}

function addOnExit(cb) {
}

function addOnPostRun(cb) {
  __ATPOSTRUN__.unshift(cb);
}

// include: runtime_math.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/imul

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/fround

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/clz32

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc

assert(Math.imul, 'This browser does not support Math.imul(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.fround, 'This browser does not support Math.fround(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.clz32, 'This browser does not support Math.clz32(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
assert(Math.trunc, 'This browser does not support Math.trunc(), build with LEGACY_VM_SUPPORT or POLYFILL_OLD_MATH_FUNCTIONS to add in a polyfill');
// end include: runtime_math.js
// A counter of dependencies for calling run(). If we need to
// do asynchronous work before running, increment this and
// decrement it. Incrementing must happen in a place like
// Module.preRun (used by emcc to add file preloading).
// Note that you can add dependencies in preRun, even though
// it happens right before run - run will be postponed until
// the dependencies are met.
var runDependencies = 0;
var runDependencyWatcher = null;
var dependenciesFulfilled = null; // overridden to take different actions when all run dependencies are fulfilled
var runDependencyTracking = {};

function getUniqueRunDependency(id) {
  var orig = id;
  while (1) {
    if (!runDependencyTracking[id]) return id;
    id = orig + Math.random();
  }
}

function addRunDependency(id) {
  runDependencies++;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(!runDependencyTracking[id]);
    runDependencyTracking[id] = 1;
    if (runDependencyWatcher === null && typeof setInterval != 'undefined') {
      // Check for missing dependencies every few seconds
      runDependencyWatcher = setInterval(() => {
        if (ABORT) {
          clearInterval(runDependencyWatcher);
          runDependencyWatcher = null;
          return;
        }
        var shown = false;
        for (var dep in runDependencyTracking) {
          if (!shown) {
            shown = true;
            err('still waiting on run dependencies:');
          }
          err(`dependency: ${dep}`);
        }
        if (shown) {
          err('(end of list)');
        }
      }, 10000);
    }
  } else {
    err('warning: run dependency added without ID');
  }
}

function removeRunDependency(id) {
  runDependencies--;

  if (Module['monitorRunDependencies']) {
    Module['monitorRunDependencies'](runDependencies);
  }

  if (id) {
    assert(runDependencyTracking[id]);
    delete runDependencyTracking[id];
  } else {
    err('warning: run dependency removed without ID');
  }
  if (runDependencies == 0) {
    if (runDependencyWatcher !== null) {
      clearInterval(runDependencyWatcher);
      runDependencyWatcher = null;
    }
    if (dependenciesFulfilled) {
      var callback = dependenciesFulfilled;
      dependenciesFulfilled = null;
      callback(); // can add another dependenciesFulfilled
    }
  }
}

/** @param {string|number=} what */
function abort(what) {
  if (Module['onAbort']) {
    Module['onAbort'](what);
  }

  what = 'Aborted(' + what + ')';
  // TODO(sbc): Should we remove printing and leave it up to whoever
  // catches the exception?
  err(what);

  ABORT = true;
  EXITSTATUS = 1;

  // Use a wasm runtime error, because a JS error might be seen as a foreign
  // exception, which means we'd run destructors on it. We need the error to
  // simply make the program stop.
  // FIXME This approach does not work in Wasm EH because it currently does not assume
  // all RuntimeErrors are from traps; it decides whether a RuntimeError is from
  // a trap or not based on a hidden field within the object. So at the moment
  // we don't have a way of throwing a wasm trap from JS. TODO Make a JS API that
  // allows this in the wasm spec.

  // Suppress closure compiler warning here. Closure compiler's builtin extern
  // defintion for WebAssembly.RuntimeError claims it takes no arguments even
  // though it can.
  // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure gets fixed.
  /** @suppress {checkTypes} */
  var e = new WebAssembly.RuntimeError(what);

  readyPromiseReject(e);
  // Throw the error whether or not MODULARIZE is set because abort is used
  // in code paths apart from instantiation where an exception is expected
  // to be thrown when abort is called.
  throw e;
}

// include: memoryprofiler.js
// end include: memoryprofiler.js
// include: URIUtils.js
// Prefix of data URIs emitted by SINGLE_FILE and related options.
var dataURIPrefix = 'data:application/octet-stream;base64,';

/**
 * Indicates whether filename is a base64 data URI.
 * @noinline
 */
var isDataURI = (filename) => filename.startsWith(dataURIPrefix);

/**
 * Indicates whether filename is delivered via file protocol (as opposed to http/https)
 * @noinline
 */
var isFileURI = (filename) => filename.startsWith('file://');
// end include: URIUtils.js
function createExportWrapper(name) {
  return function() {
    assert(runtimeInitialized, `native function \`${name}\` called before runtime initialization`);
    var f = wasmExports[name];
    assert(f, `exported native function \`${name}\` not found`);
    return f.apply(null, arguments);
  };
}

// include: runtime_exceptions.js
// Base Emscripten EH error class
class EmscriptenEH extends Error {}

class EmscriptenSjLj extends EmscriptenEH {}

class CppException extends EmscriptenEH {
  constructor(excPtr) {
    super(excPtr);
    this.excPtr = excPtr;
    const excInfo = getExceptionMessage(excPtr);
    this.name = excInfo[0];
    this.message = excInfo[1];
  }
}
// end include: runtime_exceptions.js
var wasmBinaryFile;
if (Module['locateFile']) {
  wasmBinaryFile = 'binaryen_raw_wasm.wasm';
  if (!isDataURI(wasmBinaryFile)) {
    wasmBinaryFile = locateFile(wasmBinaryFile);
  }
} else {
  // Use bundler-friendly `new URL(..., import.meta.url)` pattern; works in browsers too.
  wasmBinaryFile = new URL('binaryen_raw_wasm.wasm', import.meta.url).href;
}

function getBinarySync(file) {
  if (file == wasmBinaryFile && wasmBinary) {
    return new Uint8Array(wasmBinary);
  }
  if (readBinary) {
    return readBinary(file);
  }
  throw "both async and sync fetching of the wasm failed";
}

function getBinaryPromise(binaryFile) {
  // If we don't have the binary yet, try to load it asynchronously.
  // Fetch has some additional restrictions over XHR, like it can't be used on a file:// url.
  // See https://github.com/github/fetch/pull/92#issuecomment-140665932
  // Cordova or Electron apps are typically loaded from a file:// url.
  // So use fetch if it is available and the url is not a file, otherwise fall back to XHR.
  if (!wasmBinary
      && (ENVIRONMENT_IS_WEB || ENVIRONMENT_IS_WORKER)) {
    if (typeof fetch == 'function'
    ) {
      return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
        if (!response['ok']) {
          throw "failed to load wasm binary file at '" + binaryFile + "'";
        }
        return response['arrayBuffer']();
      }).catch(() => getBinarySync(binaryFile));
    }
  }

  // Otherwise, getBinarySync should be able to get it synchronously
  return Promise.resolve().then(() => getBinarySync(binaryFile));
}

function instantiateArrayBuffer(binaryFile, imports, receiver) {
  return getBinaryPromise(binaryFile).then((binary) => {
    return WebAssembly.instantiate(binary, imports);
  }).then((instance) => {
    return instance;
  }).then(receiver, (reason) => {
    err(`failed to asynchronously prepare wasm: ${reason}`);

    // Warn on some common problems.
    if (isFileURI(wasmBinaryFile)) {
      err(`warning: Loading from a file URI (${wasmBinaryFile}) is not supported in most browsers. See https://emscripten.org/docs/getting_started/FAQ.html#how-do-i-run-a-local-webserver-for-testing-why-does-my-program-stall-in-downloading-or-preparing`);
    }
    abort(reason);
  });
}

function instantiateAsync(binary, binaryFile, imports, callback) {
  if (!binary &&
      typeof WebAssembly.instantiateStreaming == 'function' &&
      !isDataURI(binaryFile) &&
      typeof fetch == 'function') {
    return fetch(binaryFile, { credentials: 'same-origin' }).then((response) => {
      // Suppress closure warning here since the upstream definition for
      // instantiateStreaming only allows Promise<Repsponse> rather than
      // an actual Response.
      // TODO(https://github.com/google/closure-compiler/pull/3913): Remove if/when upstream closure is fixed.
      /** @suppress {checkTypes} */
      var result = WebAssembly.instantiateStreaming(response, imports);

      return result.then(
        callback,
        function(reason) {
          // We expect the most common failure cause to be a bad MIME type for the binary,
          // in which case falling back to ArrayBuffer instantiation should work.
          err(`wasm streaming compile failed: ${reason}`);
          err('falling back to ArrayBuffer instantiation');
          return instantiateArrayBuffer(binaryFile, imports, callback);
        });
    });
  }
  return instantiateArrayBuffer(binaryFile, imports, callback);
}

// Create the wasm instance.
// Receives the wasm imports, returns the exports.
function createWasm() {
  // prepare imports
  var info = {
    'env': wasmImports,
    'wasi_snapshot_preview1': wasmImports,
  };
  // Load the wasm module and create an instance of using native support in the JS engine.
  // handle a generated wasm instance, receiving its exports and
  // performing other necessary setup
  /** @param {WebAssembly.Module=} module*/
  function receiveInstance(instance, module) {
    wasmExports = instance.exports;

    

    wasmMemory = wasmExports['memory'];
    
    assert(wasmMemory, "memory not found in wasm exports");
    // This assertion doesn't hold when emscripten is run in --post-link
    // mode.
    // TODO(sbc): Read INITIAL_MEMORY out of the wasm file in post-link mode.
    //assert(wasmMemory.buffer.byteLength === 16777216);
    updateMemoryViews();

    wasmTable = wasmExports['__indirect_function_table'];
    
    assert(wasmTable, "table not found in wasm exports");

    addOnInit(wasmExports['__wasm_call_ctors']);

    removeRunDependency('wasm-instantiate');
    return wasmExports;
  }
  // wait for the pthread pool (if any)
  addRunDependency('wasm-instantiate');

  // Prefer streaming instantiation if available.
  // Async compilation can be confusing when an error on the page overwrites Module
  // (for example, if the order of elements is wrong, and the one defining Module is
  // later), so we save Module and check it later.
  var trueModule = Module;
  function receiveInstantiationResult(result) {
    // 'result' is a ResultObject object which has both the module and instance.
    // receiveInstance() will swap in the exports (to Module.asm) so they can be called
    assert(Module === trueModule, 'the Module object should not be replaced during async compilation - perhaps the order of HTML elements is wrong?');
    trueModule = null;
    // TODO: Due to Closure regression https://github.com/google/closure-compiler/issues/3193, the above line no longer optimizes out down to the following line.
    // When the regression is fixed, can restore the above PTHREADS-enabled path.
    receiveInstance(result['instance']);
  }

  // User shell pages can write their own Module.instantiateWasm = function(imports, successCallback) callback
  // to manually instantiate the Wasm module themselves. This allows pages to
  // run the instantiation parallel to any other async startup actions they are
  // performing.
  // Also pthreads and wasm workers initialize the wasm instance through this
  // path.
  if (Module['instantiateWasm']) {

    try {
      return Module['instantiateWasm'](info, receiveInstance);
    } catch(e) {
      err(`Module.instantiateWasm callback failed with error: ${e}`);
        // If instantiation fails, reject the module ready promise.
        readyPromiseReject(e);
    }
  }

  // If instantiation fails, reject the module ready promise.
  instantiateAsync(wasmBinary, wasmBinaryFile, info, receiveInstantiationResult).catch(readyPromiseReject);
  return {}; // no exports yet; we'll fill them in later
}

// Globals used by JS i64 conversions (see makeSetValue)
var tempDouble;
var tempI64;

// include: runtime_debug.js
function legacyModuleProp(prop, newName, incomming=true) {
  if (!Object.getOwnPropertyDescriptor(Module, prop)) {
    Object.defineProperty(Module, prop, {
      configurable: true,
      get() {
        let extra = incomming ? ' (the initial value can be provided on Module, but after startup the value is only looked for on a local variable of that name)' : '';
        abort(`\`Module.${prop}\` has been replaced by \`${newName}\`` + extra);

      }
    });
  }
}

function ignoredModuleProp(prop) {
  if (Object.getOwnPropertyDescriptor(Module, prop)) {
    abort(`\`Module.${prop}\` was supplied but \`${prop}\` not included in INCOMING_MODULE_JS_API`);
  }
}

// forcing the filesystem exports a few things by default
function isExportedByForceFilesystem(name) {
  return name === 'FS_createPath' ||
         name === 'FS_createDataFile' ||
         name === 'FS_createPreloadedFile' ||
         name === 'FS_unlink' ||
         name === 'addRunDependency' ||
         // The old FS has some functionality that WasmFS lacks.
         name === 'FS_createLazyFile' ||
         name === 'FS_createDevice' ||
         name === 'removeRunDependency';
}

function missingGlobal(sym, msg) {
  if (typeof globalThis !== 'undefined') {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        warnOnce(`\`${sym}\` is not longer defined by emscripten. ${msg}`);
        return undefined;
      }
    });
  }
}

missingGlobal('buffer', 'Please use HEAP8.buffer or wasmMemory.buffer');
missingGlobal('asm', 'Please use wasmExports instead');

function missingLibrarySymbol(sym) {
  if (typeof globalThis !== 'undefined' && !Object.getOwnPropertyDescriptor(globalThis, sym)) {
    Object.defineProperty(globalThis, sym, {
      configurable: true,
      get() {
        // Can't `abort()` here because it would break code that does runtime
        // checks.  e.g. `if (typeof SDL === 'undefined')`.
        var msg = `\`${sym}\` is a library symbol and not included by default; add it to your library.js __deps or to DEFAULT_LIBRARY_FUNCS_TO_INCLUDE on the command line`;
        // DEFAULT_LIBRARY_FUNCS_TO_INCLUDE requires the name as it appears in
        // library.js, which means $name for a JS name with no prefix, or name
        // for a JS name like _name.
        var librarySymbol = sym;
        if (!librarySymbol.startsWith('_')) {
          librarySymbol = '$' + sym;
        }
        msg += ` (e.g. -sDEFAULT_LIBRARY_FUNCS_TO_INCLUDE='${librarySymbol}')`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        warnOnce(msg);
        return undefined;
      }
    });
  }
  // Any symbol that is not included from the JS libary is also (by definition)
  // not exported on the Module object.
  unexportedRuntimeSymbol(sym);
}

function unexportedRuntimeSymbol(sym) {
  if (!Object.getOwnPropertyDescriptor(Module, sym)) {
    Object.defineProperty(Module, sym, {
      configurable: true,
      get() {
        var msg = `'${sym}' was not exported. add it to EXPORTED_RUNTIME_METHODS (see the Emscripten FAQ)`;
        if (isExportedByForceFilesystem(sym)) {
          msg += '. Alternatively, forcing filesystem support (-sFORCE_FILESYSTEM) can export this for you';
        }
        abort(msg);
      }
    });
  }
}

// Used by XXXXX_DEBUG settings to output debug messages.
function dbg(text) {
  // TODO(sbc): Make this configurable somehow.  Its not always convenient for
  // logging to show up as warnings.
  console.warn.apply(console, arguments);
}
// end include: runtime_debug.js
// === Body ===

// end include: preamble.js

  /** @constructor */
  function ExitStatus(status) {
      this.name = 'ExitStatus';
      this.message = `Program terminated with exit(${status})`;
      this.status = status;
    }

  var callRuntimeCallbacks = (callbacks) => {
      while (callbacks.length > 0) {
        // Pass the module as the first argument.
        callbacks.shift()(Module);
      }
    };

  var decrementExceptionRefcount = (ptr) => ___cxa_decrement_exception_refcount(ptr);

  
  
  var withStackSave = (f) => {
      var stack = stackSave();
      var ret = f();
      stackRestore(stack);
      return ret;
    };
  
  var UTF8Decoder = typeof TextDecoder != 'undefined' ? new TextDecoder('utf8') : undefined;
  
    /**
     * Given a pointer 'idx' to a null-terminated UTF8-encoded string in the given
     * array that contains uint8 values, returns a copy of that string as a
     * Javascript String object.
     * heapOrArray is either a regular array, or a JavaScript typed array view.
     * @param {number} idx
     * @param {number=} maxBytesToRead
     * @return {string}
     */
  var UTF8ArrayToString = (heapOrArray, idx, maxBytesToRead) => {
      var endIdx = idx + maxBytesToRead;
      var endPtr = idx;
      // TextDecoder needs to know the byte length in advance, it doesn't stop on
      // null terminator by itself.  Also, use the length info to avoid running tiny
      // strings through TextDecoder, since .subarray() allocates garbage.
      // (As a tiny code save trick, compare endPtr against endIdx using a negation,
      // so that undefined means Infinity)
      while (heapOrArray[endPtr] && !(endPtr >= endIdx)) ++endPtr;
  
      if (endPtr - idx > 16 && heapOrArray.buffer && UTF8Decoder) {
        return UTF8Decoder.decode(heapOrArray.subarray(idx, endPtr));
      }
      var str = '';
      // If building with TextDecoder, we have already computed the string length
      // above, so test loop end condition against that
      while (idx < endPtr) {
        // For UTF8 byte structure, see:
        // http://en.wikipedia.org/wiki/UTF-8#Description
        // https://www.ietf.org/rfc/rfc2279.txt
        // https://tools.ietf.org/html/rfc3629
        var u0 = heapOrArray[idx++];
        if (!(u0 & 0x80)) { str += String.fromCharCode(u0); continue; }
        var u1 = heapOrArray[idx++] & 63;
        if ((u0 & 0xE0) == 0xC0) { str += String.fromCharCode(((u0 & 31) << 6) | u1); continue; }
        var u2 = heapOrArray[idx++] & 63;
        if ((u0 & 0xF0) == 0xE0) {
          u0 = ((u0 & 15) << 12) | (u1 << 6) | u2;
        } else {
          if ((u0 & 0xF8) != 0xF0) warnOnce('Invalid UTF-8 leading byte ' + ptrToString(u0) + ' encountered when deserializing a UTF-8 string in wasm memory to a JS string!');
          u0 = ((u0 & 7) << 18) | (u1 << 12) | (u2 << 6) | (heapOrArray[idx++] & 63);
        }
  
        if (u0 < 0x10000) {
          str += String.fromCharCode(u0);
        } else {
          var ch = u0 - 0x10000;
          str += String.fromCharCode(0xD800 | (ch >> 10), 0xDC00 | (ch & 0x3FF));
        }
      }
      return str;
    };
  
    /**
     * Given a pointer 'ptr' to a null-terminated UTF8-encoded string in the
     * emscripten HEAP, returns a copy of that string as a Javascript String object.
     *
     * @param {number} ptr
     * @param {number=} maxBytesToRead - An optional length that specifies the
     *   maximum number of bytes to read. You can omit this parameter to scan the
     *   string until the first 0 byte. If maxBytesToRead is passed, and the string
     *   at [ptr, ptr+maxBytesToReadr[ contains a null byte in the middle, then the
     *   string will cut short at that byte index (i.e. maxBytesToRead will not
     *   produce a string of exact length [ptr, ptr+maxBytesToRead[) N.B. mixing
     *   frequent uses of UTF8ToString() with and without maxBytesToRead may throw
     *   JS JIT optimizations off, so it is worth to consider consistently using one
     * @return {string}
     */
  var UTF8ToString = (ptr, maxBytesToRead) => {
      assert(typeof ptr == 'number', `UTF8ToString expects a number (got ${typeof ptr})`);
      return ptr ? UTF8ArrayToString(HEAPU8, ptr, maxBytesToRead) : '';
    };
  var getExceptionMessageCommon = (ptr) => withStackSave(() => {
      var type_addr_addr = stackAlloc(4);
      var message_addr_addr = stackAlloc(4);
      ___get_exception_message(ptr, type_addr_addr, message_addr_addr);
      var type_addr = HEAPU32[((type_addr_addr)>>2)];
      var message_addr = HEAPU32[((message_addr_addr)>>2)];
      var type = UTF8ToString(type_addr);
      _free(type_addr);
      var message;
      if (message_addr) {
        message = UTF8ToString(message_addr);
        _free(message_addr);
      }
      return [type, message];
    });
  var getExceptionMessage = (ptr) => getExceptionMessageCommon(ptr);
  Module['getExceptionMessage'] = getExceptionMessage;

  
    /**
     * @param {number} ptr
     * @param {string} type
     */
  function getValue(ptr, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': return HEAP8[((ptr)>>0)];
      case 'i8': return HEAP8[((ptr)>>0)];
      case 'i16': return HEAP16[((ptr)>>1)];
      case 'i32': return HEAP32[((ptr)>>2)];
      case 'i64': abort('to do getValue(i64) use WASM_BIGINT');
      case 'float': return HEAPF32[((ptr)>>2)];
      case 'double': return HEAPF64[((ptr)>>3)];
      case '*': return HEAPU32[((ptr)>>2)];
      default: abort(`invalid type for getValue: ${type}`);
    }
  }

  var incrementExceptionRefcount = (ptr) => ___cxa_increment_exception_refcount(ptr);

  var noExitRuntime = Module['noExitRuntime'] || true;

  var ptrToString = (ptr) => {
      assert(typeof ptr === 'number');
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      ptr >>>= 0;
      return '0x' + ptr.toString(16).padStart(8, '0');
    };

  
    /**
     * @param {number} ptr
     * @param {number} value
     * @param {string} type
     */
  function setValue(ptr, value, type = 'i8') {
    if (type.endsWith('*')) type = '*';
    switch (type) {
      case 'i1': HEAP8[((ptr)>>0)] = value; break;
      case 'i8': HEAP8[((ptr)>>0)] = value; break;
      case 'i16': HEAP16[((ptr)>>1)] = value; break;
      case 'i32': HEAP32[((ptr)>>2)] = value; break;
      case 'i64': abort('to do setValue(i64) use WASM_BIGINT');
      case 'float': HEAPF32[((ptr)>>2)] = value; break;
      case 'double': HEAPF64[((ptr)>>3)] = value; break;
      case '*': HEAPU32[((ptr)>>2)] = value; break;
      default: abort(`invalid type for setValue: ${type}`);
    }
  }

  var warnOnce = (text) => {
      if (!warnOnce.shown) warnOnce.shown = {};
      if (!warnOnce.shown[text]) {
        warnOnce.shown[text] = 1;
        err(text);
      }
    };

  var ___assert_fail = (condition, filename, line, func) => {
      abort(`Assertion failed: ${UTF8ToString(condition)}, at: ` + [filename ? UTF8ToString(filename) : 'unknown filename', line, func ? UTF8ToString(func) : 'unknown function']);
    };

  var exceptionCaught =  [];
  
  
  var uncaughtExceptionCount = 0;
  var ___cxa_begin_catch = (ptr) => {
      var info = new ExceptionInfo(ptr);
      if (!info.get_caught()) {
        info.set_caught(true);
        uncaughtExceptionCount--;
      }
      info.set_rethrown(false);
      exceptionCaught.push(info);
      ___cxa_increment_exception_refcount(info.excPtr);
      return info.get_exception_ptr();
    };

  
  var exceptionLast = 0;
  
  
  var ___cxa_end_catch = () => {
      // Clear state flag.
      _setThrew(0, 0);
      assert(exceptionCaught.length > 0);
      // Call destructor if one is registered then clear it.
      var info = exceptionCaught.pop();
  
      ___cxa_decrement_exception_refcount(info.excPtr);
      exceptionLast = 0; // XXX in decRef?
    };

  
  /** @constructor */
  function ExceptionInfo(excPtr) {
      this.excPtr = excPtr;
      this.ptr = excPtr - 24;
  
      this.set_type = function(type) {
        HEAPU32[(((this.ptr)+(4))>>2)] = type;
      };
  
      this.get_type = function() {
        return HEAPU32[(((this.ptr)+(4))>>2)];
      };
  
      this.set_destructor = function(destructor) {
        HEAPU32[(((this.ptr)+(8))>>2)] = destructor;
      };
  
      this.get_destructor = function() {
        return HEAPU32[(((this.ptr)+(8))>>2)];
      };
  
      this.set_caught = function(caught) {
        caught = caught ? 1 : 0;
        HEAP8[(((this.ptr)+(12))>>0)] = caught;
      };
  
      this.get_caught = function() {
        return HEAP8[(((this.ptr)+(12))>>0)] != 0;
      };
  
      this.set_rethrown = function(rethrown) {
        rethrown = rethrown ? 1 : 0;
        HEAP8[(((this.ptr)+(13))>>0)] = rethrown;
      };
  
      this.get_rethrown = function() {
        return HEAP8[(((this.ptr)+(13))>>0)] != 0;
      };
  
      // Initialize native structure fields. Should be called once after allocated.
      this.init = function(type, destructor) {
        this.set_adjusted_ptr(0);
        this.set_type(type);
        this.set_destructor(destructor);
      }
  
      this.set_adjusted_ptr = function(adjustedPtr) {
        HEAPU32[(((this.ptr)+(16))>>2)] = adjustedPtr;
      };
  
      this.get_adjusted_ptr = function() {
        return HEAPU32[(((this.ptr)+(16))>>2)];
      };
  
      // Get pointer which is expected to be received by catch clause in C++ code. It may be adjusted
      // when the pointer is casted to some of the exception object base classes (e.g. when virtual
      // inheritance is used). When a pointer is thrown this method should return the thrown pointer
      // itself.
      this.get_exception_ptr = function() {
        // Work around a fastcomp bug, this code is still included for some reason in a build without
        // exceptions support.
        var isPointer = ___cxa_is_pointer_type(this.get_type());
        if (isPointer) {
          return HEAPU32[((this.excPtr)>>2)];
        }
        var adjusted = this.get_adjusted_ptr();
        if (adjusted !== 0) return adjusted;
        return this.excPtr;
      };
    }
  
  var ___resumeException = (ptr) => {
      if (!exceptionLast) {
        exceptionLast = new CppException(ptr);
      }
      throw exceptionLast;
    };
  
  
  var findMatchingCatch = (args) => {
      var thrown =
        exceptionLast && exceptionLast.excPtr;
      if (!thrown) {
        // just pass through the null ptr
        setTempRet0(0);
        return 0;
      }
      var info = new ExceptionInfo(thrown);
      info.set_adjusted_ptr(thrown);
      var thrownType = info.get_type();
      if (!thrownType) {
        // just pass through the thrown ptr
        setTempRet0(0);
        return thrown;
      }
  
      // can_catch receives a **, add indirection
      // The different catch blocks are denoted by different types.
      // Due to inheritance, those types may not precisely match the
      // type of the thrown object. Find one which matches, and
      // return the type of the catch block which should be called.
      for (var arg in args) {
        var caughtType = args[arg];
  
        if (caughtType === 0 || caughtType === thrownType) {
          // Catch all clause matched or exactly the same type is caught
          break;
        }
        var adjusted_ptr_addr = info.ptr + 16;
        if (___cxa_can_catch(caughtType, thrownType, adjusted_ptr_addr)) {
          setTempRet0(caughtType);
          return thrown;
        }
      }
      setTempRet0(thrownType);
      return thrown;
    };
  var ___cxa_find_matching_catch_2 = () => findMatchingCatch([]);

  var ___cxa_find_matching_catch_3 = (arg0) => findMatchingCatch([arg0]);

  var ___cxa_find_matching_catch_4 = (arg0,arg1) => findMatchingCatch([arg0,arg1]);

  
  
  var ___cxa_rethrow = () => {
      var info = exceptionCaught.pop();
      if (!info) {
        abort('no exception to throw');
      }
      var ptr = info.excPtr;
      if (!info.get_rethrown()) {
        // Only pop if the corresponding push was through rethrow_primary_exception
        exceptionCaught.push(info);
        info.set_rethrown(true);
        info.set_caught(false);
        uncaughtExceptionCount++;
      }
      exceptionLast = new CppException(ptr);
      throw exceptionLast;
    };

  
  
  var ___cxa_throw = (ptr, type, destructor) => {
      var info = new ExceptionInfo(ptr);
      // Initialize ExceptionInfo content after it was allocated in __cxa_allocate_exception.
      info.init(type, destructor);
      exceptionLast = new CppException(ptr);
      uncaughtExceptionCount++;
      throw exceptionLast;
    };

  var ___cxa_uncaught_exceptions = () => uncaughtExceptionCount;


  var setErrNo = (value) => {
      HEAP32[((___errno_location())>>2)] = value;
      return value;
    };
  
  var PATH = {
  isAbs:(path) => path.charAt(0) === '/',
  splitPath:(filename) => {
        var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
        return splitPathRe.exec(filename).slice(1);
      },
  normalizeArray:(parts, allowAboveRoot) => {
        // if the path tries to go above the root, `up` ends up > 0
        var up = 0;
        for (var i = parts.length - 1; i >= 0; i--) {
          var last = parts[i];
          if (last === '.') {
            parts.splice(i, 1);
          } else if (last === '..') {
            parts.splice(i, 1);
            up++;
          } else if (up) {
            parts.splice(i, 1);
            up--;
          }
        }
        // if the path is allowed to go above the root, restore leading ..s
        if (allowAboveRoot) {
          for (; up; up--) {
            parts.unshift('..');
          }
        }
        return parts;
      },
  normalize:(path) => {
        var isAbsolute = PATH.isAbs(path),
            trailingSlash = path.substr(-1) === '/';
        // Normalize the path
        path = PATH.normalizeArray(path.split('/').filter((p) => !!p), !isAbsolute).join('/');
        if (!path && !isAbsolute) {
          path = '.';
        }
        if (path && trailingSlash) {
          path += '/';
        }
        return (isAbsolute ? '/' : '') + path;
      },
  dirname:(path) => {
        var result = PATH.splitPath(path),
            root = result[0],
            dir = result[1];
        if (!root && !dir) {
          // No dirname whatsoever
          return '.';
        }
        if (dir) {
          // It has a dirname, strip trailing slash
          dir = dir.substr(0, dir.length - 1);
        }
        return root + dir;
      },
  basename:(path) => {
        // EMSCRIPTEN return '/'' for '/', not an empty string
        if (path === '/') return '/';
        path = PATH.normalize(path);
        path = path.replace(/\/$/, "");
        var lastSlash = path.lastIndexOf('/');
        if (lastSlash === -1) return path;
        return path.substr(lastSlash+1);
      },
  join:function() {
        var paths = Array.prototype.slice.call(arguments);
        return PATH.normalize(paths.join('/'));
      },
  join2:(l, r) => PATH.normalize(l + '/' + r),
  };
  
  var initRandomFill = () => {
      if (typeof crypto == 'object' && typeof crypto['getRandomValues'] == 'function') {
        // for modern web browsers
        return (view) => crypto.getRandomValues(view);
      } else
      // we couldn't find a proper implementation, as Math.random() is not suitable for /dev/random, see emscripten-core/emscripten/pull/7096
      abort("no cryptographic support found for randomDevice. consider polyfilling it if you want to use something insecure like Math.random(), e.g. put this in a --pre-js: var crypto = { getRandomValues: (array) => { for (var i = 0; i < array.length; i++) array[i] = (Math.random()*256)|0 } };");
    };
  var randomFill = (view) => {
      // Lazily init on the first invocation.
      return (randomFill = initRandomFill())(view);
    };
  
  
  
  var PATH_FS = {
  resolve:function() {
        var resolvedPath = '',
          resolvedAbsolute = false;
        for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
          var path = (i >= 0) ? arguments[i] : FS.cwd();
          // Skip empty and invalid entries
          if (typeof path != 'string') {
            throw new TypeError('Arguments to path.resolve must be strings');
          } else if (!path) {
            return ''; // an invalid portion invalidates the whole thing
          }
          resolvedPath = path + '/' + resolvedPath;
          resolvedAbsolute = PATH.isAbs(path);
        }
        // At this point the path should be resolved to a full absolute path, but
        // handle relative paths to be safe (might happen when process.cwd() fails)
        resolvedPath = PATH.normalizeArray(resolvedPath.split('/').filter((p) => !!p), !resolvedAbsolute).join('/');
        return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
      },
  relative:(from, to) => {
        from = PATH_FS.resolve(from).substr(1);
        to = PATH_FS.resolve(to).substr(1);
        function trim(arr) {
          var start = 0;
          for (; start < arr.length; start++) {
            if (arr[start] !== '') break;
          }
          var end = arr.length - 1;
          for (; end >= 0; end--) {
            if (arr[end] !== '') break;
          }
          if (start > end) return [];
          return arr.slice(start, end - start + 1);
        }
        var fromParts = trim(from.split('/'));
        var toParts = trim(to.split('/'));
        var length = Math.min(fromParts.length, toParts.length);
        var samePartsLength = length;
        for (var i = 0; i < length; i++) {
          if (fromParts[i] !== toParts[i]) {
            samePartsLength = i;
            break;
          }
        }
        var outputParts = [];
        for (var i = samePartsLength; i < fromParts.length; i++) {
          outputParts.push('..');
        }
        outputParts = outputParts.concat(toParts.slice(samePartsLength));
        return outputParts.join('/');
      },
  };
  
  
  
  var FS_stdin_getChar_buffer = [];
  
  var lengthBytesUTF8 = (str) => {
      var len = 0;
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        var c = str.charCodeAt(i); // possibly a lead surrogate
        if (c <= 0x7F) {
          len++;
        } else if (c <= 0x7FF) {
          len += 2;
        } else if (c >= 0xD800 && c <= 0xDFFF) {
          len += 4; ++i;
        } else {
          len += 3;
        }
      }
      return len;
    };
  
  var stringToUTF8Array = (str, heap, outIdx, maxBytesToWrite) => {
      assert(typeof str === 'string', `stringToUTF8Array expects a string (got ${typeof str})`);
      // Parameter maxBytesToWrite is not optional. Negative values, 0, null,
      // undefined and false each don't write out any bytes.
      if (!(maxBytesToWrite > 0))
        return 0;
  
      var startIdx = outIdx;
      var endIdx = outIdx + maxBytesToWrite - 1; // -1 for string null terminator.
      for (var i = 0; i < str.length; ++i) {
        // Gotcha: charCodeAt returns a 16-bit word that is a UTF-16 encoded code
        // unit, not a Unicode code point of the character! So decode
        // UTF16->UTF32->UTF8.
        // See http://unicode.org/faq/utf_bom.html#utf16-3
        // For UTF8 byte structure, see http://en.wikipedia.org/wiki/UTF-8#Description
        // and https://www.ietf.org/rfc/rfc2279.txt
        // and https://tools.ietf.org/html/rfc3629
        var u = str.charCodeAt(i); // possibly a lead surrogate
        if (u >= 0xD800 && u <= 0xDFFF) {
          var u1 = str.charCodeAt(++i);
          u = 0x10000 + ((u & 0x3FF) << 10) | (u1 & 0x3FF);
        }
        if (u <= 0x7F) {
          if (outIdx >= endIdx) break;
          heap[outIdx++] = u;
        } else if (u <= 0x7FF) {
          if (outIdx + 1 >= endIdx) break;
          heap[outIdx++] = 0xC0 | (u >> 6);
          heap[outIdx++] = 0x80 | (u & 63);
        } else if (u <= 0xFFFF) {
          if (outIdx + 2 >= endIdx) break;
          heap[outIdx++] = 0xE0 | (u >> 12);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        } else {
          if (outIdx + 3 >= endIdx) break;
          if (u > 0x10FFFF) warnOnce('Invalid Unicode code point ' + ptrToString(u) + ' encountered when serializing a JS string to a UTF-8 string in wasm memory! (Valid unicode code points should be in range 0-0x10FFFF).');
          heap[outIdx++] = 0xF0 | (u >> 18);
          heap[outIdx++] = 0x80 | ((u >> 12) & 63);
          heap[outIdx++] = 0x80 | ((u >> 6) & 63);
          heap[outIdx++] = 0x80 | (u & 63);
        }
      }
      // Null-terminate the pointer to the buffer.
      heap[outIdx] = 0;
      return outIdx - startIdx;
    };
  /** @type {function(string, boolean=, number=)} */
  function intArrayFromString(stringy, dontAddNull, length) {
    var len = length > 0 ? length : lengthBytesUTF8(stringy)+1;
    var u8array = new Array(len);
    var numBytesWritten = stringToUTF8Array(stringy, u8array, 0, u8array.length);
    if (dontAddNull) u8array.length = numBytesWritten;
    return u8array;
  }
  var FS_stdin_getChar = () => {
      if (!FS_stdin_getChar_buffer.length) {
        var result = null;
        if (typeof window != 'undefined' &&
          typeof window.prompt == 'function') {
          // Browser.
          result = window.prompt('Input: ');  // returns null on cancel
          if (result !== null) {
            result += '\n';
          }
        } else if (typeof readline == 'function') {
          // Command line.
          result = readline();
          if (result !== null) {
            result += '\n';
          }
        }
        if (!result) {
          return null;
        }
        FS_stdin_getChar_buffer = intArrayFromString(result, true);
      }
      return FS_stdin_getChar_buffer.shift();
    };
  var TTY = {
  ttys:[],
  init() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // currently, FS.init does not distinguish if process.stdin is a file or TTY
        //   // device, it always assumes it's a TTY device. because of this, we're forcing
        //   // process.stdin to UTF8 encoding to at least make stdin reading compatible
        //   // with text files until FS.init can be refactored.
        //   process.stdin.setEncoding('utf8');
        // }
      },
  shutdown() {
        // https://github.com/emscripten-core/emscripten/pull/1555
        // if (ENVIRONMENT_IS_NODE) {
        //   // inolen: any idea as to why node -e 'process.stdin.read()' wouldn't exit immediately (with process.stdin being a tty)?
        //   // isaacs: because now it's reading from the stream, you've expressed interest in it, so that read() kicks off a _read() which creates a ReadReq operation
        //   // inolen: I thought read() in that case was a synchronous operation that just grabbed some amount of buffered data if it exists?
        //   // isaacs: it is. but it also triggers a _read() call, which calls readStart() on the handle
        //   // isaacs: do process.stdin.pause() and i'd think it'd probably close the pending call
        //   process.stdin.pause();
        // }
      },
  register(dev, ops) {
        TTY.ttys[dev] = { input: [], output: [], ops: ops };
        FS.registerDevice(dev, TTY.stream_ops);
      },
  stream_ops:{
  open(stream) {
          var tty = TTY.ttys[stream.node.rdev];
          if (!tty) {
            throw new FS.ErrnoError(43);
          }
          stream.tty = tty;
          stream.seekable = false;
        },
  close(stream) {
          // flush any pending line data
          stream.tty.ops.fsync(stream.tty);
        },
  fsync(stream) {
          stream.tty.ops.fsync(stream.tty);
        },
  read(stream, buffer, offset, length, pos /* ignored */) {
          if (!stream.tty || !stream.tty.ops.get_char) {
            throw new FS.ErrnoError(60);
          }
          var bytesRead = 0;
          for (var i = 0; i < length; i++) {
            var result;
            try {
              result = stream.tty.ops.get_char(stream.tty);
            } catch (e) {
              throw new FS.ErrnoError(29);
            }
            if (result === undefined && bytesRead === 0) {
              throw new FS.ErrnoError(6);
            }
            if (result === null || result === undefined) break;
            bytesRead++;
            buffer[offset+i] = result;
          }
          if (bytesRead) {
            stream.node.timestamp = Date.now();
          }
          return bytesRead;
        },
  write(stream, buffer, offset, length, pos) {
          if (!stream.tty || !stream.tty.ops.put_char) {
            throw new FS.ErrnoError(60);
          }
          try {
            for (var i = 0; i < length; i++) {
              stream.tty.ops.put_char(stream.tty, buffer[offset+i]);
            }
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
          if (length) {
            stream.node.timestamp = Date.now();
          }
          return i;
        },
  },
  default_tty_ops:{
  get_char(tty) {
          return FS_stdin_getChar();
        },
  put_char(tty, val) {
          if (val === null || val === 10) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val); // val == 0 would cut text output off in the middle.
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            out(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  ioctl_tcgets(tty) {
          // typical setting
          return {
            c_iflag: 25856,
            c_oflag: 5,
            c_cflag: 191,
            c_lflag: 35387,
            c_cc: [
              0x03, 0x1c, 0x7f, 0x15, 0x04, 0x00, 0x01, 0x00, 0x11, 0x13, 0x1a, 0x00,
              0x12, 0x0f, 0x17, 0x16, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
              0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
            ]
          };
        },
  ioctl_tcsets(tty, optional_actions, data) {
          // currently just ignore
          return 0;
        },
  ioctl_tiocgwinsz(tty) {
          return [24, 80];
        },
  },
  default_tty1_ops:{
  put_char(tty, val) {
          if (val === null || val === 10) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          } else {
            if (val != 0) tty.output.push(val);
          }
        },
  fsync(tty) {
          if (tty.output && tty.output.length > 0) {
            err(UTF8ArrayToString(tty.output, 0));
            tty.output = [];
          }
        },
  },
  };
  
  
  var zeroMemory = (address, size) => {
      HEAPU8.fill(0, address, address + size);
      return address;
    };
  
  var alignMemory = (size, alignment) => {
      assert(alignment, "alignment argument is required");
      return Math.ceil(size / alignment) * alignment;
    };
  var mmapAlloc = (size) => {
      abort('internal error: mmapAlloc called but `emscripten_builtin_memalign` native symbol not exported');
    };
  var MEMFS = {
  ops_table:null,
  mount(mount) {
        return MEMFS.createNode(null, '/', 16384 | 511 /* 0777 */, 0);
      },
  createNode(parent, name, mode, dev) {
        if (FS.isBlkdev(mode) || FS.isFIFO(mode)) {
          // no supported
          throw new FS.ErrnoError(63);
        }
        if (!MEMFS.ops_table) {
          MEMFS.ops_table = {
            dir: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                lookup: MEMFS.node_ops.lookup,
                mknod: MEMFS.node_ops.mknod,
                rename: MEMFS.node_ops.rename,
                unlink: MEMFS.node_ops.unlink,
                rmdir: MEMFS.node_ops.rmdir,
                readdir: MEMFS.node_ops.readdir,
                symlink: MEMFS.node_ops.symlink
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek
              }
            },
            file: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: {
                llseek: MEMFS.stream_ops.llseek,
                read: MEMFS.stream_ops.read,
                write: MEMFS.stream_ops.write,
                allocate: MEMFS.stream_ops.allocate,
                mmap: MEMFS.stream_ops.mmap,
                msync: MEMFS.stream_ops.msync
              }
            },
            link: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr,
                readlink: MEMFS.node_ops.readlink
              },
              stream: {}
            },
            chrdev: {
              node: {
                getattr: MEMFS.node_ops.getattr,
                setattr: MEMFS.node_ops.setattr
              },
              stream: FS.chrdev_stream_ops
            }
          };
        }
        var node = FS.createNode(parent, name, mode, dev);
        if (FS.isDir(node.mode)) {
          node.node_ops = MEMFS.ops_table.dir.node;
          node.stream_ops = MEMFS.ops_table.dir.stream;
          node.contents = {};
        } else if (FS.isFile(node.mode)) {
          node.node_ops = MEMFS.ops_table.file.node;
          node.stream_ops = MEMFS.ops_table.file.stream;
          node.usedBytes = 0; // The actual number of bytes used in the typed array, as opposed to contents.length which gives the whole capacity.
          // When the byte data of the file is populated, this will point to either a typed array, or a normal JS array. Typed arrays are preferred
          // for performance, and used by default. However, typed arrays are not resizable like normal JS arrays are, so there is a small disk size
          // penalty involved for appending file writes that continuously grow a file similar to std::vector capacity vs used -scheme.
          node.contents = null; 
        } else if (FS.isLink(node.mode)) {
          node.node_ops = MEMFS.ops_table.link.node;
          node.stream_ops = MEMFS.ops_table.link.stream;
        } else if (FS.isChrdev(node.mode)) {
          node.node_ops = MEMFS.ops_table.chrdev.node;
          node.stream_ops = MEMFS.ops_table.chrdev.stream;
        }
        node.timestamp = Date.now();
        // add the new node to the parent
        if (parent) {
          parent.contents[name] = node;
          parent.timestamp = node.timestamp;
        }
        return node;
      },
  getFileDataAsTypedArray(node) {
        if (!node.contents) return new Uint8Array(0);
        if (node.contents.subarray) return node.contents.subarray(0, node.usedBytes); // Make sure to not return excess unused bytes.
        return new Uint8Array(node.contents);
      },
  expandFileStorage(node, newCapacity) {
        var prevCapacity = node.contents ? node.contents.length : 0;
        if (prevCapacity >= newCapacity) return; // No need to expand, the storage was already large enough.
        // Don't expand strictly to the given requested limit if it's only a very small increase, but instead geometrically grow capacity.
        // For small filesizes (<1MB), perform size*2 geometric increase, but for large sizes, do a much more conservative size*1.125 increase to
        // avoid overshooting the allocation cap by a very large margin.
        var CAPACITY_DOUBLING_MAX = 1024 * 1024;
        newCapacity = Math.max(newCapacity, (prevCapacity * (prevCapacity < CAPACITY_DOUBLING_MAX ? 2.0 : 1.125)) >>> 0);
        if (prevCapacity != 0) newCapacity = Math.max(newCapacity, 256); // At minimum allocate 256b for each file when expanding.
        var oldContents = node.contents;
        node.contents = new Uint8Array(newCapacity); // Allocate new storage.
        if (node.usedBytes > 0) node.contents.set(oldContents.subarray(0, node.usedBytes), 0); // Copy old data over to the new storage.
      },
  resizeFileStorage(node, newSize) {
        if (node.usedBytes == newSize) return;
        if (newSize == 0) {
          node.contents = null; // Fully decommit when requesting a resize to zero.
          node.usedBytes = 0;
        } else {
          var oldContents = node.contents;
          node.contents = new Uint8Array(newSize); // Allocate new storage.
          if (oldContents) {
            node.contents.set(oldContents.subarray(0, Math.min(newSize, node.usedBytes))); // Copy old data over to the new storage.
          }
          node.usedBytes = newSize;
        }
      },
  node_ops:{
  getattr(node) {
          var attr = {};
          // device numbers reuse inode numbers.
          attr.dev = FS.isChrdev(node.mode) ? node.id : 1;
          attr.ino = node.id;
          attr.mode = node.mode;
          attr.nlink = 1;
          attr.uid = 0;
          attr.gid = 0;
          attr.rdev = node.rdev;
          if (FS.isDir(node.mode)) {
            attr.size = 4096;
          } else if (FS.isFile(node.mode)) {
            attr.size = node.usedBytes;
          } else if (FS.isLink(node.mode)) {
            attr.size = node.link.length;
          } else {
            attr.size = 0;
          }
          attr.atime = new Date(node.timestamp);
          attr.mtime = new Date(node.timestamp);
          attr.ctime = new Date(node.timestamp);
          // NOTE: In our implementation, st_blocks = Math.ceil(st_size/st_blksize),
          //       but this is not required by the standard.
          attr.blksize = 4096;
          attr.blocks = Math.ceil(attr.size / attr.blksize);
          return attr;
        },
  setattr(node, attr) {
          if (attr.mode !== undefined) {
            node.mode = attr.mode;
          }
          if (attr.timestamp !== undefined) {
            node.timestamp = attr.timestamp;
          }
          if (attr.size !== undefined) {
            MEMFS.resizeFileStorage(node, attr.size);
          }
        },
  lookup(parent, name) {
          throw FS.genericErrors[44];
        },
  mknod(parent, name, mode, dev) {
          return MEMFS.createNode(parent, name, mode, dev);
        },
  rename(old_node, new_dir, new_name) {
          // if we're overwriting a directory at new_name, make sure it's empty.
          if (FS.isDir(old_node.mode)) {
            var new_node;
            try {
              new_node = FS.lookupNode(new_dir, new_name);
            } catch (e) {
            }
            if (new_node) {
              for (var i in new_node.contents) {
                throw new FS.ErrnoError(55);
              }
            }
          }
          // do the internal rewiring
          delete old_node.parent.contents[old_node.name];
          old_node.parent.timestamp = Date.now()
          old_node.name = new_name;
          new_dir.contents[new_name] = old_node;
          new_dir.timestamp = old_node.parent.timestamp;
          old_node.parent = new_dir;
        },
  unlink(parent, name) {
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  rmdir(parent, name) {
          var node = FS.lookupNode(parent, name);
          for (var i in node.contents) {
            throw new FS.ErrnoError(55);
          }
          delete parent.contents[name];
          parent.timestamp = Date.now();
        },
  readdir(node) {
          var entries = ['.', '..'];
          for (var key in node.contents) {
            if (!node.contents.hasOwnProperty(key)) {
              continue;
            }
            entries.push(key);
          }
          return entries;
        },
  symlink(parent, newname, oldpath) {
          var node = MEMFS.createNode(parent, newname, 511 /* 0777 */ | 40960, 0);
          node.link = oldpath;
          return node;
        },
  readlink(node) {
          if (!FS.isLink(node.mode)) {
            throw new FS.ErrnoError(28);
          }
          return node.link;
        },
  },
  stream_ops:{
  read(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= stream.node.usedBytes) return 0;
          var size = Math.min(stream.node.usedBytes - position, length);
          assert(size >= 0);
          if (size > 8 && contents.subarray) { // non-trivial, and typed array
            buffer.set(contents.subarray(position, position + size), offset);
          } else {
            for (var i = 0; i < size; i++) buffer[offset + i] = contents[position + i];
          }
          return size;
        },
  write(stream, buffer, offset, length, position, canOwn) {
          // The data buffer should be a typed array view
          assert(!(buffer instanceof ArrayBuffer));
          // If the buffer is located in main memory (HEAP), and if
          // memory can grow, we can't hold on to references of the
          // memory buffer, as they may get invalidated. That means we
          // need to do copy its contents.
          if (buffer.buffer === HEAP8.buffer) {
            canOwn = false;
          }
  
          if (!length) return 0;
          var node = stream.node;
          node.timestamp = Date.now();
  
          if (buffer.subarray && (!node.contents || node.contents.subarray)) { // This write is from a typed array to a typed array?
            if (canOwn) {
              assert(position === 0, 'canOwn must imply no weird position inside the file');
              node.contents = buffer.subarray(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (node.usedBytes === 0 && position === 0) { // If this is a simple first write to an empty file, do a fast set since we don't need to care about old data.
              node.contents = buffer.slice(offset, offset + length);
              node.usedBytes = length;
              return length;
            } else if (position + length <= node.usedBytes) { // Writing to an already allocated and used subrange of the file?
              node.contents.set(buffer.subarray(offset, offset + length), position);
              return length;
            }
          }
  
          // Appending to an existing file and we need to reallocate, or source data did not come as a typed array.
          MEMFS.expandFileStorage(node, position+length);
          if (node.contents.subarray && buffer.subarray) {
            // Use typed array write which is available.
            node.contents.set(buffer.subarray(offset, offset + length), position);
          } else {
            for (var i = 0; i < length; i++) {
             node.contents[position + i] = buffer[offset + i]; // Or fall back to manual write if not.
            }
          }
          node.usedBytes = Math.max(node.usedBytes, position + length);
          return length;
        },
  llseek(stream, offset, whence) {
          var position = offset;
          if (whence === 1) {
            position += stream.position;
          } else if (whence === 2) {
            if (FS.isFile(stream.node.mode)) {
              position += stream.node.usedBytes;
            }
          }
          if (position < 0) {
            throw new FS.ErrnoError(28);
          }
          return position;
        },
  allocate(stream, offset, length) {
          MEMFS.expandFileStorage(stream.node, offset + length);
          stream.node.usedBytes = Math.max(stream.node.usedBytes, offset + length);
        },
  mmap(stream, length, position, prot, flags) {
          if (!FS.isFile(stream.node.mode)) {
            throw new FS.ErrnoError(43);
          }
          var ptr;
          var allocated;
          var contents = stream.node.contents;
          // Only make a new copy when MAP_PRIVATE is specified.
          if (!(flags & 2) && contents.buffer === HEAP8.buffer) {
            // We can't emulate MAP_SHARED when the file is not backed by the
            // buffer we're mapping to (e.g. the HEAP buffer).
            allocated = false;
            ptr = contents.byteOffset;
          } else {
            // Try to avoid unnecessary slices.
            if (position > 0 || position + length < contents.length) {
              if (contents.subarray) {
                contents = contents.subarray(position, position + length);
              } else {
                contents = Array.prototype.slice.call(contents, position, position + length);
              }
            }
            allocated = true;
            ptr = mmapAlloc(length);
            if (!ptr) {
              throw new FS.ErrnoError(48);
            }
            HEAP8.set(contents, ptr);
          }
          return { ptr, allocated };
        },
  msync(stream, buffer, offset, length, mmapFlags) {
          MEMFS.stream_ops.write(stream, buffer, 0, length, offset, false);
          // should we check if bytesWritten and length are the same?
          return 0;
        },
  },
  };
  
  /** @param {boolean=} noRunDep */
  var asyncLoad = (url, onload, onerror, noRunDep) => {
      var dep = !noRunDep ? getUniqueRunDependency(`al ${url}`) : '';
      readAsync(url, (arrayBuffer) => {
        assert(arrayBuffer, `Loading data file "${url}" failed (no arrayBuffer).`);
        onload(new Uint8Array(arrayBuffer));
        if (dep) removeRunDependency(dep);
      }, (event) => {
        if (onerror) {
          onerror();
        } else {
          throw `Loading data file "${url}" failed.`;
        }
      });
      if (dep) addRunDependency(dep);
    };
  
  
  var FS_createDataFile = (parent, name, fileData, canRead, canWrite, canOwn) => {
      FS.createDataFile(parent, name, fileData, canRead, canWrite, canOwn);
    };
  
  var preloadPlugins = Module['preloadPlugins'] || [];
  var FS_handledByPreloadPlugin = (byteArray, fullname, finish, onerror) => {
      // Ensure plugins are ready.
      if (typeof Browser != 'undefined') Browser.init();
  
      var handled = false;
      preloadPlugins.forEach((plugin) => {
        if (handled) return;
        if (plugin['canHandle'](fullname)) {
          plugin['handle'](byteArray, fullname, finish, onerror);
          handled = true;
        }
      });
      return handled;
    };
  var FS_createPreloadedFile = (parent, name, url, canRead, canWrite, onload, onerror, dontCreateFile, canOwn, preFinish) => {
      // TODO we should allow people to just pass in a complete filename instead
      // of parent and name being that we just join them anyways
      var fullname = name ? PATH_FS.resolve(PATH.join2(parent, name)) : parent;
      var dep = getUniqueRunDependency(`cp ${fullname}`); // might have several active requests for the same fullname
      function processData(byteArray) {
        function finish(byteArray) {
          if (preFinish) preFinish();
          if (!dontCreateFile) {
            FS_createDataFile(parent, name, byteArray, canRead, canWrite, canOwn);
          }
          if (onload) onload();
          removeRunDependency(dep);
        }
        if (FS_handledByPreloadPlugin(byteArray, fullname, finish, () => {
          if (onerror) onerror();
          removeRunDependency(dep);
        })) {
          return;
        }
        finish(byteArray);
      }
      addRunDependency(dep);
      if (typeof url == 'string') {
        asyncLoad(url, (byteArray) => processData(byteArray), onerror);
      } else {
        processData(url);
      }
    };
  
  var FS_modeStringToFlags = (str) => {
      var flagModes = {
        'r': 0,
        'r+': 2,
        'w': 512 | 64 | 1,
        'w+': 512 | 64 | 2,
        'a': 1024 | 64 | 1,
        'a+': 1024 | 64 | 2,
      };
      var flags = flagModes[str];
      if (typeof flags == 'undefined') {
        throw new Error(`Unknown file open mode: ${str}`);
      }
      return flags;
    };
  
  var FS_getMode = (canRead, canWrite) => {
      var mode = 0;
      if (canRead) mode |= 292 | 73;
      if (canWrite) mode |= 146;
      return mode;
    };
  
  
  
  
  var ERRNO_MESSAGES = {
  0:"Success",
  1:"Arg list too long",
  2:"Permission denied",
  3:"Address already in use",
  4:"Address not available",
  5:"Address family not supported by protocol family",
  6:"No more processes",
  7:"Socket already connected",
  8:"Bad file number",
  9:"Trying to read unreadable message",
  10:"Mount device busy",
  11:"Operation canceled",
  12:"No children",
  13:"Connection aborted",
  14:"Connection refused",
  15:"Connection reset by peer",
  16:"File locking deadlock error",
  17:"Destination address required",
  18:"Math arg out of domain of func",
  19:"Quota exceeded",
  20:"File exists",
  21:"Bad address",
  22:"File too large",
  23:"Host is unreachable",
  24:"Identifier removed",
  25:"Illegal byte sequence",
  26:"Connection already in progress",
  27:"Interrupted system call",
  28:"Invalid argument",
  29:"I/O error",
  30:"Socket is already connected",
  31:"Is a directory",
  32:"Too many symbolic links",
  33:"Too many open files",
  34:"Too many links",
  35:"Message too long",
  36:"Multihop attempted",
  37:"File or path name too long",
  38:"Network interface is not configured",
  39:"Connection reset by network",
  40:"Network is unreachable",
  41:"Too many open files in system",
  42:"No buffer space available",
  43:"No such device",
  44:"No such file or directory",
  45:"Exec format error",
  46:"No record locks available",
  47:"The link has been severed",
  48:"Not enough core",
  49:"No message of desired type",
  50:"Protocol not available",
  51:"No space left on device",
  52:"Function not implemented",
  53:"Socket is not connected",
  54:"Not a directory",
  55:"Directory not empty",
  56:"State not recoverable",
  57:"Socket operation on non-socket",
  59:"Not a typewriter",
  60:"No such device or address",
  61:"Value too large for defined data type",
  62:"Previous owner died",
  63:"Not super-user",
  64:"Broken pipe",
  65:"Protocol error",
  66:"Unknown protocol",
  67:"Protocol wrong type for socket",
  68:"Math result not representable",
  69:"Read only file system",
  70:"Illegal seek",
  71:"No such process",
  72:"Stale file handle",
  73:"Connection timed out",
  74:"Text file busy",
  75:"Cross-device link",
  100:"Device not a stream",
  101:"Bad font file fmt",
  102:"Invalid slot",
  103:"Invalid request code",
  104:"No anode",
  105:"Block device required",
  106:"Channel number out of range",
  107:"Level 3 halted",
  108:"Level 3 reset",
  109:"Link number out of range",
  110:"Protocol driver not attached",
  111:"No CSI structure available",
  112:"Level 2 halted",
  113:"Invalid exchange",
  114:"Invalid request descriptor",
  115:"Exchange full",
  116:"No data (for no delay io)",
  117:"Timer expired",
  118:"Out of streams resources",
  119:"Machine is not on the network",
  120:"Package not installed",
  121:"The object is remote",
  122:"Advertise error",
  123:"Srmount error",
  124:"Communication error on send",
  125:"Cross mount point (not really error)",
  126:"Given log. name not unique",
  127:"f.d. invalid for this operation",
  128:"Remote address changed",
  129:"Can   access a needed shared lib",
  130:"Accessing a corrupted shared lib",
  131:".lib section in a.out corrupted",
  132:"Attempting to link in too many libs",
  133:"Attempting to exec a shared library",
  135:"Streams pipe error",
  136:"Too many users",
  137:"Socket type not supported",
  138:"Not supported",
  139:"Protocol family not supported",
  140:"Can't send after socket shutdown",
  141:"Too many references",
  142:"Host is down",
  148:"No medium (in tape drive)",
  156:"Level 2 not synchronized",
  };
  
  var ERRNO_CODES = {
      'EPERM': 63,
      'ENOENT': 44,
      'ESRCH': 71,
      'EINTR': 27,
      'EIO': 29,
      'ENXIO': 60,
      'E2BIG': 1,
      'ENOEXEC': 45,
      'EBADF': 8,
      'ECHILD': 12,
      'EAGAIN': 6,
      'EWOULDBLOCK': 6,
      'ENOMEM': 48,
      'EACCES': 2,
      'EFAULT': 21,
      'ENOTBLK': 105,
      'EBUSY': 10,
      'EEXIST': 20,
      'EXDEV': 75,
      'ENODEV': 43,
      'ENOTDIR': 54,
      'EISDIR': 31,
      'EINVAL': 28,
      'ENFILE': 41,
      'EMFILE': 33,
      'ENOTTY': 59,
      'ETXTBSY': 74,
      'EFBIG': 22,
      'ENOSPC': 51,
      'ESPIPE': 70,
      'EROFS': 69,
      'EMLINK': 34,
      'EPIPE': 64,
      'EDOM': 18,
      'ERANGE': 68,
      'ENOMSG': 49,
      'EIDRM': 24,
      'ECHRNG': 106,
      'EL2NSYNC': 156,
      'EL3HLT': 107,
      'EL3RST': 108,
      'ELNRNG': 109,
      'EUNATCH': 110,
      'ENOCSI': 111,
      'EL2HLT': 112,
      'EDEADLK': 16,
      'ENOLCK': 46,
      'EBADE': 113,
      'EBADR': 114,
      'EXFULL': 115,
      'ENOANO': 104,
      'EBADRQC': 103,
      'EBADSLT': 102,
      'EDEADLOCK': 16,
      'EBFONT': 101,
      'ENOSTR': 100,
      'ENODATA': 116,
      'ETIME': 117,
      'ENOSR': 118,
      'ENONET': 119,
      'ENOPKG': 120,
      'EREMOTE': 121,
      'ENOLINK': 47,
      'EADV': 122,
      'ESRMNT': 123,
      'ECOMM': 124,
      'EPROTO': 65,
      'EMULTIHOP': 36,
      'EDOTDOT': 125,
      'EBADMSG': 9,
      'ENOTUNIQ': 126,
      'EBADFD': 127,
      'EREMCHG': 128,
      'ELIBACC': 129,
      'ELIBBAD': 130,
      'ELIBSCN': 131,
      'ELIBMAX': 132,
      'ELIBEXEC': 133,
      'ENOSYS': 52,
      'ENOTEMPTY': 55,
      'ENAMETOOLONG': 37,
      'ELOOP': 32,
      'EOPNOTSUPP': 138,
      'EPFNOSUPPORT': 139,
      'ECONNRESET': 15,
      'ENOBUFS': 42,
      'EAFNOSUPPORT': 5,
      'EPROTOTYPE': 67,
      'ENOTSOCK': 57,
      'ENOPROTOOPT': 50,
      'ESHUTDOWN': 140,
      'ECONNREFUSED': 14,
      'EADDRINUSE': 3,
      'ECONNABORTED': 13,
      'ENETUNREACH': 40,
      'ENETDOWN': 38,
      'ETIMEDOUT': 73,
      'EHOSTDOWN': 142,
      'EHOSTUNREACH': 23,
      'EINPROGRESS': 26,
      'EALREADY': 7,
      'EDESTADDRREQ': 17,
      'EMSGSIZE': 35,
      'EPROTONOSUPPORT': 66,
      'ESOCKTNOSUPPORT': 137,
      'EADDRNOTAVAIL': 4,
      'ENETRESET': 39,
      'EISCONN': 30,
      'ENOTCONN': 53,
      'ETOOMANYREFS': 141,
      'EUSERS': 136,
      'EDQUOT': 19,
      'ESTALE': 72,
      'ENOTSUP': 138,
      'ENOMEDIUM': 148,
      'EILSEQ': 25,
      'EOVERFLOW': 61,
      'ECANCELED': 11,
      'ENOTRECOVERABLE': 56,
      'EOWNERDEAD': 62,
      'ESTRPIPE': 135,
    };
  
  var demangle = (func) => {
      warnOnce('warning: build with -sDEMANGLE_SUPPORT to link in libcxxabi demangling');
      return func;
    };
  var demangleAll = (text) => {
      var regex =
        /\b_Z[\w\d_]+/g;
      return text.replace(regex,
        function(x) {
          var y = demangle(x);
          return x === y ? x : (y + ' [' + x + ']');
        });
    };
  var FS = {
  root:null,
  mounts:[],
  devices:{
  },
  streams:[],
  nextInode:1,
  nameTable:null,
  currentPath:"/",
  initialized:false,
  ignorePermissions:true,
  ErrnoError:null,
  genericErrors:{
  },
  filesystems:null,
  syncFSRequests:0,
  lookupPath(path, opts = {}) {
        path = PATH_FS.resolve(path);
  
        if (!path) return { path: '', node: null };
  
        var defaults = {
          follow_mount: true,
          recurse_count: 0
        };
        opts = Object.assign(defaults, opts)
  
        if (opts.recurse_count > 8) {  // max recursive lookup of 8
          throw new FS.ErrnoError(32);
        }
  
        // split the absolute path
        var parts = path.split('/').filter((p) => !!p);
  
        // start at the root
        var current = FS.root;
        var current_path = '/';
  
        for (var i = 0; i < parts.length; i++) {
          var islast = (i === parts.length-1);
          if (islast && opts.parent) {
            // stop resolving
            break;
          }
  
          current = FS.lookupNode(current, parts[i]);
          current_path = PATH.join2(current_path, parts[i]);
  
          // jump to the mount's root node if this is a mountpoint
          if (FS.isMountpoint(current)) {
            if (!islast || (islast && opts.follow_mount)) {
              current = current.mounted.root;
            }
          }
  
          // by default, lookupPath will not follow a symlink if it is the final path component.
          // setting opts.follow = true will override this behavior.
          if (!islast || opts.follow) {
            var count = 0;
            while (FS.isLink(current.mode)) {
              var link = FS.readlink(current_path);
              current_path = PATH_FS.resolve(PATH.dirname(current_path), link);
  
              var lookup = FS.lookupPath(current_path, { recurse_count: opts.recurse_count + 1 });
              current = lookup.node;
  
              if (count++ > 40) {  // limit max consecutive symlinks to 40 (SYMLOOP_MAX).
                throw new FS.ErrnoError(32);
              }
            }
          }
        }
  
        return { path: current_path, node: current };
      },
  getPath(node) {
        var path;
        while (true) {
          if (FS.isRoot(node)) {
            var mount = node.mount.mountpoint;
            if (!path) return mount;
            return mount[mount.length-1] !== '/' ? `${mount}/${path}` : mount + path;
          }
          path = path ? `${node.name}/${path}` : node.name;
          node = node.parent;
        }
      },
  hashName(parentid, name) {
        var hash = 0;
  
        for (var i = 0; i < name.length; i++) {
          hash = ((hash << 5) - hash + name.charCodeAt(i)) | 0;
        }
        return ((parentid + hash) >>> 0) % FS.nameTable.length;
      },
  hashAddNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        node.name_next = FS.nameTable[hash];
        FS.nameTable[hash] = node;
      },
  hashRemoveNode(node) {
        var hash = FS.hashName(node.parent.id, node.name);
        if (FS.nameTable[hash] === node) {
          FS.nameTable[hash] = node.name_next;
        } else {
          var current = FS.nameTable[hash];
          while (current) {
            if (current.name_next === node) {
              current.name_next = node.name_next;
              break;
            }
            current = current.name_next;
          }
        }
      },
  lookupNode(parent, name) {
        var errCode = FS.mayLookup(parent);
        if (errCode) {
          throw new FS.ErrnoError(errCode, parent);
        }
        var hash = FS.hashName(parent.id, name);
        for (var node = FS.nameTable[hash]; node; node = node.name_next) {
          var nodeName = node.name;
          if (node.parent.id === parent.id && nodeName === name) {
            return node;
          }
        }
        // if we failed to find it in the cache, call into the VFS
        return FS.lookup(parent, name);
      },
  createNode(parent, name, mode, rdev) {
        assert(typeof parent == 'object')
        var node = new FS.FSNode(parent, name, mode, rdev);
  
        FS.hashAddNode(node);
  
        return node;
      },
  destroyNode(node) {
        FS.hashRemoveNode(node);
      },
  isRoot(node) {
        return node === node.parent;
      },
  isMountpoint(node) {
        return !!node.mounted;
      },
  isFile(mode) {
        return (mode & 61440) === 32768;
      },
  isDir(mode) {
        return (mode & 61440) === 16384;
      },
  isLink(mode) {
        return (mode & 61440) === 40960;
      },
  isChrdev(mode) {
        return (mode & 61440) === 8192;
      },
  isBlkdev(mode) {
        return (mode & 61440) === 24576;
      },
  isFIFO(mode) {
        return (mode & 61440) === 4096;
      },
  isSocket(mode) {
        return (mode & 49152) === 49152;
      },
  flagsToPermissionString(flag) {
        var perms = ['r', 'w', 'rw'][flag & 3];
        if ((flag & 512)) {
          perms += 'w';
        }
        return perms;
      },
  nodePermissions(node, perms) {
        if (FS.ignorePermissions) {
          return 0;
        }
        // return 0 if any user, group or owner bits are set.
        if (perms.includes('r') && !(node.mode & 292)) {
          return 2;
        } else if (perms.includes('w') && !(node.mode & 146)) {
          return 2;
        } else if (perms.includes('x') && !(node.mode & 73)) {
          return 2;
        }
        return 0;
      },
  mayLookup(dir) {
        var errCode = FS.nodePermissions(dir, 'x');
        if (errCode) return errCode;
        if (!dir.node_ops.lookup) return 2;
        return 0;
      },
  mayCreate(dir, name) {
        try {
          var node = FS.lookupNode(dir, name);
          return 20;
        } catch (e) {
        }
        return FS.nodePermissions(dir, 'wx');
      },
  mayDelete(dir, name, isdir) {
        var node;
        try {
          node = FS.lookupNode(dir, name);
        } catch (e) {
          return e.errno;
        }
        var errCode = FS.nodePermissions(dir, 'wx');
        if (errCode) {
          return errCode;
        }
        if (isdir) {
          if (!FS.isDir(node.mode)) {
            return 54;
          }
          if (FS.isRoot(node) || FS.getPath(node) === FS.cwd()) {
            return 10;
          }
        } else {
          if (FS.isDir(node.mode)) {
            return 31;
          }
        }
        return 0;
      },
  mayOpen(node, flags) {
        if (!node) {
          return 44;
        }
        if (FS.isLink(node.mode)) {
          return 32;
        } else if (FS.isDir(node.mode)) {
          if (FS.flagsToPermissionString(flags) !== 'r' || // opening for write
              (flags & 512)) { // TODO: check for O_SEARCH? (== search for dir only)
            return 31;
          }
        }
        return FS.nodePermissions(node, FS.flagsToPermissionString(flags));
      },
  MAX_OPEN_FDS:4096,
  nextfd() {
        for (var fd = 0; fd <= FS.MAX_OPEN_FDS; fd++) {
          if (!FS.streams[fd]) {
            return fd;
          }
        }
        throw new FS.ErrnoError(33);
      },
  getStreamChecked(fd) {
        var stream = FS.getStream(fd);
        if (!stream) {
          throw new FS.ErrnoError(8);
        }
        return stream;
      },
  getStream:(fd) => FS.streams[fd],
  createStream(stream, fd = -1) {
        if (!FS.FSStream) {
          FS.FSStream = /** @constructor */ function() {
            this.shared = { };
          };
          FS.FSStream.prototype = {};
          Object.defineProperties(FS.FSStream.prototype, {
            object: {
              /** @this {FS.FSStream} */
              get() { return this.node; },
              /** @this {FS.FSStream} */
              set(val) { this.node = val; }
            },
            isRead: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 1; }
            },
            isWrite: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 2097155) !== 0; }
            },
            isAppend: {
              /** @this {FS.FSStream} */
              get() { return (this.flags & 1024); }
            },
            flags: {
              /** @this {FS.FSStream} */
              get() { return this.shared.flags; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.flags = val; },
            },
            position : {
              /** @this {FS.FSStream} */
              get() { return this.shared.position; },
              /** @this {FS.FSStream} */
              set(val) { this.shared.position = val; },
            },
          });
        }
        // clone it, so we can return an instance of FSStream
        stream = Object.assign(new FS.FSStream(), stream);
        if (fd == -1) {
          fd = FS.nextfd();
        }
        stream.fd = fd;
        FS.streams[fd] = stream;
        return stream;
      },
  closeStream(fd) {
        FS.streams[fd] = null;
      },
  chrdev_stream_ops:{
  open(stream) {
          var device = FS.getDevice(stream.node.rdev);
          // override node's stream ops with the device's
          stream.stream_ops = device.stream_ops;
          // forward the open call
          if (stream.stream_ops.open) {
            stream.stream_ops.open(stream);
          }
        },
  llseek() {
          throw new FS.ErrnoError(70);
        },
  },
  major:(dev) => ((dev) >> 8),
  minor:(dev) => ((dev) & 0xff),
  makedev:(ma, mi) => ((ma) << 8 | (mi)),
  registerDevice(dev, ops) {
        FS.devices[dev] = { stream_ops: ops };
      },
  getDevice:(dev) => FS.devices[dev],
  getMounts(mount) {
        var mounts = [];
        var check = [mount];
  
        while (check.length) {
          var m = check.pop();
  
          mounts.push(m);
  
          check.push.apply(check, m.mounts);
        }
  
        return mounts;
      },
  syncfs(populate, callback) {
        if (typeof populate == 'function') {
          callback = populate;
          populate = false;
        }
  
        FS.syncFSRequests++;
  
        if (FS.syncFSRequests > 1) {
          err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`);
        }
  
        var mounts = FS.getMounts(FS.root.mount);
        var completed = 0;
  
        function doCallback(errCode) {
          assert(FS.syncFSRequests > 0);
          FS.syncFSRequests--;
          return callback(errCode);
        }
  
        function done(errCode) {
          if (errCode) {
            if (!done.errored) {
              done.errored = true;
              return doCallback(errCode);
            }
            return;
          }
          if (++completed >= mounts.length) {
            doCallback(null);
          }
        };
  
        // sync all mounts
        mounts.forEach((mount) => {
          if (!mount.type.syncfs) {
            return done(null);
          }
          mount.type.syncfs(mount, populate, done);
        });
      },
  mount(type, opts, mountpoint) {
        if (typeof type == 'string') {
          // The filesystem was not included, and instead we have an error
          // message stored in the variable.
          throw type;
        }
        var root = mountpoint === '/';
        var pseudo = !mountpoint;
        var node;
  
        if (root && FS.root) {
          throw new FS.ErrnoError(10);
        } else if (!root && !pseudo) {
          var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
          mountpoint = lookup.path;  // use the absolute path
          node = lookup.node;
  
          if (FS.isMountpoint(node)) {
            throw new FS.ErrnoError(10);
          }
  
          if (!FS.isDir(node.mode)) {
            throw new FS.ErrnoError(54);
          }
        }
  
        var mount = {
          type,
          opts,
          mountpoint,
          mounts: []
        };
  
        // create a root node for the fs
        var mountRoot = type.mount(mount);
        mountRoot.mount = mount;
        mount.root = mountRoot;
  
        if (root) {
          FS.root = mountRoot;
        } else if (node) {
          // set as a mountpoint
          node.mounted = mount;
  
          // add the new mount to the current mount's children
          if (node.mount) {
            node.mount.mounts.push(mount);
          }
        }
  
        return mountRoot;
      },
  unmount(mountpoint) {
        var lookup = FS.lookupPath(mountpoint, { follow_mount: false });
  
        if (!FS.isMountpoint(lookup.node)) {
          throw new FS.ErrnoError(28);
        }
  
        // destroy the nodes for this mount, and all its child mounts
        var node = lookup.node;
        var mount = node.mounted;
        var mounts = FS.getMounts(mount);
  
        Object.keys(FS.nameTable).forEach((hash) => {
          var current = FS.nameTable[hash];
  
          while (current) {
            var next = current.name_next;
  
            if (mounts.includes(current.mount)) {
              FS.destroyNode(current);
            }
  
            current = next;
          }
        });
  
        // no longer a mountpoint
        node.mounted = null;
  
        // remove this mount from the child mounts
        var idx = node.mount.mounts.indexOf(mount);
        assert(idx !== -1);
        node.mount.mounts.splice(idx, 1);
      },
  lookup(parent, name) {
        return parent.node_ops.lookup(parent, name);
      },
  mknod(path, mode, dev) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        if (!name || name === '.' || name === '..') {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.mayCreate(parent, name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.mknod) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.mknod(parent, name, mode, dev);
      },
  create(path, mode) {
        mode = mode !== undefined ? mode : 438 /* 0666 */;
        mode &= 4095;
        mode |= 32768;
        return FS.mknod(path, mode, 0);
      },
  mkdir(path, mode) {
        mode = mode !== undefined ? mode : 511 /* 0777 */;
        mode &= 511 | 512;
        mode |= 16384;
        return FS.mknod(path, mode, 0);
      },
  mkdirTree(path, mode) {
        var dirs = path.split('/');
        var d = '';
        for (var i = 0; i < dirs.length; ++i) {
          if (!dirs[i]) continue;
          d += '/' + dirs[i];
          try {
            FS.mkdir(d, mode);
          } catch(e) {
            if (e.errno != 20) throw e;
          }
        }
      },
  mkdev(path, mode, dev) {
        if (typeof dev == 'undefined') {
          dev = mode;
          mode = 438 /* 0666 */;
        }
        mode |= 8192;
        return FS.mknod(path, mode, dev);
      },
  symlink(oldpath, newpath) {
        if (!PATH_FS.resolve(oldpath)) {
          throw new FS.ErrnoError(44);
        }
        var lookup = FS.lookupPath(newpath, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var newname = PATH.basename(newpath);
        var errCode = FS.mayCreate(parent, newname);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.symlink) {
          throw new FS.ErrnoError(63);
        }
        return parent.node_ops.symlink(parent, newname, oldpath);
      },
  rename(old_path, new_path) {
        var old_dirname = PATH.dirname(old_path);
        var new_dirname = PATH.dirname(new_path);
        var old_name = PATH.basename(old_path);
        var new_name = PATH.basename(new_path);
        // parents must exist
        var lookup, old_dir, new_dir;
  
        // let the errors from non existant directories percolate up
        lookup = FS.lookupPath(old_path, { parent: true });
        old_dir = lookup.node;
        lookup = FS.lookupPath(new_path, { parent: true });
        new_dir = lookup.node;
  
        if (!old_dir || !new_dir) throw new FS.ErrnoError(44);
        // need to be part of the same mount
        if (old_dir.mount !== new_dir.mount) {
          throw new FS.ErrnoError(75);
        }
        // source must exist
        var old_node = FS.lookupNode(old_dir, old_name);
        // old path should not be an ancestor of the new path
        var relative = PATH_FS.relative(old_path, new_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(28);
        }
        // new path should not be an ancestor of the old path
        relative = PATH_FS.relative(new_path, old_dirname);
        if (relative.charAt(0) !== '.') {
          throw new FS.ErrnoError(55);
        }
        // see if the new path already exists
        var new_node;
        try {
          new_node = FS.lookupNode(new_dir, new_name);
        } catch (e) {
          // not fatal
        }
        // early out if nothing needs to change
        if (old_node === new_node) {
          return;
        }
        // we'll need to delete the old entry
        var isdir = FS.isDir(old_node.mode);
        var errCode = FS.mayDelete(old_dir, old_name, isdir);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        // need delete permissions if we'll be overwriting.
        // need create permissions if new doesn't already exist.
        errCode = new_node ?
          FS.mayDelete(new_dir, new_name, isdir) :
          FS.mayCreate(new_dir, new_name);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!old_dir.node_ops.rename) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(old_node) || (new_node && FS.isMountpoint(new_node))) {
          throw new FS.ErrnoError(10);
        }
        // if we are going to change the parent, check write permissions
        if (new_dir !== old_dir) {
          errCode = FS.nodePermissions(old_dir, 'w');
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // remove the node from the lookup hash
        FS.hashRemoveNode(old_node);
        // do the underlying fs rename
        try {
          old_dir.node_ops.rename(old_node, new_dir, new_name);
        } catch (e) {
          throw e;
        } finally {
          // add the node back to the hash (in case node_ops.rename
          // changed its name)
          FS.hashAddNode(old_node);
        }
      },
  rmdir(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, true);
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.rmdir) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.rmdir(parent, name);
        FS.destroyNode(node);
      },
  readdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        if (!node.node_ops.readdir) {
          throw new FS.ErrnoError(54);
        }
        return node.node_ops.readdir(node);
      },
  unlink(path) {
        var lookup = FS.lookupPath(path, { parent: true });
        var parent = lookup.node;
        if (!parent) {
          throw new FS.ErrnoError(44);
        }
        var name = PATH.basename(path);
        var node = FS.lookupNode(parent, name);
        var errCode = FS.mayDelete(parent, name, false);
        if (errCode) {
          // According to POSIX, we should map EISDIR to EPERM, but
          // we instead do what Linux does (and we must, as we use
          // the musl linux libc).
          throw new FS.ErrnoError(errCode);
        }
        if (!parent.node_ops.unlink) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isMountpoint(node)) {
          throw new FS.ErrnoError(10);
        }
        parent.node_ops.unlink(parent, name);
        FS.destroyNode(node);
      },
  readlink(path) {
        var lookup = FS.lookupPath(path);
        var link = lookup.node;
        if (!link) {
          throw new FS.ErrnoError(44);
        }
        if (!link.node_ops.readlink) {
          throw new FS.ErrnoError(28);
        }
        return PATH_FS.resolve(FS.getPath(link.parent), link.node_ops.readlink(link));
      },
  stat(path, dontFollow) {
        var lookup = FS.lookupPath(path, { follow: !dontFollow });
        var node = lookup.node;
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        if (!node.node_ops.getattr) {
          throw new FS.ErrnoError(63);
        }
        return node.node_ops.getattr(node);
      },
  lstat(path) {
        return FS.stat(path, true);
      },
  chmod(path, mode, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          mode: (mode & 4095) | (node.mode & ~4095),
          timestamp: Date.now()
        });
      },
  lchmod(path, mode) {
        FS.chmod(path, mode, true);
      },
  fchmod(fd, mode) {
        var stream = FS.getStreamChecked(fd);
        FS.chmod(stream.node, mode);
      },
  chown(path, uid, gid, dontFollow) {
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: !dontFollow });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        node.node_ops.setattr(node, {
          timestamp: Date.now()
          // we ignore the uid / gid for now
        });
      },
  lchown(path, uid, gid) {
        FS.chown(path, uid, gid, true);
      },
  fchown(fd, uid, gid) {
        var stream = FS.getStreamChecked(fd);
        FS.chown(stream.node, uid, gid);
      },
  truncate(path, len) {
        if (len < 0) {
          throw new FS.ErrnoError(28);
        }
        var node;
        if (typeof path == 'string') {
          var lookup = FS.lookupPath(path, { follow: true });
          node = lookup.node;
        } else {
          node = path;
        }
        if (!node.node_ops.setattr) {
          throw new FS.ErrnoError(63);
        }
        if (FS.isDir(node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!FS.isFile(node.mode)) {
          throw new FS.ErrnoError(28);
        }
        var errCode = FS.nodePermissions(node, 'w');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        node.node_ops.setattr(node, {
          size: len,
          timestamp: Date.now()
        });
      },
  ftruncate(fd, len) {
        var stream = FS.getStreamChecked(fd);
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(28);
        }
        FS.truncate(stream.node, len);
      },
  utime(path, atime, mtime) {
        var lookup = FS.lookupPath(path, { follow: true });
        var node = lookup.node;
        node.node_ops.setattr(node, {
          timestamp: Math.max(atime, mtime)
        });
      },
  open(path, flags, mode) {
        if (path === "") {
          throw new FS.ErrnoError(44);
        }
        flags = typeof flags == 'string' ? FS_modeStringToFlags(flags) : flags;
        mode = typeof mode == 'undefined' ? 438 /* 0666 */ : mode;
        if ((flags & 64)) {
          mode = (mode & 4095) | 32768;
        } else {
          mode = 0;
        }
        var node;
        if (typeof path == 'object') {
          node = path;
        } else {
          path = PATH.normalize(path);
          try {
            var lookup = FS.lookupPath(path, {
              follow: !(flags & 131072)
            });
            node = lookup.node;
          } catch (e) {
            // ignore
          }
        }
        // perhaps we need to create the node
        var created = false;
        if ((flags & 64)) {
          if (node) {
            // if O_CREAT and O_EXCL are set, error out if the node already exists
            if ((flags & 128)) {
              throw new FS.ErrnoError(20);
            }
          } else {
            // node doesn't exist, try to create it
            node = FS.mknod(path, mode, 0);
            created = true;
          }
        }
        if (!node) {
          throw new FS.ErrnoError(44);
        }
        // can't truncate a device
        if (FS.isChrdev(node.mode)) {
          flags &= ~512;
        }
        // if asked only for a directory, then this must be one
        if ((flags & 65536) && !FS.isDir(node.mode)) {
          throw new FS.ErrnoError(54);
        }
        // check permissions, if this is not a file we just created now (it is ok to
        // create and write to a file with read-only permissions; it is read-only
        // for later use)
        if (!created) {
          var errCode = FS.mayOpen(node, flags);
          if (errCode) {
            throw new FS.ErrnoError(errCode);
          }
        }
        // do truncation if necessary
        if ((flags & 512) && !created) {
          FS.truncate(node, 0);
        }
        // we've already handled these, don't pass down to the underlying vfs
        flags &= ~(128 | 512 | 131072);
  
        // register the stream with the filesystem
        var stream = FS.createStream({
          node,
          path: FS.getPath(node),  // we want the absolute path to the node
          flags,
          seekable: true,
          position: 0,
          stream_ops: node.stream_ops,
          // used by the file family libc calls (fopen, fwrite, ferror, etc.)
          ungotten: [],
          error: false
        });
        // call the new stream's open function
        if (stream.stream_ops.open) {
          stream.stream_ops.open(stream);
        }
        if (Module['logReadFiles'] && !(flags & 1)) {
          if (!FS.readFiles) FS.readFiles = {};
          if (!(path in FS.readFiles)) {
            FS.readFiles[path] = 1;
          }
        }
        return stream;
      },
  close(stream) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (stream.getdents) stream.getdents = null; // free readdir state
        try {
          if (stream.stream_ops.close) {
            stream.stream_ops.close(stream);
          }
        } catch (e) {
          throw e;
        } finally {
          FS.closeStream(stream.fd);
        }
        stream.fd = null;
      },
  isClosed(stream) {
        return stream.fd === null;
      },
  llseek(stream, offset, whence) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (!stream.seekable || !stream.stream_ops.llseek) {
          throw new FS.ErrnoError(70);
        }
        if (whence != 0 && whence != 1 && whence != 2) {
          throw new FS.ErrnoError(28);
        }
        stream.position = stream.stream_ops.llseek(stream, offset, whence);
        stream.ungotten = [];
        return stream.position;
      },
  read(stream, buffer, offset, length, position) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.read) {
          throw new FS.ErrnoError(28);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesRead = stream.stream_ops.read(stream, buffer, offset, length, position);
        if (!seeking) stream.position += bytesRead;
        return bytesRead;
      },
  write(stream, buffer, offset, length, position, canOwn) {
        assert(offset >= 0);
        if (length < 0 || position < 0) {
          throw new FS.ErrnoError(28);
        }
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(31);
        }
        if (!stream.stream_ops.write) {
          throw new FS.ErrnoError(28);
        }
        if (stream.seekable && stream.flags & 1024) {
          // seek to the end before writing in append mode
          FS.llseek(stream, 0, 2);
        }
        var seeking = typeof position != 'undefined';
        if (!seeking) {
          position = stream.position;
        } else if (!stream.seekable) {
          throw new FS.ErrnoError(70);
        }
        var bytesWritten = stream.stream_ops.write(stream, buffer, offset, length, position, canOwn);
        if (!seeking) stream.position += bytesWritten;
        return bytesWritten;
      },
  allocate(stream, offset, length) {
        if (FS.isClosed(stream)) {
          throw new FS.ErrnoError(8);
        }
        if (offset < 0 || length <= 0) {
          throw new FS.ErrnoError(28);
        }
        if ((stream.flags & 2097155) === 0) {
          throw new FS.ErrnoError(8);
        }
        if (!FS.isFile(stream.node.mode) && !FS.isDir(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (!stream.stream_ops.allocate) {
          throw new FS.ErrnoError(138);
        }
        stream.stream_ops.allocate(stream, offset, length);
      },
  mmap(stream, length, position, prot, flags) {
        // User requests writing to file (prot & PROT_WRITE != 0).
        // Checking if we have permissions to write to the file unless
        // MAP_PRIVATE flag is set. According to POSIX spec it is possible
        // to write to file opened in read-only mode with MAP_PRIVATE flag,
        // as all modifications will be visible only in the memory of
        // the current process.
        if ((prot & 2) !== 0
            && (flags & 2) === 0
            && (stream.flags & 2097155) !== 2) {
          throw new FS.ErrnoError(2);
        }
        if ((stream.flags & 2097155) === 1) {
          throw new FS.ErrnoError(2);
        }
        if (!stream.stream_ops.mmap) {
          throw new FS.ErrnoError(43);
        }
        return stream.stream_ops.mmap(stream, length, position, prot, flags);
      },
  msync(stream, buffer, offset, length, mmapFlags) {
        assert(offset >= 0);
        if (!stream.stream_ops.msync) {
          return 0;
        }
        return stream.stream_ops.msync(stream, buffer, offset, length, mmapFlags);
      },
  munmap:(stream) => 0,
  ioctl(stream, cmd, arg) {
        if (!stream.stream_ops.ioctl) {
          throw new FS.ErrnoError(59);
        }
        return stream.stream_ops.ioctl(stream, cmd, arg);
      },
  readFile(path, opts = {}) {
        opts.flags = opts.flags || 0;
        opts.encoding = opts.encoding || 'binary';
        if (opts.encoding !== 'utf8' && opts.encoding !== 'binary') {
          throw new Error(`Invalid encoding type "${opts.encoding}"`);
        }
        var ret;
        var stream = FS.open(path, opts.flags);
        var stat = FS.stat(path);
        var length = stat.size;
        var buf = new Uint8Array(length);
        FS.read(stream, buf, 0, length, 0);
        if (opts.encoding === 'utf8') {
          ret = UTF8ArrayToString(buf, 0);
        } else if (opts.encoding === 'binary') {
          ret = buf;
        }
        FS.close(stream);
        return ret;
      },
  writeFile(path, data, opts = {}) {
        opts.flags = opts.flags || 577;
        var stream = FS.open(path, opts.flags, opts.mode);
        if (typeof data == 'string') {
          var buf = new Uint8Array(lengthBytesUTF8(data)+1);
          var actualNumBytes = stringToUTF8Array(data, buf, 0, buf.length);
          FS.write(stream, buf, 0, actualNumBytes, undefined, opts.canOwn);
        } else if (ArrayBuffer.isView(data)) {
          FS.write(stream, data, 0, data.byteLength, undefined, opts.canOwn);
        } else {
          throw new Error('Unsupported data type');
        }
        FS.close(stream);
      },
  cwd:() => FS.currentPath,
  chdir(path) {
        var lookup = FS.lookupPath(path, { follow: true });
        if (lookup.node === null) {
          throw new FS.ErrnoError(44);
        }
        if (!FS.isDir(lookup.node.mode)) {
          throw new FS.ErrnoError(54);
        }
        var errCode = FS.nodePermissions(lookup.node, 'x');
        if (errCode) {
          throw new FS.ErrnoError(errCode);
        }
        FS.currentPath = lookup.path;
      },
  createDefaultDirectories() {
        FS.mkdir('/tmp');
        FS.mkdir('/home');
        FS.mkdir('/home/web_user');
      },
  createDefaultDevices() {
        // create /dev
        FS.mkdir('/dev');
        // setup /dev/null
        FS.registerDevice(FS.makedev(1, 3), {
          read: () => 0,
          write: (stream, buffer, offset, length, pos) => length,
        });
        FS.mkdev('/dev/null', FS.makedev(1, 3));
        // setup /dev/tty and /dev/tty1
        // stderr needs to print output using err() rather than out()
        // so we register a second tty just for it.
        TTY.register(FS.makedev(5, 0), TTY.default_tty_ops);
        TTY.register(FS.makedev(6, 0), TTY.default_tty1_ops);
        FS.mkdev('/dev/tty', FS.makedev(5, 0));
        FS.mkdev('/dev/tty1', FS.makedev(6, 0));
        // setup /dev/[u]random
        // use a buffer to avoid overhead of individual crypto calls per byte
        var randomBuffer = new Uint8Array(1024), randomLeft = 0;
        var randomByte = () => {
          if (randomLeft === 0) {
            randomLeft = randomFill(randomBuffer).byteLength;
          }
          return randomBuffer[--randomLeft];
        };
        FS.createDevice('/dev', 'random', randomByte);
        FS.createDevice('/dev', 'urandom', randomByte);
        // we're not going to emulate the actual shm device,
        // just create the tmp dirs that reside in it commonly
        FS.mkdir('/dev/shm');
        FS.mkdir('/dev/shm/tmp');
      },
  createSpecialDirectories() {
        // create /proc/self/fd which allows /proc/self/fd/6 => readlink gives the
        // name of the stream for fd 6 (see test_unistd_ttyname)
        FS.mkdir('/proc');
        var proc_self = FS.mkdir('/proc/self');
        FS.mkdir('/proc/self/fd');
        FS.mount({
          mount() {
            var node = FS.createNode(proc_self, 'fd', 16384 | 511 /* 0777 */, 73);
            node.node_ops = {
              lookup(parent, name) {
                var fd = +name;
                var stream = FS.getStreamChecked(fd);
                var ret = {
                  parent: null,
                  mount: { mountpoint: 'fake' },
                  node_ops: { readlink: () => stream.path },
                };
                ret.parent = ret; // make it look like a simple root node
                return ret;
              }
            };
            return node;
          }
        }, {}, '/proc/self/fd');
      },
  createStandardStreams() {
        // TODO deprecate the old functionality of a single
        // input / output callback and that utilizes FS.createDevice
        // and instead require a unique set of stream ops
  
        // by default, we symlink the standard streams to the
        // default tty devices. however, if the standard streams
        // have been overwritten we create a unique device for
        // them instead.
        if (Module['stdin']) {
          FS.createDevice('/dev', 'stdin', Module['stdin']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdin');
        }
        if (Module['stdout']) {
          FS.createDevice('/dev', 'stdout', null, Module['stdout']);
        } else {
          FS.symlink('/dev/tty', '/dev/stdout');
        }
        if (Module['stderr']) {
          FS.createDevice('/dev', 'stderr', null, Module['stderr']);
        } else {
          FS.symlink('/dev/tty1', '/dev/stderr');
        }
  
        // open default streams for the stdin, stdout and stderr devices
        var stdin = FS.open('/dev/stdin', 0);
        var stdout = FS.open('/dev/stdout', 1);
        var stderr = FS.open('/dev/stderr', 1);
        assert(stdin.fd === 0, `invalid handle for stdin (${stdin.fd})`);
        assert(stdout.fd === 1, `invalid handle for stdout (${stdout.fd})`);
        assert(stderr.fd === 2, `invalid handle for stderr (${stderr.fd})`);
      },
  ensureErrnoError() {
        if (FS.ErrnoError) return;
        FS.ErrnoError = /** @this{Object} */ function ErrnoError(errno, node) {
          // We set the `name` property to be able to identify `FS.ErrnoError`
          // - the `name` is a standard ECMA-262 property of error objects. Kind of good to have it anyway.
          // - when using PROXYFS, an error can come from an underlying FS
          // as different FS objects have their own FS.ErrnoError each,
          // the test `err instanceof FS.ErrnoError` won't detect an error coming from another filesystem, causing bugs.
          // we'll use the reliable test `err.name == "ErrnoError"` instead
          this.name = 'ErrnoError';
          this.node = node;
          this.setErrno = /** @this{Object} */ function(errno) {
            this.errno = errno;
            for (var key in ERRNO_CODES) {
              if (ERRNO_CODES[key] === errno) {
                this.code = key;
                break;
              }
            }
          };
          this.setErrno(errno);
          this.message = ERRNO_MESSAGES[errno];
  
          // Try to get a maximally helpful stack trace. On Node.js, getting Error.stack
          // now ensures it shows what we want.
          if (this.stack) {
            // Define the stack property for Node.js 4, which otherwise errors on the next line.
            Object.defineProperty(this, "stack", { value: (new Error).stack, writable: true });
            this.stack = demangleAll(this.stack);
          }
        };
        FS.ErrnoError.prototype = new Error();
        FS.ErrnoError.prototype.constructor = FS.ErrnoError;
        // Some errors may happen quite a bit, to avoid overhead we reuse them (and suffer a lack of stack info)
        [44].forEach((code) => {
          FS.genericErrors[code] = new FS.ErrnoError(code);
          FS.genericErrors[code].stack = '<generic error, no stack>';
        });
      },
  staticInit() {
        FS.ensureErrnoError();
  
        FS.nameTable = new Array(4096);
  
        FS.mount(MEMFS, {}, '/');
  
        FS.createDefaultDirectories();
        FS.createDefaultDevices();
        FS.createSpecialDirectories();
  
        FS.filesystems = {
          'MEMFS': MEMFS,
        };
      },
  init(input, output, error) {
        assert(!FS.init.initialized, 'FS.init was previously called. If you want to initialize later with custom parameters, remove any earlier calls (note that one is automatically added to the generated code)');
        FS.init.initialized = true;
  
        FS.ensureErrnoError();
  
        // Allow Module.stdin etc. to provide defaults, if none explicitly passed to us here
        Module['stdin'] = input || Module['stdin'];
        Module['stdout'] = output || Module['stdout'];
        Module['stderr'] = error || Module['stderr'];
  
        FS.createStandardStreams();
      },
  quit() {
        FS.init.initialized = false;
        // force-flush all streams, so we get musl std streams printed out
        _fflush(0);
        // close all of our streams
        for (var i = 0; i < FS.streams.length; i++) {
          var stream = FS.streams[i];
          if (!stream) {
            continue;
          }
          FS.close(stream);
        }
      },
  findObject(path, dontResolveLastLink) {
        var ret = FS.analyzePath(path, dontResolveLastLink);
        if (!ret.exists) {
          return null;
        }
        return ret.object;
      },
  analyzePath(path, dontResolveLastLink) {
        // operate from within the context of the symlink's target
        try {
          var lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          path = lookup.path;
        } catch (e) {
        }
        var ret = {
          isRoot: false, exists: false, error: 0, name: null, path: null, object: null,
          parentExists: false, parentPath: null, parentObject: null
        };
        try {
          var lookup = FS.lookupPath(path, { parent: true });
          ret.parentExists = true;
          ret.parentPath = lookup.path;
          ret.parentObject = lookup.node;
          ret.name = PATH.basename(path);
          lookup = FS.lookupPath(path, { follow: !dontResolveLastLink });
          ret.exists = true;
          ret.path = lookup.path;
          ret.object = lookup.node;
          ret.name = lookup.node.name;
          ret.isRoot = lookup.path === '/';
        } catch (e) {
          ret.error = e.errno;
        };
        return ret;
      },
  createPath(parent, path, canRead, canWrite) {
        parent = typeof parent == 'string' ? parent : FS.getPath(parent);
        var parts = path.split('/').reverse();
        while (parts.length) {
          var part = parts.pop();
          if (!part) continue;
          var current = PATH.join2(parent, part);
          try {
            FS.mkdir(current);
          } catch (e) {
            // ignore EEXIST
          }
          parent = current;
        }
        return current;
      },
  createFile(parent, name, properties, canRead, canWrite) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(canRead, canWrite);
        return FS.create(path, mode);
      },
  createDataFile(parent, name, data, canRead, canWrite, canOwn) {
        var path = name;
        if (parent) {
          parent = typeof parent == 'string' ? parent : FS.getPath(parent);
          path = name ? PATH.join2(parent, name) : parent;
        }
        var mode = FS_getMode(canRead, canWrite);
        var node = FS.create(path, mode);
        if (data) {
          if (typeof data == 'string') {
            var arr = new Array(data.length);
            for (var i = 0, len = data.length; i < len; ++i) arr[i] = data.charCodeAt(i);
            data = arr;
          }
          // make sure we can write to the file
          FS.chmod(node, mode | 146);
          var stream = FS.open(node, 577);
          FS.write(stream, data, 0, data.length, 0, canOwn);
          FS.close(stream);
          FS.chmod(node, mode);
        }
      },
  createDevice(parent, name, input, output) {
        var path = PATH.join2(typeof parent == 'string' ? parent : FS.getPath(parent), name);
        var mode = FS_getMode(!!input, !!output);
        if (!FS.createDevice.major) FS.createDevice.major = 64;
        var dev = FS.makedev(FS.createDevice.major++, 0);
        // Create a fake device that a set of stream ops to emulate
        // the old behavior.
        FS.registerDevice(dev, {
          open(stream) {
            stream.seekable = false;
          },
          close(stream) {
            // flush any pending line data
            if (output && output.buffer && output.buffer.length) {
              output(10);
            }
          },
          read(stream, buffer, offset, length, pos /* ignored */) {
            var bytesRead = 0;
            for (var i = 0; i < length; i++) {
              var result;
              try {
                result = input();
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
              if (result === undefined && bytesRead === 0) {
                throw new FS.ErrnoError(6);
              }
              if (result === null || result === undefined) break;
              bytesRead++;
              buffer[offset+i] = result;
            }
            if (bytesRead) {
              stream.node.timestamp = Date.now();
            }
            return bytesRead;
          },
          write(stream, buffer, offset, length, pos) {
            for (var i = 0; i < length; i++) {
              try {
                output(buffer[offset+i]);
              } catch (e) {
                throw new FS.ErrnoError(29);
              }
            }
            if (length) {
              stream.node.timestamp = Date.now();
            }
            return i;
          }
        });
        return FS.mkdev(path, mode, dev);
      },
  forceLoadFile(obj) {
        if (obj.isDevice || obj.isFolder || obj.link || obj.contents) return true;
        if (typeof XMLHttpRequest != 'undefined') {
          throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
        } else if (read_) {
          // Command-line.
          try {
            // WARNING: Can't read binary files in V8's d8 or tracemonkey's js, as
            //          read() will try to parse UTF8.
            obj.contents = intArrayFromString(read_(obj.url), true);
            obj.usedBytes = obj.contents.length;
          } catch (e) {
            throw new FS.ErrnoError(29);
          }
        } else {
          throw new Error('Cannot load without read() or XMLHttpRequest.');
        }
      },
  createLazyFile(parent, name, url, canRead, canWrite) {
        // Lazy chunked Uint8Array (implements get and length from Uint8Array). Actual getting is abstracted away for eventual reuse.
        /** @constructor */
        function LazyUint8Array() {
          this.lengthKnown = false;
          this.chunks = []; // Loaded chunks. Index is the chunk number
        }
        LazyUint8Array.prototype.get = /** @this{Object} */ function LazyUint8Array_get(idx) {
          if (idx > this.length-1 || idx < 0) {
            return undefined;
          }
          var chunkOffset = idx % this.chunkSize;
          var chunkNum = (idx / this.chunkSize)|0;
          return this.getter(chunkNum)[chunkOffset];
        };
        LazyUint8Array.prototype.setDataGetter = function LazyUint8Array_setDataGetter(getter) {
          this.getter = getter;
        };
        LazyUint8Array.prototype.cacheLength = function LazyUint8Array_cacheLength() {
          // Find length
          var xhr = new XMLHttpRequest();
          xhr.open('HEAD', url, false);
          xhr.send(null);
          if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
          var datalength = Number(xhr.getResponseHeader("Content-length"));
          var header;
          var hasByteServing = (header = xhr.getResponseHeader("Accept-Ranges")) && header === "bytes";
          var usesGzip = (header = xhr.getResponseHeader("Content-Encoding")) && header === "gzip";
  
          var chunkSize = 1024*1024; // Chunk size in bytes
  
          if (!hasByteServing) chunkSize = datalength;
  
          // Function to get a range from the remote URL.
          var doXHR = (from, to) => {
            if (from > to) throw new Error("invalid range (" + from + ", " + to + ") or no bytes requested!");
            if (to > datalength-1) throw new Error("only " + datalength + " bytes available! programmer error!");
  
            // TODO: Use mozResponseArrayBuffer, responseStream, etc. if available.
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, false);
            if (datalength !== chunkSize) xhr.setRequestHeader("Range", "bytes=" + from + "-" + to);
  
            // Some hints to the browser that we want binary data.
            xhr.responseType = 'arraybuffer';
            if (xhr.overrideMimeType) {
              xhr.overrideMimeType('text/plain; charset=x-user-defined');
            }
  
            xhr.send(null);
            if (!(xhr.status >= 200 && xhr.status < 300 || xhr.status === 304)) throw new Error("Couldn't load " + url + ". Status: " + xhr.status);
            if (xhr.response !== undefined) {
              return new Uint8Array(/** @type{Array<number>} */(xhr.response || []));
            }
            return intArrayFromString(xhr.responseText || '', true);
          };
          var lazyArray = this;
          lazyArray.setDataGetter((chunkNum) => {
            var start = chunkNum * chunkSize;
            var end = (chunkNum+1) * chunkSize - 1; // including this byte
            end = Math.min(end, datalength-1); // if datalength-1 is selected, this is the last block
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') {
              lazyArray.chunks[chunkNum] = doXHR(start, end);
            }
            if (typeof lazyArray.chunks[chunkNum] == 'undefined') throw new Error('doXHR failed!');
            return lazyArray.chunks[chunkNum];
          });
  
          if (usesGzip || !datalength) {
            // if the server uses gzip or doesn't supply the length, we have to download the whole file to get the (uncompressed) length
            chunkSize = datalength = 1; // this will force getter(0)/doXHR do download the whole file
            datalength = this.getter(0).length;
            chunkSize = datalength;
            out("LazyFiles on gzip forces download of the whole file when length is accessed");
          }
  
          this._length = datalength;
          this._chunkSize = chunkSize;
          this.lengthKnown = true;
        };
        if (typeof XMLHttpRequest != 'undefined') {
          if (!ENVIRONMENT_IS_WORKER) throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
          var lazyArray = new LazyUint8Array();
          Object.defineProperties(lazyArray, {
            length: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._length;
              }
            },
            chunkSize: {
              get: /** @this{Object} */ function() {
                if (!this.lengthKnown) {
                  this.cacheLength();
                }
                return this._chunkSize;
              }
            }
          });
  
          var properties = { isDevice: false, contents: lazyArray };
        } else {
          var properties = { isDevice: false, url: url };
        }
  
        var node = FS.createFile(parent, name, properties, canRead, canWrite);
        // This is a total hack, but I want to get this lazy file code out of the
        // core of MEMFS. If we want to keep this lazy file concept I feel it should
        // be its own thin LAZYFS proxying calls to MEMFS.
        if (properties.contents) {
          node.contents = properties.contents;
        } else if (properties.url) {
          node.contents = null;
          node.url = properties.url;
        }
        // Add a function that defers querying the file size until it is asked the first time.
        Object.defineProperties(node, {
          usedBytes: {
            get: /** @this {FSNode} */ function() { return this.contents.length; }
          }
        });
        // override each stream op with one that tries to force load the lazy file first
        var stream_ops = {};
        var keys = Object.keys(node.stream_ops);
        keys.forEach((key) => {
          var fn = node.stream_ops[key];
          stream_ops[key] = function forceLoadLazyFile() {
            FS.forceLoadFile(node);
            return fn.apply(null, arguments);
          };
        });
        function writeChunks(stream, buffer, offset, length, position) {
          var contents = stream.node.contents;
          if (position >= contents.length)
            return 0;
          var size = Math.min(contents.length - position, length);
          assert(size >= 0);
          if (contents.slice) { // normal array
            for (var i = 0; i < size; i++) {
              buffer[offset + i] = contents[position + i];
            }
          } else {
            for (var i = 0; i < size; i++) { // LazyUint8Array from sync binary XHR
              buffer[offset + i] = contents.get(position + i);
            }
          }
          return size;
        }
        // use a custom read function
        stream_ops.read = (stream, buffer, offset, length, position) => {
          FS.forceLoadFile(node);
          return writeChunks(stream, buffer, offset, length, position)
        };
        // use a custom mmap function
        stream_ops.mmap = (stream, length, position, prot, flags) => {
          FS.forceLoadFile(node);
          var ptr = mmapAlloc(length);
          if (!ptr) {
            throw new FS.ErrnoError(48);
          }
          writeChunks(stream, HEAP8, ptr, length, position);
          return { ptr, allocated: true };
        };
        node.stream_ops = stream_ops;
        return node;
      },
  absolutePath() {
        abort('FS.absolutePath has been removed; use PATH_FS.resolve instead');
      },
  createFolder() {
        abort('FS.createFolder has been removed; use FS.mkdir instead');
      },
  createLink() {
        abort('FS.createLink has been removed; use FS.symlink instead');
      },
  joinPath() {
        abort('FS.joinPath has been removed; use PATH.join instead');
      },
  mmapAlloc() {
        abort('FS.mmapAlloc has been replaced by the top level function mmapAlloc');
      },
  standardizePath() {
        abort('FS.standardizePath has been removed; use PATH.normalize instead');
      },
  };
  
  var SYSCALLS = {
  DEFAULT_POLLMASK:5,
  calculateAt(dirfd, path, allowEmpty) {
        if (PATH.isAbs(path)) {
          return path;
        }
        // relative path
        var dir;
        if (dirfd === -100) {
          dir = FS.cwd();
        } else {
          var dirstream = SYSCALLS.getStreamFromFD(dirfd);
          dir = dirstream.path;
        }
        if (path.length == 0) {
          if (!allowEmpty) {
            throw new FS.ErrnoError(44);;
          }
          return dir;
        }
        return PATH.join2(dir, path);
      },
  doStat(func, path, buf) {
        try {
          var stat = func(path);
        } catch (e) {
          if (e && e.node && PATH.normalize(path) !== PATH.normalize(FS.getPath(e.node))) {
            // an error occurred while trying to look up the path; we should just report ENOTDIR
            return -54;
          }
          throw e;
        }
        HEAP32[((buf)>>2)] = stat.dev;
        HEAP32[(((buf)+(4))>>2)] = stat.mode;
        HEAPU32[(((buf)+(8))>>2)] = stat.nlink;
        HEAP32[(((buf)+(12))>>2)] = stat.uid;
        HEAP32[(((buf)+(16))>>2)] = stat.gid;
        HEAP32[(((buf)+(20))>>2)] = stat.rdev;
        (tempI64 = [stat.size>>>0,(tempDouble = stat.size,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(24))>>2)] = tempI64[0],HEAP32[(((buf)+(28))>>2)] = tempI64[1]);
        HEAP32[(((buf)+(32))>>2)] = 4096;
        HEAP32[(((buf)+(36))>>2)] = stat.blocks;
        var atime = stat.atime.getTime();
        var mtime = stat.mtime.getTime();
        var ctime = stat.ctime.getTime();
        (tempI64 = [Math.floor(atime / 1000)>>>0,(tempDouble = Math.floor(atime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(40))>>2)] = tempI64[0],HEAP32[(((buf)+(44))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(48))>>2)] = (atime % 1000) * 1000;
        (tempI64 = [Math.floor(mtime / 1000)>>>0,(tempDouble = Math.floor(mtime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(56))>>2)] = tempI64[0],HEAP32[(((buf)+(60))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(64))>>2)] = (mtime % 1000) * 1000;
        (tempI64 = [Math.floor(ctime / 1000)>>>0,(tempDouble = Math.floor(ctime / 1000),(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(72))>>2)] = tempI64[0],HEAP32[(((buf)+(76))>>2)] = tempI64[1]);
        HEAPU32[(((buf)+(80))>>2)] = (ctime % 1000) * 1000;
        (tempI64 = [stat.ino>>>0,(tempDouble = stat.ino,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[(((buf)+(88))>>2)] = tempI64[0],HEAP32[(((buf)+(92))>>2)] = tempI64[1]);
        return 0;
      },
  doMsync(addr, stream, len, flags, offset) {
        if (!FS.isFile(stream.node.mode)) {
          throw new FS.ErrnoError(43);
        }
        if (flags & 2) {
          // MAP_PRIVATE calls need not to be synced back to underlying fs
          return 0;
        }
        var buffer = HEAPU8.slice(addr, addr + len);
        FS.msync(stream, buffer, offset, len, flags);
      },
  varargs:undefined,
  get() {
        assert(SYSCALLS.varargs != undefined);
        // the `+` prepended here is necessary to convince the JSCompiler that varargs is indeed a number.
        var ret = HEAP32[((+SYSCALLS.varargs)>>2)];
        SYSCALLS.varargs += 4;
        return ret;
      },
  getp() { return SYSCALLS.get() },
  getStr(ptr) {
        var ret = UTF8ToString(ptr);
        return ret;
      },
  getStreamFromFD(fd) {
        var stream = FS.getStreamChecked(fd);
        return stream;
      },
  };
  function ___syscall_fcntl64(fd, cmd, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (cmd) {
        case 0: {
          var arg = SYSCALLS.get();
          if (arg < 0) {
            return -28;
          }
          while (FS.streams[arg]) {
            arg++;
          }
          var newStream;
          newStream = FS.createStream(stream, arg);
          return newStream.fd;
        }
        case 1:
        case 2:
          return 0;  // FD_CLOEXEC makes no sense for a single process.
        case 3:
          return stream.flags;
        case 4: {
          var arg = SYSCALLS.get();
          stream.flags |= arg;
          return 0;
        }
        case 5: {
          var arg = SYSCALLS.getp();
          var offset = 0;
          // We're always unlocked.
          HEAP16[(((arg)+(offset))>>1)] = 2;
          return 0;
        }
        case 6:
        case 7:
          return 0; // Pretend that the locking is successful.
        case 16:
        case 8:
          return -28; // These are for sockets. We don't have them fully implemented yet.
        case 9:
          // musl trusts getown return values, due to a bug where they must be, as they overlap with errors. just return -1 here, so fcntl() returns that, and we set errno ourselves.
          setErrNo(28);
          return -1;
        default: {
          return -28;
        }
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_ioctl(fd, op, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      switch (op) {
        case 21509: {
          if (!stream.tty) return -59;
          return 0;
        }
        case 21505: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcgets) {
            var termios = stream.tty.ops.ioctl_tcgets(stream);
            var argp = SYSCALLS.getp();
            HEAP32[((argp)>>2)] = termios.c_iflag || 0;
            HEAP32[(((argp)+(4))>>2)] = termios.c_oflag || 0;
            HEAP32[(((argp)+(8))>>2)] = termios.c_cflag || 0;
            HEAP32[(((argp)+(12))>>2)] = termios.c_lflag || 0;
            for (var i = 0; i < 32; i++) {
              HEAP8[(((argp + i)+(17))>>0)] = termios.c_cc[i] || 0;
            }
            return 0;
          }
          return 0;
        }
        case 21510:
        case 21511:
        case 21512: {
          if (!stream.tty) return -59;
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21506:
        case 21507:
        case 21508: {
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tcsets) {
            var argp = SYSCALLS.getp();
            var c_iflag = HEAP32[((argp)>>2)];
            var c_oflag = HEAP32[(((argp)+(4))>>2)];
            var c_cflag = HEAP32[(((argp)+(8))>>2)];
            var c_lflag = HEAP32[(((argp)+(12))>>2)];
            var c_cc = []
            for (var i = 0; i < 32; i++) {
              c_cc.push(HEAP8[(((argp + i)+(17))>>0)]);
            }
            return stream.tty.ops.ioctl_tcsets(stream.tty, op, { c_iflag, c_oflag, c_cflag, c_lflag, c_cc });
          }
          return 0; // no-op, not actually adjusting terminal settings
        }
        case 21519: {
          if (!stream.tty) return -59;
          var argp = SYSCALLS.getp();
          HEAP32[((argp)>>2)] = 0;
          return 0;
        }
        case 21520: {
          if (!stream.tty) return -59;
          return -28; // not supported
        }
        case 21531: {
          var argp = SYSCALLS.getp();
          return FS.ioctl(stream, op, argp);
        }
        case 21523: {
          // TODO: in theory we should write to the winsize struct that gets
          // passed in, but for now musl doesn't read anything on it
          if (!stream.tty) return -59;
          if (stream.tty.ops.ioctl_tiocgwinsz) {
            var winsize = stream.tty.ops.ioctl_tiocgwinsz(stream.tty);
            var argp = SYSCALLS.getp();
            HEAP16[((argp)>>1)] = winsize[0];
            HEAP16[(((argp)+(2))>>1)] = winsize[1];
          }
          return 0;
        }
        case 21524: {
          // TODO: technically, this ioctl call should change the window size.
          // but, since emscripten doesn't have any concept of a terminal window
          // yet, we'll just silently throw it away as we do TIOCGWINSZ
          if (!stream.tty) return -59;
          return 0;
        }
        case 21515: {
          if (!stream.tty) return -59;
          return 0;
        }
        default: return -28; // not supported
      }
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  function ___syscall_openat(dirfd, path, flags, varargs) {
  SYSCALLS.varargs = varargs;
  try {
  
      path = SYSCALLS.getStr(path);
      path = SYSCALLS.calculateAt(dirfd, path);
      var mode = varargs ? SYSCALLS.get() : 0;
      return FS.open(path, flags, mode).fd;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return -e.errno;
  }
  }

  var nowIsMonotonic = 1;
  var __emscripten_get_now_is_monotonic = () => nowIsMonotonic;

  var _abort = () => {
      abort('native code called abort()');
    };

  var _emscripten_date_now = () => Date.now();

  var _emscripten_get_now;
      // Modern environment where performance.now() is supported:
      // N.B. a shorter form "_emscripten_get_now = performance.now;" is
      // unfortunately not allowed even in current browsers (e.g. FF Nightly 75).
      _emscripten_get_now = () => performance.now();
  ;

  var getHeapMax = () =>
      // Stay one Wasm page short of 4GB: while e.g. Chrome is able to allocate
      // full 4GB Wasm memories, the size will wrap back to 0 bytes in Wasm side
      // for any code that deals with heap sizes, which would require special
      // casing all heap size related code to treat 0 specially.
      2147483648;
  
  var growMemory = (size) => {
      var b = wasmMemory.buffer;
      var pages = (size - b.byteLength + 65535) / 65536;
      try {
        // round size grow request up to wasm page size (fixed 64KB per spec)
        wasmMemory.grow(pages); // .grow() takes a delta compared to the previous size
        updateMemoryViews();
        return 1 /*success*/;
      } catch(e) {
        err(`growMemory: Attempted to grow heap from ${b.byteLength} bytes to ${size} bytes, but got error: ${e}`);
      }
      // implicit 0 return to save code size (caller will cast "undefined" into 0
      // anyhow)
    };
  var _emscripten_resize_heap = (requestedSize) => {
      var oldSize = HEAPU8.length;
      // With CAN_ADDRESS_2GB or MEMORY64, pointers are already unsigned.
      requestedSize >>>= 0;
      // With multithreaded builds, races can happen (another thread might increase the size
      // in between), so return a failure, and let the caller retry.
      assert(requestedSize > oldSize);
  
      // Memory resize rules:
      // 1.  Always increase heap size to at least the requested size, rounded up
      //     to next page multiple.
      // 2a. If MEMORY_GROWTH_LINEAR_STEP == -1, excessively resize the heap
      //     geometrically: increase the heap size according to
      //     MEMORY_GROWTH_GEOMETRIC_STEP factor (default +20%), At most
      //     overreserve by MEMORY_GROWTH_GEOMETRIC_CAP bytes (default 96MB).
      // 2b. If MEMORY_GROWTH_LINEAR_STEP != -1, excessively resize the heap
      //     linearly: increase the heap size by at least
      //     MEMORY_GROWTH_LINEAR_STEP bytes.
      // 3.  Max size for the heap is capped at 2048MB-WASM_PAGE_SIZE, or by
      //     MAXIMUM_MEMORY, or by ASAN limit, depending on which is smallest
      // 4.  If we were unable to allocate as much memory, it may be due to
      //     over-eager decision to excessively reserve due to (3) above.
      //     Hence if an allocation fails, cut down on the amount of excess
      //     growth, in an attempt to succeed to perform a smaller allocation.
  
      // A limit is set for how much we can grow. We should not exceed that
      // (the wasm binary specifies it, so if we tried, we'd fail anyhow).
      var maxHeapSize = getHeapMax();
      if (requestedSize > maxHeapSize) {
        err(`Cannot enlarge memory, requested ${requestedSize} bytes, but the limit is ${maxHeapSize} bytes!`);
        return false;
      }
  
      var alignUp = (x, multiple) => x + (multiple - x % multiple) % multiple;
  
      // Loop through potential heap size increases. If we attempt a too eager
      // reservation that fails, cut down on the attempted size and reserve a
      // smaller bump instead. (max 3 times, chosen somewhat arbitrarily)
      for (var cutDown = 1; cutDown <= 4; cutDown *= 2) {
        var overGrownHeapSize = oldSize * (1 + 0.2 / cutDown); // ensure geometric growth
        // but limit overreserving (default to capping at +96MB overgrowth at most)
        overGrownHeapSize = Math.min(overGrownHeapSize, requestedSize + 100663296 );
  
        var newSize = Math.min(maxHeapSize, alignUp(Math.max(requestedSize, overGrownHeapSize), 65536));
  
        var replacement = growMemory(newSize);
        if (replacement) {
  
          return true;
        }
      }
      err(`Failed to grow the heap from ${oldSize} bytes to ${newSize} bytes, not enough memory!`);
      return false;
    };

  var ENV = {
  };
  
  var getExecutableName = () => {
      return thisProgram || './this.program';
    };
  var getEnvStrings = () => {
      if (!getEnvStrings.strings) {
        // Default values.
        // Browser language detection #8751
        var lang = ((typeof navigator == 'object' && navigator.languages && navigator.languages[0]) || 'C').replace('-', '_') + '.UTF-8';
        var env = {
          'USER': 'web_user',
          'LOGNAME': 'web_user',
          'PATH': '/',
          'PWD': '/',
          'HOME': '/home/web_user',
          'LANG': lang,
          '_': getExecutableName()
        };
        // Apply the user-provided values, if any.
        for (var x in ENV) {
          // x is a key in ENV; if ENV[x] is undefined, that means it was
          // explicitly set to be so. We allow user code to do that to
          // force variables with default values to remain unset.
          if (ENV[x] === undefined) delete env[x];
          else env[x] = ENV[x];
        }
        var strings = [];
        for (var x in env) {
          strings.push(`${x}=${env[x]}`);
        }
        getEnvStrings.strings = strings;
      }
      return getEnvStrings.strings;
    };
  
  var stringToAscii = (str, buffer) => {
      for (var i = 0; i < str.length; ++i) {
        assert(str.charCodeAt(i) === (str.charCodeAt(i) & 0xff));
        HEAP8[((buffer++)>>0)] = str.charCodeAt(i);
      }
      // Null-terminate the string
      HEAP8[((buffer)>>0)] = 0;
    };
  
  var _environ_get = (__environ, environ_buf) => {
      var bufSize = 0;
      getEnvStrings().forEach((string, i) => {
        var ptr = environ_buf + bufSize;
        HEAPU32[(((__environ)+(i*4))>>2)] = ptr;
        stringToAscii(string, ptr);
        bufSize += string.length + 1;
      });
      return 0;
    };

  
  var _environ_sizes_get = (penviron_count, penviron_buf_size) => {
      var strings = getEnvStrings();
      HEAPU32[((penviron_count)>>2)] = strings.length;
      var bufSize = 0;
      strings.forEach((string) => bufSize += string.length + 1);
      HEAPU32[((penviron_buf_size)>>2)] = bufSize;
      return 0;
    };

  function _fd_close(fd) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.close(stream);
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  /** @param {number=} offset */
  var doReadv = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.read(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (curr < len) break; // nothing more to read
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_read(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doReadv(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  
  var convertI32PairToI53Checked = (lo, hi) => {
      assert(lo == (lo >>> 0) || lo == (lo|0)); // lo should either be a i32 or a u32
      assert(hi === (hi|0));                    // hi should be a i32
      return ((hi + 0x200000) >>> 0 < 0x400001 - !!lo) ? (lo >>> 0) + hi * 4294967296 : NaN;
    };
  function _fd_seek(fd,offset_low, offset_high,whence,newOffset) {
    var offset = convertI32PairToI53Checked(offset_low, offset_high);;
  
    
  try {
  
      if (isNaN(offset)) return 61;
      var stream = SYSCALLS.getStreamFromFD(fd);
      FS.llseek(stream, offset, whence);
      (tempI64 = [stream.position>>>0,(tempDouble = stream.position,(+(Math.abs(tempDouble))) >= 1.0 ? (tempDouble > 0.0 ? (+(Math.floor((tempDouble)/4294967296.0)))>>>0 : (~~((+(Math.ceil((tempDouble - +(((~~(tempDouble)))>>>0))/4294967296.0)))))>>>0) : 0)], HEAP32[((newOffset)>>2)] = tempI64[0],HEAP32[(((newOffset)+(4))>>2)] = tempI64[1]);
      if (stream.getdents && offset === 0 && whence === 0) stream.getdents = null; // reset readdir state
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  ;
  }

  /** @param {number=} offset */
  var doWritev = (stream, iov, iovcnt, offset) => {
      var ret = 0;
      for (var i = 0; i < iovcnt; i++) {
        var ptr = HEAPU32[((iov)>>2)];
        var len = HEAPU32[(((iov)+(4))>>2)];
        iov += 8;
        var curr = FS.write(stream, HEAP8, ptr, len, offset);
        if (curr < 0) return -1;
        ret += curr;
        if (typeof offset !== 'undefined') {
          offset += curr;
        }
      }
      return ret;
    };
  
  function _fd_write(fd, iov, iovcnt, pnum) {
  try {
  
      var stream = SYSCALLS.getStreamFromFD(fd);
      var num = doWritev(stream, iov, iovcnt);
      HEAPU32[((pnum)>>2)] = num;
      return 0;
    } catch (e) {
    if (typeof FS == 'undefined' || !(e.name === 'ErrnoError')) throw e;
    return e.errno;
  }
  }

  var _llvm_eh_typeid_for = (type) => type;

  
  var runtimeKeepaliveCounter = 0;
  var keepRuntimeAlive = () => noExitRuntime || runtimeKeepaliveCounter > 0;
  
  var _proc_exit = (code) => {
      EXITSTATUS = code;
      if (!keepRuntimeAlive()) {
        if (Module['onExit']) Module['onExit'](code);
        ABORT = true;
      }
      quit_(code, new ExitStatus(code));
    };

  var isLeapYear = (year) => year%4 === 0 && (year%100 !== 0 || year%400 === 0);
  
  var arraySum = (array, index) => {
      var sum = 0;
      for (var i = 0; i <= index; sum += array[i++]) {
        // no-op
      }
      return sum;
    };
  
  
  var MONTH_DAYS_LEAP = [31,29,31,30,31,30,31,31,30,31,30,31];
  
  var MONTH_DAYS_REGULAR = [31,28,31,30,31,30,31,31,30,31,30,31];
  var addDays = (date, days) => {
      var newDate = new Date(date.getTime());
      while (days > 0) {
        var leap = isLeapYear(newDate.getFullYear());
        var currentMonth = newDate.getMonth();
        var daysInCurrentMonth = (leap ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR)[currentMonth];
  
        if (days > daysInCurrentMonth-newDate.getDate()) {
          // we spill over to next month
          days -= (daysInCurrentMonth-newDate.getDate()+1);
          newDate.setDate(1);
          if (currentMonth < 11) {
            newDate.setMonth(currentMonth+1)
          } else {
            newDate.setMonth(0);
            newDate.setFullYear(newDate.getFullYear()+1);
          }
        } else {
          // we stay in current month
          newDate.setDate(newDate.getDate()+days);
          return newDate;
        }
      }
  
      return newDate;
    };
  
  
  
  
  var writeArrayToMemory = (array, buffer) => {
      assert(array.length >= 0, 'writeArrayToMemory array must have a length (should be an array or typed array)')
      HEAP8.set(array, buffer);
    };
  
  var _strftime = (s, maxsize, format, tm) => {
      // size_t strftime(char *restrict s, size_t maxsize, const char *restrict format, const struct tm *restrict timeptr);
      // http://pubs.opengroup.org/onlinepubs/009695399/functions/strftime.html
  
      var tm_zone = HEAPU32[(((tm)+(40))>>2)];
  
      var date = {
        tm_sec: HEAP32[((tm)>>2)],
        tm_min: HEAP32[(((tm)+(4))>>2)],
        tm_hour: HEAP32[(((tm)+(8))>>2)],
        tm_mday: HEAP32[(((tm)+(12))>>2)],
        tm_mon: HEAP32[(((tm)+(16))>>2)],
        tm_year: HEAP32[(((tm)+(20))>>2)],
        tm_wday: HEAP32[(((tm)+(24))>>2)],
        tm_yday: HEAP32[(((tm)+(28))>>2)],
        tm_isdst: HEAP32[(((tm)+(32))>>2)],
        tm_gmtoff: HEAP32[(((tm)+(36))>>2)],
        tm_zone: tm_zone ? UTF8ToString(tm_zone) : ''
      };
      
  
      var pattern = UTF8ToString(format);
  
      // expand format
      var EXPANSION_RULES_1 = {
        '%c': '%a %b %d %H:%M:%S %Y',     // Replaced by the locale's appropriate date and time representation - e.g., Mon Aug  3 14:02:01 2013
        '%D': '%m/%d/%y',                 // Equivalent to %m / %d / %y
        '%F': '%Y-%m-%d',                 // Equivalent to %Y - %m - %d
        '%h': '%b',                       // Equivalent to %b
        '%r': '%I:%M:%S %p',              // Replaced by the time in a.m. and p.m. notation
        '%R': '%H:%M',                    // Replaced by the time in 24-hour notation
        '%T': '%H:%M:%S',                 // Replaced by the time
        '%x': '%m/%d/%y',                 // Replaced by the locale's appropriate date representation
        '%X': '%H:%M:%S',                 // Replaced by the locale's appropriate time representation
        // Modified Conversion Specifiers
        '%Ec': '%c',                      // Replaced by the locale's alternative appropriate date and time representation.
        '%EC': '%C',                      // Replaced by the name of the base year (period) in the locale's alternative representation.
        '%Ex': '%m/%d/%y',                // Replaced by the locale's alternative date representation.
        '%EX': '%H:%M:%S',                // Replaced by the locale's alternative time representation.
        '%Ey': '%y',                      // Replaced by the offset from %EC (year only) in the locale's alternative representation.
        '%EY': '%Y',                      // Replaced by the full alternative year representation.
        '%Od': '%d',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading zeros if there is any alternative symbol for zero; otherwise, with leading <space> characters.
        '%Oe': '%e',                      // Replaced by the day of the month, using the locale's alternative numeric symbols, filled as needed with leading <space> characters.
        '%OH': '%H',                      // Replaced by the hour (24-hour clock) using the locale's alternative numeric symbols.
        '%OI': '%I',                      // Replaced by the hour (12-hour clock) using the locale's alternative numeric symbols.
        '%Om': '%m',                      // Replaced by the month using the locale's alternative numeric symbols.
        '%OM': '%M',                      // Replaced by the minutes using the locale's alternative numeric symbols.
        '%OS': '%S',                      // Replaced by the seconds using the locale's alternative numeric symbols.
        '%Ou': '%u',                      // Replaced by the weekday as a number in the locale's alternative representation (Monday=1).
        '%OU': '%U',                      // Replaced by the week number of the year (Sunday as the first day of the week, rules corresponding to %U ) using the locale's alternative numeric symbols.
        '%OV': '%V',                      // Replaced by the week number of the year (Monday as the first day of the week, rules corresponding to %V ) using the locale's alternative numeric symbols.
        '%Ow': '%w',                      // Replaced by the number of the weekday (Sunday=0) using the locale's alternative numeric symbols.
        '%OW': '%W',                      // Replaced by the week number of the year (Monday as the first day of the week) using the locale's alternative numeric symbols.
        '%Oy': '%y',                      // Replaced by the year (offset from %C ) using the locale's alternative numeric symbols.
      };
      for (var rule in EXPANSION_RULES_1) {
        pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_1[rule]);
      }
  
      var WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
      function leadingSomething(value, digits, character) {
        var str = typeof value == 'number' ? value.toString() : (value || '');
        while (str.length < digits) {
          str = character[0]+str;
        }
        return str;
      }
  
      function leadingNulls(value, digits) {
        return leadingSomething(value, digits, '0');
      }
  
      function compareByDay(date1, date2) {
        function sgn(value) {
          return value < 0 ? -1 : (value > 0 ? 1 : 0);
        }
  
        var compare;
        if ((compare = sgn(date1.getFullYear()-date2.getFullYear())) === 0) {
          if ((compare = sgn(date1.getMonth()-date2.getMonth())) === 0) {
            compare = sgn(date1.getDate()-date2.getDate());
          }
        }
        return compare;
      }
  
      function getFirstWeekStartDate(janFourth) {
          switch (janFourth.getDay()) {
            case 0: // Sunday
              return new Date(janFourth.getFullYear()-1, 11, 29);
            case 1: // Monday
              return janFourth;
            case 2: // Tuesday
              return new Date(janFourth.getFullYear(), 0, 3);
            case 3: // Wednesday
              return new Date(janFourth.getFullYear(), 0, 2);
            case 4: // Thursday
              return new Date(janFourth.getFullYear(), 0, 1);
            case 5: // Friday
              return new Date(janFourth.getFullYear()-1, 11, 31);
            case 6: // Saturday
              return new Date(janFourth.getFullYear()-1, 11, 30);
          }
      }
  
      function getWeekBasedYear(date) {
          var thisDate = addDays(new Date(date.tm_year+1900, 0, 1), date.tm_yday);
  
          var janFourthThisYear = new Date(thisDate.getFullYear(), 0, 4);
          var janFourthNextYear = new Date(thisDate.getFullYear()+1, 0, 4);
  
          var firstWeekStartThisYear = getFirstWeekStartDate(janFourthThisYear);
          var firstWeekStartNextYear = getFirstWeekStartDate(janFourthNextYear);
  
          if (compareByDay(firstWeekStartThisYear, thisDate) <= 0) {
            // this date is after the start of the first week of this year
            if (compareByDay(firstWeekStartNextYear, thisDate) <= 0) {
              return thisDate.getFullYear()+1;
            }
            return thisDate.getFullYear();
          }
          return thisDate.getFullYear()-1;
      }
  
      var EXPANSION_RULES_2 = {
        '%a': (date) => WEEKDAYS[date.tm_wday].substring(0,3) ,
        '%A': (date) => WEEKDAYS[date.tm_wday],
        '%b': (date) => MONTHS[date.tm_mon].substring(0,3),
        '%B': (date) => MONTHS[date.tm_mon],
        '%C': (date) => {
          var year = date.tm_year+1900;
          return leadingNulls((year/100)|0,2);
        },
        '%d': (date) => leadingNulls(date.tm_mday, 2),
        '%e': (date) => leadingSomething(date.tm_mday, 2, ' '),
        '%g': (date) => {
          // %g, %G, and %V give values according to the ISO 8601:2000 standard week-based year.
          // In this system, weeks begin on a Monday and week 1 of the year is the week that includes
          // January 4th, which is also the week that includes the first Thursday of the year, and
          // is also the first week that contains at least four days in the year.
          // If the first Monday of January is the 2nd, 3rd, or 4th, the preceding days are part of
          // the last week of the preceding year; thus, for Saturday 2nd January 1999,
          // %G is replaced by 1998 and %V is replaced by 53. If December 29th, 30th,
          // or 31st is a Monday, it and any following days are part of week 1 of the following year.
          // Thus, for Tuesday 30th December 1997, %G is replaced by 1998 and %V is replaced by 01.
  
          return getWeekBasedYear(date).toString().substring(2);
        },
        '%G': (date) => getWeekBasedYear(date),
        '%H': (date) => leadingNulls(date.tm_hour, 2),
        '%I': (date) => {
          var twelveHour = date.tm_hour;
          if (twelveHour == 0) twelveHour = 12;
          else if (twelveHour > 12) twelveHour -= 12;
          return leadingNulls(twelveHour, 2);
        },
        '%j': (date) => {
          // Day of the year (001-366)
          return leadingNulls(date.tm_mday + arraySum(isLeapYear(date.tm_year+1900) ? MONTH_DAYS_LEAP : MONTH_DAYS_REGULAR, date.tm_mon-1), 3);
        },
        '%m': (date) => leadingNulls(date.tm_mon+1, 2),
        '%M': (date) => leadingNulls(date.tm_min, 2),
        '%n': () => '\n',
        '%p': (date) => {
          if (date.tm_hour >= 0 && date.tm_hour < 12) {
            return 'AM';
          }
          return 'PM';
        },
        '%S': (date) => leadingNulls(date.tm_sec, 2),
        '%t': () => '\t',
        '%u': (date) => date.tm_wday || 7,
        '%U': (date) => {
          var days = date.tm_yday + 7 - date.tm_wday;
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%V': (date) => {
          // Replaced by the week number of the year (Monday as the first day of the week)
          // as a decimal number [01,53]. If the week containing 1 January has four
          // or more days in the new year, then it is considered week 1.
          // Otherwise, it is the last week of the previous year, and the next week is week 1.
          // Both January 4th and the first Thursday of January are always in week 1. [ tm_year, tm_wday, tm_yday]
          var val = Math.floor((date.tm_yday + 7 - (date.tm_wday + 6) % 7 ) / 7);
          // If 1 Jan is just 1-3 days past Monday, the previous week
          // is also in this year.
          if ((date.tm_wday + 371 - date.tm_yday - 2) % 7 <= 2) {
            val++;
          }
          if (!val) {
            val = 52;
            // If 31 December of prev year a Thursday, or Friday of a
            // leap year, then the prev year has 53 weeks.
            var dec31 = (date.tm_wday + 7 - date.tm_yday - 1) % 7;
            if (dec31 == 4 || (dec31 == 5 && isLeapYear(date.tm_year%400-1))) {
              val++;
            }
          } else if (val == 53) {
            // If 1 January is not a Thursday, and not a Wednesday of a
            // leap year, then this year has only 52 weeks.
            var jan1 = (date.tm_wday + 371 - date.tm_yday) % 7;
            if (jan1 != 4 && (jan1 != 3 || !isLeapYear(date.tm_year)))
              val = 1;
          }
          return leadingNulls(val, 2);
        },
        '%w': (date) => date.tm_wday,
        '%W': (date) => {
          var days = date.tm_yday + 7 - ((date.tm_wday + 6) % 7);
          return leadingNulls(Math.floor(days / 7), 2);
        },
        '%y': (date) => {
          // Replaced by the last two digits of the year as a decimal number [00,99]. [ tm_year]
          return (date.tm_year+1900).toString().substring(2);
        },
        // Replaced by the year as a decimal number (for example, 1997). [ tm_year]
        '%Y': (date) => date.tm_year+1900,
        '%z': (date) => {
          // Replaced by the offset from UTC in the ISO 8601:2000 standard format ( +hhmm or -hhmm ).
          // For example, "-0430" means 4 hours 30 minutes behind UTC (west of Greenwich).
          var off = date.tm_gmtoff;
          var ahead = off >= 0;
          off = Math.abs(off) / 60;
          // convert from minutes into hhmm format (which means 60 minutes = 100 units)
          off = (off / 60)*100 + (off % 60);
          return (ahead ? '+' : '-') + String("0000" + off).slice(-4);
        },
        '%Z': (date) => date.tm_zone,
        '%%': () => '%'
      };
  
      // Replace %% with a pair of NULLs (which cannot occur in a C string), then
      // re-inject them after processing.
      pattern = pattern.replace(/%%/g, '\0\0')
      for (var rule in EXPANSION_RULES_2) {
        if (pattern.includes(rule)) {
          pattern = pattern.replace(new RegExp(rule, 'g'), EXPANSION_RULES_2[rule](date));
        }
      }
      pattern = pattern.replace(/\0\0/g, '%')
  
      var bytes = intArrayFromString(pattern, false);
      if (bytes.length > maxsize) {
        return 0;
      }
  
      writeArrayToMemory(bytes, s);
      return bytes.length-1;
    };
  var _strftime_l = (s, maxsize, format, tm, loc) => {
      return _strftime(s, maxsize, format, tm); // no locale support yet
    };

  var wasmTableMirror = [];
  
  var wasmTable;
  var getWasmTableEntry = (funcPtr) => {
      var func = wasmTableMirror[funcPtr];
      if (!func) {
        if (funcPtr >= wasmTableMirror.length) wasmTableMirror.length = funcPtr + 1;
        wasmTableMirror[funcPtr] = func = wasmTable.get(funcPtr);
      }
      assert(wasmTable.get(funcPtr) == func, "JavaScript-side Wasm function table mirror is out of date!");
      return func;
    };


  
  var stringToUTF8 = (str, outPtr, maxBytesToWrite) => {
      assert(typeof maxBytesToWrite == 'number', 'stringToUTF8(str, outPtr, maxBytesToWrite) is missing the third parameter that specifies the length of the output buffer!');
      return stringToUTF8Array(str, HEAPU8, outPtr, maxBytesToWrite);
    };
  /** @suppress {duplicate } */
  var stringToUTF8OnStack = (str) => {
      var size = lengthBytesUTF8(str) + 1;
      var ret = stackAlloc(size);
      stringToUTF8(str, ret, size);
      return ret;
    };
  var allocateUTF8OnStack = stringToUTF8OnStack;





  var FS_unlink = (path) => FS.unlink(path);

  var FSNode = /** @constructor */ function(parent, name, mode, rdev) {
    if (!parent) {
      parent = this;  // root node sets parent to itself
    }
    this.parent = parent;
    this.mount = parent.mount;
    this.mounted = null;
    this.id = FS.nextInode++;
    this.name = name;
    this.mode = mode;
    this.node_ops = {};
    this.stream_ops = {};
    this.rdev = rdev;
  };
  var readMode = 292/*292*/ | 73/*73*/;
  var writeMode = 146/*146*/;
  Object.defineProperties(FSNode.prototype, {
   read: {
    get: /** @this{FSNode} */function() {
     return (this.mode & readMode) === readMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= readMode : this.mode &= ~readMode;
    }
   },
   write: {
    get: /** @this{FSNode} */function() {
     return (this.mode & writeMode) === writeMode;
    },
    set: /** @this{FSNode} */function(val) {
     val ? this.mode |= writeMode : this.mode &= ~writeMode;
    }
   },
   isFolder: {
    get: /** @this{FSNode} */function() {
     return FS.isDir(this.mode);
    }
   },
   isDevice: {
    get: /** @this{FSNode} */function() {
     return FS.isChrdev(this.mode);
    }
   }
  });
  FS.FSNode = FSNode;
  FS.createPreloadedFile = FS_createPreloadedFile;
  FS.staticInit();Module["FS_createPath"] = FS.createPath;Module["FS_createDataFile"] = FS.createDataFile;Module["FS_createPreloadedFile"] = FS.createPreloadedFile;Module["FS_unlink"] = FS.unlink;Module["FS_createLazyFile"] = FS.createLazyFile;Module["FS_createDevice"] = FS.createDevice;;
function checkIncomingModuleAPI() {
  ignoredModuleProp('fetchSettings');
}
var wasmImports = {
  /** @export */
  __assert_fail: ___assert_fail,
  /** @export */
  __cxa_begin_catch: ___cxa_begin_catch,
  /** @export */
  __cxa_end_catch: ___cxa_end_catch,
  /** @export */
  __cxa_find_matching_catch_2: ___cxa_find_matching_catch_2,
  /** @export */
  __cxa_find_matching_catch_3: ___cxa_find_matching_catch_3,
  /** @export */
  __cxa_find_matching_catch_4: ___cxa_find_matching_catch_4,
  /** @export */
  __cxa_rethrow: ___cxa_rethrow,
  /** @export */
  __cxa_throw: ___cxa_throw,
  /** @export */
  __cxa_uncaught_exceptions: ___cxa_uncaught_exceptions,
  /** @export */
  __resumeException: ___resumeException,
  /** @export */
  __syscall_fcntl64: ___syscall_fcntl64,
  /** @export */
  __syscall_ioctl: ___syscall_ioctl,
  /** @export */
  __syscall_openat: ___syscall_openat,
  /** @export */
  _emscripten_get_now_is_monotonic: __emscripten_get_now_is_monotonic,
  /** @export */
  abort: _abort,
  /** @export */
  emscripten_date_now: _emscripten_date_now,
  /** @export */
  emscripten_get_now: _emscripten_get_now,
  /** @export */
  emscripten_resize_heap: _emscripten_resize_heap,
  /** @export */
  environ_get: _environ_get,
  /** @export */
  environ_sizes_get: _environ_sizes_get,
  /** @export */
  fd_close: _fd_close,
  /** @export */
  fd_read: _fd_read,
  /** @export */
  fd_seek: _fd_seek,
  /** @export */
  fd_write: _fd_write,
  /** @export */
  invoke_di: invoke_di,
  /** @export */
  invoke_dii: invoke_dii,
  /** @export */
  invoke_diii: invoke_diii,
  /** @export */
  invoke_fi: invoke_fi,
  /** @export */
  invoke_fiii: invoke_fiii,
  /** @export */
  invoke_i: invoke_i,
  /** @export */
  invoke_id: invoke_id,
  /** @export */
  invoke_ii: invoke_ii,
  /** @export */
  invoke_iid: invoke_iid,
  /** @export */
  invoke_iif: invoke_iif,
  /** @export */
  invoke_iii: invoke_iii,
  /** @export */
  invoke_iiii: invoke_iiii,
  /** @export */
  invoke_iiiii: invoke_iiiii,
  /** @export */
  invoke_iiiiid: invoke_iiiiid,
  /** @export */
  invoke_iiiiii: invoke_iiiiii,
  /** @export */
  invoke_iiiiiii: invoke_iiiiiii,
  /** @export */
  invoke_iiiiiiii: invoke_iiiiiiii,
  /** @export */
  invoke_iiiiiiiii: invoke_iiiiiiiii,
  /** @export */
  invoke_iiiiiiiiii: invoke_iiiiiiiiii,
  /** @export */
  invoke_iiiiiiiiiii: invoke_iiiiiiiiiii,
  /** @export */
  invoke_iiiiiiiiiiii: invoke_iiiiiiiiiiii,
  /** @export */
  invoke_iiiiiiiiiiiii: invoke_iiiiiiiiiiiii,
  /** @export */
  invoke_iiiiiij: invoke_iiiiiij,
  /** @export */
  invoke_iiiiij: invoke_iiiiij,
  /** @export */
  invoke_iiiijiiii: invoke_iiiijiiii,
  /** @export */
  invoke_iiijiiiii: invoke_iiijiiiii,
  /** @export */
  invoke_iiijj: invoke_iiijj,
  /** @export */
  invoke_iij: invoke_iij,
  /** @export */
  invoke_iiji: invoke_iiji,
  /** @export */
  invoke_iijiiii: invoke_iijiiii,
  /** @export */
  invoke_j: invoke_j,
  /** @export */
  invoke_ji: invoke_ji,
  /** @export */
  invoke_jii: invoke_jii,
  /** @export */
  invoke_jiii: invoke_jiii,
  /** @export */
  invoke_jiiii: invoke_jiiii,
  /** @export */
  invoke_jiiiij: invoke_jiiiij,
  /** @export */
  invoke_jiiij: invoke_jiiij,
  /** @export */
  invoke_jiji: invoke_jiji,
  /** @export */
  invoke_v: invoke_v,
  /** @export */
  invoke_vi: invoke_vi,
  /** @export */
  invoke_vid: invoke_vid,
  /** @export */
  invoke_vif: invoke_vif,
  /** @export */
  invoke_vii: invoke_vii,
  /** @export */
  invoke_viii: invoke_viii,
  /** @export */
  invoke_viiii: invoke_viiii,
  /** @export */
  invoke_viiiii: invoke_viiiii,
  /** @export */
  invoke_viiiiii: invoke_viiiiii,
  /** @export */
  invoke_viiiiiii: invoke_viiiiiii,
  /** @export */
  invoke_viiiiiiii: invoke_viiiiiiii,
  /** @export */
  invoke_viiiiiiiiii: invoke_viiiiiiiiii,
  /** @export */
  invoke_viiiiiiiiiiiiiii: invoke_viiiiiiiiiiiiiii,
  /** @export */
  invoke_viiiiij: invoke_viiiiij,
  /** @export */
  invoke_viiij: invoke_viiij,
  /** @export */
  invoke_viiiji: invoke_viiiji,
  /** @export */
  invoke_viij: invoke_viij,
  /** @export */
  invoke_viijii: invoke_viijii,
  /** @export */
  invoke_viijiiij: invoke_viijiiij,
  /** @export */
  invoke_vij: invoke_vij,
  /** @export */
  invoke_viji: invoke_viji,
  /** @export */
  invoke_vijii: invoke_vijii,
  /** @export */
  invoke_vijiiij: invoke_vijiiij,
  /** @export */
  invoke_vijij: invoke_vijij,
  /** @export */
  invoke_vijji: invoke_vijji,
  /** @export */
  invoke_vjii: invoke_vjii,
  /** @export */
  llvm_eh_typeid_for: _llvm_eh_typeid_for,
  /** @export */
  proc_exit: _proc_exit,
  /** @export */
  strftime_l: _strftime_l
};
var wasmExports = createWasm();
var ___wasm_call_ctors = createExportWrapper('__wasm_call_ctors');
var _BinaryenTypeNone = Module['_BinaryenTypeNone'] = createExportWrapper('BinaryenTypeNone');
var _BinaryenTypeInt32 = Module['_BinaryenTypeInt32'] = createExportWrapper('BinaryenTypeInt32');
var _BinaryenTypeInt64 = Module['_BinaryenTypeInt64'] = createExportWrapper('BinaryenTypeInt64');
var _BinaryenTypeFloat32 = Module['_BinaryenTypeFloat32'] = createExportWrapper('BinaryenTypeFloat32');
var _BinaryenTypeFloat64 = Module['_BinaryenTypeFloat64'] = createExportWrapper('BinaryenTypeFloat64');
var _BinaryenTypeVec128 = Module['_BinaryenTypeVec128'] = createExportWrapper('BinaryenTypeVec128');
var _BinaryenTypeFuncref = Module['_BinaryenTypeFuncref'] = createExportWrapper('BinaryenTypeFuncref');
var _BinaryenTypeExternref = Module['_BinaryenTypeExternref'] = createExportWrapper('BinaryenTypeExternref');
var _BinaryenTypeAnyref = Module['_BinaryenTypeAnyref'] = createExportWrapper('BinaryenTypeAnyref');
var _BinaryenTypeEqref = Module['_BinaryenTypeEqref'] = createExportWrapper('BinaryenTypeEqref');
var _BinaryenTypeI31ref = Module['_BinaryenTypeI31ref'] = createExportWrapper('BinaryenTypeI31ref');
var _BinaryenTypeStructref = Module['_BinaryenTypeStructref'] = createExportWrapper('BinaryenTypeStructref');
var _BinaryenTypeArrayref = Module['_BinaryenTypeArrayref'] = createExportWrapper('BinaryenTypeArrayref');
var _BinaryenTypeStringref = Module['_BinaryenTypeStringref'] = createExportWrapper('BinaryenTypeStringref');
var _BinaryenTypeStringviewWTF8 = Module['_BinaryenTypeStringviewWTF8'] = createExportWrapper('BinaryenTypeStringviewWTF8');
var _BinaryenTypeStringviewWTF16 = Module['_BinaryenTypeStringviewWTF16'] = createExportWrapper('BinaryenTypeStringviewWTF16');
var _BinaryenTypeStringviewIter = Module['_BinaryenTypeStringviewIter'] = createExportWrapper('BinaryenTypeStringviewIter');
var _BinaryenTypeNullref = Module['_BinaryenTypeNullref'] = createExportWrapper('BinaryenTypeNullref');
var _BinaryenTypeNullExternref = Module['_BinaryenTypeNullExternref'] = createExportWrapper('BinaryenTypeNullExternref');
var _BinaryenTypeNullFuncref = Module['_BinaryenTypeNullFuncref'] = createExportWrapper('BinaryenTypeNullFuncref');
var _BinaryenTypeUnreachable = Module['_BinaryenTypeUnreachable'] = createExportWrapper('BinaryenTypeUnreachable');
var _BinaryenTypeAuto = Module['_BinaryenTypeAuto'] = createExportWrapper('BinaryenTypeAuto');
var _BinaryenTypeCreate = Module['_BinaryenTypeCreate'] = createExportWrapper('BinaryenTypeCreate');
var _BinaryenTypeArity = Module['_BinaryenTypeArity'] = createExportWrapper('BinaryenTypeArity');
var _BinaryenTypeExpand = Module['_BinaryenTypeExpand'] = createExportWrapper('BinaryenTypeExpand');
var _BinaryenPackedTypeNotPacked = Module['_BinaryenPackedTypeNotPacked'] = createExportWrapper('BinaryenPackedTypeNotPacked');
var _BinaryenPackedTypeInt8 = Module['_BinaryenPackedTypeInt8'] = createExportWrapper('BinaryenPackedTypeInt8');
var _BinaryenPackedTypeInt16 = Module['_BinaryenPackedTypeInt16'] = createExportWrapper('BinaryenPackedTypeInt16');
var _BinaryenHeapTypeExt = Module['_BinaryenHeapTypeExt'] = createExportWrapper('BinaryenHeapTypeExt');
var _BinaryenHeapTypeFunc = Module['_BinaryenHeapTypeFunc'] = createExportWrapper('BinaryenHeapTypeFunc');
var _BinaryenHeapTypeAny = Module['_BinaryenHeapTypeAny'] = createExportWrapper('BinaryenHeapTypeAny');
var _BinaryenHeapTypeEq = Module['_BinaryenHeapTypeEq'] = createExportWrapper('BinaryenHeapTypeEq');
var _BinaryenHeapTypeI31 = Module['_BinaryenHeapTypeI31'] = createExportWrapper('BinaryenHeapTypeI31');
var _BinaryenHeapTypeStruct = Module['_BinaryenHeapTypeStruct'] = createExportWrapper('BinaryenHeapTypeStruct');
var _BinaryenHeapTypeArray = Module['_BinaryenHeapTypeArray'] = createExportWrapper('BinaryenHeapTypeArray');
var _BinaryenHeapTypeString = Module['_BinaryenHeapTypeString'] = createExportWrapper('BinaryenHeapTypeString');
var _BinaryenHeapTypeStringviewWTF8 = Module['_BinaryenHeapTypeStringviewWTF8'] = createExportWrapper('BinaryenHeapTypeStringviewWTF8');
var _BinaryenHeapTypeStringviewWTF16 = Module['_BinaryenHeapTypeStringviewWTF16'] = createExportWrapper('BinaryenHeapTypeStringviewWTF16');
var _BinaryenHeapTypeStringviewIter = Module['_BinaryenHeapTypeStringviewIter'] = createExportWrapper('BinaryenHeapTypeStringviewIter');
var _BinaryenHeapTypeNone = Module['_BinaryenHeapTypeNone'] = createExportWrapper('BinaryenHeapTypeNone');
var _BinaryenHeapTypeNoext = Module['_BinaryenHeapTypeNoext'] = createExportWrapper('BinaryenHeapTypeNoext');
var _BinaryenHeapTypeNofunc = Module['_BinaryenHeapTypeNofunc'] = createExportWrapper('BinaryenHeapTypeNofunc');
var _BinaryenHeapTypeIsBasic = Module['_BinaryenHeapTypeIsBasic'] = createExportWrapper('BinaryenHeapTypeIsBasic');
var _BinaryenHeapTypeIsSignature = Module['_BinaryenHeapTypeIsSignature'] = createExportWrapper('BinaryenHeapTypeIsSignature');
var _BinaryenHeapTypeIsStruct = Module['_BinaryenHeapTypeIsStruct'] = createExportWrapper('BinaryenHeapTypeIsStruct');
var _BinaryenHeapTypeIsArray = Module['_BinaryenHeapTypeIsArray'] = createExportWrapper('BinaryenHeapTypeIsArray');
var _BinaryenHeapTypeIsBottom = Module['_BinaryenHeapTypeIsBottom'] = createExportWrapper('BinaryenHeapTypeIsBottom');
var _BinaryenHeapTypeGetBottom = Module['_BinaryenHeapTypeGetBottom'] = createExportWrapper('BinaryenHeapTypeGetBottom');
var _BinaryenHeapTypeIsSubType = Module['_BinaryenHeapTypeIsSubType'] = createExportWrapper('BinaryenHeapTypeIsSubType');
var _BinaryenStructTypeGetNumFields = Module['_BinaryenStructTypeGetNumFields'] = createExportWrapper('BinaryenStructTypeGetNumFields');
var _BinaryenStructTypeGetFieldType = Module['_BinaryenStructTypeGetFieldType'] = createExportWrapper('BinaryenStructTypeGetFieldType');
var _BinaryenStructTypeGetFieldPackedType = Module['_BinaryenStructTypeGetFieldPackedType'] = createExportWrapper('BinaryenStructTypeGetFieldPackedType');
var _BinaryenStructTypeIsFieldMutable = Module['_BinaryenStructTypeIsFieldMutable'] = createExportWrapper('BinaryenStructTypeIsFieldMutable');
var _BinaryenArrayTypeGetElementType = Module['_BinaryenArrayTypeGetElementType'] = createExportWrapper('BinaryenArrayTypeGetElementType');
var _BinaryenArrayTypeGetElementPackedType = Module['_BinaryenArrayTypeGetElementPackedType'] = createExportWrapper('BinaryenArrayTypeGetElementPackedType');
var _BinaryenArrayTypeIsElementMutable = Module['_BinaryenArrayTypeIsElementMutable'] = createExportWrapper('BinaryenArrayTypeIsElementMutable');
var _BinaryenSignatureTypeGetParams = Module['_BinaryenSignatureTypeGetParams'] = createExportWrapper('BinaryenSignatureTypeGetParams');
var _BinaryenSignatureTypeGetResults = Module['_BinaryenSignatureTypeGetResults'] = createExportWrapper('BinaryenSignatureTypeGetResults');
var _BinaryenTypeGetHeapType = Module['_BinaryenTypeGetHeapType'] = createExportWrapper('BinaryenTypeGetHeapType');
var _BinaryenTypeIsNullable = Module['_BinaryenTypeIsNullable'] = createExportWrapper('BinaryenTypeIsNullable');
var _BinaryenTypeFromHeapType = Module['_BinaryenTypeFromHeapType'] = createExportWrapper('BinaryenTypeFromHeapType');
var _BinaryenInvalidId = Module['_BinaryenInvalidId'] = createExportWrapper('BinaryenInvalidId');
var _BinaryenNopId = Module['_BinaryenNopId'] = createExportWrapper('BinaryenNopId');
var _BinaryenBlockId = Module['_BinaryenBlockId'] = createExportWrapper('BinaryenBlockId');
var _BinaryenIfId = Module['_BinaryenIfId'] = createExportWrapper('BinaryenIfId');
var _BinaryenLoopId = Module['_BinaryenLoopId'] = createExportWrapper('BinaryenLoopId');
var _BinaryenBreakId = Module['_BinaryenBreakId'] = createExportWrapper('BinaryenBreakId');
var _BinaryenSwitchId = Module['_BinaryenSwitchId'] = createExportWrapper('BinaryenSwitchId');
var _BinaryenCallId = Module['_BinaryenCallId'] = createExportWrapper('BinaryenCallId');
var _BinaryenCallIndirectId = Module['_BinaryenCallIndirectId'] = createExportWrapper('BinaryenCallIndirectId');
var _BinaryenLocalGetId = Module['_BinaryenLocalGetId'] = createExportWrapper('BinaryenLocalGetId');
var _BinaryenLocalSetId = Module['_BinaryenLocalSetId'] = createExportWrapper('BinaryenLocalSetId');
var _BinaryenGlobalGetId = Module['_BinaryenGlobalGetId'] = createExportWrapper('BinaryenGlobalGetId');
var _BinaryenGlobalSetId = Module['_BinaryenGlobalSetId'] = createExportWrapper('BinaryenGlobalSetId');
var _BinaryenLoadId = Module['_BinaryenLoadId'] = createExportWrapper('BinaryenLoadId');
var _BinaryenStoreId = Module['_BinaryenStoreId'] = createExportWrapper('BinaryenStoreId');
var _BinaryenAtomicRMWId = Module['_BinaryenAtomicRMWId'] = createExportWrapper('BinaryenAtomicRMWId');
var _BinaryenAtomicCmpxchgId = Module['_BinaryenAtomicCmpxchgId'] = createExportWrapper('BinaryenAtomicCmpxchgId');
var _BinaryenAtomicWaitId = Module['_BinaryenAtomicWaitId'] = createExportWrapper('BinaryenAtomicWaitId');
var _BinaryenAtomicNotifyId = Module['_BinaryenAtomicNotifyId'] = createExportWrapper('BinaryenAtomicNotifyId');
var _BinaryenAtomicFenceId = Module['_BinaryenAtomicFenceId'] = createExportWrapper('BinaryenAtomicFenceId');
var _BinaryenSIMDExtractId = Module['_BinaryenSIMDExtractId'] = createExportWrapper('BinaryenSIMDExtractId');
var _BinaryenSIMDReplaceId = Module['_BinaryenSIMDReplaceId'] = createExportWrapper('BinaryenSIMDReplaceId');
var _BinaryenSIMDShuffleId = Module['_BinaryenSIMDShuffleId'] = createExportWrapper('BinaryenSIMDShuffleId');
var _BinaryenSIMDTernaryId = Module['_BinaryenSIMDTernaryId'] = createExportWrapper('BinaryenSIMDTernaryId');
var _BinaryenSIMDShiftId = Module['_BinaryenSIMDShiftId'] = createExportWrapper('BinaryenSIMDShiftId');
var _BinaryenSIMDLoadId = Module['_BinaryenSIMDLoadId'] = createExportWrapper('BinaryenSIMDLoadId');
var _BinaryenSIMDLoadStoreLaneId = Module['_BinaryenSIMDLoadStoreLaneId'] = createExportWrapper('BinaryenSIMDLoadStoreLaneId');
var _BinaryenMemoryInitId = Module['_BinaryenMemoryInitId'] = createExportWrapper('BinaryenMemoryInitId');
var _BinaryenDataDropId = Module['_BinaryenDataDropId'] = createExportWrapper('BinaryenDataDropId');
var _BinaryenMemoryCopyId = Module['_BinaryenMemoryCopyId'] = createExportWrapper('BinaryenMemoryCopyId');
var _BinaryenMemoryFillId = Module['_BinaryenMemoryFillId'] = createExportWrapper('BinaryenMemoryFillId');
var _BinaryenConstId = Module['_BinaryenConstId'] = createExportWrapper('BinaryenConstId');
var _BinaryenUnaryId = Module['_BinaryenUnaryId'] = createExportWrapper('BinaryenUnaryId');
var _BinaryenBinaryId = Module['_BinaryenBinaryId'] = createExportWrapper('BinaryenBinaryId');
var _BinaryenSelectId = Module['_BinaryenSelectId'] = createExportWrapper('BinaryenSelectId');
var _BinaryenDropId = Module['_BinaryenDropId'] = createExportWrapper('BinaryenDropId');
var _BinaryenReturnId = Module['_BinaryenReturnId'] = createExportWrapper('BinaryenReturnId');
var _BinaryenMemorySizeId = Module['_BinaryenMemorySizeId'] = createExportWrapper('BinaryenMemorySizeId');
var _BinaryenMemoryGrowId = Module['_BinaryenMemoryGrowId'] = createExportWrapper('BinaryenMemoryGrowId');
var _BinaryenUnreachableId = Module['_BinaryenUnreachableId'] = createExportWrapper('BinaryenUnreachableId');
var _BinaryenPopId = Module['_BinaryenPopId'] = createExportWrapper('BinaryenPopId');
var _BinaryenRefNullId = Module['_BinaryenRefNullId'] = createExportWrapper('BinaryenRefNullId');
var _BinaryenRefIsNullId = Module['_BinaryenRefIsNullId'] = createExportWrapper('BinaryenRefIsNullId');
var _BinaryenRefFuncId = Module['_BinaryenRefFuncId'] = createExportWrapper('BinaryenRefFuncId');
var _BinaryenRefEqId = Module['_BinaryenRefEqId'] = createExportWrapper('BinaryenRefEqId');
var _BinaryenTableGetId = Module['_BinaryenTableGetId'] = createExportWrapper('BinaryenTableGetId');
var _BinaryenTableSetId = Module['_BinaryenTableSetId'] = createExportWrapper('BinaryenTableSetId');
var _BinaryenTableSizeId = Module['_BinaryenTableSizeId'] = createExportWrapper('BinaryenTableSizeId');
var _BinaryenTableGrowId = Module['_BinaryenTableGrowId'] = createExportWrapper('BinaryenTableGrowId');
var _BinaryenTableFillId = Module['_BinaryenTableFillId'] = createExportWrapper('BinaryenTableFillId');
var _BinaryenTableCopyId = Module['_BinaryenTableCopyId'] = createExportWrapper('BinaryenTableCopyId');
var _BinaryenTryId = Module['_BinaryenTryId'] = createExportWrapper('BinaryenTryId');
var _BinaryenTryTableId = Module['_BinaryenTryTableId'] = createExportWrapper('BinaryenTryTableId');
var _BinaryenThrowId = Module['_BinaryenThrowId'] = createExportWrapper('BinaryenThrowId');
var _BinaryenRethrowId = Module['_BinaryenRethrowId'] = createExportWrapper('BinaryenRethrowId');
var _BinaryenThrowRefId = Module['_BinaryenThrowRefId'] = createExportWrapper('BinaryenThrowRefId');
var _BinaryenTupleMakeId = Module['_BinaryenTupleMakeId'] = createExportWrapper('BinaryenTupleMakeId');
var _BinaryenTupleExtractId = Module['_BinaryenTupleExtractId'] = createExportWrapper('BinaryenTupleExtractId');
var _BinaryenRefI31Id = Module['_BinaryenRefI31Id'] = createExportWrapper('BinaryenRefI31Id');
var _BinaryenI31GetId = Module['_BinaryenI31GetId'] = createExportWrapper('BinaryenI31GetId');
var _BinaryenCallRefId = Module['_BinaryenCallRefId'] = createExportWrapper('BinaryenCallRefId');
var _BinaryenRefTestId = Module['_BinaryenRefTestId'] = createExportWrapper('BinaryenRefTestId');
var _BinaryenRefCastId = Module['_BinaryenRefCastId'] = createExportWrapper('BinaryenRefCastId');
var _BinaryenBrOnId = Module['_BinaryenBrOnId'] = createExportWrapper('BinaryenBrOnId');
var _BinaryenStructNewId = Module['_BinaryenStructNewId'] = createExportWrapper('BinaryenStructNewId');
var _BinaryenStructGetId = Module['_BinaryenStructGetId'] = createExportWrapper('BinaryenStructGetId');
var _BinaryenStructSetId = Module['_BinaryenStructSetId'] = createExportWrapper('BinaryenStructSetId');
var _BinaryenArrayNewId = Module['_BinaryenArrayNewId'] = createExportWrapper('BinaryenArrayNewId');
var _BinaryenArrayNewDataId = Module['_BinaryenArrayNewDataId'] = createExportWrapper('BinaryenArrayNewDataId');
var _BinaryenArrayNewElemId = Module['_BinaryenArrayNewElemId'] = createExportWrapper('BinaryenArrayNewElemId');
var _BinaryenArrayNewFixedId = Module['_BinaryenArrayNewFixedId'] = createExportWrapper('BinaryenArrayNewFixedId');
var _BinaryenArrayGetId = Module['_BinaryenArrayGetId'] = createExportWrapper('BinaryenArrayGetId');
var _BinaryenArraySetId = Module['_BinaryenArraySetId'] = createExportWrapper('BinaryenArraySetId');
var _BinaryenArrayLenId = Module['_BinaryenArrayLenId'] = createExportWrapper('BinaryenArrayLenId');
var _BinaryenArrayCopyId = Module['_BinaryenArrayCopyId'] = createExportWrapper('BinaryenArrayCopyId');
var _BinaryenArrayFillId = Module['_BinaryenArrayFillId'] = createExportWrapper('BinaryenArrayFillId');
var _BinaryenArrayInitDataId = Module['_BinaryenArrayInitDataId'] = createExportWrapper('BinaryenArrayInitDataId');
var _BinaryenArrayInitElemId = Module['_BinaryenArrayInitElemId'] = createExportWrapper('BinaryenArrayInitElemId');
var _BinaryenRefAsId = Module['_BinaryenRefAsId'] = createExportWrapper('BinaryenRefAsId');
var _BinaryenStringNewId = Module['_BinaryenStringNewId'] = createExportWrapper('BinaryenStringNewId');
var _BinaryenStringConstId = Module['_BinaryenStringConstId'] = createExportWrapper('BinaryenStringConstId');
var _BinaryenStringMeasureId = Module['_BinaryenStringMeasureId'] = createExportWrapper('BinaryenStringMeasureId');
var _BinaryenStringEncodeId = Module['_BinaryenStringEncodeId'] = createExportWrapper('BinaryenStringEncodeId');
var _BinaryenStringConcatId = Module['_BinaryenStringConcatId'] = createExportWrapper('BinaryenStringConcatId');
var _BinaryenStringEqId = Module['_BinaryenStringEqId'] = createExportWrapper('BinaryenStringEqId');
var _BinaryenStringAsId = Module['_BinaryenStringAsId'] = createExportWrapper('BinaryenStringAsId');
var _BinaryenStringWTF8AdvanceId = Module['_BinaryenStringWTF8AdvanceId'] = createExportWrapper('BinaryenStringWTF8AdvanceId');
var _BinaryenStringWTF16GetId = Module['_BinaryenStringWTF16GetId'] = createExportWrapper('BinaryenStringWTF16GetId');
var _BinaryenStringIterNextId = Module['_BinaryenStringIterNextId'] = createExportWrapper('BinaryenStringIterNextId');
var _BinaryenStringIterMoveId = Module['_BinaryenStringIterMoveId'] = createExportWrapper('BinaryenStringIterMoveId');
var _BinaryenStringSliceWTFId = Module['_BinaryenStringSliceWTFId'] = createExportWrapper('BinaryenStringSliceWTFId');
var _BinaryenStringSliceIterId = Module['_BinaryenStringSliceIterId'] = createExportWrapper('BinaryenStringSliceIterId');
var _BinaryenResumeId = Module['_BinaryenResumeId'] = createExportWrapper('BinaryenResumeId');
var _BinaryenExternalFunction = Module['_BinaryenExternalFunction'] = createExportWrapper('BinaryenExternalFunction');
var _BinaryenExternalTable = Module['_BinaryenExternalTable'] = createExportWrapper('BinaryenExternalTable');
var _BinaryenExternalMemory = Module['_BinaryenExternalMemory'] = createExportWrapper('BinaryenExternalMemory');
var _BinaryenExternalGlobal = Module['_BinaryenExternalGlobal'] = createExportWrapper('BinaryenExternalGlobal');
var _BinaryenExternalTag = Module['_BinaryenExternalTag'] = createExportWrapper('BinaryenExternalTag');
var _BinaryenFeatureMVP = Module['_BinaryenFeatureMVP'] = createExportWrapper('BinaryenFeatureMVP');
var _BinaryenFeatureAtomics = Module['_BinaryenFeatureAtomics'] = createExportWrapper('BinaryenFeatureAtomics');
var _BinaryenFeatureBulkMemory = Module['_BinaryenFeatureBulkMemory'] = createExportWrapper('BinaryenFeatureBulkMemory');
var _BinaryenFeatureMutableGlobals = Module['_BinaryenFeatureMutableGlobals'] = createExportWrapper('BinaryenFeatureMutableGlobals');
var _BinaryenFeatureNontrappingFPToInt = Module['_BinaryenFeatureNontrappingFPToInt'] = createExportWrapper('BinaryenFeatureNontrappingFPToInt');
var _BinaryenFeatureSignExt = Module['_BinaryenFeatureSignExt'] = createExportWrapper('BinaryenFeatureSignExt');
var _BinaryenFeatureSIMD128 = Module['_BinaryenFeatureSIMD128'] = createExportWrapper('BinaryenFeatureSIMD128');
var _BinaryenFeatureExceptionHandling = Module['_BinaryenFeatureExceptionHandling'] = createExportWrapper('BinaryenFeatureExceptionHandling');
var _BinaryenFeatureTailCall = Module['_BinaryenFeatureTailCall'] = createExportWrapper('BinaryenFeatureTailCall');
var _BinaryenFeatureReferenceTypes = Module['_BinaryenFeatureReferenceTypes'] = createExportWrapper('BinaryenFeatureReferenceTypes');
var _BinaryenFeatureMultivalue = Module['_BinaryenFeatureMultivalue'] = createExportWrapper('BinaryenFeatureMultivalue');
var _BinaryenFeatureGC = Module['_BinaryenFeatureGC'] = createExportWrapper('BinaryenFeatureGC');
var _BinaryenFeatureMemory64 = Module['_BinaryenFeatureMemory64'] = createExportWrapper('BinaryenFeatureMemory64');
var _BinaryenFeatureRelaxedSIMD = Module['_BinaryenFeatureRelaxedSIMD'] = createExportWrapper('BinaryenFeatureRelaxedSIMD');
var _BinaryenFeatureExtendedConst = Module['_BinaryenFeatureExtendedConst'] = createExportWrapper('BinaryenFeatureExtendedConst');
var _BinaryenFeatureStrings = Module['_BinaryenFeatureStrings'] = createExportWrapper('BinaryenFeatureStrings');
var _BinaryenFeatureMultiMemory = Module['_BinaryenFeatureMultiMemory'] = createExportWrapper('BinaryenFeatureMultiMemory');
var _BinaryenFeatureAll = Module['_BinaryenFeatureAll'] = createExportWrapper('BinaryenFeatureAll');
var _BinaryenModuleCreate = Module['_BinaryenModuleCreate'] = createExportWrapper('BinaryenModuleCreate');
var _BinaryenModuleDispose = Module['_BinaryenModuleDispose'] = createExportWrapper('BinaryenModuleDispose');
var _BinaryenLiteralInt32 = Module['_BinaryenLiteralInt32'] = createExportWrapper('BinaryenLiteralInt32');
var _BinaryenLiteralInt64 = Module['_BinaryenLiteralInt64'] = createExportWrapper('BinaryenLiteralInt64');
var _BinaryenLiteralFloat32 = Module['_BinaryenLiteralFloat32'] = createExportWrapper('BinaryenLiteralFloat32');
var _BinaryenLiteralFloat64 = Module['_BinaryenLiteralFloat64'] = createExportWrapper('BinaryenLiteralFloat64');
var _BinaryenLiteralVec128 = Module['_BinaryenLiteralVec128'] = createExportWrapper('BinaryenLiteralVec128');
var _BinaryenLiteralFloat32Bits = Module['_BinaryenLiteralFloat32Bits'] = createExportWrapper('BinaryenLiteralFloat32Bits');
var _BinaryenLiteralFloat64Bits = Module['_BinaryenLiteralFloat64Bits'] = createExportWrapper('BinaryenLiteralFloat64Bits');
var _BinaryenClzInt32 = Module['_BinaryenClzInt32'] = createExportWrapper('BinaryenClzInt32');
var _BinaryenCtzInt32 = Module['_BinaryenCtzInt32'] = createExportWrapper('BinaryenCtzInt32');
var _BinaryenPopcntInt32 = Module['_BinaryenPopcntInt32'] = createExportWrapper('BinaryenPopcntInt32');
var _BinaryenNegFloat32 = Module['_BinaryenNegFloat32'] = createExportWrapper('BinaryenNegFloat32');
var _BinaryenAbsFloat32 = Module['_BinaryenAbsFloat32'] = createExportWrapper('BinaryenAbsFloat32');
var _BinaryenCeilFloat32 = Module['_BinaryenCeilFloat32'] = createExportWrapper('BinaryenCeilFloat32');
var _BinaryenFloorFloat32 = Module['_BinaryenFloorFloat32'] = createExportWrapper('BinaryenFloorFloat32');
var _BinaryenTruncFloat32 = Module['_BinaryenTruncFloat32'] = createExportWrapper('BinaryenTruncFloat32');
var _BinaryenNearestFloat32 = Module['_BinaryenNearestFloat32'] = createExportWrapper('BinaryenNearestFloat32');
var _BinaryenSqrtFloat32 = Module['_BinaryenSqrtFloat32'] = createExportWrapper('BinaryenSqrtFloat32');
var _BinaryenEqZInt32 = Module['_BinaryenEqZInt32'] = createExportWrapper('BinaryenEqZInt32');
var _BinaryenClzInt64 = Module['_BinaryenClzInt64'] = createExportWrapper('BinaryenClzInt64');
var _BinaryenCtzInt64 = Module['_BinaryenCtzInt64'] = createExportWrapper('BinaryenCtzInt64');
var _BinaryenPopcntInt64 = Module['_BinaryenPopcntInt64'] = createExportWrapper('BinaryenPopcntInt64');
var _BinaryenNegFloat64 = Module['_BinaryenNegFloat64'] = createExportWrapper('BinaryenNegFloat64');
var _BinaryenAbsFloat64 = Module['_BinaryenAbsFloat64'] = createExportWrapper('BinaryenAbsFloat64');
var _BinaryenCeilFloat64 = Module['_BinaryenCeilFloat64'] = createExportWrapper('BinaryenCeilFloat64');
var _BinaryenFloorFloat64 = Module['_BinaryenFloorFloat64'] = createExportWrapper('BinaryenFloorFloat64');
var _BinaryenTruncFloat64 = Module['_BinaryenTruncFloat64'] = createExportWrapper('BinaryenTruncFloat64');
var _BinaryenNearestFloat64 = Module['_BinaryenNearestFloat64'] = createExportWrapper('BinaryenNearestFloat64');
var _BinaryenSqrtFloat64 = Module['_BinaryenSqrtFloat64'] = createExportWrapper('BinaryenSqrtFloat64');
var _BinaryenEqZInt64 = Module['_BinaryenEqZInt64'] = createExportWrapper('BinaryenEqZInt64');
var _BinaryenExtendSInt32 = Module['_BinaryenExtendSInt32'] = createExportWrapper('BinaryenExtendSInt32');
var _BinaryenExtendUInt32 = Module['_BinaryenExtendUInt32'] = createExportWrapper('BinaryenExtendUInt32');
var _BinaryenWrapInt64 = Module['_BinaryenWrapInt64'] = createExportWrapper('BinaryenWrapInt64');
var _BinaryenTruncSFloat32ToInt32 = Module['_BinaryenTruncSFloat32ToInt32'] = createExportWrapper('BinaryenTruncSFloat32ToInt32');
var _BinaryenTruncSFloat32ToInt64 = Module['_BinaryenTruncSFloat32ToInt64'] = createExportWrapper('BinaryenTruncSFloat32ToInt64');
var _BinaryenTruncUFloat32ToInt32 = Module['_BinaryenTruncUFloat32ToInt32'] = createExportWrapper('BinaryenTruncUFloat32ToInt32');
var _BinaryenTruncUFloat32ToInt64 = Module['_BinaryenTruncUFloat32ToInt64'] = createExportWrapper('BinaryenTruncUFloat32ToInt64');
var _BinaryenTruncSFloat64ToInt32 = Module['_BinaryenTruncSFloat64ToInt32'] = createExportWrapper('BinaryenTruncSFloat64ToInt32');
var _BinaryenTruncSFloat64ToInt64 = Module['_BinaryenTruncSFloat64ToInt64'] = createExportWrapper('BinaryenTruncSFloat64ToInt64');
var _BinaryenTruncUFloat64ToInt32 = Module['_BinaryenTruncUFloat64ToInt32'] = createExportWrapper('BinaryenTruncUFloat64ToInt32');
var _BinaryenTruncUFloat64ToInt64 = Module['_BinaryenTruncUFloat64ToInt64'] = createExportWrapper('BinaryenTruncUFloat64ToInt64');
var _BinaryenReinterpretFloat32 = Module['_BinaryenReinterpretFloat32'] = createExportWrapper('BinaryenReinterpretFloat32');
var _BinaryenReinterpretFloat64 = Module['_BinaryenReinterpretFloat64'] = createExportWrapper('BinaryenReinterpretFloat64');
var _BinaryenExtendS8Int32 = Module['_BinaryenExtendS8Int32'] = createExportWrapper('BinaryenExtendS8Int32');
var _BinaryenExtendS16Int32 = Module['_BinaryenExtendS16Int32'] = createExportWrapper('BinaryenExtendS16Int32');
var _BinaryenExtendS8Int64 = Module['_BinaryenExtendS8Int64'] = createExportWrapper('BinaryenExtendS8Int64');
var _BinaryenExtendS16Int64 = Module['_BinaryenExtendS16Int64'] = createExportWrapper('BinaryenExtendS16Int64');
var _BinaryenExtendS32Int64 = Module['_BinaryenExtendS32Int64'] = createExportWrapper('BinaryenExtendS32Int64');
var _BinaryenConvertSInt32ToFloat32 = Module['_BinaryenConvertSInt32ToFloat32'] = createExportWrapper('BinaryenConvertSInt32ToFloat32');
var _BinaryenConvertSInt32ToFloat64 = Module['_BinaryenConvertSInt32ToFloat64'] = createExportWrapper('BinaryenConvertSInt32ToFloat64');
var _BinaryenConvertUInt32ToFloat32 = Module['_BinaryenConvertUInt32ToFloat32'] = createExportWrapper('BinaryenConvertUInt32ToFloat32');
var _BinaryenConvertUInt32ToFloat64 = Module['_BinaryenConvertUInt32ToFloat64'] = createExportWrapper('BinaryenConvertUInt32ToFloat64');
var _BinaryenConvertSInt64ToFloat32 = Module['_BinaryenConvertSInt64ToFloat32'] = createExportWrapper('BinaryenConvertSInt64ToFloat32');
var _BinaryenConvertSInt64ToFloat64 = Module['_BinaryenConvertSInt64ToFloat64'] = createExportWrapper('BinaryenConvertSInt64ToFloat64');
var _BinaryenConvertUInt64ToFloat32 = Module['_BinaryenConvertUInt64ToFloat32'] = createExportWrapper('BinaryenConvertUInt64ToFloat32');
var _BinaryenConvertUInt64ToFloat64 = Module['_BinaryenConvertUInt64ToFloat64'] = createExportWrapper('BinaryenConvertUInt64ToFloat64');
var _BinaryenPromoteFloat32 = Module['_BinaryenPromoteFloat32'] = createExportWrapper('BinaryenPromoteFloat32');
var _BinaryenDemoteFloat64 = Module['_BinaryenDemoteFloat64'] = createExportWrapper('BinaryenDemoteFloat64');
var _BinaryenReinterpretInt32 = Module['_BinaryenReinterpretInt32'] = createExportWrapper('BinaryenReinterpretInt32');
var _BinaryenReinterpretInt64 = Module['_BinaryenReinterpretInt64'] = createExportWrapper('BinaryenReinterpretInt64');
var _BinaryenAddInt32 = Module['_BinaryenAddInt32'] = createExportWrapper('BinaryenAddInt32');
var _BinaryenSubInt32 = Module['_BinaryenSubInt32'] = createExportWrapper('BinaryenSubInt32');
var _BinaryenMulInt32 = Module['_BinaryenMulInt32'] = createExportWrapper('BinaryenMulInt32');
var _BinaryenDivSInt32 = Module['_BinaryenDivSInt32'] = createExportWrapper('BinaryenDivSInt32');
var _BinaryenDivUInt32 = Module['_BinaryenDivUInt32'] = createExportWrapper('BinaryenDivUInt32');
var _BinaryenRemSInt32 = Module['_BinaryenRemSInt32'] = createExportWrapper('BinaryenRemSInt32');
var _BinaryenRemUInt32 = Module['_BinaryenRemUInt32'] = createExportWrapper('BinaryenRemUInt32');
var _BinaryenAndInt32 = Module['_BinaryenAndInt32'] = createExportWrapper('BinaryenAndInt32');
var _BinaryenOrInt32 = Module['_BinaryenOrInt32'] = createExportWrapper('BinaryenOrInt32');
var _BinaryenXorInt32 = Module['_BinaryenXorInt32'] = createExportWrapper('BinaryenXorInt32');
var _BinaryenShlInt32 = Module['_BinaryenShlInt32'] = createExportWrapper('BinaryenShlInt32');
var _BinaryenShrUInt32 = Module['_BinaryenShrUInt32'] = createExportWrapper('BinaryenShrUInt32');
var _BinaryenShrSInt32 = Module['_BinaryenShrSInt32'] = createExportWrapper('BinaryenShrSInt32');
var _BinaryenRotLInt32 = Module['_BinaryenRotLInt32'] = createExportWrapper('BinaryenRotLInt32');
var _BinaryenRotRInt32 = Module['_BinaryenRotRInt32'] = createExportWrapper('BinaryenRotRInt32');
var _BinaryenEqInt32 = Module['_BinaryenEqInt32'] = createExportWrapper('BinaryenEqInt32');
var _BinaryenNeInt32 = Module['_BinaryenNeInt32'] = createExportWrapper('BinaryenNeInt32');
var _BinaryenLtSInt32 = Module['_BinaryenLtSInt32'] = createExportWrapper('BinaryenLtSInt32');
var _BinaryenLtUInt32 = Module['_BinaryenLtUInt32'] = createExportWrapper('BinaryenLtUInt32');
var _BinaryenLeSInt32 = Module['_BinaryenLeSInt32'] = createExportWrapper('BinaryenLeSInt32');
var _BinaryenLeUInt32 = Module['_BinaryenLeUInt32'] = createExportWrapper('BinaryenLeUInt32');
var _BinaryenGtSInt32 = Module['_BinaryenGtSInt32'] = createExportWrapper('BinaryenGtSInt32');
var _BinaryenGtUInt32 = Module['_BinaryenGtUInt32'] = createExportWrapper('BinaryenGtUInt32');
var _BinaryenGeSInt32 = Module['_BinaryenGeSInt32'] = createExportWrapper('BinaryenGeSInt32');
var _BinaryenGeUInt32 = Module['_BinaryenGeUInt32'] = createExportWrapper('BinaryenGeUInt32');
var _BinaryenAddInt64 = Module['_BinaryenAddInt64'] = createExportWrapper('BinaryenAddInt64');
var _BinaryenSubInt64 = Module['_BinaryenSubInt64'] = createExportWrapper('BinaryenSubInt64');
var _BinaryenMulInt64 = Module['_BinaryenMulInt64'] = createExportWrapper('BinaryenMulInt64');
var _BinaryenDivSInt64 = Module['_BinaryenDivSInt64'] = createExportWrapper('BinaryenDivSInt64');
var _BinaryenDivUInt64 = Module['_BinaryenDivUInt64'] = createExportWrapper('BinaryenDivUInt64');
var _BinaryenRemSInt64 = Module['_BinaryenRemSInt64'] = createExportWrapper('BinaryenRemSInt64');
var _BinaryenRemUInt64 = Module['_BinaryenRemUInt64'] = createExportWrapper('BinaryenRemUInt64');
var _BinaryenAndInt64 = Module['_BinaryenAndInt64'] = createExportWrapper('BinaryenAndInt64');
var _BinaryenOrInt64 = Module['_BinaryenOrInt64'] = createExportWrapper('BinaryenOrInt64');
var _BinaryenXorInt64 = Module['_BinaryenXorInt64'] = createExportWrapper('BinaryenXorInt64');
var _BinaryenShlInt64 = Module['_BinaryenShlInt64'] = createExportWrapper('BinaryenShlInt64');
var _BinaryenShrUInt64 = Module['_BinaryenShrUInt64'] = createExportWrapper('BinaryenShrUInt64');
var _BinaryenShrSInt64 = Module['_BinaryenShrSInt64'] = createExportWrapper('BinaryenShrSInt64');
var _BinaryenRotLInt64 = Module['_BinaryenRotLInt64'] = createExportWrapper('BinaryenRotLInt64');
var _BinaryenRotRInt64 = Module['_BinaryenRotRInt64'] = createExportWrapper('BinaryenRotRInt64');
var _BinaryenEqInt64 = Module['_BinaryenEqInt64'] = createExportWrapper('BinaryenEqInt64');
var _BinaryenNeInt64 = Module['_BinaryenNeInt64'] = createExportWrapper('BinaryenNeInt64');
var _BinaryenLtSInt64 = Module['_BinaryenLtSInt64'] = createExportWrapper('BinaryenLtSInt64');
var _BinaryenLtUInt64 = Module['_BinaryenLtUInt64'] = createExportWrapper('BinaryenLtUInt64');
var _BinaryenLeSInt64 = Module['_BinaryenLeSInt64'] = createExportWrapper('BinaryenLeSInt64');
var _BinaryenLeUInt64 = Module['_BinaryenLeUInt64'] = createExportWrapper('BinaryenLeUInt64');
var _BinaryenGtSInt64 = Module['_BinaryenGtSInt64'] = createExportWrapper('BinaryenGtSInt64');
var _BinaryenGtUInt64 = Module['_BinaryenGtUInt64'] = createExportWrapper('BinaryenGtUInt64');
var _BinaryenGeSInt64 = Module['_BinaryenGeSInt64'] = createExportWrapper('BinaryenGeSInt64');
var _BinaryenGeUInt64 = Module['_BinaryenGeUInt64'] = createExportWrapper('BinaryenGeUInt64');
var _BinaryenAddFloat32 = Module['_BinaryenAddFloat32'] = createExportWrapper('BinaryenAddFloat32');
var _BinaryenSubFloat32 = Module['_BinaryenSubFloat32'] = createExportWrapper('BinaryenSubFloat32');
var _BinaryenMulFloat32 = Module['_BinaryenMulFloat32'] = createExportWrapper('BinaryenMulFloat32');
var _BinaryenDivFloat32 = Module['_BinaryenDivFloat32'] = createExportWrapper('BinaryenDivFloat32');
var _BinaryenCopySignFloat32 = Module['_BinaryenCopySignFloat32'] = createExportWrapper('BinaryenCopySignFloat32');
var _BinaryenMinFloat32 = Module['_BinaryenMinFloat32'] = createExportWrapper('BinaryenMinFloat32');
var _BinaryenMaxFloat32 = Module['_BinaryenMaxFloat32'] = createExportWrapper('BinaryenMaxFloat32');
var _BinaryenEqFloat32 = Module['_BinaryenEqFloat32'] = createExportWrapper('BinaryenEqFloat32');
var _BinaryenNeFloat32 = Module['_BinaryenNeFloat32'] = createExportWrapper('BinaryenNeFloat32');
var _BinaryenLtFloat32 = Module['_BinaryenLtFloat32'] = createExportWrapper('BinaryenLtFloat32');
var _BinaryenLeFloat32 = Module['_BinaryenLeFloat32'] = createExportWrapper('BinaryenLeFloat32');
var _BinaryenGtFloat32 = Module['_BinaryenGtFloat32'] = createExportWrapper('BinaryenGtFloat32');
var _BinaryenGeFloat32 = Module['_BinaryenGeFloat32'] = createExportWrapper('BinaryenGeFloat32');
var _BinaryenAddFloat64 = Module['_BinaryenAddFloat64'] = createExportWrapper('BinaryenAddFloat64');
var _BinaryenSubFloat64 = Module['_BinaryenSubFloat64'] = createExportWrapper('BinaryenSubFloat64');
var _BinaryenMulFloat64 = Module['_BinaryenMulFloat64'] = createExportWrapper('BinaryenMulFloat64');
var _BinaryenDivFloat64 = Module['_BinaryenDivFloat64'] = createExportWrapper('BinaryenDivFloat64');
var _BinaryenCopySignFloat64 = Module['_BinaryenCopySignFloat64'] = createExportWrapper('BinaryenCopySignFloat64');
var _BinaryenMinFloat64 = Module['_BinaryenMinFloat64'] = createExportWrapper('BinaryenMinFloat64');
var _BinaryenMaxFloat64 = Module['_BinaryenMaxFloat64'] = createExportWrapper('BinaryenMaxFloat64');
var _BinaryenEqFloat64 = Module['_BinaryenEqFloat64'] = createExportWrapper('BinaryenEqFloat64');
var _BinaryenNeFloat64 = Module['_BinaryenNeFloat64'] = createExportWrapper('BinaryenNeFloat64');
var _BinaryenLtFloat64 = Module['_BinaryenLtFloat64'] = createExportWrapper('BinaryenLtFloat64');
var _BinaryenLeFloat64 = Module['_BinaryenLeFloat64'] = createExportWrapper('BinaryenLeFloat64');
var _BinaryenGtFloat64 = Module['_BinaryenGtFloat64'] = createExportWrapper('BinaryenGtFloat64');
var _BinaryenGeFloat64 = Module['_BinaryenGeFloat64'] = createExportWrapper('BinaryenGeFloat64');
var _BinaryenAtomicRMWAdd = Module['_BinaryenAtomicRMWAdd'] = createExportWrapper('BinaryenAtomicRMWAdd');
var _BinaryenAtomicRMWSub = Module['_BinaryenAtomicRMWSub'] = createExportWrapper('BinaryenAtomicRMWSub');
var _BinaryenAtomicRMWAnd = Module['_BinaryenAtomicRMWAnd'] = createExportWrapper('BinaryenAtomicRMWAnd');
var _BinaryenAtomicRMWOr = Module['_BinaryenAtomicRMWOr'] = createExportWrapper('BinaryenAtomicRMWOr');
var _BinaryenAtomicRMWXor = Module['_BinaryenAtomicRMWXor'] = createExportWrapper('BinaryenAtomicRMWXor');
var _BinaryenAtomicRMWXchg = Module['_BinaryenAtomicRMWXchg'] = createExportWrapper('BinaryenAtomicRMWXchg');
var _BinaryenTruncSatSFloat32ToInt32 = Module['_BinaryenTruncSatSFloat32ToInt32'] = createExportWrapper('BinaryenTruncSatSFloat32ToInt32');
var _BinaryenTruncSatSFloat32ToInt64 = Module['_BinaryenTruncSatSFloat32ToInt64'] = createExportWrapper('BinaryenTruncSatSFloat32ToInt64');
var _BinaryenTruncSatUFloat32ToInt32 = Module['_BinaryenTruncSatUFloat32ToInt32'] = createExportWrapper('BinaryenTruncSatUFloat32ToInt32');
var _BinaryenTruncSatUFloat32ToInt64 = Module['_BinaryenTruncSatUFloat32ToInt64'] = createExportWrapper('BinaryenTruncSatUFloat32ToInt64');
var _BinaryenTruncSatSFloat64ToInt32 = Module['_BinaryenTruncSatSFloat64ToInt32'] = createExportWrapper('BinaryenTruncSatSFloat64ToInt32');
var _BinaryenTruncSatSFloat64ToInt64 = Module['_BinaryenTruncSatSFloat64ToInt64'] = createExportWrapper('BinaryenTruncSatSFloat64ToInt64');
var _BinaryenTruncSatUFloat64ToInt32 = Module['_BinaryenTruncSatUFloat64ToInt32'] = createExportWrapper('BinaryenTruncSatUFloat64ToInt32');
var _BinaryenTruncSatUFloat64ToInt64 = Module['_BinaryenTruncSatUFloat64ToInt64'] = createExportWrapper('BinaryenTruncSatUFloat64ToInt64');
var _BinaryenSplatVecI8x16 = Module['_BinaryenSplatVecI8x16'] = createExportWrapper('BinaryenSplatVecI8x16');
var _BinaryenExtractLaneSVecI8x16 = Module['_BinaryenExtractLaneSVecI8x16'] = createExportWrapper('BinaryenExtractLaneSVecI8x16');
var _BinaryenExtractLaneUVecI8x16 = Module['_BinaryenExtractLaneUVecI8x16'] = createExportWrapper('BinaryenExtractLaneUVecI8x16');
var _BinaryenReplaceLaneVecI8x16 = Module['_BinaryenReplaceLaneVecI8x16'] = createExportWrapper('BinaryenReplaceLaneVecI8x16');
var _BinaryenSplatVecI16x8 = Module['_BinaryenSplatVecI16x8'] = createExportWrapper('BinaryenSplatVecI16x8');
var _BinaryenExtractLaneSVecI16x8 = Module['_BinaryenExtractLaneSVecI16x8'] = createExportWrapper('BinaryenExtractLaneSVecI16x8');
var _BinaryenExtractLaneUVecI16x8 = Module['_BinaryenExtractLaneUVecI16x8'] = createExportWrapper('BinaryenExtractLaneUVecI16x8');
var _BinaryenReplaceLaneVecI16x8 = Module['_BinaryenReplaceLaneVecI16x8'] = createExportWrapper('BinaryenReplaceLaneVecI16x8');
var _BinaryenSplatVecI32x4 = Module['_BinaryenSplatVecI32x4'] = createExportWrapper('BinaryenSplatVecI32x4');
var _BinaryenExtractLaneVecI32x4 = Module['_BinaryenExtractLaneVecI32x4'] = createExportWrapper('BinaryenExtractLaneVecI32x4');
var _BinaryenReplaceLaneVecI32x4 = Module['_BinaryenReplaceLaneVecI32x4'] = createExportWrapper('BinaryenReplaceLaneVecI32x4');
var _BinaryenSplatVecI64x2 = Module['_BinaryenSplatVecI64x2'] = createExportWrapper('BinaryenSplatVecI64x2');
var _BinaryenExtractLaneVecI64x2 = Module['_BinaryenExtractLaneVecI64x2'] = createExportWrapper('BinaryenExtractLaneVecI64x2');
var _BinaryenReplaceLaneVecI64x2 = Module['_BinaryenReplaceLaneVecI64x2'] = createExportWrapper('BinaryenReplaceLaneVecI64x2');
var _BinaryenSplatVecF32x4 = Module['_BinaryenSplatVecF32x4'] = createExportWrapper('BinaryenSplatVecF32x4');
var _BinaryenExtractLaneVecF32x4 = Module['_BinaryenExtractLaneVecF32x4'] = createExportWrapper('BinaryenExtractLaneVecF32x4');
var _BinaryenReplaceLaneVecF32x4 = Module['_BinaryenReplaceLaneVecF32x4'] = createExportWrapper('BinaryenReplaceLaneVecF32x4');
var _BinaryenSplatVecF64x2 = Module['_BinaryenSplatVecF64x2'] = createExportWrapper('BinaryenSplatVecF64x2');
var _BinaryenExtractLaneVecF64x2 = Module['_BinaryenExtractLaneVecF64x2'] = createExportWrapper('BinaryenExtractLaneVecF64x2');
var _BinaryenReplaceLaneVecF64x2 = Module['_BinaryenReplaceLaneVecF64x2'] = createExportWrapper('BinaryenReplaceLaneVecF64x2');
var _BinaryenEqVecI8x16 = Module['_BinaryenEqVecI8x16'] = createExportWrapper('BinaryenEqVecI8x16');
var _BinaryenNeVecI8x16 = Module['_BinaryenNeVecI8x16'] = createExportWrapper('BinaryenNeVecI8x16');
var _BinaryenLtSVecI8x16 = Module['_BinaryenLtSVecI8x16'] = createExportWrapper('BinaryenLtSVecI8x16');
var _BinaryenLtUVecI8x16 = Module['_BinaryenLtUVecI8x16'] = createExportWrapper('BinaryenLtUVecI8x16');
var _BinaryenGtSVecI8x16 = Module['_BinaryenGtSVecI8x16'] = createExportWrapper('BinaryenGtSVecI8x16');
var _BinaryenGtUVecI8x16 = Module['_BinaryenGtUVecI8x16'] = createExportWrapper('BinaryenGtUVecI8x16');
var _BinaryenLeSVecI8x16 = Module['_BinaryenLeSVecI8x16'] = createExportWrapper('BinaryenLeSVecI8x16');
var _BinaryenLeUVecI8x16 = Module['_BinaryenLeUVecI8x16'] = createExportWrapper('BinaryenLeUVecI8x16');
var _BinaryenGeSVecI8x16 = Module['_BinaryenGeSVecI8x16'] = createExportWrapper('BinaryenGeSVecI8x16');
var _BinaryenGeUVecI8x16 = Module['_BinaryenGeUVecI8x16'] = createExportWrapper('BinaryenGeUVecI8x16');
var _BinaryenEqVecI16x8 = Module['_BinaryenEqVecI16x8'] = createExportWrapper('BinaryenEqVecI16x8');
var _BinaryenNeVecI16x8 = Module['_BinaryenNeVecI16x8'] = createExportWrapper('BinaryenNeVecI16x8');
var _BinaryenLtSVecI16x8 = Module['_BinaryenLtSVecI16x8'] = createExportWrapper('BinaryenLtSVecI16x8');
var _BinaryenLtUVecI16x8 = Module['_BinaryenLtUVecI16x8'] = createExportWrapper('BinaryenLtUVecI16x8');
var _BinaryenGtSVecI16x8 = Module['_BinaryenGtSVecI16x8'] = createExportWrapper('BinaryenGtSVecI16x8');
var _BinaryenGtUVecI16x8 = Module['_BinaryenGtUVecI16x8'] = createExportWrapper('BinaryenGtUVecI16x8');
var _BinaryenLeSVecI16x8 = Module['_BinaryenLeSVecI16x8'] = createExportWrapper('BinaryenLeSVecI16x8');
var _BinaryenLeUVecI16x8 = Module['_BinaryenLeUVecI16x8'] = createExportWrapper('BinaryenLeUVecI16x8');
var _BinaryenGeSVecI16x8 = Module['_BinaryenGeSVecI16x8'] = createExportWrapper('BinaryenGeSVecI16x8');
var _BinaryenGeUVecI16x8 = Module['_BinaryenGeUVecI16x8'] = createExportWrapper('BinaryenGeUVecI16x8');
var _BinaryenEqVecI32x4 = Module['_BinaryenEqVecI32x4'] = createExportWrapper('BinaryenEqVecI32x4');
var _BinaryenNeVecI32x4 = Module['_BinaryenNeVecI32x4'] = createExportWrapper('BinaryenNeVecI32x4');
var _BinaryenLtSVecI32x4 = Module['_BinaryenLtSVecI32x4'] = createExportWrapper('BinaryenLtSVecI32x4');
var _BinaryenLtUVecI32x4 = Module['_BinaryenLtUVecI32x4'] = createExportWrapper('BinaryenLtUVecI32x4');
var _BinaryenGtSVecI32x4 = Module['_BinaryenGtSVecI32x4'] = createExportWrapper('BinaryenGtSVecI32x4');
var _BinaryenGtUVecI32x4 = Module['_BinaryenGtUVecI32x4'] = createExportWrapper('BinaryenGtUVecI32x4');
var _BinaryenLeSVecI32x4 = Module['_BinaryenLeSVecI32x4'] = createExportWrapper('BinaryenLeSVecI32x4');
var _BinaryenLeUVecI32x4 = Module['_BinaryenLeUVecI32x4'] = createExportWrapper('BinaryenLeUVecI32x4');
var _BinaryenGeSVecI32x4 = Module['_BinaryenGeSVecI32x4'] = createExportWrapper('BinaryenGeSVecI32x4');
var _BinaryenGeUVecI32x4 = Module['_BinaryenGeUVecI32x4'] = createExportWrapper('BinaryenGeUVecI32x4');
var _BinaryenEqVecI64x2 = Module['_BinaryenEqVecI64x2'] = createExportWrapper('BinaryenEqVecI64x2');
var _BinaryenNeVecI64x2 = Module['_BinaryenNeVecI64x2'] = createExportWrapper('BinaryenNeVecI64x2');
var _BinaryenLtSVecI64x2 = Module['_BinaryenLtSVecI64x2'] = createExportWrapper('BinaryenLtSVecI64x2');
var _BinaryenGtSVecI64x2 = Module['_BinaryenGtSVecI64x2'] = createExportWrapper('BinaryenGtSVecI64x2');
var _BinaryenLeSVecI64x2 = Module['_BinaryenLeSVecI64x2'] = createExportWrapper('BinaryenLeSVecI64x2');
var _BinaryenGeSVecI64x2 = Module['_BinaryenGeSVecI64x2'] = createExportWrapper('BinaryenGeSVecI64x2');
var _BinaryenEqVecF32x4 = Module['_BinaryenEqVecF32x4'] = createExportWrapper('BinaryenEqVecF32x4');
var _BinaryenNeVecF32x4 = Module['_BinaryenNeVecF32x4'] = createExportWrapper('BinaryenNeVecF32x4');
var _BinaryenLtVecF32x4 = Module['_BinaryenLtVecF32x4'] = createExportWrapper('BinaryenLtVecF32x4');
var _BinaryenGtVecF32x4 = Module['_BinaryenGtVecF32x4'] = createExportWrapper('BinaryenGtVecF32x4');
var _BinaryenLeVecF32x4 = Module['_BinaryenLeVecF32x4'] = createExportWrapper('BinaryenLeVecF32x4');
var _BinaryenGeVecF32x4 = Module['_BinaryenGeVecF32x4'] = createExportWrapper('BinaryenGeVecF32x4');
var _BinaryenEqVecF64x2 = Module['_BinaryenEqVecF64x2'] = createExportWrapper('BinaryenEqVecF64x2');
var _BinaryenNeVecF64x2 = Module['_BinaryenNeVecF64x2'] = createExportWrapper('BinaryenNeVecF64x2');
var _BinaryenLtVecF64x2 = Module['_BinaryenLtVecF64x2'] = createExportWrapper('BinaryenLtVecF64x2');
var _BinaryenGtVecF64x2 = Module['_BinaryenGtVecF64x2'] = createExportWrapper('BinaryenGtVecF64x2');
var _BinaryenLeVecF64x2 = Module['_BinaryenLeVecF64x2'] = createExportWrapper('BinaryenLeVecF64x2');
var _BinaryenGeVecF64x2 = Module['_BinaryenGeVecF64x2'] = createExportWrapper('BinaryenGeVecF64x2');
var _BinaryenNotVec128 = Module['_BinaryenNotVec128'] = createExportWrapper('BinaryenNotVec128');
var _BinaryenAndVec128 = Module['_BinaryenAndVec128'] = createExportWrapper('BinaryenAndVec128');
var _BinaryenOrVec128 = Module['_BinaryenOrVec128'] = createExportWrapper('BinaryenOrVec128');
var _BinaryenXorVec128 = Module['_BinaryenXorVec128'] = createExportWrapper('BinaryenXorVec128');
var _BinaryenAndNotVec128 = Module['_BinaryenAndNotVec128'] = createExportWrapper('BinaryenAndNotVec128');
var _BinaryenBitselectVec128 = Module['_BinaryenBitselectVec128'] = createExportWrapper('BinaryenBitselectVec128');
var _BinaryenRelaxedFmaVecF32x4 = Module['_BinaryenRelaxedFmaVecF32x4'] = createExportWrapper('BinaryenRelaxedFmaVecF32x4');
var _BinaryenRelaxedFmsVecF32x4 = Module['_BinaryenRelaxedFmsVecF32x4'] = createExportWrapper('BinaryenRelaxedFmsVecF32x4');
var _BinaryenRelaxedFmaVecF64x2 = Module['_BinaryenRelaxedFmaVecF64x2'] = createExportWrapper('BinaryenRelaxedFmaVecF64x2');
var _BinaryenRelaxedFmsVecF64x2 = Module['_BinaryenRelaxedFmsVecF64x2'] = createExportWrapper('BinaryenRelaxedFmsVecF64x2');
var _BinaryenLaneselectI8x16 = Module['_BinaryenLaneselectI8x16'] = createExportWrapper('BinaryenLaneselectI8x16');
var _BinaryenLaneselectI16x8 = Module['_BinaryenLaneselectI16x8'] = createExportWrapper('BinaryenLaneselectI16x8');
var _BinaryenLaneselectI32x4 = Module['_BinaryenLaneselectI32x4'] = createExportWrapper('BinaryenLaneselectI32x4');
var _BinaryenLaneselectI64x2 = Module['_BinaryenLaneselectI64x2'] = createExportWrapper('BinaryenLaneselectI64x2');
var _BinaryenDotI8x16I7x16AddSToVecI32x4 = Module['_BinaryenDotI8x16I7x16AddSToVecI32x4'] = createExportWrapper('BinaryenDotI8x16I7x16AddSToVecI32x4');
var _BinaryenAnyTrueVec128 = Module['_BinaryenAnyTrueVec128'] = createExportWrapper('BinaryenAnyTrueVec128');
var _BinaryenAbsVecI8x16 = Module['_BinaryenAbsVecI8x16'] = createExportWrapper('BinaryenAbsVecI8x16');
var _BinaryenNegVecI8x16 = Module['_BinaryenNegVecI8x16'] = createExportWrapper('BinaryenNegVecI8x16');
var _BinaryenAllTrueVecI8x16 = Module['_BinaryenAllTrueVecI8x16'] = createExportWrapper('BinaryenAllTrueVecI8x16');
var _BinaryenBitmaskVecI8x16 = Module['_BinaryenBitmaskVecI8x16'] = createExportWrapper('BinaryenBitmaskVecI8x16');
var _BinaryenPopcntVecI8x16 = Module['_BinaryenPopcntVecI8x16'] = createExportWrapper('BinaryenPopcntVecI8x16');
var _BinaryenShlVecI8x16 = Module['_BinaryenShlVecI8x16'] = createExportWrapper('BinaryenShlVecI8x16');
var _BinaryenShrSVecI8x16 = Module['_BinaryenShrSVecI8x16'] = createExportWrapper('BinaryenShrSVecI8x16');
var _BinaryenShrUVecI8x16 = Module['_BinaryenShrUVecI8x16'] = createExportWrapper('BinaryenShrUVecI8x16');
var _BinaryenAddVecI8x16 = Module['_BinaryenAddVecI8x16'] = createExportWrapper('BinaryenAddVecI8x16');
var _BinaryenAddSatSVecI8x16 = Module['_BinaryenAddSatSVecI8x16'] = createExportWrapper('BinaryenAddSatSVecI8x16');
var _BinaryenAddSatUVecI8x16 = Module['_BinaryenAddSatUVecI8x16'] = createExportWrapper('BinaryenAddSatUVecI8x16');
var _BinaryenSubVecI8x16 = Module['_BinaryenSubVecI8x16'] = createExportWrapper('BinaryenSubVecI8x16');
var _BinaryenSubSatSVecI8x16 = Module['_BinaryenSubSatSVecI8x16'] = createExportWrapper('BinaryenSubSatSVecI8x16');
var _BinaryenSubSatUVecI8x16 = Module['_BinaryenSubSatUVecI8x16'] = createExportWrapper('BinaryenSubSatUVecI8x16');
var _BinaryenMinSVecI8x16 = Module['_BinaryenMinSVecI8x16'] = createExportWrapper('BinaryenMinSVecI8x16');
var _BinaryenMinUVecI8x16 = Module['_BinaryenMinUVecI8x16'] = createExportWrapper('BinaryenMinUVecI8x16');
var _BinaryenMaxSVecI8x16 = Module['_BinaryenMaxSVecI8x16'] = createExportWrapper('BinaryenMaxSVecI8x16');
var _BinaryenMaxUVecI8x16 = Module['_BinaryenMaxUVecI8x16'] = createExportWrapper('BinaryenMaxUVecI8x16');
var _BinaryenAvgrUVecI8x16 = Module['_BinaryenAvgrUVecI8x16'] = createExportWrapper('BinaryenAvgrUVecI8x16');
var _BinaryenAbsVecI16x8 = Module['_BinaryenAbsVecI16x8'] = createExportWrapper('BinaryenAbsVecI16x8');
var _BinaryenNegVecI16x8 = Module['_BinaryenNegVecI16x8'] = createExportWrapper('BinaryenNegVecI16x8');
var _BinaryenAllTrueVecI16x8 = Module['_BinaryenAllTrueVecI16x8'] = createExportWrapper('BinaryenAllTrueVecI16x8');
var _BinaryenBitmaskVecI16x8 = Module['_BinaryenBitmaskVecI16x8'] = createExportWrapper('BinaryenBitmaskVecI16x8');
var _BinaryenShlVecI16x8 = Module['_BinaryenShlVecI16x8'] = createExportWrapper('BinaryenShlVecI16x8');
var _BinaryenShrSVecI16x8 = Module['_BinaryenShrSVecI16x8'] = createExportWrapper('BinaryenShrSVecI16x8');
var _BinaryenShrUVecI16x8 = Module['_BinaryenShrUVecI16x8'] = createExportWrapper('BinaryenShrUVecI16x8');
var _BinaryenAddVecI16x8 = Module['_BinaryenAddVecI16x8'] = createExportWrapper('BinaryenAddVecI16x8');
var _BinaryenAddSatSVecI16x8 = Module['_BinaryenAddSatSVecI16x8'] = createExportWrapper('BinaryenAddSatSVecI16x8');
var _BinaryenAddSatUVecI16x8 = Module['_BinaryenAddSatUVecI16x8'] = createExportWrapper('BinaryenAddSatUVecI16x8');
var _BinaryenSubVecI16x8 = Module['_BinaryenSubVecI16x8'] = createExportWrapper('BinaryenSubVecI16x8');
var _BinaryenSubSatSVecI16x8 = Module['_BinaryenSubSatSVecI16x8'] = createExportWrapper('BinaryenSubSatSVecI16x8');
var _BinaryenSubSatUVecI16x8 = Module['_BinaryenSubSatUVecI16x8'] = createExportWrapper('BinaryenSubSatUVecI16x8');
var _BinaryenMulVecI16x8 = Module['_BinaryenMulVecI16x8'] = createExportWrapper('BinaryenMulVecI16x8');
var _BinaryenMinSVecI16x8 = Module['_BinaryenMinSVecI16x8'] = createExportWrapper('BinaryenMinSVecI16x8');
var _BinaryenMinUVecI16x8 = Module['_BinaryenMinUVecI16x8'] = createExportWrapper('BinaryenMinUVecI16x8');
var _BinaryenMaxSVecI16x8 = Module['_BinaryenMaxSVecI16x8'] = createExportWrapper('BinaryenMaxSVecI16x8');
var _BinaryenMaxUVecI16x8 = Module['_BinaryenMaxUVecI16x8'] = createExportWrapper('BinaryenMaxUVecI16x8');
var _BinaryenAvgrUVecI16x8 = Module['_BinaryenAvgrUVecI16x8'] = createExportWrapper('BinaryenAvgrUVecI16x8');
var _BinaryenQ15MulrSatSVecI16x8 = Module['_BinaryenQ15MulrSatSVecI16x8'] = createExportWrapper('BinaryenQ15MulrSatSVecI16x8');
var _BinaryenExtMulLowSVecI16x8 = Module['_BinaryenExtMulLowSVecI16x8'] = createExportWrapper('BinaryenExtMulLowSVecI16x8');
var _BinaryenExtMulHighSVecI16x8 = Module['_BinaryenExtMulHighSVecI16x8'] = createExportWrapper('BinaryenExtMulHighSVecI16x8');
var _BinaryenExtMulLowUVecI16x8 = Module['_BinaryenExtMulLowUVecI16x8'] = createExportWrapper('BinaryenExtMulLowUVecI16x8');
var _BinaryenExtMulHighUVecI16x8 = Module['_BinaryenExtMulHighUVecI16x8'] = createExportWrapper('BinaryenExtMulHighUVecI16x8');
var _BinaryenAbsVecI32x4 = Module['_BinaryenAbsVecI32x4'] = createExportWrapper('BinaryenAbsVecI32x4');
var _BinaryenNegVecI32x4 = Module['_BinaryenNegVecI32x4'] = createExportWrapper('BinaryenNegVecI32x4');
var _BinaryenAllTrueVecI32x4 = Module['_BinaryenAllTrueVecI32x4'] = createExportWrapper('BinaryenAllTrueVecI32x4');
var _BinaryenBitmaskVecI32x4 = Module['_BinaryenBitmaskVecI32x4'] = createExportWrapper('BinaryenBitmaskVecI32x4');
var _BinaryenShlVecI32x4 = Module['_BinaryenShlVecI32x4'] = createExportWrapper('BinaryenShlVecI32x4');
var _BinaryenShrSVecI32x4 = Module['_BinaryenShrSVecI32x4'] = createExportWrapper('BinaryenShrSVecI32x4');
var _BinaryenShrUVecI32x4 = Module['_BinaryenShrUVecI32x4'] = createExportWrapper('BinaryenShrUVecI32x4');
var _BinaryenAddVecI32x4 = Module['_BinaryenAddVecI32x4'] = createExportWrapper('BinaryenAddVecI32x4');
var _BinaryenSubVecI32x4 = Module['_BinaryenSubVecI32x4'] = createExportWrapper('BinaryenSubVecI32x4');
var _BinaryenMulVecI32x4 = Module['_BinaryenMulVecI32x4'] = createExportWrapper('BinaryenMulVecI32x4');
var _BinaryenMinSVecI32x4 = Module['_BinaryenMinSVecI32x4'] = createExportWrapper('BinaryenMinSVecI32x4');
var _BinaryenMinUVecI32x4 = Module['_BinaryenMinUVecI32x4'] = createExportWrapper('BinaryenMinUVecI32x4');
var _BinaryenMaxSVecI32x4 = Module['_BinaryenMaxSVecI32x4'] = createExportWrapper('BinaryenMaxSVecI32x4');
var _BinaryenMaxUVecI32x4 = Module['_BinaryenMaxUVecI32x4'] = createExportWrapper('BinaryenMaxUVecI32x4');
var _BinaryenDotSVecI16x8ToVecI32x4 = Module['_BinaryenDotSVecI16x8ToVecI32x4'] = createExportWrapper('BinaryenDotSVecI16x8ToVecI32x4');
var _BinaryenExtMulLowSVecI32x4 = Module['_BinaryenExtMulLowSVecI32x4'] = createExportWrapper('BinaryenExtMulLowSVecI32x4');
var _BinaryenExtMulHighSVecI32x4 = Module['_BinaryenExtMulHighSVecI32x4'] = createExportWrapper('BinaryenExtMulHighSVecI32x4');
var _BinaryenExtMulLowUVecI32x4 = Module['_BinaryenExtMulLowUVecI32x4'] = createExportWrapper('BinaryenExtMulLowUVecI32x4');
var _BinaryenExtMulHighUVecI32x4 = Module['_BinaryenExtMulHighUVecI32x4'] = createExportWrapper('BinaryenExtMulHighUVecI32x4');
var _BinaryenAbsVecI64x2 = Module['_BinaryenAbsVecI64x2'] = createExportWrapper('BinaryenAbsVecI64x2');
var _BinaryenNegVecI64x2 = Module['_BinaryenNegVecI64x2'] = createExportWrapper('BinaryenNegVecI64x2');
var _BinaryenAllTrueVecI64x2 = Module['_BinaryenAllTrueVecI64x2'] = createExportWrapper('BinaryenAllTrueVecI64x2');
var _BinaryenBitmaskVecI64x2 = Module['_BinaryenBitmaskVecI64x2'] = createExportWrapper('BinaryenBitmaskVecI64x2');
var _BinaryenShlVecI64x2 = Module['_BinaryenShlVecI64x2'] = createExportWrapper('BinaryenShlVecI64x2');
var _BinaryenShrSVecI64x2 = Module['_BinaryenShrSVecI64x2'] = createExportWrapper('BinaryenShrSVecI64x2');
var _BinaryenShrUVecI64x2 = Module['_BinaryenShrUVecI64x2'] = createExportWrapper('BinaryenShrUVecI64x2');
var _BinaryenAddVecI64x2 = Module['_BinaryenAddVecI64x2'] = createExportWrapper('BinaryenAddVecI64x2');
var _BinaryenSubVecI64x2 = Module['_BinaryenSubVecI64x2'] = createExportWrapper('BinaryenSubVecI64x2');
var _BinaryenMulVecI64x2 = Module['_BinaryenMulVecI64x2'] = createExportWrapper('BinaryenMulVecI64x2');
var _BinaryenExtMulLowSVecI64x2 = Module['_BinaryenExtMulLowSVecI64x2'] = createExportWrapper('BinaryenExtMulLowSVecI64x2');
var _BinaryenExtMulHighSVecI64x2 = Module['_BinaryenExtMulHighSVecI64x2'] = createExportWrapper('BinaryenExtMulHighSVecI64x2');
var _BinaryenExtMulLowUVecI64x2 = Module['_BinaryenExtMulLowUVecI64x2'] = createExportWrapper('BinaryenExtMulLowUVecI64x2');
var _BinaryenExtMulHighUVecI64x2 = Module['_BinaryenExtMulHighUVecI64x2'] = createExportWrapper('BinaryenExtMulHighUVecI64x2');
var _BinaryenAbsVecF32x4 = Module['_BinaryenAbsVecF32x4'] = createExportWrapper('BinaryenAbsVecF32x4');
var _BinaryenNegVecF32x4 = Module['_BinaryenNegVecF32x4'] = createExportWrapper('BinaryenNegVecF32x4');
var _BinaryenSqrtVecF32x4 = Module['_BinaryenSqrtVecF32x4'] = createExportWrapper('BinaryenSqrtVecF32x4');
var _BinaryenAddVecF32x4 = Module['_BinaryenAddVecF32x4'] = createExportWrapper('BinaryenAddVecF32x4');
var _BinaryenSubVecF32x4 = Module['_BinaryenSubVecF32x4'] = createExportWrapper('BinaryenSubVecF32x4');
var _BinaryenMulVecF32x4 = Module['_BinaryenMulVecF32x4'] = createExportWrapper('BinaryenMulVecF32x4');
var _BinaryenDivVecF32x4 = Module['_BinaryenDivVecF32x4'] = createExportWrapper('BinaryenDivVecF32x4');
var _BinaryenMinVecF32x4 = Module['_BinaryenMinVecF32x4'] = createExportWrapper('BinaryenMinVecF32x4');
var _BinaryenMaxVecF32x4 = Module['_BinaryenMaxVecF32x4'] = createExportWrapper('BinaryenMaxVecF32x4');
var _BinaryenPMinVecF32x4 = Module['_BinaryenPMinVecF32x4'] = createExportWrapper('BinaryenPMinVecF32x4');
var _BinaryenCeilVecF32x4 = Module['_BinaryenCeilVecF32x4'] = createExportWrapper('BinaryenCeilVecF32x4');
var _BinaryenFloorVecF32x4 = Module['_BinaryenFloorVecF32x4'] = createExportWrapper('BinaryenFloorVecF32x4');
var _BinaryenTruncVecF32x4 = Module['_BinaryenTruncVecF32x4'] = createExportWrapper('BinaryenTruncVecF32x4');
var _BinaryenNearestVecF32x4 = Module['_BinaryenNearestVecF32x4'] = createExportWrapper('BinaryenNearestVecF32x4');
var _BinaryenPMaxVecF32x4 = Module['_BinaryenPMaxVecF32x4'] = createExportWrapper('BinaryenPMaxVecF32x4');
var _BinaryenAbsVecF64x2 = Module['_BinaryenAbsVecF64x2'] = createExportWrapper('BinaryenAbsVecF64x2');
var _BinaryenNegVecF64x2 = Module['_BinaryenNegVecF64x2'] = createExportWrapper('BinaryenNegVecF64x2');
var _BinaryenSqrtVecF64x2 = Module['_BinaryenSqrtVecF64x2'] = createExportWrapper('BinaryenSqrtVecF64x2');
var _BinaryenAddVecF64x2 = Module['_BinaryenAddVecF64x2'] = createExportWrapper('BinaryenAddVecF64x2');
var _BinaryenSubVecF64x2 = Module['_BinaryenSubVecF64x2'] = createExportWrapper('BinaryenSubVecF64x2');
var _BinaryenMulVecF64x2 = Module['_BinaryenMulVecF64x2'] = createExportWrapper('BinaryenMulVecF64x2');
var _BinaryenDivVecF64x2 = Module['_BinaryenDivVecF64x2'] = createExportWrapper('BinaryenDivVecF64x2');
var _BinaryenMinVecF64x2 = Module['_BinaryenMinVecF64x2'] = createExportWrapper('BinaryenMinVecF64x2');
var _BinaryenMaxVecF64x2 = Module['_BinaryenMaxVecF64x2'] = createExportWrapper('BinaryenMaxVecF64x2');
var _BinaryenPMinVecF64x2 = Module['_BinaryenPMinVecF64x2'] = createExportWrapper('BinaryenPMinVecF64x2');
var _BinaryenPMaxVecF64x2 = Module['_BinaryenPMaxVecF64x2'] = createExportWrapper('BinaryenPMaxVecF64x2');
var _BinaryenCeilVecF64x2 = Module['_BinaryenCeilVecF64x2'] = createExportWrapper('BinaryenCeilVecF64x2');
var _BinaryenFloorVecF64x2 = Module['_BinaryenFloorVecF64x2'] = createExportWrapper('BinaryenFloorVecF64x2');
var _BinaryenTruncVecF64x2 = Module['_BinaryenTruncVecF64x2'] = createExportWrapper('BinaryenTruncVecF64x2');
var _BinaryenNearestVecF64x2 = Module['_BinaryenNearestVecF64x2'] = createExportWrapper('BinaryenNearestVecF64x2');
var _BinaryenExtAddPairwiseSVecI8x16ToI16x8 = Module['_BinaryenExtAddPairwiseSVecI8x16ToI16x8'] = createExportWrapper('BinaryenExtAddPairwiseSVecI8x16ToI16x8');
var _BinaryenExtAddPairwiseUVecI8x16ToI16x8 = Module['_BinaryenExtAddPairwiseUVecI8x16ToI16x8'] = createExportWrapper('BinaryenExtAddPairwiseUVecI8x16ToI16x8');
var _BinaryenExtAddPairwiseSVecI16x8ToI32x4 = Module['_BinaryenExtAddPairwiseSVecI16x8ToI32x4'] = createExportWrapper('BinaryenExtAddPairwiseSVecI16x8ToI32x4');
var _BinaryenExtAddPairwiseUVecI16x8ToI32x4 = Module['_BinaryenExtAddPairwiseUVecI16x8ToI32x4'] = createExportWrapper('BinaryenExtAddPairwiseUVecI16x8ToI32x4');
var _BinaryenTruncSatSVecF32x4ToVecI32x4 = Module['_BinaryenTruncSatSVecF32x4ToVecI32x4'] = createExportWrapper('BinaryenTruncSatSVecF32x4ToVecI32x4');
var _BinaryenTruncSatUVecF32x4ToVecI32x4 = Module['_BinaryenTruncSatUVecF32x4ToVecI32x4'] = createExportWrapper('BinaryenTruncSatUVecF32x4ToVecI32x4');
var _BinaryenConvertSVecI32x4ToVecF32x4 = Module['_BinaryenConvertSVecI32x4ToVecF32x4'] = createExportWrapper('BinaryenConvertSVecI32x4ToVecF32x4');
var _BinaryenConvertUVecI32x4ToVecF32x4 = Module['_BinaryenConvertUVecI32x4ToVecF32x4'] = createExportWrapper('BinaryenConvertUVecI32x4ToVecF32x4');
var _BinaryenLoad8SplatVec128 = Module['_BinaryenLoad8SplatVec128'] = createExportWrapper('BinaryenLoad8SplatVec128');
var _BinaryenLoad16SplatVec128 = Module['_BinaryenLoad16SplatVec128'] = createExportWrapper('BinaryenLoad16SplatVec128');
var _BinaryenLoad32SplatVec128 = Module['_BinaryenLoad32SplatVec128'] = createExportWrapper('BinaryenLoad32SplatVec128');
var _BinaryenLoad64SplatVec128 = Module['_BinaryenLoad64SplatVec128'] = createExportWrapper('BinaryenLoad64SplatVec128');
var _BinaryenLoad8x8SVec128 = Module['_BinaryenLoad8x8SVec128'] = createExportWrapper('BinaryenLoad8x8SVec128');
var _BinaryenLoad8x8UVec128 = Module['_BinaryenLoad8x8UVec128'] = createExportWrapper('BinaryenLoad8x8UVec128');
var _BinaryenLoad16x4SVec128 = Module['_BinaryenLoad16x4SVec128'] = createExportWrapper('BinaryenLoad16x4SVec128');
var _BinaryenLoad16x4UVec128 = Module['_BinaryenLoad16x4UVec128'] = createExportWrapper('BinaryenLoad16x4UVec128');
var _BinaryenLoad32x2SVec128 = Module['_BinaryenLoad32x2SVec128'] = createExportWrapper('BinaryenLoad32x2SVec128');
var _BinaryenLoad32x2UVec128 = Module['_BinaryenLoad32x2UVec128'] = createExportWrapper('BinaryenLoad32x2UVec128');
var _BinaryenLoad32ZeroVec128 = Module['_BinaryenLoad32ZeroVec128'] = createExportWrapper('BinaryenLoad32ZeroVec128');
var _BinaryenLoad64ZeroVec128 = Module['_BinaryenLoad64ZeroVec128'] = createExportWrapper('BinaryenLoad64ZeroVec128');
var _BinaryenLoad8LaneVec128 = Module['_BinaryenLoad8LaneVec128'] = createExportWrapper('BinaryenLoad8LaneVec128');
var _BinaryenLoad16LaneVec128 = Module['_BinaryenLoad16LaneVec128'] = createExportWrapper('BinaryenLoad16LaneVec128');
var _BinaryenLoad32LaneVec128 = Module['_BinaryenLoad32LaneVec128'] = createExportWrapper('BinaryenLoad32LaneVec128');
var _BinaryenLoad64LaneVec128 = Module['_BinaryenLoad64LaneVec128'] = createExportWrapper('BinaryenLoad64LaneVec128');
var _BinaryenStore8LaneVec128 = Module['_BinaryenStore8LaneVec128'] = createExportWrapper('BinaryenStore8LaneVec128');
var _BinaryenStore16LaneVec128 = Module['_BinaryenStore16LaneVec128'] = createExportWrapper('BinaryenStore16LaneVec128');
var _BinaryenStore32LaneVec128 = Module['_BinaryenStore32LaneVec128'] = createExportWrapper('BinaryenStore32LaneVec128');
var _BinaryenStore64LaneVec128 = Module['_BinaryenStore64LaneVec128'] = createExportWrapper('BinaryenStore64LaneVec128');
var _BinaryenNarrowSVecI16x8ToVecI8x16 = Module['_BinaryenNarrowSVecI16x8ToVecI8x16'] = createExportWrapper('BinaryenNarrowSVecI16x8ToVecI8x16');
var _BinaryenNarrowUVecI16x8ToVecI8x16 = Module['_BinaryenNarrowUVecI16x8ToVecI8x16'] = createExportWrapper('BinaryenNarrowUVecI16x8ToVecI8x16');
var _BinaryenNarrowSVecI32x4ToVecI16x8 = Module['_BinaryenNarrowSVecI32x4ToVecI16x8'] = createExportWrapper('BinaryenNarrowSVecI32x4ToVecI16x8');
var _BinaryenNarrowUVecI32x4ToVecI16x8 = Module['_BinaryenNarrowUVecI32x4ToVecI16x8'] = createExportWrapper('BinaryenNarrowUVecI32x4ToVecI16x8');
var _BinaryenExtendLowSVecI8x16ToVecI16x8 = Module['_BinaryenExtendLowSVecI8x16ToVecI16x8'] = createExportWrapper('BinaryenExtendLowSVecI8x16ToVecI16x8');
var _BinaryenExtendHighSVecI8x16ToVecI16x8 = Module['_BinaryenExtendHighSVecI8x16ToVecI16x8'] = createExportWrapper('BinaryenExtendHighSVecI8x16ToVecI16x8');
var _BinaryenExtendLowUVecI8x16ToVecI16x8 = Module['_BinaryenExtendLowUVecI8x16ToVecI16x8'] = createExportWrapper('BinaryenExtendLowUVecI8x16ToVecI16x8');
var _BinaryenExtendHighUVecI8x16ToVecI16x8 = Module['_BinaryenExtendHighUVecI8x16ToVecI16x8'] = createExportWrapper('BinaryenExtendHighUVecI8x16ToVecI16x8');
var _BinaryenExtendLowSVecI16x8ToVecI32x4 = Module['_BinaryenExtendLowSVecI16x8ToVecI32x4'] = createExportWrapper('BinaryenExtendLowSVecI16x8ToVecI32x4');
var _BinaryenExtendHighSVecI16x8ToVecI32x4 = Module['_BinaryenExtendHighSVecI16x8ToVecI32x4'] = createExportWrapper('BinaryenExtendHighSVecI16x8ToVecI32x4');
var _BinaryenExtendLowUVecI16x8ToVecI32x4 = Module['_BinaryenExtendLowUVecI16x8ToVecI32x4'] = createExportWrapper('BinaryenExtendLowUVecI16x8ToVecI32x4');
var _BinaryenExtendHighUVecI16x8ToVecI32x4 = Module['_BinaryenExtendHighUVecI16x8ToVecI32x4'] = createExportWrapper('BinaryenExtendHighUVecI16x8ToVecI32x4');
var _BinaryenExtendLowSVecI32x4ToVecI64x2 = Module['_BinaryenExtendLowSVecI32x4ToVecI64x2'] = createExportWrapper('BinaryenExtendLowSVecI32x4ToVecI64x2');
var _BinaryenExtendHighSVecI32x4ToVecI64x2 = Module['_BinaryenExtendHighSVecI32x4ToVecI64x2'] = createExportWrapper('BinaryenExtendHighSVecI32x4ToVecI64x2');
var _BinaryenExtendLowUVecI32x4ToVecI64x2 = Module['_BinaryenExtendLowUVecI32x4ToVecI64x2'] = createExportWrapper('BinaryenExtendLowUVecI32x4ToVecI64x2');
var _BinaryenExtendHighUVecI32x4ToVecI64x2 = Module['_BinaryenExtendHighUVecI32x4ToVecI64x2'] = createExportWrapper('BinaryenExtendHighUVecI32x4ToVecI64x2');
var _BinaryenConvertLowSVecI32x4ToVecF64x2 = Module['_BinaryenConvertLowSVecI32x4ToVecF64x2'] = createExportWrapper('BinaryenConvertLowSVecI32x4ToVecF64x2');
var _BinaryenConvertLowUVecI32x4ToVecF64x2 = Module['_BinaryenConvertLowUVecI32x4ToVecF64x2'] = createExportWrapper('BinaryenConvertLowUVecI32x4ToVecF64x2');
var _BinaryenTruncSatZeroSVecF64x2ToVecI32x4 = Module['_BinaryenTruncSatZeroSVecF64x2ToVecI32x4'] = createExportWrapper('BinaryenTruncSatZeroSVecF64x2ToVecI32x4');
var _BinaryenTruncSatZeroUVecF64x2ToVecI32x4 = Module['_BinaryenTruncSatZeroUVecF64x2ToVecI32x4'] = createExportWrapper('BinaryenTruncSatZeroUVecF64x2ToVecI32x4');
var _BinaryenDemoteZeroVecF64x2ToVecF32x4 = Module['_BinaryenDemoteZeroVecF64x2ToVecF32x4'] = createExportWrapper('BinaryenDemoteZeroVecF64x2ToVecF32x4');
var _BinaryenPromoteLowVecF32x4ToVecF64x2 = Module['_BinaryenPromoteLowVecF32x4ToVecF64x2'] = createExportWrapper('BinaryenPromoteLowVecF32x4ToVecF64x2');
var _BinaryenRelaxedTruncSVecF32x4ToVecI32x4 = Module['_BinaryenRelaxedTruncSVecF32x4ToVecI32x4'] = createExportWrapper('BinaryenRelaxedTruncSVecF32x4ToVecI32x4');
var _BinaryenRelaxedTruncUVecF32x4ToVecI32x4 = Module['_BinaryenRelaxedTruncUVecF32x4ToVecI32x4'] = createExportWrapper('BinaryenRelaxedTruncUVecF32x4ToVecI32x4');
var _BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4 = Module['_BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4'] = createExportWrapper('BinaryenRelaxedTruncZeroSVecF64x2ToVecI32x4');
var _BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4 = Module['_BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4'] = createExportWrapper('BinaryenRelaxedTruncZeroUVecF64x2ToVecI32x4');
var _BinaryenSwizzleVecI8x16 = Module['_BinaryenSwizzleVecI8x16'] = createExportWrapper('BinaryenSwizzleVecI8x16');
var _BinaryenRelaxedSwizzleVecI8x16 = Module['_BinaryenRelaxedSwizzleVecI8x16'] = createExportWrapper('BinaryenRelaxedSwizzleVecI8x16');
var _BinaryenRelaxedMinVecF32x4 = Module['_BinaryenRelaxedMinVecF32x4'] = createExportWrapper('BinaryenRelaxedMinVecF32x4');
var _BinaryenRelaxedMaxVecF32x4 = Module['_BinaryenRelaxedMaxVecF32x4'] = createExportWrapper('BinaryenRelaxedMaxVecF32x4');
var _BinaryenRelaxedMinVecF64x2 = Module['_BinaryenRelaxedMinVecF64x2'] = createExportWrapper('BinaryenRelaxedMinVecF64x2');
var _BinaryenRelaxedMaxVecF64x2 = Module['_BinaryenRelaxedMaxVecF64x2'] = createExportWrapper('BinaryenRelaxedMaxVecF64x2');
var _BinaryenRelaxedQ15MulrSVecI16x8 = Module['_BinaryenRelaxedQ15MulrSVecI16x8'] = createExportWrapper('BinaryenRelaxedQ15MulrSVecI16x8');
var _BinaryenDotI8x16I7x16SToVecI16x8 = Module['_BinaryenDotI8x16I7x16SToVecI16x8'] = createExportWrapper('BinaryenDotI8x16I7x16SToVecI16x8');
var _BinaryenRefAsNonNull = Module['_BinaryenRefAsNonNull'] = createExportWrapper('BinaryenRefAsNonNull');
var _BinaryenRefAsExternInternalize = Module['_BinaryenRefAsExternInternalize'] = createExportWrapper('BinaryenRefAsExternInternalize');
var _BinaryenRefAsExternExternalize = Module['_BinaryenRefAsExternExternalize'] = createExportWrapper('BinaryenRefAsExternExternalize');
var _BinaryenBrOnNull = Module['_BinaryenBrOnNull'] = createExportWrapper('BinaryenBrOnNull');
var _BinaryenBrOnNonNull = Module['_BinaryenBrOnNonNull'] = createExportWrapper('BinaryenBrOnNonNull');
var _BinaryenBrOnCast = Module['_BinaryenBrOnCast'] = createExportWrapper('BinaryenBrOnCast');
var _BinaryenBrOnCastFail = Module['_BinaryenBrOnCastFail'] = createExportWrapper('BinaryenBrOnCastFail');
var _BinaryenStringNewUTF8 = Module['_BinaryenStringNewUTF8'] = createExportWrapper('BinaryenStringNewUTF8');
var _BinaryenStringNewWTF8 = Module['_BinaryenStringNewWTF8'] = createExportWrapper('BinaryenStringNewWTF8');
var _BinaryenStringNewLossyUTF8 = Module['_BinaryenStringNewLossyUTF8'] = createExportWrapper('BinaryenStringNewLossyUTF8');
var _BinaryenStringNewWTF16 = Module['_BinaryenStringNewWTF16'] = createExportWrapper('BinaryenStringNewWTF16');
var _BinaryenStringNewUTF8Array = Module['_BinaryenStringNewUTF8Array'] = createExportWrapper('BinaryenStringNewUTF8Array');
var _BinaryenStringNewWTF8Array = Module['_BinaryenStringNewWTF8Array'] = createExportWrapper('BinaryenStringNewWTF8Array');
var _BinaryenStringNewLossyUTF8Array = Module['_BinaryenStringNewLossyUTF8Array'] = createExportWrapper('BinaryenStringNewLossyUTF8Array');
var _BinaryenStringNewWTF16Array = Module['_BinaryenStringNewWTF16Array'] = createExportWrapper('BinaryenStringNewWTF16Array');
var _BinaryenStringNewFromCodePoint = Module['_BinaryenStringNewFromCodePoint'] = createExportWrapper('BinaryenStringNewFromCodePoint');
var _BinaryenStringMeasureUTF8 = Module['_BinaryenStringMeasureUTF8'] = createExportWrapper('BinaryenStringMeasureUTF8');
var _BinaryenStringMeasureWTF8 = Module['_BinaryenStringMeasureWTF8'] = createExportWrapper('BinaryenStringMeasureWTF8');
var _BinaryenStringMeasureWTF16 = Module['_BinaryenStringMeasureWTF16'] = createExportWrapper('BinaryenStringMeasureWTF16');
var _BinaryenStringMeasureIsUSV = Module['_BinaryenStringMeasureIsUSV'] = createExportWrapper('BinaryenStringMeasureIsUSV');
var _BinaryenStringMeasureWTF16View = Module['_BinaryenStringMeasureWTF16View'] = createExportWrapper('BinaryenStringMeasureWTF16View');
var _BinaryenStringEncodeUTF8 = Module['_BinaryenStringEncodeUTF8'] = createExportWrapper('BinaryenStringEncodeUTF8');
var _BinaryenStringEncodeLossyUTF8 = Module['_BinaryenStringEncodeLossyUTF8'] = createExportWrapper('BinaryenStringEncodeLossyUTF8');
var _BinaryenStringEncodeWTF8 = Module['_BinaryenStringEncodeWTF8'] = createExportWrapper('BinaryenStringEncodeWTF8');
var _BinaryenStringEncodeWTF16 = Module['_BinaryenStringEncodeWTF16'] = createExportWrapper('BinaryenStringEncodeWTF16');
var _BinaryenStringEncodeUTF8Array = Module['_BinaryenStringEncodeUTF8Array'] = createExportWrapper('BinaryenStringEncodeUTF8Array');
var _BinaryenStringEncodeLossyUTF8Array = Module['_BinaryenStringEncodeLossyUTF8Array'] = createExportWrapper('BinaryenStringEncodeLossyUTF8Array');
var _BinaryenStringEncodeWTF8Array = Module['_BinaryenStringEncodeWTF8Array'] = createExportWrapper('BinaryenStringEncodeWTF8Array');
var _BinaryenStringEncodeWTF16Array = Module['_BinaryenStringEncodeWTF16Array'] = createExportWrapper('BinaryenStringEncodeWTF16Array');
var _BinaryenStringAsWTF8 = Module['_BinaryenStringAsWTF8'] = createExportWrapper('BinaryenStringAsWTF8');
var _BinaryenStringAsWTF16 = Module['_BinaryenStringAsWTF16'] = createExportWrapper('BinaryenStringAsWTF16');
var _BinaryenStringAsIter = Module['_BinaryenStringAsIter'] = createExportWrapper('BinaryenStringAsIter');
var _BinaryenStringIterMoveAdvance = Module['_BinaryenStringIterMoveAdvance'] = createExportWrapper('BinaryenStringIterMoveAdvance');
var _BinaryenStringIterMoveRewind = Module['_BinaryenStringIterMoveRewind'] = createExportWrapper('BinaryenStringIterMoveRewind');
var _BinaryenStringSliceWTF8 = Module['_BinaryenStringSliceWTF8'] = createExportWrapper('BinaryenStringSliceWTF8');
var _BinaryenStringSliceWTF16 = Module['_BinaryenStringSliceWTF16'] = createExportWrapper('BinaryenStringSliceWTF16');
var _BinaryenStringEqEqual = Module['_BinaryenStringEqEqual'] = createExportWrapper('BinaryenStringEqEqual');
var _BinaryenStringEqCompare = Module['_BinaryenStringEqCompare'] = createExportWrapper('BinaryenStringEqCompare');
var _BinaryenBlock = Module['_BinaryenBlock'] = createExportWrapper('BinaryenBlock');
var _BinaryenIf = Module['_BinaryenIf'] = createExportWrapper('BinaryenIf');
var _BinaryenLoop = Module['_BinaryenLoop'] = createExportWrapper('BinaryenLoop');
var _BinaryenBreak = Module['_BinaryenBreak'] = createExportWrapper('BinaryenBreak');
var _BinaryenSwitch = Module['_BinaryenSwitch'] = createExportWrapper('BinaryenSwitch');
var _BinaryenCall = Module['_BinaryenCall'] = createExportWrapper('BinaryenCall');
var _BinaryenReturnCall = Module['_BinaryenReturnCall'] = createExportWrapper('BinaryenReturnCall');
var _BinaryenCallIndirect = Module['_BinaryenCallIndirect'] = createExportWrapper('BinaryenCallIndirect');
var _BinaryenReturnCallIndirect = Module['_BinaryenReturnCallIndirect'] = createExportWrapper('BinaryenReturnCallIndirect');
var _BinaryenLocalGet = Module['_BinaryenLocalGet'] = createExportWrapper('BinaryenLocalGet');
var _BinaryenLocalSet = Module['_BinaryenLocalSet'] = createExportWrapper('BinaryenLocalSet');
var _BinaryenLocalTee = Module['_BinaryenLocalTee'] = createExportWrapper('BinaryenLocalTee');
var _BinaryenGlobalGet = Module['_BinaryenGlobalGet'] = createExportWrapper('BinaryenGlobalGet');
var _BinaryenGlobalSet = Module['_BinaryenGlobalSet'] = createExportWrapper('BinaryenGlobalSet');
var _BinaryenLoad = Module['_BinaryenLoad'] = createExportWrapper('BinaryenLoad');
var _BinaryenStore = Module['_BinaryenStore'] = createExportWrapper('BinaryenStore');
var _BinaryenConst = Module['_BinaryenConst'] = createExportWrapper('BinaryenConst');
var _BinaryenUnary = Module['_BinaryenUnary'] = createExportWrapper('BinaryenUnary');
var _BinaryenBinary = Module['_BinaryenBinary'] = createExportWrapper('BinaryenBinary');
var _BinaryenSelect = Module['_BinaryenSelect'] = createExportWrapper('BinaryenSelect');
var _BinaryenDrop = Module['_BinaryenDrop'] = createExportWrapper('BinaryenDrop');
var _BinaryenReturn = Module['_BinaryenReturn'] = createExportWrapper('BinaryenReturn');
var _BinaryenMemorySize = Module['_BinaryenMemorySize'] = createExportWrapper('BinaryenMemorySize');
var _BinaryenMemoryGrow = Module['_BinaryenMemoryGrow'] = createExportWrapper('BinaryenMemoryGrow');
var _BinaryenNop = Module['_BinaryenNop'] = createExportWrapper('BinaryenNop');
var _BinaryenUnreachable = Module['_BinaryenUnreachable'] = createExportWrapper('BinaryenUnreachable');
var _BinaryenAtomicLoad = Module['_BinaryenAtomicLoad'] = createExportWrapper('BinaryenAtomicLoad');
var _BinaryenAtomicStore = Module['_BinaryenAtomicStore'] = createExportWrapper('BinaryenAtomicStore');
var _BinaryenAtomicRMW = Module['_BinaryenAtomicRMW'] = createExportWrapper('BinaryenAtomicRMW');
var _BinaryenAtomicCmpxchg = Module['_BinaryenAtomicCmpxchg'] = createExportWrapper('BinaryenAtomicCmpxchg');
var _BinaryenAtomicWait = Module['_BinaryenAtomicWait'] = createExportWrapper('BinaryenAtomicWait');
var _BinaryenAtomicNotify = Module['_BinaryenAtomicNotify'] = createExportWrapper('BinaryenAtomicNotify');
var _BinaryenAtomicFence = Module['_BinaryenAtomicFence'] = createExportWrapper('BinaryenAtomicFence');
var _BinaryenSIMDExtract = Module['_BinaryenSIMDExtract'] = createExportWrapper('BinaryenSIMDExtract');
var _BinaryenSIMDReplace = Module['_BinaryenSIMDReplace'] = createExportWrapper('BinaryenSIMDReplace');
var _BinaryenSIMDShuffle = Module['_BinaryenSIMDShuffle'] = createExportWrapper('BinaryenSIMDShuffle');
var _BinaryenSIMDTernary = Module['_BinaryenSIMDTernary'] = createExportWrapper('BinaryenSIMDTernary');
var _BinaryenSIMDShift = Module['_BinaryenSIMDShift'] = createExportWrapper('BinaryenSIMDShift');
var _BinaryenSIMDLoad = Module['_BinaryenSIMDLoad'] = createExportWrapper('BinaryenSIMDLoad');
var _BinaryenSIMDLoadStoreLane = Module['_BinaryenSIMDLoadStoreLane'] = createExportWrapper('BinaryenSIMDLoadStoreLane');
var _BinaryenMemoryInit = Module['_BinaryenMemoryInit'] = createExportWrapper('BinaryenMemoryInit');
var _BinaryenDataDrop = Module['_BinaryenDataDrop'] = createExportWrapper('BinaryenDataDrop');
var _BinaryenMemoryCopy = Module['_BinaryenMemoryCopy'] = createExportWrapper('BinaryenMemoryCopy');
var _BinaryenMemoryFill = Module['_BinaryenMemoryFill'] = createExportWrapper('BinaryenMemoryFill');
var _BinaryenTupleMake = Module['_BinaryenTupleMake'] = createExportWrapper('BinaryenTupleMake');
var _BinaryenTupleExtract = Module['_BinaryenTupleExtract'] = createExportWrapper('BinaryenTupleExtract');
var _BinaryenPop = Module['_BinaryenPop'] = createExportWrapper('BinaryenPop');
var _BinaryenRefNull = Module['_BinaryenRefNull'] = createExportWrapper('BinaryenRefNull');
var _BinaryenRefIsNull = Module['_BinaryenRefIsNull'] = createExportWrapper('BinaryenRefIsNull');
var _BinaryenRefAs = Module['_BinaryenRefAs'] = createExportWrapper('BinaryenRefAs');
var _BinaryenRefFunc = Module['_BinaryenRefFunc'] = createExportWrapper('BinaryenRefFunc');
var _BinaryenRefEq = Module['_BinaryenRefEq'] = createExportWrapper('BinaryenRefEq');
var _BinaryenTableGet = Module['_BinaryenTableGet'] = createExportWrapper('BinaryenTableGet');
var _BinaryenTableSet = Module['_BinaryenTableSet'] = createExportWrapper('BinaryenTableSet');
var _BinaryenTableSize = Module['_BinaryenTableSize'] = createExportWrapper('BinaryenTableSize');
var _BinaryenTableGrow = Module['_BinaryenTableGrow'] = createExportWrapper('BinaryenTableGrow');
var _BinaryenTry = Module['_BinaryenTry'] = createExportWrapper('BinaryenTry');
var _BinaryenThrow = Module['_BinaryenThrow'] = createExportWrapper('BinaryenThrow');
var _BinaryenRethrow = Module['_BinaryenRethrow'] = createExportWrapper('BinaryenRethrow');
var _BinaryenRefI31 = Module['_BinaryenRefI31'] = createExportWrapper('BinaryenRefI31');
var _BinaryenI31Get = Module['_BinaryenI31Get'] = createExportWrapper('BinaryenI31Get');
var _BinaryenCallRef = Module['_BinaryenCallRef'] = createExportWrapper('BinaryenCallRef');
var _BinaryenRefTest = Module['_BinaryenRefTest'] = createExportWrapper('BinaryenRefTest');
var _BinaryenRefCast = Module['_BinaryenRefCast'] = createExportWrapper('BinaryenRefCast');
var _BinaryenBrOn = Module['_BinaryenBrOn'] = createExportWrapper('BinaryenBrOn');
var _BinaryenStructNew = Module['_BinaryenStructNew'] = createExportWrapper('BinaryenStructNew');
var _BinaryenStructGet = Module['_BinaryenStructGet'] = createExportWrapper('BinaryenStructGet');
var _BinaryenStructSet = Module['_BinaryenStructSet'] = createExportWrapper('BinaryenStructSet');
var _BinaryenArrayNew = Module['_BinaryenArrayNew'] = createExportWrapper('BinaryenArrayNew');
var _BinaryenArrayNewData = Module['_BinaryenArrayNewData'] = createExportWrapper('BinaryenArrayNewData');
var _BinaryenArrayNewFixed = Module['_BinaryenArrayNewFixed'] = createExportWrapper('BinaryenArrayNewFixed');
var _BinaryenArrayGet = Module['_BinaryenArrayGet'] = createExportWrapper('BinaryenArrayGet');
var _BinaryenArraySet = Module['_BinaryenArraySet'] = createExportWrapper('BinaryenArraySet');
var _BinaryenArrayLen = Module['_BinaryenArrayLen'] = createExportWrapper('BinaryenArrayLen');
var _BinaryenArrayCopy = Module['_BinaryenArrayCopy'] = createExportWrapper('BinaryenArrayCopy');
var _BinaryenStringNew = Module['_BinaryenStringNew'] = createExportWrapper('BinaryenStringNew');
var _BinaryenStringConst = Module['_BinaryenStringConst'] = createExportWrapper('BinaryenStringConst');
var _BinaryenStringMeasure = Module['_BinaryenStringMeasure'] = createExportWrapper('BinaryenStringMeasure');
var _BinaryenStringEncode = Module['_BinaryenStringEncode'] = createExportWrapper('BinaryenStringEncode');
var _BinaryenStringConcat = Module['_BinaryenStringConcat'] = createExportWrapper('BinaryenStringConcat');
var _BinaryenStringEq = Module['_BinaryenStringEq'] = createExportWrapper('BinaryenStringEq');
var _BinaryenStringAs = Module['_BinaryenStringAs'] = createExportWrapper('BinaryenStringAs');
var _BinaryenStringWTF8Advance = Module['_BinaryenStringWTF8Advance'] = createExportWrapper('BinaryenStringWTF8Advance');
var _BinaryenStringWTF16Get = Module['_BinaryenStringWTF16Get'] = createExportWrapper('BinaryenStringWTF16Get');
var _BinaryenStringIterNext = Module['_BinaryenStringIterNext'] = createExportWrapper('BinaryenStringIterNext');
var _BinaryenStringIterMove = Module['_BinaryenStringIterMove'] = createExportWrapper('BinaryenStringIterMove');
var _BinaryenStringSliceWTF = Module['_BinaryenStringSliceWTF'] = createExportWrapper('BinaryenStringSliceWTF');
var _BinaryenStringSliceIter = Module['_BinaryenStringSliceIter'] = createExportWrapper('BinaryenStringSliceIter');
var _BinaryenExpressionGetId = Module['_BinaryenExpressionGetId'] = createExportWrapper('BinaryenExpressionGetId');
var _BinaryenExpressionGetType = Module['_BinaryenExpressionGetType'] = createExportWrapper('BinaryenExpressionGetType');
var _BinaryenExpressionSetType = Module['_BinaryenExpressionSetType'] = createExportWrapper('BinaryenExpressionSetType');
var _BinaryenExpressionPrint = Module['_BinaryenExpressionPrint'] = createExportWrapper('BinaryenExpressionPrint');
var _BinaryenExpressionFinalize = Module['_BinaryenExpressionFinalize'] = createExportWrapper('BinaryenExpressionFinalize');
var _BinaryenExpressionCopy = Module['_BinaryenExpressionCopy'] = createExportWrapper('BinaryenExpressionCopy');
var _BinaryenBlockGetName = Module['_BinaryenBlockGetName'] = createExportWrapper('BinaryenBlockGetName');
var _BinaryenBlockSetName = Module['_BinaryenBlockSetName'] = createExportWrapper('BinaryenBlockSetName');
var _BinaryenBlockGetNumChildren = Module['_BinaryenBlockGetNumChildren'] = createExportWrapper('BinaryenBlockGetNumChildren');
var _BinaryenBlockGetChildAt = Module['_BinaryenBlockGetChildAt'] = createExportWrapper('BinaryenBlockGetChildAt');
var _BinaryenBlockSetChildAt = Module['_BinaryenBlockSetChildAt'] = createExportWrapper('BinaryenBlockSetChildAt');
var _BinaryenBlockAppendChild = Module['_BinaryenBlockAppendChild'] = createExportWrapper('BinaryenBlockAppendChild');
var _BinaryenBlockInsertChildAt = Module['_BinaryenBlockInsertChildAt'] = createExportWrapper('BinaryenBlockInsertChildAt');
var _BinaryenBlockRemoveChildAt = Module['_BinaryenBlockRemoveChildAt'] = createExportWrapper('BinaryenBlockRemoveChildAt');
var _BinaryenIfGetCondition = Module['_BinaryenIfGetCondition'] = createExportWrapper('BinaryenIfGetCondition');
var _BinaryenIfSetCondition = Module['_BinaryenIfSetCondition'] = createExportWrapper('BinaryenIfSetCondition');
var _BinaryenIfGetIfTrue = Module['_BinaryenIfGetIfTrue'] = createExportWrapper('BinaryenIfGetIfTrue');
var _BinaryenIfSetIfTrue = Module['_BinaryenIfSetIfTrue'] = createExportWrapper('BinaryenIfSetIfTrue');
var _BinaryenIfGetIfFalse = Module['_BinaryenIfGetIfFalse'] = createExportWrapper('BinaryenIfGetIfFalse');
var _BinaryenIfSetIfFalse = Module['_BinaryenIfSetIfFalse'] = createExportWrapper('BinaryenIfSetIfFalse');
var _BinaryenLoopGetName = Module['_BinaryenLoopGetName'] = createExportWrapper('BinaryenLoopGetName');
var _BinaryenLoopSetName = Module['_BinaryenLoopSetName'] = createExportWrapper('BinaryenLoopSetName');
var _BinaryenLoopGetBody = Module['_BinaryenLoopGetBody'] = createExportWrapper('BinaryenLoopGetBody');
var _BinaryenLoopSetBody = Module['_BinaryenLoopSetBody'] = createExportWrapper('BinaryenLoopSetBody');
var _BinaryenBreakGetName = Module['_BinaryenBreakGetName'] = createExportWrapper('BinaryenBreakGetName');
var _BinaryenBreakSetName = Module['_BinaryenBreakSetName'] = createExportWrapper('BinaryenBreakSetName');
var _BinaryenBreakGetCondition = Module['_BinaryenBreakGetCondition'] = createExportWrapper('BinaryenBreakGetCondition');
var _BinaryenBreakSetCondition = Module['_BinaryenBreakSetCondition'] = createExportWrapper('BinaryenBreakSetCondition');
var _BinaryenBreakGetValue = Module['_BinaryenBreakGetValue'] = createExportWrapper('BinaryenBreakGetValue');
var _BinaryenBreakSetValue = Module['_BinaryenBreakSetValue'] = createExportWrapper('BinaryenBreakSetValue');
var _BinaryenSwitchGetNumNames = Module['_BinaryenSwitchGetNumNames'] = createExportWrapper('BinaryenSwitchGetNumNames');
var _BinaryenSwitchGetNameAt = Module['_BinaryenSwitchGetNameAt'] = createExportWrapper('BinaryenSwitchGetNameAt');
var _BinaryenSwitchSetNameAt = Module['_BinaryenSwitchSetNameAt'] = createExportWrapper('BinaryenSwitchSetNameAt');
var _BinaryenSwitchAppendName = Module['_BinaryenSwitchAppendName'] = createExportWrapper('BinaryenSwitchAppendName');
var _BinaryenSwitchInsertNameAt = Module['_BinaryenSwitchInsertNameAt'] = createExportWrapper('BinaryenSwitchInsertNameAt');
var _BinaryenSwitchRemoveNameAt = Module['_BinaryenSwitchRemoveNameAt'] = createExportWrapper('BinaryenSwitchRemoveNameAt');
var _BinaryenSwitchGetDefaultName = Module['_BinaryenSwitchGetDefaultName'] = createExportWrapper('BinaryenSwitchGetDefaultName');
var _BinaryenSwitchSetDefaultName = Module['_BinaryenSwitchSetDefaultName'] = createExportWrapper('BinaryenSwitchSetDefaultName');
var _BinaryenSwitchGetCondition = Module['_BinaryenSwitchGetCondition'] = createExportWrapper('BinaryenSwitchGetCondition');
var _BinaryenSwitchSetCondition = Module['_BinaryenSwitchSetCondition'] = createExportWrapper('BinaryenSwitchSetCondition');
var _BinaryenSwitchGetValue = Module['_BinaryenSwitchGetValue'] = createExportWrapper('BinaryenSwitchGetValue');
var _BinaryenSwitchSetValue = Module['_BinaryenSwitchSetValue'] = createExportWrapper('BinaryenSwitchSetValue');
var _BinaryenCallGetTarget = Module['_BinaryenCallGetTarget'] = createExportWrapper('BinaryenCallGetTarget');
var _BinaryenCallSetTarget = Module['_BinaryenCallSetTarget'] = createExportWrapper('BinaryenCallSetTarget');
var _BinaryenCallGetNumOperands = Module['_BinaryenCallGetNumOperands'] = createExportWrapper('BinaryenCallGetNumOperands');
var _BinaryenCallGetOperandAt = Module['_BinaryenCallGetOperandAt'] = createExportWrapper('BinaryenCallGetOperandAt');
var _BinaryenCallSetOperandAt = Module['_BinaryenCallSetOperandAt'] = createExportWrapper('BinaryenCallSetOperandAt');
var _BinaryenCallAppendOperand = Module['_BinaryenCallAppendOperand'] = createExportWrapper('BinaryenCallAppendOperand');
var _BinaryenCallInsertOperandAt = Module['_BinaryenCallInsertOperandAt'] = createExportWrapper('BinaryenCallInsertOperandAt');
var _BinaryenCallRemoveOperandAt = Module['_BinaryenCallRemoveOperandAt'] = createExportWrapper('BinaryenCallRemoveOperandAt');
var _BinaryenCallIsReturn = Module['_BinaryenCallIsReturn'] = createExportWrapper('BinaryenCallIsReturn');
var _BinaryenCallSetReturn = Module['_BinaryenCallSetReturn'] = createExportWrapper('BinaryenCallSetReturn');
var _BinaryenCallIndirectGetTarget = Module['_BinaryenCallIndirectGetTarget'] = createExportWrapper('BinaryenCallIndirectGetTarget');
var _BinaryenCallIndirectSetTarget = Module['_BinaryenCallIndirectSetTarget'] = createExportWrapper('BinaryenCallIndirectSetTarget');
var _BinaryenCallIndirectGetTable = Module['_BinaryenCallIndirectGetTable'] = createExportWrapper('BinaryenCallIndirectGetTable');
var _BinaryenCallIndirectSetTable = Module['_BinaryenCallIndirectSetTable'] = createExportWrapper('BinaryenCallIndirectSetTable');
var _BinaryenCallIndirectGetNumOperands = Module['_BinaryenCallIndirectGetNumOperands'] = createExportWrapper('BinaryenCallIndirectGetNumOperands');
var _BinaryenCallIndirectGetOperandAt = Module['_BinaryenCallIndirectGetOperandAt'] = createExportWrapper('BinaryenCallIndirectGetOperandAt');
var _BinaryenCallIndirectSetOperandAt = Module['_BinaryenCallIndirectSetOperandAt'] = createExportWrapper('BinaryenCallIndirectSetOperandAt');
var _BinaryenCallIndirectAppendOperand = Module['_BinaryenCallIndirectAppendOperand'] = createExportWrapper('BinaryenCallIndirectAppendOperand');
var _BinaryenCallIndirectInsertOperandAt = Module['_BinaryenCallIndirectInsertOperandAt'] = createExportWrapper('BinaryenCallIndirectInsertOperandAt');
var _BinaryenCallIndirectRemoveOperandAt = Module['_BinaryenCallIndirectRemoveOperandAt'] = createExportWrapper('BinaryenCallIndirectRemoveOperandAt');
var _BinaryenCallIndirectIsReturn = Module['_BinaryenCallIndirectIsReturn'] = createExportWrapper('BinaryenCallIndirectIsReturn');
var _BinaryenCallIndirectSetReturn = Module['_BinaryenCallIndirectSetReturn'] = createExportWrapper('BinaryenCallIndirectSetReturn');
var _BinaryenCallIndirectGetParams = Module['_BinaryenCallIndirectGetParams'] = createExportWrapper('BinaryenCallIndirectGetParams');
var _BinaryenCallIndirectSetParams = Module['_BinaryenCallIndirectSetParams'] = createExportWrapper('BinaryenCallIndirectSetParams');
var _BinaryenCallIndirectGetResults = Module['_BinaryenCallIndirectGetResults'] = createExportWrapper('BinaryenCallIndirectGetResults');
var _BinaryenCallIndirectSetResults = Module['_BinaryenCallIndirectSetResults'] = createExportWrapper('BinaryenCallIndirectSetResults');
var _BinaryenLocalGetGetIndex = Module['_BinaryenLocalGetGetIndex'] = createExportWrapper('BinaryenLocalGetGetIndex');
var _BinaryenLocalGetSetIndex = Module['_BinaryenLocalGetSetIndex'] = createExportWrapper('BinaryenLocalGetSetIndex');
var _BinaryenLocalSetIsTee = Module['_BinaryenLocalSetIsTee'] = createExportWrapper('BinaryenLocalSetIsTee');
var _BinaryenLocalSetGetIndex = Module['_BinaryenLocalSetGetIndex'] = createExportWrapper('BinaryenLocalSetGetIndex');
var _BinaryenLocalSetSetIndex = Module['_BinaryenLocalSetSetIndex'] = createExportWrapper('BinaryenLocalSetSetIndex');
var _BinaryenLocalSetGetValue = Module['_BinaryenLocalSetGetValue'] = createExportWrapper('BinaryenLocalSetGetValue');
var _BinaryenLocalSetSetValue = Module['_BinaryenLocalSetSetValue'] = createExportWrapper('BinaryenLocalSetSetValue');
var _BinaryenGlobalGetGetName = Module['_BinaryenGlobalGetGetName'] = createExportWrapper('BinaryenGlobalGetGetName');
var _BinaryenGlobalGetSetName = Module['_BinaryenGlobalGetSetName'] = createExportWrapper('BinaryenGlobalGetSetName');
var _BinaryenGlobalSetGetName = Module['_BinaryenGlobalSetGetName'] = createExportWrapper('BinaryenGlobalSetGetName');
var _BinaryenGlobalSetSetName = Module['_BinaryenGlobalSetSetName'] = createExportWrapper('BinaryenGlobalSetSetName');
var _BinaryenGlobalSetGetValue = Module['_BinaryenGlobalSetGetValue'] = createExportWrapper('BinaryenGlobalSetGetValue');
var _BinaryenGlobalSetSetValue = Module['_BinaryenGlobalSetSetValue'] = createExportWrapper('BinaryenGlobalSetSetValue');
var _BinaryenTableGetGetTable = Module['_BinaryenTableGetGetTable'] = createExportWrapper('BinaryenTableGetGetTable');
var _BinaryenTableGetSetTable = Module['_BinaryenTableGetSetTable'] = createExportWrapper('BinaryenTableGetSetTable');
var _BinaryenTableGetGetIndex = Module['_BinaryenTableGetGetIndex'] = createExportWrapper('BinaryenTableGetGetIndex');
var _BinaryenTableGetSetIndex = Module['_BinaryenTableGetSetIndex'] = createExportWrapper('BinaryenTableGetSetIndex');
var _BinaryenTableSetGetTable = Module['_BinaryenTableSetGetTable'] = createExportWrapper('BinaryenTableSetGetTable');
var _BinaryenTableSetSetTable = Module['_BinaryenTableSetSetTable'] = createExportWrapper('BinaryenTableSetSetTable');
var _BinaryenTableSetGetIndex = Module['_BinaryenTableSetGetIndex'] = createExportWrapper('BinaryenTableSetGetIndex');
var _BinaryenTableSetSetIndex = Module['_BinaryenTableSetSetIndex'] = createExportWrapper('BinaryenTableSetSetIndex');
var _BinaryenTableSetGetValue = Module['_BinaryenTableSetGetValue'] = createExportWrapper('BinaryenTableSetGetValue');
var _BinaryenTableSetSetValue = Module['_BinaryenTableSetSetValue'] = createExportWrapper('BinaryenTableSetSetValue');
var _BinaryenTableSizeGetTable = Module['_BinaryenTableSizeGetTable'] = createExportWrapper('BinaryenTableSizeGetTable');
var _BinaryenTableSizeSetTable = Module['_BinaryenTableSizeSetTable'] = createExportWrapper('BinaryenTableSizeSetTable');
var _BinaryenTableGrowGetTable = Module['_BinaryenTableGrowGetTable'] = createExportWrapper('BinaryenTableGrowGetTable');
var _BinaryenTableGrowSetTable = Module['_BinaryenTableGrowSetTable'] = createExportWrapper('BinaryenTableGrowSetTable');
var _BinaryenTableGrowGetValue = Module['_BinaryenTableGrowGetValue'] = createExportWrapper('BinaryenTableGrowGetValue');
var _BinaryenTableGrowSetValue = Module['_BinaryenTableGrowSetValue'] = createExportWrapper('BinaryenTableGrowSetValue');
var _BinaryenTableGrowGetDelta = Module['_BinaryenTableGrowGetDelta'] = createExportWrapper('BinaryenTableGrowGetDelta');
var _BinaryenTableGrowSetDelta = Module['_BinaryenTableGrowSetDelta'] = createExportWrapper('BinaryenTableGrowSetDelta');
var _BinaryenMemoryGrowGetDelta = Module['_BinaryenMemoryGrowGetDelta'] = createExportWrapper('BinaryenMemoryGrowGetDelta');
var _BinaryenMemoryGrowSetDelta = Module['_BinaryenMemoryGrowSetDelta'] = createExportWrapper('BinaryenMemoryGrowSetDelta');
var _BinaryenLoadIsAtomic = Module['_BinaryenLoadIsAtomic'] = createExportWrapper('BinaryenLoadIsAtomic');
var _BinaryenLoadSetAtomic = Module['_BinaryenLoadSetAtomic'] = createExportWrapper('BinaryenLoadSetAtomic');
var _BinaryenLoadIsSigned = Module['_BinaryenLoadIsSigned'] = createExportWrapper('BinaryenLoadIsSigned');
var _BinaryenLoadSetSigned = Module['_BinaryenLoadSetSigned'] = createExportWrapper('BinaryenLoadSetSigned');
var _BinaryenLoadGetBytes = Module['_BinaryenLoadGetBytes'] = createExportWrapper('BinaryenLoadGetBytes');
var _BinaryenLoadSetBytes = Module['_BinaryenLoadSetBytes'] = createExportWrapper('BinaryenLoadSetBytes');
var _BinaryenLoadGetOffset = Module['_BinaryenLoadGetOffset'] = createExportWrapper('BinaryenLoadGetOffset');
var _BinaryenLoadSetOffset = Module['_BinaryenLoadSetOffset'] = createExportWrapper('BinaryenLoadSetOffset');
var _BinaryenLoadGetAlign = Module['_BinaryenLoadGetAlign'] = createExportWrapper('BinaryenLoadGetAlign');
var _BinaryenLoadSetAlign = Module['_BinaryenLoadSetAlign'] = createExportWrapper('BinaryenLoadSetAlign');
var _BinaryenLoadGetPtr = Module['_BinaryenLoadGetPtr'] = createExportWrapper('BinaryenLoadGetPtr');
var _BinaryenLoadSetPtr = Module['_BinaryenLoadSetPtr'] = createExportWrapper('BinaryenLoadSetPtr');
var _BinaryenStoreIsAtomic = Module['_BinaryenStoreIsAtomic'] = createExportWrapper('BinaryenStoreIsAtomic');
var _BinaryenStoreSetAtomic = Module['_BinaryenStoreSetAtomic'] = createExportWrapper('BinaryenStoreSetAtomic');
var _BinaryenStoreGetBytes = Module['_BinaryenStoreGetBytes'] = createExportWrapper('BinaryenStoreGetBytes');
var _BinaryenStoreSetBytes = Module['_BinaryenStoreSetBytes'] = createExportWrapper('BinaryenStoreSetBytes');
var _BinaryenStoreGetOffset = Module['_BinaryenStoreGetOffset'] = createExportWrapper('BinaryenStoreGetOffset');
var _BinaryenStoreSetOffset = Module['_BinaryenStoreSetOffset'] = createExportWrapper('BinaryenStoreSetOffset');
var _BinaryenStoreGetAlign = Module['_BinaryenStoreGetAlign'] = createExportWrapper('BinaryenStoreGetAlign');
var _BinaryenStoreSetAlign = Module['_BinaryenStoreSetAlign'] = createExportWrapper('BinaryenStoreSetAlign');
var _BinaryenStoreGetPtr = Module['_BinaryenStoreGetPtr'] = createExportWrapper('BinaryenStoreGetPtr');
var _BinaryenStoreSetPtr = Module['_BinaryenStoreSetPtr'] = createExportWrapper('BinaryenStoreSetPtr');
var _BinaryenStoreGetValue = Module['_BinaryenStoreGetValue'] = createExportWrapper('BinaryenStoreGetValue');
var _BinaryenStoreSetValue = Module['_BinaryenStoreSetValue'] = createExportWrapper('BinaryenStoreSetValue');
var _BinaryenStoreGetValueType = Module['_BinaryenStoreGetValueType'] = createExportWrapper('BinaryenStoreGetValueType');
var _BinaryenStoreSetValueType = Module['_BinaryenStoreSetValueType'] = createExportWrapper('BinaryenStoreSetValueType');
var _BinaryenConstGetValueI32 = Module['_BinaryenConstGetValueI32'] = createExportWrapper('BinaryenConstGetValueI32');
var _BinaryenConstSetValueI32 = Module['_BinaryenConstSetValueI32'] = createExportWrapper('BinaryenConstSetValueI32');
var _BinaryenConstGetValueI64 = Module['_BinaryenConstGetValueI64'] = createExportWrapper('BinaryenConstGetValueI64');
var _BinaryenConstSetValueI64 = Module['_BinaryenConstSetValueI64'] = createExportWrapper('BinaryenConstSetValueI64');
var _BinaryenConstGetValueI64Low = Module['_BinaryenConstGetValueI64Low'] = createExportWrapper('BinaryenConstGetValueI64Low');
var _BinaryenConstSetValueI64Low = Module['_BinaryenConstSetValueI64Low'] = createExportWrapper('BinaryenConstSetValueI64Low');
var _BinaryenConstGetValueI64High = Module['_BinaryenConstGetValueI64High'] = createExportWrapper('BinaryenConstGetValueI64High');
var _BinaryenConstSetValueI64High = Module['_BinaryenConstSetValueI64High'] = createExportWrapper('BinaryenConstSetValueI64High');
var _BinaryenConstGetValueF32 = Module['_BinaryenConstGetValueF32'] = createExportWrapper('BinaryenConstGetValueF32');
var _BinaryenConstSetValueF32 = Module['_BinaryenConstSetValueF32'] = createExportWrapper('BinaryenConstSetValueF32');
var _BinaryenConstGetValueF64 = Module['_BinaryenConstGetValueF64'] = createExportWrapper('BinaryenConstGetValueF64');
var _BinaryenConstSetValueF64 = Module['_BinaryenConstSetValueF64'] = createExportWrapper('BinaryenConstSetValueF64');
var _BinaryenConstGetValueV128 = Module['_BinaryenConstGetValueV128'] = createExportWrapper('BinaryenConstGetValueV128');
var _BinaryenConstSetValueV128 = Module['_BinaryenConstSetValueV128'] = createExportWrapper('BinaryenConstSetValueV128');
var _BinaryenUnaryGetOp = Module['_BinaryenUnaryGetOp'] = createExportWrapper('BinaryenUnaryGetOp');
var _BinaryenUnarySetOp = Module['_BinaryenUnarySetOp'] = createExportWrapper('BinaryenUnarySetOp');
var _BinaryenUnaryGetValue = Module['_BinaryenUnaryGetValue'] = createExportWrapper('BinaryenUnaryGetValue');
var _BinaryenUnarySetValue = Module['_BinaryenUnarySetValue'] = createExportWrapper('BinaryenUnarySetValue');
var _BinaryenBinaryGetOp = Module['_BinaryenBinaryGetOp'] = createExportWrapper('BinaryenBinaryGetOp');
var _BinaryenBinarySetOp = Module['_BinaryenBinarySetOp'] = createExportWrapper('BinaryenBinarySetOp');
var _BinaryenBinaryGetLeft = Module['_BinaryenBinaryGetLeft'] = createExportWrapper('BinaryenBinaryGetLeft');
var _BinaryenBinarySetLeft = Module['_BinaryenBinarySetLeft'] = createExportWrapper('BinaryenBinarySetLeft');
var _BinaryenBinaryGetRight = Module['_BinaryenBinaryGetRight'] = createExportWrapper('BinaryenBinaryGetRight');
var _BinaryenBinarySetRight = Module['_BinaryenBinarySetRight'] = createExportWrapper('BinaryenBinarySetRight');
var _BinaryenSelectGetIfTrue = Module['_BinaryenSelectGetIfTrue'] = createExportWrapper('BinaryenSelectGetIfTrue');
var _BinaryenSelectSetIfTrue = Module['_BinaryenSelectSetIfTrue'] = createExportWrapper('BinaryenSelectSetIfTrue');
var _BinaryenSelectGetIfFalse = Module['_BinaryenSelectGetIfFalse'] = createExportWrapper('BinaryenSelectGetIfFalse');
var _BinaryenSelectSetIfFalse = Module['_BinaryenSelectSetIfFalse'] = createExportWrapper('BinaryenSelectSetIfFalse');
var _BinaryenSelectGetCondition = Module['_BinaryenSelectGetCondition'] = createExportWrapper('BinaryenSelectGetCondition');
var _BinaryenSelectSetCondition = Module['_BinaryenSelectSetCondition'] = createExportWrapper('BinaryenSelectSetCondition');
var _BinaryenDropGetValue = Module['_BinaryenDropGetValue'] = createExportWrapper('BinaryenDropGetValue');
var _BinaryenDropSetValue = Module['_BinaryenDropSetValue'] = createExportWrapper('BinaryenDropSetValue');
var _BinaryenReturnGetValue = Module['_BinaryenReturnGetValue'] = createExportWrapper('BinaryenReturnGetValue');
var _BinaryenReturnSetValue = Module['_BinaryenReturnSetValue'] = createExportWrapper('BinaryenReturnSetValue');
var _BinaryenAtomicRMWGetOp = Module['_BinaryenAtomicRMWGetOp'] = createExportWrapper('BinaryenAtomicRMWGetOp');
var _BinaryenAtomicRMWSetOp = Module['_BinaryenAtomicRMWSetOp'] = createExportWrapper('BinaryenAtomicRMWSetOp');
var _BinaryenAtomicRMWGetBytes = Module['_BinaryenAtomicRMWGetBytes'] = createExportWrapper('BinaryenAtomicRMWGetBytes');
var _BinaryenAtomicRMWSetBytes = Module['_BinaryenAtomicRMWSetBytes'] = createExportWrapper('BinaryenAtomicRMWSetBytes');
var _BinaryenAtomicRMWGetOffset = Module['_BinaryenAtomicRMWGetOffset'] = createExportWrapper('BinaryenAtomicRMWGetOffset');
var _BinaryenAtomicRMWSetOffset = Module['_BinaryenAtomicRMWSetOffset'] = createExportWrapper('BinaryenAtomicRMWSetOffset');
var _BinaryenAtomicRMWGetPtr = Module['_BinaryenAtomicRMWGetPtr'] = createExportWrapper('BinaryenAtomicRMWGetPtr');
var _BinaryenAtomicRMWSetPtr = Module['_BinaryenAtomicRMWSetPtr'] = createExportWrapper('BinaryenAtomicRMWSetPtr');
var _BinaryenAtomicRMWGetValue = Module['_BinaryenAtomicRMWGetValue'] = createExportWrapper('BinaryenAtomicRMWGetValue');
var _BinaryenAtomicRMWSetValue = Module['_BinaryenAtomicRMWSetValue'] = createExportWrapper('BinaryenAtomicRMWSetValue');
var _BinaryenAtomicCmpxchgGetBytes = Module['_BinaryenAtomicCmpxchgGetBytes'] = createExportWrapper('BinaryenAtomicCmpxchgGetBytes');
var _BinaryenAtomicCmpxchgSetBytes = Module['_BinaryenAtomicCmpxchgSetBytes'] = createExportWrapper('BinaryenAtomicCmpxchgSetBytes');
var _BinaryenAtomicCmpxchgGetOffset = Module['_BinaryenAtomicCmpxchgGetOffset'] = createExportWrapper('BinaryenAtomicCmpxchgGetOffset');
var _BinaryenAtomicCmpxchgSetOffset = Module['_BinaryenAtomicCmpxchgSetOffset'] = createExportWrapper('BinaryenAtomicCmpxchgSetOffset');
var _BinaryenAtomicCmpxchgGetPtr = Module['_BinaryenAtomicCmpxchgGetPtr'] = createExportWrapper('BinaryenAtomicCmpxchgGetPtr');
var _BinaryenAtomicCmpxchgSetPtr = Module['_BinaryenAtomicCmpxchgSetPtr'] = createExportWrapper('BinaryenAtomicCmpxchgSetPtr');
var _BinaryenAtomicCmpxchgGetExpected = Module['_BinaryenAtomicCmpxchgGetExpected'] = createExportWrapper('BinaryenAtomicCmpxchgGetExpected');
var _BinaryenAtomicCmpxchgSetExpected = Module['_BinaryenAtomicCmpxchgSetExpected'] = createExportWrapper('BinaryenAtomicCmpxchgSetExpected');
var _BinaryenAtomicCmpxchgGetReplacement = Module['_BinaryenAtomicCmpxchgGetReplacement'] = createExportWrapper('BinaryenAtomicCmpxchgGetReplacement');
var _BinaryenAtomicCmpxchgSetReplacement = Module['_BinaryenAtomicCmpxchgSetReplacement'] = createExportWrapper('BinaryenAtomicCmpxchgSetReplacement');
var _BinaryenAtomicWaitGetPtr = Module['_BinaryenAtomicWaitGetPtr'] = createExportWrapper('BinaryenAtomicWaitGetPtr');
var _BinaryenAtomicWaitSetPtr = Module['_BinaryenAtomicWaitSetPtr'] = createExportWrapper('BinaryenAtomicWaitSetPtr');
var _BinaryenAtomicWaitGetExpected = Module['_BinaryenAtomicWaitGetExpected'] = createExportWrapper('BinaryenAtomicWaitGetExpected');
var _BinaryenAtomicWaitSetExpected = Module['_BinaryenAtomicWaitSetExpected'] = createExportWrapper('BinaryenAtomicWaitSetExpected');
var _BinaryenAtomicWaitGetTimeout = Module['_BinaryenAtomicWaitGetTimeout'] = createExportWrapper('BinaryenAtomicWaitGetTimeout');
var _BinaryenAtomicWaitSetTimeout = Module['_BinaryenAtomicWaitSetTimeout'] = createExportWrapper('BinaryenAtomicWaitSetTimeout');
var _BinaryenAtomicWaitGetExpectedType = Module['_BinaryenAtomicWaitGetExpectedType'] = createExportWrapper('BinaryenAtomicWaitGetExpectedType');
var _BinaryenAtomicWaitSetExpectedType = Module['_BinaryenAtomicWaitSetExpectedType'] = createExportWrapper('BinaryenAtomicWaitSetExpectedType');
var _BinaryenAtomicNotifyGetPtr = Module['_BinaryenAtomicNotifyGetPtr'] = createExportWrapper('BinaryenAtomicNotifyGetPtr');
var _BinaryenAtomicNotifySetPtr = Module['_BinaryenAtomicNotifySetPtr'] = createExportWrapper('BinaryenAtomicNotifySetPtr');
var _BinaryenAtomicNotifyGetNotifyCount = Module['_BinaryenAtomicNotifyGetNotifyCount'] = createExportWrapper('BinaryenAtomicNotifyGetNotifyCount');
var _BinaryenAtomicNotifySetNotifyCount = Module['_BinaryenAtomicNotifySetNotifyCount'] = createExportWrapper('BinaryenAtomicNotifySetNotifyCount');
var _BinaryenAtomicFenceGetOrder = Module['_BinaryenAtomicFenceGetOrder'] = createExportWrapper('BinaryenAtomicFenceGetOrder');
var _BinaryenAtomicFenceSetOrder = Module['_BinaryenAtomicFenceSetOrder'] = createExportWrapper('BinaryenAtomicFenceSetOrder');
var _BinaryenSIMDExtractGetOp = Module['_BinaryenSIMDExtractGetOp'] = createExportWrapper('BinaryenSIMDExtractGetOp');
var _BinaryenSIMDExtractSetOp = Module['_BinaryenSIMDExtractSetOp'] = createExportWrapper('BinaryenSIMDExtractSetOp');
var _BinaryenSIMDExtractGetVec = Module['_BinaryenSIMDExtractGetVec'] = createExportWrapper('BinaryenSIMDExtractGetVec');
var _BinaryenSIMDExtractSetVec = Module['_BinaryenSIMDExtractSetVec'] = createExportWrapper('BinaryenSIMDExtractSetVec');
var _BinaryenSIMDExtractGetIndex = Module['_BinaryenSIMDExtractGetIndex'] = createExportWrapper('BinaryenSIMDExtractGetIndex');
var _BinaryenSIMDExtractSetIndex = Module['_BinaryenSIMDExtractSetIndex'] = createExportWrapper('BinaryenSIMDExtractSetIndex');
var _BinaryenSIMDReplaceGetOp = Module['_BinaryenSIMDReplaceGetOp'] = createExportWrapper('BinaryenSIMDReplaceGetOp');
var _BinaryenSIMDReplaceSetOp = Module['_BinaryenSIMDReplaceSetOp'] = createExportWrapper('BinaryenSIMDReplaceSetOp');
var _BinaryenSIMDReplaceGetVec = Module['_BinaryenSIMDReplaceGetVec'] = createExportWrapper('BinaryenSIMDReplaceGetVec');
var _BinaryenSIMDReplaceSetVec = Module['_BinaryenSIMDReplaceSetVec'] = createExportWrapper('BinaryenSIMDReplaceSetVec');
var _BinaryenSIMDReplaceGetIndex = Module['_BinaryenSIMDReplaceGetIndex'] = createExportWrapper('BinaryenSIMDReplaceGetIndex');
var _BinaryenSIMDReplaceSetIndex = Module['_BinaryenSIMDReplaceSetIndex'] = createExportWrapper('BinaryenSIMDReplaceSetIndex');
var _BinaryenSIMDReplaceGetValue = Module['_BinaryenSIMDReplaceGetValue'] = createExportWrapper('BinaryenSIMDReplaceGetValue');
var _BinaryenSIMDReplaceSetValue = Module['_BinaryenSIMDReplaceSetValue'] = createExportWrapper('BinaryenSIMDReplaceSetValue');
var _BinaryenSIMDShuffleGetLeft = Module['_BinaryenSIMDShuffleGetLeft'] = createExportWrapper('BinaryenSIMDShuffleGetLeft');
var _BinaryenSIMDShuffleSetLeft = Module['_BinaryenSIMDShuffleSetLeft'] = createExportWrapper('BinaryenSIMDShuffleSetLeft');
var _BinaryenSIMDShuffleGetRight = Module['_BinaryenSIMDShuffleGetRight'] = createExportWrapper('BinaryenSIMDShuffleGetRight');
var _BinaryenSIMDShuffleSetRight = Module['_BinaryenSIMDShuffleSetRight'] = createExportWrapper('BinaryenSIMDShuffleSetRight');
var _BinaryenSIMDShuffleGetMask = Module['_BinaryenSIMDShuffleGetMask'] = createExportWrapper('BinaryenSIMDShuffleGetMask');
var _BinaryenSIMDShuffleSetMask = Module['_BinaryenSIMDShuffleSetMask'] = createExportWrapper('BinaryenSIMDShuffleSetMask');
var _BinaryenSIMDTernaryGetOp = Module['_BinaryenSIMDTernaryGetOp'] = createExportWrapper('BinaryenSIMDTernaryGetOp');
var _BinaryenSIMDTernarySetOp = Module['_BinaryenSIMDTernarySetOp'] = createExportWrapper('BinaryenSIMDTernarySetOp');
var _BinaryenSIMDTernaryGetA = Module['_BinaryenSIMDTernaryGetA'] = createExportWrapper('BinaryenSIMDTernaryGetA');
var _BinaryenSIMDTernarySetA = Module['_BinaryenSIMDTernarySetA'] = createExportWrapper('BinaryenSIMDTernarySetA');
var _BinaryenSIMDTernaryGetB = Module['_BinaryenSIMDTernaryGetB'] = createExportWrapper('BinaryenSIMDTernaryGetB');
var _BinaryenSIMDTernarySetB = Module['_BinaryenSIMDTernarySetB'] = createExportWrapper('BinaryenSIMDTernarySetB');
var _BinaryenSIMDTernaryGetC = Module['_BinaryenSIMDTernaryGetC'] = createExportWrapper('BinaryenSIMDTernaryGetC');
var _BinaryenSIMDTernarySetC = Module['_BinaryenSIMDTernarySetC'] = createExportWrapper('BinaryenSIMDTernarySetC');
var _BinaryenSIMDShiftGetOp = Module['_BinaryenSIMDShiftGetOp'] = createExportWrapper('BinaryenSIMDShiftGetOp');
var _BinaryenSIMDShiftSetOp = Module['_BinaryenSIMDShiftSetOp'] = createExportWrapper('BinaryenSIMDShiftSetOp');
var _BinaryenSIMDShiftGetVec = Module['_BinaryenSIMDShiftGetVec'] = createExportWrapper('BinaryenSIMDShiftGetVec');
var _BinaryenSIMDShiftSetVec = Module['_BinaryenSIMDShiftSetVec'] = createExportWrapper('BinaryenSIMDShiftSetVec');
var _BinaryenSIMDShiftGetShift = Module['_BinaryenSIMDShiftGetShift'] = createExportWrapper('BinaryenSIMDShiftGetShift');
var _BinaryenSIMDShiftSetShift = Module['_BinaryenSIMDShiftSetShift'] = createExportWrapper('BinaryenSIMDShiftSetShift');
var _BinaryenSIMDLoadGetOp = Module['_BinaryenSIMDLoadGetOp'] = createExportWrapper('BinaryenSIMDLoadGetOp');
var _BinaryenSIMDLoadSetOp = Module['_BinaryenSIMDLoadSetOp'] = createExportWrapper('BinaryenSIMDLoadSetOp');
var _BinaryenSIMDLoadGetOffset = Module['_BinaryenSIMDLoadGetOffset'] = createExportWrapper('BinaryenSIMDLoadGetOffset');
var _BinaryenSIMDLoadSetOffset = Module['_BinaryenSIMDLoadSetOffset'] = createExportWrapper('BinaryenSIMDLoadSetOffset');
var _BinaryenSIMDLoadGetAlign = Module['_BinaryenSIMDLoadGetAlign'] = createExportWrapper('BinaryenSIMDLoadGetAlign');
var _BinaryenSIMDLoadSetAlign = Module['_BinaryenSIMDLoadSetAlign'] = createExportWrapper('BinaryenSIMDLoadSetAlign');
var _BinaryenSIMDLoadGetPtr = Module['_BinaryenSIMDLoadGetPtr'] = createExportWrapper('BinaryenSIMDLoadGetPtr');
var _BinaryenSIMDLoadSetPtr = Module['_BinaryenSIMDLoadSetPtr'] = createExportWrapper('BinaryenSIMDLoadSetPtr');
var _BinaryenSIMDLoadStoreLaneGetOp = Module['_BinaryenSIMDLoadStoreLaneGetOp'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetOp');
var _BinaryenSIMDLoadStoreLaneSetOp = Module['_BinaryenSIMDLoadStoreLaneSetOp'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetOp');
var _BinaryenSIMDLoadStoreLaneGetOffset = Module['_BinaryenSIMDLoadStoreLaneGetOffset'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetOffset');
var _BinaryenSIMDLoadStoreLaneSetOffset = Module['_BinaryenSIMDLoadStoreLaneSetOffset'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetOffset');
var _BinaryenSIMDLoadStoreLaneGetAlign = Module['_BinaryenSIMDLoadStoreLaneGetAlign'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetAlign');
var _BinaryenSIMDLoadStoreLaneSetAlign = Module['_BinaryenSIMDLoadStoreLaneSetAlign'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetAlign');
var _BinaryenSIMDLoadStoreLaneGetIndex = Module['_BinaryenSIMDLoadStoreLaneGetIndex'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetIndex');
var _BinaryenSIMDLoadStoreLaneSetIndex = Module['_BinaryenSIMDLoadStoreLaneSetIndex'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetIndex');
var _BinaryenSIMDLoadStoreLaneGetPtr = Module['_BinaryenSIMDLoadStoreLaneGetPtr'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetPtr');
var _BinaryenSIMDLoadStoreLaneSetPtr = Module['_BinaryenSIMDLoadStoreLaneSetPtr'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetPtr');
var _BinaryenSIMDLoadStoreLaneGetVec = Module['_BinaryenSIMDLoadStoreLaneGetVec'] = createExportWrapper('BinaryenSIMDLoadStoreLaneGetVec');
var _BinaryenSIMDLoadStoreLaneSetVec = Module['_BinaryenSIMDLoadStoreLaneSetVec'] = createExportWrapper('BinaryenSIMDLoadStoreLaneSetVec');
var _BinaryenSIMDLoadStoreLaneIsStore = Module['_BinaryenSIMDLoadStoreLaneIsStore'] = createExportWrapper('BinaryenSIMDLoadStoreLaneIsStore');
var _BinaryenMemoryInitGetSegment = Module['_BinaryenMemoryInitGetSegment'] = createExportWrapper('BinaryenMemoryInitGetSegment');
var _BinaryenMemoryInitSetSegment = Module['_BinaryenMemoryInitSetSegment'] = createExportWrapper('BinaryenMemoryInitSetSegment');
var _BinaryenMemoryInitGetDest = Module['_BinaryenMemoryInitGetDest'] = createExportWrapper('BinaryenMemoryInitGetDest');
var _BinaryenMemoryInitSetDest = Module['_BinaryenMemoryInitSetDest'] = createExportWrapper('BinaryenMemoryInitSetDest');
var _BinaryenMemoryInitGetOffset = Module['_BinaryenMemoryInitGetOffset'] = createExportWrapper('BinaryenMemoryInitGetOffset');
var _BinaryenMemoryInitSetOffset = Module['_BinaryenMemoryInitSetOffset'] = createExportWrapper('BinaryenMemoryInitSetOffset');
var _BinaryenMemoryInitGetSize = Module['_BinaryenMemoryInitGetSize'] = createExportWrapper('BinaryenMemoryInitGetSize');
var _BinaryenMemoryInitSetSize = Module['_BinaryenMemoryInitSetSize'] = createExportWrapper('BinaryenMemoryInitSetSize');
var _BinaryenDataDropGetSegment = Module['_BinaryenDataDropGetSegment'] = createExportWrapper('BinaryenDataDropGetSegment');
var _BinaryenDataDropSetSegment = Module['_BinaryenDataDropSetSegment'] = createExportWrapper('BinaryenDataDropSetSegment');
var _BinaryenMemoryCopyGetDest = Module['_BinaryenMemoryCopyGetDest'] = createExportWrapper('BinaryenMemoryCopyGetDest');
var _BinaryenMemoryCopySetDest = Module['_BinaryenMemoryCopySetDest'] = createExportWrapper('BinaryenMemoryCopySetDest');
var _BinaryenMemoryCopyGetSource = Module['_BinaryenMemoryCopyGetSource'] = createExportWrapper('BinaryenMemoryCopyGetSource');
var _BinaryenMemoryCopySetSource = Module['_BinaryenMemoryCopySetSource'] = createExportWrapper('BinaryenMemoryCopySetSource');
var _BinaryenMemoryCopyGetSize = Module['_BinaryenMemoryCopyGetSize'] = createExportWrapper('BinaryenMemoryCopyGetSize');
var _BinaryenMemoryCopySetSize = Module['_BinaryenMemoryCopySetSize'] = createExportWrapper('BinaryenMemoryCopySetSize');
var _BinaryenMemoryFillGetDest = Module['_BinaryenMemoryFillGetDest'] = createExportWrapper('BinaryenMemoryFillGetDest');
var _BinaryenMemoryFillSetDest = Module['_BinaryenMemoryFillSetDest'] = createExportWrapper('BinaryenMemoryFillSetDest');
var _BinaryenMemoryFillGetValue = Module['_BinaryenMemoryFillGetValue'] = createExportWrapper('BinaryenMemoryFillGetValue');
var _BinaryenMemoryFillSetValue = Module['_BinaryenMemoryFillSetValue'] = createExportWrapper('BinaryenMemoryFillSetValue');
var _BinaryenMemoryFillGetSize = Module['_BinaryenMemoryFillGetSize'] = createExportWrapper('BinaryenMemoryFillGetSize');
var _BinaryenMemoryFillSetSize = Module['_BinaryenMemoryFillSetSize'] = createExportWrapper('BinaryenMemoryFillSetSize');
var _BinaryenRefIsNullGetValue = Module['_BinaryenRefIsNullGetValue'] = createExportWrapper('BinaryenRefIsNullGetValue');
var _BinaryenRefIsNullSetValue = Module['_BinaryenRefIsNullSetValue'] = createExportWrapper('BinaryenRefIsNullSetValue');
var _BinaryenRefAsGetOp = Module['_BinaryenRefAsGetOp'] = createExportWrapper('BinaryenRefAsGetOp');
var _BinaryenRefAsSetOp = Module['_BinaryenRefAsSetOp'] = createExportWrapper('BinaryenRefAsSetOp');
var _BinaryenRefAsGetValue = Module['_BinaryenRefAsGetValue'] = createExportWrapper('BinaryenRefAsGetValue');
var _BinaryenRefAsSetValue = Module['_BinaryenRefAsSetValue'] = createExportWrapper('BinaryenRefAsSetValue');
var _BinaryenRefFuncGetFunc = Module['_BinaryenRefFuncGetFunc'] = createExportWrapper('BinaryenRefFuncGetFunc');
var _BinaryenRefFuncSetFunc = Module['_BinaryenRefFuncSetFunc'] = createExportWrapper('BinaryenRefFuncSetFunc');
var _BinaryenRefEqGetLeft = Module['_BinaryenRefEqGetLeft'] = createExportWrapper('BinaryenRefEqGetLeft');
var _BinaryenRefEqSetLeft = Module['_BinaryenRefEqSetLeft'] = createExportWrapper('BinaryenRefEqSetLeft');
var _BinaryenRefEqGetRight = Module['_BinaryenRefEqGetRight'] = createExportWrapper('BinaryenRefEqGetRight');
var _BinaryenRefEqSetRight = Module['_BinaryenRefEqSetRight'] = createExportWrapper('BinaryenRefEqSetRight');
var _BinaryenTryGetName = Module['_BinaryenTryGetName'] = createExportWrapper('BinaryenTryGetName');
var _BinaryenTrySetName = Module['_BinaryenTrySetName'] = createExportWrapper('BinaryenTrySetName');
var _BinaryenTryGetBody = Module['_BinaryenTryGetBody'] = createExportWrapper('BinaryenTryGetBody');
var _BinaryenTrySetBody = Module['_BinaryenTrySetBody'] = createExportWrapper('BinaryenTrySetBody');
var _BinaryenTryGetNumCatchTags = Module['_BinaryenTryGetNumCatchTags'] = createExportWrapper('BinaryenTryGetNumCatchTags');
var _BinaryenTryGetNumCatchBodies = Module['_BinaryenTryGetNumCatchBodies'] = createExportWrapper('BinaryenTryGetNumCatchBodies');
var _BinaryenTryGetCatchTagAt = Module['_BinaryenTryGetCatchTagAt'] = createExportWrapper('BinaryenTryGetCatchTagAt');
var _BinaryenTrySetCatchTagAt = Module['_BinaryenTrySetCatchTagAt'] = createExportWrapper('BinaryenTrySetCatchTagAt');
var _BinaryenTryAppendCatchTag = Module['_BinaryenTryAppendCatchTag'] = createExportWrapper('BinaryenTryAppendCatchTag');
var _BinaryenTryInsertCatchTagAt = Module['_BinaryenTryInsertCatchTagAt'] = createExportWrapper('BinaryenTryInsertCatchTagAt');
var _BinaryenTryRemoveCatchTagAt = Module['_BinaryenTryRemoveCatchTagAt'] = createExportWrapper('BinaryenTryRemoveCatchTagAt');
var _BinaryenTryGetCatchBodyAt = Module['_BinaryenTryGetCatchBodyAt'] = createExportWrapper('BinaryenTryGetCatchBodyAt');
var _BinaryenTrySetCatchBodyAt = Module['_BinaryenTrySetCatchBodyAt'] = createExportWrapper('BinaryenTrySetCatchBodyAt');
var _BinaryenTryAppendCatchBody = Module['_BinaryenTryAppendCatchBody'] = createExportWrapper('BinaryenTryAppendCatchBody');
var _BinaryenTryInsertCatchBodyAt = Module['_BinaryenTryInsertCatchBodyAt'] = createExportWrapper('BinaryenTryInsertCatchBodyAt');
var _BinaryenTryRemoveCatchBodyAt = Module['_BinaryenTryRemoveCatchBodyAt'] = createExportWrapper('BinaryenTryRemoveCatchBodyAt');
var _BinaryenTryHasCatchAll = Module['_BinaryenTryHasCatchAll'] = createExportWrapper('BinaryenTryHasCatchAll');
var _BinaryenTryGetDelegateTarget = Module['_BinaryenTryGetDelegateTarget'] = createExportWrapper('BinaryenTryGetDelegateTarget');
var _BinaryenTrySetDelegateTarget = Module['_BinaryenTrySetDelegateTarget'] = createExportWrapper('BinaryenTrySetDelegateTarget');
var _BinaryenTryIsDelegate = Module['_BinaryenTryIsDelegate'] = createExportWrapper('BinaryenTryIsDelegate');
var _BinaryenThrowGetTag = Module['_BinaryenThrowGetTag'] = createExportWrapper('BinaryenThrowGetTag');
var _BinaryenThrowSetTag = Module['_BinaryenThrowSetTag'] = createExportWrapper('BinaryenThrowSetTag');
var _BinaryenThrowGetNumOperands = Module['_BinaryenThrowGetNumOperands'] = createExportWrapper('BinaryenThrowGetNumOperands');
var _BinaryenThrowGetOperandAt = Module['_BinaryenThrowGetOperandAt'] = createExportWrapper('BinaryenThrowGetOperandAt');
var _BinaryenThrowSetOperandAt = Module['_BinaryenThrowSetOperandAt'] = createExportWrapper('BinaryenThrowSetOperandAt');
var _BinaryenThrowAppendOperand = Module['_BinaryenThrowAppendOperand'] = createExportWrapper('BinaryenThrowAppendOperand');
var _BinaryenThrowInsertOperandAt = Module['_BinaryenThrowInsertOperandAt'] = createExportWrapper('BinaryenThrowInsertOperandAt');
var _BinaryenThrowRemoveOperandAt = Module['_BinaryenThrowRemoveOperandAt'] = createExportWrapper('BinaryenThrowRemoveOperandAt');
var _BinaryenRethrowGetTarget = Module['_BinaryenRethrowGetTarget'] = createExportWrapper('BinaryenRethrowGetTarget');
var _BinaryenRethrowSetTarget = Module['_BinaryenRethrowSetTarget'] = createExportWrapper('BinaryenRethrowSetTarget');
var _BinaryenTupleMakeGetNumOperands = Module['_BinaryenTupleMakeGetNumOperands'] = createExportWrapper('BinaryenTupleMakeGetNumOperands');
var _BinaryenTupleMakeGetOperandAt = Module['_BinaryenTupleMakeGetOperandAt'] = createExportWrapper('BinaryenTupleMakeGetOperandAt');
var _BinaryenTupleMakeSetOperandAt = Module['_BinaryenTupleMakeSetOperandAt'] = createExportWrapper('BinaryenTupleMakeSetOperandAt');
var _BinaryenTupleMakeAppendOperand = Module['_BinaryenTupleMakeAppendOperand'] = createExportWrapper('BinaryenTupleMakeAppendOperand');
var _BinaryenTupleMakeInsertOperandAt = Module['_BinaryenTupleMakeInsertOperandAt'] = createExportWrapper('BinaryenTupleMakeInsertOperandAt');
var _BinaryenTupleMakeRemoveOperandAt = Module['_BinaryenTupleMakeRemoveOperandAt'] = createExportWrapper('BinaryenTupleMakeRemoveOperandAt');
var _BinaryenTupleExtractGetTuple = Module['_BinaryenTupleExtractGetTuple'] = createExportWrapper('BinaryenTupleExtractGetTuple');
var _BinaryenTupleExtractSetTuple = Module['_BinaryenTupleExtractSetTuple'] = createExportWrapper('BinaryenTupleExtractSetTuple');
var _BinaryenTupleExtractGetIndex = Module['_BinaryenTupleExtractGetIndex'] = createExportWrapper('BinaryenTupleExtractGetIndex');
var _BinaryenTupleExtractSetIndex = Module['_BinaryenTupleExtractSetIndex'] = createExportWrapper('BinaryenTupleExtractSetIndex');
var _BinaryenRefI31GetValue = Module['_BinaryenRefI31GetValue'] = createExportWrapper('BinaryenRefI31GetValue');
var _BinaryenRefI31SetValue = Module['_BinaryenRefI31SetValue'] = createExportWrapper('BinaryenRefI31SetValue');
var _BinaryenI31GetGetI31 = Module['_BinaryenI31GetGetI31'] = createExportWrapper('BinaryenI31GetGetI31');
var _BinaryenI31GetSetI31 = Module['_BinaryenI31GetSetI31'] = createExportWrapper('BinaryenI31GetSetI31');
var _BinaryenI31GetIsSigned = Module['_BinaryenI31GetIsSigned'] = createExportWrapper('BinaryenI31GetIsSigned');
var _BinaryenI31GetSetSigned = Module['_BinaryenI31GetSetSigned'] = createExportWrapper('BinaryenI31GetSetSigned');
var _BinaryenCallRefGetNumOperands = Module['_BinaryenCallRefGetNumOperands'] = createExportWrapper('BinaryenCallRefGetNumOperands');
var _BinaryenCallRefGetOperandAt = Module['_BinaryenCallRefGetOperandAt'] = createExportWrapper('BinaryenCallRefGetOperandAt');
var _BinaryenCallRefSetOperandAt = Module['_BinaryenCallRefSetOperandAt'] = createExportWrapper('BinaryenCallRefSetOperandAt');
var _BinaryenCallRefAppendOperand = Module['_BinaryenCallRefAppendOperand'] = createExportWrapper('BinaryenCallRefAppendOperand');
var _BinaryenCallRefInsertOperandAt = Module['_BinaryenCallRefInsertOperandAt'] = createExportWrapper('BinaryenCallRefInsertOperandAt');
var _BinaryenCallRefRemoveOperandAt = Module['_BinaryenCallRefRemoveOperandAt'] = createExportWrapper('BinaryenCallRefRemoveOperandAt');
var _BinaryenCallRefGetTarget = Module['_BinaryenCallRefGetTarget'] = createExportWrapper('BinaryenCallRefGetTarget');
var _BinaryenCallRefSetTarget = Module['_BinaryenCallRefSetTarget'] = createExportWrapper('BinaryenCallRefSetTarget');
var _BinaryenCallRefIsReturn = Module['_BinaryenCallRefIsReturn'] = createExportWrapper('BinaryenCallRefIsReturn');
var _BinaryenCallRefSetReturn = Module['_BinaryenCallRefSetReturn'] = createExportWrapper('BinaryenCallRefSetReturn');
var _BinaryenRefTestGetRef = Module['_BinaryenRefTestGetRef'] = createExportWrapper('BinaryenRefTestGetRef');
var _BinaryenRefTestSetRef = Module['_BinaryenRefTestSetRef'] = createExportWrapper('BinaryenRefTestSetRef');
var _BinaryenRefTestGetCastType = Module['_BinaryenRefTestGetCastType'] = createExportWrapper('BinaryenRefTestGetCastType');
var _BinaryenRefTestSetCastType = Module['_BinaryenRefTestSetCastType'] = createExportWrapper('BinaryenRefTestSetCastType');
var _BinaryenRefCastGetRef = Module['_BinaryenRefCastGetRef'] = createExportWrapper('BinaryenRefCastGetRef');
var _BinaryenRefCastSetRef = Module['_BinaryenRefCastSetRef'] = createExportWrapper('BinaryenRefCastSetRef');
var _BinaryenBrOnGetOp = Module['_BinaryenBrOnGetOp'] = createExportWrapper('BinaryenBrOnGetOp');
var _BinaryenBrOnSetOp = Module['_BinaryenBrOnSetOp'] = createExportWrapper('BinaryenBrOnSetOp');
var _BinaryenBrOnGetName = Module['_BinaryenBrOnGetName'] = createExportWrapper('BinaryenBrOnGetName');
var _BinaryenBrOnSetName = Module['_BinaryenBrOnSetName'] = createExportWrapper('BinaryenBrOnSetName');
var _BinaryenBrOnGetRef = Module['_BinaryenBrOnGetRef'] = createExportWrapper('BinaryenBrOnGetRef');
var _BinaryenBrOnSetRef = Module['_BinaryenBrOnSetRef'] = createExportWrapper('BinaryenBrOnSetRef');
var _BinaryenBrOnGetCastType = Module['_BinaryenBrOnGetCastType'] = createExportWrapper('BinaryenBrOnGetCastType');
var _BinaryenBrOnSetCastType = Module['_BinaryenBrOnSetCastType'] = createExportWrapper('BinaryenBrOnSetCastType');
var _BinaryenStructNewGetNumOperands = Module['_BinaryenStructNewGetNumOperands'] = createExportWrapper('BinaryenStructNewGetNumOperands');
var _BinaryenStructNewGetOperandAt = Module['_BinaryenStructNewGetOperandAt'] = createExportWrapper('BinaryenStructNewGetOperandAt');
var _BinaryenStructNewSetOperandAt = Module['_BinaryenStructNewSetOperandAt'] = createExportWrapper('BinaryenStructNewSetOperandAt');
var _BinaryenStructNewAppendOperand = Module['_BinaryenStructNewAppendOperand'] = createExportWrapper('BinaryenStructNewAppendOperand');
var _BinaryenStructNewInsertOperandAt = Module['_BinaryenStructNewInsertOperandAt'] = createExportWrapper('BinaryenStructNewInsertOperandAt');
var _BinaryenStructNewRemoveOperandAt = Module['_BinaryenStructNewRemoveOperandAt'] = createExportWrapper('BinaryenStructNewRemoveOperandAt');
var _BinaryenStructGetGetIndex = Module['_BinaryenStructGetGetIndex'] = createExportWrapper('BinaryenStructGetGetIndex');
var _BinaryenStructGetSetIndex = Module['_BinaryenStructGetSetIndex'] = createExportWrapper('BinaryenStructGetSetIndex');
var _BinaryenStructGetGetRef = Module['_BinaryenStructGetGetRef'] = createExportWrapper('BinaryenStructGetGetRef');
var _BinaryenStructGetSetRef = Module['_BinaryenStructGetSetRef'] = createExportWrapper('BinaryenStructGetSetRef');
var _BinaryenStructGetIsSigned = Module['_BinaryenStructGetIsSigned'] = createExportWrapper('BinaryenStructGetIsSigned');
var _BinaryenStructGetSetSigned = Module['_BinaryenStructGetSetSigned'] = createExportWrapper('BinaryenStructGetSetSigned');
var _BinaryenStructSetGetIndex = Module['_BinaryenStructSetGetIndex'] = createExportWrapper('BinaryenStructSetGetIndex');
var _BinaryenStructSetSetIndex = Module['_BinaryenStructSetSetIndex'] = createExportWrapper('BinaryenStructSetSetIndex');
var _BinaryenStructSetGetRef = Module['_BinaryenStructSetGetRef'] = createExportWrapper('BinaryenStructSetGetRef');
var _BinaryenStructSetSetRef = Module['_BinaryenStructSetSetRef'] = createExportWrapper('BinaryenStructSetSetRef');
var _BinaryenStructSetGetValue = Module['_BinaryenStructSetGetValue'] = createExportWrapper('BinaryenStructSetGetValue');
var _BinaryenStructSetSetValue = Module['_BinaryenStructSetSetValue'] = createExportWrapper('BinaryenStructSetSetValue');
var _BinaryenArrayNewGetInit = Module['_BinaryenArrayNewGetInit'] = createExportWrapper('BinaryenArrayNewGetInit');
var _BinaryenArrayNewSetInit = Module['_BinaryenArrayNewSetInit'] = createExportWrapper('BinaryenArrayNewSetInit');
var _BinaryenArrayNewGetSize = Module['_BinaryenArrayNewGetSize'] = createExportWrapper('BinaryenArrayNewGetSize');
var _BinaryenArrayNewSetSize = Module['_BinaryenArrayNewSetSize'] = createExportWrapper('BinaryenArrayNewSetSize');
var _BinaryenArrayNewFixedGetNumValues = Module['_BinaryenArrayNewFixedGetNumValues'] = createExportWrapper('BinaryenArrayNewFixedGetNumValues');
var _BinaryenArrayNewFixedGetValueAt = Module['_BinaryenArrayNewFixedGetValueAt'] = createExportWrapper('BinaryenArrayNewFixedGetValueAt');
var _BinaryenArrayNewFixedSetValueAt = Module['_BinaryenArrayNewFixedSetValueAt'] = createExportWrapper('BinaryenArrayNewFixedSetValueAt');
var _BinaryenArrayNewFixedAppendValue = Module['_BinaryenArrayNewFixedAppendValue'] = createExportWrapper('BinaryenArrayNewFixedAppendValue');
var _BinaryenArrayNewFixedInsertValueAt = Module['_BinaryenArrayNewFixedInsertValueAt'] = createExportWrapper('BinaryenArrayNewFixedInsertValueAt');
var _BinaryenArrayNewFixedRemoveValueAt = Module['_BinaryenArrayNewFixedRemoveValueAt'] = createExportWrapper('BinaryenArrayNewFixedRemoveValueAt');
var _BinaryenArrayGetGetRef = Module['_BinaryenArrayGetGetRef'] = createExportWrapper('BinaryenArrayGetGetRef');
var _BinaryenArrayGetSetRef = Module['_BinaryenArrayGetSetRef'] = createExportWrapper('BinaryenArrayGetSetRef');
var _BinaryenArrayGetGetIndex = Module['_BinaryenArrayGetGetIndex'] = createExportWrapper('BinaryenArrayGetGetIndex');
var _BinaryenArrayGetSetIndex = Module['_BinaryenArrayGetSetIndex'] = createExportWrapper('BinaryenArrayGetSetIndex');
var _BinaryenArrayGetIsSigned = Module['_BinaryenArrayGetIsSigned'] = createExportWrapper('BinaryenArrayGetIsSigned');
var _BinaryenArrayGetSetSigned = Module['_BinaryenArrayGetSetSigned'] = createExportWrapper('BinaryenArrayGetSetSigned');
var _BinaryenArraySetGetRef = Module['_BinaryenArraySetGetRef'] = createExportWrapper('BinaryenArraySetGetRef');
var _BinaryenArraySetSetRef = Module['_BinaryenArraySetSetRef'] = createExportWrapper('BinaryenArraySetSetRef');
var _BinaryenArraySetGetIndex = Module['_BinaryenArraySetGetIndex'] = createExportWrapper('BinaryenArraySetGetIndex');
var _BinaryenArraySetSetIndex = Module['_BinaryenArraySetSetIndex'] = createExportWrapper('BinaryenArraySetSetIndex');
var _BinaryenArraySetGetValue = Module['_BinaryenArraySetGetValue'] = createExportWrapper('BinaryenArraySetGetValue');
var _BinaryenArraySetSetValue = Module['_BinaryenArraySetSetValue'] = createExportWrapper('BinaryenArraySetSetValue');
var _BinaryenArrayLenGetRef = Module['_BinaryenArrayLenGetRef'] = createExportWrapper('BinaryenArrayLenGetRef');
var _BinaryenArrayLenSetRef = Module['_BinaryenArrayLenSetRef'] = createExportWrapper('BinaryenArrayLenSetRef');
var _BinaryenArrayCopyGetDestRef = Module['_BinaryenArrayCopyGetDestRef'] = createExportWrapper('BinaryenArrayCopyGetDestRef');
var _BinaryenArrayCopySetDestRef = Module['_BinaryenArrayCopySetDestRef'] = createExportWrapper('BinaryenArrayCopySetDestRef');
var _BinaryenArrayCopyGetDestIndex = Module['_BinaryenArrayCopyGetDestIndex'] = createExportWrapper('BinaryenArrayCopyGetDestIndex');
var _BinaryenArrayCopySetDestIndex = Module['_BinaryenArrayCopySetDestIndex'] = createExportWrapper('BinaryenArrayCopySetDestIndex');
var _BinaryenArrayCopyGetSrcRef = Module['_BinaryenArrayCopyGetSrcRef'] = createExportWrapper('BinaryenArrayCopyGetSrcRef');
var _BinaryenArrayCopySetSrcRef = Module['_BinaryenArrayCopySetSrcRef'] = createExportWrapper('BinaryenArrayCopySetSrcRef');
var _BinaryenArrayCopyGetSrcIndex = Module['_BinaryenArrayCopyGetSrcIndex'] = createExportWrapper('BinaryenArrayCopyGetSrcIndex');
var _BinaryenArrayCopySetSrcIndex = Module['_BinaryenArrayCopySetSrcIndex'] = createExportWrapper('BinaryenArrayCopySetSrcIndex');
var _BinaryenArrayCopyGetLength = Module['_BinaryenArrayCopyGetLength'] = createExportWrapper('BinaryenArrayCopyGetLength');
var _BinaryenArrayCopySetLength = Module['_BinaryenArrayCopySetLength'] = createExportWrapper('BinaryenArrayCopySetLength');
var _BinaryenStringNewGetOp = Module['_BinaryenStringNewGetOp'] = createExportWrapper('BinaryenStringNewGetOp');
var _BinaryenStringNewSetOp = Module['_BinaryenStringNewSetOp'] = createExportWrapper('BinaryenStringNewSetOp');
var _BinaryenStringNewGetPtr = Module['_BinaryenStringNewGetPtr'] = createExportWrapper('BinaryenStringNewGetPtr');
var _BinaryenStringNewSetPtr = Module['_BinaryenStringNewSetPtr'] = createExportWrapper('BinaryenStringNewSetPtr');
var _BinaryenStringNewGetLength = Module['_BinaryenStringNewGetLength'] = createExportWrapper('BinaryenStringNewGetLength');
var _BinaryenStringNewSetLength = Module['_BinaryenStringNewSetLength'] = createExportWrapper('BinaryenStringNewSetLength');
var _BinaryenStringNewGetStart = Module['_BinaryenStringNewGetStart'] = createExportWrapper('BinaryenStringNewGetStart');
var _BinaryenStringNewSetStart = Module['_BinaryenStringNewSetStart'] = createExportWrapper('BinaryenStringNewSetStart');
var _BinaryenStringNewGetEnd = Module['_BinaryenStringNewGetEnd'] = createExportWrapper('BinaryenStringNewGetEnd');
var _BinaryenStringNewSetEnd = Module['_BinaryenStringNewSetEnd'] = createExportWrapper('BinaryenStringNewSetEnd');
var _BinaryenStringNewSetTry = Module['_BinaryenStringNewSetTry'] = createExportWrapper('BinaryenStringNewSetTry');
var _BinaryenStringNewIsTry = Module['_BinaryenStringNewIsTry'] = createExportWrapper('BinaryenStringNewIsTry');
var _BinaryenStringConstGetString = Module['_BinaryenStringConstGetString'] = createExportWrapper('BinaryenStringConstGetString');
var _BinaryenStringConstSetString = Module['_BinaryenStringConstSetString'] = createExportWrapper('BinaryenStringConstSetString');
var _BinaryenStringMeasureGetOp = Module['_BinaryenStringMeasureGetOp'] = createExportWrapper('BinaryenStringMeasureGetOp');
var _BinaryenStringMeasureSetOp = Module['_BinaryenStringMeasureSetOp'] = createExportWrapper('BinaryenStringMeasureSetOp');
var _BinaryenStringMeasureGetRef = Module['_BinaryenStringMeasureGetRef'] = createExportWrapper('BinaryenStringMeasureGetRef');
var _BinaryenStringMeasureSetRef = Module['_BinaryenStringMeasureSetRef'] = createExportWrapper('BinaryenStringMeasureSetRef');
var _BinaryenStringEncodeGetOp = Module['_BinaryenStringEncodeGetOp'] = createExportWrapper('BinaryenStringEncodeGetOp');
var _BinaryenStringEncodeSetOp = Module['_BinaryenStringEncodeSetOp'] = createExportWrapper('BinaryenStringEncodeSetOp');
var _BinaryenStringEncodeGetRef = Module['_BinaryenStringEncodeGetRef'] = createExportWrapper('BinaryenStringEncodeGetRef');
var _BinaryenStringEncodeSetRef = Module['_BinaryenStringEncodeSetRef'] = createExportWrapper('BinaryenStringEncodeSetRef');
var _BinaryenStringEncodeGetPtr = Module['_BinaryenStringEncodeGetPtr'] = createExportWrapper('BinaryenStringEncodeGetPtr');
var _BinaryenStringEncodeSetPtr = Module['_BinaryenStringEncodeSetPtr'] = createExportWrapper('BinaryenStringEncodeSetPtr');
var _BinaryenStringEncodeGetStart = Module['_BinaryenStringEncodeGetStart'] = createExportWrapper('BinaryenStringEncodeGetStart');
var _BinaryenStringEncodeSetStart = Module['_BinaryenStringEncodeSetStart'] = createExportWrapper('BinaryenStringEncodeSetStart');
var _BinaryenStringConcatGetLeft = Module['_BinaryenStringConcatGetLeft'] = createExportWrapper('BinaryenStringConcatGetLeft');
var _BinaryenStringConcatSetLeft = Module['_BinaryenStringConcatSetLeft'] = createExportWrapper('BinaryenStringConcatSetLeft');
var _BinaryenStringConcatGetRight = Module['_BinaryenStringConcatGetRight'] = createExportWrapper('BinaryenStringConcatGetRight');
var _BinaryenStringConcatSetRight = Module['_BinaryenStringConcatSetRight'] = createExportWrapper('BinaryenStringConcatSetRight');
var _BinaryenStringEqGetOp = Module['_BinaryenStringEqGetOp'] = createExportWrapper('BinaryenStringEqGetOp');
var _BinaryenStringEqSetOp = Module['_BinaryenStringEqSetOp'] = createExportWrapper('BinaryenStringEqSetOp');
var _BinaryenStringEqGetLeft = Module['_BinaryenStringEqGetLeft'] = createExportWrapper('BinaryenStringEqGetLeft');
var _BinaryenStringEqSetLeft = Module['_BinaryenStringEqSetLeft'] = createExportWrapper('BinaryenStringEqSetLeft');
var _BinaryenStringEqGetRight = Module['_BinaryenStringEqGetRight'] = createExportWrapper('BinaryenStringEqGetRight');
var _BinaryenStringEqSetRight = Module['_BinaryenStringEqSetRight'] = createExportWrapper('BinaryenStringEqSetRight');
var _BinaryenStringAsGetOp = Module['_BinaryenStringAsGetOp'] = createExportWrapper('BinaryenStringAsGetOp');
var _BinaryenStringAsSetOp = Module['_BinaryenStringAsSetOp'] = createExportWrapper('BinaryenStringAsSetOp');
var _BinaryenStringAsGetRef = Module['_BinaryenStringAsGetRef'] = createExportWrapper('BinaryenStringAsGetRef');
var _BinaryenStringAsSetRef = Module['_BinaryenStringAsSetRef'] = createExportWrapper('BinaryenStringAsSetRef');
var _BinaryenStringWTF8AdvanceGetRef = Module['_BinaryenStringWTF8AdvanceGetRef'] = createExportWrapper('BinaryenStringWTF8AdvanceGetRef');
var _BinaryenStringWTF8AdvanceSetRef = Module['_BinaryenStringWTF8AdvanceSetRef'] = createExportWrapper('BinaryenStringWTF8AdvanceSetRef');
var _BinaryenStringWTF8AdvanceGetPos = Module['_BinaryenStringWTF8AdvanceGetPos'] = createExportWrapper('BinaryenStringWTF8AdvanceGetPos');
var _BinaryenStringWTF8AdvanceSetPos = Module['_BinaryenStringWTF8AdvanceSetPos'] = createExportWrapper('BinaryenStringWTF8AdvanceSetPos');
var _BinaryenStringWTF8AdvanceGetBytes = Module['_BinaryenStringWTF8AdvanceGetBytes'] = createExportWrapper('BinaryenStringWTF8AdvanceGetBytes');
var _BinaryenStringWTF8AdvanceSetBytes = Module['_BinaryenStringWTF8AdvanceSetBytes'] = createExportWrapper('BinaryenStringWTF8AdvanceSetBytes');
var _BinaryenStringWTF16GetGetRef = Module['_BinaryenStringWTF16GetGetRef'] = createExportWrapper('BinaryenStringWTF16GetGetRef');
var _BinaryenStringWTF16GetSetRef = Module['_BinaryenStringWTF16GetSetRef'] = createExportWrapper('BinaryenStringWTF16GetSetRef');
var _BinaryenStringWTF16GetGetPos = Module['_BinaryenStringWTF16GetGetPos'] = createExportWrapper('BinaryenStringWTF16GetGetPos');
var _BinaryenStringWTF16GetSetPos = Module['_BinaryenStringWTF16GetSetPos'] = createExportWrapper('BinaryenStringWTF16GetSetPos');
var _BinaryenStringIterNextGetRef = Module['_BinaryenStringIterNextGetRef'] = createExportWrapper('BinaryenStringIterNextGetRef');
var _BinaryenStringIterNextSetRef = Module['_BinaryenStringIterNextSetRef'] = createExportWrapper('BinaryenStringIterNextSetRef');
var _BinaryenStringIterMoveGetOp = Module['_BinaryenStringIterMoveGetOp'] = createExportWrapper('BinaryenStringIterMoveGetOp');
var _BinaryenStringIterMoveSetOp = Module['_BinaryenStringIterMoveSetOp'] = createExportWrapper('BinaryenStringIterMoveSetOp');
var _BinaryenStringIterMoveGetRef = Module['_BinaryenStringIterMoveGetRef'] = createExportWrapper('BinaryenStringIterMoveGetRef');
var _BinaryenStringIterMoveSetRef = Module['_BinaryenStringIterMoveSetRef'] = createExportWrapper('BinaryenStringIterMoveSetRef');
var _BinaryenStringIterMoveGetNum = Module['_BinaryenStringIterMoveGetNum'] = createExportWrapper('BinaryenStringIterMoveGetNum');
var _BinaryenStringIterMoveSetNum = Module['_BinaryenStringIterMoveSetNum'] = createExportWrapper('BinaryenStringIterMoveSetNum');
var _BinaryenStringSliceWTFGetOp = Module['_BinaryenStringSliceWTFGetOp'] = createExportWrapper('BinaryenStringSliceWTFGetOp');
var _BinaryenStringSliceWTFSetOp = Module['_BinaryenStringSliceWTFSetOp'] = createExportWrapper('BinaryenStringSliceWTFSetOp');
var _BinaryenStringSliceWTFGetRef = Module['_BinaryenStringSliceWTFGetRef'] = createExportWrapper('BinaryenStringSliceWTFGetRef');
var _BinaryenStringSliceWTFSetRef = Module['_BinaryenStringSliceWTFSetRef'] = createExportWrapper('BinaryenStringSliceWTFSetRef');
var _BinaryenStringSliceWTFGetStart = Module['_BinaryenStringSliceWTFGetStart'] = createExportWrapper('BinaryenStringSliceWTFGetStart');
var _BinaryenStringSliceWTFSetStart = Module['_BinaryenStringSliceWTFSetStart'] = createExportWrapper('BinaryenStringSliceWTFSetStart');
var _BinaryenStringSliceWTFGetEnd = Module['_BinaryenStringSliceWTFGetEnd'] = createExportWrapper('BinaryenStringSliceWTFGetEnd');
var _BinaryenStringSliceWTFSetEnd = Module['_BinaryenStringSliceWTFSetEnd'] = createExportWrapper('BinaryenStringSliceWTFSetEnd');
var _BinaryenStringSliceIterGetRef = Module['_BinaryenStringSliceIterGetRef'] = createExportWrapper('BinaryenStringSliceIterGetRef');
var _BinaryenStringSliceIterSetRef = Module['_BinaryenStringSliceIterSetRef'] = createExportWrapper('BinaryenStringSliceIterSetRef');
var _BinaryenStringSliceIterGetNum = Module['_BinaryenStringSliceIterGetNum'] = createExportWrapper('BinaryenStringSliceIterGetNum');
var _BinaryenStringSliceIterSetNum = Module['_BinaryenStringSliceIterSetNum'] = createExportWrapper('BinaryenStringSliceIterSetNum');
var _BinaryenAddFunction = Module['_BinaryenAddFunction'] = createExportWrapper('BinaryenAddFunction');
var _BinaryenAddFunctionWithHeapType = Module['_BinaryenAddFunctionWithHeapType'] = createExportWrapper('BinaryenAddFunctionWithHeapType');
var _BinaryenGetFunction = Module['_BinaryenGetFunction'] = createExportWrapper('BinaryenGetFunction');
var _BinaryenRemoveFunction = Module['_BinaryenRemoveFunction'] = createExportWrapper('BinaryenRemoveFunction');
var _BinaryenGetNumFunctions = Module['_BinaryenGetNumFunctions'] = createExportWrapper('BinaryenGetNumFunctions');
var _BinaryenGetFunctionByIndex = Module['_BinaryenGetFunctionByIndex'] = createExportWrapper('BinaryenGetFunctionByIndex');
var _BinaryenAddGlobal = Module['_BinaryenAddGlobal'] = createExportWrapper('BinaryenAddGlobal');
var _BinaryenGetGlobal = Module['_BinaryenGetGlobal'] = createExportWrapper('BinaryenGetGlobal');
var _BinaryenRemoveGlobal = Module['_BinaryenRemoveGlobal'] = createExportWrapper('BinaryenRemoveGlobal');
var _BinaryenGetNumGlobals = Module['_BinaryenGetNumGlobals'] = createExportWrapper('BinaryenGetNumGlobals');
var _BinaryenGetGlobalByIndex = Module['_BinaryenGetGlobalByIndex'] = createExportWrapper('BinaryenGetGlobalByIndex');
var _BinaryenAddTag = Module['_BinaryenAddTag'] = createExportWrapper('BinaryenAddTag');
var _BinaryenGetTag = Module['_BinaryenGetTag'] = createExportWrapper('BinaryenGetTag');
var _BinaryenRemoveTag = Module['_BinaryenRemoveTag'] = createExportWrapper('BinaryenRemoveTag');
var _BinaryenAddFunctionImport = Module['_BinaryenAddFunctionImport'] = createExportWrapper('BinaryenAddFunctionImport');
var _BinaryenAddTableImport = Module['_BinaryenAddTableImport'] = createExportWrapper('BinaryenAddTableImport');
var _BinaryenAddMemoryImport = Module['_BinaryenAddMemoryImport'] = createExportWrapper('BinaryenAddMemoryImport');
var _BinaryenAddGlobalImport = Module['_BinaryenAddGlobalImport'] = createExportWrapper('BinaryenAddGlobalImport');
var _BinaryenAddTagImport = Module['_BinaryenAddTagImport'] = createExportWrapper('BinaryenAddTagImport');
var _BinaryenAddFunctionExport = Module['_BinaryenAddFunctionExport'] = createExportWrapper('BinaryenAddFunctionExport');
var _BinaryenAddTableExport = Module['_BinaryenAddTableExport'] = createExportWrapper('BinaryenAddTableExport');
var _BinaryenAddMemoryExport = Module['_BinaryenAddMemoryExport'] = createExportWrapper('BinaryenAddMemoryExport');
var _BinaryenAddGlobalExport = Module['_BinaryenAddGlobalExport'] = createExportWrapper('BinaryenAddGlobalExport');
var _BinaryenAddTagExport = Module['_BinaryenAddTagExport'] = createExportWrapper('BinaryenAddTagExport');
var _BinaryenGetExport = Module['_BinaryenGetExport'] = createExportWrapper('BinaryenGetExport');
var _BinaryenRemoveExport = Module['_BinaryenRemoveExport'] = createExportWrapper('BinaryenRemoveExport');
var _BinaryenGetNumExports = Module['_BinaryenGetNumExports'] = createExportWrapper('BinaryenGetNumExports');
var _BinaryenGetExportByIndex = Module['_BinaryenGetExportByIndex'] = createExportWrapper('BinaryenGetExportByIndex');
var _BinaryenAddTable = Module['_BinaryenAddTable'] = createExportWrapper('BinaryenAddTable');
var _BinaryenRemoveTable = Module['_BinaryenRemoveTable'] = createExportWrapper('BinaryenRemoveTable');
var _BinaryenGetNumTables = Module['_BinaryenGetNumTables'] = createExportWrapper('BinaryenGetNumTables');
var _BinaryenGetTable = Module['_BinaryenGetTable'] = createExportWrapper('BinaryenGetTable');
var _BinaryenGetTableByIndex = Module['_BinaryenGetTableByIndex'] = createExportWrapper('BinaryenGetTableByIndex');
var _BinaryenAddActiveElementSegment = Module['_BinaryenAddActiveElementSegment'] = createExportWrapper('BinaryenAddActiveElementSegment');
var _BinaryenAddPassiveElementSegment = Module['_BinaryenAddPassiveElementSegment'] = createExportWrapper('BinaryenAddPassiveElementSegment');
var _BinaryenRemoveElementSegment = Module['_BinaryenRemoveElementSegment'] = createExportWrapper('BinaryenRemoveElementSegment');
var _BinaryenGetElementSegment = Module['_BinaryenGetElementSegment'] = createExportWrapper('BinaryenGetElementSegment');
var _BinaryenGetElementSegmentByIndex = Module['_BinaryenGetElementSegmentByIndex'] = createExportWrapper('BinaryenGetElementSegmentByIndex');
var _BinaryenGetNumElementSegments = Module['_BinaryenGetNumElementSegments'] = createExportWrapper('BinaryenGetNumElementSegments');
var _BinaryenElementSegmentGetOffset = Module['_BinaryenElementSegmentGetOffset'] = createExportWrapper('BinaryenElementSegmentGetOffset');
var _BinaryenElementSegmentGetLength = Module['_BinaryenElementSegmentGetLength'] = createExportWrapper('BinaryenElementSegmentGetLength');
var _BinaryenElementSegmentGetData = Module['_BinaryenElementSegmentGetData'] = createExportWrapper('BinaryenElementSegmentGetData');
var _BinaryenSetMemory = Module['_BinaryenSetMemory'] = createExportWrapper('BinaryenSetMemory');
var _BinaryenGetNumMemorySegments = Module['_BinaryenGetNumMemorySegments'] = createExportWrapper('BinaryenGetNumMemorySegments');
var _BinaryenGetMemorySegmentByteOffset = Module['_BinaryenGetMemorySegmentByteOffset'] = createExportWrapper('BinaryenGetMemorySegmentByteOffset');
var _BinaryenHasMemory = Module['_BinaryenHasMemory'] = createExportWrapper('BinaryenHasMemory');
var _BinaryenMemoryGetInitial = Module['_BinaryenMemoryGetInitial'] = createExportWrapper('BinaryenMemoryGetInitial');
var _BinaryenMemoryHasMax = Module['_BinaryenMemoryHasMax'] = createExportWrapper('BinaryenMemoryHasMax');
var _BinaryenMemoryGetMax = Module['_BinaryenMemoryGetMax'] = createExportWrapper('BinaryenMemoryGetMax');
var _BinaryenMemoryImportGetModule = Module['_BinaryenMemoryImportGetModule'] = createExportWrapper('BinaryenMemoryImportGetModule');
var _BinaryenMemoryImportGetBase = Module['_BinaryenMemoryImportGetBase'] = createExportWrapper('BinaryenMemoryImportGetBase');
var _BinaryenMemoryIsShared = Module['_BinaryenMemoryIsShared'] = createExportWrapper('BinaryenMemoryIsShared');
var _BinaryenMemoryIs64 = Module['_BinaryenMemoryIs64'] = createExportWrapper('BinaryenMemoryIs64');
var _BinaryenGetMemorySegmentByteLength = Module['_BinaryenGetMemorySegmentByteLength'] = createExportWrapper('BinaryenGetMemorySegmentByteLength');
var _BinaryenGetMemorySegmentPassive = Module['_BinaryenGetMemorySegmentPassive'] = createExportWrapper('BinaryenGetMemorySegmentPassive');
var _BinaryenCopyMemorySegmentData = Module['_BinaryenCopyMemorySegmentData'] = createExportWrapper('BinaryenCopyMemorySegmentData');
var _BinaryenSetStart = Module['_BinaryenSetStart'] = createExportWrapper('BinaryenSetStart');
var _BinaryenModuleGetFeatures = Module['_BinaryenModuleGetFeatures'] = createExportWrapper('BinaryenModuleGetFeatures');
var _BinaryenModuleSetFeatures = Module['_BinaryenModuleSetFeatures'] = createExportWrapper('BinaryenModuleSetFeatures');
var _BinaryenModuleParse = Module['_BinaryenModuleParse'] = createExportWrapper('BinaryenModuleParse');
var _BinaryenModulePrint = Module['_BinaryenModulePrint'] = createExportWrapper('BinaryenModulePrint');
var _BinaryenModulePrintStackIR = Module['_BinaryenModulePrintStackIR'] = createExportWrapper('BinaryenModulePrintStackIR');
var _BinaryenModulePrintAsmjs = Module['_BinaryenModulePrintAsmjs'] = createExportWrapper('BinaryenModulePrintAsmjs');
var _free = Module['_free'] = createExportWrapper('free');
var _BinaryenModuleValidate = Module['_BinaryenModuleValidate'] = createExportWrapper('BinaryenModuleValidate');
var _BinaryenModuleOptimize = Module['_BinaryenModuleOptimize'] = createExportWrapper('BinaryenModuleOptimize');
var _BinaryenModuleUpdateMaps = Module['_BinaryenModuleUpdateMaps'] = createExportWrapper('BinaryenModuleUpdateMaps');
var _BinaryenGetOptimizeLevel = Module['_BinaryenGetOptimizeLevel'] = createExportWrapper('BinaryenGetOptimizeLevel');
var _BinaryenSetOptimizeLevel = Module['_BinaryenSetOptimizeLevel'] = createExportWrapper('BinaryenSetOptimizeLevel');
var _BinaryenGetShrinkLevel = Module['_BinaryenGetShrinkLevel'] = createExportWrapper('BinaryenGetShrinkLevel');
var _BinaryenSetShrinkLevel = Module['_BinaryenSetShrinkLevel'] = createExportWrapper('BinaryenSetShrinkLevel');
var _BinaryenGetDebugInfo = Module['_BinaryenGetDebugInfo'] = createExportWrapper('BinaryenGetDebugInfo');
var _BinaryenSetDebugInfo = Module['_BinaryenSetDebugInfo'] = createExportWrapper('BinaryenSetDebugInfo');
var _BinaryenGetLowMemoryUnused = Module['_BinaryenGetLowMemoryUnused'] = createExportWrapper('BinaryenGetLowMemoryUnused');
var _BinaryenSetLowMemoryUnused = Module['_BinaryenSetLowMemoryUnused'] = createExportWrapper('BinaryenSetLowMemoryUnused');
var _BinaryenGetZeroFilledMemory = Module['_BinaryenGetZeroFilledMemory'] = createExportWrapper('BinaryenGetZeroFilledMemory');
var _BinaryenSetZeroFilledMemory = Module['_BinaryenSetZeroFilledMemory'] = createExportWrapper('BinaryenSetZeroFilledMemory');
var _BinaryenGetFastMath = Module['_BinaryenGetFastMath'] = createExportWrapper('BinaryenGetFastMath');
var _BinaryenSetFastMath = Module['_BinaryenSetFastMath'] = createExportWrapper('BinaryenSetFastMath');
var _BinaryenGetPassArgument = Module['_BinaryenGetPassArgument'] = createExportWrapper('BinaryenGetPassArgument');
var _BinaryenSetPassArgument = Module['_BinaryenSetPassArgument'] = createExportWrapper('BinaryenSetPassArgument');
var _BinaryenClearPassArguments = Module['_BinaryenClearPassArguments'] = createExportWrapper('BinaryenClearPassArguments');
var _BinaryenGetAlwaysInlineMaxSize = Module['_BinaryenGetAlwaysInlineMaxSize'] = createExportWrapper('BinaryenGetAlwaysInlineMaxSize');
var _BinaryenSetAlwaysInlineMaxSize = Module['_BinaryenSetAlwaysInlineMaxSize'] = createExportWrapper('BinaryenSetAlwaysInlineMaxSize');
var _BinaryenGetFlexibleInlineMaxSize = Module['_BinaryenGetFlexibleInlineMaxSize'] = createExportWrapper('BinaryenGetFlexibleInlineMaxSize');
var _BinaryenSetFlexibleInlineMaxSize = Module['_BinaryenSetFlexibleInlineMaxSize'] = createExportWrapper('BinaryenSetFlexibleInlineMaxSize');
var _BinaryenGetOneCallerInlineMaxSize = Module['_BinaryenGetOneCallerInlineMaxSize'] = createExportWrapper('BinaryenGetOneCallerInlineMaxSize');
var _BinaryenSetOneCallerInlineMaxSize = Module['_BinaryenSetOneCallerInlineMaxSize'] = createExportWrapper('BinaryenSetOneCallerInlineMaxSize');
var _BinaryenGetAllowInliningFunctionsWithLoops = Module['_BinaryenGetAllowInliningFunctionsWithLoops'] = createExportWrapper('BinaryenGetAllowInliningFunctionsWithLoops');
var _BinaryenSetAllowInliningFunctionsWithLoops = Module['_BinaryenSetAllowInliningFunctionsWithLoops'] = createExportWrapper('BinaryenSetAllowInliningFunctionsWithLoops');
var _BinaryenModuleRunPasses = Module['_BinaryenModuleRunPasses'] = createExportWrapper('BinaryenModuleRunPasses');
var _BinaryenModuleAutoDrop = Module['_BinaryenModuleAutoDrop'] = createExportWrapper('BinaryenModuleAutoDrop');
var _BinaryenModuleWrite = Module['_BinaryenModuleWrite'] = createExportWrapper('BinaryenModuleWrite');
var _BinaryenModuleWriteText = Module['_BinaryenModuleWriteText'] = createExportWrapper('BinaryenModuleWriteText');
var _BinaryenModuleWriteStackIR = Module['_BinaryenModuleWriteStackIR'] = createExportWrapper('BinaryenModuleWriteStackIR');
var _BinaryenModuleWriteWithSourceMap = Module['_BinaryenModuleWriteWithSourceMap'] = createExportWrapper('BinaryenModuleWriteWithSourceMap');
var _BinaryenModuleAllocateAndWrite = Module['_BinaryenModuleAllocateAndWrite'] = createExportWrapper('BinaryenModuleAllocateAndWrite');
var _malloc = Module['_malloc'] = createExportWrapper('malloc');
var _BinaryenModuleAllocateAndWriteText = Module['_BinaryenModuleAllocateAndWriteText'] = createExportWrapper('BinaryenModuleAllocateAndWriteText');
var _BinaryenModuleAllocateAndWriteStackIR = Module['_BinaryenModuleAllocateAndWriteStackIR'] = createExportWrapper('BinaryenModuleAllocateAndWriteStackIR');
var _BinaryenModuleRead = Module['_BinaryenModuleRead'] = createExportWrapper('BinaryenModuleRead');
var _BinaryenModuleInterpret = Module['_BinaryenModuleInterpret'] = createExportWrapper('BinaryenModuleInterpret');
var _BinaryenModuleAddDebugInfoFileName = Module['_BinaryenModuleAddDebugInfoFileName'] = createExportWrapper('BinaryenModuleAddDebugInfoFileName');
var _BinaryenModuleGetDebugInfoFileName = Module['_BinaryenModuleGetDebugInfoFileName'] = createExportWrapper('BinaryenModuleGetDebugInfoFileName');
var _BinaryenFunctionGetName = Module['_BinaryenFunctionGetName'] = createExportWrapper('BinaryenFunctionGetName');
var _BinaryenFunctionGetParams = Module['_BinaryenFunctionGetParams'] = createExportWrapper('BinaryenFunctionGetParams');
var _BinaryenFunctionGetResults = Module['_BinaryenFunctionGetResults'] = createExportWrapper('BinaryenFunctionGetResults');
var _BinaryenFunctionGetNumVars = Module['_BinaryenFunctionGetNumVars'] = createExportWrapper('BinaryenFunctionGetNumVars');
var _BinaryenFunctionGetVar = Module['_BinaryenFunctionGetVar'] = createExportWrapper('BinaryenFunctionGetVar');
var _BinaryenFunctionAddVar = Module['_BinaryenFunctionAddVar'] = createExportWrapper('BinaryenFunctionAddVar');
var _BinaryenFunctionGetNumLocals = Module['_BinaryenFunctionGetNumLocals'] = createExportWrapper('BinaryenFunctionGetNumLocals');
var _BinaryenFunctionHasLocalName = Module['_BinaryenFunctionHasLocalName'] = createExportWrapper('BinaryenFunctionHasLocalName');
var _BinaryenFunctionGetLocalName = Module['_BinaryenFunctionGetLocalName'] = createExportWrapper('BinaryenFunctionGetLocalName');
var _BinaryenFunctionSetLocalName = Module['_BinaryenFunctionSetLocalName'] = createExportWrapper('BinaryenFunctionSetLocalName');
var _BinaryenFunctionGetBody = Module['_BinaryenFunctionGetBody'] = createExportWrapper('BinaryenFunctionGetBody');
var _BinaryenFunctionSetBody = Module['_BinaryenFunctionSetBody'] = createExportWrapper('BinaryenFunctionSetBody');
var _BinaryenFunctionOptimize = Module['_BinaryenFunctionOptimize'] = createExportWrapper('BinaryenFunctionOptimize');
var _BinaryenFunctionRunPasses = Module['_BinaryenFunctionRunPasses'] = createExportWrapper('BinaryenFunctionRunPasses');
var _BinaryenFunctionSetDebugLocation = Module['_BinaryenFunctionSetDebugLocation'] = createExportWrapper('BinaryenFunctionSetDebugLocation');
var _BinaryenTableGetName = Module['_BinaryenTableGetName'] = createExportWrapper('BinaryenTableGetName');
var _BinaryenTableSetName = Module['_BinaryenTableSetName'] = createExportWrapper('BinaryenTableSetName');
var _BinaryenTableGetInitial = Module['_BinaryenTableGetInitial'] = createExportWrapper('BinaryenTableGetInitial');
var _BinaryenTableSetInitial = Module['_BinaryenTableSetInitial'] = createExportWrapper('BinaryenTableSetInitial');
var _BinaryenTableHasMax = Module['_BinaryenTableHasMax'] = createExportWrapper('BinaryenTableHasMax');
var _BinaryenTableGetMax = Module['_BinaryenTableGetMax'] = createExportWrapper('BinaryenTableGetMax');
var _BinaryenTableSetMax = Module['_BinaryenTableSetMax'] = createExportWrapper('BinaryenTableSetMax');
var _BinaryenTableGetType = Module['_BinaryenTableGetType'] = createExportWrapper('BinaryenTableGetType');
var _BinaryenTableSetType = Module['_BinaryenTableSetType'] = createExportWrapper('BinaryenTableSetType');
var _BinaryenElementSegmentGetName = Module['_BinaryenElementSegmentGetName'] = createExportWrapper('BinaryenElementSegmentGetName');
var _BinaryenElementSegmentSetName = Module['_BinaryenElementSegmentSetName'] = createExportWrapper('BinaryenElementSegmentSetName');
var _BinaryenElementSegmentGetTable = Module['_BinaryenElementSegmentGetTable'] = createExportWrapper('BinaryenElementSegmentGetTable');
var _BinaryenElementSegmentSetTable = Module['_BinaryenElementSegmentSetTable'] = createExportWrapper('BinaryenElementSegmentSetTable');
var _BinaryenElementSegmentIsPassive = Module['_BinaryenElementSegmentIsPassive'] = createExportWrapper('BinaryenElementSegmentIsPassive');
var _BinaryenGlobalGetName = Module['_BinaryenGlobalGetName'] = createExportWrapper('BinaryenGlobalGetName');
var _BinaryenGlobalGetType = Module['_BinaryenGlobalGetType'] = createExportWrapper('BinaryenGlobalGetType');
var _BinaryenGlobalIsMutable = Module['_BinaryenGlobalIsMutable'] = createExportWrapper('BinaryenGlobalIsMutable');
var _BinaryenGlobalGetInitExpr = Module['_BinaryenGlobalGetInitExpr'] = createExportWrapper('BinaryenGlobalGetInitExpr');
var _BinaryenTagGetName = Module['_BinaryenTagGetName'] = createExportWrapper('BinaryenTagGetName');
var _BinaryenTagGetParams = Module['_BinaryenTagGetParams'] = createExportWrapper('BinaryenTagGetParams');
var _BinaryenTagGetResults = Module['_BinaryenTagGetResults'] = createExportWrapper('BinaryenTagGetResults');
var _BinaryenFunctionImportGetModule = Module['_BinaryenFunctionImportGetModule'] = createExportWrapper('BinaryenFunctionImportGetModule');
var _BinaryenTableImportGetModule = Module['_BinaryenTableImportGetModule'] = createExportWrapper('BinaryenTableImportGetModule');
var _BinaryenGlobalImportGetModule = Module['_BinaryenGlobalImportGetModule'] = createExportWrapper('BinaryenGlobalImportGetModule');
var _BinaryenTagImportGetModule = Module['_BinaryenTagImportGetModule'] = createExportWrapper('BinaryenTagImportGetModule');
var _BinaryenFunctionImportGetBase = Module['_BinaryenFunctionImportGetBase'] = createExportWrapper('BinaryenFunctionImportGetBase');
var _BinaryenTableImportGetBase = Module['_BinaryenTableImportGetBase'] = createExportWrapper('BinaryenTableImportGetBase');
var _BinaryenGlobalImportGetBase = Module['_BinaryenGlobalImportGetBase'] = createExportWrapper('BinaryenGlobalImportGetBase');
var _BinaryenTagImportGetBase = Module['_BinaryenTagImportGetBase'] = createExportWrapper('BinaryenTagImportGetBase');
var _BinaryenExportGetKind = Module['_BinaryenExportGetKind'] = createExportWrapper('BinaryenExportGetKind');
var _BinaryenExportGetName = Module['_BinaryenExportGetName'] = createExportWrapper('BinaryenExportGetName');
var _BinaryenExportGetValue = Module['_BinaryenExportGetValue'] = createExportWrapper('BinaryenExportGetValue');
var _BinaryenAddCustomSection = Module['_BinaryenAddCustomSection'] = createExportWrapper('BinaryenAddCustomSection');
var _BinaryenSideEffectNone = Module['_BinaryenSideEffectNone'] = createExportWrapper('BinaryenSideEffectNone');
var _BinaryenSideEffectBranches = Module['_BinaryenSideEffectBranches'] = createExportWrapper('BinaryenSideEffectBranches');
var _BinaryenSideEffectCalls = Module['_BinaryenSideEffectCalls'] = createExportWrapper('BinaryenSideEffectCalls');
var _BinaryenSideEffectReadsLocal = Module['_BinaryenSideEffectReadsLocal'] = createExportWrapper('BinaryenSideEffectReadsLocal');
var _BinaryenSideEffectWritesLocal = Module['_BinaryenSideEffectWritesLocal'] = createExportWrapper('BinaryenSideEffectWritesLocal');
var _BinaryenSideEffectReadsGlobal = Module['_BinaryenSideEffectReadsGlobal'] = createExportWrapper('BinaryenSideEffectReadsGlobal');
var _BinaryenSideEffectWritesGlobal = Module['_BinaryenSideEffectWritesGlobal'] = createExportWrapper('BinaryenSideEffectWritesGlobal');
var _BinaryenSideEffectReadsMemory = Module['_BinaryenSideEffectReadsMemory'] = createExportWrapper('BinaryenSideEffectReadsMemory');
var _BinaryenSideEffectWritesMemory = Module['_BinaryenSideEffectWritesMemory'] = createExportWrapper('BinaryenSideEffectWritesMemory');
var _BinaryenSideEffectReadsTable = Module['_BinaryenSideEffectReadsTable'] = createExportWrapper('BinaryenSideEffectReadsTable');
var _BinaryenSideEffectWritesTable = Module['_BinaryenSideEffectWritesTable'] = createExportWrapper('BinaryenSideEffectWritesTable');
var _BinaryenSideEffectImplicitTrap = Module['_BinaryenSideEffectImplicitTrap'] = createExportWrapper('BinaryenSideEffectImplicitTrap');
var _BinaryenSideEffectTrapsNeverHappen = Module['_BinaryenSideEffectTrapsNeverHappen'] = createExportWrapper('BinaryenSideEffectTrapsNeverHappen');
var _BinaryenSideEffectIsAtomic = Module['_BinaryenSideEffectIsAtomic'] = createExportWrapper('BinaryenSideEffectIsAtomic');
var _BinaryenSideEffectThrows = Module['_BinaryenSideEffectThrows'] = createExportWrapper('BinaryenSideEffectThrows');
var _BinaryenSideEffectDanglingPop = Module['_BinaryenSideEffectDanglingPop'] = createExportWrapper('BinaryenSideEffectDanglingPop');
var _BinaryenSideEffectAny = Module['_BinaryenSideEffectAny'] = createExportWrapper('BinaryenSideEffectAny');
var _BinaryenExpressionGetSideEffects = Module['_BinaryenExpressionGetSideEffects'] = createExportWrapper('BinaryenExpressionGetSideEffects');
var _RelooperCreate = Module['_RelooperCreate'] = createExportWrapper('RelooperCreate');
var _RelooperAddBlock = Module['_RelooperAddBlock'] = createExportWrapper('RelooperAddBlock');
var _RelooperAddBranch = Module['_RelooperAddBranch'] = createExportWrapper('RelooperAddBranch');
var _RelooperAddBlockWithSwitch = Module['_RelooperAddBlockWithSwitch'] = createExportWrapper('RelooperAddBlockWithSwitch');
var _RelooperAddBranchForSwitch = Module['_RelooperAddBranchForSwitch'] = createExportWrapper('RelooperAddBranchForSwitch');
var _RelooperRenderAndDispose = Module['_RelooperRenderAndDispose'] = createExportWrapper('RelooperRenderAndDispose');
var _ExpressionRunnerFlagsDefault = Module['_ExpressionRunnerFlagsDefault'] = createExportWrapper('ExpressionRunnerFlagsDefault');
var _ExpressionRunnerFlagsPreserveSideeffects = Module['_ExpressionRunnerFlagsPreserveSideeffects'] = createExportWrapper('ExpressionRunnerFlagsPreserveSideeffects');
var _ExpressionRunnerFlagsTraverseCalls = Module['_ExpressionRunnerFlagsTraverseCalls'] = createExportWrapper('ExpressionRunnerFlagsTraverseCalls');
var _ExpressionRunnerCreate = Module['_ExpressionRunnerCreate'] = createExportWrapper('ExpressionRunnerCreate');
var _ExpressionRunnerSetLocalValue = Module['_ExpressionRunnerSetLocalValue'] = createExportWrapper('ExpressionRunnerSetLocalValue');
var _ExpressionRunnerSetGlobalValue = Module['_ExpressionRunnerSetGlobalValue'] = createExportWrapper('ExpressionRunnerSetGlobalValue');
var _ExpressionRunnerRunAndDispose = Module['_ExpressionRunnerRunAndDispose'] = createExportWrapper('ExpressionRunnerRunAndDispose');
var _TypeBuilderErrorReasonSelfSupertype = Module['_TypeBuilderErrorReasonSelfSupertype'] = createExportWrapper('TypeBuilderErrorReasonSelfSupertype');
var _TypeBuilderErrorReasonInvalidSupertype = Module['_TypeBuilderErrorReasonInvalidSupertype'] = createExportWrapper('TypeBuilderErrorReasonInvalidSupertype');
var _TypeBuilderErrorReasonForwardSupertypeReference = Module['_TypeBuilderErrorReasonForwardSupertypeReference'] = createExportWrapper('TypeBuilderErrorReasonForwardSupertypeReference');
var _TypeBuilderErrorReasonForwardChildReference = Module['_TypeBuilderErrorReasonForwardChildReference'] = createExportWrapper('TypeBuilderErrorReasonForwardChildReference');
var _TypeBuilderCreate = Module['_TypeBuilderCreate'] = createExportWrapper('TypeBuilderCreate');
var _TypeBuilderGrow = Module['_TypeBuilderGrow'] = createExportWrapper('TypeBuilderGrow');
var _TypeBuilderGetSize = Module['_TypeBuilderGetSize'] = createExportWrapper('TypeBuilderGetSize');
var _TypeBuilderSetSignatureType = Module['_TypeBuilderSetSignatureType'] = createExportWrapper('TypeBuilderSetSignatureType');
var _TypeBuilderSetStructType = Module['_TypeBuilderSetStructType'] = createExportWrapper('TypeBuilderSetStructType');
var _TypeBuilderSetArrayType = Module['_TypeBuilderSetArrayType'] = createExportWrapper('TypeBuilderSetArrayType');
var _TypeBuilderGetTempHeapType = Module['_TypeBuilderGetTempHeapType'] = createExportWrapper('TypeBuilderGetTempHeapType');
var _TypeBuilderGetTempTupleType = Module['_TypeBuilderGetTempTupleType'] = createExportWrapper('TypeBuilderGetTempTupleType');
var _TypeBuilderGetTempRefType = Module['_TypeBuilderGetTempRefType'] = createExportWrapper('TypeBuilderGetTempRefType');
var _TypeBuilderSetSubType = Module['_TypeBuilderSetSubType'] = createExportWrapper('TypeBuilderSetSubType');
var _TypeBuilderSetOpen = Module['_TypeBuilderSetOpen'] = createExportWrapper('TypeBuilderSetOpen');
var _TypeBuilderCreateRecGroup = Module['_TypeBuilderCreateRecGroup'] = createExportWrapper('TypeBuilderCreateRecGroup');
var _TypeBuilderBuildAndDispose = Module['_TypeBuilderBuildAndDispose'] = createExportWrapper('TypeBuilderBuildAndDispose');
var _BinaryenModuleSetTypeName = Module['_BinaryenModuleSetTypeName'] = createExportWrapper('BinaryenModuleSetTypeName');
var _BinaryenModuleSetFieldName = Module['_BinaryenModuleSetFieldName'] = createExportWrapper('BinaryenModuleSetFieldName');
var _BinaryenSetColorsEnabled = Module['_BinaryenSetColorsEnabled'] = createExportWrapper('BinaryenSetColorsEnabled');
var _BinaryenAreColorsEnabled = Module['_BinaryenAreColorsEnabled'] = createExportWrapper('BinaryenAreColorsEnabled');
var _BinaryenSizeofLiteral = Module['_BinaryenSizeofLiteral'] = createExportWrapper('BinaryenSizeofLiteral');
var _BinaryenSizeofAllocateAndWriteResult = Module['_BinaryenSizeofAllocateAndWriteResult'] = createExportWrapper('BinaryenSizeofAllocateAndWriteResult');
var __i32_store8 = Module['__i32_store8'] = createExportWrapper('_i32_store8');
var __i32_store16 = Module['__i32_store16'] = createExportWrapper('_i32_store16');
var __i32_store = Module['__i32_store'] = createExportWrapper('_i32_store');
var __f32_store = Module['__f32_store'] = createExportWrapper('_f32_store');
var __f64_store = Module['__f64_store'] = createExportWrapper('_f64_store');
var __i32_load8_s = Module['__i32_load8_s'] = createExportWrapper('_i32_load8_s');
var __i32_load8_u = Module['__i32_load8_u'] = createExportWrapper('_i32_load8_u');
var __i32_load16_s = Module['__i32_load16_s'] = createExportWrapper('_i32_load16_s');
var __i32_load16_u = Module['__i32_load16_u'] = createExportWrapper('_i32_load16_u');
var __i32_load = Module['__i32_load'] = createExportWrapper('_i32_load');
var __f32_load = Module['__f32_load'] = createExportWrapper('_f32_load');
var __f64_load = Module['__f64_load'] = createExportWrapper('_f64_load');
var ___cxa_free_exception = createExportWrapper('__cxa_free_exception');
var ___errno_location = createExportWrapper('__errno_location');
var _fflush = Module['_fflush'] = createExportWrapper('fflush');
var _setThrew = createExportWrapper('setThrew');
var setTempRet0 = createExportWrapper('setTempRet0');
var _emscripten_stack_init = () => (_emscripten_stack_init = wasmExports['emscripten_stack_init'])();
var _emscripten_stack_get_free = () => (_emscripten_stack_get_free = wasmExports['emscripten_stack_get_free'])();
var _emscripten_stack_get_base = () => (_emscripten_stack_get_base = wasmExports['emscripten_stack_get_base'])();
var _emscripten_stack_get_end = () => (_emscripten_stack_get_end = wasmExports['emscripten_stack_get_end'])();
var stackSave = createExportWrapper('stackSave');
var stackRestore = createExportWrapper('stackRestore');
var stackAlloc = createExportWrapper('stackAlloc');
var _emscripten_stack_get_current = () => (_emscripten_stack_get_current = wasmExports['emscripten_stack_get_current'])();
var ___cxa_decrement_exception_refcount = createExportWrapper('__cxa_decrement_exception_refcount');
var ___cxa_increment_exception_refcount = createExportWrapper('__cxa_increment_exception_refcount');
var ___get_exception_message = Module['___get_exception_message'] = createExportWrapper('__get_exception_message');
var ___cxa_can_catch = createExportWrapper('__cxa_can_catch');
var ___cxa_is_pointer_type = createExportWrapper('__cxa_is_pointer_type');
var dynCall_iiiiiij = Module['dynCall_iiiiiij'] = createExportWrapper('dynCall_iiiiiij');
var dynCall_iiji = Module['dynCall_iiji'] = createExportWrapper('dynCall_iiji');
var dynCall_ji = Module['dynCall_ji'] = createExportWrapper('dynCall_ji');
var dynCall_jii = Module['dynCall_jii'] = createExportWrapper('dynCall_jii');
var dynCall_jiiij = Module['dynCall_jiiij'] = createExportWrapper('dynCall_jiiij');
var dynCall_vijij = Module['dynCall_vijij'] = createExportWrapper('dynCall_vijij');
var dynCall_viijiiij = Module['dynCall_viijiiij'] = createExportWrapper('dynCall_viijiiij');
var dynCall_vijiiij = Module['dynCall_vijiiij'] = createExportWrapper('dynCall_vijiiij');
var dynCall_jiiiij = Module['dynCall_jiiiij'] = createExportWrapper('dynCall_jiiiij');
var dynCall_iij = Module['dynCall_iij'] = createExportWrapper('dynCall_iij');
var dynCall_viji = Module['dynCall_viji'] = createExportWrapper('dynCall_viji');
var dynCall_viij = Module['dynCall_viij'] = createExportWrapper('dynCall_viij');
var dynCall_iiijj = Module['dynCall_iiijj'] = createExportWrapper('dynCall_iiijj');
var dynCall_viiiji = Module['dynCall_viiiji'] = createExportWrapper('dynCall_viiiji');
var dynCall_viijii = Module['dynCall_viijii'] = createExportWrapper('dynCall_viijii');
var dynCall_jiji = Module['dynCall_jiji'] = createExportWrapper('dynCall_jiji');
var dynCall_viiji = Module['dynCall_viiji'] = createExportWrapper('dynCall_viiji');
var dynCall_vijii = Module['dynCall_vijii'] = createExportWrapper('dynCall_vijii');
var dynCall_vijji = Module['dynCall_vijji'] = createExportWrapper('dynCall_vijji');
var dynCall_vij = Module['dynCall_vij'] = createExportWrapper('dynCall_vij');
var dynCall_viiiiij = Module['dynCall_viiiiij'] = createExportWrapper('dynCall_viiiiij');
var dynCall_vjii = Module['dynCall_vjii'] = createExportWrapper('dynCall_vjii');
var dynCall_jiii = Module['dynCall_jiii'] = createExportWrapper('dynCall_jiii');
var dynCall_viiij = Module['dynCall_viiij'] = createExportWrapper('dynCall_viiij');
var dynCall_iiiijiiii = Module['dynCall_iiiijiiii'] = createExportWrapper('dynCall_iiiijiiii');
var dynCall_iiijiiiii = Module['dynCall_iiijiiiii'] = createExportWrapper('dynCall_iiijiiiii');
var dynCall_iijiiii = Module['dynCall_iijiiii'] = createExportWrapper('dynCall_iijiiii');
var dynCall_j = Module['dynCall_j'] = createExportWrapper('dynCall_j');
var dynCall_iiiiij = Module['dynCall_iiiiij'] = createExportWrapper('dynCall_iiiiij');
var dynCall_jiiii = Module['dynCall_jiiii'] = createExportWrapper('dynCall_jiiii');
var dynCall_iiiiijj = Module['dynCall_iiiiijj'] = createExportWrapper('dynCall_iiiiijj');
var dynCall_iiiiiijj = Module['dynCall_iiiiiijj'] = createExportWrapper('dynCall_iiiiiijj');

function invoke_iiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_i(index) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vii(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vi(index,a1) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ii(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_v(index) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)();
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_id(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_fi(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iid(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vif(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_di(index,a1) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vid(index,a1,a2) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iif(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_dii(index,a1,a2) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiid(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_fiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_diii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  var sp = stackSave();
  try {
    return getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15) {
  var sp = stackSave();
  try {
    getWasmTableEntry(index)(a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiiij(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iiiiiij(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiji(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_iiji(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_ji(index,a1) {
  var sp = stackSave();
  try {
    return dynCall_ji(index,a1);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jii(index,a1,a2) {
  var sp = stackSave();
  try {
    return dynCall_jii(index,a1,a2);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiiij(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    return dynCall_jiiij(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vijij(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_vijij(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiji(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viiiji(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viijii(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_viijii(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viijiiij(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    dynCall_viijiiij(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vijiiij(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  var sp = stackSave();
  try {
    dynCall_vijiiij(index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiiiij(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_jiiiij(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vijii(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_vijii(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiji(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiji(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iij(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_iij(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vijji(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    dynCall_vijji(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viji(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viji(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiijj(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiijj(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viij(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_viij(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vij(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    dynCall_vij(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiiiij(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    dynCall_viiiiij(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_vjii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    dynCall_vjii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiii(index,a1,a2,a3) {
  var sp = stackSave();
  try {
    return dynCall_jiii(index,a1,a2,a3);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_viiij(index,a1,a2,a3,a4,a5) {
  var sp = stackSave();
  try {
    dynCall_viiij(index,a1,a2,a3,a4,a5);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiijiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  var sp = stackSave();
  try {
    return dynCall_iiiijiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iijiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  var sp = stackSave();
  try {
    return dynCall_iijiiii(index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_j(index) {
  var sp = stackSave();
  try {
    return dynCall_j(index);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_iiiiij(index,a1,a2,a3,a4,a5,a6) {
  var sp = stackSave();
  try {
    return dynCall_iiiiij(index,a1,a2,a3,a4,a5,a6);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}

function invoke_jiiii(index,a1,a2,a3,a4) {
  var sp = stackSave();
  try {
    return dynCall_jiiii(index,a1,a2,a3,a4);
  } catch(e) {
    stackRestore(sp);
    if (!(e instanceof EmscriptenEH)) throw e;
    _setThrew(1, 0);
  }
}


// include: postamble.js
// === Auto-generated postamble setup entry stuff ===

Module['addRunDependency'] = addRunDependency;
Module['removeRunDependency'] = removeRunDependency;
Module['FS_createPath'] = FS.createPath;
Module['FS_createLazyFile'] = FS.createLazyFile;
Module['FS_createDevice'] = FS.createDevice;
Module['stackAlloc'] = stackAlloc;
Module['stackSave'] = stackSave;
Module['stackRestore'] = stackRestore;
Module['UTF8ToString'] = UTF8ToString;
Module['stringToAscii'] = stringToAscii;
Module['FS_createPreloadedFile'] = FS.createPreloadedFile;
Module['FS_createDataFile'] = FS.createDataFile;
Module['FS_unlink'] = FS.unlink;
Module['allocateUTF8OnStack'] = allocateUTF8OnStack;
var missingLibrarySymbols = [
  'writeI53ToI64',
  'writeI53ToI64Clamped',
  'writeI53ToI64Signaling',
  'writeI53ToU64Clamped',
  'writeI53ToU64Signaling',
  'readI53FromI64',
  'readI53FromU64',
  'convertI32PairToI53',
  'convertU32PairToI53',
  'exitJS',
  'ydayFromDate',
  'inetPton4',
  'inetNtop4',
  'inetPton6',
  'inetNtop6',
  'readSockaddr',
  'writeSockaddr',
  'getHostByName',
  'getCallstack',
  'emscriptenLog',
  'convertPCtoSourceLocation',
  'readEmAsmArgs',
  'jstoi_q',
  'jstoi_s',
  'listenOnce',
  'autoResumeAudioContext',
  'dynCallLegacy',
  'getDynCaller',
  'dynCall',
  'handleException',
  'runtimeKeepalivePush',
  'runtimeKeepalivePop',
  'callUserCallback',
  'maybeExit',
  'asmjsMangle',
  'handleAllocatorInit',
  'HandleAllocator',
  'getNativeTypeSize',
  'STACK_SIZE',
  'STACK_ALIGN',
  'POINTER_SIZE',
  'ASSERTIONS',
  'getCFunc',
  'ccall',
  'cwrap',
  'uleb128Encode',
  'sigToWasmTypes',
  'generateFuncType',
  'convertJsFunctionToWasm',
  'getEmptyTableSlot',
  'updateTableMap',
  'getFunctionAddress',
  'addFunction',
  'removeFunction',
  'reallyNegative',
  'unSign',
  'strLen',
  'reSign',
  'formatString',
  'intArrayToString',
  'AsciiToString',
  'UTF16ToString',
  'stringToUTF16',
  'lengthBytesUTF16',
  'UTF32ToString',
  'stringToUTF32',
  'lengthBytesUTF32',
  'stringToNewUTF8',
  'registerKeyEventCallback',
  'maybeCStringToJsString',
  'findEventTarget',
  'findCanvasEventTarget',
  'getBoundingClientRect',
  'fillMouseEventData',
  'registerMouseEventCallback',
  'registerWheelEventCallback',
  'registerUiEventCallback',
  'registerFocusEventCallback',
  'fillDeviceOrientationEventData',
  'registerDeviceOrientationEventCallback',
  'fillDeviceMotionEventData',
  'registerDeviceMotionEventCallback',
  'screenOrientation',
  'fillOrientationChangeEventData',
  'registerOrientationChangeEventCallback',
  'fillFullscreenChangeEventData',
  'registerFullscreenChangeEventCallback',
  'JSEvents_requestFullscreen',
  'JSEvents_resizeCanvasForFullscreen',
  'registerRestoreOldStyle',
  'hideEverythingExceptGivenElement',
  'restoreHiddenElements',
  'setLetterbox',
  'softFullscreenResizeWebGLRenderTarget',
  'doRequestFullscreen',
  'fillPointerlockChangeEventData',
  'registerPointerlockChangeEventCallback',
  'registerPointerlockErrorEventCallback',
  'requestPointerLock',
  'fillVisibilityChangeEventData',
  'registerVisibilityChangeEventCallback',
  'registerTouchEventCallback',
  'fillGamepadEventData',
  'registerGamepadEventCallback',
  'registerBeforeUnloadEventCallback',
  'fillBatteryEventData',
  'battery',
  'registerBatteryEventCallback',
  'setCanvasElementSize',
  'getCanvasElementSize',
  'jsStackTrace',
  'stackTrace',
  'checkWasiClock',
  'wasiRightsToMuslOFlags',
  'wasiOFlagsToMuslOFlags',
  'createDyncallWrapper',
  'safeSetTimeout',
  'setImmediateWrapped',
  'clearImmediateWrapped',
  'polyfillSetImmediate',
  'getPromise',
  'makePromise',
  'idsToPromises',
  'makePromiseCallback',
  'setMainLoop',
  'getSocketFromFD',
  'getSocketAddress',
  'FS_mkdirTree',
  '_setNetworkCallback',
  'heapObjectForWebGLType',
  'heapAccessShiftForWebGLHeap',
  'webgl_enable_ANGLE_instanced_arrays',
  'webgl_enable_OES_vertex_array_object',
  'webgl_enable_WEBGL_draw_buffers',
  'webgl_enable_WEBGL_multi_draw',
  'emscriptenWebGLGet',
  'computeUnpackAlignedImageSize',
  'colorChannelsInGlTextureFormat',
  'emscriptenWebGLGetTexPixelData',
  '__glGenObject',
  'emscriptenWebGLGetUniform',
  'webglGetUniformLocation',
  'webglPrepareUniformLocationsBeforeFirstUse',
  'webglGetLeftBracePos',
  'emscriptenWebGLGetVertexAttrib',
  '__glGetActiveAttribOrUniform',
  'writeGLArray',
  'registerWebGlEventCallback',
  'runAndAbortIfError',
  'SDL_unicode',
  'SDL_ttfContext',
  'SDL_audio',
  'ALLOC_NORMAL',
  'ALLOC_STACK',
  'allocate',
  'writeStringToMemory',
  'writeAsciiToMemory',
];
missingLibrarySymbols.forEach(missingLibrarySymbol)

var unexportedSymbols = [
  'run',
  'addOnPreRun',
  'addOnInit',
  'addOnPreMain',
  'addOnExit',
  'addOnPostRun',
  'FS_createFolder',
  'FS_createLink',
  'FS_readFile',
  'out',
  'err',
  'callMain',
  'abort',
  'wasmMemory',
  'wasmExports',
  'getTempRet0',
  'setTempRet0',
  'writeStackCookie',
  'checkStackCookie',
  'convertI32PairToI53Checked',
  'ptrToString',
  'zeroMemory',
  'getHeapMax',
  'growMemory',
  'ENV',
  'MONTH_DAYS_REGULAR',
  'MONTH_DAYS_LEAP',
  'MONTH_DAYS_REGULAR_CUMULATIVE',
  'MONTH_DAYS_LEAP_CUMULATIVE',
  'isLeapYear',
  'arraySum',
  'addDays',
  'ERRNO_CODES',
  'ERRNO_MESSAGES',
  'setErrNo',
  'DNS',
  'Protocols',
  'Sockets',
  'initRandomFill',
  'randomFill',
  'timers',
  'warnOnce',
  'UNWIND_CACHE',
  'readEmAsmArgsArray',
  'getExecutableName',
  'keepRuntimeAlive',
  'asyncLoad',
  'alignMemory',
  'mmapAlloc',
  'wasmTable',
  'noExitRuntime',
  'freeTableIndexes',
  'functionsInTableMap',
  'setValue',
  'getValue',
  'PATH',
  'PATH_FS',
  'UTF8Decoder',
  'UTF8ArrayToString',
  'stringToUTF8Array',
  'stringToUTF8',
  'lengthBytesUTF8',
  'intArrayFromString',
  'UTF16Decoder',
  'stringToUTF8OnStack',
  'writeArrayToMemory',
  'JSEvents',
  'specialHTMLTargets',
  'currentFullscreenStrategy',
  'restoreOldWindowedStyle',
  'demangle',
  'demangleAll',
  'ExitStatus',
  'getEnvStrings',
  'doReadv',
  'doWritev',
  'promiseMap',
  'uncaughtExceptionCount',
  'exceptionLast',
  'exceptionCaught',
  'ExceptionInfo',
  'findMatchingCatch',
  'getExceptionMessageCommon',
  'incrementExceptionRefcount',
  'decrementExceptionRefcount',
  'getExceptionMessage',
  'Browser',
  'wget',
  'SYSCALLS',
  'preloadPlugins',
  'FS_modeStringToFlags',
  'FS_getMode',
  'FS_stdin_getChar_buffer',
  'FS_stdin_getChar',
  'FS',
  'MEMFS',
  'TTY',
  'PIPEFS',
  'SOCKFS',
  'tempFixedLengthArray',
  'miniTempWebGLFloatBuffers',
  'miniTempWebGLIntBuffers',
  'GL',
  'emscripten_webgl_power_preferences',
  'AL',
  'GLUT',
  'EGL',
  'GLEW',
  'IDBStore',
  'SDL',
  'SDL_gfx',
  'allocateUTF8',
];
unexportedSymbols.forEach(unexportedRuntimeSymbol);



var calledRun;

dependenciesFulfilled = function runCaller() {
  // If run has never been called, and we should call run (INVOKE_RUN is true, and Module.noInitialRun is not false)
  if (!calledRun) run();
  if (!calledRun) dependenciesFulfilled = runCaller; // try this again later, after new deps are fulfilled
};

function stackCheckInit() {
  // This is normally called automatically during __wasm_call_ctors but need to
  // get these values before even running any of the ctors so we call it redundantly
  // here.
  _emscripten_stack_init();
  // TODO(sbc): Move writeStackCookie to native to to avoid this.
  writeStackCookie();
}

function run() {

  if (runDependencies > 0) {
    return;
  }

    stackCheckInit();

  preRun();

  // a preRun added a dependency, run will be called later
  if (runDependencies > 0) {
    return;
  }

  function doRun() {
    // run may have just been called through dependencies being fulfilled just in this very frame,
    // or while the async setStatus time below was happening
    if (calledRun) return;
    calledRun = true;
    Module['calledRun'] = true;

    if (ABORT) return;

    initRuntime();

    readyPromiseResolve(Module);
    if (Module['onRuntimeInitialized']) Module['onRuntimeInitialized']();

    assert(!Module['_main'], 'compiled without a main, but one is present. if you added it from JS, use Module["onRuntimeInitialized"]');

    postRun();
  }

  if (Module['setStatus']) {
    Module['setStatus']('Running...');
    setTimeout(function() {
      setTimeout(function() {
        Module['setStatus']('');
      }, 1);
      doRun();
    }, 1);
  } else
  {
    doRun();
  }
  checkStackCookie();
}

function checkUnflushedContent() {
  // Compiler settings do not allow exiting the runtime, so flushing
  // the streams is not possible. but in ASSERTIONS mode we check
  // if there was something to flush, and if so tell the user they
  // should request that the runtime be exitable.
  // Normally we would not even include flush() at all, but in ASSERTIONS
  // builds we do so just for this check, and here we see if there is any
  // content to flush, that is, we check if there would have been
  // something a non-ASSERTIONS build would have not seen.
  // How we flush the streams depends on whether we are in SYSCALLS_REQUIRE_FILESYSTEM=0
  // mode (which has its own special function for this; otherwise, all
  // the code is inside libc)
  var oldOut = out;
  var oldErr = err;
  var has = false;
  out = err = (x) => {
    has = true;
  }
  try { // it doesn't matter if it fails
    _fflush(0);
    // also flush in the JS FS layer
    ['stdout', 'stderr'].forEach(function(name) {
      var info = FS.analyzePath('/dev/' + name);
      if (!info) return;
      var stream = info.object;
      var rdev = stream.rdev;
      var tty = TTY.ttys[rdev];
      if (tty && tty.output && tty.output.length) {
        has = true;
      }
    });
  } catch(e) {}
  out = oldOut;
  err = oldErr;
  if (has) {
    warnOnce('stdio streams had content in them that was not flushed. you should set EXIT_RUNTIME to 1 (see the Emscripten FAQ), or make sure to emit a newline when you printf etc.');
  }
}

if (Module['preInit']) {
  if (typeof Module['preInit'] == 'function') Module['preInit'] = [Module['preInit']];
  while (Module['preInit'].length > 0) {
    Module['preInit'].pop()();
  }
}

run();


// end include: postamble.js
// include: /Users/ericvergnaud/Development/webassembly/binaryen/bin/binaryen_post.js
function swapOut(writer) {
    const saved = out;
    out = writer;
    return saved;
}
function swapErr(writer) {
    const saved = err;
    err = writer;
    return saved;
}
Module['utils'] = {
    "out": out,
    "err": err,
    "swapOut": swapOut,
    "swapErr": swapErr,
    "_BinaryenSizeofLiteral": _BinaryenSizeofLiteral,
    "_BinaryenSizeofAllocateAndWriteResult": _BinaryenSizeofAllocateAndWriteResult
};

// end include: /Users/ericvergnaud/Development/webassembly/binaryen/bin/binaryen_post.js


  return moduleArg.ready
}
);
})();
;
export default Binaryen;