export declare const sizeOfLiteral: number;
export type Type = number;
export type ElementSegmentRef = number;
export type ExpressionRef = number;
export type FunctionRef = number;
export type GlobalRef = number;
export type ExportRef = number;
export type TableRef = number;
export type TagRef = number;
export type RelooperBlockRef = number;
export type ExpressionRunnerRef = number;
export type TypeBuilderRef = number;
export type HeapType = number;
export declare const none: Type;
export declare const i32: Type;
export declare const i64: Type;
export declare const f32: Type;
export declare const f64: Type;
export declare const v128: Type;
export declare const funcref: Type;
export declare const externref: Type;
export declare const anyref: Type;
export declare const eqref: Type;
export declare const i31ref: Type;
export declare const structref: Type;
export declare const unreachable: Type;
export declare const auto: Type;
export declare function createType(types: Type[]): Type;
export declare function expandType(type: Type): Type[];
export declare enum ExternalKinds {
    Function,
    Table,
    Memory,
    Global,
    Tag
}
export declare enum Feature {
    MVP,
    Atomics,
    BulkMemory,
    MutableGlobals,
    NontrappingFPToInt,
    SignExt,
    SIMD128,
    ExceptionHandling,
    TailCall,
    ReferenceTypes,
    Multivalue,
    GC,
    Memory64,
    RelaxedSIMD,
    ExtendedConst,
    All
}
export declare enum Operations {
    ClzInt32,
    CtzInt32,
    PopcntInt32,
    NegFloat32,
    AbsFloat32,
    CeilFloat32,
    FloorFloat32,
    TruncFloat32,
    NearestFloat32,
    SqrtFloat32,
    EqZInt32,
    ClzInt64,
    CtzInt64,
    PopcntInt64,
    NegFloat64,
    AbsFloat64,
    CeilFloat64,
    FloorFloat64,
    TruncFloat64,
    NearestFloat64,
    SqrtFloat64,
    EqZInt64,
    ExtendSInt32,
    ExtendUInt32,
    WrapInt64,
    TruncSFloat32ToInt32,
    TruncSFloat32ToInt64,
    TruncUFloat32ToInt32,
    TruncUFloat32ToInt64,
    TruncSFloat64ToInt32,
    TruncSFloat64ToInt64,
    TruncUFloat64ToInt32,
    TruncUFloat64ToInt64,
    TruncSatSFloat32ToInt32,
    TruncSatSFloat32ToInt64,
    TruncSatUFloat32ToInt32,
    TruncSatUFloat32ToInt64,
    TruncSatSFloat64ToInt32,
    TruncSatSFloat64ToInt64,
    TruncSatUFloat64ToInt32,
    TruncSatUFloat64ToInt64,
    ReinterpretFloat32,
    ReinterpretFloat64,
    ConvertSInt32ToFloat32,
    ConvertSInt32ToFloat64,
    ConvertUInt32ToFloat32,
    ConvertUInt32ToFloat64,
    ConvertSInt64ToFloat32,
    ConvertSInt64ToFloat64,
    ConvertUInt64ToFloat32,
    ConvertUInt64ToFloat64,
    PromoteFloat32,
    DemoteFloat64,
    ReinterpretInt32,
    ReinterpretInt64,
    ExtendS8Int32,
    ExtendS16Int32,
    ExtendS8Int64,
    ExtendS16Int64,
    ExtendS32Int64,
    AddInt32,
    SubInt32,
    MulInt32,
    DivSInt32,
    DivUInt32,
    RemSInt32,
    RemUInt32,
    AndInt32,
    OrInt32,
    XorInt32,
    ShlInt32,
    ShrUInt32,
    ShrSInt32,
    RotLInt32,
    RotRInt32,
    EqInt32,
    NeInt32,
    LtSInt32,
    LtUInt32,
    LeSInt32,
    LeUInt32,
    GtSInt32,
    GtUInt32,
    GeSInt32,
    GeUInt32,
    AddInt64,
    SubInt64,
    MulInt64,
    DivSInt64,
    DivUInt64,
    RemSInt64,
    RemUInt64,
    AndInt64,
    OrInt64,
    XorInt64,
    ShlInt64,
    ShrUInt64,
    ShrSInt64,
    RotLInt64,
    RotRInt64,
    EqInt64,
    NeInt64,
    LtSInt64,
    LtUInt64,
    LeSInt64,
    LeUInt64,
    GtSInt64,
    GtUInt64,
    GeSInt64,
    GeUInt64,
    AddFloat32,
    SubFloat32,
    MulFloat32,
    DivFloat32,
    CopySignFloat32,
    MinFloat32,
    MaxFloat32,
    EqFloat32,
    NeFloat32,
    LtFloat32,
    LeFloat32,
    GtFloat32,
    GeFloat32,
    AddFloat64,
    SubFloat64,
    MulFloat64,
    DivFloat64,
    CopySignFloat64,
    MinFloat64,
    MaxFloat64,
    EqFloat64,
    NeFloat64,
    LtFloat64,
    LeFloat64,
    GtFloat64,
    GeFloat64,
    AtomicRMWAdd,
    AtomicRMWSub,
    AtomicRMWAnd,
    AtomicRMWOr,
    AtomicRMWXor,
    AtomicRMWXchg,
    SplatVecI8x16,
    ExtractLaneSVecI8x16,
    ExtractLaneUVecI8x16,
    ReplaceLaneVecI8x16,
    SplatVecI16x8,
    ExtractLaneSVecI16x8,
    ExtractLaneUVecI16x8,
    ReplaceLaneVecI16x8,
    SplatVecI32x4,
    ExtractLaneVecI32x4,
    ReplaceLaneVecI32x4,
    SplatVecI64x2,
    ExtractLaneVecI64x2,
    ReplaceLaneVecI64x2,
    SplatVecF32x4,
    ExtractLaneVecF32x4,
    ReplaceLaneVecF32x4,
    SplatVecF64x2,
    ExtractLaneVecF64x2,
    ReplaceLaneVecF64x2,
    EqVecI8x16,
    NeVecI8x16,
    LtSVecI8x16,
    LtUVecI8x16,
    GtSVecI8x16,
    GtUVecI8x16,
    LeSVecI8x16,
    LeUVecI8x16,
    GeSVecI8x16,
    GeUVecI8x16,
    EqVecI16x8,
    NeVecI16x8,
    LtSVecI16x8,
    LtUVecI16x8,
    GtSVecI16x8,
    GtUVecI16x8,
    LeSVecI16x8,
    LeUVecI16x8,
    GeSVecI16x8,
    GeUVecI16x8,
    EqVecI32x4,
    NeVecI32x4,
    LtSVecI32x4,
    LtUVecI32x4,
    GtSVecI32x4,
    GtUVecI32x4,
    LeSVecI32x4,
    LeUVecI32x4,
    GeSVecI32x4,
    GeUVecI32x4,
    EqVecI64x2,
    NeVecI64x2,
    LtSVecI64x2,
    GtSVecI64x2,
    LeSVecI64x2,
    GeSVecI64x2,
    EqVecF32x4,
    NeVecF32x4,
    LtVecF32x4,
    GtVecF32x4,
    LeVecF32x4,
    GeVecF32x4,
    EqVecF64x2,
    NeVecF64x2,
    LtVecF64x2,
    GtVecF64x2,
    LeVecF64x2,
    GeVecF64x2,
    NotVec128,
    AndVec128,
    OrVec128,
    XorVec128,
    AndNotVec128,
    BitselectVec128,
    RelaxedFmaVecF32x4,
    RelaxedFmsVecF32x4,
    RelaxedFmaVecF64x2,
    RelaxedFmsVecF64x2,
    LaneselectI8x16,
    LaneselectI16x8,
    LaneselectI32x4,
    LaneselectI64x2,
    DotI8x16I7x16AddSToVecI32x4,
    AnyTrueVec128,
    PopcntVecI8x16,
    AbsVecI8x16,
    NegVecI8x16,
    AllTrueVecI8x16,
    BitmaskVecI8x16,
    ShlVecI8x16,
    ShrSVecI8x16,
    ShrUVecI8x16,
    AddVecI8x16,
    AddSatSVecI8x16,
    AddSatUVecI8x16,
    SubVecI8x16,
    SubSatSVecI8x16,
    SubSatUVecI8x16,
    MinSVecI8x16,
    MinUVecI8x16,
    MaxSVecI8x16,
    MaxUVecI8x16,
    AvgrUVecI8x16,
    AbsVecI16x8,
    NegVecI16x8,
    AllTrueVecI16x8,
    BitmaskVecI16x8,
    ShlVecI16x8,
    ShrSVecI16x8,
    ShrUVecI16x8,
    AddVecI16x8,
    AddSatSVecI16x8,
    AddSatUVecI16x8,
    SubVecI16x8,
    SubSatSVecI16x8,
    SubSatUVecI16x8,
    MulVecI16x8,
    MinSVecI16x8,
    MinUVecI16x8,
    MaxSVecI16x8,
    MaxUVecI16x8,
    AvgrUVecI16x8,
    Q15MulrSatSVecI16x8,
    ExtMulLowSVecI16x8,
    ExtMulHighSVecI16x8,
    ExtMulLowUVecI16x8,
    ExtMulHighUVecI16x8,
    DotSVecI16x8ToVecI32x4,
    ExtMulLowSVecI32x4,
    ExtMulHighSVecI32x4,
    ExtMulLowUVecI32x4,
    ExtMulHighUVecI32x4,
    AbsVecI32x4,
    NegVecI32x4,
    AllTrueVecI32x4,
    BitmaskVecI32x4,
    ShlVecI32x4,
    ShrSVecI32x4,
    ShrUVecI32x4,
    AddVecI32x4,
    SubVecI32x4,
    MulVecI32x4,
    MinSVecI32x4,
    MinUVecI32x4,
    MaxSVecI32x4,
    MaxUVecI32x4,
    AbsVecI64x2,
    NegVecI64x2,
    AllTrueVecI64x2,
    BitmaskVecI64x2,
    ShlVecI64x2,
    ShrSVecI64x2,
    ShrUVecI64x2,
    AddVecI64x2,
    SubVecI64x2,
    MulVecI64x2,
    ExtMulLowSVecI64x2,
    ExtMulHighSVecI64x2,
    ExtMulLowUVecI64x2,
    ExtMulHighUVecI64x2,
    AbsVecF32x4,
    NegVecF32x4,
    SqrtVecF32x4,
    AddVecF32x4,
    SubVecF32x4,
    MulVecF32x4,
    DivVecF32x4,
    MinVecF32x4,
    MaxVecF32x4,
    PMinVecF32x4,
    PMaxVecF32x4,
    CeilVecF32x4,
    FloorVecF32x4,
    TruncVecF32x4,
    NearestVecF32x4,
    AbsVecF64x2,
    NegVecF64x2,
    SqrtVecF64x2,
    AddVecF64x2,
    SubVecF64x2,
    MulVecF64x2,
    DivVecF64x2,
    MinVecF64x2,
    MaxVecF64x2,
    PMinVecF64x2,
    PMaxVecF64x2,
    CeilVecF64x2,
    FloorVecF64x2,
    TruncVecF64x2,
    NearestVecF64x2,
    ExtAddPairwiseSVecI8x16ToI16x8,
    ExtAddPairwiseUVecI8x16ToI16x8,
    ExtAddPairwiseSVecI16x8ToI32x4,
    ExtAddPairwiseUVecI16x8ToI32x4,
    TruncSatSVecF32x4ToVecI32x4,
    TruncSatUVecF32x4ToVecI32x4,
    ConvertSVecI32x4ToVecF32x4,
    ConvertUVecI32x4ToVecF32x4,
    Load8SplatVec128,
    Load16SplatVec128,
    Load32SplatVec128,
    Load64SplatVec128,
    Load8x8SVec128,
    Load8x8UVec128,
    Load16x4SVec128,
    Load16x4UVec128,
    Load32x2SVec128,
    Load32x2UVec128,
    Load32ZeroVec128,
    Load64ZeroVec128,
    Load8LaneVec128,
    Load16LaneVec128,
    Load32LaneVec128,
    Load64LaneVec128,
    Store8LaneVec128,
    Store16LaneVec128,
    Store32LaneVec128,
    Store64LaneVec128,
    NarrowSVecI16x8ToVecI8x16,
    NarrowUVecI16x8ToVecI8x16,
    NarrowSVecI32x4ToVecI16x8,
    NarrowUVecI32x4ToVecI16x8,
    ExtendLowSVecI8x16ToVecI16x8,
    ExtendHighSVecI8x16ToVecI16x8,
    ExtendLowUVecI8x16ToVecI16x8,
    ExtendHighUVecI8x16ToVecI16x8,
    ExtendLowSVecI16x8ToVecI32x4,
    ExtendHighSVecI16x8ToVecI32x4,
    ExtendLowUVecI16x8ToVecI32x4,
    ExtendHighUVecI16x8ToVecI32x4,
    ExtendLowSVecI32x4ToVecI64x2,
    ExtendHighSVecI32x4ToVecI64x2,
    ExtendLowUVecI32x4ToVecI64x2,
    ExtendHighUVecI32x4ToVecI64x2,
    ConvertLowSVecI32x4ToVecF64x2,
    ConvertLowUVecI32x4ToVecF64x2,
    TruncSatZeroSVecF64x2ToVecI32x4,
    TruncSatZeroUVecF64x2ToVecI32x4,
    DemoteZeroVecF64x2ToVecF32x4,
    PromoteLowVecF32x4ToVecF64x2,
    RelaxedTruncSVecF32x4ToVecI32x4,
    RelaxedTruncUVecF32x4ToVecI32x4,
    RelaxedTruncZeroSVecF64x2ToVecI32x4,
    RelaxedTruncZeroUVecF64x2ToVecI32x4,
    SwizzleVecI8x16,
    RelaxedSwizzleVecI8x16,
    RelaxedMinVecF32x4,
    RelaxedMaxVecF32x4,
    RelaxedMinVecF64x2,
    RelaxedMaxVecF64x2,
    RelaxedQ15MulrSVecI16x8,
    DotI8x16I7x16SToVecI16x8,
    RefAsNonNull,
    RefAsExternInternalize,
    RefAsExternExternalize,
    BrOnNull,
    BrOnNonNull,
    BrOnCast,
    BrOnCastFail
}
export declare enum SideEffects {
    None,
    Branches,
    Calls,
    ReadsLocal,
    WritesLocal,
    ReadsGlobal,
    WritesGlobal,
    ReadsMemory,
    WritesMemory,
    ReadsTable,
    WritesTable,
    ImplicitTrap,
    IsAtomic,
    Throws,
    DanglingPop,
    TrapsNeverHappen,
    Any
}
export declare enum PackedType {
    NotPacked,
    Int8,
    Int16
}
export declare class Function {
    readonly func: FunctionRef;
    constructor(func: FunctionRef);
    getName(): string;
    getParams(): Type;
    getResults(): Type;
    getNumVars(): number;
    getVar(index: number): Type;
    getNumLocals(): number;
    hasLocalName(index: number): boolean;
    getLocalName(index: number): string;
    setLocalName(index: number, name: string): void;
    getBody(): ExpressionRef;
    setBody(bodyExpr: ExpressionRef): void;
    setDebugLocation(expr: ExpressionRef, fileIndex: number, lineNumber: number, columnNumber: number): void;
    getInfo(): FunctionInfo;
}
export interface FunctionInfo {
    name: string;
    module: string | null;
    base: string | null;
    params: Type;
    results: Type;
    vars: Type[];
    body: ExpressionRef;
}
export interface TableInfo {
    name: string;
    module: string | null;
    base: string | null;
    initial: number;
    max?: number;
}
export interface ElementSegmentInfo {
    name: string;
    table: string;
    offset: number;
    data: string[];
}
export interface GlobalInfo {
    name: string;
    module: string | null;
    base: string | null;
    type: Type;
    mutable: boolean;
    init: ExpressionRef;
}
export interface TagInfo {
    name: string;
    module: string | null;
    base: string | null;
    params: Type;
    results: Type;
}
export interface ExportInfo {
    kind: ExternalKinds;
    name: string;
    value: string;
}
export declare class Module {
    static readBinary(data: Uint8Array): Module;
    static parseText(text: string): Module;
    readonly ptr: number;
    constructor(ptr?: number);
    dispose(): void;
    setStart(start: FunctionRef): void;
    setFeatures(...features: Feature[]): void;
    getFeatures(): Set<Feature>;
    addFeature(feature: Feature): void;
    hasFeature(feature: Feature): boolean;
    autoDrop(): void;
    addCustomSection(name: string, contents: Uint8Array): void;
    addDebugInfoFileName(filename: string): number;
    getDebugInfoFileName(index: number): string | null;
    validate(): number;
    optimize(): void;
    optimizeFunction(func: string | FunctionRef): void;
    runPasses(passes: string[]): void;
    runPassesOnFunction(func: string | FunctionRef, passes: string[]): void;
    emitText(): string;
    emitStackIR(optimize?: boolean): string;
    emitAsmjs(): string;
    emitBinary(): Uint8Array;
    emitBinary(sourceMapUrl: string): {
        binary: Uint8Array;
        sourceMap: string;
    };
    interpret(): void;
    block(label: string | null, children: ExpressionRef[], resultType?: Type): ExpressionRef;
    if(condition: ExpressionRef, ifTrue: ExpressionRef, ifFalse?: ExpressionRef): ExpressionRef;
    loop(label: string | null, body: ExpressionRef): ExpressionRef;
    br(label: string, condition?: ExpressionRef, value?: ExpressionRef): ExpressionRef;
    br_if(label: string, condition?: ExpressionRef, value?: ExpressionRef): ExpressionRef;
    switch(labels: string[], defaultLabel: string, condition: ExpressionRef, value?: ExpressionRef): ExpressionRef;
    call(name: string, operands: ExpressionRef[], returnType: Type): ExpressionRef;
    call_indirect(table: string, target: ExpressionRef, operands: ExpressionRef[], params: Type, results: Type): ExpressionRef;
    return_call(name: string, operands: ExpressionRef[], returnType: Type): ExpressionRef;
    return_call_indirect(table: string, target: ExpressionRef, operands: ExpressionRef[], params: Type, results: Type): ExpressionRef;
    select(condition: ExpressionRef, ifTrue: ExpressionRef, ifFalse: ExpressionRef, type?: Type): ExpressionRef;
    drop(value: ExpressionRef): ExpressionRef;
    return(value?: ExpressionRef): ExpressionRef;
    nop(): ExpressionRef;
    unreachable(): ExpressionRef;
    try(name: string, body: ExpressionRef, catchTags: string[], catchBodies: ExpressionRef[], delegateTarget?: string): ExpressionRef;
    throw(tag: string, operands: ExpressionRef[]): ExpressionRef;
    rethrow(target: string): ExpressionRef;
    get i32(): {
        load: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        store: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        store8: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        store16: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        const: (value: number) => ExpressionRef;
        clz: (value: ExpressionRef) => ExpressionRef;
        ctz: (value: ExpressionRef) => ExpressionRef;
        popcnt: (value: ExpressionRef) => ExpressionRef;
        eqz: (value: ExpressionRef) => ExpressionRef;
        trunc_s: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_u: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_s_sat: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_u_sat: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        reinterpret_f32: (value: ExpressionRef) => ExpressionRef;
        extend8_s: (value: ExpressionRef) => ExpressionRef;
        extend16_s: (value: ExpressionRef) => ExpressionRef;
        wrap_i64: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rem_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rem_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        and: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        or: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        xor: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shl: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shr_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shr_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rotl: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rotr: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pop: () => ExpressionRef;
        atomic: {
            load: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            load8_u: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            load16_u: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            store: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            store8: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            store16: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            rmw: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
            rmw8_u: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
            rmw16_u: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
        };
    };
    get i64(): {
        load: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        store: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        store8: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        store16: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        store32: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        const: (low: number, high: number) => ExpressionRef;
        clz: (value: ExpressionRef) => ExpressionRef;
        ctz: (value: ExpressionRef) => ExpressionRef;
        popcnt: (value: ExpressionRef) => ExpressionRef;
        eqz: (value: ExpressionRef) => ExpressionRef;
        trunc_s: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_u: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_s_sat: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        trunc_u_sat: {
            f32: (value: ExpressionRef) => ExpressionRef;
            f64: (value: ExpressionRef) => ExpressionRef;
        };
        reinterpret_f64: (value: ExpressionRef) => ExpressionRef;
        extend8_s: (value: ExpressionRef) => ExpressionRef;
        extend16_s: (value: ExpressionRef) => ExpressionRef;
        extend32_s: (value: ExpressionRef) => ExpressionRef;
        extend_s: (value: ExpressionRef) => ExpressionRef;
        extend_u: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rem_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rem_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        and: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        or: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        xor: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shl: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shr_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        shr_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rotl: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        rotr: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pop: () => ExpressionRef;
        atomic: {
            load: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            load8_u: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            load16_u: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            load32_u: (offset: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
            store: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            store8: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            store16: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            store32: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
            rmw: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
            rmw8_u: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
            rmw16_u: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
            rmw32_u: {
                add: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                sub: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                and: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                or: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xor: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                xchg: (offset: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
                cmpxchg: (offset: number, ptr: ExpressionRef, expected: ExpressionRef, replacement: ExpressionRef, name?: string) => ExpressionRef;
            };
        };
    };
    get f32(): {
        load: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        store: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        const: (value: number) => ExpressionRef;
        const_bits: (value: number) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        ceil: (value: ExpressionRef) => ExpressionRef;
        floor: (value: ExpressionRef) => ExpressionRef;
        trunc: (value: ExpressionRef) => ExpressionRef;
        nearest: (value: ExpressionRef) => ExpressionRef;
        sqrt: (value: ExpressionRef) => ExpressionRef;
        reinterpret_i32: (value: ExpressionRef) => ExpressionRef;
        convert_s: {
            i32: (value: ExpressionRef) => ExpressionRef;
            i64: (value: ExpressionRef) => ExpressionRef;
        };
        convert_u: {
            i32: (value: ExpressionRef) => ExpressionRef;
            i64: (value: ExpressionRef) => ExpressionRef;
        };
        demote_f64: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        copysign: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pop: () => ExpressionRef;
    };
    get f64(): {
        load: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        store: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        const: (value: number) => ExpressionRef;
        const_bits: (value: number) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        ceil: (value: ExpressionRef) => ExpressionRef;
        floor: (value: ExpressionRef) => ExpressionRef;
        trunc: (value: ExpressionRef) => ExpressionRef;
        nearest: (value: ExpressionRef) => ExpressionRef;
        sqrt: (value: ExpressionRef) => ExpressionRef;
        reinterpret_i64: (value: ExpressionRef) => ExpressionRef;
        convert_s: {
            i32: (value: ExpressionRef) => ExpressionRef;
            i64: (value: ExpressionRef) => ExpressionRef;
        };
        convert_u: {
            i32: (value: ExpressionRef) => ExpressionRef;
            i64: (value: ExpressionRef) => ExpressionRef;
        };
        promote_f32: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        copysign: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pop: () => ExpressionRef;
    };
    get v128(): {
        load: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_splat: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16_splat: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32_splat: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load64_splat: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8x8_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8x8_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16x4_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load16x4_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32x2_s: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32x2_u: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load32_zero: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load64_zero: (offset: number, align: number, ptr: ExpressionRef, name?: string) => ExpressionRef;
        load8_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        load16_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        load32_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        load64_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        store8_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        store16_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        store32_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        store64_lane: (offset: number, align: number, index: number, ptr: ExpressionRef, vec: ExpressionRef, name?: string) => ExpressionRef;
        store: (offset: number, align: number, ptr: ExpressionRef, value: ExpressionRef, name?: string) => ExpressionRef;
        const: (i8s: ArrayLike<number>) => ExpressionRef;
        not: (value: ExpressionRef) => ExpressionRef;
        any_true: (value: ExpressionRef) => ExpressionRef;
        and: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        or: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        xor: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        andnot: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        bitselect: (left: ExpressionRef, right: ExpressionRef, cond: ExpressionRef) => ExpressionRef;
        pop: () => ExpressionRef;
    };
    get i8x16(): {
        shuffle: (left: ExpressionRef, right: ExpressionRef, mask: ArrayLike<number>) => ExpressionRef;
        swizzle: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane_s: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        extract_lane_u: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        all_true: (value: ExpressionRef) => ExpressionRef;
        bitmask: (value: ExpressionRef) => ExpressionRef;
        popcnt: (value: ExpressionRef) => ExpressionRef;
        shl: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_s: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_u: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        add_saturate_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        add_saturate_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub_saturate_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub_saturate_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        avgr_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        narrow_i16x8_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        narrow_i16x8_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
    };
    get i16x8(): {
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane_s: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        extract_lane_u: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        all_true: (value: ExpressionRef) => ExpressionRef;
        bitmask: (value: ExpressionRef) => ExpressionRef;
        shl: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_s: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_u: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        add_saturate_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        add_saturate_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub_saturate_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub_saturate_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        q15mulr_sat_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i8x16_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i8x16_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i8x16_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i8x16_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extadd_pairwise_i8x16_s: (value: ExpressionRef) => ExpressionRef;
        extadd_pairwise_i8x16_u: (value: ExpressionRef) => ExpressionRef;
        narrow_i32x4_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        narrow_i32x4_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extend_low_i8x16_s: (value: ExpressionRef) => ExpressionRef;
        extend_high_i8x16_s: (value: ExpressionRef) => ExpressionRef;
        extend_low_i8x16_u: (value: ExpressionRef) => ExpressionRef;
        extend_high_i8x16_u: (value: ExpressionRef) => ExpressionRef;
    };
    get i32x4(): {
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        all_true: (value: ExpressionRef) => ExpressionRef;
        bitmask: (value: ExpressionRef) => ExpressionRef;
        shl: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_s: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_u: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        dot_i16x8_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i16x8_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i16x8_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i16x8_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i16x8_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extadd_pairwise_i16x8_s: (value: ExpressionRef) => ExpressionRef;
        extadd_pairwise_i16x8_u: (value: ExpressionRef) => ExpressionRef;
        trunc_sat_f32x4_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        trunc_sat_f32x4_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extend_low_i16x8_s: (value: ExpressionRef) => ExpressionRef;
        extend_high_i16x8_s: (value: ExpressionRef) => ExpressionRef;
        extend_low_i16x8_u: (value: ExpressionRef) => ExpressionRef;
        extend_high_i16x8_u: (value: ExpressionRef) => ExpressionRef;
        trunc_sat_f64x2_s_zero: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        trunc_sat_f64x2_u_zero: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
    };
    get i64x2(): {
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        all_true: (value: ExpressionRef) => ExpressionRef;
        bitmask: (value: ExpressionRef) => ExpressionRef;
        shl: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_s: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        shr_u: (vec: ExpressionRef, shift: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i32x4_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i32x4_s: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_low_i32x4_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extmul_high_i32x4_u: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        extend_low_i32x4_s: (value: ExpressionRef) => ExpressionRef;
        extend_high_i32x4_s: (value: ExpressionRef) => ExpressionRef;
        extend_low_i32x4_u: (value: ExpressionRef) => ExpressionRef;
        extend_high_i32x4_u: (value: ExpressionRef) => ExpressionRef;
    };
    get f32x4(): {
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        sqrt: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pmin: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pmax: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ceil: (value: ExpressionRef) => ExpressionRef;
        floor: (value: ExpressionRef) => ExpressionRef;
        trunc: (value: ExpressionRef) => ExpressionRef;
        nearest: (value: ExpressionRef) => ExpressionRef;
        convert_i32x4_s: (value: ExpressionRef) => ExpressionRef;
        convert_i32x4_u: (value: ExpressionRef) => ExpressionRef;
        demote_f64x2_zero: (value: ExpressionRef) => ExpressionRef;
    };
    get f64x2(): {
        splat: (value: ExpressionRef) => ExpressionRef;
        extract_lane: (vec: ExpressionRef, index: ExpressionRef) => ExpressionRef;
        replace_lane: (vec: ExpressionRef, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ne: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        lt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        gt: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        le: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ge: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        abs: (value: ExpressionRef) => ExpressionRef;
        neg: (value: ExpressionRef) => ExpressionRef;
        sqrt: (value: ExpressionRef) => ExpressionRef;
        add: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        sub: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        mul: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        div: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        min: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        max: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pmin: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        pmax: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        ceil: (value: ExpressionRef) => ExpressionRef;
        floor: (value: ExpressionRef) => ExpressionRef;
        trunc: (value: ExpressionRef) => ExpressionRef;
        nearest: (value: ExpressionRef) => ExpressionRef;
        convert_low_i32x4_s: (value: ExpressionRef) => ExpressionRef;
        convert_low_i32x4_u: (value: ExpressionRef) => ExpressionRef;
        promote_low_f32x4: (value: ExpressionRef) => ExpressionRef;
    };
    get funcref(): {
        pop: () => ExpressionRef;
    };
    get externref(): {
        pop: () => ExpressionRef;
    };
    get anyref(): {
        pop: () => ExpressionRef;
    };
    get eqref(): {
        pop: () => ExpressionRef;
    };
    get i31ref(): {
        pop: () => ExpressionRef;
    };
    get structref(): {
        pop: () => ExpressionRef;
    };
    get ref(): {
        null: (type: Type) => ExpressionRef;
        is_null: (value: ExpressionRef) => ExpressionRef;
        i31: (value: ExpressionRef) => ExpressionRef;
        func: (name: string, type: Type) => ExpressionRef;
        eq: (left: ExpressionRef, right: ExpressionRef) => ExpressionRef;
        as_non_null: (value: ExpressionRef) => ExpressionRef;
    };
    get i31(): {
        get_s: (i31: ExpressionRef) => ExpressionRef;
        get_u: (i31: ExpressionRef) => ExpressionRef;
    };
    get atomic(): {
        fence: () => ExpressionRef;
    };
    get locals(): {
        get: (index: number, type: Type) => ExpressionRef;
        set: (index: number, value: ExpressionRef) => ExpressionRef;
        tee: (index: number, value: ExpressionRef, type: Type) => ExpressionRef;
    };
    get globals(): {
        add: (name: string, type: Type, mutable: boolean, init: ExpressionRef) => GlobalRef;
        getRefByName: (name: string) => GlobalRef;
        getRefByIndex: (index: number) => GlobalRef;
        remove: (name: string) => void;
        count: () => number;
        set: (name: string, value: ExpressionRef) => ExpressionRef;
        get: (name: string, type: Type) => ExpressionRef;
        addImport: (internalName: string, externalModuleName: string, externalBaseName: string, globalType: Type, mutable: boolean) => void;
        addExport: (internalName: string, externalName: string) => ExportRef;
        getInfo: (ref: GlobalRef) => GlobalInfo;
    };
    get tables(): {
        add: (name: string, initial: number, maximum: number, type: Type) => TableRef;
        getRefByName: (name: string) => TableRef;
        getRefByIndex: (index: number) => TableRef;
        remove: (name: string) => void;
        count: () => number;
        get: (name: string, index: ExpressionRef, type: Type) => ExpressionRef;
        set: (name: string, index: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        size: (name: string) => ExpressionRef;
        grow: (name: string, value: ExpressionRef, delta: ExpressionRef) => ExpressionRef;
        addImport: (internalName: string, externalModuleName: string, externalBaseName: string) => void;
        addExport: (internalName: string, externalName: string) => ExportRef;
        getInfo: (table: TableRef) => TableInfo;
    };
    get tuples(): {
        make: (elements: ExportRef[]) => ExpressionRef;
        extract: (tuple: ExpressionRef, index: number) => ExpressionRef;
    };
    get functions(): {
        add: (name: string, params: Type, results: Type, varTypes: Type[], body: ExpressionRef) => FunctionRef;
        getRefByName: (name: string) => FunctionRef;
        getRefByIndex: (index: number) => FunctionRef;
        remove: (name: string) => void;
        count: () => number;
        addImport: (internalName: string, externalModuleName: string, externalBaseName: string, params: Type, results: Type) => void;
        addExport: (internalName: string, externalName: string) => ExportRef;
    };
    get tags(): {
        add: (name: string, params: Type, results: Type) => TagRef;
        getRefByName: (name: string) => TagRef;
        remove: (name: string) => void;
        addImport: (internalName: string, externalModuleName: string, externalBaseName: string, params: Type, results: Type) => void;
        addExport: (internalName: string, externalName: string) => ExportRef;
        getInfo: (tag: TagRef) => TagInfo;
    };
    get memory(): {
        init: (segment: string, dest: ExpressionRef, offset: ExpressionRef, size: ExpressionRef, name?: string) => ExpressionRef;
        has: () => boolean;
        size: (name?: string, memory64?: boolean) => ExpressionRef;
        grow: (value: ExpressionRef, name?: string, memory64?: boolean) => ExpressionRef;
        copy: (dest: ExpressionRef, source: ExpressionRef, size: ExpressionRef, destName?: string, sourceName?: string) => ExpressionRef;
        fill: (dest: ExpressionRef, value: ExpressionRef, size: ExpressionRef, name?: string) => ExpressionRef;
        set: (initial: number, maximum: number, exportName?: string | null, segments?: SegmentInfo[] | null, shared?: boolean, memory64?: boolean, internalName?: string) => void;
        getInfo: (name?: string) => MemoryInfo;
        countSegments: () => number;
        getSegmentInfoByIndex: (index: number) => SegmentInfo;
        countElementSegments: () => number;
        getElementSegmentByIndex: (index: number) => ElementSegmentRef;
        getElementSegmentInfo: (segment: ElementSegmentRef) => ElementSegmentInfo;
        addImport: (internalName: string, externalModuleName: string, externalBaseName: string, shared: boolean) => void;
        addExport: (internalName: string, externalName: string) => ExportRef;
        atomic: {
            notify: (ptr: ExpressionRef, notifyCount: ExpressionRef, name?: string) => ExpressionRef;
            wait32: (ptr: ExpressionRef, expected: ExpressionRef, timeout: ExpressionRef, name?: string) => ExpressionRef;
            wait64: (ptr: ExpressionRef, expected: ExpressionRef, timeout: ExpressionRef, name?: string) => ExpressionRef;
        };
    };
    get data(): {
        drop: (segment: string) => ExpressionRef;
    };
    get exports(): {
        getRefByName: (externalName: string) => ExportRef;
        getRefByIndex: (index: number) => ExportRef;
        remove: (externalName: string) => void;
        count: () => number;
        getInfo: (export_: ExportRef) => ExportInfo;
    };
    get expressions(): {
        copy: (expr: ExpressionRef) => ExpressionRef;
        getType: (expression: ExpressionRef) => Type;
        getInfo: (expression: ExpressionRef) => ExpressionInfo;
        getSideEffects: (expression: ExpressionRef) => SideEffects;
        emitText: (expression: ExpressionRef) => string;
    };
    get arrays(): {
        newFromInit: (heapType: HeapType, size: ExpressionRef, init: ExpressionRef) => ExpressionRef;
        newFromData: (heapType: HeapType, name: string, offset: ExpressionRef, size: ExpressionRef) => ExpressionRef;
        newFromItems: (heapType: HeapType, values: ExpressionRef[]) => ExpressionRef;
        copy: (destArray: ExpressionRef, destItem: ExpressionRef, srcArray: ExpressionRef, srcItem: ExpressionRef, numItems: ExpressionRef) => ExpressionRef;
        getItem: (array: ExpressionRef, item: ExpressionRef, type: Type, signed: boolean) => ExpressionRef;
        setItem: (array: ExpressionRef, item: ExpressionRef, value: ExpressionRef) => ExpressionRef;
        length: (array: ExpressionRef) => ExpressionRef;
    };
    get structs(): {
        newFromFields: (heapType: HeapType, values: ExpressionRef[]) => ExpressionRef;
        getMember: (struct: ExpressionRef, memberIndex: number, resultType: Type, signed: boolean) => any;
        setMember: (struct: ExpressionRef, memberIndex: number, value: ExpressionRef) => any;
    };
}
export declare class Relooper {
    readonly ref: RelooperBlockRef;
    constructor(module: Module, ref?: RelooperBlockRef);
    addBlock(code: ExpressionRef): RelooperBlockRef;
    addBranch(from: RelooperBlockRef, to: RelooperBlockRef, condition: ExpressionRef, code: ExpressionRef): void;
    addBlockWithSwitch(code: ExpressionRef, condition: ExpressionRef): RelooperBlockRef;
    addBranchForSwitch(from: RelooperBlockRef, to: RelooperBlockRef, indexes: number[], code: ExpressionRef): void;
    renderAndDispose(entry: RelooperBlockRef, labelHelper: number): ExpressionRef;
}
export declare enum ExpressionRunnerFlags {
    Default,
    PreserveSideEffects,
    TraverseCalls
}
export declare class ExpressionRunner {
    readonly ref: ExpressionRunnerRef;
    constructor(module: Module, flags: ExpressionRunnerFlags, maxDepth: number, maxLoopIterations: number);
    setLocalValue(index: number, valueExpr: ExpressionRef): boolean;
    setGlobalValue(name: string, valueExpr: ExpressionRef): boolean;
    runAndDispose(expr: ExpressionRef): ExpressionRef;
}
export interface TypeBuilderResult {
    heapTypes: HeapType[];
    errorIndex: number | null;
    errorReason: number | null;
}
export interface FieldType {
    type: Type;
    packedType: PackedType;
    mutable: boolean;
}
export declare class TypeBuilder {
    static typeFromTempHeapType(heapType: HeapType, nullable: boolean): Type;
    static heapTypeFromType(type: Type): HeapType;
    static arrayElementType(heapType: HeapType): Type;
    static structMemberCount(heapType: HeapType): number;
    static structMemberType(heapType: HeapType, index: number): Type;
    readonly ref: TypeBuilderRef;
    constructor(slots: number);
    setArrayType(slot: number, elementType: FieldType): TypeBuilder;
    setStructType(slot: number, fieldTypes: FieldType[]): TypeBuilder;
    getTempHeapType(slot: number): HeapType;
    buildAndDispose(): TypeBuilderResult;
}
export interface SegmentInfo {
    offset: ExpressionRef;
    data: Uint8Array;
    passive?: boolean;
}
export interface MemoryInfo {
    module: string | null;
    base: string | null;
    shared: boolean;
    is64: boolean;
    initial: number;
    max?: number;
}
export interface ExpressionInfo {
    id: number;
    type: Type;
}
export interface BlockInfo extends ExpressionInfo {
    name: string;
    children: ExpressionRef[];
}
export interface IfInfo extends ExpressionInfo {
    condition: ExpressionRef;
    ifTrue: ExpressionRef;
    ifFalse: ExpressionRef;
}
export interface LoopInfo extends ExpressionInfo {
    name: string;
    body: ExpressionRef;
}
export interface BreakInfo extends ExpressionInfo {
    name: string;
    condition: ExpressionRef;
    value: ExpressionRef;
}
export interface SwitchInfo extends ExpressionInfo {
    names: string[];
    defaultName: string | null;
    condition: ExpressionRef;
    value: ExpressionRef;
}
export interface CallInfo extends ExpressionInfo {
    isReturn: boolean;
    target: string;
    operands: ExpressionRef[];
}
export interface CallIndirectInfo extends ExpressionInfo {
    isReturn: boolean;
    target: ExpressionRef;
    operands: ExpressionRef[];
}
export interface LocalGetInfo extends ExpressionInfo {
    index: number;
}
export interface LocalSetInfo extends ExpressionInfo {
    isTee: boolean;
    index: number;
    value: ExpressionRef;
}
export interface GlobalGetInfo extends ExpressionInfo {
    name: string;
}
export interface GlobalSetInfo extends ExpressionInfo {
    name: string;
    value: ExpressionRef;
}
export interface TableGetInfo extends ExpressionInfo {
    table: string;
    index: ExpressionRef;
}
export interface TableSetInfo extends ExpressionInfo {
    table: string;
    index: ExpressionRef;
    value: ExpressionRef;
}
export interface TableSizeInfo extends ExpressionInfo {
    table: string;
}
export interface TableGrowInfo extends ExpressionInfo {
    table: string;
    value: ExpressionRef;
    delta: ExpressionRef;
}
export interface LoadInfo extends ExpressionInfo {
    isAtomic: boolean;
    isSigned: boolean;
    offset: number;
    bytes: number;
    align: number;
    ptr: ExpressionRef;
}
export interface StoreInfo extends ExpressionInfo {
    isAtomic: boolean;
    offset: number;
    bytes: number;
    align: number;
    ptr: ExpressionRef;
    value: ExpressionRef;
}
export interface ConstInfo extends ExpressionInfo {
    value: number | {
        low: number;
        high: number;
    } | Array<number>;
}
export interface UnaryInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
}
export interface BinaryInfo extends ExpressionInfo {
    op: Operations;
    left: ExpressionRef;
    right: ExpressionRef;
}
export interface SelectInfo extends ExpressionInfo {
    ifTrue: ExpressionRef;
    ifFalse: ExpressionRef;
    condition: ExpressionRef;
}
export interface DropInfo extends ExpressionInfo {
    value: ExpressionRef;
}
export interface ReturnInfo extends ExpressionInfo {
    value: ExpressionRef;
}
export interface NopInfo extends ExpressionInfo {
}
export interface UnreachableInfo extends ExpressionInfo {
}
export interface PopInfo extends ExpressionInfo {
}
export interface MemorySizeInfo extends ExpressionInfo {
}
export interface MemoryGrowInfo extends ExpressionInfo {
    delta: ExpressionRef;
}
export interface AtomicRMWInfo extends ExpressionInfo {
    op: Operations;
    bytes: number;
    offset: number;
    ptr: ExpressionRef;
    value: ExpressionRef;
}
export interface AtomicCmpxchgInfo extends ExpressionInfo {
    bytes: number;
    offset: number;
    ptr: ExpressionRef;
    expected: ExpressionRef;
    replacement: ExpressionRef;
}
export interface AtomicWaitInfo extends ExpressionInfo {
    ptr: ExpressionRef;
    expected: ExpressionRef;
    timeout: ExpressionRef;
    expectedType: Type;
}
export interface AtomicNotifyInfo extends ExpressionInfo {
    ptr: ExpressionRef;
    notifyCount: ExpressionRef;
}
export interface AtomicFenceInfo extends ExpressionInfo {
    order: number;
}
export interface SIMDExtractInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    index: ExpressionRef;
}
export interface SIMDReplaceInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    index: ExpressionRef;
    value: ExpressionRef;
}
export interface SIMDShuffleInfo extends ExpressionInfo {
    left: ExpressionRef;
    right: ExpressionRef;
    mask: number[];
}
export interface SIMDTernaryInfo extends ExpressionInfo {
    op: Operations;
    a: ExpressionRef;
    b: ExpressionRef;
    c: ExpressionRef;
}
export interface SIMDShiftInfo extends ExpressionInfo {
    op: Operations;
    vec: ExpressionRef;
    shift: ExpressionRef;
}
export interface SIMDLoadInfo extends ExpressionInfo {
    op: Operations;
    offset: number;
    align: number;
    ptr: ExpressionRef;
}
export interface SIMDLoadStoreLaneInfo extends ExpressionInfo {
    op: Operations;
    offset: number;
    align: number;
    index: number;
    ptr: ExpressionRef;
    vec: ExpressionRef;
}
export interface MemoryInitInfo extends ExpressionInfo {
    segment: string;
    dest: ExpressionRef;
    offset: ExpressionRef;
    size: ExpressionRef;
}
export interface DataDropInfo extends ExpressionInfo {
    segment: string;
}
export interface MemoryCopyInfo extends ExpressionInfo {
    dest: ExpressionRef;
    source: ExpressionRef;
    size: ExpressionRef;
}
export interface MemoryFillInfo extends ExpressionInfo {
    dest: ExpressionRef;
    value: ExpressionRef;
    size: ExpressionRef;
}
export interface RefNullInfo extends ExpressionInfo {
}
export interface RefIsNullInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
}
export interface RefAsInfo extends ExpressionInfo {
    op: Operations;
    value: ExpressionRef;
}
export interface RefFuncInfo extends ExpressionInfo {
    func: string;
}
export interface RefEqInfo extends ExpressionInfo {
    left: ExpressionRef;
    right: ExpressionRef;
}
export interface TryInfo extends ExpressionInfo {
    name: string;
    body: ExpressionRef;
    catchTags: string[];
    catchBodies: ExpressionRef[];
    hasCatchAll: boolean;
    delegateTarget: string;
    isDelegate: boolean;
}
export interface ThrowInfo extends ExpressionInfo {
    tag: string;
    operands: ExpressionRef[];
}
export interface RethrowInfo extends ExpressionInfo {
    target: string;
}
export interface TupleMakeInfo extends ExpressionInfo {
    operands: ExpressionRef[];
}
export interface TupleExtractInfo extends ExpressionInfo {
    tuple: ExpressionRef;
    index: number;
}
export interface RefI31Info extends ExpressionInfo {
    value: ExpressionRef;
}
export interface I31GetInfo extends ExpressionInfo {
    i31: ExpressionRef;
    isSigned: boolean;
}
//# sourceMappingURL=binaryen_wasm.d.ts.map