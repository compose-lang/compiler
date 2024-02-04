// Generated from ComposeParser.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols

import {
	ATN,
	ATNDeserializer, DecisionState, DFA, FailedPredicateException,
	RecognitionException, NoViableAltException, BailErrorStrategy,
	Parser, ParserATNSimulator,
	RuleContext, ParserRuleContext, PredictionMode, PredictionContextCache,
	TerminalNode, RuleNode,
	Token, TokenStream,
	Interval, IntervalSet
} from 'npm:antlr4';
import ComposeParserListener from "./ComposeParserListener.ts";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import BaseParser from './BaseParser.ts';

export default class ComposeParser extends BaseParser {
	public static readonly SELECT_T = 1;
	public static readonly I8 = 2;
	public static readonly I16 = 3;
	public static readonly I32 = 4;
	public static readonly I64 = 5;
	public static readonly U8 = 6;
	public static readonly U16 = 7;
	public static readonly U32 = 8;
	public static readonly U64 = 9;
	public static readonly F32 = 10;
	public static readonly F64 = 11;
	public static readonly V128 = 12;
	public static readonly CHAR = 13;
	public static readonly STRING = 14;
	public static readonly BOOLEAN = 15;
	public static readonly ANY = 16;
	public static readonly VOID = 17;
	public static readonly ATTRIBUTE = 18;
	public static readonly CLASS = 19;
	public static readonly ENUM = 20;
	public static readonly EXTENDS = 21;
	public static readonly FUNCTION = 22;
	public static readonly STRUCT = 23;
	public static readonly STATIC = 24;
	public static readonly ABSTRACT = 25;
	public static readonly NATIVE = 26;
	public static readonly PUBLIC = 27;
	public static readonly PROTECTED = 28;
	public static readonly PRIVATE = 29;
	public static readonly READONLY = 30;
	public static readonly CONST = 31;
	public static readonly LET = 32;
	public static readonly NEW = 33;
	public static readonly GET = 34;
	public static readonly SET = 35;
	public static readonly FROM = 36;
	public static readonly SWITCH = 37;
	public static readonly CASE = 38;
	public static readonly FOR = 39;
	public static readonly DO = 40;
	public static readonly WHILE = 41;
	public static readonly BREAK = 42;
	public static readonly FINALLY = 43;
	public static readonly THIS = 44;
	public static readonly SUPER = 45;
	public static readonly TYPE_OF = 46;
	public static readonly INSTANCE_OF = 47;
	public static readonly EXPORT = 48;
	public static readonly IMPORT = 49;
	public static readonly DEFAULT = 50;
	public static readonly IN = 51;
	public static readonly AS = 52;
	public static readonly LPAR = 53;
	public static readonly RPAR = 54;
	public static readonly LBRAK = 55;
	public static readonly RBRAK = 56;
	public static readonly LCURL = 57;
	public static readonly RCURL = 58;
	public static readonly ARROW = 59;
	public static readonly GT = 60;
	public static readonly LT = 61;
	public static readonly LTE = 62;
	public static readonly GTE = 63;
	public static readonly EQUALS = 64;
	public static readonly NOT_EQUALS = 65;
	public static readonly NOT = 66;
	public static readonly AND = 67;
	public static readonly OR = 68;
	public static readonly QUESTION = 69;
	public static readonly SEMI = 70;
	public static readonly COLON = 71;
	public static readonly COMMA = 72;
	public static readonly ETC = 73;
	public static readonly DOT = 74;
	public static readonly AT = 75;
	public static readonly INC = 76;
	public static readonly DEC = 77;
	public static readonly PLUS = 78;
	public static readonly MINUS = 79;
	public static readonly STAR = 80;
	public static readonly SLASH = 81;
	public static readonly BSLASH = 82;
	public static readonly PERCENT = 83;
	public static readonly CARET = 84;
	public static readonly TILDE = 85;
	public static readonly AMP = 86;
	public static readonly PIPE = 87;
	public static readonly LSHIFT = 88;
	public static readonly RSHIFT = 89;
	public static readonly URSHIFT = 90;
	public static readonly ASSIGN = 91;
	public static readonly ADD_ASSIGN = 92;
	public static readonly SUB_ASSIGN = 93;
	public static readonly MUL_ASSIGN = 94;
	public static readonly DIV_ASSIGN = 95;
	public static readonly AND_ASSIGN = 96;
	public static readonly OR_ASSIGN = 97;
	public static readonly XOR_ASSIGN = 98;
	public static readonly MOD_ASSIGN = 99;
	public static readonly LSHIFT_ASSIGN = 100;
	public static readonly RSHIFT_ASSIGN = 101;
	public static readonly URSHIFT_ASSIGN = 102;
	public static readonly INTEGER_LITERAL = 103;
	public static readonly DECIMAL_LITERAL = 104;
	public static readonly BOOLEAN_LITERAL = 105;
	public static readonly CHAR_LITERAL = 106;
	public static readonly STRING_LITERAL = 107;
	public static readonly NULL_LITERAL = 108;
	public static readonly ANNOTATION = 109;
	public static readonly WS = 110;
	public static readonly COMMENT = 111;
	public static readonly LINE_COMMENT = 112;
	public static readonly UNREACHABLE = 113;
	public static readonly NOP = 114;
	public static readonly BLOCK = 115;
	public static readonly LOOP = 116;
	public static readonly IF = 117;
	public static readonly ELSE = 118;
	public static readonly END = 119;
	public static readonly BR = 120;
	public static readonly BR_IF = 121;
	public static readonly BR_TABLE = 122;
	public static readonly RETURN = 123;
	public static readonly CALL = 124;
	public static readonly CALL_INDIRECT = 125;
	public static readonly RETURN_CALL = 126;
	public static readonly RETURN_CALL_INDIRECT = 127;
	public static readonly CALL_REF = 128;
	public static readonly RETURN_CALL_REF = 129;
	public static readonly DROP = 130;
	public static readonly SELECT = 131;
	public static readonly LOCAL_GET = 132;
	public static readonly LOCAL_SET = 133;
	public static readonly LOCAL_TEE = 134;
	public static readonly GLOBAL_GET = 135;
	public static readonly GLOBAL_SET = 136;
	public static readonly TABLE_GET = 137;
	public static readonly TABLE_SET = 138;
	public static readonly I32_LOAD = 139;
	public static readonly I64_LOAD = 140;
	public static readonly F32_LOAD = 141;
	public static readonly F64_LOAD = 142;
	public static readonly I32_LOAD8_S = 143;
	public static readonly I32_LOAD8_U = 144;
	public static readonly I32_LOAD16_S = 145;
	public static readonly I32_LOAD16_U = 146;
	public static readonly I64_LOAD8_S = 147;
	public static readonly I64_LOAD8_U = 148;
	public static readonly I64_LOAD16_S = 149;
	public static readonly I64_LOAD16_U = 150;
	public static readonly I64_LOAD32_S = 151;
	public static readonly I64_LOAD32_U = 152;
	public static readonly I32_STORE = 153;
	public static readonly I64_STORE = 154;
	public static readonly F32_STORE = 155;
	public static readonly F64_STORE = 156;
	public static readonly I32_STORE8 = 157;
	public static readonly I32_STORE16 = 158;
	public static readonly I64_STORE8 = 159;
	public static readonly I64_STORE16 = 160;
	public static readonly I64_STORE32 = 161;
	public static readonly MEMORY_SIZE = 162;
	public static readonly MEMORY_GROW = 163;
	public static readonly I32_CONST = 164;
	public static readonly I64_CONST = 165;
	public static readonly F32_CONST = 166;
	public static readonly F64_CONST = 167;
	public static readonly I32_EQZ = 168;
	public static readonly I32_EQ = 169;
	public static readonly I32_NE = 170;
	public static readonly I32_LT_S = 171;
	public static readonly I32_LT_U = 172;
	public static readonly I32_GT_S = 173;
	public static readonly I32_GT_U = 174;
	public static readonly I32_LE_S = 175;
	public static readonly I32_LE_U = 176;
	public static readonly I32_GE_S = 177;
	public static readonly I32_GE_U = 178;
	public static readonly I64_EQZ = 179;
	public static readonly I64_EQ = 180;
	public static readonly I64_NE = 181;
	public static readonly I64_LT_S = 182;
	public static readonly I64_LT_U = 183;
	public static readonly I64_GT_S = 184;
	public static readonly I64_GT_U = 185;
	public static readonly I64_LE_S = 186;
	public static readonly I64_LE_U = 187;
	public static readonly I64_GE_S = 188;
	public static readonly I64_GE_U = 189;
	public static readonly F32_EQ = 190;
	public static readonly F32_NE = 191;
	public static readonly F32_LT = 192;
	public static readonly F32_GT = 193;
	public static readonly F32_LE = 194;
	public static readonly F32_GE = 195;
	public static readonly F64_EQ = 196;
	public static readonly F64_NE = 197;
	public static readonly F64_LT = 198;
	public static readonly F64_GT = 199;
	public static readonly F64_LE = 200;
	public static readonly F64_GE = 201;
	public static readonly I32_CLZ = 202;
	public static readonly I32_CTZ = 203;
	public static readonly I32_POPCNT = 204;
	public static readonly I32_ADD = 205;
	public static readonly I32_SUB = 206;
	public static readonly I32_MUL = 207;
	public static readonly I32_DIV_S = 208;
	public static readonly I32_DIV_U = 209;
	public static readonly I32_REM_S = 210;
	public static readonly I32_REM_U = 211;
	public static readonly I32_AND = 212;
	public static readonly I32_OR = 213;
	public static readonly I32_XOR = 214;
	public static readonly I32_SHL = 215;
	public static readonly I32_SHR_S = 216;
	public static readonly I32_SHR_U = 217;
	public static readonly I32_ROTL = 218;
	public static readonly I32_ROTR = 219;
	public static readonly I64_CLZ = 220;
	public static readonly I64_CTZ = 221;
	public static readonly I64_POPCNT = 222;
	public static readonly I64_ADD = 223;
	public static readonly I64_SUB = 224;
	public static readonly I64_MUL = 225;
	public static readonly I64_DIV_S = 226;
	public static readonly I64_DIV_U = 227;
	public static readonly I64_REM_S = 228;
	public static readonly I64_REM_U = 229;
	public static readonly I64_AND = 230;
	public static readonly I64_OR = 231;
	public static readonly I64_XOR = 232;
	public static readonly I64_SHL = 233;
	public static readonly I64_SHR_S = 234;
	public static readonly I64_SHR_U = 235;
	public static readonly I64_ROTL = 236;
	public static readonly I64_ROTR = 237;
	public static readonly F32_ABS = 238;
	public static readonly F32_NEG = 239;
	public static readonly F32_CEIL = 240;
	public static readonly F32_FLOOR = 241;
	public static readonly F32_TRUNC = 242;
	public static readonly F32_NEAREST = 243;
	public static readonly F32_SQRT = 244;
	public static readonly F32_ADD = 245;
	public static readonly F32_SUB = 246;
	public static readonly F32_MUL = 247;
	public static readonly F32_DIV = 248;
	public static readonly F32_MIN = 249;
	public static readonly F32_MAX = 250;
	public static readonly F32_COPYSIGN = 251;
	public static readonly F64_ABS = 252;
	public static readonly F64_NEG = 253;
	public static readonly F64_CEIL = 254;
	public static readonly F64_FLOOR = 255;
	public static readonly F64_TRUNC = 256;
	public static readonly F64_NEAREST = 257;
	public static readonly F64_SQRT = 258;
	public static readonly F64_ADD = 259;
	public static readonly F64_SUB = 260;
	public static readonly F64_MUL = 261;
	public static readonly F64_DIV = 262;
	public static readonly F64_MIN = 263;
	public static readonly F64_MAX = 264;
	public static readonly F64_COPYSIGN = 265;
	public static readonly I32_WRAP_I64 = 266;
	public static readonly I32_TRUNC_F32_S = 267;
	public static readonly I32_TRUNC_F32_U = 268;
	public static readonly I32_TRUNC_F64_S = 269;
	public static readonly I32_TRUNC_F64_U = 270;
	public static readonly I64_EXTEND_I32_S = 271;
	public static readonly I64_EXTEND_I32_U = 272;
	public static readonly I64_TRUNC_F32_S = 273;
	public static readonly I64_TRUNC_F32_U = 274;
	public static readonly I64_TRUNC_F64_S = 275;
	public static readonly I64_TRUNC_F64_U = 276;
	public static readonly F32_CONVERT_I32_S = 277;
	public static readonly F32_CONVERT_I32_U = 278;
	public static readonly F32_CONVERT_I64_S = 279;
	public static readonly F32_CONVERT_I64_U = 280;
	public static readonly F32_DEMOTE_F64 = 281;
	public static readonly F64_CONVERT_I32_S = 282;
	public static readonly F64_CONVERT_I32_U = 283;
	public static readonly F64_CONVERT_I64_S = 284;
	public static readonly F64_CONVERT_I64_U = 285;
	public static readonly F64_PROMOTE_F32 = 286;
	public static readonly I32_REINTERPRET_F32 = 287;
	public static readonly I64_REINTERPRET_F64 = 288;
	public static readonly F32_REINTERPRET_I32 = 289;
	public static readonly F64_REINTERPRET_I64 = 290;
	public static readonly I32_EXTEND8_S = 291;
	public static readonly I32_EXTEND16_S = 292;
	public static readonly I64_EXTEND8_S = 293;
	public static readonly I64_EXTEND16_S = 294;
	public static readonly I64_EXTEND32_S = 295;
	public static readonly REF_NULL = 296;
	public static readonly REF_IS_NULL = 297;
	public static readonly REF_FUNC = 298;
	public static readonly REF_EQ = 299;
	public static readonly REF_AS_NON_NULL = 300;
	public static readonly BR_ON_NULL = 301;
	public static readonly BR_ON_NON_NULL = 302;
	public static readonly STRUCT_NEW = 303;
	public static readonly STRUCT_NEW_DEFAULT = 304;
	public static readonly STRUCT_GET = 305;
	public static readonly STRUCT_GETS = 306;
	public static readonly STRUCT_GETU = 307;
	public static readonly STRUCT_SET = 308;
	public static readonly ARRAY_NEW = 309;
	public static readonly ARRAY_NEWDEFAULT = 310;
	public static readonly ARRAY_NEW_FIXED = 311;
	public static readonly ARRAY_NEW_DATA = 312;
	public static readonly ARRAY_NEW_ELEM = 313;
	public static readonly ARRAY_GET = 314;
	public static readonly ARRAY_GETS = 315;
	public static readonly ARRAY_GETU = 316;
	public static readonly ARRAY_SET = 317;
	public static readonly ARRAY_LEN = 318;
	public static readonly ARRAY_FILL = 319;
	public static readonly ARRAY_COPY = 320;
	public static readonly ARRAY_INIT_DATA = 321;
	public static readonly ARRAY_INIT_ELEM = 322;
	public static readonly REF_TEST = 323;
	public static readonly REFCAST_NULL = 324;
	public static readonly BR_ON_CAST = 325;
	public static readonly BR_ON_CAST_FAIL = 326;
	public static readonly ANY_CONVERT_EXTERN = 327;
	public static readonly EXTERN_CONVERT_ANY = 328;
	public static readonly REF_I31 = 329;
	public static readonly I31GETS = 330;
	public static readonly I31GETU = 331;
	public static readonly I32_TRUNC_SAT_F32_S = 332;
	public static readonly I32_TRUNC_SAT_F32_U = 333;
	public static readonly I32_TRUNC_SAT_F64_S = 334;
	public static readonly I32_TRUNC_SAT_F64_U = 335;
	public static readonly I64_TRUNC_SAT_F32_S = 336;
	public static readonly I64_TRUNC_SAT_F32_U = 337;
	public static readonly I64_TRUNC_SAT_F64_S = 338;
	public static readonly I64_TRUNC_SAT_F64_U = 339;
	public static readonly MEMORY_INIT = 340;
	public static readonly DATA_DROP = 341;
	public static readonly MEMORY_COPY = 342;
	public static readonly MEMORY_FILL = 343;
	public static readonly TABLE_INIT = 344;
	public static readonly ELEM_DROP = 345;
	public static readonly TABLE_COPY = 346;
	public static readonly TABLE_GROW = 347;
	public static readonly TABLE_SIZE = 348;
	public static readonly TABLE_FILL = 349;
	public static readonly V128_LOAD = 350;
	public static readonly V128_LOAD8X8_S = 351;
	public static readonly V128_LOAD8X8_U = 352;
	public static readonly V128_LOAD16X4_S = 353;
	public static readonly V128_LOAD16X4_U = 354;
	public static readonly V128_LOAD32X2_S = 355;
	public static readonly V128_LOAD32X2_U = 356;
	public static readonly V128_LOAD8_SPLAT = 357;
	public static readonly V128_LOAD16_SPLAT = 358;
	public static readonly V128_LOAD32_SPLAT = 359;
	public static readonly V128_LOAD64_SPLAT = 360;
	public static readonly V128_STORE = 361;
	public static readonly V128_CONST = 362;
	public static readonly I8X16_SHUFFLE = 363;
	public static readonly I8X16_SWIZZLE = 364;
	public static readonly I8X16_SPLAT = 365;
	public static readonly I16X8_SPLAT = 366;
	public static readonly I32X4_SPLAT = 367;
	public static readonly I64X2_SPLAT = 368;
	public static readonly F32X4_SPLAT = 369;
	public static readonly F64X2_SPLAT = 370;
	public static readonly I8X16_EXTRACT_LANE_S = 371;
	public static readonly I8X16_EXTRACT_LANE_U = 372;
	public static readonly I8X16_REPLACE_LANE = 373;
	public static readonly I16X8_EXTRACT_LANE_S = 374;
	public static readonly I16X8_EXTRACT_LANE_U = 375;
	public static readonly I16X8_REPLACE_LANE = 376;
	public static readonly I32X4_EXTRACT_LANE = 377;
	public static readonly I32X4_REPLACE_LANE = 378;
	public static readonly I64X2_EXTRACT_LANE = 379;
	public static readonly I64X2_REPLACE_LANE = 380;
	public static readonly F32X4_EXTRACT_LANE = 381;
	public static readonly F32X4_REPLACE_LANE = 382;
	public static readonly F64X2_EXTRACT_LANE = 383;
	public static readonly F64X2_REPLACE_LANE = 384;
	public static readonly I8X16_EQ = 385;
	public static readonly I8X16_NE = 386;
	public static readonly I8X16_LT_S = 387;
	public static readonly I8X16_LT_U = 388;
	public static readonly I8X16_GT_S = 389;
	public static readonly I8X16_GT_U = 390;
	public static readonly I8X16_LE_S = 391;
	public static readonly I8X16_LE_U = 392;
	public static readonly I8X16_GE_S = 393;
	public static readonly I8X16_GE_U = 394;
	public static readonly I16X8_EQ = 395;
	public static readonly I16X8_NE = 396;
	public static readonly I16X8_LT_S = 397;
	public static readonly I16X8_LT_U = 398;
	public static readonly I16X8_GT_S = 399;
	public static readonly I16X8_GT_U = 400;
	public static readonly I16X8_LE_S = 401;
	public static readonly I16X8_LE_U = 402;
	public static readonly I16X8_GE_S = 403;
	public static readonly I16X8_GE_U = 404;
	public static readonly I32X4_EQ = 405;
	public static readonly I32X4_NE = 406;
	public static readonly I32X4_LT_S = 407;
	public static readonly I32X4_LT_U = 408;
	public static readonly I32X4_GT_S = 409;
	public static readonly I32X4_GT_U = 410;
	public static readonly I32X4_LE_S = 411;
	public static readonly I32X4_LE_U = 412;
	public static readonly I32X4_GE_S = 413;
	public static readonly I32X4_GE_U = 414;
	public static readonly F32X4_EQ = 415;
	public static readonly F32X4_NE = 416;
	public static readonly F32X4_LT = 417;
	public static readonly F32X4_GT = 418;
	public static readonly F32X4_LE = 419;
	public static readonly F32X4_GE = 420;
	public static readonly F64X2_EQ = 421;
	public static readonly F64X2_NE = 422;
	public static readonly F64X2_LT = 423;
	public static readonly F64X2_GT = 424;
	public static readonly F64X2_LE = 425;
	public static readonly F64X2_GE = 426;
	public static readonly V128_NOT = 427;
	public static readonly V128_AND = 428;
	public static readonly V128_ANDNOT = 429;
	public static readonly V128_OR = 430;
	public static readonly V128_XOR = 431;
	public static readonly V128_BITSELECT = 432;
	public static readonly V128_ANY_TRUE = 433;
	public static readonly V128_LOAD8_LANE = 434;
	public static readonly V128_LOAD16_LANE = 435;
	public static readonly V128_LOAD32_LANE = 436;
	public static readonly V128_LOAD64_LANE = 437;
	public static readonly V128_STORE8_LANE = 438;
	public static readonly V128_STORE16_LANE = 439;
	public static readonly V128_STORE32_LANE = 440;
	public static readonly V128_STORE64_LANE = 441;
	public static readonly V128_LOAD32_ZERO = 442;
	public static readonly V128_LOAD64_ZERO = 443;
	public static readonly F32X4_DEMOTE_F64X2_ZERO = 444;
	public static readonly F64X2_PROMOTE_LOW_F32X4 = 445;
	public static readonly I8X16_ABS = 446;
	public static readonly I8X16_NEG = 447;
	public static readonly I8X16_POPCNT = 448;
	public static readonly I8X16_ALL_TRUE = 449;
	public static readonly I8X16_BITMASK = 450;
	public static readonly I8X16_NARROW_I16X8_S = 451;
	public static readonly I8X16_NARROW_I16X8_U = 452;
	public static readonly F32X4_CEIL = 453;
	public static readonly F32X4_FLOOR = 454;
	public static readonly F32X4_TRUNC = 455;
	public static readonly F32X4_NEAREST = 456;
	public static readonly I8X16_SHL = 457;
	public static readonly I8X16_SHR_S = 458;
	public static readonly I8X16_SHR_U = 459;
	public static readonly I8X16_ADD = 460;
	public static readonly I8X16_ADD_SAT_S = 461;
	public static readonly I8X16_ADD_SAT_U = 462;
	public static readonly I8X16_SUB = 463;
	public static readonly I8X16_SUB_SAT_S = 464;
	public static readonly I8X16_SUB_SAT_U = 465;
	public static readonly F64X2_CEIL = 466;
	public static readonly F64X2_FLOOR = 467;
	public static readonly I8X16_MIN_S = 468;
	public static readonly I8X16_MIN_U = 469;
	public static readonly I8X16_MAX_S = 470;
	public static readonly I8X16_MAX_U = 471;
	public static readonly F64X2_TRUNC = 472;
	public static readonly I8X16_AVGR_U = 473;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_S = 474;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_U = 475;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_S = 476;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_U = 477;
	public static readonly I16X8_ABS = 478;
	public static readonly I16X8_NEG = 479;
	public static readonly I16X8_Q15MULR_SAT_S = 480;
	public static readonly I16X8_ALL_TRUE = 481;
	public static readonly I16X8_BITMASK = 482;
	public static readonly I16X8_NARROW_I32X4_S = 483;
	public static readonly I16X8_NARROW_I32X4_U = 484;
	public static readonly I16X8_EXTEND_LOW_I8X16_S = 485;
	public static readonly I16X8_EXTEND_HIGH_I8X16_S = 486;
	public static readonly I16X8_EXTEND_LOW_I8X16_U = 487;
	public static readonly I16X8_EXTEND_HIGH_I8X16_U = 488;
	public static readonly I16X8_SHL = 489;
	public static readonly I16X8_SHR_S = 490;
	public static readonly I16X8_SHR_U = 491;
	public static readonly I16X8_ADD = 492;
	public static readonly I16X8_ADD_SAT_S = 493;
	public static readonly I16X8_ADD_SAT_U = 494;
	public static readonly I16X8_SUB = 495;
	public static readonly I16X8_SUB_SAT_S = 496;
	public static readonly I16X8_SUB_SAT_U = 497;
	public static readonly F64X2_NEAREST = 498;
	public static readonly I16X8_MUL = 499;
	public static readonly I16X8_MIN_S = 500;
	public static readonly I16X8_MIN_U = 501;
	public static readonly I16X8_MAX_S = 502;
	public static readonly I16X8_MAX_U = 503;
	public static readonly I16X8_AVGR_U = 504;
	public static readonly I16X8_EXTMUL_LOW_I8X16_S = 505;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_S = 506;
	public static readonly I16X8_EXTMUL_LOW_I8X16_U = 507;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_U = 508;
	public static readonly I32X4_ABS = 509;
	public static readonly I32X4_NEG = 510;
	public static readonly I32X4_ALL_TRUE = 511;
	public static readonly I32X4_BITMASK = 512;
	public static readonly I32X4_EXTEND_LOW_I16X8_S = 513;
	public static readonly I32X4_EXTEND_HIGH_I16X8_S = 514;
	public static readonly I32X4_EXTEND_LOW_I16X8_U = 515;
	public static readonly I32X4_EXTEND_HIGH_I16X8_U = 516;
	public static readonly I32X4_SHL = 517;
	public static readonly I32X4_SHR_S = 518;
	public static readonly I32X4_SHR_U = 519;
	public static readonly I32X4_ADD = 520;
	public static readonly I32X4_SUB = 521;
	public static readonly I32X4_MUL = 522;
	public static readonly I32X4_MIN_S = 523;
	public static readonly I32X4_MIN_U = 524;
	public static readonly I32X4_MAX_S = 525;
	public static readonly I32X4_MAX_U = 526;
	public static readonly I32X4_DOT_I16X8_S = 527;
	public static readonly I32X4_EXTMUL_LOW_I16X8_S = 528;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_S = 529;
	public static readonly I32X4_EXTMUL_LOW_I16X8_U = 530;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_U = 531;
	public static readonly I64X2_ABS = 532;
	public static readonly I64X2_NEG = 533;
	public static readonly I64X2_ALL_TRUE = 534;
	public static readonly I64X2_BITMASK = 535;
	public static readonly I64X2_EXTEND_LOW_I32X4_S = 536;
	public static readonly I64X2_EXTEND_HIGH_I32X4_S = 537;
	public static readonly I64X2_EXTEND_LOW_I32X4_U = 538;
	public static readonly I64X2_EXTEND_HIGH_I32X4_U = 539;
	public static readonly I64X2_SHL = 540;
	public static readonly I64X2_SHR_S = 541;
	public static readonly I64X2_SHR_U = 542;
	public static readonly I64X2_ADD = 543;
	public static readonly I64X2_SUB = 544;
	public static readonly I64X2_MUL = 545;
	public static readonly I64X2_EQ = 546;
	public static readonly I64X2_NE = 547;
	public static readonly I64X2_LT_S = 548;
	public static readonly I64X2_GT_S = 549;
	public static readonly I64X2_LE_S = 550;
	public static readonly I64X2_GE_S = 551;
	public static readonly I64X2_EXTMUL_LOW_I32X4_S = 552;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_S = 553;
	public static readonly I64X2_EXTMUL_LOW_I32X4_U = 554;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_U = 555;
	public static readonly F32X4_ABS = 556;
	public static readonly F32X4_NEG = 557;
	public static readonly F32X4_SQRT = 558;
	public static readonly F32X4_ADD = 559;
	public static readonly F32X4_SUB = 560;
	public static readonly F32X4_MUL = 561;
	public static readonly F32X4_DIV = 562;
	public static readonly F32X4_MIN = 563;
	public static readonly F32X4_MAX = 564;
	public static readonly F32X4_PMIN = 565;
	public static readonly F32X4_PMAX = 566;
	public static readonly F64X2_ABS = 567;
	public static readonly F64X2_NEG = 568;
	public static readonly F64X2_SQRT = 569;
	public static readonly F64X2_ADD = 570;
	public static readonly F64X2_SUB = 571;
	public static readonly F64X2_MUL = 572;
	public static readonly F64X2_DIV = 573;
	public static readonly F64X2_MIN = 574;
	public static readonly F64X2_MAX = 575;
	public static readonly F64X2_PMIN = 576;
	public static readonly F64X2_PMAX = 577;
	public static readonly I32X4_TRUNC_SAT_F32X4_S = 578;
	public static readonly I32X4_TRUNC_SAT_F32X4_U = 579;
	public static readonly F32X4_CONVERT_I32X4_S = 580;
	public static readonly F32X4_CONVERT_I32X4_U = 581;
	public static readonly I32X4_TRUNC_SAT_F64X2_S_ZERO = 582;
	public static readonly I32X4_TRUNC_SAT_F64X2_U_ZERO = 583;
	public static readonly F64X2_CONVERT_LOW_I32X4_S = 584;
	public static readonly F64X2_CONVERT_LOW_I32X4_U = 585;
	public static readonly TRY = 586;
	public static readonly CATCH = 587;
	public static readonly THROW = 588;
	public static readonly IDENTIFIER = 589;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_preamble = 1;
	public static readonly RULE_import_statement = 2;
	public static readonly RULE_import_source = 3;
	public static readonly RULE_compilation_atom = 4;
	public static readonly RULE_global_statement = 5;
	public static readonly RULE_declaration = 6;
	public static readonly RULE_enum_declaration = 7;
	public static readonly RULE_enum_item = 8;
	public static readonly RULE_attribute_declaration = 9;
	public static readonly RULE_identifier = 10;
	public static readonly RULE_annotation = 11;
	public static readonly RULE_value_type = 12;
	public static readonly RULE_mutable_value_type_or_null = 13;
	public static readonly RULE_value_type_or_null = 14;
	public static readonly RULE_native_type = 15;
	public static readonly RULE_any_type = 16;
	public static readonly RULE_boolean_type = 17;
	public static readonly RULE_char_type = 18;
	public static readonly RULE_number_type = 19;
	public static readonly RULE_integer_type = 20;
	public static readonly RULE_decimal_type = 21;
	public static readonly RULE_i8_type = 22;
	public static readonly RULE_i16_type = 23;
	public static readonly RULE_i32_type = 24;
	public static readonly RULE_i64_type = 25;
	public static readonly RULE_u8_type = 26;
	public static readonly RULE_u16_type = 27;
	public static readonly RULE_u32_type = 28;
	public static readonly RULE_u64_type = 29;
	public static readonly RULE_f32_type = 30;
	public static readonly RULE_f64_type = 31;
	public static readonly RULE_string_type = 32;
	public static readonly RULE_void_type = 33;
	public static readonly RULE_attribute_type = 34;
	public static readonly RULE_attribute_type_or_null = 35;
	public static readonly RULE_attribute_ref = 36;
	public static readonly RULE_user_type = 37;
	public static readonly RULE_user_ref = 38;
	public static readonly RULE_function_type = 39;
	public static readonly RULE_function_type_or_null = 40;
	public static readonly RULE_return_type = 41;
	public static readonly RULE_return_types = 42;
	public static readonly RULE_parameter = 43;
	public static readonly RULE_class_declaration = 44;
	public static readonly RULE_struct_declaration = 45;
	public static readonly RULE_accessibility = 46;
	public static readonly RULE_field_declaration = 47;
	public static readonly RULE_function_declaration = 48;
	public static readonly RULE_abstract_function_declaration = 49;
	public static readonly RULE_concrete_function_declaration = 50;
	public static readonly RULE_native_function_declaration = 51;
	public static readonly RULE_function_prototype = 52;
	public static readonly RULE_generic_parameter = 53;
	public static readonly RULE_statement = 54;
	public static readonly RULE_embeddable_statement = 55;
	public static readonly RULE_standalone_statement = 56;
	public static readonly RULE_unary_statement = 57;
	public static readonly RULE_throw_statement = 58;
	public static readonly RULE_try_statement = 59;
	public static readonly RULE_catch_clause = 60;
	public static readonly RULE_catch_all_clause = 61;
	public static readonly RULE_finally_clause = 62;
	public static readonly RULE_break_statement = 63;
	public static readonly RULE_for_statement = 64;
	public static readonly RULE_while_statement = 65;
	public static readonly RULE_do_while_statement = 66;
	public static readonly RULE_if_statement = 67;
	public static readonly RULE_statements = 68;
	public static readonly RULE_function_call_statement = 69;
	public static readonly RULE_declare_instances_statement = 70;
	public static readonly RULE_declare_one = 71;
	public static readonly RULE_assign_instance_statement = 72;
	public static readonly RULE_assign_op = 73;
	public static readonly RULE_assign_item_statement = 74;
	public static readonly RULE_return_statement = 75;
	public static readonly RULE_expression = 76;
	public static readonly RULE_function_call = 77;
	public static readonly RULE_literal_expression = 78;
	public static readonly RULE_list_literal = 79;
	public static readonly RULE_set_literal = 80;
	public static readonly RULE_map_literal = 81;
	public static readonly RULE_map_entry = 82;
	public static readonly RULE_instruction = 83;
	public static readonly RULE_opcode = 84;
	public static readonly RULE_plain_opcode = 85;
	public static readonly RULE_keyword_opcode = 86;
	public static readonly RULE_composite_opcode = 87;
	public static readonly literalNames: (string | null)[] = [ null, null, 
                                                            "'i8'", "'i16'", 
                                                            "'i32'", "'i64'", 
                                                            "'u8'", "'u16'", 
                                                            "'u32'", "'u64'", 
                                                            "'f32'", "'f64'", 
                                                            "'v128'", "'char'", 
                                                            "'string'", 
                                                            "'boolean'", 
                                                            "'any'", "'void'", 
                                                            "'attribute'", 
                                                            "'class'", "'enum'", 
                                                            "'extends'", 
                                                            "'function'", 
                                                            "'struct'", 
                                                            "'static'", 
                                                            "'abstract'", 
                                                            "'native'", 
                                                            "'public'", 
                                                            "'protected'", 
                                                            "'private'", 
                                                            "'readonly'", 
                                                            "'const'", "'let'", 
                                                            "'new'", "'get'", 
                                                            "'set'", "'from'", 
                                                            "'switch'", 
                                                            "'case'", "'for'", 
                                                            "'do'", "'while'", 
                                                            "'break'", "'finally'", 
                                                            "'this'", "'super'", 
                                                            "'typeof'", 
                                                            "'instanceof'", 
                                                            "'export'", 
                                                            "'import'", 
                                                            "'default'", 
                                                            "'in'", "'as'", 
                                                            "'('", "')'", 
                                                            "'['", "']'", 
                                                            "'{'", "'}'", 
                                                            "'=>'", "'>'", 
                                                            "'<'", "'<='", 
                                                            "'>='", "'=='", 
                                                            "'!='", "'!'", 
                                                            "'&&'", "'||'", 
                                                            "'?'", "';'", 
                                                            "':'", "','", 
                                                            "'...'", "'.'", 
                                                            "'@'", "'++'", 
                                                            "'--'", "'+'", 
                                                            "'-'", "'*'", 
                                                            "'/'", "'\\'", 
                                                            "'%'", "'^'", 
                                                            "'~'", "'&'", 
                                                            "'|'", "'<<'", 
                                                            "'>>'", "'>>>'", 
                                                            "'='", "'+='", 
                                                            "'-='", "'*='", 
                                                            "'/='", "'&='", 
                                                            "'|='", "'^='", 
                                                            "'%='", "'<<='", 
                                                            "'>>='", "'>>>='", 
                                                            null, null, 
                                                            null, null, 
                                                            null, "'null'", 
                                                            null, null, 
                                                            null, null, 
                                                            "'unreachable'", 
                                                            "'nop'", "'block'", 
                                                            "'loop'", "'if'", 
                                                            "'else'", "'end'", 
                                                            "'br'", "'br_if'", 
                                                            "'br_table'", 
                                                            "'return'", 
                                                            "'call'", "'call_indirect'", 
                                                            "'return_call'", 
                                                            "'return_call_indirect'", 
                                                            "'call_ref'", 
                                                            "'return_call_ref'", 
                                                            "'drop'", "'select'", 
                                                            "'local.get'", 
                                                            "'local.set'", 
                                                            "'local.tee'", 
                                                            "'global.get'", 
                                                            "'global.set'", 
                                                            "'table.get'", 
                                                            "'table.set'", 
                                                            "'i32.load'", 
                                                            "'i64.load'", 
                                                            "'f32.load'", 
                                                            "'f64.load'", 
                                                            "'i32.load8_s'", 
                                                            "'i32.load8_u'", 
                                                            "'i32.load16_s'", 
                                                            "'i32.load16_u'", 
                                                            "'i64.load8_s'", 
                                                            "'i64.load8_u'", 
                                                            "'i64.load16_s'", 
                                                            "'i64.load16_u'", 
                                                            "'i64.load32_s'", 
                                                            "'i64.load32_u'", 
                                                            "'i32.store'", 
                                                            "'i64.store'", 
                                                            "'f32.store'", 
                                                            "'f64.store'", 
                                                            "'i32.store8'", 
                                                            "'i32.store16'", 
                                                            "'i64.store8'", 
                                                            "'i64.store16'", 
                                                            "'i64.store32'", 
                                                            "'memory.size'", 
                                                            "'memory.grow'", 
                                                            "'i32.const'", 
                                                            "'i64.const'", 
                                                            "'f32.const'", 
                                                            "'f64.const'", 
                                                            "'i32.eqz'", 
                                                            "'i32.eq'", 
                                                            "'i32.ne'", 
                                                            "'i32.lt_s'", 
                                                            "'i32.lt_u'", 
                                                            "'i32.gt_s'", 
                                                            "'i32.gt_u'", 
                                                            "'i32.le_s'", 
                                                            "'i32.le_u'", 
                                                            "'i32.ge_s'", 
                                                            "'i32.ge_u'", 
                                                            "'i64.eqz'", 
                                                            "'i64.eq'", 
                                                            "'i64.ne'", 
                                                            "'i64.lt_s'", 
                                                            "'i64.lt_u'", 
                                                            "'i64.gt_s'", 
                                                            "'i64.gt_u'", 
                                                            "'i64.le_s'", 
                                                            "'i64.le_u'", 
                                                            "'i64.ge_s'", 
                                                            "'i64.ge_u'", 
                                                            "'f32.eq'", 
                                                            "'f32.ne'", 
                                                            "'f32.lt'", 
                                                            "'f32.gt'", 
                                                            "'f32.le'", 
                                                            "'f32.ge'", 
                                                            "'f64.eq'", 
                                                            "'f64.ne'", 
                                                            "'f64.lt'", 
                                                            "'f64.gt'", 
                                                            "'f64.le'", 
                                                            "'f64.ge'", 
                                                            "'i32.clz'", 
                                                            "'i32.ctz'", 
                                                            "'i32.popcnt'", 
                                                            "'i32.add'", 
                                                            "'i32.sub'", 
                                                            "'i32.mul'", 
                                                            "'i32.div_s'", 
                                                            "'i32.div_u'", 
                                                            "'i32.rem_s'", 
                                                            "'i32.rem_u'", 
                                                            "'i32.and'", 
                                                            "'i32.or'", 
                                                            "'i32.xor'", 
                                                            "'i32.shl'", 
                                                            "'i32.shr_s'", 
                                                            "'i32.shr_u'", 
                                                            "'i32.rotl'", 
                                                            "'i32.rotr'", 
                                                            "'i64.clz'", 
                                                            "'i64.ctz'", 
                                                            "'i64.popcnt'", 
                                                            "'i64.add'", 
                                                            "'i64.sub'", 
                                                            "'i64.mul'", 
                                                            "'i64.div_s'", 
                                                            "'i64.div_u'", 
                                                            "'i64.rem_s'", 
                                                            "'i64.rem_u'", 
                                                            "'i64.and'", 
                                                            "'i64.or'", 
                                                            "'i64.xor'", 
                                                            "'i64.shl'", 
                                                            "'i64.shr_s'", 
                                                            "'i64.shr_u'", 
                                                            "'i64.rotl'", 
                                                            "'i64.rotr'", 
                                                            "'f32.abs'", 
                                                            "'f32.neg'", 
                                                            "'f32.ceil'", 
                                                            "'f32.floor'", 
                                                            "'f32.trunc'", 
                                                            "'f32.nearest'", 
                                                            "'f32.sqrt'", 
                                                            "'f32.add'", 
                                                            "'f32.sub'", 
                                                            "'f32.mul'", 
                                                            "'f32.div'", 
                                                            "'f32.min'", 
                                                            "'f32.max'", 
                                                            "'f32.copysign'", 
                                                            "'f64.abs'", 
                                                            "'f64.neg'", 
                                                            "'f64.ceil'", 
                                                            "'f64.floor'", 
                                                            "'f64.trunc'", 
                                                            "'f64.nearest'", 
                                                            "'f64.sqrt'", 
                                                            "'f64.add'", 
                                                            "'f64.sub'", 
                                                            "'f64.mul'", 
                                                            "'f64.div'", 
                                                            "'f64.min'", 
                                                            "'f64.max'", 
                                                            "'f64.copysign'", 
                                                            "'i32.wrap_i64'", 
                                                            "'i32.trunc_f32_s'", 
                                                            "'i32.trunc_f32_u'", 
                                                            "'i32.trunc_f64_s'", 
                                                            "'i32.trunc_f64_u'", 
                                                            "'i64.extend_i32_s'", 
                                                            "'i64.extend_i32_u'", 
                                                            "'i64.trunc_f32_s'", 
                                                            "'i64.trunc_f32_u'", 
                                                            "'i64.trunc_f64_s'", 
                                                            "'i64.trunc_f64_u'", 
                                                            "'f32.convert_i32_s'", 
                                                            "'f32.convert_i32_u'", 
                                                            "'f32.convert_i64_s'", 
                                                            "'f32.convert_i64_u'", 
                                                            "'f32.demote_f64'", 
                                                            "'f64.convert_i32_s'", 
                                                            "'f64.convert_i32_u'", 
                                                            "'f64.convert_i64_s'", 
                                                            "'f64.convert_i64_u'", 
                                                            "'f64.promote_f32'", 
                                                            "'i32.reinterpret_f32'", 
                                                            "'i64.reinterpret_f64'", 
                                                            "'f32.reinterpret_i32'", 
                                                            "'f64.reinterpret_i64'", 
                                                            "'i32.extend8_s'", 
                                                            "'i32.extend16_s'", 
                                                            "'i64.extend8_s'", 
                                                            "'i64.extend16_s'", 
                                                            "'i64.extend32_s'", 
                                                            "'ref.null'", 
                                                            "'ref.is_null'", 
                                                            "'ref.func'", 
                                                            "'ref.eq'", 
                                                            "'ref.as_non_null'", 
                                                            "'br_on_null'", 
                                                            "'br_on_non_null'", 
                                                            "'struct.new'", 
                                                            "'struct.new_default'", 
                                                            "'struct.get'", 
                                                            "'struct.gets'", 
                                                            "'struct.getu'", 
                                                            "'struct.set'", 
                                                            "'array.new'", 
                                                            "'array.newdefault'", 
                                                            "'array.new_fixed'", 
                                                            "'array.new_data'", 
                                                            "'array.new_elem'", 
                                                            "'array.get'", 
                                                            "'array.gets'", 
                                                            "'array.getu'", 
                                                            "'array.set'", 
                                                            "'array.len'", 
                                                            "'array.fill'", 
                                                            "'array.copy'", 
                                                            "'array.init_data'", 
                                                            "'array.init_elem'", 
                                                            "'ref.test'", 
                                                            "'ref.cast'", 
                                                            "'br_on_cast'", 
                                                            "'br_on_cast_fail'", 
                                                            "'any.convert_extern'", 
                                                            "'extern.convert_any'", 
                                                            "'ref.i31'", 
                                                            "'i31gets'", 
                                                            "'i31getu'", 
                                                            "'i32.trunc_sat_f32_s'", 
                                                            "'i32.trunc_sat_f32_u'", 
                                                            "'i32.trunc_sat_f64_s'", 
                                                            "'i32.trunc_sat_f64_u'", 
                                                            "'i64.trunc_sat_f32_s'", 
                                                            "'i64.trunc_sat_f32_u'", 
                                                            "'i64.trunc_sat_f64_s'", 
                                                            "'i64.trunc_sat_f64_u'", 
                                                            "'memory.init'", 
                                                            "'data.drop'", 
                                                            "'memory.copy'", 
                                                            "'memory.fill'", 
                                                            "'table.init'", 
                                                            "'elem.drop'", 
                                                            "'table.copy'", 
                                                            "'table.grow'", 
                                                            "'table.size'", 
                                                            "'table.fill'", 
                                                            "'v128.load'", 
                                                            "'v128.load8x8_s'", 
                                                            "'v128.load8x8_u'", 
                                                            "'v128.load16x4_s'", 
                                                            "'v128.load16x4_u'", 
                                                            "'v128.load32x2_s'", 
                                                            "'v128.load32x2_u'", 
                                                            "'v128.load8_splat'", 
                                                            "'v128.load16_splat'", 
                                                            "'v128.load32_splat'", 
                                                            "'v128.load64_splat'", 
                                                            "'v128.store'", 
                                                            "'v128.const'", 
                                                            "'i8x16.shuffle'", 
                                                            "'i8x16.swizzle'", 
                                                            "'i8x16.splat'", 
                                                            "'i16x8.splat'", 
                                                            "'i32x4.splat'", 
                                                            "'i64x2.splat'", 
                                                            "'f32x4.splat'", 
                                                            "'f64x2.splat'", 
                                                            "'i8x16.extract_lane_s'", 
                                                            "'i8x16.extract_lane_u'", 
                                                            "'i8x16.replace_lane'", 
                                                            "'i16x8.extract_lane_s'", 
                                                            "'i16x8.extract_lane_u'", 
                                                            "'i16x8.replace_lane'", 
                                                            "'i32x4.extract_lane'", 
                                                            "'i32x4.replace_lane'", 
                                                            "'i64x2.extract_lane'", 
                                                            "'i64x2.replace_lane'", 
                                                            "'f32x4.extract_lane'", 
                                                            "'f32x4.replace_lane'", 
                                                            "'f64x2.extract_lane'", 
                                                            "'f64x2.replace_lane'", 
                                                            "'i8x16.eq'", 
                                                            "'i8x16.ne'", 
                                                            "'i8x16.lt_s'", 
                                                            "'i8x16.lt_u'", 
                                                            "'i8x16.gt_s'", 
                                                            "'i8x16.gt_u'", 
                                                            "'i8x16.le_s'", 
                                                            "'i8x16.le_u'", 
                                                            "'i8x16.ge_s'", 
                                                            "'i8x16.ge_u'", 
                                                            "'i16x8.eq'", 
                                                            "'i16x8.ne'", 
                                                            "'i16x8.lt_s'", 
                                                            "'i16x8.lt_u'", 
                                                            "'i16x8.gt_s'", 
                                                            "'i16x8.gt_u'", 
                                                            "'i16x8.le_s'", 
                                                            "'i16x8.le_u'", 
                                                            "'i16x8.ge_s'", 
                                                            "'i16x8.ge_u'", 
                                                            "'i32x4.eq'", 
                                                            "'i32x4.ne'", 
                                                            "'i32x4.lt_s'", 
                                                            "'i32x4.lt_u'", 
                                                            "'i32x4.gt_s'", 
                                                            "'i32x4.gt_u'", 
                                                            "'i32x4.le_s'", 
                                                            "'i32x4.le_u'", 
                                                            "'i32x4.ge_s'", 
                                                            "'i32x4.ge_u'", 
                                                            "'f32x4.eq'", 
                                                            "'f32x4.ne'", 
                                                            "'f32x4.lt'", 
                                                            "'f32x4.gt'", 
                                                            "'f32x4.le'", 
                                                            "'f32x4.ge'", 
                                                            "'f64x2.eq'", 
                                                            "'f64x2.ne'", 
                                                            "'f64x2.lt'", 
                                                            "'f64x2.gt'", 
                                                            "'f64x2.le'", 
                                                            "'f64x2.ge'", 
                                                            "'v128.not'", 
                                                            "'v128.and'", 
                                                            "'v128.andnot'", 
                                                            "'v128.or'", 
                                                            "'v128.xor'", 
                                                            "'v128.bitselect'", 
                                                            "'v128.any_true'", 
                                                            "'v128.load8_lane'", 
                                                            "'v128.load16_lane'", 
                                                            "'v128.load32_lane'", 
                                                            "'v128.load64_lane'", 
                                                            "'v128.store8_lane'", 
                                                            "'v128.store16_lane'", 
                                                            "'v128.store32_lane'", 
                                                            "'v128.store64_lane'", 
                                                            "'v128.load32_zero'", 
                                                            "'v128.load64_zero'", 
                                                            "'f32x4.demote_f64x2_zero'", 
                                                            "'f64x2.promote_low_f32x4'", 
                                                            "'i8x16.abs'", 
                                                            "'i8x16.neg'", 
                                                            "'i8x16.popcnt'", 
                                                            "'i8x16.all_true'", 
                                                            "'i8x16.bitmask'", 
                                                            "'i8x16.narrow_i16x8_s'", 
                                                            "'i8x16.narrow_i16x8_u'", 
                                                            "'f32x4.ceil'", 
                                                            "'f32x4.floor'", 
                                                            "'f32x4.trunc'", 
                                                            "'f32x4.nearest'", 
                                                            "'i8x16.shl'", 
                                                            "'i8x16.shr_s'", 
                                                            "'i8x16.shr_u'", 
                                                            "'i8x16.add'", 
                                                            "'i8x16.add_sat_s'", 
                                                            "'i8x16.add_sat_u'", 
                                                            "'i8x16.sub'", 
                                                            "'i8x16.sub_sat_s'", 
                                                            "'i8x16.sub_sat_u'", 
                                                            "'f64x2.ceil'", 
                                                            "'f64x2.floor'", 
                                                            "'i8x16.min_s'", 
                                                            "'i8x16.min_u'", 
                                                            "'i8x16.max_s'", 
                                                            "'i8x16.max_u'", 
                                                            "'f64x2.trunc'", 
                                                            "'i8x16.avgr_u'", 
                                                            "'i16x8.extadd_pairwise_i8x16_s'", 
                                                            "'i16x8.extadd_pairwise_i8x16_u'", 
                                                            "'i32x4.extadd_pairwise_i16x8_s'", 
                                                            "'i32x4.extadd_pairwise_i16x8_u'", 
                                                            "'i16x8.abs'", 
                                                            "'i16x8.neg'", 
                                                            "'i16x8.q15mulr_sat_s'", 
                                                            "'i16x8.all_true'", 
                                                            "'i16x8.bitmask'", 
                                                            "'i16x8.narrow_i32x4_s'", 
                                                            "'i16x8.narrow_i32x4_u'", 
                                                            "'i16x8.extend_low_i8x16_s'", 
                                                            "'i16x8.extend_high_i8x16_s'", 
                                                            "'i16x8.extend_low_i8x16_u'", 
                                                            "'i16x8.extend_high_i8x16_u'", 
                                                            "'i16x8.shl'", 
                                                            "'i16x8.shr_s'", 
                                                            "'i16x8.shr_u'", 
                                                            "'i16x8.add'", 
                                                            "'i16x8.add_sat_s'", 
                                                            "'i16x8.add_sat_u'", 
                                                            "'i16x8.sub'", 
                                                            "'i16x8.sub_sat_s'", 
                                                            "'i16x8.sub_sat_u'", 
                                                            "'f64x2.nearest'", 
                                                            "'i16x8.mul'", 
                                                            "'i16x8.min_s'", 
                                                            "'i16x8.min_u'", 
                                                            "'i16x8.max_s'", 
                                                            "'i16x8.max_u'", 
                                                            "'i16x8.avgr_u'", 
                                                            "'i16x8.extmul_low_i8x16_s'", 
                                                            "'i16x8.extmul_high_i8x16_s'", 
                                                            "'i16x8.extmul_low_i8x16_u'", 
                                                            "'i16x8.extmul_high_i8x16_u'", 
                                                            "'i32x4.abs'", 
                                                            "'i32x4.neg'", 
                                                            "'i32x4.all_true'", 
                                                            "'i32x4.bitmask'", 
                                                            "'i32x4.extend_low_i16x8_s'", 
                                                            "'i32x4.extend_high_i16x8_s'", 
                                                            "'i32x4.extend_low_i16x8_u'", 
                                                            "'i32x4.extend_high_i16x8_u'", 
                                                            "'i32x4.shl'", 
                                                            "'i32x4.shr_s'", 
                                                            "'i32x4.shr_u'", 
                                                            "'i32x4.add'", 
                                                            "'i32x4.sub'", 
                                                            "'i32x4.mul'", 
                                                            "'i32x4.min_s'", 
                                                            "'i32x4.min_u'", 
                                                            "'i32x4.max_s'", 
                                                            "'i32x4.max_u'", 
                                                            "'i32x4.dot_i16x8_s'", 
                                                            "'i32x4.extmul_low_i16x8_s'", 
                                                            "'i32x4.extmul_high_i16x8_s'", 
                                                            "'i32x4.extmul_low_i16x8_u'", 
                                                            "'i32x4.extmul_high_i16x8_u'", 
                                                            "'i64x2.abs'", 
                                                            "'i64x2.neg'", 
                                                            "'i64x2.all_true'", 
                                                            "'i64x2.bitmask'", 
                                                            "'i64x2.extend_low_i32x4_s'", 
                                                            "'i64x2.extend_high_i32x4_s'", 
                                                            "'i64x2.extend_low_i32x4_u'", 
                                                            "'i64x2.extend_high_i32x4_u'", 
                                                            "'i64x2.shl'", 
                                                            "'i64x2.shr_s'", 
                                                            "'i64x2.shr_u'", 
                                                            "'i64x2.add'", 
                                                            "'i64x2.sub'", 
                                                            "'i64x2.mul'", 
                                                            "'i64x2.eq'", 
                                                            "'i64x2.ne'", 
                                                            "'i64x2.lt_s'", 
                                                            "'i64x2.gt_s'", 
                                                            "'i64x2.le_s'", 
                                                            "'i64x2.ge_s'", 
                                                            "'i64x2.extmul_low_i32x4_s'", 
                                                            "'i64x2.extmul_high_i32x4_s'", 
                                                            "'i64x2.extmul_low_i32x4_u'", 
                                                            "'i64x2.extmul_high_i32x4_u'", 
                                                            "'f32x4.abs'", 
                                                            "'f32x4.neg'", 
                                                            "'f32x4.sqrt'", 
                                                            "'f32x4.add'", 
                                                            "'f32x4.sub'", 
                                                            "'f32x4.mul'", 
                                                            "'f32x4.div'", 
                                                            "'f32x4.min'", 
                                                            "'f32x4.max'", 
                                                            "'f32x4.pmin'", 
                                                            "'f32x4.pmax'", 
                                                            "'f64x2.abs'", 
                                                            "'f64x2.neg'", 
                                                            "'f64x2.sqrt'", 
                                                            "'f64x2.add'", 
                                                            "'f64x2.sub'", 
                                                            "'f64x2.mul'", 
                                                            "'f64x2.div'", 
                                                            "'f64x2.min'", 
                                                            "'f64x2.max'", 
                                                            "'f64x2.pmin'", 
                                                            "'f64x2.pmax'", 
                                                            "'i32x4.trunc_sat_f32x4_s'", 
                                                            "'i32x4.trunc_sat_f32x4_u'", 
                                                            "'f32x4.convert_i32x4_s'", 
                                                            "'f32x4.convert_i32x4_u'", 
                                                            "'i32x4.trunc_sat_f64x2_s_zero'", 
                                                            "'i32x4.trunc_sat_f64x2_u_zero'", 
                                                            "'f64x2.convert_low_i32x4_s'", 
                                                            "'f64x2.convert_low_i32x4_u'", 
                                                            "'try'", "'catch'", 
                                                            "'throw'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, "SELECT_T", 
                                                             "I8", "I16", 
                                                             "I32", "I64", 
                                                             "U8", "U16", 
                                                             "U32", "U64", 
                                                             "F32", "F64", 
                                                             "V128", "CHAR", 
                                                             "STRING", "BOOLEAN", 
                                                             "ANY", "VOID", 
                                                             "ATTRIBUTE", 
                                                             "CLASS", "ENUM", 
                                                             "EXTENDS", 
                                                             "FUNCTION", 
                                                             "STRUCT", "STATIC", 
                                                             "ABSTRACT", 
                                                             "NATIVE", "PUBLIC", 
                                                             "PROTECTED", 
                                                             "PRIVATE", 
                                                             "READONLY", 
                                                             "CONST", "LET", 
                                                             "NEW", "GET", 
                                                             "SET", "FROM", 
                                                             "SWITCH", "CASE", 
                                                             "FOR", "DO", 
                                                             "WHILE", "BREAK", 
                                                             "FINALLY", 
                                                             "THIS", "SUPER", 
                                                             "TYPE_OF", 
                                                             "INSTANCE_OF", 
                                                             "EXPORT", "IMPORT", 
                                                             "DEFAULT", 
                                                             "IN", "AS", 
                                                             "LPAR", "RPAR", 
                                                             "LBRAK", "RBRAK", 
                                                             "LCURL", "RCURL", 
                                                             "ARROW", "GT", 
                                                             "LT", "LTE", 
                                                             "GTE", "EQUALS", 
                                                             "NOT_EQUALS", 
                                                             "NOT", "AND", 
                                                             "OR", "QUESTION", 
                                                             "SEMI", "COLON", 
                                                             "COMMA", "ETC", 
                                                             "DOT", "AT", 
                                                             "INC", "DEC", 
                                                             "PLUS", "MINUS", 
                                                             "STAR", "SLASH", 
                                                             "BSLASH", "PERCENT", 
                                                             "CARET", "TILDE", 
                                                             "AMP", "PIPE", 
                                                             "LSHIFT", "RSHIFT", 
                                                             "URSHIFT", 
                                                             "ASSIGN", "ADD_ASSIGN", 
                                                             "SUB_ASSIGN", 
                                                             "MUL_ASSIGN", 
                                                             "DIV_ASSIGN", 
                                                             "AND_ASSIGN", 
                                                             "OR_ASSIGN", 
                                                             "XOR_ASSIGN", 
                                                             "MOD_ASSIGN", 
                                                             "LSHIFT_ASSIGN", 
                                                             "RSHIFT_ASSIGN", 
                                                             "URSHIFT_ASSIGN", 
                                                             "INTEGER_LITERAL", 
                                                             "DECIMAL_LITERAL", 
                                                             "BOOLEAN_LITERAL", 
                                                             "CHAR_LITERAL", 
                                                             "STRING_LITERAL", 
                                                             "NULL_LITERAL", 
                                                             "ANNOTATION", 
                                                             "WS", "COMMENT", 
                                                             "LINE_COMMENT", 
                                                             "UNREACHABLE", 
                                                             "NOP", "BLOCK", 
                                                             "LOOP", "IF", 
                                                             "ELSE", "END", 
                                                             "BR", "BR_IF", 
                                                             "BR_TABLE", 
                                                             "RETURN", "CALL", 
                                                             "CALL_INDIRECT", 
                                                             "RETURN_CALL", 
                                                             "RETURN_CALL_INDIRECT", 
                                                             "CALL_REF", 
                                                             "RETURN_CALL_REF", 
                                                             "DROP", "SELECT", 
                                                             "LOCAL_GET", 
                                                             "LOCAL_SET", 
                                                             "LOCAL_TEE", 
                                                             "GLOBAL_GET", 
                                                             "GLOBAL_SET", 
                                                             "TABLE_GET", 
                                                             "TABLE_SET", 
                                                             "I32_LOAD", 
                                                             "I64_LOAD", 
                                                             "F32_LOAD", 
                                                             "F64_LOAD", 
                                                             "I32_LOAD8_S", 
                                                             "I32_LOAD8_U", 
                                                             "I32_LOAD16_S", 
                                                             "I32_LOAD16_U", 
                                                             "I64_LOAD8_S", 
                                                             "I64_LOAD8_U", 
                                                             "I64_LOAD16_S", 
                                                             "I64_LOAD16_U", 
                                                             "I64_LOAD32_S", 
                                                             "I64_LOAD32_U", 
                                                             "I32_STORE", 
                                                             "I64_STORE", 
                                                             "F32_STORE", 
                                                             "F64_STORE", 
                                                             "I32_STORE8", 
                                                             "I32_STORE16", 
                                                             "I64_STORE8", 
                                                             "I64_STORE16", 
                                                             "I64_STORE32", 
                                                             "MEMORY_SIZE", 
                                                             "MEMORY_GROW", 
                                                             "I32_CONST", 
                                                             "I64_CONST", 
                                                             "F32_CONST", 
                                                             "F64_CONST", 
                                                             "I32_EQZ", 
                                                             "I32_EQ", "I32_NE", 
                                                             "I32_LT_S", 
                                                             "I32_LT_U", 
                                                             "I32_GT_S", 
                                                             "I32_GT_U", 
                                                             "I32_LE_S", 
                                                             "I32_LE_U", 
                                                             "I32_GE_S", 
                                                             "I32_GE_U", 
                                                             "I64_EQZ", 
                                                             "I64_EQ", "I64_NE", 
                                                             "I64_LT_S", 
                                                             "I64_LT_U", 
                                                             "I64_GT_S", 
                                                             "I64_GT_U", 
                                                             "I64_LE_S", 
                                                             "I64_LE_U", 
                                                             "I64_GE_S", 
                                                             "I64_GE_U", 
                                                             "F32_EQ", "F32_NE", 
                                                             "F32_LT", "F32_GT", 
                                                             "F32_LE", "F32_GE", 
                                                             "F64_EQ", "F64_NE", 
                                                             "F64_LT", "F64_GT", 
                                                             "F64_LE", "F64_GE", 
                                                             "I32_CLZ", 
                                                             "I32_CTZ", 
                                                             "I32_POPCNT", 
                                                             "I32_ADD", 
                                                             "I32_SUB", 
                                                             "I32_MUL", 
                                                             "I32_DIV_S", 
                                                             "I32_DIV_U", 
                                                             "I32_REM_S", 
                                                             "I32_REM_U", 
                                                             "I32_AND", 
                                                             "I32_OR", "I32_XOR", 
                                                             "I32_SHL", 
                                                             "I32_SHR_S", 
                                                             "I32_SHR_U", 
                                                             "I32_ROTL", 
                                                             "I32_ROTR", 
                                                             "I64_CLZ", 
                                                             "I64_CTZ", 
                                                             "I64_POPCNT", 
                                                             "I64_ADD", 
                                                             "I64_SUB", 
                                                             "I64_MUL", 
                                                             "I64_DIV_S", 
                                                             "I64_DIV_U", 
                                                             "I64_REM_S", 
                                                             "I64_REM_U", 
                                                             "I64_AND", 
                                                             "I64_OR", "I64_XOR", 
                                                             "I64_SHL", 
                                                             "I64_SHR_S", 
                                                             "I64_SHR_U", 
                                                             "I64_ROTL", 
                                                             "I64_ROTR", 
                                                             "F32_ABS", 
                                                             "F32_NEG", 
                                                             "F32_CEIL", 
                                                             "F32_FLOOR", 
                                                             "F32_TRUNC", 
                                                             "F32_NEAREST", 
                                                             "F32_SQRT", 
                                                             "F32_ADD", 
                                                             "F32_SUB", 
                                                             "F32_MUL", 
                                                             "F32_DIV", 
                                                             "F32_MIN", 
                                                             "F32_MAX", 
                                                             "F32_COPYSIGN", 
                                                             "F64_ABS", 
                                                             "F64_NEG", 
                                                             "F64_CEIL", 
                                                             "F64_FLOOR", 
                                                             "F64_TRUNC", 
                                                             "F64_NEAREST", 
                                                             "F64_SQRT", 
                                                             "F64_ADD", 
                                                             "F64_SUB", 
                                                             "F64_MUL", 
                                                             "F64_DIV", 
                                                             "F64_MIN", 
                                                             "F64_MAX", 
                                                             "F64_COPYSIGN", 
                                                             "I32_WRAP_I64", 
                                                             "I32_TRUNC_F32_S", 
                                                             "I32_TRUNC_F32_U", 
                                                             "I32_TRUNC_F64_S", 
                                                             "I32_TRUNC_F64_U", 
                                                             "I64_EXTEND_I32_S", 
                                                             "I64_EXTEND_I32_U", 
                                                             "I64_TRUNC_F32_S", 
                                                             "I64_TRUNC_F32_U", 
                                                             "I64_TRUNC_F64_S", 
                                                             "I64_TRUNC_F64_U", 
                                                             "F32_CONVERT_I32_S", 
                                                             "F32_CONVERT_I32_U", 
                                                             "F32_CONVERT_I64_S", 
                                                             "F32_CONVERT_I64_U", 
                                                             "F32_DEMOTE_F64", 
                                                             "F64_CONVERT_I32_S", 
                                                             "F64_CONVERT_I32_U", 
                                                             "F64_CONVERT_I64_S", 
                                                             "F64_CONVERT_I64_U", 
                                                             "F64_PROMOTE_F32", 
                                                             "I32_REINTERPRET_F32", 
                                                             "I64_REINTERPRET_F64", 
                                                             "F32_REINTERPRET_I32", 
                                                             "F64_REINTERPRET_I64", 
                                                             "I32_EXTEND8_S", 
                                                             "I32_EXTEND16_S", 
                                                             "I64_EXTEND8_S", 
                                                             "I64_EXTEND16_S", 
                                                             "I64_EXTEND32_S", 
                                                             "REF_NULL", 
                                                             "REF_IS_NULL", 
                                                             "REF_FUNC", 
                                                             "REF_EQ", "REF_AS_NON_NULL", 
                                                             "BR_ON_NULL", 
                                                             "BR_ON_NON_NULL", 
                                                             "STRUCT_NEW", 
                                                             "STRUCT_NEW_DEFAULT", 
                                                             "STRUCT_GET", 
                                                             "STRUCT_GETS", 
                                                             "STRUCT_GETU", 
                                                             "STRUCT_SET", 
                                                             "ARRAY_NEW", 
                                                             "ARRAY_NEWDEFAULT", 
                                                             "ARRAY_NEW_FIXED", 
                                                             "ARRAY_NEW_DATA", 
                                                             "ARRAY_NEW_ELEM", 
                                                             "ARRAY_GET", 
                                                             "ARRAY_GETS", 
                                                             "ARRAY_GETU", 
                                                             "ARRAY_SET", 
                                                             "ARRAY_LEN", 
                                                             "ARRAY_FILL", 
                                                             "ARRAY_COPY", 
                                                             "ARRAY_INIT_DATA", 
                                                             "ARRAY_INIT_ELEM", 
                                                             "REF_TEST", 
                                                             "REFCAST_NULL", 
                                                             "BR_ON_CAST", 
                                                             "BR_ON_CAST_FAIL", 
                                                             "ANY_CONVERT_EXTERN", 
                                                             "EXTERN_CONVERT_ANY", 
                                                             "REF_I31", 
                                                             "I31GETS", 
                                                             "I31GETU", 
                                                             "I32_TRUNC_SAT_F32_S", 
                                                             "I32_TRUNC_SAT_F32_U", 
                                                             "I32_TRUNC_SAT_F64_S", 
                                                             "I32_TRUNC_SAT_F64_U", 
                                                             "I64_TRUNC_SAT_F32_S", 
                                                             "I64_TRUNC_SAT_F32_U", 
                                                             "I64_TRUNC_SAT_F64_S", 
                                                             "I64_TRUNC_SAT_F64_U", 
                                                             "MEMORY_INIT", 
                                                             "DATA_DROP", 
                                                             "MEMORY_COPY", 
                                                             "MEMORY_FILL", 
                                                             "TABLE_INIT", 
                                                             "ELEM_DROP", 
                                                             "TABLE_COPY", 
                                                             "TABLE_GROW", 
                                                             "TABLE_SIZE", 
                                                             "TABLE_FILL", 
                                                             "V128_LOAD", 
                                                             "V128_LOAD8X8_S", 
                                                             "V128_LOAD8X8_U", 
                                                             "V128_LOAD16X4_S", 
                                                             "V128_LOAD16X4_U", 
                                                             "V128_LOAD32X2_S", 
                                                             "V128_LOAD32X2_U", 
                                                             "V128_LOAD8_SPLAT", 
                                                             "V128_LOAD16_SPLAT", 
                                                             "V128_LOAD32_SPLAT", 
                                                             "V128_LOAD64_SPLAT", 
                                                             "V128_STORE", 
                                                             "V128_CONST", 
                                                             "I8X16_SHUFFLE", 
                                                             "I8X16_SWIZZLE", 
                                                             "I8X16_SPLAT", 
                                                             "I16X8_SPLAT", 
                                                             "I32X4_SPLAT", 
                                                             "I64X2_SPLAT", 
                                                             "F32X4_SPLAT", 
                                                             "F64X2_SPLAT", 
                                                             "I8X16_EXTRACT_LANE_S", 
                                                             "I8X16_EXTRACT_LANE_U", 
                                                             "I8X16_REPLACE_LANE", 
                                                             "I16X8_EXTRACT_LANE_S", 
                                                             "I16X8_EXTRACT_LANE_U", 
                                                             "I16X8_REPLACE_LANE", 
                                                             "I32X4_EXTRACT_LANE", 
                                                             "I32X4_REPLACE_LANE", 
                                                             "I64X2_EXTRACT_LANE", 
                                                             "I64X2_REPLACE_LANE", 
                                                             "F32X4_EXTRACT_LANE", 
                                                             "F32X4_REPLACE_LANE", 
                                                             "F64X2_EXTRACT_LANE", 
                                                             "F64X2_REPLACE_LANE", 
                                                             "I8X16_EQ", 
                                                             "I8X16_NE", 
                                                             "I8X16_LT_S", 
                                                             "I8X16_LT_U", 
                                                             "I8X16_GT_S", 
                                                             "I8X16_GT_U", 
                                                             "I8X16_LE_S", 
                                                             "I8X16_LE_U", 
                                                             "I8X16_GE_S", 
                                                             "I8X16_GE_U", 
                                                             "I16X8_EQ", 
                                                             "I16X8_NE", 
                                                             "I16X8_LT_S", 
                                                             "I16X8_LT_U", 
                                                             "I16X8_GT_S", 
                                                             "I16X8_GT_U", 
                                                             "I16X8_LE_S", 
                                                             "I16X8_LE_U", 
                                                             "I16X8_GE_S", 
                                                             "I16X8_GE_U", 
                                                             "I32X4_EQ", 
                                                             "I32X4_NE", 
                                                             "I32X4_LT_S", 
                                                             "I32X4_LT_U", 
                                                             "I32X4_GT_S", 
                                                             "I32X4_GT_U", 
                                                             "I32X4_LE_S", 
                                                             "I32X4_LE_U", 
                                                             "I32X4_GE_S", 
                                                             "I32X4_GE_U", 
                                                             "F32X4_EQ", 
                                                             "F32X4_NE", 
                                                             "F32X4_LT", 
                                                             "F32X4_GT", 
                                                             "F32X4_LE", 
                                                             "F32X4_GE", 
                                                             "F64X2_EQ", 
                                                             "F64X2_NE", 
                                                             "F64X2_LT", 
                                                             "F64X2_GT", 
                                                             "F64X2_LE", 
                                                             "F64X2_GE", 
                                                             "V128_NOT", 
                                                             "V128_AND", 
                                                             "V128_ANDNOT", 
                                                             "V128_OR", 
                                                             "V128_XOR", 
                                                             "V128_BITSELECT", 
                                                             "V128_ANY_TRUE", 
                                                             "V128_LOAD8_LANE", 
                                                             "V128_LOAD16_LANE", 
                                                             "V128_LOAD32_LANE", 
                                                             "V128_LOAD64_LANE", 
                                                             "V128_STORE8_LANE", 
                                                             "V128_STORE16_LANE", 
                                                             "V128_STORE32_LANE", 
                                                             "V128_STORE64_LANE", 
                                                             "V128_LOAD32_ZERO", 
                                                             "V128_LOAD64_ZERO", 
                                                             "F32X4_DEMOTE_F64X2_ZERO", 
                                                             "F64X2_PROMOTE_LOW_F32X4", 
                                                             "I8X16_ABS", 
                                                             "I8X16_NEG", 
                                                             "I8X16_POPCNT", 
                                                             "I8X16_ALL_TRUE", 
                                                             "I8X16_BITMASK", 
                                                             "I8X16_NARROW_I16X8_S", 
                                                             "I8X16_NARROW_I16X8_U", 
                                                             "F32X4_CEIL", 
                                                             "F32X4_FLOOR", 
                                                             "F32X4_TRUNC", 
                                                             "F32X4_NEAREST", 
                                                             "I8X16_SHL", 
                                                             "I8X16_SHR_S", 
                                                             "I8X16_SHR_U", 
                                                             "I8X16_ADD", 
                                                             "I8X16_ADD_SAT_S", 
                                                             "I8X16_ADD_SAT_U", 
                                                             "I8X16_SUB", 
                                                             "I8X16_SUB_SAT_S", 
                                                             "I8X16_SUB_SAT_U", 
                                                             "F64X2_CEIL", 
                                                             "F64X2_FLOOR", 
                                                             "I8X16_MIN_S", 
                                                             "I8X16_MIN_U", 
                                                             "I8X16_MAX_S", 
                                                             "I8X16_MAX_U", 
                                                             "F64X2_TRUNC", 
                                                             "I8X16_AVGR_U", 
                                                             "I16X8_EXTADD_PAIRWISE_I8X16_S", 
                                                             "I16X8_EXTADD_PAIRWISE_I8X16_U", 
                                                             "I32X4_EXTADD_PAIRWISE_I16X8_S", 
                                                             "I32X4_EXTADD_PAIRWISE_I16X8_U", 
                                                             "I16X8_ABS", 
                                                             "I16X8_NEG", 
                                                             "I16X8_Q15MULR_SAT_S", 
                                                             "I16X8_ALL_TRUE", 
                                                             "I16X8_BITMASK", 
                                                             "I16X8_NARROW_I32X4_S", 
                                                             "I16X8_NARROW_I32X4_U", 
                                                             "I16X8_EXTEND_LOW_I8X16_S", 
                                                             "I16X8_EXTEND_HIGH_I8X16_S", 
                                                             "I16X8_EXTEND_LOW_I8X16_U", 
                                                             "I16X8_EXTEND_HIGH_I8X16_U", 
                                                             "I16X8_SHL", 
                                                             "I16X8_SHR_S", 
                                                             "I16X8_SHR_U", 
                                                             "I16X8_ADD", 
                                                             "I16X8_ADD_SAT_S", 
                                                             "I16X8_ADD_SAT_U", 
                                                             "I16X8_SUB", 
                                                             "I16X8_SUB_SAT_S", 
                                                             "I16X8_SUB_SAT_U", 
                                                             "F64X2_NEAREST", 
                                                             "I16X8_MUL", 
                                                             "I16X8_MIN_S", 
                                                             "I16X8_MIN_U", 
                                                             "I16X8_MAX_S", 
                                                             "I16X8_MAX_U", 
                                                             "I16X8_AVGR_U", 
                                                             "I16X8_EXTMUL_LOW_I8X16_S", 
                                                             "I16X8_EXTMUL_HIGH_I8X16_S", 
                                                             "I16X8_EXTMUL_LOW_I8X16_U", 
                                                             "I16X8_EXTMUL_HIGH_I8X16_U", 
                                                             "I32X4_ABS", 
                                                             "I32X4_NEG", 
                                                             "I32X4_ALL_TRUE", 
                                                             "I32X4_BITMASK", 
                                                             "I32X4_EXTEND_LOW_I16X8_S", 
                                                             "I32X4_EXTEND_HIGH_I16X8_S", 
                                                             "I32X4_EXTEND_LOW_I16X8_U", 
                                                             "I32X4_EXTEND_HIGH_I16X8_U", 
                                                             "I32X4_SHL", 
                                                             "I32X4_SHR_S", 
                                                             "I32X4_SHR_U", 
                                                             "I32X4_ADD", 
                                                             "I32X4_SUB", 
                                                             "I32X4_MUL", 
                                                             "I32X4_MIN_S", 
                                                             "I32X4_MIN_U", 
                                                             "I32X4_MAX_S", 
                                                             "I32X4_MAX_U", 
                                                             "I32X4_DOT_I16X8_S", 
                                                             "I32X4_EXTMUL_LOW_I16X8_S", 
                                                             "I32X4_EXTMUL_HIGH_I16X8_S", 
                                                             "I32X4_EXTMUL_LOW_I16X8_U", 
                                                             "I32X4_EXTMUL_HIGH_I16X8_U", 
                                                             "I64X2_ABS", 
                                                             "I64X2_NEG", 
                                                             "I64X2_ALL_TRUE", 
                                                             "I64X2_BITMASK", 
                                                             "I64X2_EXTEND_LOW_I32X4_S", 
                                                             "I64X2_EXTEND_HIGH_I32X4_S", 
                                                             "I64X2_EXTEND_LOW_I32X4_U", 
                                                             "I64X2_EXTEND_HIGH_I32X4_U", 
                                                             "I64X2_SHL", 
                                                             "I64X2_SHR_S", 
                                                             "I64X2_SHR_U", 
                                                             "I64X2_ADD", 
                                                             "I64X2_SUB", 
                                                             "I64X2_MUL", 
                                                             "I64X2_EQ", 
                                                             "I64X2_NE", 
                                                             "I64X2_LT_S", 
                                                             "I64X2_GT_S", 
                                                             "I64X2_LE_S", 
                                                             "I64X2_GE_S", 
                                                             "I64X2_EXTMUL_LOW_I32X4_S", 
                                                             "I64X2_EXTMUL_HIGH_I32X4_S", 
                                                             "I64X2_EXTMUL_LOW_I32X4_U", 
                                                             "I64X2_EXTMUL_HIGH_I32X4_U", 
                                                             "F32X4_ABS", 
                                                             "F32X4_NEG", 
                                                             "F32X4_SQRT", 
                                                             "F32X4_ADD", 
                                                             "F32X4_SUB", 
                                                             "F32X4_MUL", 
                                                             "F32X4_DIV", 
                                                             "F32X4_MIN", 
                                                             "F32X4_MAX", 
                                                             "F32X4_PMIN", 
                                                             "F32X4_PMAX", 
                                                             "F64X2_ABS", 
                                                             "F64X2_NEG", 
                                                             "F64X2_SQRT", 
                                                             "F64X2_ADD", 
                                                             "F64X2_SUB", 
                                                             "F64X2_MUL", 
                                                             "F64X2_DIV", 
                                                             "F64X2_MIN", 
                                                             "F64X2_MAX", 
                                                             "F64X2_PMIN", 
                                                             "F64X2_PMAX", 
                                                             "I32X4_TRUNC_SAT_F32X4_S", 
                                                             "I32X4_TRUNC_SAT_F32X4_U", 
                                                             "F32X4_CONVERT_I32X4_S", 
                                                             "F32X4_CONVERT_I32X4_U", 
                                                             "I32X4_TRUNC_SAT_F64X2_S_ZERO", 
                                                             "I32X4_TRUNC_SAT_F64X2_U_ZERO", 
                                                             "F64X2_CONVERT_LOW_I32X4_S", 
                                                             "F64X2_CONVERT_LOW_I32X4_U", 
                                                             "TRY", "CATCH", 
                                                             "THROW", "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "preamble", "import_statement", "import_source", "compilation_atom", 
		"global_statement", "declaration", "enum_declaration", "enum_item", "attribute_declaration", 
		"identifier", "annotation", "value_type", "mutable_value_type_or_null", 
		"value_type_or_null", "native_type", "any_type", "boolean_type", "char_type", 
		"number_type", "integer_type", "decimal_type", "i8_type", "i16_type", 
		"i32_type", "i64_type", "u8_type", "u16_type", "u32_type", "u64_type", 
		"f32_type", "f64_type", "string_type", "void_type", "attribute_type", 
		"attribute_type_or_null", "attribute_ref", "user_type", "user_ref", "function_type", 
		"function_type_or_null", "return_type", "return_types", "parameter", "class_declaration", 
		"struct_declaration", "accessibility", "field_declaration", "function_declaration", 
		"abstract_function_declaration", "concrete_function_declaration", "native_function_declaration", 
		"function_prototype", "generic_parameter", "statement", "embeddable_statement", 
		"standalone_statement", "unary_statement", "throw_statement", "try_statement", 
		"catch_clause", "catch_all_clause", "finally_clause", "break_statement", 
		"for_statement", "while_statement", "do_while_statement", "if_statement", 
		"statements", "function_call_statement", "declare_instances_statement", 
		"declare_one", "assign_instance_statement", "assign_op", "assign_item_statement", 
		"return_statement", "expression", "function_call", "literal_expression", 
		"list_literal", "set_literal", "map_literal", "map_entry", "instruction", 
		"opcode", "plain_opcode", "keyword_opcode", "composite_opcode",
	];
	public get grammarFileName(): string { return "ComposeParser.g4"; }
	public get literalNames(): (string | null)[] { return ComposeParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return ComposeParser.symbolicNames; }
	public get ruleNames(): string[] { return ComposeParser.ruleNames; }
	public get serializedATN(): number[] { return ComposeParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, ComposeParser._ATN, ComposeParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public compilation_unit(): Compilation_unitContext {
		let localctx: Compilation_unitContext = new Compilation_unitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ComposeParser.RULE_compilation_unit);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 176;
			this.preamble();
			this.state = 180;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 177;
					this.compilation_atom();
					}
					}
				}
				this.state = 182;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public preamble(): PreambleContext {
		let localctx: PreambleContext = new PreambleContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ComposeParser.RULE_preamble);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 186;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 183;
					this.import_statement();
					}
					}
				}
				this.state = 188;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_statement(): Import_statementContext {
		let localctx: Import_statementContext = new Import_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ComposeParser.RULE_import_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 189;
			this.match(ComposeParser.IMPORT);
			this.state = 216;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 113:
			case 114:
			case 115:
			case 116:
			case 119:
			case 120:
			case 121:
			case 122:
			case 124:
			case 125:
			case 130:
			case 131:
			case 589:
				{
				this.state = 190;
				localctx._main = this.identifier();
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===72) {
					{
					this.state = 191;
					this.match(ComposeParser.COMMA);
					this.state = 192;
					this.match(ComposeParser.LCURL);
					this.state = 193;
					this.identifier();
					this.state = 198;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===72) {
						{
						{
						this.state = 194;
						this.match(ComposeParser.COMMA);
						this.state = 195;
						this.identifier();
						}
						}
						this.state = 200;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 201;
					this.match(ComposeParser.RCURL);
					}
				}

				}
				break;
			case 57:
				{
				this.state = 205;
				this.match(ComposeParser.LCURL);
				this.state = 206;
				this.identifier();
				this.state = 211;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 207;
					this.match(ComposeParser.COMMA);
					this.state = 208;
					this.identifier();
					}
					}
					this.state = 213;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 214;
				this.match(ComposeParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 218;
			this.match(ComposeParser.FROM);
			this.state = 219;
			this.import_source();
			this.state = 220;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public import_source(): Import_sourceContext {
		let localctx: Import_sourceContext = new Import_sourceContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, ComposeParser.RULE_import_source);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 222;
			this.match(ComposeParser.STRING_LITERAL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public compilation_atom(): Compilation_atomContext {
		let localctx: Compilation_atomContext = new Compilation_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ComposeParser.RULE_compilation_atom);
		try {
			this.state = 226;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 224;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 225;
				this.global_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public global_statement(): Global_statementContext {
		let localctx: Global_statementContext = new Global_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ComposeParser.RULE_global_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===109) {
				{
				{
				this.state = 228;
				this.annotation();
				}
				}
				this.state = 233;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===48) {
				{
				this.state = 234;
				this.match(ComposeParser.EXPORT);
				this.state = 236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===50) {
					{
					this.state = 235;
					this.match(ComposeParser.DEFAULT);
					}
				}

				}
			}

			this.state = 240;
			this.declare_instances_statement();
			this.state = 241;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ComposeParser.RULE_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 246;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 243;
					this.annotation();
					}
					}
				}
				this.state = 248;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 253;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 249;
				this.match(ComposeParser.EXPORT);
				this.state = 251;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 250;
					this.match(ComposeParser.DEFAULT);
					}
					break;
				}
				}
				break;
			}
			this.state = 260;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 256;
				this.struct_declaration();
				}
				break;
			case 3:
				{
				this.state = 257;
				this.class_declaration();
				}
				break;
			case 4:
				{
				this.state = 258;
				this.function_declaration(false);
				}
				break;
			case 5:
				{
				this.state = 259;
				this.enum_declaration();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_declaration(): Enum_declarationContext {
		let localctx: Enum_declarationContext = new Enum_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ComposeParser.RULE_enum_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 262;
			this.match(ComposeParser.ENUM);
			this.state = 263;
			this.identifier();
			this.state = 264;
			this.match(ComposeParser.LCURL);
			this.state = 265;
			this.enum_item();
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===72) {
				{
				{
				this.state = 266;
				this.match(ComposeParser.COMMA);
				this.state = 267;
				this.enum_item();
				}
				}
				this.state = 272;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 273;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public enum_item(): Enum_itemContext {
		let localctx: Enum_itemContext = new Enum_itemContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ComposeParser.RULE_enum_item);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.identifier();
			this.state = 276;
			this.match(ComposeParser.ASSIGN);
			this.state = 277;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_declaration(): Attribute_declarationContext {
		let localctx: Attribute_declarationContext = new Attribute_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 18, ComposeParser.RULE_attribute_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.match(ComposeParser.ATTRIBUTE);
			this.state = 280;
			this.identifier();
			this.state = 281;
			this.match(ComposeParser.COLON);
			this.state = 282;
			this.value_type_or_null();
			this.state = 283;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let localctx: IdentifierContext = new IdentifierContext(this, this._ctx, this.state);
		this.enterRule(localctx, 20, ComposeParser.RULE_identifier);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 589:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 285;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 1:
			case 113:
			case 114:
			case 115:
			case 116:
			case 119:
			case 120:
			case 121:
			case 122:
			case 124:
			case 125:
			case 130:
			case 131:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 286;
				this.plain_opcode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public annotation(): AnnotationContext {
		let localctx: AnnotationContext = new AnnotationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 22, ComposeParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 289;
			this.match(ComposeParser.ANNOTATION);
			this.state = 294;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 290;
				this.match(ComposeParser.LPAR);
				this.state = 291;
				this.literal_expression();
				this.state = 292;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public value_type(): Value_typeContext;
	public value_type(_p: number): Value_typeContext;
	// @RuleVersion(0)
	public value_type(_p?: number): Value_typeContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: Value_typeContext = new Value_typeContext(this, this._ctx, _parentState);
		let _prevctx: Value_typeContext = localctx;
		let _startState: number = 24;
		this.enterRecursionRule(localctx, 24, ComposeParser.RULE_value_type, _p);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				localctx = new NativeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 297;
				this.native_type();
				}
				break;
			case 2:
				{
				localctx = new UserTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 298;
				this.user_type();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 309;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 307;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						localctx = new ArrayTypeContext(this, new Value_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_value_type);
						this.state = 301;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 302;
						this.match(ComposeParser.LBRAK);
						this.state = 303;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 2:
						{
						localctx = new SetTypeContext(this, new Value_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_value_type);
						this.state = 304;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 305;
						this.match(ComposeParser.LT);
						this.state = 306;
						this.match(ComposeParser.GT);
						}
						break;
					}
					}
				}
				this.state = 311;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public mutable_value_type_or_null(): Mutable_value_type_or_nullContext {
		let localctx: Mutable_value_type_or_nullContext = new Mutable_value_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ComposeParser.RULE_mutable_value_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 312;
				this.match(ComposeParser.READONLY);
				}
				break;
			}
			this.state = 315;
			this.value_type_or_null();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value_type_or_null(): Value_type_or_nullContext {
		let localctx: Value_type_or_nullContext = new Value_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ComposeParser.RULE_value_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
			this.value_type(0);
			this.state = 321;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				{
				{
				this.state = 318;
				this.match(ComposeParser.PIPE);
				this.state = 319;
				this.match(ComposeParser.NULL_LITERAL);
				}
				}
				break;
			case 2:
				{
				this.state = 320;
				this.match(ComposeParser.QUESTION);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_type(): Native_typeContext {
		let localctx: Native_typeContext = new Native_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, ComposeParser.RULE_native_type);
		try {
			this.state = 328;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 15:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 323;
				this.boolean_type();
				}
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 324;
				this.number_type();
				}
				break;
			case 13:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 325;
				this.char_type();
				}
				break;
			case 14:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 326;
				this.string_type();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 327;
				this.any_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public any_type(): Any_typeContext {
		let localctx: Any_typeContext = new Any_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ComposeParser.RULE_any_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
			this.match(ComposeParser.ANY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public boolean_type(): Boolean_typeContext {
		let localctx: Boolean_typeContext = new Boolean_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ComposeParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
			this.match(ComposeParser.BOOLEAN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public char_type(): Char_typeContext {
		let localctx: Char_typeContext = new Char_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 36, ComposeParser.RULE_char_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 334;
			this.match(ComposeParser.CHAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public number_type(): Number_typeContext {
		let localctx: Number_typeContext = new Number_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 38, ComposeParser.RULE_number_type);
		try {
			this.state = 338;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 336;
				this.integer_type();
				}
				break;
			case 10:
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 337;
				this.decimal_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public integer_type(): Integer_typeContext {
		let localctx: Integer_typeContext = new Integer_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ComposeParser.RULE_integer_type);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 340;
				this.i8_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 341;
				this.i16_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 342;
				this.i32_type();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 343;
				this.i64_type();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 344;
				this.u8_type();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 345;
				this.u16_type();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 346;
				this.u32_type();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 347;
				this.u64_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public decimal_type(): Decimal_typeContext {
		let localctx: Decimal_typeContext = new Decimal_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, ComposeParser.RULE_decimal_type);
		try {
			this.state = 352;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 350;
				this.f32_type();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 351;
				this.f64_type();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public i8_type(): I8_typeContext {
		let localctx: I8_typeContext = new I8_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ComposeParser.RULE_i8_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 354;
			this.match(ComposeParser.I8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public i16_type(): I16_typeContext {
		let localctx: I16_typeContext = new I16_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, ComposeParser.RULE_i16_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			this.match(ComposeParser.I16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public i32_type(): I32_typeContext {
		let localctx: I32_typeContext = new I32_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, ComposeParser.RULE_i32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 358;
			this.match(ComposeParser.I32);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public i64_type(): I64_typeContext {
		let localctx: I64_typeContext = new I64_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, ComposeParser.RULE_i64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			this.match(ComposeParser.I64);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public u8_type(): U8_typeContext {
		let localctx: U8_typeContext = new U8_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 52, ComposeParser.RULE_u8_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 362;
			this.match(ComposeParser.U8);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public u16_type(): U16_typeContext {
		let localctx: U16_typeContext = new U16_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, ComposeParser.RULE_u16_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this.match(ComposeParser.U16);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public u32_type(): U32_typeContext {
		let localctx: U32_typeContext = new U32_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, ComposeParser.RULE_u32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 366;
			this.match(ComposeParser.U32);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public u64_type(): U64_typeContext {
		let localctx: U64_typeContext = new U64_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, ComposeParser.RULE_u64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this.match(ComposeParser.U64);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public f32_type(): F32_typeContext {
		let localctx: F32_typeContext = new F32_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, ComposeParser.RULE_f32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 370;
			this.match(ComposeParser.F32);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public f64_type(): F64_typeContext {
		let localctx: F64_typeContext = new F64_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ComposeParser.RULE_f64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 372;
			this.match(ComposeParser.F64);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public string_type(): String_typeContext {
		let localctx: String_typeContext = new String_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ComposeParser.RULE_string_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 374;
			this.match(ComposeParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public void_type(): Void_typeContext {
		let localctx: Void_typeContext = new Void_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, ComposeParser.RULE_void_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 376;
			this.match(ComposeParser.VOID);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_type(): Attribute_typeContext {
		let localctx: Attribute_typeContext = new Attribute_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 68, ComposeParser.RULE_attribute_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 378;
			this.attribute_ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_type_or_null(): Attribute_type_or_nullContext {
		let localctx: Attribute_type_or_nullContext = new Attribute_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 70, ComposeParser.RULE_attribute_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 380;
			this.attribute_type();
			this.state = 383;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 381;
				this.match(ComposeParser.PIPE);
				this.state = 382;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public attribute_ref(): Attribute_refContext {
		let localctx: Attribute_refContext = new Attribute_refContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, ComposeParser.RULE_attribute_ref);
		try {
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 385;
				if (!( this.willBeLowercase() )) {
					throw this.createFailedPredicateException(" this.willBeLowercase() ");
				}
				this.state = 386;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 387;
				this.plain_opcode();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public user_type(): User_typeContext {
		let localctx: User_typeContext = new User_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, ComposeParser.RULE_user_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 390;
			this.user_ref();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public user_ref(): User_refContext {
		let localctx: User_refContext = new User_refContext(this, this._ctx, this.state);
		this.enterRule(localctx, 76, ComposeParser.RULE_user_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 392;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 393;
			this.match(ComposeParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_type(): Function_typeContext {
		let localctx: Function_typeContext = new Function_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, ComposeParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 408;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 395;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 396;
				this.match(ComposeParser.LPAR);
				this.state = 405;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
				case 1:
					{
					this.state = 397;
					this.parameter();
					this.state = 402;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===72) {
						{
						{
						this.state = 398;
						this.match(ComposeParser.COMMA);
						this.state = 399;
						this.parameter();
						}
						}
						this.state = 404;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 407;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 410;
			this.match(ComposeParser.ARROW);
			this.state = 411;
			this.return_types();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_type_or_null(): Function_type_or_nullContext {
		let localctx: Function_type_or_nullContext = new Function_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 80, ComposeParser.RULE_function_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 413;
			this.function_type();
			this.state = 416;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 414;
				this.match(ComposeParser.PIPE);
				this.state = 415;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_type(requireParenthesis: boolean): Return_typeContext {
		let localctx: Return_typeContext = new Return_typeContext(this, this._ctx, this.state, requireParenthesis);
		this.enterRule(localctx, 82, ComposeParser.RULE_return_type);
		try {
			this.state = 426;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 418;
				this.value_type_or_null();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 419;
				this.attribute_type_or_null();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 420;
				if (!( !localctx.requireParenthesis )) {
					throw this.createFailedPredicateException(" !$requireParenthesis ");
				}
				this.state = 421;
				this.function_type_or_null();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 422;
				this.match(ComposeParser.LPAR);
				this.state = 423;
				this.function_type_or_null();
				this.state = 424;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_types(): Return_typesContext {
		let localctx: Return_typesContext = new Return_typesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 437;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 428;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 429;
				this.return_type(true);
				this.state = 434;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 430;
						this.match(ComposeParser.COMMA);
						this.state = 431;
						this.return_type(false);
						}
						}
					}
					this.state = 436;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 33, this._ctx);
				}
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public parameter(): ParameterContext {
		let localctx: ParameterContext = new ParameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 86, ComposeParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 454;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 440;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
				case 1:
					{
					this.state = 439;
					this.match(ComposeParser.READONLY);
					}
					break;
				}
				this.state = 442;
				this.attribute_type_or_null();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 444;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===73) {
					{
					this.state = 443;
					this.match(ComposeParser.ETC);
					}
				}

				this.state = 446;
				this.identifier();
				this.state = 447;
				this.match(ComposeParser.COLON);
				this.state = 448;
				this.mutable_value_type_or_null();
				}
				break;
			case 3:
				localctx = new FunctionParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 450;
				this.identifier();
				this.state = 451;
				this.match(ComposeParser.COLON);
				this.state = 452;
				this.function_type_or_null();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public class_declaration(): Class_declarationContext {
		let localctx: Class_declarationContext = new Class_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 88, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 457;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0)) {
				{
				this.state = 456;
				this.accessibility();
				}
			}

			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 459;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 462;
			this.match(ComposeParser.CLASS);
			this.state = 463;
			localctx._id = this.user_ref();
			this.state = 475;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 464;
				this.match(ComposeParser.LPAR);
				this.state = 465;
				this.attribute_ref();
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 466;
					this.match(ComposeParser.COMMA);
					this.state = 467;
					this.attribute_ref();
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 473;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 477;
				this.match(ComposeParser.EXTENDS);
				this.state = 478;
				this.user_ref();
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 479;
					this.match(ComposeParser.COMMA);
					this.state = 480;
					this.user_ref();
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 488;
			this.match(ComposeParser.LCURL);
			this.state = 493;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 491;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
					case 1:
						{
						this.state = 489;
						this.field_declaration();
						}
						break;
					case 2:
						{
						this.state = 490;
						this.function_declaration(true);
						}
						break;
					}
					}
				}
				this.state = 495;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 45, this._ctx);
			}
			this.state = 496;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public struct_declaration(): Struct_declarationContext {
		let localctx: Struct_declarationContext = new Struct_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 90, ComposeParser.RULE_struct_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 498;
			this.match(ComposeParser.STRUCT);
			this.state = 499;
			localctx._id = this.user_ref();
			this.state = 511;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===53) {
				{
				this.state = 500;
				this.match(ComposeParser.LPAR);
				this.state = 501;
				this.attribute_ref();
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 502;
					this.match(ComposeParser.COMMA);
					this.state = 503;
					this.attribute_ref();
					}
					}
					this.state = 508;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 509;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 522;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 513;
				this.match(ComposeParser.EXTENDS);
				this.state = 514;
				this.user_ref();
				this.state = 519;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 515;
					this.match(ComposeParser.COMMA);
					this.state = 516;
					this.user_ref();
					}
					}
					this.state = 521;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 533;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 57:
				{
				{
				this.state = 524;
				this.match(ComposeParser.LCURL);
				this.state = 528;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 2030043138) !== 0) || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 400335) !== 0) || _la===589) {
					{
					{
					this.state = 525;
					this.field_declaration();
					}
					}
					this.state = 530;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 531;
				this.match(ComposeParser.RCURL);
				}
				}
				break;
			case 70:
				{
				this.state = 532;
				this.match(ComposeParser.SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public accessibility(): AccessibilityContext {
		let localctx: AccessibilityContext = new AccessibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 92, ComposeParser.RULE_accessibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 535;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public field_declaration(): Field_declarationContext {
		let localctx: Field_declarationContext = new Field_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 94, ComposeParser.RULE_field_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0)) {
				{
				this.state = 537;
				this.accessibility();
				}
			}

			this.state = 541;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 540;
				this.match(ComposeParser.STATIC);
				}
			}

			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 543;
				this.match(ComposeParser.READONLY);
				}
			}

			this.state = 546;
			this.identifier();
			this.state = 547;
			this.match(ComposeParser.COLON);
			this.state = 548;
			this.mutable_value_type_or_null();
			this.state = 549;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_declaration(as_member: boolean): Function_declarationContext {
		let localctx: Function_declarationContext = new Function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 96, ComposeParser.RULE_function_declaration);
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 55, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 551;
				this.abstract_function_declaration(localctx.as_member);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 552;
				this.concrete_function_declaration(localctx.as_member);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 553;
				this.native_function_declaration(localctx.as_member);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public abstract_function_declaration(as_member: boolean): Abstract_function_declarationContext {
		let localctx: Abstract_function_declarationContext = new Abstract_function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 98, ComposeParser.RULE_abstract_function_declaration);
		let _la: number;
		try {
			this.state = 570;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 556;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 558;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0)) {
					{
					this.state = 557;
					this.accessibility();
					}
				}

				this.state = 560;
				this.match(ComposeParser.ABSTRACT);
				this.state = 561;
				this.function_prototype(true);
				this.state = 562;
				this.match(ComposeParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 564;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 565;
				this.match(ComposeParser.ABSTRACT);
				this.state = 566;
				this.match(ComposeParser.FUNCTION);
				this.state = 567;
				this.function_prototype(true);
				this.state = 568;
				this.match(ComposeParser.SEMI);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public concrete_function_declaration(as_member: boolean): Concrete_function_declarationContext {
		let localctx: Concrete_function_declarationContext = new Concrete_function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 100, ComposeParser.RULE_concrete_function_declaration);
		let _la: number;
		try {
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 62, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 572;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 574;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0)) {
					{
					this.state = 573;
					this.accessibility();
					}
				}

				this.state = 577;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===24) {
					{
					this.state = 576;
					this.match(ComposeParser.STATIC);
					}
				}

				this.state = 579;
				this.function_prototype(false);
				this.state = 580;
				this.match(ComposeParser.LCURL);
				this.state = 584;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
					{
					{
					this.state = 581;
					this.statement();
					}
					}
					this.state = 586;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 587;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 589;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 590;
				this.match(ComposeParser.FUNCTION);
				this.state = 591;
				this.function_prototype(false);
				this.state = 592;
				this.match(ComposeParser.LCURL);
				this.state = 596;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
					{
					{
					this.state = 593;
					this.statement();
					}
					}
					this.state = 598;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 599;
				this.match(ComposeParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public native_function_declaration(as_member: boolean): Native_function_declarationContext {
		let localctx: Native_function_declarationContext = new Native_function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 102, ComposeParser.RULE_native_function_declaration);
		let _la: number;
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 66, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 603;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 605;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 939524096) !== 0)) {
					{
					this.state = 604;
					this.accessibility();
					}
				}

				this.state = 607;
				this.match(ComposeParser.STATIC);
				this.state = 608;
				this.match(ComposeParser.NATIVE);
				this.state = 609;
				this.function_prototype(false);
				this.state = 610;
				this.match(ComposeParser.LCURL);
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 4169137215) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 4294967295) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & 4294967295) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 4294967295) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & 4294967295) !== 0) || ((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & 4294967295) !== 0) || ((((_la - 295)) & ~0x1F) === 0 && ((1 << (_la - 295)) & 15) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 4294967295) !== 0) || ((((_la - 364)) & ~0x1F) === 0 && ((1 << (_la - 364)) & 4294967295) !== 0) || ((((_la - 396)) & ~0x1F) === 0 && ((1 << (_la - 396)) & 4294967295) !== 0) || ((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 4294967295) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 4294967295) !== 0) || ((((_la - 492)) & ~0x1F) === 0 && ((1 << (_la - 492)) & 4294967295) !== 0) || ((((_la - 524)) & ~0x1F) === 0 && ((1 << (_la - 524)) & 4294967295) !== 0) || ((((_la - 556)) & ~0x1F) === 0 && ((1 << (_la - 556)) & 4294967295) !== 0) || _la===588 || _la===589) {
					{
					{
					this.state = 611;
					this.instruction();
					}
					}
					this.state = 616;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 617;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 619;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 620;
				this.match(ComposeParser.NATIVE);
				this.state = 621;
				this.match(ComposeParser.FUNCTION);
				this.state = 622;
				this.function_prototype(false);
				this.state = 623;
				this.match(ComposeParser.LCURL);
				this.state = 627;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 4169137215) !== 0) || ((((_la - 135)) & ~0x1F) === 0 && ((1 << (_la - 135)) & 4294967295) !== 0) || ((((_la - 167)) & ~0x1F) === 0 && ((1 << (_la - 167)) & 4294967295) !== 0) || ((((_la - 199)) & ~0x1F) === 0 && ((1 << (_la - 199)) & 4294967295) !== 0) || ((((_la - 231)) & ~0x1F) === 0 && ((1 << (_la - 231)) & 4294967295) !== 0) || ((((_la - 263)) & ~0x1F) === 0 && ((1 << (_la - 263)) & 4294967295) !== 0) || ((((_la - 295)) & ~0x1F) === 0 && ((1 << (_la - 295)) & 15) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 4294967295) !== 0) || ((((_la - 364)) & ~0x1F) === 0 && ((1 << (_la - 364)) & 4294967295) !== 0) || ((((_la - 396)) & ~0x1F) === 0 && ((1 << (_la - 396)) & 4294967295) !== 0) || ((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 4294967295) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 4294967295) !== 0) || ((((_la - 492)) & ~0x1F) === 0 && ((1 << (_la - 492)) & 4294967295) !== 0) || ((((_la - 524)) & ~0x1F) === 0 && ((1 << (_la - 524)) & 4294967295) !== 0) || ((((_la - 556)) & ~0x1F) === 0 && ((1 << (_la - 556)) & 4294967295) !== 0) || _la===588 || _la===589) {
					{
					{
					this.state = 624;
					this.instruction();
					}
					}
					this.state = 629;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 630;
				this.match(ComposeParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_prototype(mandatory_return: boolean): Function_prototypeContext {
		let localctx: Function_prototypeContext = new Function_prototypeContext(this, this._ctx, this.state, mandatory_return);
		this.enterRule(localctx, 104, ComposeParser.RULE_function_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 634;
			this.identifier();
			this.state = 646;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 635;
				this.match(ComposeParser.LT);
				this.state = 636;
				this.generic_parameter();
				this.state = 641;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 637;
					this.match(ComposeParser.COMMA);
					this.state = 638;
					this.generic_parameter();
					}
					}
					this.state = 643;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 644;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 648;
			this.match(ComposeParser.LPAR);
			this.state = 657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 70, this._ctx) ) {
			case 1:
				{
				this.state = 649;
				this.parameter();
				this.state = 654;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 650;
					this.match(ComposeParser.COMMA);
					this.state = 651;
					this.parameter();
					}
					}
					this.state = 656;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 659;
			this.match(ComposeParser.RPAR);
			this.state = 668;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 72, this._ctx) ) {
			case 1:
				{
				this.state = 660;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 661;
				this.match(ComposeParser.COLON);
				this.state = 662;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 663;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 666;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===71) {
					{
					this.state = 664;
					this.match(ComposeParser.COLON);
					this.state = 665;
					this.return_types();
					}
				}

				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public generic_parameter(): Generic_parameterContext {
		let localctx: Generic_parameterContext = new Generic_parameterContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, ComposeParser.RULE_generic_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 670;
			this.user_ref();
			this.state = 673;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===21) {
				{
				this.state = 671;
				this.match(ComposeParser.EXTENDS);
				this.state = 672;
				this.value_type(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 108, ComposeParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 678;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===109) {
				{
				{
				this.state = 675;
				this.annotation();
				}
				}
				this.state = 680;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 685;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 30:
			case 31:
			case 32:
			case 33:
			case 44:
			case 45:
			case 46:
			case 53:
			case 55:
			case 57:
			case 61:
			case 66:
			case 76:
			case 77:
			case 78:
			case 79:
			case 85:
			case 103:
			case 104:
			case 105:
			case 106:
			case 107:
			case 108:
			case 113:
			case 114:
			case 115:
			case 116:
			case 119:
			case 120:
			case 121:
			case 122:
			case 124:
			case 125:
			case 130:
			case 131:
			case 589:
				{
				this.state = 681;
				this.embeddable_statement();
				this.state = 682;
				this.match(ComposeParser.SEMI);
				}
				break;
			case 39:
			case 40:
			case 41:
			case 42:
			case 117:
			case 123:
			case 586:
			case 588:
				{
				this.state = 684;
				this.standalone_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public embeddable_statement(): Embeddable_statementContext {
		let localctx: Embeddable_statementContext = new Embeddable_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 110, ComposeParser.RULE_embeddable_statement);
		try {
			this.state = 692;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 687;
				this.declare_instances_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 688;
				this.assign_instance_statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 689;
				this.assign_item_statement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 690;
				this.unary_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 691;
				this.function_call_statement();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public standalone_statement(): Standalone_statementContext {
		let localctx: Standalone_statementContext = new Standalone_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 112, ComposeParser.RULE_standalone_statement);
		try {
			this.state = 702;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 117:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 694;
				this.if_statement();
				}
				break;
			case 39:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 695;
				this.for_statement();
				}
				break;
			case 41:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 696;
				this.while_statement();
				}
				break;
			case 40:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 697;
				this.do_while_statement();
				}
				break;
			case 586:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 698;
				this.try_statement();
				}
				break;
			case 588:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 699;
				this.throw_statement();
				}
				break;
			case 42:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 700;
				this.break_statement();
				}
				break;
			case 123:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 701;
				this.return_statement();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public unary_statement(): Unary_statementContext {
		let localctx: Unary_statementContext = new Unary_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 114, ComposeParser.RULE_unary_statement);
		try {
			this.state = 716;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 704;
				this.expression(0);
				 this.willNotContainLineTerminator()
				this.state = 706;
				this.match(ComposeParser.INC);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 708;
				this.expression(0);
				 this.willNotContainLineTerminator()
				this.state = 710;
				this.match(ComposeParser.DEC);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 712;
				this.match(ComposeParser.INC);
				this.state = 713;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 714;
				this.match(ComposeParser.DEC);
				this.state = 715;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public throw_statement(): Throw_statementContext {
		let localctx: Throw_statementContext = new Throw_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, ComposeParser.RULE_throw_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 718;
			this.match(ComposeParser.THROW);
			this.state = 719;
			this.expression(0);
			this.state = 720;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public try_statement(): Try_statementContext {
		let localctx: Try_statementContext = new Try_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 118, ComposeParser.RULE_try_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 722;
			this.match(ComposeParser.TRY);
			this.state = 723;
			this.match(ComposeParser.LCURL);
			this.state = 727;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
				{
				{
				this.state = 724;
				this.statement();
				}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 730;
			this.match(ComposeParser.RCURL);
			this.state = 734;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 731;
					this.catch_clause();
					}
					}
				}
				this.state = 736;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 80, this._ctx);
			}
			this.state = 738;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===587) {
				{
				this.state = 737;
				this.catch_all_clause();
				}
			}

			this.state = 741;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===43) {
				{
				this.state = 740;
				this.finally_clause();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_clause(): Catch_clauseContext {
		let localctx: Catch_clauseContext = new Catch_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, ComposeParser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 743;
			this.match(ComposeParser.CATCH);
			this.state = 744;
			this.match(ComposeParser.LPAR);
			this.state = 745;
			this.identifier();
			this.state = 746;
			this.match(ComposeParser.COLON);
			this.state = 747;
			this.value_type(0);
			this.state = 752;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===87) {
				{
				{
				this.state = 748;
				this.match(ComposeParser.PIPE);
				this.state = 749;
				this.value_type(0);
				}
				}
				this.state = 754;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 755;
			this.match(ComposeParser.RPAR);
			this.state = 756;
			this.match(ComposeParser.LCURL);
			this.state = 760;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
				{
				{
				this.state = 757;
				this.statement();
				}
				}
				this.state = 762;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 763;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public catch_all_clause(): Catch_all_clauseContext {
		let localctx: Catch_all_clauseContext = new Catch_all_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, ComposeParser.RULE_catch_all_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 765;
			this.match(ComposeParser.CATCH);
			this.state = 766;
			this.match(ComposeParser.LPAR);
			this.state = 767;
			this.match(ComposeParser.ETC);
			this.state = 768;
			this.match(ComposeParser.RPAR);
			this.state = 769;
			this.match(ComposeParser.LCURL);
			this.state = 773;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
				{
				{
				this.state = 770;
				this.statement();
				}
				}
				this.state = 775;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 776;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public finally_clause(): Finally_clauseContext {
		let localctx: Finally_clauseContext = new Finally_clauseContext(this, this._ctx, this.state);
		this.enterRule(localctx, 124, ComposeParser.RULE_finally_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 778;
			this.match(ComposeParser.FINALLY);
			this.state = 779;
			this.match(ComposeParser.LCURL);
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
				{
				{
				this.state = 780;
				this.statement();
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 786;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public break_statement(): Break_statementContext {
		let localctx: Break_statementContext = new Break_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, ComposeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 788;
			this.match(ComposeParser.BREAK);
			this.state = 789;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public for_statement(): For_statementContext {
		let localctx: For_statementContext = new For_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 128, ComposeParser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 791;
			this.match(ComposeParser.FOR);
			this.state = 792;
			this.match(ComposeParser.LPAR);
			this.state = 802;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===32) {
				{
				this.state = 793;
				this.match(ComposeParser.LET);
				this.state = 794;
				this.declare_one();
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 795;
					this.match(ComposeParser.COMMA);
					this.state = 796;
					this.declare_one();
					}
					}
					this.state = 801;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 804;
			this.match(ComposeParser.SEMI);
			this.state = 813;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 805;
				this.expression(0);
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 806;
					this.match(ComposeParser.COMMA);
					this.state = 807;
					this.expression(0);
					}
					}
					this.state = 812;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 815;
			this.match(ComposeParser.SEMI);
			this.state = 824;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580939779) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 816;
				this.embeddable_statement();
				this.state = 821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 817;
					this.match(ComposeParser.COMMA);
					this.state = 818;
					this.embeddable_statement();
					}
					}
					this.state = 823;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 826;
			this.match(ComposeParser.RPAR);
			this.state = 827;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public while_statement(): While_statementContext {
		let localctx: While_statementContext = new While_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, ComposeParser.RULE_while_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 829;
			this.match(ComposeParser.WHILE);
			this.state = 830;
			this.match(ComposeParser.LPAR);
			this.state = 831;
			this.expression(0);
			this.state = 832;
			this.match(ComposeParser.RPAR);
			this.state = 833;
			this.statements();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public do_while_statement(): Do_while_statementContext {
		let localctx: Do_while_statementContext = new Do_while_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, ComposeParser.RULE_do_while_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 835;
			this.match(ComposeParser.DO);
			this.state = 836;
			this.match(ComposeParser.LCURL);
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
				{
				{
				this.state = 837;
				this.statement();
				}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 843;
			this.match(ComposeParser.RCURL);
			this.state = 844;
			this.match(ComposeParser.WHILE);
			this.state = 845;
			this.match(ComposeParser.LPAR);
			this.state = 846;
			this.expression(0);
			this.state = 847;
			this.match(ComposeParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 134, ComposeParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 849;
			this.match(ComposeParser.IF);
			this.state = 850;
			this.match(ComposeParser.LPAR);
			this.state = 851;
			this.expression(0);
			this.state = 852;
			this.match(ComposeParser.RPAR);
			this.state = 853;
			this.statements();
			this.state = 863;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 854;
					this.match(ComposeParser.ELSE);
					this.state = 855;
					this.match(ComposeParser.IF);
					this.state = 856;
					this.match(ComposeParser.LPAR);
					this.state = 857;
					this.expression(0);
					this.state = 858;
					this.match(ComposeParser.RPAR);
					this.state = 859;
					this.statements();
					}
					}
				}
				this.state = 865;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 94, this._ctx);
			}
			this.state = 870;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 866;
					this.match(ComposeParser.ELSE);
					this.state = 867;
					this.statements();
					}
					}
				}
				this.state = 872;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 95, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public statements(): StatementsContext {
		let localctx: StatementsContext = new StatementsContext(this, this._ctx, this.state);
		this.enterRule(localctx, 136, ComposeParser.RULE_statements);
		let _la: number;
		try {
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 873;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 874;
				this.match(ComposeParser.LCURL);
				this.state = 878;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 3221225474) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 580941699) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 411008127) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 13) !== 0)) {
					{
					{
					this.state = 875;
					this.statement();
					}
					}
					this.state = 880;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 881;
				this.match(ComposeParser.RCURL);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call_statement(): Function_call_statementContext {
		let localctx: Function_call_statementContext = new Function_call_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 138, ComposeParser.RULE_function_call_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 887;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 98, this._ctx) ) {
			case 1:
				{
				this.state = 884;
				this.expression(0);
				this.state = 885;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 889;
			this.function_call();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_instances_statement(): Declare_instances_statementContext {
		let localctx: Declare_instances_statementContext = new Declare_instances_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, ComposeParser.RULE_declare_instances_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 891;
			_la = this._input.LA(1);
			if(!(_la===31 || _la===32)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 892;
			this.declare_one();
			this.state = 897;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 893;
					this.match(ComposeParser.COMMA);
					this.state = 894;
					this.declare_one();
					}
					}
				}
				this.state = 899;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 99, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public declare_one(): Declare_oneContext {
		let localctx: Declare_oneContext = new Declare_oneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 142, ComposeParser.RULE_declare_one);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 900;
			this.identifier();
			this.state = 904;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 100, this._ctx) ) {
			case 1:
				{
				this.state = 901;
				this.match(ComposeParser.COLON);
				this.state = 902;
				this.value_type_or_null();
				}
				break;
			case 2:
				{
				this.state = 903;
				this.function_type_or_null();
				}
				break;
			}
			this.state = 908;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===91) {
				{
				this.state = 906;
				this.match(ComposeParser.ASSIGN);
				this.state = 907;
				this.expression(0);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_instance_statement(): Assign_instance_statementContext {
		let localctx: Assign_instance_statementContext = new Assign_instance_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 144, ComposeParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 913;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 102, this._ctx) ) {
			case 1:
				{
				this.state = 910;
				localctx._parent = this.expression(0);
				this.state = 911;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 915;
			this.identifier();
			this.state = 916;
			this.assign_op();
			this.state = 917;
			localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_op(): Assign_opContext {
		let localctx: Assign_opContext = new Assign_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 146, ComposeParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 919;
			_la = this._input.LA(1);
			if(!(((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 4095) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_item_statement(): Assign_item_statementContext {
		let localctx: Assign_item_statementContext = new Assign_item_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 148, ComposeParser.RULE_assign_item_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 921;
			localctx._parent = this.expression(0);
			this.state = 922;
			this.match(ComposeParser.LBRAK);
			this.state = 923;
			localctx._item = this.expression(0);
			this.state = 924;
			this.match(ComposeParser.RBRAK);
			this.state = 925;
			this.assign_op();
			this.state = 926;
			localctx._value = this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 150, ComposeParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 928;
			this.match(ComposeParser.RETURN);
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 929;
				this.expression(0);
				}
			}

			this.state = 932;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	// @RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, _parentState);
		let _prevctx: ExpressionContext = localctx;
		let _startState: number = 152;
		this.enterRecursionRule(localctx, 152, ComposeParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 982;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 106, this._ctx) ) {
			case 1:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 935;
				this.match(ComposeParser.NEW);
				this.state = 936;
				this.function_call();
				}
				break;
			case 2:
				{
				localctx = new SimpleCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 937;
				this.function_call();
				}
				break;
			case 3:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 938;
				this.match(ComposeParser.TYPE_OF);
				this.state = 945;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 53:
					{
					{
					this.state = 939;
					this.match(ComposeParser.LPAR);
					this.state = 940;
					this.expression(0);
					this.state = 941;
					this.match(ComposeParser.RPAR);
					}
					}
					break;
				case 46:
					{
					this.state = 943;
					this.match(ComposeParser.TYPE_OF);
					this.state = 944;
					this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 4:
				{
				localctx = new PreIncrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 947;
				this.match(ComposeParser.INC);
				this.state = 948;
				this.expression(27);
				}
				break;
			case 5:
				{
				localctx = new PreDecrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 949;
				this.match(ComposeParser.DEC);
				this.state = 950;
				this.expression(26);
				}
				break;
			case 6:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 951;
				this.match(ComposeParser.PLUS);
				this.state = 952;
				this.expression(25);
				}
				break;
			case 7:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 953;
				this.match(ComposeParser.MINUS);
				this.state = 954;
				this.expression(24);
				}
				break;
			case 8:
				{
				localctx = new UnaryBitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 955;
				this.match(ComposeParser.TILDE);
				this.state = 956;
				this.expression(23);
				}
				break;
			case 9:
				{
				localctx = new UnaryNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 957;
				this.match(ComposeParser.NOT);
				this.state = 958;
				this.expression(22);
				}
				break;
			case 10:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 959;
				this.match(ComposeParser.THIS);
				}
				break;
			case 11:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 960;
				this.identifier();
				}
				break;
			case 12:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 961;
				this.match(ComposeParser.SUPER);
				this.state = 966;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 105, this._ctx) ) {
				case 1:
					{
					this.state = 962;
					this.match(ComposeParser.LT);
					this.state = 963;
					this.identifier();
					this.state = 964;
					this.match(ComposeParser.GT);
					}
					break;
				}
				}
				break;
			case 13:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 968;
				this.literal_expression();
				}
				break;
			case 14:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 969;
				this.match(ComposeParser.LPAR);
				this.state = 970;
				this.expression(0);
				this.state = 971;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 15:
				{
				localctx = new PreCastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 973;
				this.match(ComposeParser.LT);
				this.state = 974;
				this.value_type(0);
				this.state = 975;
				this.match(ComposeParser.GT);
				this.state = 976;
				this.expression(3);
				}
				break;
			case 16:
				{
				localctx = new AssignExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 978;
				this.identifier();
				this.state = 979;
				this.assign_op();
				this.state = 980;
				this.expression(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 1048;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 1046;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 107, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 984;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 985;
						_la = this._input.LA(1);
						if(!(((((_la - 80)) & ~0x1F) === 0 && ((1 << (_la - 80)) & 11) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 986;
						(localctx as MultiplyExpressionContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 987;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 988;
						_la = this._input.LA(1);
						if(!(_la===78 || _la===79)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 989;
						(localctx as AddExpressionContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 990;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 991;
						_la = this._input.LA(1);
						if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 992;
						(localctx as BitShiftExpressionContext)._right = this.expression(20);
						}
						break;
					case 4:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 993;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 994;
						_la = this._input.LA(1);
						if(!(((((_la - 60)) & ~0x1F) === 0 && ((1 << (_la - 60)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 995;
						(localctx as CompareExpressionContext)._right = this.expression(19);
						}
						break;
					case 5:
						{
						localctx = new InstanceofExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InstanceofExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 996;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 997;
						this.match(ComposeParser.INSTANCE_OF);
						this.state = 998;
						(localctx as InstanceofExpressionContext)._right = this.expression(18);
						}
						break;
					case 6:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 999;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 1000;
						this.match(ComposeParser.IN);
						this.state = 1001;
						(localctx as InExpressionContext)._right = this.expression(17);
						}
						break;
					case 7:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1002;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 1003;
						_la = this._input.LA(1);
						if(!(_la===64 || _la===65)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 1004;
						(localctx as EqualsExpressionContext)._right = this.expression(16);
						}
						break;
					case 8:
						{
						localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1005;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 1006;
						this.match(ComposeParser.AMP);
						this.state = 1007;
						(localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;
					case 9:
						{
						localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1008;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 1009;
						this.match(ComposeParser.CARET);
						this.state = 1010;
						(localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;
					case 10:
						{
						localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1011;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 1012;
						this.match(ComposeParser.PIPE);
						this.state = 1013;
						(localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;
					case 11:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1014;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 1015;
						this.match(ComposeParser.AND);
						this.state = 1016;
						(localctx as AndExpressionContext)._right = this.expression(12);
						}
						break;
					case 12:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1017;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 1018;
						this.match(ComposeParser.OR);
						this.state = 1019;
						(localctx as OrExpressionContext)._right = this.expression(11);
						}
						break;
					case 13:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._condition = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1020;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 1021;
						this.match(ComposeParser.QUESTION);
						this.state = 1022;
						(localctx as TernaryExpressionContext)._if_true = this.expression(0);
						this.state = 1023;
						this.match(ComposeParser.COLON);
						this.state = 1024;
						(localctx as TernaryExpressionContext)._if_false = this.expression(10);
						}
						break;
					case 14:
						{
						localctx = new ItemExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ItemExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1026;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 1027;
						this.match(ComposeParser.LBRAK);
						this.state = 1028;
						(localctx as ItemExpressionContext)._item = this.expression(0);
						this.state = 1029;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 15:
						{
						localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1031;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 1032;
						this.match(ComposeParser.DOT);
						this.state = 1033;
						(localctx as MemberExpressionContext)._member = this.identifier();
						}
						break;
					case 16:
						{
						localctx = new ChildCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1034;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 1035;
						this.match(ComposeParser.DOT);
						this.state = 1036;
						this.function_call();
						}
						break;
					case 17:
						{
						localctx = new PostIncrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1037;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						 this.willNotContainLineTerminator()
						this.state = 1039;
						this.match(ComposeParser.INC);
						}
						break;
					case 18:
						{
						localctx = new PostDecrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1040;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						 this.willNotContainLineTerminator()
						this.state = 1042;
						this.match(ComposeParser.DEC);
						}
						break;
					case 19:
						{
						localctx = new CastAsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 1043;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 1044;
						this.match(ComposeParser.AS);
						this.state = 1045;
						this.value_type(0);
						}
						break;
					}
					}
				}
				this.state = 1050;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 108, this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 154, ComposeParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1051;
			localctx._name = this.identifier();
			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===61) {
				{
				this.state = 1052;
				this.match(ComposeParser.LT);
				this.state = 1053;
				this.value_type_or_null();
				this.state = 1058;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 1054;
					this.match(ComposeParser.COMMA);
					this.state = 1055;
					this.value_type_or_null();
					}
					}
					this.state = 1060;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 1061;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 1065;
			this.match(ComposeParser.LPAR);
			this.state = 1074;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 1066;
				this.expression(0);
				this.state = 1071;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 1067;
					this.match(ComposeParser.COMMA);
					this.state = 1068;
					this.expression(0);
					}
					}
					this.state = 1073;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1076;
			this.match(ComposeParser.RPAR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public literal_expression(): Literal_expressionContext {
		let localctx: Literal_expressionContext = new Literal_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 156, ComposeParser.RULE_literal_expression);
		try {
			this.state = 1087;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 113, this._ctx) ) {
			case 1:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1078;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 2:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1079;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 3:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1080;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 4:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 1081;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 5:
				localctx = new CharLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 1082;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 6:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 1083;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 7:
				localctx = new ListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 1084;
				this.list_literal();
				}
				break;
			case 8:
				localctx = new SetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 1085;
				this.set_literal();
				}
				break;
			case 9:
				localctx = new MapLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 1086;
				this.map_literal();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public list_literal(): List_literalContext {
		let localctx: List_literalContext = new List_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 158, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1090;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 1089;
				this.match(ComposeParser.READONLY);
				}
			}

			this.state = 1092;
			this.match(ComposeParser.LBRAK);
			this.state = 1101;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 1093;
				localctx._exp = this.expression(0);
				this.state = 1098;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 1094;
					this.match(ComposeParser.COMMA);
					this.state = 1095;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 1100;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1103;
			this.match(ComposeParser.RBRAK);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public set_literal(): Set_literalContext {
		let localctx: Set_literalContext = new Set_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 160, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 1105;
				this.match(ComposeParser.READONLY);
				}
			}

			this.state = 1108;
			this.match(ComposeParser.LT);
			this.state = 1117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===30 || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & 290469889) !== 0) || ((((_la - 66)) & ~0x1F) === 0 && ((1 << (_la - 66)) & 539649) !== 0) || ((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 409943103) !== 0) || _la===589) {
				{
				this.state = 1109;
				localctx._exp = this.expression(0);
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 1110;
					this.match(ComposeParser.COMMA);
					this.state = 1111;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 1116;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1119;
			this.match(ComposeParser.GT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public map_literal(): Map_literalContext {
		let localctx: Map_literalContext = new Map_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 162, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===30) {
				{
				this.state = 1121;
				this.match(ComposeParser.READONLY);
				}
			}

			this.state = 1124;
			this.match(ComposeParser.LCURL);
			this.state = 1133;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 400335) !== 0) || _la===589) {
				{
				this.state = 1125;
				localctx._entry = this.map_entry();
				this.state = 1130;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===72) {
					{
					{
					this.state = 1126;
					this.match(ComposeParser.COMMA);
					this.state = 1127;
					localctx._entry = this.map_entry();
					}
					}
					this.state = 1132;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1135;
			this.match(ComposeParser.RCURL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public map_entry(): Map_entryContext {
		let localctx: Map_entryContext = new Map_entryContext(this, this._ctx, this.state);
		this.enterRule(localctx, 164, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1137;
			this.identifier();
			this.state = 1138;
			this.match(ComposeParser.COLON);
			this.state = 1139;
			this.expression(0);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public instruction(): InstructionContext {
		let localctx: InstructionContext = new InstructionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 166, ComposeParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1144;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1141;
					this.expression(0);
					}
					}
				}
				this.state = 1146;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 123, this._ctx);
			}
			this.state = 1147;
			this.opcode();
			this.state = 1151;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===103) {
				{
				{
				this.state = 1148;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				}
				this.state = 1153;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1154;
			this.match(ComposeParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public opcode(): OpcodeContext {
		let localctx: OpcodeContext = new OpcodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 168, ComposeParser.RULE_opcode);
		try {
			this.state = 1159;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 113:
			case 114:
			case 115:
			case 116:
			case 119:
			case 120:
			case 121:
			case 122:
			case 124:
			case 125:
			case 130:
			case 131:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1156;
				this.plain_opcode();
				}
				break;
			case 117:
			case 118:
			case 123:
			case 586:
			case 587:
			case 588:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1157;
				this.keyword_opcode();
				}
				break;
			case 132:
			case 133:
			case 134:
			case 135:
			case 136:
			case 137:
			case 138:
			case 139:
			case 140:
			case 141:
			case 142:
			case 143:
			case 144:
			case 145:
			case 146:
			case 147:
			case 148:
			case 149:
			case 150:
			case 151:
			case 152:
			case 153:
			case 154:
			case 155:
			case 156:
			case 157:
			case 158:
			case 159:
			case 160:
			case 161:
			case 162:
			case 163:
			case 164:
			case 165:
			case 166:
			case 167:
			case 168:
			case 169:
			case 170:
			case 171:
			case 172:
			case 173:
			case 174:
			case 175:
			case 176:
			case 177:
			case 178:
			case 179:
			case 180:
			case 181:
			case 182:
			case 183:
			case 184:
			case 185:
			case 186:
			case 187:
			case 188:
			case 189:
			case 190:
			case 191:
			case 192:
			case 193:
			case 194:
			case 195:
			case 196:
			case 197:
			case 198:
			case 199:
			case 200:
			case 201:
			case 202:
			case 203:
			case 204:
			case 205:
			case 206:
			case 207:
			case 208:
			case 209:
			case 210:
			case 211:
			case 212:
			case 213:
			case 214:
			case 215:
			case 216:
			case 217:
			case 218:
			case 219:
			case 220:
			case 221:
			case 222:
			case 223:
			case 224:
			case 225:
			case 226:
			case 227:
			case 228:
			case 229:
			case 230:
			case 231:
			case 232:
			case 233:
			case 234:
			case 235:
			case 236:
			case 237:
			case 238:
			case 239:
			case 240:
			case 241:
			case 242:
			case 243:
			case 244:
			case 245:
			case 246:
			case 247:
			case 248:
			case 249:
			case 250:
			case 251:
			case 252:
			case 253:
			case 254:
			case 255:
			case 256:
			case 257:
			case 258:
			case 259:
			case 260:
			case 261:
			case 262:
			case 263:
			case 264:
			case 265:
			case 266:
			case 267:
			case 268:
			case 269:
			case 270:
			case 271:
			case 272:
			case 273:
			case 274:
			case 275:
			case 276:
			case 277:
			case 278:
			case 279:
			case 280:
			case 281:
			case 282:
			case 283:
			case 284:
			case 285:
			case 286:
			case 287:
			case 288:
			case 289:
			case 290:
			case 291:
			case 292:
			case 293:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 332:
			case 333:
			case 334:
			case 335:
			case 336:
			case 337:
			case 338:
			case 339:
			case 340:
			case 341:
			case 342:
			case 343:
			case 344:
			case 345:
			case 346:
			case 347:
			case 348:
			case 349:
			case 350:
			case 351:
			case 352:
			case 353:
			case 354:
			case 355:
			case 356:
			case 357:
			case 358:
			case 359:
			case 360:
			case 361:
			case 362:
			case 363:
			case 364:
			case 365:
			case 366:
			case 367:
			case 368:
			case 369:
			case 370:
			case 371:
			case 372:
			case 373:
			case 374:
			case 375:
			case 376:
			case 377:
			case 378:
			case 379:
			case 380:
			case 381:
			case 382:
			case 383:
			case 384:
			case 385:
			case 386:
			case 387:
			case 388:
			case 389:
			case 390:
			case 391:
			case 392:
			case 393:
			case 394:
			case 395:
			case 396:
			case 397:
			case 398:
			case 399:
			case 400:
			case 401:
			case 402:
			case 403:
			case 404:
			case 405:
			case 406:
			case 407:
			case 408:
			case 409:
			case 410:
			case 411:
			case 412:
			case 413:
			case 414:
			case 415:
			case 416:
			case 417:
			case 418:
			case 419:
			case 420:
			case 421:
			case 422:
			case 423:
			case 424:
			case 425:
			case 426:
			case 427:
			case 428:
			case 429:
			case 430:
			case 431:
			case 432:
			case 433:
			case 434:
			case 435:
			case 436:
			case 437:
			case 438:
			case 439:
			case 440:
			case 441:
			case 442:
			case 443:
			case 444:
			case 445:
			case 446:
			case 447:
			case 448:
			case 449:
			case 450:
			case 451:
			case 452:
			case 453:
			case 454:
			case 455:
			case 456:
			case 457:
			case 458:
			case 459:
			case 460:
			case 461:
			case 462:
			case 463:
			case 464:
			case 465:
			case 466:
			case 467:
			case 468:
			case 469:
			case 470:
			case 471:
			case 472:
			case 473:
			case 474:
			case 475:
			case 476:
			case 477:
			case 478:
			case 479:
			case 480:
			case 481:
			case 482:
			case 483:
			case 484:
			case 485:
			case 486:
			case 487:
			case 488:
			case 489:
			case 490:
			case 491:
			case 492:
			case 493:
			case 494:
			case 495:
			case 496:
			case 497:
			case 498:
			case 499:
			case 500:
			case 501:
			case 502:
			case 503:
			case 504:
			case 505:
			case 506:
			case 507:
			case 508:
			case 509:
			case 510:
			case 511:
			case 512:
			case 513:
			case 514:
			case 515:
			case 516:
			case 517:
			case 518:
			case 519:
			case 520:
			case 521:
			case 522:
			case 523:
			case 524:
			case 525:
			case 526:
			case 527:
			case 528:
			case 529:
			case 530:
			case 531:
			case 532:
			case 533:
			case 534:
			case 535:
			case 536:
			case 537:
			case 538:
			case 539:
			case 540:
			case 541:
			case 542:
			case 543:
			case 544:
			case 545:
			case 546:
			case 547:
			case 548:
			case 549:
			case 550:
			case 551:
			case 552:
			case 553:
			case 554:
			case 555:
			case 556:
			case 557:
			case 558:
			case 559:
			case 560:
			case 561:
			case 562:
			case 563:
			case 564:
			case 565:
			case 566:
			case 567:
			case 568:
			case 569:
			case 570:
			case 571:
			case 572:
			case 573:
			case 574:
			case 575:
			case 576:
			case 577:
			case 578:
			case 579:
			case 580:
			case 581:
			case 582:
			case 583:
			case 584:
			case 585:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1158;
				this.composite_opcode();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public plain_opcode(): Plain_opcodeContext {
		let localctx: Plain_opcodeContext = new Plain_opcodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 170, ComposeParser.RULE_plain_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1161;
			_la = this._input.LA(1);
			if(!(_la===1 || ((((_la - 113)) & ~0x1F) === 0 && ((1 << (_la - 113)) & 400335) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public keyword_opcode(): Keyword_opcodeContext {
		let localctx: Keyword_opcodeContext = new Keyword_opcodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 172, ComposeParser.RULE_keyword_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1163;
			_la = this._input.LA(1);
			if(!(((((_la - 117)) & ~0x1F) === 0 && ((1 << (_la - 117)) & 67) !== 0) || ((((_la - 586)) & ~0x1F) === 0 && ((1 << (_la - 586)) & 7) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public composite_opcode(): Composite_opcodeContext {
		let localctx: Composite_opcodeContext = new Composite_opcodeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 174, ComposeParser.RULE_composite_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1165;
			_la = this._input.LA(1);
			if(!(((((_la - 132)) & ~0x1F) === 0 && ((1 << (_la - 132)) & 4294967295) !== 0) || ((((_la - 164)) & ~0x1F) === 0 && ((1 << (_la - 164)) & 4294967295) !== 0) || ((((_la - 196)) & ~0x1F) === 0 && ((1 << (_la - 196)) & 4294967295) !== 0) || ((((_la - 228)) & ~0x1F) === 0 && ((1 << (_la - 228)) & 4294967295) !== 0) || ((((_la - 260)) & ~0x1F) === 0 && ((1 << (_la - 260)) & 4294967295) !== 0) || ((((_la - 292)) & ~0x1F) === 0 && ((1 << (_la - 292)) & 127) !== 0) || ((((_la - 332)) & ~0x1F) === 0 && ((1 << (_la - 332)) & 4294967295) !== 0) || ((((_la - 364)) & ~0x1F) === 0 && ((1 << (_la - 364)) & 4294967295) !== 0) || ((((_la - 396)) & ~0x1F) === 0 && ((1 << (_la - 396)) & 4294967295) !== 0) || ((((_la - 428)) & ~0x1F) === 0 && ((1 << (_la - 428)) & 4294967295) !== 0) || ((((_la - 460)) & ~0x1F) === 0 && ((1 << (_la - 460)) & 4294967295) !== 0) || ((((_la - 492)) & ~0x1F) === 0 && ((1 << (_la - 492)) & 4294967295) !== 0) || ((((_la - 524)) & ~0x1F) === 0 && ((1 << (_la - 524)) & 4294967295) !== 0) || ((((_la - 556)) & ~0x1F) === 0 && ((1 << (_la - 556)) & 1073741823) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 12:
			return this.value_type_sempred(localctx as Value_typeContext, predIndex);
		case 36:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 38:
			return this.user_ref_sempred(localctx as User_refContext, predIndex);
		case 41:
			return this.return_type_sempred(localctx as Return_typeContext, predIndex);
		case 49:
			return this.abstract_function_declaration_sempred(localctx as Abstract_function_declarationContext, predIndex);
		case 50:
			return this.concrete_function_declaration_sempred(localctx as Concrete_function_declarationContext, predIndex);
		case 51:
			return this.native_function_declaration_sempred(localctx as Native_function_declarationContext, predIndex);
		case 52:
			return this.function_prototype_sempred(localctx as Function_prototypeContext, predIndex);
		case 76:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private value_type_sempred(localctx: Value_typeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}
	private attribute_ref_sempred(localctx: Attribute_refContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  this.willBeLowercase() ;
		}
		return true;
	}
	private user_ref_sempred(localctx: User_refContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return  this.willBeUppercase() ;
		}
		return true;
	}
	private return_type_sempred(localctx: Return_typeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 4:
			return  !localctx.requireParenthesis ;
		}
		return true;
	}
	private abstract_function_declaration_sempred(localctx: Abstract_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return localctx.as_member;
		case 6:
			return !localctx.as_member;
		}
		return true;
	}
	private concrete_function_declaration_sempred(localctx: Concrete_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return localctx.as_member;
		case 8:
			return !localctx.as_member;
		}
		return true;
	}
	private native_function_declaration_sempred(localctx: Native_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return localctx.as_member;
		case 10:
			return !localctx.as_member;
		}
		return true;
	}
	private function_prototype_sempred(localctx: Function_prototypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return  localctx.mandatory_return ;
		case 12:
			return  !localctx.mandatory_return ;
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 13:
			return this.precpred(this._ctx, 21);
		case 14:
			return this.precpred(this._ctx, 20);
		case 15:
			return this.precpred(this._ctx, 19);
		case 16:
			return this.precpred(this._ctx, 18);
		case 17:
			return this.precpred(this._ctx, 17);
		case 18:
			return this.precpred(this._ctx, 16);
		case 19:
			return this.precpred(this._ctx, 15);
		case 20:
			return this.precpred(this._ctx, 14);
		case 21:
			return this.precpred(this._ctx, 13);
		case 22:
			return this.precpred(this._ctx, 12);
		case 23:
			return this.precpred(this._ctx, 11);
		case 24:
			return this.precpred(this._ctx, 10);
		case 25:
			return this.precpred(this._ctx, 9);
		case 26:
			return this.precpred(this._ctx, 35);
		case 27:
			return this.precpred(this._ctx, 34);
		case 28:
			return this.precpred(this._ctx, 31);
		case 29:
			return this.precpred(this._ctx, 30);
		case 30:
			return this.precpred(this._ctx, 29);
		case 31:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,589,1168,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,2,71,7,71,2,72,7,72,2,73,7,73,2,74,7,74,2,
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,2,79,7,79,2,80,7,80,2,81,7,81,2,82,
	7,82,2,83,7,83,2,84,7,84,2,85,7,85,2,86,7,86,2,87,7,87,1,0,1,0,5,0,179,
	8,0,10,0,12,0,182,9,0,1,1,5,1,185,8,1,10,1,12,1,188,9,1,1,2,1,2,1,2,1,2,
	1,2,1,2,1,2,5,2,197,8,2,10,2,12,2,200,9,2,1,2,1,2,3,2,204,8,2,1,2,1,2,1,
	2,1,2,5,2,210,8,2,10,2,12,2,213,9,2,1,2,1,2,3,2,217,8,2,1,2,1,2,1,2,1,2,
	1,3,1,3,1,4,1,4,3,4,227,8,4,1,5,5,5,230,8,5,10,5,12,5,233,9,5,1,5,1,5,3,
	5,237,8,5,3,5,239,8,5,1,5,1,5,1,5,1,6,5,6,245,8,6,10,6,12,6,248,9,6,1,6,
	1,6,3,6,252,8,6,3,6,254,8,6,1,6,1,6,1,6,1,6,1,6,3,6,261,8,6,1,7,1,7,1,7,
	1,7,1,7,1,7,5,7,269,8,7,10,7,12,7,272,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,
	9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,288,8,10,1,11,1,11,1,11,1,11,1,11,3,11,
	295,8,11,1,12,1,12,1,12,3,12,300,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,
	308,8,12,10,12,12,12,311,9,12,1,13,3,13,314,8,13,1,13,1,13,1,14,1,14,1,
	14,1,14,3,14,322,8,14,1,15,1,15,1,15,1,15,1,15,3,15,329,8,15,1,16,1,16,
	1,17,1,17,1,18,1,18,1,19,1,19,3,19,339,8,19,1,20,1,20,1,20,1,20,1,20,1,
	20,1,20,1,20,3,20,349,8,20,1,21,1,21,3,21,353,8,21,1,22,1,22,1,23,1,23,
	1,24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,
	31,1,31,1,32,1,32,1,33,1,33,1,34,1,34,1,35,1,35,1,35,3,35,384,8,35,1,36,
	1,36,1,36,3,36,389,8,36,1,37,1,37,1,38,1,38,1,38,1,39,1,39,1,39,1,39,1,
	39,5,39,401,8,39,10,39,12,39,404,9,39,3,39,406,8,39,1,39,3,39,409,8,39,
	1,39,1,39,1,39,1,40,1,40,1,40,3,40,417,8,40,1,41,1,41,1,41,1,41,1,41,1,
	41,1,41,1,41,3,41,427,8,41,1,42,1,42,1,42,1,42,5,42,433,8,42,10,42,12,42,
	436,9,42,3,42,438,8,42,1,43,3,43,441,8,43,1,43,1,43,3,43,445,8,43,1,43,
	1,43,1,43,1,43,1,43,1,43,1,43,1,43,3,43,455,8,43,1,44,3,44,458,8,44,1,44,
	3,44,461,8,44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,469,8,44,10,44,12,44,472,
	9,44,1,44,1,44,3,44,476,8,44,1,44,1,44,1,44,1,44,5,44,482,8,44,10,44,12,
	44,485,9,44,3,44,487,8,44,1,44,1,44,1,44,5,44,492,8,44,10,44,12,44,495,
	9,44,1,44,1,44,1,45,1,45,1,45,1,45,1,45,1,45,5,45,505,8,45,10,45,12,45,
	508,9,45,1,45,1,45,3,45,512,8,45,1,45,1,45,1,45,1,45,5,45,518,8,45,10,45,
	12,45,521,9,45,3,45,523,8,45,1,45,1,45,5,45,527,8,45,10,45,12,45,530,9,
	45,1,45,1,45,3,45,534,8,45,1,46,1,46,1,47,3,47,539,8,47,1,47,3,47,542,8,
	47,1,47,3,47,545,8,47,1,47,1,47,1,47,1,47,1,47,1,48,1,48,1,48,3,48,555,
	8,48,1,49,1,49,3,49,559,8,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,
	49,1,49,3,49,571,8,49,1,50,1,50,3,50,575,8,50,1,50,3,50,578,8,50,1,50,1,
	50,1,50,5,50,583,8,50,10,50,12,50,586,9,50,1,50,1,50,1,50,1,50,1,50,1,50,
	1,50,5,50,595,8,50,10,50,12,50,598,9,50,1,50,1,50,3,50,602,8,50,1,51,1,
	51,3,51,606,8,51,1,51,1,51,1,51,1,51,1,51,5,51,613,8,51,10,51,12,51,616,
	9,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,1,51,5,51,626,8,51,10,51,12,51,
	629,9,51,1,51,1,51,3,51,633,8,51,1,52,1,52,1,52,1,52,1,52,5,52,640,8,52,
	10,52,12,52,643,9,52,1,52,1,52,3,52,647,8,52,1,52,1,52,1,52,1,52,5,52,653,
	8,52,10,52,12,52,656,9,52,3,52,658,8,52,1,52,1,52,1,52,1,52,1,52,1,52,1,
	52,3,52,667,8,52,3,52,669,8,52,1,53,1,53,1,53,3,53,674,8,53,1,54,5,54,677,
	8,54,10,54,12,54,680,9,54,1,54,1,54,1,54,1,54,3,54,686,8,54,1,55,1,55,1,
	55,1,55,1,55,3,55,693,8,55,1,56,1,56,1,56,1,56,1,56,1,56,1,56,1,56,3,56,
	703,8,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,3,
	57,717,8,57,1,58,1,58,1,58,1,58,1,59,1,59,1,59,5,59,726,8,59,10,59,12,59,
	729,9,59,1,59,1,59,5,59,733,8,59,10,59,12,59,736,9,59,1,59,3,59,739,8,59,
	1,59,3,59,742,8,59,1,60,1,60,1,60,1,60,1,60,1,60,1,60,5,60,751,8,60,10,
	60,12,60,754,9,60,1,60,1,60,1,60,5,60,759,8,60,10,60,12,60,762,9,60,1,60,
	1,60,1,61,1,61,1,61,1,61,1,61,1,61,5,61,772,8,61,10,61,12,61,775,9,61,1,
	61,1,61,1,62,1,62,1,62,5,62,782,8,62,10,62,12,62,785,9,62,1,62,1,62,1,63,
	1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,5,64,798,8,64,10,64,12,64,801,9,
	64,3,64,803,8,64,1,64,1,64,1,64,1,64,5,64,809,8,64,10,64,12,64,812,9,64,
	3,64,814,8,64,1,64,1,64,1,64,1,64,5,64,820,8,64,10,64,12,64,823,9,64,3,
	64,825,8,64,1,64,1,64,1,64,1,65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,1,66,
	5,66,839,8,66,10,66,12,66,842,9,66,1,66,1,66,1,66,1,66,1,66,1,66,1,67,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,862,8,67,10,67,
	12,67,865,9,67,1,67,1,67,5,67,869,8,67,10,67,12,67,872,9,67,1,68,1,68,1,
	68,5,68,877,8,68,10,68,12,68,880,9,68,1,68,3,68,883,8,68,1,69,1,69,1,69,
	3,69,888,8,69,1,69,1,69,1,70,1,70,1,70,1,70,5,70,896,8,70,10,70,12,70,899,
	9,70,1,71,1,71,1,71,1,71,3,71,905,8,71,1,71,1,71,3,71,909,8,71,1,72,1,72,
	1,72,3,72,914,8,72,1,72,1,72,1,72,1,72,1,73,1,73,1,74,1,74,1,74,1,74,1,
	74,1,74,1,74,1,75,1,75,3,75,931,8,75,1,75,1,75,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,3,76,946,8,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,3,76,
	967,8,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,3,76,983,8,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,
	1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,
	76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,1,76,5,76,1047,8,76,10,76,12,76,1050,
	9,76,1,77,1,77,1,77,1,77,1,77,5,77,1057,8,77,10,77,12,77,1060,9,77,1,77,
	1,77,3,77,1064,8,77,1,77,1,77,1,77,1,77,5,77,1070,8,77,10,77,12,77,1073,
	9,77,3,77,1075,8,77,1,77,1,77,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,78,1,
	78,3,78,1088,8,78,1,79,3,79,1091,8,79,1,79,1,79,1,79,1,79,5,79,1097,8,79,
	10,79,12,79,1100,9,79,3,79,1102,8,79,1,79,1,79,1,80,3,80,1107,8,80,1,80,
	1,80,1,80,1,80,5,80,1113,8,80,10,80,12,80,1116,9,80,3,80,1118,8,80,1,80,
	1,80,1,81,3,81,1123,8,81,1,81,1,81,1,81,1,81,5,81,1129,8,81,10,81,12,81,
	1132,9,81,3,81,1134,8,81,1,81,1,81,1,82,1,82,1,82,1,82,1,83,5,83,1143,8,
	83,10,83,12,83,1146,9,83,1,83,1,83,5,83,1150,8,83,10,83,12,83,1153,9,83,
	1,83,1,83,1,84,1,84,1,84,3,84,1160,8,84,1,85,1,85,1,86,1,86,1,87,1,87,1,
	87,0,2,24,152,88,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
	40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,86,
	88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,126,
	128,130,132,134,136,138,140,142,144,146,148,150,152,154,156,158,160,162,
	164,166,168,170,172,174,0,11,1,0,27,29,1,0,31,32,1,0,91,102,2,0,80,81,83,
	83,1,0,78,79,1,0,88,90,1,0,60,63,1,0,64,65,5,0,1,1,113,116,119,122,124,
	125,130,131,3,0,117,118,123,123,586,588,2,0,132,298,332,585,1273,0,176,
	1,0,0,0,2,186,1,0,0,0,4,189,1,0,0,0,6,222,1,0,0,0,8,226,1,0,0,0,10,231,
	1,0,0,0,12,246,1,0,0,0,14,262,1,0,0,0,16,275,1,0,0,0,18,279,1,0,0,0,20,
	287,1,0,0,0,22,289,1,0,0,0,24,299,1,0,0,0,26,313,1,0,0,0,28,317,1,0,0,0,
	30,328,1,0,0,0,32,330,1,0,0,0,34,332,1,0,0,0,36,334,1,0,0,0,38,338,1,0,
	0,0,40,348,1,0,0,0,42,352,1,0,0,0,44,354,1,0,0,0,46,356,1,0,0,0,48,358,
	1,0,0,0,50,360,1,0,0,0,52,362,1,0,0,0,54,364,1,0,0,0,56,366,1,0,0,0,58,
	368,1,0,0,0,60,370,1,0,0,0,62,372,1,0,0,0,64,374,1,0,0,0,66,376,1,0,0,0,
	68,378,1,0,0,0,70,380,1,0,0,0,72,388,1,0,0,0,74,390,1,0,0,0,76,392,1,0,
	0,0,78,408,1,0,0,0,80,413,1,0,0,0,82,426,1,0,0,0,84,437,1,0,0,0,86,454,
	1,0,0,0,88,457,1,0,0,0,90,498,1,0,0,0,92,535,1,0,0,0,94,538,1,0,0,0,96,
	554,1,0,0,0,98,570,1,0,0,0,100,601,1,0,0,0,102,632,1,0,0,0,104,634,1,0,
	0,0,106,670,1,0,0,0,108,678,1,0,0,0,110,692,1,0,0,0,112,702,1,0,0,0,114,
	716,1,0,0,0,116,718,1,0,0,0,118,722,1,0,0,0,120,743,1,0,0,0,122,765,1,0,
	0,0,124,778,1,0,0,0,126,788,1,0,0,0,128,791,1,0,0,0,130,829,1,0,0,0,132,
	835,1,0,0,0,134,849,1,0,0,0,136,882,1,0,0,0,138,887,1,0,0,0,140,891,1,0,
	0,0,142,900,1,0,0,0,144,913,1,0,0,0,146,919,1,0,0,0,148,921,1,0,0,0,150,
	928,1,0,0,0,152,982,1,0,0,0,154,1051,1,0,0,0,156,1087,1,0,0,0,158,1090,
	1,0,0,0,160,1106,1,0,0,0,162,1122,1,0,0,0,164,1137,1,0,0,0,166,1144,1,0,
	0,0,168,1159,1,0,0,0,170,1161,1,0,0,0,172,1163,1,0,0,0,174,1165,1,0,0,0,
	176,180,3,2,1,0,177,179,3,8,4,0,178,177,1,0,0,0,179,182,1,0,0,0,180,178,
	1,0,0,0,180,181,1,0,0,0,181,1,1,0,0,0,182,180,1,0,0,0,183,185,3,4,2,0,184,
	183,1,0,0,0,185,188,1,0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,3,1,0,0,
	0,188,186,1,0,0,0,189,216,5,49,0,0,190,203,3,20,10,0,191,192,5,72,0,0,192,
	193,5,57,0,0,193,198,3,20,10,0,194,195,5,72,0,0,195,197,3,20,10,0,196,194,
	1,0,0,0,197,200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,201,1,0,0,0,
	200,198,1,0,0,0,201,202,5,58,0,0,202,204,1,0,0,0,203,191,1,0,0,0,203,204,
	1,0,0,0,204,217,1,0,0,0,205,206,5,57,0,0,206,211,3,20,10,0,207,208,5,72,
	0,0,208,210,3,20,10,0,209,207,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,
	212,1,0,0,0,212,214,1,0,0,0,213,211,1,0,0,0,214,215,5,58,0,0,215,217,1,
	0,0,0,216,190,1,0,0,0,216,205,1,0,0,0,217,218,1,0,0,0,218,219,5,36,0,0,
	219,220,3,6,3,0,220,221,5,70,0,0,221,5,1,0,0,0,222,223,5,107,0,0,223,7,
	1,0,0,0,224,227,3,12,6,0,225,227,3,10,5,0,226,224,1,0,0,0,226,225,1,0,0,
	0,227,9,1,0,0,0,228,230,3,22,11,0,229,228,1,0,0,0,230,233,1,0,0,0,231,229,
	1,0,0,0,231,232,1,0,0,0,232,238,1,0,0,0,233,231,1,0,0,0,234,236,5,48,0,
	0,235,237,5,50,0,0,236,235,1,0,0,0,236,237,1,0,0,0,237,239,1,0,0,0,238,
	234,1,0,0,0,238,239,1,0,0,0,239,240,1,0,0,0,240,241,3,140,70,0,241,242,
	5,70,0,0,242,11,1,0,0,0,243,245,3,22,11,0,244,243,1,0,0,0,245,248,1,0,0,
	0,246,244,1,0,0,0,246,247,1,0,0,0,247,253,1,0,0,0,248,246,1,0,0,0,249,251,
	5,48,0,0,250,252,5,50,0,0,251,250,1,0,0,0,251,252,1,0,0,0,252,254,1,0,0,
	0,253,249,1,0,0,0,253,254,1,0,0,0,254,260,1,0,0,0,255,261,3,18,9,0,256,
	261,3,90,45,0,257,261,3,88,44,0,258,261,3,96,48,0,259,261,3,14,7,0,260,
	255,1,0,0,0,260,256,1,0,0,0,260,257,1,0,0,0,260,258,1,0,0,0,260,259,1,0,
	0,0,261,13,1,0,0,0,262,263,5,20,0,0,263,264,3,20,10,0,264,265,5,57,0,0,
	265,270,3,16,8,0,266,267,5,72,0,0,267,269,3,16,8,0,268,266,1,0,0,0,269,
	272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,273,1,0,0,0,272,270,1,0,
	0,0,273,274,5,58,0,0,274,15,1,0,0,0,275,276,3,20,10,0,276,277,5,91,0,0,
	277,278,3,152,76,0,278,17,1,0,0,0,279,280,5,18,0,0,280,281,3,20,10,0,281,
	282,5,71,0,0,282,283,3,28,14,0,283,284,5,70,0,0,284,19,1,0,0,0,285,288,
	5,589,0,0,286,288,3,170,85,0,287,285,1,0,0,0,287,286,1,0,0,0,288,21,1,0,
	0,0,289,294,5,109,0,0,290,291,5,53,0,0,291,292,3,156,78,0,292,293,5,54,
	0,0,293,295,1,0,0,0,294,290,1,0,0,0,294,295,1,0,0,0,295,23,1,0,0,0,296,
	297,6,12,-1,0,297,300,3,30,15,0,298,300,3,74,37,0,299,296,1,0,0,0,299,298,
	1,0,0,0,300,309,1,0,0,0,301,302,10,2,0,0,302,303,5,55,0,0,303,308,5,56,
	0,0,304,305,10,1,0,0,305,306,5,61,0,0,306,308,5,60,0,0,307,301,1,0,0,0,
	307,304,1,0,0,0,308,311,1,0,0,0,309,307,1,0,0,0,309,310,1,0,0,0,310,25,
	1,0,0,0,311,309,1,0,0,0,312,314,5,30,0,0,313,312,1,0,0,0,313,314,1,0,0,
	0,314,315,1,0,0,0,315,316,3,28,14,0,316,27,1,0,0,0,317,321,3,24,12,0,318,
	319,5,87,0,0,319,322,5,108,0,0,320,322,5,69,0,0,321,318,1,0,0,0,321,320,
	1,0,0,0,321,322,1,0,0,0,322,29,1,0,0,0,323,329,3,34,17,0,324,329,3,38,19,
	0,325,329,3,36,18,0,326,329,3,64,32,0,327,329,3,32,16,0,328,323,1,0,0,0,
	328,324,1,0,0,0,328,325,1,0,0,0,328,326,1,0,0,0,328,327,1,0,0,0,329,31,
	1,0,0,0,330,331,5,16,0,0,331,33,1,0,0,0,332,333,5,15,0,0,333,35,1,0,0,0,
	334,335,5,13,0,0,335,37,1,0,0,0,336,339,3,40,20,0,337,339,3,42,21,0,338,
	336,1,0,0,0,338,337,1,0,0,0,339,39,1,0,0,0,340,349,3,44,22,0,341,349,3,
	46,23,0,342,349,3,48,24,0,343,349,3,50,25,0,344,349,3,52,26,0,345,349,3,
	54,27,0,346,349,3,56,28,0,347,349,3,58,29,0,348,340,1,0,0,0,348,341,1,0,
	0,0,348,342,1,0,0,0,348,343,1,0,0,0,348,344,1,0,0,0,348,345,1,0,0,0,348,
	346,1,0,0,0,348,347,1,0,0,0,349,41,1,0,0,0,350,353,3,60,30,0,351,353,3,
	62,31,0,352,350,1,0,0,0,352,351,1,0,0,0,353,43,1,0,0,0,354,355,5,2,0,0,
	355,45,1,0,0,0,356,357,5,3,0,0,357,47,1,0,0,0,358,359,5,4,0,0,359,49,1,
	0,0,0,360,361,5,5,0,0,361,51,1,0,0,0,362,363,5,6,0,0,363,53,1,0,0,0,364,
	365,5,7,0,0,365,55,1,0,0,0,366,367,5,8,0,0,367,57,1,0,0,0,368,369,5,9,0,
	0,369,59,1,0,0,0,370,371,5,10,0,0,371,61,1,0,0,0,372,373,5,11,0,0,373,63,
	1,0,0,0,374,375,5,14,0,0,375,65,1,0,0,0,376,377,5,17,0,0,377,67,1,0,0,0,
	378,379,3,72,36,0,379,69,1,0,0,0,380,383,3,68,34,0,381,382,5,87,0,0,382,
	384,5,108,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,71,1,0,0,0,385,386,4,
	36,2,0,386,389,5,589,0,0,387,389,3,170,85,0,388,385,1,0,0,0,388,387,1,0,
	0,0,389,73,1,0,0,0,390,391,3,76,38,0,391,75,1,0,0,0,392,393,4,38,3,0,393,
	394,5,589,0,0,394,77,1,0,0,0,395,409,3,68,34,0,396,405,5,53,0,0,397,402,
	3,86,43,0,398,399,5,72,0,0,399,401,3,86,43,0,400,398,1,0,0,0,401,404,1,
	0,0,0,402,400,1,0,0,0,402,403,1,0,0,0,403,406,1,0,0,0,404,402,1,0,0,0,405,
	397,1,0,0,0,405,406,1,0,0,0,406,407,1,0,0,0,407,409,5,54,0,0,408,395,1,
	0,0,0,408,396,1,0,0,0,409,410,1,0,0,0,410,411,5,59,0,0,411,412,3,84,42,
	0,412,79,1,0,0,0,413,416,3,78,39,0,414,415,5,87,0,0,415,417,5,108,0,0,416,
	414,1,0,0,0,416,417,1,0,0,0,417,81,1,0,0,0,418,427,3,28,14,0,419,427,3,
	70,35,0,420,421,4,41,4,1,421,427,3,80,40,0,422,423,5,53,0,0,423,424,3,80,
	40,0,424,425,5,54,0,0,425,427,1,0,0,0,426,418,1,0,0,0,426,419,1,0,0,0,426,
	420,1,0,0,0,426,422,1,0,0,0,427,83,1,0,0,0,428,438,3,66,33,0,429,434,3,
	82,41,0,430,431,5,72,0,0,431,433,3,82,41,0,432,430,1,0,0,0,433,436,1,0,
	0,0,434,432,1,0,0,0,434,435,1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,437,
	428,1,0,0,0,437,429,1,0,0,0,438,85,1,0,0,0,439,441,5,30,0,0,440,439,1,0,
	0,0,440,441,1,0,0,0,441,442,1,0,0,0,442,455,3,70,35,0,443,445,5,73,0,0,
	444,443,1,0,0,0,444,445,1,0,0,0,445,446,1,0,0,0,446,447,3,20,10,0,447,448,
	5,71,0,0,448,449,3,26,13,0,449,455,1,0,0,0,450,451,3,20,10,0,451,452,5,
	71,0,0,452,453,3,80,40,0,453,455,1,0,0,0,454,440,1,0,0,0,454,444,1,0,0,
	0,454,450,1,0,0,0,455,87,1,0,0,0,456,458,3,92,46,0,457,456,1,0,0,0,457,
	458,1,0,0,0,458,460,1,0,0,0,459,461,5,25,0,0,460,459,1,0,0,0,460,461,1,
	0,0,0,461,462,1,0,0,0,462,463,5,19,0,0,463,475,3,76,38,0,464,465,5,53,0,
	0,465,470,3,72,36,0,466,467,5,72,0,0,467,469,3,72,36,0,468,466,1,0,0,0,
	469,472,1,0,0,0,470,468,1,0,0,0,470,471,1,0,0,0,471,473,1,0,0,0,472,470,
	1,0,0,0,473,474,5,54,0,0,474,476,1,0,0,0,475,464,1,0,0,0,475,476,1,0,0,
	0,476,486,1,0,0,0,477,478,5,21,0,0,478,483,3,76,38,0,479,480,5,72,0,0,480,
	482,3,76,38,0,481,479,1,0,0,0,482,485,1,0,0,0,483,481,1,0,0,0,483,484,1,
	0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,486,477,1,0,0,0,486,487,1,0,0,0,487,
	488,1,0,0,0,488,493,5,57,0,0,489,492,3,94,47,0,490,492,3,96,48,0,491,489,
	1,0,0,0,491,490,1,0,0,0,492,495,1,0,0,0,493,491,1,0,0,0,493,494,1,0,0,0,
	494,496,1,0,0,0,495,493,1,0,0,0,496,497,5,58,0,0,497,89,1,0,0,0,498,499,
	5,23,0,0,499,511,3,76,38,0,500,501,5,53,0,0,501,506,3,72,36,0,502,503,5,
	72,0,0,503,505,3,72,36,0,504,502,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,
	0,506,507,1,0,0,0,507,509,1,0,0,0,508,506,1,0,0,0,509,510,5,54,0,0,510,
	512,1,0,0,0,511,500,1,0,0,0,511,512,1,0,0,0,512,522,1,0,0,0,513,514,5,21,
	0,0,514,519,3,76,38,0,515,516,5,72,0,0,516,518,3,76,38,0,517,515,1,0,0,
	0,518,521,1,0,0,0,519,517,1,0,0,0,519,520,1,0,0,0,520,523,1,0,0,0,521,519,
	1,0,0,0,522,513,1,0,0,0,522,523,1,0,0,0,523,533,1,0,0,0,524,528,5,57,0,
	0,525,527,3,94,47,0,526,525,1,0,0,0,527,530,1,0,0,0,528,526,1,0,0,0,528,
	529,1,0,0,0,529,531,1,0,0,0,530,528,1,0,0,0,531,534,5,58,0,0,532,534,5,
	70,0,0,533,524,1,0,0,0,533,532,1,0,0,0,534,91,1,0,0,0,535,536,7,0,0,0,536,
	93,1,0,0,0,537,539,3,92,46,0,538,537,1,0,0,0,538,539,1,0,0,0,539,541,1,
	0,0,0,540,542,5,24,0,0,541,540,1,0,0,0,541,542,1,0,0,0,542,544,1,0,0,0,
	543,545,5,30,0,0,544,543,1,0,0,0,544,545,1,0,0,0,545,546,1,0,0,0,546,547,
	3,20,10,0,547,548,5,71,0,0,548,549,3,26,13,0,549,550,5,70,0,0,550,95,1,
	0,0,0,551,555,3,98,49,0,552,555,3,100,50,0,553,555,3,102,51,0,554,551,1,
	0,0,0,554,552,1,0,0,0,554,553,1,0,0,0,555,97,1,0,0,0,556,558,4,49,5,1,557,
	559,3,92,46,0,558,557,1,0,0,0,558,559,1,0,0,0,559,560,1,0,0,0,560,561,5,
	25,0,0,561,562,3,104,52,0,562,563,5,70,0,0,563,571,1,0,0,0,564,565,4,49,
	6,1,565,566,5,25,0,0,566,567,5,22,0,0,567,568,3,104,52,0,568,569,5,70,0,
	0,569,571,1,0,0,0,570,556,1,0,0,0,570,564,1,0,0,0,571,99,1,0,0,0,572,574,
	4,50,7,1,573,575,3,92,46,0,574,573,1,0,0,0,574,575,1,0,0,0,575,577,1,0,
	0,0,576,578,5,24,0,0,577,576,1,0,0,0,577,578,1,0,0,0,578,579,1,0,0,0,579,
	580,3,104,52,0,580,584,5,57,0,0,581,583,3,108,54,0,582,581,1,0,0,0,583,
	586,1,0,0,0,584,582,1,0,0,0,584,585,1,0,0,0,585,587,1,0,0,0,586,584,1,0,
	0,0,587,588,5,58,0,0,588,602,1,0,0,0,589,590,4,50,8,1,590,591,5,22,0,0,
	591,592,3,104,52,0,592,596,5,57,0,0,593,595,3,108,54,0,594,593,1,0,0,0,
	595,598,1,0,0,0,596,594,1,0,0,0,596,597,1,0,0,0,597,599,1,0,0,0,598,596,
	1,0,0,0,599,600,5,58,0,0,600,602,1,0,0,0,601,572,1,0,0,0,601,589,1,0,0,
	0,602,101,1,0,0,0,603,605,4,51,9,1,604,606,3,92,46,0,605,604,1,0,0,0,605,
	606,1,0,0,0,606,607,1,0,0,0,607,608,5,24,0,0,608,609,5,26,0,0,609,610,3,
	104,52,0,610,614,5,57,0,0,611,613,3,166,83,0,612,611,1,0,0,0,613,616,1,
	0,0,0,614,612,1,0,0,0,614,615,1,0,0,0,615,617,1,0,0,0,616,614,1,0,0,0,617,
	618,5,58,0,0,618,633,1,0,0,0,619,620,4,51,10,1,620,621,5,26,0,0,621,622,
	5,22,0,0,622,623,3,104,52,0,623,627,5,57,0,0,624,626,3,166,83,0,625,624,
	1,0,0,0,626,629,1,0,0,0,627,625,1,0,0,0,627,628,1,0,0,0,628,630,1,0,0,0,
	629,627,1,0,0,0,630,631,5,58,0,0,631,633,1,0,0,0,632,603,1,0,0,0,632,619,
	1,0,0,0,633,103,1,0,0,0,634,646,3,20,10,0,635,636,5,61,0,0,636,641,3,106,
	53,0,637,638,5,72,0,0,638,640,3,106,53,0,639,637,1,0,0,0,640,643,1,0,0,
	0,641,639,1,0,0,0,641,642,1,0,0,0,642,644,1,0,0,0,643,641,1,0,0,0,644,645,
	5,60,0,0,645,647,1,0,0,0,646,635,1,0,0,0,646,647,1,0,0,0,647,648,1,0,0,
	0,648,657,5,53,0,0,649,654,3,86,43,0,650,651,5,72,0,0,651,653,3,86,43,0,
	652,650,1,0,0,0,653,656,1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,658,
	1,0,0,0,656,654,1,0,0,0,657,649,1,0,0,0,657,658,1,0,0,0,658,659,1,0,0,0,
	659,668,5,54,0,0,660,661,4,52,11,1,661,662,5,71,0,0,662,669,3,84,42,0,663,
	666,4,52,12,1,664,665,5,71,0,0,665,667,3,84,42,0,666,664,1,0,0,0,666,667,
	1,0,0,0,667,669,1,0,0,0,668,660,1,0,0,0,668,663,1,0,0,0,669,105,1,0,0,0,
	670,673,3,76,38,0,671,672,5,21,0,0,672,674,3,24,12,0,673,671,1,0,0,0,673,
	674,1,0,0,0,674,107,1,0,0,0,675,677,3,22,11,0,676,675,1,0,0,0,677,680,1,
	0,0,0,678,676,1,0,0,0,678,679,1,0,0,0,679,685,1,0,0,0,680,678,1,0,0,0,681,
	682,3,110,55,0,682,683,5,70,0,0,683,686,1,0,0,0,684,686,3,112,56,0,685,
	681,1,0,0,0,685,684,1,0,0,0,686,109,1,0,0,0,687,693,3,140,70,0,688,693,
	3,144,72,0,689,693,3,148,74,0,690,693,3,114,57,0,691,693,3,138,69,0,692,
	687,1,0,0,0,692,688,1,0,0,0,692,689,1,0,0,0,692,690,1,0,0,0,692,691,1,0,
	0,0,693,111,1,0,0,0,694,703,3,134,67,0,695,703,3,128,64,0,696,703,3,130,
	65,0,697,703,3,132,66,0,698,703,3,118,59,0,699,703,3,116,58,0,700,703,3,
	126,63,0,701,703,3,150,75,0,702,694,1,0,0,0,702,695,1,0,0,0,702,696,1,0,
	0,0,702,697,1,0,0,0,702,698,1,0,0,0,702,699,1,0,0,0,702,700,1,0,0,0,702,
	701,1,0,0,0,703,113,1,0,0,0,704,705,3,152,76,0,705,706,6,57,-1,0,706,707,
	5,76,0,0,707,717,1,0,0,0,708,709,3,152,76,0,709,710,6,57,-1,0,710,711,5,
	77,0,0,711,717,1,0,0,0,712,713,5,76,0,0,713,717,3,152,76,0,714,715,5,77,
	0,0,715,717,3,152,76,0,716,704,1,0,0,0,716,708,1,0,0,0,716,712,1,0,0,0,
	716,714,1,0,0,0,717,115,1,0,0,0,718,719,5,588,0,0,719,720,3,152,76,0,720,
	721,5,70,0,0,721,117,1,0,0,0,722,723,5,586,0,0,723,727,5,57,0,0,724,726,
	3,108,54,0,725,724,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,727,728,1,0,
	0,0,728,730,1,0,0,0,729,727,1,0,0,0,730,734,5,58,0,0,731,733,3,120,60,0,
	732,731,1,0,0,0,733,736,1,0,0,0,734,732,1,0,0,0,734,735,1,0,0,0,735,738,
	1,0,0,0,736,734,1,0,0,0,737,739,3,122,61,0,738,737,1,0,0,0,738,739,1,0,
	0,0,739,741,1,0,0,0,740,742,3,124,62,0,741,740,1,0,0,0,741,742,1,0,0,0,
	742,119,1,0,0,0,743,744,5,587,0,0,744,745,5,53,0,0,745,746,3,20,10,0,746,
	747,5,71,0,0,747,752,3,24,12,0,748,749,5,87,0,0,749,751,3,24,12,0,750,748,
	1,0,0,0,751,754,1,0,0,0,752,750,1,0,0,0,752,753,1,0,0,0,753,755,1,0,0,0,
	754,752,1,0,0,0,755,756,5,54,0,0,756,760,5,57,0,0,757,759,3,108,54,0,758,
	757,1,0,0,0,759,762,1,0,0,0,760,758,1,0,0,0,760,761,1,0,0,0,761,763,1,0,
	0,0,762,760,1,0,0,0,763,764,5,58,0,0,764,121,1,0,0,0,765,766,5,587,0,0,
	766,767,5,53,0,0,767,768,5,73,0,0,768,769,5,54,0,0,769,773,5,57,0,0,770,
	772,3,108,54,0,771,770,1,0,0,0,772,775,1,0,0,0,773,771,1,0,0,0,773,774,
	1,0,0,0,774,776,1,0,0,0,775,773,1,0,0,0,776,777,5,58,0,0,777,123,1,0,0,
	0,778,779,5,43,0,0,779,783,5,57,0,0,780,782,3,108,54,0,781,780,1,0,0,0,
	782,785,1,0,0,0,783,781,1,0,0,0,783,784,1,0,0,0,784,786,1,0,0,0,785,783,
	1,0,0,0,786,787,5,58,0,0,787,125,1,0,0,0,788,789,5,42,0,0,789,790,5,70,
	0,0,790,127,1,0,0,0,791,792,5,39,0,0,792,802,5,53,0,0,793,794,5,32,0,0,
	794,799,3,142,71,0,795,796,5,72,0,0,796,798,3,142,71,0,797,795,1,0,0,0,
	798,801,1,0,0,0,799,797,1,0,0,0,799,800,1,0,0,0,800,803,1,0,0,0,801,799,
	1,0,0,0,802,793,1,0,0,0,802,803,1,0,0,0,803,804,1,0,0,0,804,813,5,70,0,
	0,805,810,3,152,76,0,806,807,5,72,0,0,807,809,3,152,76,0,808,806,1,0,0,
	0,809,812,1,0,0,0,810,808,1,0,0,0,810,811,1,0,0,0,811,814,1,0,0,0,812,810,
	1,0,0,0,813,805,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,824,5,70,0,
	0,816,821,3,110,55,0,817,818,5,72,0,0,818,820,3,110,55,0,819,817,1,0,0,
	0,820,823,1,0,0,0,821,819,1,0,0,0,821,822,1,0,0,0,822,825,1,0,0,0,823,821,
	1,0,0,0,824,816,1,0,0,0,824,825,1,0,0,0,825,826,1,0,0,0,826,827,5,54,0,
	0,827,828,3,136,68,0,828,129,1,0,0,0,829,830,5,41,0,0,830,831,5,53,0,0,
	831,832,3,152,76,0,832,833,5,54,0,0,833,834,3,136,68,0,834,131,1,0,0,0,
	835,836,5,40,0,0,836,840,5,57,0,0,837,839,3,108,54,0,838,837,1,0,0,0,839,
	842,1,0,0,0,840,838,1,0,0,0,840,841,1,0,0,0,841,843,1,0,0,0,842,840,1,0,
	0,0,843,844,5,58,0,0,844,845,5,41,0,0,845,846,5,53,0,0,846,847,3,152,76,
	0,847,848,5,54,0,0,848,133,1,0,0,0,849,850,5,117,0,0,850,851,5,53,0,0,851,
	852,3,152,76,0,852,853,5,54,0,0,853,863,3,136,68,0,854,855,5,118,0,0,855,
	856,5,117,0,0,856,857,5,53,0,0,857,858,3,152,76,0,858,859,5,54,0,0,859,
	860,3,136,68,0,860,862,1,0,0,0,861,854,1,0,0,0,862,865,1,0,0,0,863,861,
	1,0,0,0,863,864,1,0,0,0,864,870,1,0,0,0,865,863,1,0,0,0,866,867,5,118,0,
	0,867,869,3,136,68,0,868,866,1,0,0,0,869,872,1,0,0,0,870,868,1,0,0,0,870,
	871,1,0,0,0,871,135,1,0,0,0,872,870,1,0,0,0,873,883,3,108,54,0,874,878,
	5,57,0,0,875,877,3,108,54,0,876,875,1,0,0,0,877,880,1,0,0,0,878,876,1,0,
	0,0,878,879,1,0,0,0,879,881,1,0,0,0,880,878,1,0,0,0,881,883,5,58,0,0,882,
	873,1,0,0,0,882,874,1,0,0,0,883,137,1,0,0,0,884,885,3,152,76,0,885,886,
	5,74,0,0,886,888,1,0,0,0,887,884,1,0,0,0,887,888,1,0,0,0,888,889,1,0,0,
	0,889,890,3,154,77,0,890,139,1,0,0,0,891,892,7,1,0,0,892,897,3,142,71,0,
	893,894,5,72,0,0,894,896,3,142,71,0,895,893,1,0,0,0,896,899,1,0,0,0,897,
	895,1,0,0,0,897,898,1,0,0,0,898,141,1,0,0,0,899,897,1,0,0,0,900,904,3,20,
	10,0,901,902,5,71,0,0,902,905,3,28,14,0,903,905,3,80,40,0,904,901,1,0,0,
	0,904,903,1,0,0,0,904,905,1,0,0,0,905,908,1,0,0,0,906,907,5,91,0,0,907,
	909,3,152,76,0,908,906,1,0,0,0,908,909,1,0,0,0,909,143,1,0,0,0,910,911,
	3,152,76,0,911,912,5,74,0,0,912,914,1,0,0,0,913,910,1,0,0,0,913,914,1,0,
	0,0,914,915,1,0,0,0,915,916,3,20,10,0,916,917,3,146,73,0,917,918,3,152,
	76,0,918,145,1,0,0,0,919,920,7,2,0,0,920,147,1,0,0,0,921,922,3,152,76,0,
	922,923,5,55,0,0,923,924,3,152,76,0,924,925,5,56,0,0,925,926,3,146,73,0,
	926,927,3,152,76,0,927,149,1,0,0,0,928,930,5,123,0,0,929,931,3,152,76,0,
	930,929,1,0,0,0,930,931,1,0,0,0,931,932,1,0,0,0,932,933,5,70,0,0,933,151,
	1,0,0,0,934,935,6,76,-1,0,935,936,5,33,0,0,936,983,3,154,77,0,937,983,3,
	154,77,0,938,945,5,46,0,0,939,940,5,53,0,0,940,941,3,152,76,0,941,942,5,
	54,0,0,942,946,1,0,0,0,943,944,5,46,0,0,944,946,3,152,76,0,945,939,1,0,
	0,0,945,943,1,0,0,0,946,983,1,0,0,0,947,948,5,76,0,0,948,983,3,152,76,27,
	949,950,5,77,0,0,950,983,3,152,76,26,951,952,5,78,0,0,952,983,3,152,76,
	25,953,954,5,79,0,0,954,983,3,152,76,24,955,956,5,85,0,0,956,983,3,152,
	76,23,957,958,5,66,0,0,958,983,3,152,76,22,959,983,5,44,0,0,960,983,3,20,
	10,0,961,966,5,45,0,0,962,963,5,61,0,0,963,964,3,20,10,0,964,965,5,60,0,
	0,965,967,1,0,0,0,966,962,1,0,0,0,966,967,1,0,0,0,967,983,1,0,0,0,968,983,
	3,156,78,0,969,970,5,53,0,0,970,971,3,152,76,0,971,972,5,54,0,0,972,983,
	1,0,0,0,973,974,5,61,0,0,974,975,3,24,12,0,975,976,5,60,0,0,976,977,3,152,
	76,3,977,983,1,0,0,0,978,979,3,20,10,0,979,980,3,146,73,0,980,981,3,152,
	76,1,981,983,1,0,0,0,982,934,1,0,0,0,982,937,1,0,0,0,982,938,1,0,0,0,982,
	947,1,0,0,0,982,949,1,0,0,0,982,951,1,0,0,0,982,953,1,0,0,0,982,955,1,0,
	0,0,982,957,1,0,0,0,982,959,1,0,0,0,982,960,1,0,0,0,982,961,1,0,0,0,982,
	968,1,0,0,0,982,969,1,0,0,0,982,973,1,0,0,0,982,978,1,0,0,0,983,1048,1,
	0,0,0,984,985,10,21,0,0,985,986,7,3,0,0,986,1047,3,152,76,22,987,988,10,
	20,0,0,988,989,7,4,0,0,989,1047,3,152,76,21,990,991,10,19,0,0,991,992,7,
	5,0,0,992,1047,3,152,76,20,993,994,10,18,0,0,994,995,7,6,0,0,995,1047,3,
	152,76,19,996,997,10,17,0,0,997,998,5,47,0,0,998,1047,3,152,76,18,999,1000,
	10,16,0,0,1000,1001,5,51,0,0,1001,1047,3,152,76,17,1002,1003,10,15,0,0,
	1003,1004,7,7,0,0,1004,1047,3,152,76,16,1005,1006,10,14,0,0,1006,1007,5,
	86,0,0,1007,1047,3,152,76,15,1008,1009,10,13,0,0,1009,1010,5,84,0,0,1010,
	1047,3,152,76,14,1011,1012,10,12,0,0,1012,1013,5,87,0,0,1013,1047,3,152,
	76,13,1014,1015,10,11,0,0,1015,1016,5,67,0,0,1016,1047,3,152,76,12,1017,
	1018,10,10,0,0,1018,1019,5,68,0,0,1019,1047,3,152,76,11,1020,1021,10,9,
	0,0,1021,1022,5,69,0,0,1022,1023,3,152,76,0,1023,1024,5,71,0,0,1024,1025,
	3,152,76,10,1025,1047,1,0,0,0,1026,1027,10,35,0,0,1027,1028,5,55,0,0,1028,
	1029,3,152,76,0,1029,1030,5,56,0,0,1030,1047,1,0,0,0,1031,1032,10,34,0,
	0,1032,1033,5,74,0,0,1033,1047,3,20,10,0,1034,1035,10,31,0,0,1035,1036,
	5,74,0,0,1036,1047,3,154,77,0,1037,1038,10,30,0,0,1038,1039,6,76,-1,0,1039,
	1047,5,76,0,0,1040,1041,10,29,0,0,1041,1042,6,76,-1,0,1042,1047,5,77,0,
	0,1043,1044,10,2,0,0,1044,1045,5,52,0,0,1045,1047,3,24,12,0,1046,984,1,
	0,0,0,1046,987,1,0,0,0,1046,990,1,0,0,0,1046,993,1,0,0,0,1046,996,1,0,0,
	0,1046,999,1,0,0,0,1046,1002,1,0,0,0,1046,1005,1,0,0,0,1046,1008,1,0,0,
	0,1046,1011,1,0,0,0,1046,1014,1,0,0,0,1046,1017,1,0,0,0,1046,1020,1,0,0,
	0,1046,1026,1,0,0,0,1046,1031,1,0,0,0,1046,1034,1,0,0,0,1046,1037,1,0,0,
	0,1046,1040,1,0,0,0,1046,1043,1,0,0,0,1047,1050,1,0,0,0,1048,1046,1,0,0,
	0,1048,1049,1,0,0,0,1049,153,1,0,0,0,1050,1048,1,0,0,0,1051,1063,3,20,10,
	0,1052,1053,5,61,0,0,1053,1058,3,28,14,0,1054,1055,5,72,0,0,1055,1057,3,
	28,14,0,1056,1054,1,0,0,0,1057,1060,1,0,0,0,1058,1056,1,0,0,0,1058,1059,
	1,0,0,0,1059,1061,1,0,0,0,1060,1058,1,0,0,0,1061,1062,5,60,0,0,1062,1064,
	1,0,0,0,1063,1052,1,0,0,0,1063,1064,1,0,0,0,1064,1065,1,0,0,0,1065,1074,
	5,53,0,0,1066,1071,3,152,76,0,1067,1068,5,72,0,0,1068,1070,3,152,76,0,1069,
	1067,1,0,0,0,1070,1073,1,0,0,0,1071,1069,1,0,0,0,1071,1072,1,0,0,0,1072,
	1075,1,0,0,0,1073,1071,1,0,0,0,1074,1066,1,0,0,0,1074,1075,1,0,0,0,1075,
	1076,1,0,0,0,1076,1077,5,54,0,0,1077,155,1,0,0,0,1078,1088,5,108,0,0,1079,
	1088,5,105,0,0,1080,1088,5,103,0,0,1081,1088,5,104,0,0,1082,1088,5,106,
	0,0,1083,1088,5,107,0,0,1084,1088,3,158,79,0,1085,1088,3,160,80,0,1086,
	1088,3,162,81,0,1087,1078,1,0,0,0,1087,1079,1,0,0,0,1087,1080,1,0,0,0,1087,
	1081,1,0,0,0,1087,1082,1,0,0,0,1087,1083,1,0,0,0,1087,1084,1,0,0,0,1087,
	1085,1,0,0,0,1087,1086,1,0,0,0,1088,157,1,0,0,0,1089,1091,5,30,0,0,1090,
	1089,1,0,0,0,1090,1091,1,0,0,0,1091,1092,1,0,0,0,1092,1101,5,55,0,0,1093,
	1098,3,152,76,0,1094,1095,5,72,0,0,1095,1097,3,152,76,0,1096,1094,1,0,0,
	0,1097,1100,1,0,0,0,1098,1096,1,0,0,0,1098,1099,1,0,0,0,1099,1102,1,0,0,
	0,1100,1098,1,0,0,0,1101,1093,1,0,0,0,1101,1102,1,0,0,0,1102,1103,1,0,0,
	0,1103,1104,5,56,0,0,1104,159,1,0,0,0,1105,1107,5,30,0,0,1106,1105,1,0,
	0,0,1106,1107,1,0,0,0,1107,1108,1,0,0,0,1108,1117,5,61,0,0,1109,1114,3,
	152,76,0,1110,1111,5,72,0,0,1111,1113,3,152,76,0,1112,1110,1,0,0,0,1113,
	1116,1,0,0,0,1114,1112,1,0,0,0,1114,1115,1,0,0,0,1115,1118,1,0,0,0,1116,
	1114,1,0,0,0,1117,1109,1,0,0,0,1117,1118,1,0,0,0,1118,1119,1,0,0,0,1119,
	1120,5,60,0,0,1120,161,1,0,0,0,1121,1123,5,30,0,0,1122,1121,1,0,0,0,1122,
	1123,1,0,0,0,1123,1124,1,0,0,0,1124,1133,5,57,0,0,1125,1130,3,164,82,0,
	1126,1127,5,72,0,0,1127,1129,3,164,82,0,1128,1126,1,0,0,0,1129,1132,1,0,
	0,0,1130,1128,1,0,0,0,1130,1131,1,0,0,0,1131,1134,1,0,0,0,1132,1130,1,0,
	0,0,1133,1125,1,0,0,0,1133,1134,1,0,0,0,1134,1135,1,0,0,0,1135,1136,5,58,
	0,0,1136,163,1,0,0,0,1137,1138,3,20,10,0,1138,1139,5,71,0,0,1139,1140,3,
	152,76,0,1140,165,1,0,0,0,1141,1143,3,152,76,0,1142,1141,1,0,0,0,1143,1146,
	1,0,0,0,1144,1142,1,0,0,0,1144,1145,1,0,0,0,1145,1147,1,0,0,0,1146,1144,
	1,0,0,0,1147,1151,3,168,84,0,1148,1150,5,103,0,0,1149,1148,1,0,0,0,1150,
	1153,1,0,0,0,1151,1149,1,0,0,0,1151,1152,1,0,0,0,1152,1154,1,0,0,0,1153,
	1151,1,0,0,0,1154,1155,5,70,0,0,1155,167,1,0,0,0,1156,1160,3,170,85,0,1157,
	1160,3,172,86,0,1158,1160,3,174,87,0,1159,1156,1,0,0,0,1159,1157,1,0,0,
	0,1159,1158,1,0,0,0,1160,169,1,0,0,0,1161,1162,7,8,0,0,1162,171,1,0,0,0,
	1163,1164,7,9,0,0,1164,173,1,0,0,0,1165,1166,7,10,0,0,1166,175,1,0,0,0,
	126,180,186,198,203,211,216,226,231,236,238,246,251,253,260,270,287,294,
	299,307,309,313,321,328,338,348,352,383,388,402,405,408,416,426,434,437,
	440,444,454,457,460,470,475,483,486,491,493,506,511,519,522,528,533,538,
	541,544,554,558,570,574,577,584,596,601,605,614,627,632,641,646,654,657,
	666,668,673,678,685,692,702,716,727,734,738,741,752,760,773,783,799,802,
	810,813,821,824,840,863,870,878,882,887,897,904,908,913,930,945,966,982,
	1046,1048,1058,1063,1071,1074,1087,1090,1098,1101,1106,1114,1117,1122,1130,
	1133,1144,1151,1159];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComposeParser.__ATN) {
			ComposeParser.__ATN = new ATNDeserializer().deserialize(ComposeParser._serializedATN);
		}

		return ComposeParser.__ATN;
	}


	static DecisionsToDFA = ComposeParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class Compilation_unitContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public preamble(): PreambleContext {
		return this.getTypedRuleContext(PreambleContext, 0) as PreambleContext;
	}
	public compilation_atom_list(): Compilation_atomContext[] {
		return this.getTypedRuleContexts(Compilation_atomContext) as Compilation_atomContext[];
	}
	public compilation_atom(i: number): Compilation_atomContext {
		return this.getTypedRuleContext(Compilation_atomContext, i) as Compilation_atomContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_compilation_unit;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCompilation_unit) {
	 		listener.enterCompilation_unit(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCompilation_unit) {
	 		listener.exitCompilation_unit(this);
		}
	}
}


export class PreambleContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public import_statement_list(): Import_statementContext[] {
		return this.getTypedRuleContexts(Import_statementContext) as Import_statementContext[];
	}
	public import_statement(i: number): Import_statementContext {
		return this.getTypedRuleContext(Import_statementContext, i) as Import_statementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_preamble;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPreamble) {
	 		listener.enterPreamble(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPreamble) {
	 		listener.exitPreamble(this);
		}
	}
}


export class Import_statementContext extends ParserRuleContext {
	public _main!: IdentifierContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IMPORT(): TerminalNode {
		return this.getToken(ComposeParser.IMPORT, 0);
	}
	public FROM(): TerminalNode {
		return this.getToken(ComposeParser.FROM, 0);
	}
	public import_source(): Import_sourceContext {
		return this.getTypedRuleContext(Import_sourceContext, 0) as Import_sourceContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public identifier_list(): IdentifierContext[] {
		return this.getTypedRuleContexts(IdentifierContext) as IdentifierContext[];
	}
	public identifier(i: number): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, i) as IdentifierContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_import_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterImport_statement) {
	 		listener.enterImport_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitImport_statement) {
	 		listener.exitImport_statement(this);
		}
	}
}


export class Import_sourceContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.STRING_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_import_source;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterImport_source) {
	 		listener.enterImport_source(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitImport_source) {
	 		listener.exitImport_source(this);
		}
	}
}


export class Compilation_atomContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration(): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, 0) as DeclarationContext;
	}
	public global_statement(): Global_statementContext {
		return this.getTypedRuleContext(Global_statementContext, 0) as Global_statementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_compilation_atom;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCompilation_atom) {
	 		listener.enterCompilation_atom(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCompilation_atom) {
	 		listener.exitCompilation_atom(this);
		}
	}
}


