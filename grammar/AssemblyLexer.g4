lexer grammar AssemblyLexer;

// see https://webassembly.github.io/spec/core/appendix/index-instructions.html
UNREACHABLE: 'unreachable';
NOP: 'nop';
BLOCK: 'block';
LOOP: 'loop';
IF: 'if';
ELSE: 'else';
END: 'end';
BR: 'br';
BR_IF: 'br_if';
BR_TABLE: 'br_table';
RETURN: 'return';
CALL: 'call';
CALL_INDIRECT: 'call_indirect';
RETURN_CALL: 'return_call';
RETURN_CALL_INDIRECT: 'return_call_indirect';
CALL_REF: 'call_ref';
RETURN_CALL_REF: 'return_call_ref';
DROP: 'drop';
SELECT: 'select';
LOCAL_GET: 'local.get';
LOCAL_SET: 'local.set';
LOCAL_TEE: 'local.tee';
GLOBAL_GET: 'global.get';
GLOBAL_SET: 'global.set';
TABLE_GET: 'table.get';
TABLE_SET: 'table.set';
I32_LOAD: 'i32.load';
I64_LOAD: 'i64.load';
F32_LOAD: 'f32.load';
F64_LOAD: 'f64.load';
I32_LOAD8_S: 'i32.load8_s';
I32_LOAD8_U: 'i32.load8_u';
I32_LOAD16_S: 'i32.load16_s';
I32_LOAD16_U: 'i32.load16_u';
I64_LOAD8_S: 'i64.load8_s';
I64_LOAD8_U: 'i64.load8_u';
I64_LOAD16_S: 'i64.load16_s';
I64_LOAD16_U: 'i64.load16_u';
I64_LOAD32_S: 'i64.load32_s';
I64_LOAD32_U: 'i64.load32_u';
I32_STORE: 'i32.store';
I64_STORE: 'i64.store';
F32_STORE: 'f32.store';
F64_STORE: 'f64.store';
I32_STORE8: 'i32.store8';
I32_STORE16: 'i32.store16';
I64_STORE8: 'i64.store8';
I64_STORE16: 'i64.store16';
I64_STORE32: 'i64.store32';
MEMORY_SIZE: 'memory.size';
MEMORY_GROW: 'memory.grow';
I32_CONST: 'i32.const';
I64_CONST: 'i64.const';
F32_CONST: 'f32.const';
F64_CONST: 'f64.const';
I32_EQZ: 'i32.eqz';
I32_EQ: 'i32.eq';
I32_NE: 'i32.ne';
I32_LT_S: 'i32.lt_s';
I32_LT_U: 'i32.lt_u';
I32_GT_S: 'i32.gt_s';
I32_GT_U: 'i32.gt_u';
I32_LE_S: 'i32.le_s';
I32_LE_U: 'i32.le_u';
I32_GE_S: 'i32.ge_s';
I32_GE_U: 'i32.ge_u';
I64_EQZ: 'i64.eqz';
I64_EQ: 'i64.eq';
I64_NE: 'i64.ne';
I64_LT_S: 'i64.lt_s';
I64_LT_U: 'i64.lt_u';
I64_GT_S: 'i64.gt_s';
I64_GT_U: 'i64.gt_u';
I64_LE_S: 'i64.le_s';
I64_LE_U: 'i64.le_u';
I64_GE_S: 'i64.ge_s';
I64_GE_U: 'i64.ge_u';
F32_EQ: 'f32.eq';
F32_NE: 'f32.ne';
F32_LT: 'f32.lt';
F32_GT: 'f32.gt';
F32_LE: 'f32.le';
F32_GE: 'f32.ge';
F64_EQ: 'f64.eq';
F64_NE: 'f64.ne';
F64_LT: 'f64.lt';
F64_GT: 'f64.gt';
F64_LE: 'f64.le';
F64_GE: 'f64.ge';
I32_CLZ: 'i32.clz';
I32_CTZ: 'i32.ctz';
I32_POPCNT: 'i32.popcnt';
I32_ADD: 'i32.add';
I32_SUB: 'i32.sub';
I32_MUL: 'i32.mul';
I32_DIV_S: 'i32.div_s';
I32_DIV_U: 'i32.div_u';
I32_REM_S: 'i32.rem_s';
I32_REM_U: 'i32.rem_u';
I32_AND: 'i32.and';
I32_OR: 'i32.or';
I32_XOR: 'i32.xor';
I32_SHL: 'i32.shl';
I32_SHR_S: 'i32.shr_s';
I32_SHR_U: 'i32.shr_u';
I32_ROTL: 'i32.rotl';
I32_ROTR: 'i32.rotr';
I64_CLZ: 'i64.clz';
I64_CTZ: 'i64.ctz';
I64_POPCNT: 'i64.popcnt';
I64_ADD: 'i64.add';
I64_SUB: 'i64.sub';
I64_MUL: 'i64.mul';
I64_DIV_S: 'i64.div_s';
I64_DIV_U: 'i64.div_u';
I64_REM_S: 'i64.rem_s';
I64_REM_U: 'i64.rem_u';
I64_AND: 'i64.and';
I64_OR: 'i64.or';
I64_XOR: 'i64.xor';
I64_SHL: 'i64.shl';
I64_SHR_S: 'i64.shr_s';
I64_SHR_U: 'i64.shr_u';
I64_ROTL: 'i64.rotl';
I64_ROTR: 'i64.rotr';
F32_ABS: 'f32.abs';
F32_NEG: 'f32.neg';
F32_CEIL: 'f32.ceil';
F32_FLOOR: 'f32.floor';
F32_TRUNC: 'f32.trunc';
F32_NEAREST: 'f32.nearest';
F32_SQRT: 'f32.sqrt';
F32_ADD: 'f32.add';
F32_SUB: 'f32.sub';
F32_MUL: 'f32.mul';
F32_DIV: 'f32.div';
F32_MIN: 'f32.min';
F32_MAX: 'f32.max';
F32_COPYSIGN: 'f32.copysign';
F64_ABS: 'f64.abs';
F64_NEG: 'f64.neg';
F64_CEIL: 'f64.ceil';
F64_FLOOR: 'f64.floor';
F64_TRUNC: 'f64.trunc';
F64_NEAREST: 'f64.nearest';
F64_SQRT: 'f64.sqrt';
F64_ADD: 'f64.add';
F64_SUB: 'f64.sub';
F64_MUL: 'f64.mul';
F64_DIV: 'f64.div';
F64_MIN: 'f64.min';
F64_MAX: 'f64.max';
F64_COPYSIGN: 'f64.copysign';
I32_WRAP_I64: 'i32.wrap_i64';
I32_TRUNC_F32_S: 'i32.trunc_f32_s';
I32_TRUNC_F32_U: 'i32.trunc_f32_u';
I32_TRUNC_F64_S: 'i32.trunc_f64_s';
I32_TRUNC_F64_U: 'i32.trunc_f64_u';
I64_EXTEND_I32_S: 'i64.extend_i32_s';
I64_EXTEND_I32_U: 'i64.extend_i32_u';
I64_TRUNC_F32_S: 'i64.trunc_f32_s';
I64_TRUNC_F32_U: 'i64.trunc_f32_u';
I64_TRUNC_F64_S: 'i64.trunc_f64_s';
I64_TRUNC_F64_U: 'i64.trunc_f64_u';
F32_CONVERT_I32_S: 'f32.convert_i32_s';
F32_CONVERT_I32_U: 'f32.convert_i32_u';
F32_CONVERT_I64_S: 'f32.convert_i64_s';
F32_CONVERT_I64_U: 'f32.convert_i64_u';
F32_DEMOTE_F64: 'f32.demote_f64';
F64_CONVERT_I32_S: 'f64.convert_i32_s';
F64_CONVERT_I32_U: 'f64.convert_i32_u';
F64_CONVERT_I64_S: 'f64.convert_i64_s';
F64_CONVERT_I64_U: 'f64.convert_i64_u';
F64_PROMOTE_F32: 'f64.promote_f32';
I32_REINTERPRET_F32: 'i32.reinterpret_f32';
I64_REINTERPRET_F64: 'i64.reinterpret_f64';
F32_REINTERPRET_I32: 'f32.reinterpret_i32';
F64_REINTERPRET_I64: 'f64.reinterpret_i64';
I32_EXTEND8_S: 'i32.extend8_s';
I32_EXTEND16_S: 'i32.extend16_s';
I64_EXTEND8_S: 'i64.extend8_s';
I64_EXTEND16_S: 'i64.extend16_s';
I64_EXTEND32_S: 'i64.extend32_s';
REF_NULL: 'ref.null';
REF_IS_NULL: 'ref.is_null';
REF_FUNC: 'ref.func';
REF_EQ: 'ref.eq';
REF_AS_NON_NULL: 'ref.as_non_null';
BR_ON_NULL: 'br_on_null';
BR_ON_NON_NULL: 'br_on_non_null';
STRUCT_NEW: 'struct.new';
STRUCT_NEW_DEFAULT: 'struct.new_default';
STRUCT_GET: 'struct.get';
STRUCT_GETS: 'struct.gets';
STRUCT_GETU: 'struct.getu';
STRUCT_SET: 'struct.set';
ARRAY_NEW: 'array.new';
ARRAY_NEWDEFAULT: 'array.newdefault';
ARRAY_NEW_FIXED: 'array.new_fixed';
ARRAY_NEW_DATA: 'array.new_data';
ARRAY_NEW_ELEM: 'array.new_elem';
ARRAY_GET: 'array.get';
ARRAY_GETS: 'array.gets';
ARRAY_GETU: 'array.getu';
ARRAY_SET: 'array.set';
ARRAY_LEN: 'array.len';
ARRAY_FILL: 'array.fill';
ARRAY_COPY: 'array.copy';
ARRAY_INIT_DATA: 'array.init_data';
ARRAY_INIT_ELEM: 'array.init_elem';
REF_TEST: 'ref.test';
REFCAST_NULL: 'ref.cast';
BR_ON_CAST: 'br_on_cast';
BR_ON_CAST_FAIL: 'br_on_cast_fail';
ANY_CONVERT_EXTERN: 'any.convert_extern';
EXTERN_CONVERT_ANY: 'extern.convert_any';
REF_I31: 'ref.i31';
I31GETS: 'i31gets';
I31GETU: 'i31getu';
I32_TRUNC_SAT_F32_S: 'i32.trunc_sat_f32_s';
I32_TRUNC_SAT_F32_U: 'i32.trunc_sat_f32_u';
I32_TRUNC_SAT_F64_S: 'i32.trunc_sat_f64_s';
I32_TRUNC_SAT_F64_U: 'i32.trunc_sat_f64_u';
I64_TRUNC_SAT_F32_S: 'i64.trunc_sat_f32_s';
I64_TRUNC_SAT_F32_U: 'i64.trunc_sat_f32_u';
I64_TRUNC_SAT_F64_S: 'i64.trunc_sat_f64_s';
I64_TRUNC_SAT_F64_U: 'i64.trunc_sat_f64_u';
MEMORY_INIT: 'memory.init';
DATA_DROP: 'data.drop';
MEMORY_COPY: 'memory.copy';
MEMORY_FILL: 'memory.fill';
TABLE_INIT: 'table.init';
ELEM_DROP: 'elem.drop';
TABLE_COPY: 'table.copy';
TABLE_GROW: 'table.grow';
TABLE_SIZE: 'table.size';
TABLE_FILL: 'table.fill';
V128_LOAD: 'v128.load';
V128_LOAD8X8_S: 'v128.load8x8_s';
V128_LOAD8X8_U: 'v128.load8x8_u';
V128_LOAD16X4_S: 'v128.load16x4_s';
V128_LOAD16X4_U: 'v128.load16x4_u';
V128_LOAD32X2_S: 'v128.load32x2_s';
V128_LOAD32X2_U: 'v128.load32x2_u';
V128_LOAD8_SPLAT: 'v128.load8_splat';
V128_LOAD16_SPLAT: 'v128.load16_splat';
V128_LOAD32_SPLAT: 'v128.load32_splat';
V128_LOAD64_SPLAT: 'v128.load64_splat';
V128_STORE: 'v128.store';
V128_CONST: 'v128.const';
I8X16_SHUFFLE: 'i8x16.shuffle';
I8X16_SWIZZLE: 'i8x16.swizzle';
I8X16_SPLAT: 'i8x16.splat';
I16X8_SPLAT: 'i16x8.splat';
I32X4_SPLAT: 'i32x4.splat';
I64X2_SPLAT: 'i64x2.splat';
F32X4_SPLAT: 'f32x4.splat';
F64X2_SPLAT: 'f64x2.splat';
I8X16_EXTRACT_LANE_S: 'i8x16.extract_lane_s';
I8X16_EXTRACT_LANE_U: 'i8x16.extract_lane_u';
I8X16_REPLACE_LANE: 'i8x16.replace_lane';
I16X8_EXTRACT_LANE_S: 'i16x8.extract_lane_s';
I16X8_EXTRACT_LANE_U: 'i16x8.extract_lane_u';
I16X8_REPLACE_LANE: 'i16x8.replace_lane';
I32X4_EXTRACT_LANE: 'i32x4.extract_lane';
I32X4_REPLACE_LANE: 'i32x4.replace_lane';
I64X2_EXTRACT_LANE: 'i64x2.extract_lane';
I64X2_REPLACE_LANE: 'i64x2.replace_lane';
F32X4_EXTRACT_LANE: 'f32x4.extract_lane';
F32X4_REPLACE_LANE: 'f32x4.replace_lane';
F64X2_EXTRACT_LANE: 'f64x2.extract_lane';
F64X2_REPLACE_LANE: 'f64x2.replace_lane';
I8X16_EQ: 'i8x16.eq';
I8X16_NE: 'i8x16.ne';
I8X16_LT_S: 'i8x16.lt_s';
I8X16_LT_U: 'i8x16.lt_u';
I8X16_GT_S: 'i8x16.gt_s';
I8X16_GT_U: 'i8x16.gt_u';
I8X16_LE_S: 'i8x16.le_s';
I8X16_LE_U: 'i8x16.le_u';
I8X16_GE_S: 'i8x16.ge_s';
I8X16_GE_U: 'i8x16.ge_u';
I16X8_EQ: 'i16x8.eq';
I16X8_NE: 'i16x8.ne';
I16X8_LT_S: 'i16x8.lt_s';
I16X8_LT_U: 'i16x8.lt_u';
I16X8_GT_S: 'i16x8.gt_s';
I16X8_GT_U: 'i16x8.gt_u';
I16X8_LE_S: 'i16x8.le_s';
I16X8_LE_U: 'i16x8.le_u';
I16X8_GE_S: 'i16x8.ge_s';
I16X8_GE_U: 'i16x8.ge_u';
I32X4_EQ: 'i32x4.eq';
I32X4_NE: 'i32x4.ne';
I32X4_LT_S: 'i32x4.lt_s';
I32X4_LT_U: 'i32x4.lt_u';
I32X4_GT_S: 'i32x4.gt_s';
I32X4_GT_U: 'i32x4.gt_u';
I32X4_LE_S: 'i32x4.le_s';
I32X4_LE_U: 'i32x4.le_u';
I32X4_GE_S: 'i32x4.ge_s';
I32X4_GE_U: 'i32x4.ge_u';
F32X4_EQ: 'f32x4.eq';
F32X4_NE: 'f32x4.ne';
F32X4_LT: 'f32x4.lt';
F32X4_GT: 'f32x4.gt';
F32X4_LE: 'f32x4.le';
F32X4_GE: 'f32x4.ge';
F64X2_EQ: 'f64x2.eq';
F64X2_NE: 'f64x2.ne';
F64X2_LT: 'f64x2.lt';
F64X2_GT: 'f64x2.gt';
F64X2_LE: 'f64x2.le';
F64X2_GE: 'f64x2.ge';
V128_NOT: 'v128.not';
V128_AND: 'v128.and';
V128_ANDNOT: 'v128.andnot';
V128_OR: 'v128.or';
V128_XOR: 'v128.xor';
V128_BITSELECT: 'v128.bitselect';
V128_ANY_TRUE: 'v128.any_true';
V128_LOAD8_LANE: 'v128.load8_lane';
V128_LOAD16_LANE: 'v128.load16_lane';
V128_LOAD32_LANE: 'v128.load32_lane';
V128_LOAD64_LANE: 'v128.load64_lane';
V128_STORE8_LANE: 'v128.store8_lane';
V128_STORE16_LANE: 'v128.store16_lane';
V128_STORE32_LANE: 'v128.store32_lane';
V128_STORE64_LANE: 'v128.store64_lane';
V128_LOAD32_ZERO: 'v128.load32_zero';
V128_LOAD64_ZERO: 'v128.load64_zero';
F32X4_DEMOTE_F64X2_ZERO: 'f32x4.demote_f64x2_zero';
F64X2_PROMOTE_LOW_F32X4: 'f64x2.promote_low_f32x4';
I8X16_ABS: 'i8x16.abs';
I8X16_NEG: 'i8x16.neg';
I8X16_POPCNT: 'i8x16.popcnt';
I8X16_ALL_TRUE: 'i8x16.all_true';
I8X16_BITMASK: 'i8x16.bitmask';
I8X16_NARROW_I16X8_S: 'i8x16.narrow_i16x8_s';
I8X16_NARROW_I16X8_U: 'i8x16.narrow_i16x8_u';
F32X4_CEIL: 'f32x4.ceil';
F32X4_FLOOR: 'f32x4.floor';
F32X4_TRUNC: 'f32x4.trunc';
F32X4_NEAREST: 'f32x4.nearest';
I8X16_SHL: 'i8x16.shl';
I8X16_SHR_S: 'i8x16.shr_s';
I8X16_SHR_U: 'i8x16.shr_u';
I8X16_ADD: 'i8x16.add';
I8X16_ADD_SAT_S: 'i8x16.add_sat_s';
I8X16_ADD_SAT_U: 'i8x16.add_sat_u';
I8X16_SUB: 'i8x16.sub';
I8X16_SUB_SAT_S: 'i8x16.sub_sat_s';
I8X16_SUB_SAT_U: 'i8x16.sub_sat_u';
F64X2_CEIL: 'f64x2.ceil';
F64X2_FLOOR: 'f64x2.floor';
I8X16_MIN_S: 'i8x16.min_s';
I8X16_MIN_U: 'i8x16.min_u';
I8X16_MAX_S: 'i8x16.max_s';
I8X16_MAX_U: 'i8x16.max_u';
F64X2_TRUNC: 'f64x2.trunc';
I8X16_AVGR_U: 'i8x16.avgr_u';
I16X8_EXTADD_PAIRWISE_I8X16_S: 'i16x8.extadd_pairwise_i8x16_s';
I16X8_EXTADD_PAIRWISE_I8X16_U: 'i16x8.extadd_pairwise_i8x16_u';
I32X4_EXTADD_PAIRWISE_I16X8_S: 'i32x4.extadd_pairwise_i16x8_s';
I32X4_EXTADD_PAIRWISE_I16X8_U: 'i32x4.extadd_pairwise_i16x8_u';
I16X8_ABS: 'i16x8.abs';
I16X8_NEG: 'i16x8.neg';
I16X8_Q15MULR_SAT_S: 'i16x8.q15mulr_sat_s';
I16X8_ALL_TRUE: 'i16x8.all_true';
I16X8_BITMASK: 'i16x8.bitmask';
I16X8_NARROW_I32X4_S: 'i16x8.narrow_i32x4_s';
I16X8_NARROW_I32X4_U: 'i16x8.narrow_i32x4_u';
I16X8_EXTEND_LOW_I8X16_S: 'i16x8.extend_low_i8x16_s';
I16X8_EXTEND_HIGH_I8X16_S: 'i16x8.extend_high_i8x16_s';
I16X8_EXTEND_LOW_I8X16_U: 'i16x8.extend_low_i8x16_u';
I16X8_EXTEND_HIGH_I8X16_U: 'i16x8.extend_high_i8x16_u';
I16X8_SHL: 'i16x8.shl';
I16X8_SHR_S: 'i16x8.shr_s';
I16X8_SHR_U: 'i16x8.shr_u';
I16X8_ADD: 'i16x8.add';
I16X8_ADD_SAT_S: 'i16x8.add_sat_s';
I16X8_ADD_SAT_U: 'i16x8.add_sat_u';
I16X8_SUB: 'i16x8.sub';
I16X8_SUB_SAT_S: 'i16x8.sub_sat_s';
I16X8_SUB_SAT_U: 'i16x8.sub_sat_u';
F64X2_NEAREST: 'f64x2.nearest';
I16X8_MUL: 'i16x8.mul';
I16X8_MIN_S: 'i16x8.min_s';
I16X8_MIN_U: 'i16x8.min_u';
I16X8_MAX_S: 'i16x8.max_s';
I16X8_MAX_U: 'i16x8.max_u';
I16X8_AVGR_U: 'i16x8.avgr_u';
I16X8_EXTMUL_LOW_I8X16_S: 'i16x8.extmul_low_i8x16_s';
I16X8_EXTMUL_HIGH_I8X16_S: 'i16x8.extmul_high_i8x16_s';
I16X8_EXTMUL_LOW_I8X16_U: 'i16x8.extmul_low_i8x16_u';
I16X8_EXTMUL_HIGH_I8X16_U: 'i16x8.extmul_high_i8x16_u';
I32X4_ABS: 'i32x4.abs';
I32X4_NEG: 'i32x4.neg';
I32X4_ALL_TRUE: 'i32x4.all_true';
I32X4_BITMASK: 'i32x4.bitmask';
I32X4_EXTEND_LOW_I16X8_S: 'i32x4.extend_low_i16x8_s';
I32X4_EXTEND_HIGH_I16X8_S: 'i32x4.extend_high_i16x8_s';
I32X4_EXTEND_LOW_I16X8_U: 'i32x4.extend_low_i16x8_u';
I32X4_EXTEND_HIGH_I16X8_U: 'i32x4.extend_high_i16x8_u';
I32X4_SHL: 'i32x4.shl';
I32X4_SHR_S: 'i32x4.shr_s';
I32X4_SHR_U: 'i32x4.shr_u';
I32X4_ADD: 'i32x4.add';
I32X4_SUB: 'i32x4.sub';
I32X4_MUL: 'i32x4.mul';
I32X4_MIN_S: 'i32x4.min_s';
I32X4_MIN_U: 'i32x4.min_u';
I32X4_MAX_S: 'i32x4.max_s';
I32X4_MAX_U: 'i32x4.max_u';
I32X4_DOT_I16X8_S: 'i32x4.dot_i16x8_s';
I32X4_EXTMUL_LOW_I16X8_S: 'i32x4.extmul_low_i16x8_s';
I32X4_EXTMUL_HIGH_I16X8_S: 'i32x4.extmul_high_i16x8_s';
I32X4_EXTMUL_LOW_I16X8_U: 'i32x4.extmul_low_i16x8_u';
I32X4_EXTMUL_HIGH_I16X8_U: 'i32x4.extmul_high_i16x8_u';
I64X2_ABS: 'i64x2.abs';
I64X2_NEG: 'i64x2.neg';
I64X2_ALL_TRUE: 'i64x2.all_true';
I64X2_BITMASK: 'i64x2.bitmask';
I64X2_EXTEND_LOW_I32X4_S: 'i64x2.extend_low_i32x4_s';
I64X2_EXTEND_HIGH_I32X4_S: 'i64x2.extend_high_i32x4_s';
I64X2_EXTEND_LOW_I32X4_U: 'i64x2.extend_low_i32x4_u';
I64X2_EXTEND_HIGH_I32X4_U: 'i64x2.extend_high_i32x4_u';
I64X2_SHL: 'i64x2.shl';
I64X2_SHR_S: 'i64x2.shr_s';
I64X2_SHR_U: 'i64x2.shr_u';
I64X2_ADD: 'i64x2.add';
I64X2_SUB: 'i64x2.sub';
I64X2_MUL: 'i64x2.mul';
I64X2_EQ: 'i64x2.eq';
I64X2_NE: 'i64x2.ne';
I64X2_LT_S: 'i64x2.lt_s';
I64X2_GT_S: 'i64x2.gt_s';
I64X2_LE_S: 'i64x2.le_s';
I64X2_GE_S: 'i64x2.ge_s';
I64X2_EXTMUL_LOW_I32X4_S: 'i64x2.extmul_low_i32x4_s';
I64X2_EXTMUL_HIGH_I32X4_S: 'i64x2.extmul_high_i32x4_s';
I64X2_EXTMUL_LOW_I32X4_U: 'i64x2.extmul_low_i32x4_u';
I64X2_EXTMUL_HIGH_I32X4_U: 'i64x2.extmul_high_i32x4_u';
F32X4_ABS: 'f32x4.abs';
F32X4_NEG: 'f32x4.neg';
F32X4_SQRT: 'f32x4.sqrt';
F32X4_ADD: 'f32x4.add';
F32X4_SUB: 'f32x4.sub';
F32X4_MUL: 'f32x4.mul';
F32X4_DIV: 'f32x4.div';
F32X4_MIN: 'f32x4.min';
F32X4_MAX: 'f32x4.max';
F32X4_PMIN: 'f32x4.pmin';
F32X4_PMAX: 'f32x4.pmax';
F64X2_ABS: 'f64x2.abs';
F64X2_NEG: 'f64x2.neg';
F64X2_SQRT: 'f64x2.sqrt';
F64X2_ADD: 'f64x2.add';
F64X2_SUB: 'f64x2.sub';
F64X2_MUL: 'f64x2.mul';
F64X2_DIV: 'f64x2.div';
F64X2_MIN: 'f64x2.min';
F64X2_MAX: 'f64x2.max';
F64X2_PMIN: 'f64x2.pmin';
F64X2_PMAX: 'f64x2.pmax';
I32X4_TRUNC_SAT_F32X4_S: 'i32x4.trunc_sat_f32x4_s';
I32X4_TRUNC_SAT_F32X4_U: 'i32x4.trunc_sat_f32x4_u';
F32X4_CONVERT_I32X4_S: 'f32x4.convert_i32x4_s';
F32X4_CONVERT_I32X4_U: 'f32x4.convert_i32x4_u';
I32X4_TRUNC_SAT_F64X2_S_ZERO: 'i32x4.trunc_sat_f64x2_s_zero';
I32X4_TRUNC_SAT_F64X2_U_ZERO: 'i32x4.trunc_sat_f64x2_u_zero';
F64X2_CONVERT_LOW_I32X4_S: 'f64x2.convert_low_i32x4_s';
F64X2_CONVERT_LOW_I32X4_U: 'f64x2.convert_low_i32x4_u';

// §3.8 Identifiers (must appear after all keywords in the grammar)
// moved from ComposeLexer until import sequence is fixed

IDENTIFIER
	:	Letter LetterOrDigit*
	;

fragment
Letter
	:	[a-zA-Z$_] // these are the "letters" below 0x7F
	;

fragment
LetterOrDigit
	:	[a-zA-Z0-9$_] // these are the "letters or digits" below 0x7F
	;