export class Global_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_instances_statement(): Declare_instances_statementContext {
		return this.getTypedRuleContext(Declare_instances_statementContext, 0) as Declare_instances_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public EXPORT(): TerminalNode {
		return this.getToken(ComposeParser.EXPORT, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ComposeParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_global_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterGlobal_statement) {
	 		listener.enterGlobal_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitGlobal_statement) {
	 		listener.exitGlobal_statement(this);
		}
	}
}


export class DeclarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_declaration(): Attribute_declarationContext {
		return this.getTypedRuleContext(Attribute_declarationContext, 0) as Attribute_declarationContext;
	}
	public struct_declaration(): Struct_declarationContext {
		return this.getTypedRuleContext(Struct_declarationContext, 0) as Struct_declarationContext;
	}
	public class_declaration(): Class_declarationContext {
		return this.getTypedRuleContext(Class_declarationContext, 0) as Class_declarationContext;
	}
	public function_declaration(): Function_declarationContext {
		return this.getTypedRuleContext(Function_declarationContext, 0) as Function_declarationContext;
	}
	public enum_declaration(): Enum_declarationContext {
		return this.getTypedRuleContext(Enum_declarationContext, 0) as Enum_declarationContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
	public EXPORT(): TerminalNode {
		return this.getToken(ComposeParser.EXPORT, 0);
	}
	public DEFAULT(): TerminalNode {
		return this.getToken(ComposeParser.DEFAULT, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDeclaration) {
	 		listener.enterDeclaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDeclaration) {
	 		listener.exitDeclaration(this);
		}
	}
}


export class Enum_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ENUM(): TerminalNode {
		return this.getToken(ComposeParser.ENUM, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public enum_item_list(): Enum_itemContext[] {
		return this.getTypedRuleContexts(Enum_itemContext) as Enum_itemContext[];
	}
	public enum_item(i: number): Enum_itemContext {
		return this.getTypedRuleContext(Enum_itemContext, i) as Enum_itemContext;
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_enum_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterEnum_declaration) {
	 		listener.enterEnum_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitEnum_declaration) {
	 		listener.exitEnum_declaration(this);
		}
	}
}


export class Enum_itemContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_enum_item;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterEnum_item) {
	 		listener.enterEnum_item(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitEnum_item) {
	 		listener.exitEnum_item(this);
		}
	}
}


export class Attribute_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ATTRIBUTE(): TerminalNode {
		return this.getToken(ComposeParser.ATTRIBUTE, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_attribute_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAttribute_declaration) {
	 		listener.enterAttribute_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAttribute_declaration) {
	 		listener.exitAttribute_declaration(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
	}
	public plain_opcode(): Plain_opcodeContext {
		return this.getTypedRuleContext(Plain_opcodeContext, 0) as Plain_opcodeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_identifier;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterIdentifier) {
	 		listener.enterIdentifier(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitIdentifier) {
	 		listener.exitIdentifier(this);
		}
	}
}


export class AnnotationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANNOTATION(): TerminalNode {
		return this.getToken(ComposeParser.ANNOTATION, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_annotation;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAnnotation) {
	 		listener.enterAnnotation(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAnnotation) {
	 		listener.exitAnnotation(this);
		}
	}
}


export class Value_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_value_type;
	}
	public copyFrom(ctx: Value_typeContext): void {
		super.copyFrom(ctx);
	}
}
export class ArrayTypeContext extends Value_typeContext {
	constructor(parser: ComposeParser, ctx: Value_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(ComposeParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(ComposeParser.RBRAK, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterArrayType) {
	 		listener.enterArrayType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitArrayType) {
	 		listener.exitArrayType(this);
		}
	}
}
export class SetTypeContext extends Value_typeContext {
	constructor(parser: ComposeParser, ctx: Value_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSetType) {
	 		listener.enterSetType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSetType) {
	 		listener.exitSetType(this);
		}
	}
}
export class NativeTypeContext extends Value_typeContext {
	constructor(parser: ComposeParser, ctx: Value_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public native_type(): Native_typeContext {
		return this.getTypedRuleContext(Native_typeContext, 0) as Native_typeContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNativeType) {
	 		listener.enterNativeType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNativeType) {
	 		listener.exitNativeType(this);
		}
	}
}
export class UserTypeContext extends Value_typeContext {
	constructor(parser: ComposeParser, ctx: Value_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public user_type(): User_typeContext {
		return this.getTypedRuleContext(User_typeContext, 0) as User_typeContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUserType) {
	 		listener.enterUserType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUserType) {
	 		listener.exitUserType(this);
		}
	}
}


export class Mutable_value_type_or_nullContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_mutable_value_type_or_null;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMutable_value_type_or_null) {
	 		listener.enterMutable_value_type_or_null(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMutable_value_type_or_null) {
	 		listener.exitMutable_value_type_or_null(this);
		}
	}
}


export class Value_type_or_nullContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public QUESTION(): TerminalNode {
		return this.getToken(ComposeParser.QUESTION, 0);
	}
	public PIPE(): TerminalNode {
		return this.getToken(ComposeParser.PIPE, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_value_type_or_null;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterValue_type_or_null) {
	 		listener.enterValue_type_or_null(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitValue_type_or_null) {
	 		listener.exitValue_type_or_null(this);
		}
	}
}


export class Native_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public boolean_type(): Boolean_typeContext {
		return this.getTypedRuleContext(Boolean_typeContext, 0) as Boolean_typeContext;
	}
	public number_type(): Number_typeContext {
		return this.getTypedRuleContext(Number_typeContext, 0) as Number_typeContext;
	}
	public char_type(): Char_typeContext {
		return this.getTypedRuleContext(Char_typeContext, 0) as Char_typeContext;
	}
	public string_type(): String_typeContext {
		return this.getTypedRuleContext(String_typeContext, 0) as String_typeContext;
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_native_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNative_type) {
	 		listener.enterNative_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNative_type) {
	 		listener.exitNative_type(this);
		}
	}
}


export class Any_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ANY(): TerminalNode {
		return this.getToken(ComposeParser.ANY, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_any_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAny_type) {
	 		listener.enterAny_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAny_type) {
	 		listener.exitAny_type(this);
		}
	}
}


export class Boolean_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BOOLEAN(): TerminalNode {
		return this.getToken(ComposeParser.BOOLEAN, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_boolean_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBoolean_type) {
	 		listener.enterBoolean_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBoolean_type) {
	 		listener.exitBoolean_type(this);
		}
	}
}


export class Char_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CHAR(): TerminalNode {
		return this.getToken(ComposeParser.CHAR, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_char_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterChar_type) {
	 		listener.enterChar_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitChar_type) {
	 		listener.exitChar_type(this);
		}
	}
}


export class Number_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public integer_type(): Integer_typeContext {
		return this.getTypedRuleContext(Integer_typeContext, 0) as Integer_typeContext;
	}
	public decimal_type(): Decimal_typeContext {
		return this.getTypedRuleContext(Decimal_typeContext, 0) as Decimal_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_number_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNumber_type) {
	 		listener.enterNumber_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNumber_type) {
	 		listener.exitNumber_type(this);
		}
	}
}


export class Integer_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public i8_type(): I8_typeContext {
		return this.getTypedRuleContext(I8_typeContext, 0) as I8_typeContext;
	}
	public i16_type(): I16_typeContext {
		return this.getTypedRuleContext(I16_typeContext, 0) as I16_typeContext;
	}
	public i32_type(): I32_typeContext {
		return this.getTypedRuleContext(I32_typeContext, 0) as I32_typeContext;
	}
	public i64_type(): I64_typeContext {
		return this.getTypedRuleContext(I64_typeContext, 0) as I64_typeContext;
	}
	public u8_type(): U8_typeContext {
		return this.getTypedRuleContext(U8_typeContext, 0) as U8_typeContext;
	}
	public u16_type(): U16_typeContext {
		return this.getTypedRuleContext(U16_typeContext, 0) as U16_typeContext;
	}
	public u32_type(): U32_typeContext {
		return this.getTypedRuleContext(U32_typeContext, 0) as U32_typeContext;
	}
	public u64_type(): U64_typeContext {
		return this.getTypedRuleContext(U64_typeContext, 0) as U64_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_integer_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterInteger_type) {
	 		listener.enterInteger_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitInteger_type) {
	 		listener.exitInteger_type(this);
		}
	}
}


export class Decimal_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public f32_type(): F32_typeContext {
		return this.getTypedRuleContext(F32_typeContext, 0) as F32_typeContext;
	}
	public f64_type(): F64_typeContext {
		return this.getTypedRuleContext(F64_typeContext, 0) as F64_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_decimal_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDecimal_type) {
	 		listener.enterDecimal_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDecimal_type) {
	 		listener.exitDecimal_type(this);
		}
	}
}


export class I8_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public I8(): TerminalNode {
		return this.getToken(ComposeParser.I8, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_i8_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterI8_type) {
	 		listener.enterI8_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitI8_type) {
	 		listener.exitI8_type(this);
		}
	}
}


export class I16_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public I16(): TerminalNode {
		return this.getToken(ComposeParser.I16, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_i16_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterI16_type) {
	 		listener.enterI16_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitI16_type) {
	 		listener.exitI16_type(this);
		}
	}
}


export class I32_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public I32(): TerminalNode {
		return this.getToken(ComposeParser.I32, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_i32_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterI32_type) {
	 		listener.enterI32_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitI32_type) {
	 		listener.exitI32_type(this);
		}
	}
}


export class I64_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public I64(): TerminalNode {
		return this.getToken(ComposeParser.I64, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_i64_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterI64_type) {
	 		listener.enterI64_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitI64_type) {
	 		listener.exitI64_type(this);
		}
	}
}


export class U8_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public U8(): TerminalNode {
		return this.getToken(ComposeParser.U8, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_u8_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterU8_type) {
	 		listener.enterU8_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitU8_type) {
	 		listener.exitU8_type(this);
		}
	}
}


export class U16_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public U16(): TerminalNode {
		return this.getToken(ComposeParser.U16, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_u16_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterU16_type) {
	 		listener.enterU16_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitU16_type) {
	 		listener.exitU16_type(this);
		}
	}
}


export class U32_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public U32(): TerminalNode {
		return this.getToken(ComposeParser.U32, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_u32_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterU32_type) {
	 		listener.enterU32_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitU32_type) {
	 		listener.exitU32_type(this);
		}
	}
}


export class U64_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public U64(): TerminalNode {
		return this.getToken(ComposeParser.U64, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_u64_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterU64_type) {
	 		listener.enterU64_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitU64_type) {
	 		listener.exitU64_type(this);
		}
	}
}


export class F32_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public F32(): TerminalNode {
		return this.getToken(ComposeParser.F32, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_f32_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterF32_type) {
	 		listener.enterF32_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitF32_type) {
	 		listener.exitF32_type(this);
		}
	}
}


export class F64_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public F64(): TerminalNode {
		return this.getToken(ComposeParser.F64, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_f64_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterF64_type) {
	 		listener.enterF64_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitF64_type) {
	 		listener.exitF64_type(this);
		}
	}
}


export class String_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRING(): TerminalNode {
		return this.getToken(ComposeParser.STRING, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_string_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterString_type) {
	 		listener.enterString_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitString_type) {
	 		listener.exitString_type(this);
		}
	}
}


export class Void_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public VOID(): TerminalNode {
		return this.getToken(ComposeParser.VOID, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_void_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterVoid_type) {
	 		listener.enterVoid_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitVoid_type) {
	 		listener.exitVoid_type(this);
		}
	}
}


export class Attribute_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_ref(): Attribute_refContext {
		return this.getTypedRuleContext(Attribute_refContext, 0) as Attribute_refContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_attribute_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAttribute_type) {
	 		listener.enterAttribute_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAttribute_type) {
	 		listener.exitAttribute_type(this);
		}
	}
}


export class Attribute_type_or_nullContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public attribute_type(): Attribute_typeContext {
		return this.getTypedRuleContext(Attribute_typeContext, 0) as Attribute_typeContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(ComposeParser.PIPE, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_attribute_type_or_null;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAttribute_type_or_null) {
	 		listener.enterAttribute_type_or_null(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAttribute_type_or_null) {
	 		listener.exitAttribute_type_or_null(this);
		}
	}
}


export class Attribute_refContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
	}
	public plain_opcode(): Plain_opcodeContext {
		return this.getTypedRuleContext(Plain_opcodeContext, 0) as Plain_opcodeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_attribute_ref;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAttribute_ref) {
	 		listener.enterAttribute_ref(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAttribute_ref) {
	 		listener.exitAttribute_ref(this);
		}
	}
}


export class User_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public user_ref(): User_refContext {
		return this.getTypedRuleContext(User_refContext, 0) as User_refContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_user_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUser_type) {
	 		listener.enterUser_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUser_type) {
	 		listener.exitUser_type(this);
		}
	}
}


export class User_refContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_user_ref;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUser_ref) {
	 		listener.enterUser_ref(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUser_ref) {
	 		listener.exitUser_ref(this);
		}
	}
}


export class Function_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ARROW(): TerminalNode {
		return this.getToken(ComposeParser.ARROW, 0);
	}
	public return_types(): Return_typesContext {
		return this.getTypedRuleContext(Return_typesContext, 0) as Return_typesContext;
	}
	public attribute_type(): Attribute_typeContext {
		return this.getTypedRuleContext(Attribute_typeContext, 0) as Attribute_typeContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_type) {
	 		listener.enterFunction_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_type) {
	 		listener.exitFunction_type(this);
		}
	}
}


export class Function_type_or_nullContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_type(): Function_typeContext {
		return this.getTypedRuleContext(Function_typeContext, 0) as Function_typeContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(ComposeParser.PIPE, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_type_or_null;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_type_or_null) {
	 		listener.enterFunction_type_or_null(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_type_or_null) {
	 		listener.exitFunction_type_or_null(this);
		}
	}
}


export class Return_typeContext extends ParserRuleContext {
	public requireParenthesis: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, requireParenthesis: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.requireParenthesis = requireParenthesis;
	}
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
	}
	public attribute_type_or_null(): Attribute_type_or_nullContext {
		return this.getTypedRuleContext(Attribute_type_or_nullContext, 0) as Attribute_type_or_nullContext;
	}
	public function_type_or_null(): Function_type_or_nullContext {
		return this.getTypedRuleContext(Function_type_or_nullContext, 0) as Function_type_or_nullContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_return_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterReturn_type) {
	 		listener.enterReturn_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitReturn_type) {
	 		listener.exitReturn_type(this);
		}
	}
}


export class Return_typesContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public void_type(): Void_typeContext {
		return this.getTypedRuleContext(Void_typeContext, 0) as Void_typeContext;
	}
	public return_type_list(): Return_typeContext[] {
		return this.getTypedRuleContexts(Return_typeContext) as Return_typeContext[];
	}
	public return_type(i: number): Return_typeContext {
		return this.getTypedRuleContext(Return_typeContext, i) as Return_typeContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_return_types;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterReturn_types) {
	 		listener.enterReturn_types(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitReturn_types) {
	 		listener.exitReturn_types(this);
		}
	}
}


export class ParameterContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_parameter;
	}
	public copyFrom(ctx: ParameterContext): void {
		super.copyFrom(ctx);
	}
}
export class AttributeParameterContext extends ParameterContext {
	constructor(parser: ComposeParser, ctx: ParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public attribute_type_or_null(): Attribute_type_or_nullContext {
		return this.getTypedRuleContext(Attribute_type_or_nullContext, 0) as Attribute_type_or_nullContext;
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAttributeParameter) {
	 		listener.enterAttributeParameter(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAttributeParameter) {
	 		listener.exitAttributeParameter(this);
		}
	}
}
export class TypedParameterContext extends ParameterContext {
	constructor(parser: ComposeParser, ctx: ParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public mutable_value_type_or_null(): Mutable_value_type_or_nullContext {
		return this.getTypedRuleContext(Mutable_value_type_or_nullContext, 0) as Mutable_value_type_or_nullContext;
	}
	public ETC(): TerminalNode {
		return this.getToken(ComposeParser.ETC, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterTypedParameter) {
	 		listener.enterTypedParameter(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitTypedParameter) {
	 		listener.exitTypedParameter(this);
		}
	}
}
export class FunctionParameterContext extends ParameterContext {
	constructor(parser: ComposeParser, ctx: ParameterContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public function_type_or_null(): Function_type_or_nullContext {
		return this.getTypedRuleContext(Function_type_or_nullContext, 0) as Function_type_or_nullContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunctionParameter) {
	 		listener.enterFunctionParameter(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunctionParameter) {
	 		listener.exitFunctionParameter(this);
		}
	}
}


export class Class_declarationContext extends ParserRuleContext {
	public _id!: User_refContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CLASS(): TerminalNode {
		return this.getToken(ComposeParser.CLASS, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public user_ref_list(): User_refContext[] {
		return this.getTypedRuleContexts(User_refContext) as User_refContext[];
	}
	public user_ref(i: number): User_refContext {
		return this.getTypedRuleContext(User_refContext, i) as User_refContext;
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(ComposeParser.ABSTRACT, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public attribute_ref_list(): Attribute_refContext[] {
		return this.getTypedRuleContexts(Attribute_refContext) as Attribute_refContext[];
	}
	public attribute_ref(i: number): Attribute_refContext {
		return this.getTypedRuleContext(Attribute_refContext, i) as Attribute_refContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(ComposeParser.EXTENDS, 0);
	}
	public field_declaration_list(): Field_declarationContext[] {
		return this.getTypedRuleContexts(Field_declarationContext) as Field_declarationContext[];
	}
	public field_declaration(i: number): Field_declarationContext {
		return this.getTypedRuleContext(Field_declarationContext, i) as Field_declarationContext;
	}
	public function_declaration_list(): Function_declarationContext[] {
		return this.getTypedRuleContexts(Function_declarationContext) as Function_declarationContext[];
	}
	public function_declaration(i: number): Function_declarationContext {
		return this.getTypedRuleContext(Function_declarationContext, i) as Function_declarationContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_class_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterClass_declaration) {
	 		listener.enterClass_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitClass_declaration) {
	 		listener.exitClass_declaration(this);
		}
	}
}


export class Struct_declarationContext extends ParserRuleContext {
	public _id!: User_refContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public STRUCT(): TerminalNode {
		return this.getToken(ComposeParser.STRUCT, 0);
	}
	public user_ref_list(): User_refContext[] {
		return this.getTypedRuleContexts(User_refContext) as User_refContext[];
	}
	public user_ref(i: number): User_refContext {
		return this.getTypedRuleContext(User_refContext, i) as User_refContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public attribute_ref_list(): Attribute_refContext[] {
		return this.getTypedRuleContexts(Attribute_refContext) as Attribute_refContext[];
	}
	public attribute_ref(i: number): Attribute_refContext {
		return this.getTypedRuleContext(Attribute_refContext, i) as Attribute_refContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(ComposeParser.EXTENDS, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
	public field_declaration_list(): Field_declarationContext[] {
		return this.getTypedRuleContexts(Field_declarationContext) as Field_declarationContext[];
	}
	public field_declaration(i: number): Field_declarationContext {
		return this.getTypedRuleContext(Field_declarationContext, i) as Field_declarationContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_struct_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterStruct_declaration) {
	 		listener.enterStruct_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitStruct_declaration) {
	 		listener.exitStruct_declaration(this);
		}
	}
}


export class AccessibilityContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public PUBLIC(): TerminalNode {
		return this.getToken(ComposeParser.PUBLIC, 0);
	}
	public PROTECTED(): TerminalNode {
		return this.getToken(ComposeParser.PROTECTED, 0);
	}
	public PRIVATE(): TerminalNode {
		return this.getToken(ComposeParser.PRIVATE, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_accessibility;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAccessibility) {
	 		listener.enterAccessibility(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAccessibility) {
	 		listener.exitAccessibility(this);
		}
	}
}


export class Field_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public mutable_value_type_or_null(): Mutable_value_type_or_nullContext {
		return this.getTypedRuleContext(Mutable_value_type_or_nullContext, 0) as Mutable_value_type_or_nullContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(ComposeParser.STATIC, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_field_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterField_declaration) {
	 		listener.enterField_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitField_declaration) {
	 		listener.exitField_declaration(this);
		}
	}
}


export class Function_declarationContext extends ParserRuleContext {
	public as_member: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, as_member: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.as_member = as_member;
	}
	public abstract_function_declaration(): Abstract_function_declarationContext {
		return this.getTypedRuleContext(Abstract_function_declarationContext, 0) as Abstract_function_declarationContext;
	}
	public concrete_function_declaration(): Concrete_function_declarationContext {
		return this.getTypedRuleContext(Concrete_function_declarationContext, 0) as Concrete_function_declarationContext;
	}
	public native_function_declaration(): Native_function_declarationContext {
		return this.getTypedRuleContext(Native_function_declarationContext, 0) as Native_function_declarationContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_declaration) {
	 		listener.enterFunction_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_declaration) {
	 		listener.exitFunction_declaration(this);
		}
	}
}


export class Abstract_function_declarationContext extends ParserRuleContext {
	public as_member: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, as_member: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.as_member = as_member;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(ComposeParser.ABSTRACT, 0);
	}
	public function_prototype(): Function_prototypeContext {
		return this.getTypedRuleContext(Function_prototypeContext, 0) as Function_prototypeContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(ComposeParser.FUNCTION, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_abstract_function_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAbstract_function_declaration) {
	 		listener.enterAbstract_function_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAbstract_function_declaration) {
	 		listener.exitAbstract_function_declaration(this);
		}
	}
}


export class Concrete_function_declarationContext extends ParserRuleContext {
	public as_member: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, as_member: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.as_member = as_member;
	}
	public function_prototype(): Function_prototypeContext {
		return this.getTypedRuleContext(Function_prototypeContext, 0) as Function_prototypeContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
	}
	public STATIC(): TerminalNode {
		return this.getToken(ComposeParser.STATIC, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(ComposeParser.FUNCTION, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_concrete_function_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterConcrete_function_declaration) {
	 		listener.enterConcrete_function_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitConcrete_function_declaration) {
	 		listener.exitConcrete_function_declaration(this);
		}
	}
}


export class Native_function_declarationContext extends ParserRuleContext {
	public as_member: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, as_member: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.as_member = as_member;
	}
	public STATIC(): TerminalNode {
		return this.getToken(ComposeParser.STATIC, 0);
	}
	public NATIVE(): TerminalNode {
		return this.getToken(ComposeParser.NATIVE, 0);
	}
	public function_prototype(): Function_prototypeContext {
		return this.getTypedRuleContext(Function_prototypeContext, 0) as Function_prototypeContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
	}
	public instruction_list(): InstructionContext[] {
		return this.getTypedRuleContexts(InstructionContext) as InstructionContext[];
	}
	public instruction(i: number): InstructionContext {
		return this.getTypedRuleContext(InstructionContext, i) as InstructionContext;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(ComposeParser.FUNCTION, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_native_function_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNative_function_declaration) {
	 		listener.enterNative_function_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNative_function_declaration) {
	 		listener.exitNative_function_declaration(this);
		}
	}
}


export class Function_prototypeContext extends ParserRuleContext {
	public mandatory_return: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, mandatory_return: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.mandatory_return = mandatory_return;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public return_types(): Return_typesContext {
		return this.getTypedRuleContext(Return_typesContext, 0) as Return_typesContext;
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public generic_parameter_list(): Generic_parameterContext[] {
		return this.getTypedRuleContexts(Generic_parameterContext) as Generic_parameterContext[];
	}
	public generic_parameter(i: number): Generic_parameterContext {
		return this.getTypedRuleContext(Generic_parameterContext, i) as Generic_parameterContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public parameter_list(): ParameterContext[] {
		return this.getTypedRuleContexts(ParameterContext) as ParameterContext[];
	}
	public parameter(i: number): ParameterContext {
		return this.getTypedRuleContext(ParameterContext, i) as ParameterContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_prototype;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_prototype) {
	 		listener.enterFunction_prototype(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_prototype) {
	 		listener.exitFunction_prototype(this);
		}
	}
}


export class Generic_parameterContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public user_ref(): User_refContext {
		return this.getTypedRuleContext(User_refContext, 0) as User_refContext;
	}
	public EXTENDS(): TerminalNode {
		return this.getToken(ComposeParser.EXTENDS, 0);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_generic_parameter;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterGeneric_parameter) {
	 		listener.enterGeneric_parameter(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitGeneric_parameter) {
	 		listener.exitGeneric_parameter(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public embeddable_statement(): Embeddable_statementContext {
		return this.getTypedRuleContext(Embeddable_statementContext, 0) as Embeddable_statementContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public standalone_statement(): Standalone_statementContext {
		return this.getTypedRuleContext(Standalone_statementContext, 0) as Standalone_statementContext;
	}
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterStatement) {
	 		listener.enterStatement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitStatement) {
	 		listener.exitStatement(this);
		}
	}
}


export class Embeddable_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_instances_statement(): Declare_instances_statementContext {
		return this.getTypedRuleContext(Declare_instances_statementContext, 0) as Declare_instances_statementContext;
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
	}
	public assign_item_statement(): Assign_item_statementContext {
		return this.getTypedRuleContext(Assign_item_statementContext, 0) as Assign_item_statementContext;
	}
	public unary_statement(): Unary_statementContext {
		return this.getTypedRuleContext(Unary_statementContext, 0) as Unary_statementContext;
	}
	public function_call_statement(): Function_call_statementContext {
		return this.getTypedRuleContext(Function_call_statementContext, 0) as Function_call_statementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_embeddable_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterEmbeddable_statement) {
	 		listener.enterEmbeddable_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitEmbeddable_statement) {
	 		listener.exitEmbeddable_statement(this);
		}
	}
}


export class Standalone_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_statement(): If_statementContext {
		return this.getTypedRuleContext(If_statementContext, 0) as If_statementContext;
	}
	public for_statement(): For_statementContext {
		return this.getTypedRuleContext(For_statementContext, 0) as For_statementContext;
	}
	public while_statement(): While_statementContext {
		return this.getTypedRuleContext(While_statementContext, 0) as While_statementContext;
	}
	public do_while_statement(): Do_while_statementContext {
		return this.getTypedRuleContext(Do_while_statementContext, 0) as Do_while_statementContext;
	}
	public try_statement(): Try_statementContext {
		return this.getTypedRuleContext(Try_statementContext, 0) as Try_statementContext;
	}
	public throw_statement(): Throw_statementContext {
		return this.getTypedRuleContext(Throw_statementContext, 0) as Throw_statementContext;
	}
	public break_statement(): Break_statementContext {
		return this.getTypedRuleContext(Break_statementContext, 0) as Break_statementContext;
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_standalone_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterStandalone_statement) {
	 		listener.enterStandalone_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitStandalone_statement) {
	 		listener.exitStandalone_statement(this);
		}
	}
}


export class Unary_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INC(): TerminalNode {
		return this.getToken(ComposeParser.INC, 0);
	}
	public DEC(): TerminalNode {
		return this.getToken(ComposeParser.DEC, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_unary_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnary_statement) {
	 		listener.enterUnary_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnary_statement) {
	 		listener.exitUnary_statement(this);
		}
	}
}


export class Throw_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public THROW(): TerminalNode {
		return this.getToken(ComposeParser.THROW, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_throw_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterThrow_statement) {
	 		listener.enterThrow_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitThrow_statement) {
	 		listener.exitThrow_statement(this);
		}
	}
}


export class Try_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public TRY(): TerminalNode {
		return this.getToken(ComposeParser.TRY, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public catch_clause_list(): Catch_clauseContext[] {
		return this.getTypedRuleContexts(Catch_clauseContext) as Catch_clauseContext[];
	}
	public catch_clause(i: number): Catch_clauseContext {
		return this.getTypedRuleContext(Catch_clauseContext, i) as Catch_clauseContext;
	}
	public catch_all_clause(): Catch_all_clauseContext {
		return this.getTypedRuleContext(Catch_all_clauseContext, 0) as Catch_all_clauseContext;
	}
	public finally_clause(): Finally_clauseContext {
		return this.getTypedRuleContext(Finally_clauseContext, 0) as Finally_clauseContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_try_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterTry_statement) {
	 		listener.enterTry_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitTry_statement) {
	 		listener.exitTry_statement(this);
		}
	}
}


export class Catch_clauseContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(ComposeParser.CATCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public value_type_list(): Value_typeContext[] {
		return this.getTypedRuleContexts(Value_typeContext) as Value_typeContext[];
	}
	public value_type(i: number): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, i) as Value_typeContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public PIPE_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.PIPE);
	}
	public PIPE(i: number): TerminalNode {
		return this.getToken(ComposeParser.PIPE, i);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_catch_clause;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCatch_clause) {
	 		listener.enterCatch_clause(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCatch_clause) {
	 		listener.exitCatch_clause(this);
		}
	}
}


export class Catch_all_clauseContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public CATCH(): TerminalNode {
		return this.getToken(ComposeParser.CATCH, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public ETC(): TerminalNode {
		return this.getToken(ComposeParser.ETC, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_catch_all_clause;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCatch_all_clause) {
	 		listener.enterCatch_all_clause(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCatch_all_clause) {
	 		listener.exitCatch_all_clause(this);
		}
	}
}


export class Finally_clauseContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FINALLY(): TerminalNode {
		return this.getToken(ComposeParser.FINALLY, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_finally_clause;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFinally_clause) {
	 		listener.enterFinally_clause(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFinally_clause) {
	 		listener.exitFinally_clause(this);
		}
	}
}


export class Break_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public BREAK(): TerminalNode {
		return this.getToken(ComposeParser.BREAK, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_break_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBreak_statement) {
	 		listener.enterBreak_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBreak_statement) {
	 		listener.exitBreak_statement(this);
		}
	}
}


export class For_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public FOR(): TerminalNode {
		return this.getToken(ComposeParser.FOR, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public SEMI_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.SEMI);
	}
	public SEMI(i: number): TerminalNode {
		return this.getToken(ComposeParser.SEMI, i);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
	public LET(): TerminalNode {
		return this.getToken(ComposeParser.LET, 0);
	}
	public declare_one_list(): Declare_oneContext[] {
		return this.getTypedRuleContexts(Declare_oneContext) as Declare_oneContext[];
	}
	public declare_one(i: number): Declare_oneContext {
		return this.getTypedRuleContext(Declare_oneContext, i) as Declare_oneContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public embeddable_statement_list(): Embeddable_statementContext[] {
		return this.getTypedRuleContexts(Embeddable_statementContext) as Embeddable_statementContext[];
	}
	public embeddable_statement(i: number): Embeddable_statementContext {
		return this.getTypedRuleContext(Embeddable_statementContext, i) as Embeddable_statementContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_for_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFor_statement) {
	 		listener.enterFor_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFor_statement) {
	 		listener.exitFor_statement(this);
		}
	}
}


export class While_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public WHILE(): TerminalNode {
		return this.getToken(ComposeParser.WHILE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public statements(): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, 0) as StatementsContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_while_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterWhile_statement) {
	 		listener.enterWhile_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitWhile_statement) {
	 		listener.exitWhile_statement(this);
		}
	}
}


export class Do_while_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public DO(): TerminalNode {
		return this.getToken(ComposeParser.DO, 0);
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public WHILE(): TerminalNode {
		return this.getToken(ComposeParser.WHILE, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_do_while_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDo_while_statement) {
	 		listener.enterDo_while_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDo_while_statement) {
	 		listener.exitDo_while_statement(this);
		}
	}
}


export class If_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.IF);
	}
	public IF(i: number): TerminalNode {
		return this.getToken(ComposeParser.IF, i);
	}
	public LPAR_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.LPAR);
	}
	public LPAR(i: number): TerminalNode {
		return this.getToken(ComposeParser.LPAR, i);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public RPAR_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.RPAR);
	}
	public RPAR(i: number): TerminalNode {
		return this.getToken(ComposeParser.RPAR, i);
	}
	public statements_list(): StatementsContext[] {
		return this.getTypedRuleContexts(StatementsContext) as StatementsContext[];
	}
	public statements(i: number): StatementsContext {
		return this.getTypedRuleContext(StatementsContext, i) as StatementsContext;
	}
	public ELSE_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.ELSE);
	}
	public ELSE(i: number): TerminalNode {
		return this.getToken(ComposeParser.ELSE, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_if_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterIf_statement) {
	 		listener.enterIf_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitIf_statement) {
	 		listener.exitIf_statement(this);
		}
	}
}


export class StatementsContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public statement_list(): StatementContext[] {
		return this.getTypedRuleContexts(StatementContext) as StatementContext[];
	}
	public statement(i: number): StatementContext {
		return this.getTypedRuleContext(StatementContext, i) as StatementContext;
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_statements;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterStatements) {
	 		listener.enterStatements(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitStatements) {
	 		listener.exitStatements(this);
		}
	}
}


export class Function_call_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ComposeParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_call_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_call_statement) {
	 		listener.enterFunction_call_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_call_statement) {
	 		listener.exitFunction_call_statement(this);
		}
	}
}


export class Declare_instances_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declare_one_list(): Declare_oneContext[] {
		return this.getTypedRuleContexts(Declare_oneContext) as Declare_oneContext[];
	}
	public declare_one(i: number): Declare_oneContext {
		return this.getTypedRuleContext(Declare_oneContext, i) as Declare_oneContext;
	}
	public LET(): TerminalNode {
		return this.getToken(ComposeParser.LET, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(ComposeParser.CONST, 0);
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_declare_instances_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDeclare_instances_statement) {
	 		listener.enterDeclare_instances_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDeclare_instances_statement) {
	 		listener.exitDeclare_instances_statement(this);
		}
	}
}


export class Declare_oneContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
	}
	public function_type_or_null(): Function_type_or_nullContext {
		return this.getTypedRuleContext(Function_type_or_nullContext, 0) as Function_type_or_nullContext;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.ASSIGN, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_declare_one;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDeclare_one) {
	 		listener.enterDeclare_one(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDeclare_one) {
	 		listener.exitDeclare_one(this);
		}
	}
}


export class Assign_instance_statementContext extends ParserRuleContext {
	public _parent!: ExpressionContext;
	public _value!: ExpressionContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assign_op(): Assign_opContext {
		return this.getTypedRuleContext(Assign_opContext, 0) as Assign_opContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ComposeParser.DOT, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_assign_instance_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAssign_instance_statement) {
	 		listener.enterAssign_instance_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAssign_instance_statement) {
	 		listener.exitAssign_instance_statement(this);
		}
	}
}


export class Assign_opContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.ASSIGN, 0);
	}
	public ADD_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.ADD_ASSIGN, 0);
	}
	public SUB_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.SUB_ASSIGN, 0);
	}
	public MUL_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.MUL_ASSIGN, 0);
	}
	public DIV_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.DIV_ASSIGN, 0);
	}
	public AND_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.AND_ASSIGN, 0);
	}
	public OR_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.OR_ASSIGN, 0);
	}
	public XOR_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.XOR_ASSIGN, 0);
	}
	public MOD_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.MOD_ASSIGN, 0);
	}
	public LSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.LSHIFT_ASSIGN, 0);
	}
	public RSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.RSHIFT_ASSIGN, 0);
	}
	public URSHIFT_ASSIGN(): TerminalNode {
		return this.getToken(ComposeParser.URSHIFT_ASSIGN, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_assign_op;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAssign_op) {
	 		listener.enterAssign_op(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAssign_op) {
	 		listener.exitAssign_op(this);
		}
	}
}


export class Assign_item_statementContext extends ParserRuleContext {
	public _parent!: ExpressionContext;
	public _item!: ExpressionContext;
	public _value!: ExpressionContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(ComposeParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(ComposeParser.RBRAK, 0);
	}
	public assign_op(): Assign_opContext {
		return this.getTypedRuleContext(Assign_opContext, 0) as Assign_opContext;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_assign_item_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAssign_item_statement) {
	 		listener.enterAssign_item_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAssign_item_statement) {
	 		listener.exitAssign_item_statement(this);
		}
	}
}


export class Return_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public RETURN(): TerminalNode {
		return this.getToken(ComposeParser.RETURN, 0);
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_return_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterReturn_statement) {
	 		listener.enterReturn_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitReturn_statement) {
	 		listener.exitReturn_statement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_expression;
	}
	public copyFrom(ctx: ExpressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ChildCallExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DOT(): TerminalNode {
		return this.getToken(ComposeParser.DOT, 0);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterChildCallExpression) {
	 		listener.enterChildCallExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitChildCallExpression) {
	 		listener.exitChildCallExpression(this);
		}
	}
}
export class TernaryExpressionContext extends ExpressionContext {
	public _condition!: ExpressionContext;
	public _if_true!: ExpressionContext;
	public _if_false!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public QUESTION(): TerminalNode {
		return this.getToken(ComposeParser.QUESTION, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterTernaryExpression) {
	 		listener.enterTernaryExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitTernaryExpression) {
	 		listener.exitTernaryExpression(this);
		}
	}
}
export class AssignExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public assign_op(): Assign_opContext {
		return this.getTypedRuleContext(Assign_opContext, 0) as Assign_opContext;
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAssignExpression) {
	 		listener.enterAssignExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAssignExpression) {
	 		listener.exitAssignExpression(this);
		}
	}
}
export class PreIncrementExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INC(): TerminalNode {
		return this.getToken(ComposeParser.INC, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPreIncrementExpression) {
	 		listener.enterPreIncrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPreIncrementExpression) {
	 		listener.exitPreIncrementExpression(this);
		}
	}
}
export class SimpleCallExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSimpleCallExpression) {
	 		listener.enterSimpleCallExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSimpleCallExpression) {
	 		listener.exitSimpleCallExpression(this);
		}
	}
}
export class InExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public IN(): TerminalNode {
		return this.getToken(ComposeParser.IN, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterInExpression) {
	 		listener.enterInExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitInExpression) {
	 		listener.exitInExpression(this);
		}
	}
}
export class ItemExpressionContext extends ExpressionContext {
	public _parent!: ExpressionContext;
	public _item!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LBRAK(): TerminalNode {
		return this.getToken(ComposeParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(ComposeParser.RBRAK, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterItemExpression) {
	 		listener.enterItemExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitItemExpression) {
	 		listener.exitItemExpression(this);
		}
	}
}
export class CompareExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public GTE(): TerminalNode {
		return this.getToken(ComposeParser.GTE, 0);
	}
	public LTE(): TerminalNode {
		return this.getToken(ComposeParser.LTE, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCompareExpression) {
	 		listener.enterCompareExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCompareExpression) {
	 		listener.exitCompareExpression(this);
		}
	}
}
export class OrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OR(): TerminalNode {
		return this.getToken(ComposeParser.OR, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterOrExpression) {
	 		listener.enterOrExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitOrExpression) {
	 		listener.exitOrExpression(this);
		}
	}
}
export class ThisExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public THIS(): TerminalNode {
		return this.getToken(ComposeParser.THIS, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterThisExpression) {
	 		listener.enterThisExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitThisExpression) {
	 		listener.exitThisExpression(this);
		}
	}
}
export class PreCastExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPreCastExpression) {
	 		listener.enterPreCastExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPreCastExpression) {
	 		listener.exitPreCastExpression(this);
		}
	}
}
export class AndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AND(): TerminalNode {
		return this.getToken(ComposeParser.AND, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAndExpression) {
	 		listener.enterAndExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAndExpression) {
	 		listener.exitAndExpression(this);
		}
	}
}
export class UnaryMinusExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ComposeParser.MINUS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnaryMinusExpression) {
	 		listener.enterUnaryMinusExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryMinusExpression) {
	 		listener.exitUnaryMinusExpression(this);
		}
	}
}
export class TypeofExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TYPE_OF_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.TYPE_OF);
	}
	public TYPE_OF(i: number): TerminalNode {
		return this.getToken(ComposeParser.TYPE_OF, i);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterTypeofExpression) {
	 		listener.enterTypeofExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitTypeofExpression) {
	 		listener.exitTypeofExpression(this);
		}
	}
}
export class InstanceofExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INSTANCE_OF(): TerminalNode {
		return this.getToken(ComposeParser.INSTANCE_OF, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterInstanceofExpression) {
	 		listener.enterInstanceofExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitInstanceofExpression) {
	 		listener.exitInstanceofExpression(this);
		}
	}
}
export class UnaryPlusExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PLUS(): TerminalNode {
		return this.getToken(ComposeParser.PLUS, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnaryPlusExpression) {
	 		listener.enterUnaryPlusExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryPlusExpression) {
	 		listener.exitUnaryPlusExpression(this);
		}
	}
}
export class PostDecrementExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public DEC(): TerminalNode {
		return this.getToken(ComposeParser.DEC, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPostDecrementExpression) {
	 		listener.enterPostDecrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPostDecrementExpression) {
	 		listener.exitPostDecrementExpression(this);
		}
	}
}
export class CastAsExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public AS(): TerminalNode {
		return this.getToken(ComposeParser.AS, 0);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCastAsExpression) {
	 		listener.enterCastAsExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCastAsExpression) {
	 		listener.exitCastAsExpression(this);
		}
	}
}
export class SuperExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SUPER(): TerminalNode {
		return this.getToken(ComposeParser.SUPER, 0);
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSuperExpression) {
	 		listener.enterSuperExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSuperExpression) {
	 		listener.exitSuperExpression(this);
		}
	}
}
export class BitShiftExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LSHIFT(): TerminalNode {
		return this.getToken(ComposeParser.LSHIFT, 0);
	}
	public RSHIFT(): TerminalNode {
		return this.getToken(ComposeParser.RSHIFT, 0);
	}
	public URSHIFT(): TerminalNode {
		return this.getToken(ComposeParser.URSHIFT, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBitShiftExpression) {
	 		listener.enterBitShiftExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBitShiftExpression) {
	 		listener.exitBitShiftExpression(this);
		}
	}
}
export class UnaryNotExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NOT(): TerminalNode {
		return this.getToken(ComposeParser.NOT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnaryNotExpression) {
	 		listener.enterUnaryNotExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryNotExpression) {
	 		listener.exitUnaryNotExpression(this);
		}
	}
}
export class PostIncrementExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public INC(): TerminalNode {
		return this.getToken(ComposeParser.INC, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPostIncrementExpression) {
	 		listener.enterPostIncrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPostIncrementExpression) {
	 		listener.exitPostIncrementExpression(this);
		}
	}
}
export class PreDecrementExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DEC(): TerminalNode {
		return this.getToken(ComposeParser.DEC, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPreDecrementExpression) {
	 		listener.enterPreDecrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPreDecrementExpression) {
	 		listener.exitPreDecrementExpression(this);
		}
	}
}
export class NewExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NEW(): TerminalNode {
		return this.getToken(ComposeParser.NEW, 0);
	}
	public function_call(): Function_callContext {
		return this.getTypedRuleContext(Function_callContext, 0) as Function_callContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNewExpression) {
	 		listener.enterNewExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNewExpression) {
	 		listener.exitNewExpression(this);
		}
	}
}
export class ParenthesisExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterParenthesisExpression) {
	 		listener.enterParenthesisExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitParenthesisExpression) {
	 		listener.exitParenthesisExpression(this);
		}
	}
}
export class LiteralExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterLiteralExpression) {
	 		listener.enterLiteralExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitLiteralExpression) {
	 		listener.exitLiteralExpression(this);
		}
	}
}
export class MultiplyExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public STAR(): TerminalNode {
		return this.getToken(ComposeParser.STAR, 0);
	}
	public SLASH(): TerminalNode {
		return this.getToken(ComposeParser.SLASH, 0);
	}
	public PERCENT(): TerminalNode {
		return this.getToken(ComposeParser.PERCENT, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMultiplyExpression) {
	 		listener.enterMultiplyExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMultiplyExpression) {
	 		listener.exitMultiplyExpression(this);
		}
	}
}
export class BitXorExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CARET(): TerminalNode {
		return this.getToken(ComposeParser.CARET, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBitXorExpression) {
	 		listener.enterBitXorExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBitXorExpression) {
	 		listener.exitBitXorExpression(this);
		}
	}
}
export class IdentifierExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterIdentifierExpression) {
	 		listener.enterIdentifierExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitIdentifierExpression) {
	 		listener.exitIdentifierExpression(this);
		}
	}
}
export class UnaryBitNotExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public TILDE(): TerminalNode {
		return this.getToken(ComposeParser.TILDE, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnaryBitNotExpression) {
	 		listener.enterUnaryBitNotExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryBitNotExpression) {
	 		listener.exitUnaryBitNotExpression(this);
		}
	}
}
export class MemberExpressionContext extends ExpressionContext {
	public _parent!: ExpressionContext;
	public _member!: IdentifierContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(ComposeParser.DOT, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMemberExpression) {
	 		listener.enterMemberExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMemberExpression) {
	 		listener.exitMemberExpression(this);
		}
	}
}
export class BitAndExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AMP(): TerminalNode {
		return this.getToken(ComposeParser.AMP, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBitAndExpression) {
	 		listener.enterBitAndExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBitAndExpression) {
	 		listener.exitBitAndExpression(this);
		}
	}
}
export class AddExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public PLUS(): TerminalNode {
		return this.getToken(ComposeParser.PLUS, 0);
	}
	public MINUS(): TerminalNode {
		return this.getToken(ComposeParser.MINUS, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAddExpression) {
	 		listener.enterAddExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAddExpression) {
	 		listener.exitAddExpression(this);
		}
	}
}
export class BitOrExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public PIPE(): TerminalNode {
		return this.getToken(ComposeParser.PIPE, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBitOrExpression) {
	 		listener.enterBitOrExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBitOrExpression) {
	 		listener.exitBitOrExpression(this);
		}
	}
}
export class EqualsExpressionContext extends ExpressionContext {
	public _left!: ExpressionContext;
	public _right!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public EQUALS(): TerminalNode {
		return this.getToken(ComposeParser.EQUALS, 0);
	}
	public NOT_EQUALS(): TerminalNode {
		return this.getToken(ComposeParser.NOT_EQUALS, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterEqualsExpression) {
	 		listener.enterEqualsExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitEqualsExpression) {
	 		listener.exitEqualsExpression(this);
		}
	}
}


export class Function_callContext extends ParserRuleContext {
	public _name!: IdentifierContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public value_type_or_null_list(): Value_type_or_nullContext[] {
		return this.getTypedRuleContexts(Value_type_or_nullContext) as Value_type_or_nullContext[];
	}
	public value_type_or_null(i: number): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, i) as Value_type_or_nullContext;
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_function_call;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_call) {
	 		listener.enterFunction_call(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_call) {
	 		listener.exitFunction_call(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_literal_expression;
	}
	public copyFrom(ctx: Literal_expressionContext): void {
		super.copyFrom(ctx);
	}
}
export class ListLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public list_literal(): List_literalContext {
		return this.getTypedRuleContext(List_literalContext, 0) as List_literalContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterListLiteral) {
	 		listener.enterListLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitListLiteral) {
	 		listener.exitListLiteral(this);
		}
	}
}
export class MapLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public map_literal(): Map_literalContext {
		return this.getTypedRuleContext(Map_literalContext, 0) as Map_literalContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMapLiteral) {
	 		listener.enterMapLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMapLiteral) {
	 		listener.exitMapLiteral(this);
		}
	}
}
export class CharLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.CHAR_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCharLiteral) {
	 		listener.enterCharLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCharLiteral) {
	 		listener.exitCharLiteral(this);
		}
	}
}
export class StringLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.STRING_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterStringLiteral) {
	 		listener.enterStringLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitStringLiteral) {
	 		listener.exitStringLiteral(this);
		}
	}
}
export class BooleanLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.BOOLEAN_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterBooleanLiteral) {
	 		listener.enterBooleanLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitBooleanLiteral) {
	 		listener.exitBooleanLiteral(this);
		}
	}
}
export class DecimalLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.DECIMAL_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterDecimalLiteral) {
	 		listener.enterDecimalLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitDecimalLiteral) {
	 		listener.exitDecimalLiteral(this);
		}
	}
}
export class NullLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterNullLiteral) {
	 		listener.enterNullLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitNullLiteral) {
	 		listener.exitNullLiteral(this);
		}
	}
}
export class SetLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public set_literal(): Set_literalContext {
		return this.getTypedRuleContext(Set_literalContext, 0) as Set_literalContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSetLiteral) {
	 		listener.enterSetLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSetLiteral) {
	 		listener.exitSetLiteral(this);
		}
	}
}
export class IntegerLiteralContext extends Literal_expressionContext {
	constructor(parser: ComposeParser, ctx: Literal_expressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.INTEGER_LITERAL, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterIntegerLiteral) {
	 		listener.enterIntegerLiteral(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitIntegerLiteral) {
	 		listener.exitIntegerLiteral(this);
		}
	}
}


export class List_literalContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LBRAK(): TerminalNode {
		return this.getToken(ComposeParser.LBRAK, 0);
	}
	public RBRAK(): TerminalNode {
		return this.getToken(ComposeParser.RBRAK, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_list_literal;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterList_literal) {
	 		listener.enterList_literal(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitList_literal) {
	 		listener.exitList_literal(this);
		}
	}
}


export class Set_literalContext extends ParserRuleContext {
	public _exp!: ExpressionContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LT(): TerminalNode {
		return this.getToken(ComposeParser.LT, 0);
	}
	public GT(): TerminalNode {
		return this.getToken(ComposeParser.GT, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_set_literal;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSet_literal) {
	 		listener.enterSet_literal(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSet_literal) {
	 		listener.exitSet_literal(this);
		}
	}
}


export class Map_literalContext extends ParserRuleContext {
	public _entry!: Map_entryContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LCURL(): TerminalNode {
		return this.getToken(ComposeParser.LCURL, 0);
	}
	public RCURL(): TerminalNode {
		return this.getToken(ComposeParser.RCURL, 0);
	}
	public READONLY(): TerminalNode {
		return this.getToken(ComposeParser.READONLY, 0);
	}
	public map_entry_list(): Map_entryContext[] {
		return this.getTypedRuleContexts(Map_entryContext) as Map_entryContext[];
	}
	public map_entry(i: number): Map_entryContext {
		return this.getTypedRuleContext(Map_entryContext, i) as Map_entryContext;
	}
	public COMMA_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.COMMA);
	}
	public COMMA(i: number): TerminalNode {
		return this.getToken(ComposeParser.COMMA, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_map_literal;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMap_literal) {
	 		listener.enterMap_literal(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMap_literal) {
	 		listener.exitMap_literal(this);
		}
	}
}


export class Map_entryContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public identifier(): IdentifierContext {
		return this.getTypedRuleContext(IdentifierContext, 0) as IdentifierContext;
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_map_entry;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMap_entry) {
	 		listener.enterMap_entry(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMap_entry) {
	 		listener.exitMap_entry(this);
		}
	}
}


export class InstructionContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public opcode(): OpcodeContext {
		return this.getTypedRuleContext(OpcodeContext, 0) as OpcodeContext;
	}
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public INTEGER_LITERAL_list(): TerminalNode[] {
	    	return this.getTokens(ComposeParser.INTEGER_LITERAL);
	}
	public INTEGER_LITERAL(i: number): TerminalNode {
		return this.getToken(ComposeParser.INTEGER_LITERAL, i);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_instruction;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterInstruction) {
	 		listener.enterInstruction(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitInstruction) {
	 		listener.exitInstruction(this);
		}
	}
}


export class OpcodeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public plain_opcode(): Plain_opcodeContext {
		return this.getTypedRuleContext(Plain_opcodeContext, 0) as Plain_opcodeContext;
	}
	public keyword_opcode(): Keyword_opcodeContext {
		return this.getTypedRuleContext(Keyword_opcodeContext, 0) as Keyword_opcodeContext;
	}
	public composite_opcode(): Composite_opcodeContext {
		return this.getTypedRuleContext(Composite_opcodeContext, 0) as Composite_opcodeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_opcode;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterOpcode) {
	 		listener.enterOpcode(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitOpcode) {
	 		listener.exitOpcode(this);
		}
	}
}


export class Plain_opcodeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public UNREACHABLE(): TerminalNode {
		return this.getToken(ComposeParser.UNREACHABLE, 0);
	}
	public NOP(): TerminalNode {
		return this.getToken(ComposeParser.NOP, 0);
	}
	public BLOCK(): TerminalNode {
		return this.getToken(ComposeParser.BLOCK, 0);
	}
	public LOOP(): TerminalNode {
		return this.getToken(ComposeParser.LOOP, 0);
	}
	public END(): TerminalNode {
		return this.getToken(ComposeParser.END, 0);
	}
	public BR(): TerminalNode {
		return this.getToken(ComposeParser.BR, 0);
	}
	public BR_IF(): TerminalNode {
		return this.getToken(ComposeParser.BR_IF, 0);
	}
	public BR_TABLE(): TerminalNode {
		return this.getToken(ComposeParser.BR_TABLE, 0);
	}
	public CALL(): TerminalNode {
		return this.getToken(ComposeParser.CALL, 0);
	}
	public CALL_INDIRECT(): TerminalNode {
		return this.getToken(ComposeParser.CALL_INDIRECT, 0);
	}
	public DROP(): TerminalNode {
		return this.getToken(ComposeParser.DROP, 0);
	}
	public SELECT(): TerminalNode {
		return this.getToken(ComposeParser.SELECT, 0);
	}
	public SELECT_T(): TerminalNode {
		return this.getToken(ComposeParser.SELECT_T, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_plain_opcode;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterPlain_opcode) {
	 		listener.enterPlain_opcode(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitPlain_opcode) {
	 		listener.exitPlain_opcode(this);
		}
	}
}


export class Keyword_opcodeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IF(): TerminalNode {
		return this.getToken(ComposeParser.IF, 0);
	}
	public ELSE(): TerminalNode {
		return this.getToken(ComposeParser.ELSE, 0);
	}
	public RETURN(): TerminalNode {
		return this.getToken(ComposeParser.RETURN, 0);
	}
	public TRY(): TerminalNode {
		return this.getToken(ComposeParser.TRY, 0);
	}
	public CATCH(): TerminalNode {
		return this.getToken(ComposeParser.CATCH, 0);
	}
	public THROW(): TerminalNode {
		return this.getToken(ComposeParser.THROW, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_keyword_opcode;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterKeyword_opcode) {
	 		listener.enterKeyword_opcode(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitKeyword_opcode) {
	 		listener.exitKeyword_opcode(this);
		}
	}
}


export class Composite_opcodeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public LOCAL_GET(): TerminalNode {
		return this.getToken(ComposeParser.LOCAL_GET, 0);
	}
	public LOCAL_SET(): TerminalNode {
		return this.getToken(ComposeParser.LOCAL_SET, 0);
	}
	public LOCAL_TEE(): TerminalNode {
		return this.getToken(ComposeParser.LOCAL_TEE, 0);
	}
	public GLOBAL_GET(): TerminalNode {
		return this.getToken(ComposeParser.GLOBAL_GET, 0);
	}
	public GLOBAL_SET(): TerminalNode {
		return this.getToken(ComposeParser.GLOBAL_SET, 0);
	}
	public I32_LOAD(): TerminalNode {
		return this.getToken(ComposeParser.I32_LOAD, 0);
	}
	public I64_LOAD(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD, 0);
	}
	public F32_LOAD(): TerminalNode {
		return this.getToken(ComposeParser.F32_LOAD, 0);
	}
	public F64_LOAD(): TerminalNode {
		return this.getToken(ComposeParser.F64_LOAD, 0);
	}
	public I32_LOAD8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_LOAD8_S, 0);
	}
	public I32_LOAD8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_LOAD8_U, 0);
	}
	public I32_LOAD16_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_LOAD16_S, 0);
	}
	public I32_LOAD16_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_LOAD16_U, 0);
	}
	public I64_LOAD8_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD8_S, 0);
	}
	public I64_LOAD8_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD8_U, 0);
	}
	public I64_LOAD16_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD16_S, 0);
	}
	public I64_LOAD16_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD16_U, 0);
	}
	public I64_LOAD32_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD32_S, 0);
	}
	public I64_LOAD32_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_LOAD32_U, 0);
	}
	public I32_STORE(): TerminalNode {
		return this.getToken(ComposeParser.I32_STORE, 0);
	}
	public I64_STORE(): TerminalNode {
		return this.getToken(ComposeParser.I64_STORE, 0);
	}
	public F32_STORE(): TerminalNode {
		return this.getToken(ComposeParser.F32_STORE, 0);
	}
	public F64_STORE(): TerminalNode {
		return this.getToken(ComposeParser.F64_STORE, 0);
	}
	public I32_STORE8(): TerminalNode {
		return this.getToken(ComposeParser.I32_STORE8, 0);
	}
	public I32_STORE16(): TerminalNode {
		return this.getToken(ComposeParser.I32_STORE16, 0);
	}
	public I64_STORE8(): TerminalNode {
		return this.getToken(ComposeParser.I64_STORE8, 0);
	}
	public I64_STORE16(): TerminalNode {
		return this.getToken(ComposeParser.I64_STORE16, 0);
	}
	public I64_STORE32(): TerminalNode {
		return this.getToken(ComposeParser.I64_STORE32, 0);
	}
	public MEMORY_SIZE(): TerminalNode {
		return this.getToken(ComposeParser.MEMORY_SIZE, 0);
	}
	public MEMORY_GROW(): TerminalNode {
		return this.getToken(ComposeParser.MEMORY_GROW, 0);
	}
	public I32_CONST(): TerminalNode {
		return this.getToken(ComposeParser.I32_CONST, 0);
	}
	public I64_CONST(): TerminalNode {
		return this.getToken(ComposeParser.I64_CONST, 0);
	}
	public F32_CONST(): TerminalNode {
		return this.getToken(ComposeParser.F32_CONST, 0);
	}
	public F64_CONST(): TerminalNode {
		return this.getToken(ComposeParser.F64_CONST, 0);
	}
	public I32_EQZ(): TerminalNode {
		return this.getToken(ComposeParser.I32_EQZ, 0);
	}
	public I32_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I32_EQ, 0);
	}
	public I32_NE(): TerminalNode {
		return this.getToken(ComposeParser.I32_NE, 0);
	}
	public I32_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_LT_S, 0);
	}
	public I32_LT_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_LT_U, 0);
	}
	public I32_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_GT_S, 0);
	}
	public I32_GT_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_GT_U, 0);
	}
	public I32_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_LE_S, 0);
	}
	public I32_LE_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_LE_U, 0);
	}
	public I32_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_GE_S, 0);
	}
	public I32_GE_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_GE_U, 0);
	}
	public I64_EQZ(): TerminalNode {
		return this.getToken(ComposeParser.I64_EQZ, 0);
	}
	public I64_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I64_EQ, 0);
	}
	public I64_NE(): TerminalNode {
		return this.getToken(ComposeParser.I64_NE, 0);
	}
	public I64_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_LT_S, 0);
	}
	public I64_LT_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_LT_U, 0);
	}
	public I64_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_GT_S, 0);
	}
	public I64_GT_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_GT_U, 0);
	}
	public I64_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_LE_S, 0);
	}
	public I64_LE_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_LE_U, 0);
	}
	public I64_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_GE_S, 0);
	}
	public I64_GE_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_GE_U, 0);
	}
	public F32_EQ(): TerminalNode {
		return this.getToken(ComposeParser.F32_EQ, 0);
	}
	public F32_NE(): TerminalNode {
		return this.getToken(ComposeParser.F32_NE, 0);
	}
	public F32_LT(): TerminalNode {
		return this.getToken(ComposeParser.F32_LT, 0);
	}
	public F32_GT(): TerminalNode {
		return this.getToken(ComposeParser.F32_GT, 0);
	}
	public F32_LE(): TerminalNode {
		return this.getToken(ComposeParser.F32_LE, 0);
	}
	public F32_GE(): TerminalNode {
		return this.getToken(ComposeParser.F32_GE, 0);
	}
	public F64_EQ(): TerminalNode {
		return this.getToken(ComposeParser.F64_EQ, 0);
	}
	public F64_NE(): TerminalNode {
		return this.getToken(ComposeParser.F64_NE, 0);
	}
	public F64_LT(): TerminalNode {
		return this.getToken(ComposeParser.F64_LT, 0);
	}
	public F64_GT(): TerminalNode {
		return this.getToken(ComposeParser.F64_GT, 0);
	}
	public F64_LE(): TerminalNode {
		return this.getToken(ComposeParser.F64_LE, 0);
	}
	public F64_GE(): TerminalNode {
		return this.getToken(ComposeParser.F64_GE, 0);
	}
	public I32_CLZ(): TerminalNode {
		return this.getToken(ComposeParser.I32_CLZ, 0);
	}
	public I32_CTZ(): TerminalNode {
		return this.getToken(ComposeParser.I32_CTZ, 0);
	}
	public I32_POPCNT(): TerminalNode {
		return this.getToken(ComposeParser.I32_POPCNT, 0);
	}
	public I32_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I32_ADD, 0);
	}
	public I32_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I32_SUB, 0);
	}
	public I32_MUL(): TerminalNode {
		return this.getToken(ComposeParser.I32_MUL, 0);
	}
	public I32_DIV_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_DIV_S, 0);
	}
	public I32_DIV_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_DIV_U, 0);
	}
	public I32_REM_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_REM_S, 0);
	}
	public I32_REM_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_REM_U, 0);
	}
	public I32_AND(): TerminalNode {
		return this.getToken(ComposeParser.I32_AND, 0);
	}
	public I32_OR(): TerminalNode {
		return this.getToken(ComposeParser.I32_OR, 0);
	}
	public I32_XOR(): TerminalNode {
		return this.getToken(ComposeParser.I32_XOR, 0);
	}
	public I32_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I32_SHL, 0);
	}
	public I32_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_SHR_S, 0);
	}
	public I32_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_SHR_U, 0);
	}
	public I32_ROTL(): TerminalNode {
		return this.getToken(ComposeParser.I32_ROTL, 0);
	}
	public I32_ROTR(): TerminalNode {
		return this.getToken(ComposeParser.I32_ROTR, 0);
	}
	public I64_CLZ(): TerminalNode {
		return this.getToken(ComposeParser.I64_CLZ, 0);
	}
	public I64_CTZ(): TerminalNode {
		return this.getToken(ComposeParser.I64_CTZ, 0);
	}
	public I64_POPCNT(): TerminalNode {
		return this.getToken(ComposeParser.I64_POPCNT, 0);
	}
	public I64_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I64_ADD, 0);
	}
	public I64_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I64_SUB, 0);
	}
	public I64_MUL(): TerminalNode {
		return this.getToken(ComposeParser.I64_MUL, 0);
	}
	public I64_DIV_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_DIV_S, 0);
	}
	public I64_DIV_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_DIV_U, 0);
	}
	public I64_REM_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_REM_S, 0);
	}
	public I64_REM_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_REM_U, 0);
	}
	public I64_AND(): TerminalNode {
		return this.getToken(ComposeParser.I64_AND, 0);
	}
	public I64_OR(): TerminalNode {
		return this.getToken(ComposeParser.I64_OR, 0);
	}
	public I64_XOR(): TerminalNode {
		return this.getToken(ComposeParser.I64_XOR, 0);
	}
	public I64_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I64_SHL, 0);
	}
	public I64_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_SHR_S, 0);
	}
	public I64_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_SHR_U, 0);
	}
	public I64_ROTL(): TerminalNode {
		return this.getToken(ComposeParser.I64_ROTL, 0);
	}
	public I64_ROTR(): TerminalNode {
		return this.getToken(ComposeParser.I64_ROTR, 0);
	}
	public F32_ABS(): TerminalNode {
		return this.getToken(ComposeParser.F32_ABS, 0);
	}
	public F32_NEG(): TerminalNode {
		return this.getToken(ComposeParser.F32_NEG, 0);
	}
	public F32_CEIL(): TerminalNode {
		return this.getToken(ComposeParser.F32_CEIL, 0);
	}
	public F32_FLOOR(): TerminalNode {
		return this.getToken(ComposeParser.F32_FLOOR, 0);
	}
	public F32_TRUNC(): TerminalNode {
		return this.getToken(ComposeParser.F32_TRUNC, 0);
	}
	public F32_NEAREST(): TerminalNode {
		return this.getToken(ComposeParser.F32_NEAREST, 0);
	}
	public F32_SQRT(): TerminalNode {
		return this.getToken(ComposeParser.F32_SQRT, 0);
	}
	public F32_ADD(): TerminalNode {
		return this.getToken(ComposeParser.F32_ADD, 0);
	}
	public F32_SUB(): TerminalNode {
		return this.getToken(ComposeParser.F32_SUB, 0);
	}
	public F32_MUL(): TerminalNode {
		return this.getToken(ComposeParser.F32_MUL, 0);
	}
	public F32_DIV(): TerminalNode {
		return this.getToken(ComposeParser.F32_DIV, 0);
	}
	public F32_MIN(): TerminalNode {
		return this.getToken(ComposeParser.F32_MIN, 0);
	}
	public F32_MAX(): TerminalNode {
		return this.getToken(ComposeParser.F32_MAX, 0);
	}
	public F32_COPYSIGN(): TerminalNode {
		return this.getToken(ComposeParser.F32_COPYSIGN, 0);
	}
	public F64_ABS(): TerminalNode {
		return this.getToken(ComposeParser.F64_ABS, 0);
	}
	public F64_NEG(): TerminalNode {
		return this.getToken(ComposeParser.F64_NEG, 0);
	}
	public F64_CEIL(): TerminalNode {
		return this.getToken(ComposeParser.F64_CEIL, 0);
	}
	public F64_FLOOR(): TerminalNode {
		return this.getToken(ComposeParser.F64_FLOOR, 0);
	}
	public F64_TRUNC(): TerminalNode {
		return this.getToken(ComposeParser.F64_TRUNC, 0);
	}
	public F64_NEAREST(): TerminalNode {
		return this.getToken(ComposeParser.F64_NEAREST, 0);
	}
	public F64_SQRT(): TerminalNode {
		return this.getToken(ComposeParser.F64_SQRT, 0);
	}
	public F64_ADD(): TerminalNode {
		return this.getToken(ComposeParser.F64_ADD, 0);
	}
	public F64_SUB(): TerminalNode {
		return this.getToken(ComposeParser.F64_SUB, 0);
	}
	public F64_MUL(): TerminalNode {
		return this.getToken(ComposeParser.F64_MUL, 0);
	}
	public F64_DIV(): TerminalNode {
		return this.getToken(ComposeParser.F64_DIV, 0);
	}
	public F64_MIN(): TerminalNode {
		return this.getToken(ComposeParser.F64_MIN, 0);
	}
	public F64_MAX(): TerminalNode {
		return this.getToken(ComposeParser.F64_MAX, 0);
	}
	public F64_COPYSIGN(): TerminalNode {
		return this.getToken(ComposeParser.F64_COPYSIGN, 0);
	}
	public I32_WRAP_I64(): TerminalNode {
		return this.getToken(ComposeParser.I32_WRAP_I64, 0);
	}
	public I32_TRUNC_F32_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_F32_S, 0);
	}
	public I32_TRUNC_F32_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_F32_U, 0);
	}
	public I32_TRUNC_F64_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_F64_S, 0);
	}
	public I32_TRUNC_F64_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_F64_U, 0);
	}
	public I64_EXTEND_I32_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_EXTEND_I32_S, 0);
	}
	public I64_EXTEND_I32_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_EXTEND_I32_U, 0);
	}
	public I64_TRUNC_F32_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_F32_S, 0);
	}
	public I64_TRUNC_F32_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_F32_U, 0);
	}
	public I64_TRUNC_F64_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_F64_S, 0);
	}
	public I64_TRUNC_F64_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_F64_U, 0);
	}
	public F32_CONVERT_I32_S(): TerminalNode {
		return this.getToken(ComposeParser.F32_CONVERT_I32_S, 0);
	}
	public F32_CONVERT_I32_U(): TerminalNode {
		return this.getToken(ComposeParser.F32_CONVERT_I32_U, 0);
	}
	public F32_CONVERT_I64_S(): TerminalNode {
		return this.getToken(ComposeParser.F32_CONVERT_I64_S, 0);
	}
	public F32_CONVERT_I64_U(): TerminalNode {
		return this.getToken(ComposeParser.F32_CONVERT_I64_U, 0);
	}
	public F32_DEMOTE_F64(): TerminalNode {
		return this.getToken(ComposeParser.F32_DEMOTE_F64, 0);
	}
	public F64_CONVERT_I32_S(): TerminalNode {
		return this.getToken(ComposeParser.F64_CONVERT_I32_S, 0);
	}
	public F64_CONVERT_I32_U(): TerminalNode {
		return this.getToken(ComposeParser.F64_CONVERT_I32_U, 0);
	}
	public F64_CONVERT_I64_S(): TerminalNode {
		return this.getToken(ComposeParser.F64_CONVERT_I64_S, 0);
	}
	public F64_CONVERT_I64_U(): TerminalNode {
		return this.getToken(ComposeParser.F64_CONVERT_I64_U, 0);
	}
	public F64_PROMOTE_F32(): TerminalNode {
		return this.getToken(ComposeParser.F64_PROMOTE_F32, 0);
	}
	public I32_REINTERPRET_F32(): TerminalNode {
		return this.getToken(ComposeParser.I32_REINTERPRET_F32, 0);
	}
	public I64_REINTERPRET_F64(): TerminalNode {
		return this.getToken(ComposeParser.I64_REINTERPRET_F64, 0);
	}
	public F32_REINTERPRET_I32(): TerminalNode {
		return this.getToken(ComposeParser.F32_REINTERPRET_I32, 0);
	}
	public F64_REINTERPRET_I64(): TerminalNode {
		return this.getToken(ComposeParser.F64_REINTERPRET_I64, 0);
	}
	public I32_EXTEND8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_EXTEND8_S, 0);
	}
	public I32_EXTEND16_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_EXTEND16_S, 0);
	}
	public I64_EXTEND8_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_EXTEND8_S, 0);
	}
	public I64_EXTEND16_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_EXTEND16_S, 0);
	}
	public I64_EXTEND32_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_EXTEND32_S, 0);
	}
	public I32_TRUNC_SAT_F32_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_SAT_F32_S, 0);
	}
	public I32_TRUNC_SAT_F32_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_SAT_F32_U, 0);
	}
	public I32_TRUNC_SAT_F64_S(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_SAT_F64_S, 0);
	}
	public I32_TRUNC_SAT_F64_U(): TerminalNode {
		return this.getToken(ComposeParser.I32_TRUNC_SAT_F64_U, 0);
	}
	public I64_TRUNC_SAT_F32_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_SAT_F32_S, 0);
	}
	public I64_TRUNC_SAT_F32_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_SAT_F32_U, 0);
	}
	public I64_TRUNC_SAT_F64_S(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_SAT_F64_S, 0);
	}
	public I64_TRUNC_SAT_F64_U(): TerminalNode {
		return this.getToken(ComposeParser.I64_TRUNC_SAT_F64_U, 0);
	}
	public MEMORY_INIT(): TerminalNode {
		return this.getToken(ComposeParser.MEMORY_INIT, 0);
	}
	public DATA_DROP(): TerminalNode {
		return this.getToken(ComposeParser.DATA_DROP, 0);
	}
	public MEMORY_COPY(): TerminalNode {
		return this.getToken(ComposeParser.MEMORY_COPY, 0);
	}
	public MEMORY_FILL(): TerminalNode {
		return this.getToken(ComposeParser.MEMORY_FILL, 0);
	}
	public TABLE_INIT(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_INIT, 0);
	}
	public ELEM_DROP(): TerminalNode {
		return this.getToken(ComposeParser.ELEM_DROP, 0);
	}
	public TABLE_COPY(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_COPY, 0);
	}
	public TABLE_GET(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_GET, 0);
	}
	public TABLE_SET(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_SET, 0);
	}
	public TABLE_GROW(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_GROW, 0);
	}
	public TABLE_SIZE(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_SIZE, 0);
	}
	public TABLE_FILL(): TerminalNode {
		return this.getToken(ComposeParser.TABLE_FILL, 0);
	}
	public REF_NULL(): TerminalNode {
		return this.getToken(ComposeParser.REF_NULL, 0);
	}
	public REF_IS_NULL(): TerminalNode {
		return this.getToken(ComposeParser.REF_IS_NULL, 0);
	}
	public REF_FUNC(): TerminalNode {
		return this.getToken(ComposeParser.REF_FUNC, 0);
	}
	public V128_LOAD(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD, 0);
	}
	public V128_LOAD8X8_S(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD8X8_S, 0);
	}
	public V128_LOAD8X8_U(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD8X8_U, 0);
	}
	public V128_LOAD16X4_S(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD16X4_S, 0);
	}
	public V128_LOAD16X4_U(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD16X4_U, 0);
	}
	public V128_LOAD32X2_S(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD32X2_S, 0);
	}
	public V128_LOAD32X2_U(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD32X2_U, 0);
	}
	public V128_LOAD8_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD8_SPLAT, 0);
	}
	public V128_LOAD16_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD16_SPLAT, 0);
	}
	public V128_LOAD32_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD32_SPLAT, 0);
	}
	public V128_LOAD64_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD64_SPLAT, 0);
	}
	public V128_STORE(): TerminalNode {
		return this.getToken(ComposeParser.V128_STORE, 0);
	}
	public V128_CONST(): TerminalNode {
		return this.getToken(ComposeParser.V128_CONST, 0);
	}
	public I8X16_SHUFFLE(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SHUFFLE, 0);
	}
	public I8X16_SWIZZLE(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SWIZZLE, 0);
	}
	public I8X16_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SPLAT, 0);
	}
	public I16X8_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SPLAT, 0);
	}
	public I32X4_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_SPLAT, 0);
	}
	public I64X2_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_SPLAT, 0);
	}
	public F32X4_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_SPLAT, 0);
	}
	public F64X2_SPLAT(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_SPLAT, 0);
	}
	public I8X16_EXTRACT_LANE_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_EXTRACT_LANE_S, 0);
	}
	public I8X16_EXTRACT_LANE_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_EXTRACT_LANE_U, 0);
	}
	public I8X16_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_REPLACE_LANE, 0);
	}
	public I16X8_EXTRACT_LANE_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTRACT_LANE_S, 0);
	}
	public I16X8_EXTRACT_LANE_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTRACT_LANE_U, 0);
	}
	public I16X8_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_REPLACE_LANE, 0);
	}
	public I32X4_EXTRACT_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTRACT_LANE, 0);
	}
	public I32X4_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_REPLACE_LANE, 0);
	}
	public I64X2_EXTRACT_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTRACT_LANE, 0);
	}
	public I64X2_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_REPLACE_LANE, 0);
	}
	public F32X4_EXTRACT_LANE(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_EXTRACT_LANE, 0);
	}
	public F32X4_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_REPLACE_LANE, 0);
	}
	public F64X2_EXTRACT_LANE(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_EXTRACT_LANE, 0);
	}
	public F64X2_REPLACE_LANE(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_REPLACE_LANE, 0);
	}
	public I8X16_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_EQ, 0);
	}
	public I8X16_NE(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_NE, 0);
	}
	public I8X16_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_LT_S, 0);
	}
	public I8X16_LT_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_LT_U, 0);
	}
	public I8X16_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_GT_S, 0);
	}
	public I8X16_GT_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_GT_U, 0);
	}
	public I8X16_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_LE_S, 0);
	}
	public I8X16_LE_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_LE_U, 0);
	}
	public I8X16_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_GE_S, 0);
	}
	public I8X16_GE_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_GE_U, 0);
	}
	public I16X8_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EQ, 0);
	}
	public I16X8_NE(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_NE, 0);
	}
	public I16X8_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_LT_S, 0);
	}
	public I16X8_LT_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_LT_U, 0);
	}
	public I16X8_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_GT_S, 0);
	}
	public I16X8_GT_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_GT_U, 0);
	}
	public I16X8_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_LE_S, 0);
	}
	public I16X8_LE_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_LE_U, 0);
	}
	public I16X8_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_GE_S, 0);
	}
	public I16X8_GE_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_GE_U, 0);
	}
	public I32X4_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EQ, 0);
	}
	public I32X4_NE(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_NE, 0);
	}
	public I32X4_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_LT_S, 0);
	}
	public I32X4_LT_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_LT_U, 0);
	}
	public I32X4_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_GT_S, 0);
	}
	public I32X4_GT_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_GT_U, 0);
	}
	public I32X4_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_LE_S, 0);
	}
	public I32X4_LE_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_LE_U, 0);
	}
	public I32X4_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_GE_S, 0);
	}
	public I32X4_GE_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_GE_U, 0);
	}
	public F32X4_EQ(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_EQ, 0);
	}
	public F32X4_NE(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_NE, 0);
	}
	public F32X4_LT(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_LT, 0);
	}
	public F32X4_GT(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_GT, 0);
	}
	public F32X4_LE(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_LE, 0);
	}
	public F32X4_GE(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_GE, 0);
	}
	public F64X2_EQ(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_EQ, 0);
	}
	public F64X2_NE(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_NE, 0);
	}
	public F64X2_LT(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_LT, 0);
	}
	public F64X2_GT(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_GT, 0);
	}
	public F64X2_LE(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_LE, 0);
	}
	public F64X2_GE(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_GE, 0);
	}
	public V128_NOT(): TerminalNode {
		return this.getToken(ComposeParser.V128_NOT, 0);
	}
	public V128_AND(): TerminalNode {
		return this.getToken(ComposeParser.V128_AND, 0);
	}
	public V128_ANDNOT(): TerminalNode {
		return this.getToken(ComposeParser.V128_ANDNOT, 0);
	}
	public V128_OR(): TerminalNode {
		return this.getToken(ComposeParser.V128_OR, 0);
	}
	public V128_XOR(): TerminalNode {
		return this.getToken(ComposeParser.V128_XOR, 0);
	}
	public V128_BITSELECT(): TerminalNode {
		return this.getToken(ComposeParser.V128_BITSELECT, 0);
	}
	public V128_ANY_TRUE(): TerminalNode {
		return this.getToken(ComposeParser.V128_ANY_TRUE, 0);
	}
	public V128_LOAD8_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD8_LANE, 0);
	}
	public V128_LOAD16_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD16_LANE, 0);
	}
	public V128_LOAD32_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD32_LANE, 0);
	}
	public V128_LOAD64_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD64_LANE, 0);
	}
	public V128_STORE8_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_STORE8_LANE, 0);
	}
	public V128_STORE16_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_STORE16_LANE, 0);
	}
	public V128_STORE32_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_STORE32_LANE, 0);
	}
	public V128_STORE64_LANE(): TerminalNode {
		return this.getToken(ComposeParser.V128_STORE64_LANE, 0);
	}
	public V128_LOAD32_ZERO(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD32_ZERO, 0);
	}
	public V128_LOAD64_ZERO(): TerminalNode {
		return this.getToken(ComposeParser.V128_LOAD64_ZERO, 0);
	}
	public F32X4_DEMOTE_F64X2_ZERO(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_DEMOTE_F64X2_ZERO, 0);
	}
	public F64X2_PROMOTE_LOW_F32X4(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_PROMOTE_LOW_F32X4, 0);
	}
	public I8X16_ABS(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_ABS, 0);
	}
	public I8X16_NEG(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_NEG, 0);
	}
	public I8X16_POPCNT(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_POPCNT, 0);
	}
	public I8X16_ALL_TRUE(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_ALL_TRUE, 0);
	}
	public I8X16_BITMASK(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_BITMASK, 0);
	}
	public I8X16_NARROW_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_NARROW_I16X8_S, 0);
	}
	public I8X16_NARROW_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_NARROW_I16X8_U, 0);
	}
	public I8X16_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SHL, 0);
	}
	public I8X16_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SHR_S, 0);
	}
	public I8X16_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SHR_U, 0);
	}
	public I8X16_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_ADD, 0);
	}
	public I8X16_ADD_SAT_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_ADD_SAT_S, 0);
	}
	public I8X16_ADD_SAT_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_ADD_SAT_U, 0);
	}
	public I8X16_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SUB, 0);
	}
	public I8X16_SUB_SAT_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SUB_SAT_S, 0);
	}
	public I8X16_SUB_SAT_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_SUB_SAT_U, 0);
	}
	public I8X16_MIN_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_MIN_S, 0);
	}
	public I8X16_MIN_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_MIN_U, 0);
	}
	public I8X16_MAX_S(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_MAX_S, 0);
	}
	public I8X16_MAX_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_MAX_U, 0);
	}
	public I8X16_AVGR_U(): TerminalNode {
		return this.getToken(ComposeParser.I8X16_AVGR_U, 0);
	}
	public I16X8_EXTADD_PAIRWISE_I8X16_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTADD_PAIRWISE_I8X16_S, 0);
	}
	public I16X8_EXTADD_PAIRWISE_I8X16_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTADD_PAIRWISE_I8X16_U, 0);
	}
	public I32X4_EXTADD_PAIRWISE_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTADD_PAIRWISE_I16X8_S, 0);
	}
	public I32X4_EXTADD_PAIRWISE_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTADD_PAIRWISE_I16X8_U, 0);
	}
	public I16X8_ABS(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_ABS, 0);
	}
	public I16X8_NEG(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_NEG, 0);
	}
	public I16X8_Q15MULR_SAT_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_Q15MULR_SAT_S, 0);
	}
	public I16X8_ALL_TRUE(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_ALL_TRUE, 0);
	}
	public I16X8_BITMASK(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_BITMASK, 0);
	}
	public I16X8_NARROW_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_NARROW_I32X4_S, 0);
	}
	public I16X8_NARROW_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_NARROW_I32X4_U, 0);
	}
	public I16X8_EXTEND_LOW_I8X16_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTEND_LOW_I8X16_S, 0);
	}
	public I16X8_EXTEND_HIGH_I8X16_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTEND_HIGH_I8X16_S, 0);
	}
	public I16X8_EXTEND_LOW_I8X16_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTEND_LOW_I8X16_U, 0);
	}
	public I16X8_EXTEND_HIGH_I8X16_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTEND_HIGH_I8X16_U, 0);
	}
	public I16X8_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SHL, 0);
	}
	public I16X8_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SHR_S, 0);
	}
	public I16X8_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SHR_U, 0);
	}
	public I16X8_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_ADD, 0);
	}
	public I16X8_ADD_SAT_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_ADD_SAT_S, 0);
	}
	public I16X8_ADD_SAT_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_ADD_SAT_U, 0);
	}
	public I16X8_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SUB, 0);
	}
	public I16X8_SUB_SAT_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SUB_SAT_S, 0);
	}
	public I16X8_SUB_SAT_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_SUB_SAT_U, 0);
	}
	public I16X8_MUL(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_MUL, 0);
	}
	public I16X8_MIN_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_MIN_S, 0);
	}
	public I16X8_MIN_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_MIN_U, 0);
	}
	public I16X8_MAX_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_MAX_S, 0);
	}
	public I16X8_MAX_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_MAX_U, 0);
	}
	public I16X8_AVGR_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_AVGR_U, 0);
	}
	public I16X8_EXTMUL_LOW_I8X16_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTMUL_LOW_I8X16_S, 0);
	}
	public I16X8_EXTMUL_HIGH_I8X16_S(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTMUL_HIGH_I8X16_S, 0);
	}
	public I16X8_EXTMUL_LOW_I8X16_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTMUL_LOW_I8X16_U, 0);
	}
	public I16X8_EXTMUL_HIGH_I8X16_U(): TerminalNode {
		return this.getToken(ComposeParser.I16X8_EXTMUL_HIGH_I8X16_U, 0);
	}
	public I32X4_ABS(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_ABS, 0);
	}
	public I32X4_NEG(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_NEG, 0);
	}
	public I32X4_ALL_TRUE(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_ALL_TRUE, 0);
	}
	public I32X4_BITMASK(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_BITMASK, 0);
	}
	public I32X4_EXTEND_LOW_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTEND_LOW_I16X8_S, 0);
	}
	public I32X4_EXTEND_HIGH_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTEND_HIGH_I16X8_S, 0);
	}
	public I32X4_EXTEND_LOW_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTEND_LOW_I16X8_U, 0);
	}
	public I32X4_EXTEND_HIGH_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTEND_HIGH_I16X8_U, 0);
	}
	public I32X4_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_SHL, 0);
	}
	public I32X4_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_SHR_S, 0);
	}
	public I32X4_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_SHR_U, 0);
	}
	public I32X4_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_ADD, 0);
	}
	public I32X4_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_SUB, 0);
	}
	public I32X4_MUL(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_MUL, 0);
	}
	public I32X4_MIN_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_MIN_S, 0);
	}
	public I32X4_MIN_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_MIN_U, 0);
	}
	public I32X4_MAX_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_MAX_S, 0);
	}
	public I32X4_MAX_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_MAX_U, 0);
	}
	public I32X4_DOT_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_DOT_I16X8_S, 0);
	}
	public I32X4_EXTMUL_LOW_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTMUL_LOW_I16X8_S, 0);
	}
	public I32X4_EXTMUL_HIGH_I16X8_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTMUL_HIGH_I16X8_S, 0);
	}
	public I32X4_EXTMUL_LOW_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTMUL_LOW_I16X8_U, 0);
	}
	public I32X4_EXTMUL_HIGH_I16X8_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_EXTMUL_HIGH_I16X8_U, 0);
	}
	public I64X2_ABS(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_ABS, 0);
	}
	public I64X2_NEG(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_NEG, 0);
	}
	public I64X2_ALL_TRUE(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_ALL_TRUE, 0);
	}
	public I64X2_BITMASK(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_BITMASK, 0);
	}
	public I64X2_EXTEND_LOW_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTEND_LOW_I32X4_S, 0);
	}
	public I64X2_EXTEND_HIGH_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTEND_HIGH_I32X4_S, 0);
	}
	public I64X2_EXTEND_LOW_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTEND_LOW_I32X4_U, 0);
	}
	public I64X2_EXTEND_HIGH_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTEND_HIGH_I32X4_U, 0);
	}
	public I64X2_SHL(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_SHL, 0);
	}
	public I64X2_SHR_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_SHR_S, 0);
	}
	public I64X2_SHR_U(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_SHR_U, 0);
	}
	public I64X2_ADD(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_ADD, 0);
	}
	public I64X2_SUB(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_SUB, 0);
	}
	public I64X2_MUL(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_MUL, 0);
	}
	public I64X2_EQ(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EQ, 0);
	}
	public I64X2_NE(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_NE, 0);
	}
	public I64X2_LT_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_LT_S, 0);
	}
	public I64X2_GT_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_GT_S, 0);
	}
	public I64X2_LE_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_LE_S, 0);
	}
	public I64X2_GE_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_GE_S, 0);
	}
	public I64X2_EXTMUL_LOW_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTMUL_LOW_I32X4_S, 0);
	}
	public I64X2_EXTMUL_HIGH_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTMUL_HIGH_I32X4_S, 0);
	}
	public I64X2_EXTMUL_LOW_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTMUL_LOW_I32X4_U, 0);
	}
	public I64X2_EXTMUL_HIGH_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I64X2_EXTMUL_HIGH_I32X4_U, 0);
	}
	public F32X4_CEIL(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_CEIL, 0);
	}
	public F32X4_FLOOR(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_FLOOR, 0);
	}
	public F32X4_TRUNC(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_TRUNC, 0);
	}
	public F32X4_NEAREST(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_NEAREST, 0);
	}
	public F64X2_CEIL(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_CEIL, 0);
	}
	public F64X2_FLOOR(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_FLOOR, 0);
	}
	public F64X2_TRUNC(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_TRUNC, 0);
	}
	public F64X2_NEAREST(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_NEAREST, 0);
	}
	public F32X4_ABS(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_ABS, 0);
	}
	public F32X4_NEG(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_NEG, 0);
	}
	public F32X4_SQRT(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_SQRT, 0);
	}
	public F32X4_ADD(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_ADD, 0);
	}
	public F32X4_SUB(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_SUB, 0);
	}
	public F32X4_MUL(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_MUL, 0);
	}
	public F32X4_DIV(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_DIV, 0);
	}
	public F32X4_MIN(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_MIN, 0);
	}
	public F32X4_MAX(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_MAX, 0);
	}
	public F32X4_PMIN(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_PMIN, 0);
	}
	public F32X4_PMAX(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_PMAX, 0);
	}
	public F64X2_ABS(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_ABS, 0);
	}
	public F64X2_NEG(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_NEG, 0);
	}
	public F64X2_SQRT(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_SQRT, 0);
	}
	public F64X2_ADD(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_ADD, 0);
	}
	public F64X2_SUB(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_SUB, 0);
	}
	public F64X2_MUL(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_MUL, 0);
	}
	public F64X2_DIV(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_DIV, 0);
	}
	public F64X2_MIN(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_MIN, 0);
	}
	public F64X2_MAX(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_MAX, 0);
	}
	public F64X2_PMIN(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_PMIN, 0);
	}
	public F64X2_PMAX(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_PMAX, 0);
	}
	public I32X4_TRUNC_SAT_F32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_TRUNC_SAT_F32X4_S, 0);
	}
	public I32X4_TRUNC_SAT_F32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_TRUNC_SAT_F32X4_U, 0);
	}
	public F32X4_CONVERT_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_CONVERT_I32X4_S, 0);
	}
	public F32X4_CONVERT_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.F32X4_CONVERT_I32X4_U, 0);
	}
	public I32X4_TRUNC_SAT_F64X2_S_ZERO(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_TRUNC_SAT_F64X2_S_ZERO, 0);
	}
	public I32X4_TRUNC_SAT_F64X2_U_ZERO(): TerminalNode {
		return this.getToken(ComposeParser.I32X4_TRUNC_SAT_F64X2_U_ZERO, 0);
	}
	public F64X2_CONVERT_LOW_I32X4_S(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_CONVERT_LOW_I32X4_S, 0);
	}
	public F64X2_CONVERT_LOW_I32X4_U(): TerminalNode {
		return this.getToken(ComposeParser.F64X2_CONVERT_LOW_I32X4_U, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_composite_opcode;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterComposite_opcode) {
	 		listener.enterComposite_opcode(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitComposite_opcode) {
	 		listener.exitComposite_opcode(this);
		}
	}
}
