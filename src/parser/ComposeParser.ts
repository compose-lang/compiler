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
	public static readonly I32 = 2;
	public static readonly I64 = 3;
	public static readonly U32 = 4;
	public static readonly U64 = 5;
	public static readonly F32 = 6;
	public static readonly F64 = 7;
	public static readonly V128 = 8;
	public static readonly STRING = 9;
	public static readonly BOOLEAN = 10;
	public static readonly ANY = 11;
	public static readonly VOID = 12;
	public static readonly ATTRIBUTE = 13;
	public static readonly CLASS = 14;
	public static readonly ENUM = 15;
	public static readonly EXTENDS = 16;
	public static readonly FUNCTION = 17;
	public static readonly STATIC = 18;
	public static readonly ABSTRACT = 19;
	public static readonly NATIVE = 20;
	public static readonly PUBLIC = 21;
	public static readonly PROTECTED = 22;
	public static readonly PRIVATE = 23;
	public static readonly CONST = 24;
	public static readonly LET = 25;
	public static readonly NEW = 26;
	public static readonly GET = 27;
	public static readonly SET = 28;
	public static readonly FROM = 29;
	public static readonly SWITCH = 30;
	public static readonly CASE = 31;
	public static readonly FOR = 32;
	public static readonly DO = 33;
	public static readonly WHILE = 34;
	public static readonly BREAK = 35;
	public static readonly FINALLY = 36;
	public static readonly THIS = 37;
	public static readonly SUPER = 38;
	public static readonly TYPE_OF = 39;
	public static readonly INSTANCE_OF = 40;
	public static readonly EXPORT = 41;
	public static readonly IMPORT = 42;
	public static readonly DEFAULT = 43;
	public static readonly IN = 44;
	public static readonly AS = 45;
	public static readonly LPAR = 46;
	public static readonly RPAR = 47;
	public static readonly LBRAK = 48;
	public static readonly RBRAK = 49;
	public static readonly LCURL = 50;
	public static readonly RCURL = 51;
	public static readonly ARROW = 52;
	public static readonly GT = 53;
	public static readonly LT = 54;
	public static readonly LTE = 55;
	public static readonly GTE = 56;
	public static readonly EQUALS = 57;
	public static readonly NOT_EQUALS = 58;
	public static readonly NOT = 59;
	public static readonly AND = 60;
	public static readonly OR = 61;
	public static readonly QUESTION = 62;
	public static readonly SEMI = 63;
	public static readonly COLON = 64;
	public static readonly COMMA = 65;
	public static readonly ETC = 66;
	public static readonly DOT = 67;
	public static readonly AT = 68;
	public static readonly INC = 69;
	public static readonly DEC = 70;
	public static readonly PLUS = 71;
	public static readonly MINUS = 72;
	public static readonly STAR = 73;
	public static readonly SLASH = 74;
	public static readonly BSLASH = 75;
	public static readonly PERCENT = 76;
	public static readonly CARET = 77;
	public static readonly TILDE = 78;
	public static readonly AMP = 79;
	public static readonly PIPE = 80;
	public static readonly LSHIFT = 81;
	public static readonly RSHIFT = 82;
	public static readonly URSHIFT = 83;
	public static readonly ASSIGN = 84;
	public static readonly ADD_ASSIGN = 85;
	public static readonly SUB_ASSIGN = 86;
	public static readonly MUL_ASSIGN = 87;
	public static readonly DIV_ASSIGN = 88;
	public static readonly AND_ASSIGN = 89;
	public static readonly OR_ASSIGN = 90;
	public static readonly XOR_ASSIGN = 91;
	public static readonly MOD_ASSIGN = 92;
	public static readonly LSHIFT_ASSIGN = 93;
	public static readonly RSHIFT_ASSIGN = 94;
	public static readonly URSHIFT_ASSIGN = 95;
	public static readonly INTEGER_LITERAL = 96;
	public static readonly DECIMAL_LITERAL = 97;
	public static readonly BOOLEAN_LITERAL = 98;
	public static readonly CHAR_LITERAL = 99;
	public static readonly STRING_LITERAL = 100;
	public static readonly NULL_LITERAL = 101;
	public static readonly ANNOTATION = 102;
	public static readonly WS = 103;
	public static readonly COMMENT = 104;
	public static readonly LINE_COMMENT = 105;
	public static readonly UNREACHABLE = 106;
	public static readonly NOP = 107;
	public static readonly BLOCK = 108;
	public static readonly LOOP = 109;
	public static readonly IF = 110;
	public static readonly ELSE = 111;
	public static readonly END = 112;
	public static readonly BR = 113;
	public static readonly BR_IF = 114;
	public static readonly BR_TABLE = 115;
	public static readonly RETURN = 116;
	public static readonly CALL = 117;
	public static readonly CALL_INDIRECT = 118;
	public static readonly RETURN_CALL = 119;
	public static readonly RETURN_CALL_INDIRECT = 120;
	public static readonly CALL_REF = 121;
	public static readonly RETURN_CALL_REF = 122;
	public static readonly DROP = 123;
	public static readonly SELECT = 124;
	public static readonly LOCAL_GET = 125;
	public static readonly LOCAL_SET = 126;
	public static readonly LOCAL_TEE = 127;
	public static readonly GLOBAL_GET = 128;
	public static readonly GLOBAL_SET = 129;
	public static readonly TABLE_GET = 130;
	public static readonly TABLE_SET = 131;
	public static readonly I32_LOAD = 132;
	public static readonly I64_LOAD = 133;
	public static readonly F32_LOAD = 134;
	public static readonly F64_LOAD = 135;
	public static readonly I32_LOAD8_S = 136;
	public static readonly I32_LOAD8_U = 137;
	public static readonly I32_LOAD16_S = 138;
	public static readonly I32_LOAD16_U = 139;
	public static readonly I64_LOAD8_S = 140;
	public static readonly I64_LOAD8_U = 141;
	public static readonly I64_LOAD16_S = 142;
	public static readonly I64_LOAD16_U = 143;
	public static readonly I64_LOAD32_S = 144;
	public static readonly I64_LOAD32_U = 145;
	public static readonly I32_STORE = 146;
	public static readonly I64_STORE = 147;
	public static readonly F32_STORE = 148;
	public static readonly F64_STORE = 149;
	public static readonly I32_STORE8 = 150;
	public static readonly I32_STORE16 = 151;
	public static readonly I64_STORE8 = 152;
	public static readonly I64_STORE16 = 153;
	public static readonly I64_STORE32 = 154;
	public static readonly MEMORY_SIZE = 155;
	public static readonly MEMORY_GROW = 156;
	public static readonly I32_CONST = 157;
	public static readonly I64_CONST = 158;
	public static readonly F32_CONST = 159;
	public static readonly F64_CONST = 160;
	public static readonly I32_EQZ = 161;
	public static readonly I32_EQ = 162;
	public static readonly I32_NE = 163;
	public static readonly I32_LT_S = 164;
	public static readonly I32_LT_U = 165;
	public static readonly I32_GT_S = 166;
	public static readonly I32_GT_U = 167;
	public static readonly I32_LE_S = 168;
	public static readonly I32_LE_U = 169;
	public static readonly I32_GE_S = 170;
	public static readonly I32_GE_U = 171;
	public static readonly I64_EQZ = 172;
	public static readonly I64_EQ = 173;
	public static readonly I64_NE = 174;
	public static readonly I64_LT_S = 175;
	public static readonly I64_LT_U = 176;
	public static readonly I64_GT_S = 177;
	public static readonly I64_GT_U = 178;
	public static readonly I64_LE_S = 179;
	public static readonly I64_LE_U = 180;
	public static readonly I64_GE_S = 181;
	public static readonly I64_GE_U = 182;
	public static readonly F32_EQ = 183;
	public static readonly F32_NE = 184;
	public static readonly F32_LT = 185;
	public static readonly F32_GT = 186;
	public static readonly F32_LE = 187;
	public static readonly F32_GE = 188;
	public static readonly F64_EQ = 189;
	public static readonly F64_NE = 190;
	public static readonly F64_LT = 191;
	public static readonly F64_GT = 192;
	public static readonly F64_LE = 193;
	public static readonly F64_GE = 194;
	public static readonly I32_CLZ = 195;
	public static readonly I32_CTZ = 196;
	public static readonly I32_POPCNT = 197;
	public static readonly I32_ADD = 198;
	public static readonly I32_SUB = 199;
	public static readonly I32_MUL = 200;
	public static readonly I32_DIV_S = 201;
	public static readonly I32_DIV_U = 202;
	public static readonly I32_REM_S = 203;
	public static readonly I32_REM_U = 204;
	public static readonly I32_AND = 205;
	public static readonly I32_OR = 206;
	public static readonly I32_XOR = 207;
	public static readonly I32_SHL = 208;
	public static readonly I32_SHR_S = 209;
	public static readonly I32_SHR_U = 210;
	public static readonly I32_ROTL = 211;
	public static readonly I32_ROTR = 212;
	public static readonly I64_CLZ = 213;
	public static readonly I64_CTZ = 214;
	public static readonly I64_POPCNT = 215;
	public static readonly I64_ADD = 216;
	public static readonly I64_SUB = 217;
	public static readonly I64_MUL = 218;
	public static readonly I64_DIV_S = 219;
	public static readonly I64_DIV_U = 220;
	public static readonly I64_REM_S = 221;
	public static readonly I64_REM_U = 222;
	public static readonly I64_AND = 223;
	public static readonly I64_OR = 224;
	public static readonly I64_XOR = 225;
	public static readonly I64_SHL = 226;
	public static readonly I64_SHR_S = 227;
	public static readonly I64_SHR_U = 228;
	public static readonly I64_ROTL = 229;
	public static readonly I64_ROTR = 230;
	public static readonly F32_ABS = 231;
	public static readonly F32_NEG = 232;
	public static readonly F32_CEIL = 233;
	public static readonly F32_FLOOR = 234;
	public static readonly F32_TRUNC = 235;
	public static readonly F32_NEAREST = 236;
	public static readonly F32_SQRT = 237;
	public static readonly F32_ADD = 238;
	public static readonly F32_SUB = 239;
	public static readonly F32_MUL = 240;
	public static readonly F32_DIV = 241;
	public static readonly F32_MIN = 242;
	public static readonly F32_MAX = 243;
	public static readonly F32_COPYSIGN = 244;
	public static readonly F64_ABS = 245;
	public static readonly F64_NEG = 246;
	public static readonly F64_CEIL = 247;
	public static readonly F64_FLOOR = 248;
	public static readonly F64_TRUNC = 249;
	public static readonly F64_NEAREST = 250;
	public static readonly F64_SQRT = 251;
	public static readonly F64_ADD = 252;
	public static readonly F64_SUB = 253;
	public static readonly F64_MUL = 254;
	public static readonly F64_DIV = 255;
	public static readonly F64_MIN = 256;
	public static readonly F64_MAX = 257;
	public static readonly F64_COPYSIGN = 258;
	public static readonly I32_WRAP_I64 = 259;
	public static readonly I32_TRUNC_F32_S = 260;
	public static readonly I32_TRUNC_F32_U = 261;
	public static readonly I32_TRUNC_F64_S = 262;
	public static readonly I32_TRUNC_F64_U = 263;
	public static readonly I64_EXTEND_I32_S = 264;
	public static readonly I64_EXTEND_I32_U = 265;
	public static readonly I64_TRUNC_F32_S = 266;
	public static readonly I64_TRUNC_F32_U = 267;
	public static readonly I64_TRUNC_F64_S = 268;
	public static readonly I64_TRUNC_F64_U = 269;
	public static readonly F32_CONVERT_I32_S = 270;
	public static readonly F32_CONVERT_I32_U = 271;
	public static readonly F32_CONVERT_I64_S = 272;
	public static readonly F32_CONVERT_I64_U = 273;
	public static readonly F32_DEMOTE_F64 = 274;
	public static readonly F64_CONVERT_I32_S = 275;
	public static readonly F64_CONVERT_I32_U = 276;
	public static readonly F64_CONVERT_I64_S = 277;
	public static readonly F64_CONVERT_I64_U = 278;
	public static readonly F64_PROMOTE_F32 = 279;
	public static readonly I32_REINTERPRET_F32 = 280;
	public static readonly I64_REINTERPRET_F64 = 281;
	public static readonly F32_REINTERPRET_I32 = 282;
	public static readonly F64_REINTERPRET_I64 = 283;
	public static readonly I32_EXTEND8_S = 284;
	public static readonly I32_EXTEND16_S = 285;
	public static readonly I64_EXTEND8_S = 286;
	public static readonly I64_EXTEND16_S = 287;
	public static readonly I64_EXTEND32_S = 288;
	public static readonly REF_NULL = 289;
	public static readonly REF_IS_NULL = 290;
	public static readonly REF_FUNC = 291;
	public static readonly REF_EQ = 292;
	public static readonly REF_AS_NON_NULL = 293;
	public static readonly BR_ON_NULL = 294;
	public static readonly BR_ON_NON_NULL = 295;
	public static readonly STRUCT_NEW = 296;
	public static readonly STRUCT_NEW_DEFAULT = 297;
	public static readonly STRUCT_GET = 298;
	public static readonly STRUCT_GETS = 299;
	public static readonly STRUCT_GETU = 300;
	public static readonly STRUCT_SET = 301;
	public static readonly ARRAY_NEW = 302;
	public static readonly ARRAY_NEWDEFAULT = 303;
	public static readonly ARRAY_NEW_FIXED = 304;
	public static readonly ARRAY_NEW_DATA = 305;
	public static readonly ARRAY_NEW_ELEM = 306;
	public static readonly ARRAY_GET = 307;
	public static readonly ARRAY_GETS = 308;
	public static readonly ARRAY_GETU = 309;
	public static readonly ARRAY_SET = 310;
	public static readonly ARRAY_LEN = 311;
	public static readonly ARRAY_FILL = 312;
	public static readonly ARRAY_COPY = 313;
	public static readonly ARRAY_INIT_DATA = 314;
	public static readonly ARRAY_INIT_ELEM = 315;
	public static readonly REF_TEST = 316;
	public static readonly REFCAST_NULL = 317;
	public static readonly BR_ON_CAST = 318;
	public static readonly BR_ON_CAST_FAIL = 319;
	public static readonly ANY_CONVERT_EXTERN = 320;
	public static readonly EXTERN_CONVERT_ANY = 321;
	public static readonly REF_I31 = 322;
	public static readonly I31GETS = 323;
	public static readonly I31GETU = 324;
	public static readonly I32_TRUNC_SAT_F32_S = 325;
	public static readonly I32_TRUNC_SAT_F32_U = 326;
	public static readonly I32_TRUNC_SAT_F64_S = 327;
	public static readonly I32_TRUNC_SAT_F64_U = 328;
	public static readonly I64_TRUNC_SAT_F32_S = 329;
	public static readonly I64_TRUNC_SAT_F32_U = 330;
	public static readonly I64_TRUNC_SAT_F64_S = 331;
	public static readonly I64_TRUNC_SAT_F64_U = 332;
	public static readonly MEMORY_INIT = 333;
	public static readonly DATA_DROP = 334;
	public static readonly MEMORY_COPY = 335;
	public static readonly MEMORY_FILL = 336;
	public static readonly TABLE_INIT = 337;
	public static readonly ELEM_DROP = 338;
	public static readonly TABLE_COPY = 339;
	public static readonly TABLE_GROW = 340;
	public static readonly TABLE_SIZE = 341;
	public static readonly TABLE_FILL = 342;
	public static readonly V128_LOAD = 343;
	public static readonly V128_LOAD8X8_S = 344;
	public static readonly V128_LOAD8X8_U = 345;
	public static readonly V128_LOAD16X4_S = 346;
	public static readonly V128_LOAD16X4_U = 347;
	public static readonly V128_LOAD32X2_S = 348;
	public static readonly V128_LOAD32X2_U = 349;
	public static readonly V128_LOAD8_SPLAT = 350;
	public static readonly V128_LOAD16_SPLAT = 351;
	public static readonly V128_LOAD32_SPLAT = 352;
	public static readonly V128_LOAD64_SPLAT = 353;
	public static readonly V128_STORE = 354;
	public static readonly V128_CONST = 355;
	public static readonly I8X16_SHUFFLE = 356;
	public static readonly I8X16_SWIZZLE = 357;
	public static readonly I8X16_SPLAT = 358;
	public static readonly I16X8_SPLAT = 359;
	public static readonly I32X4_SPLAT = 360;
	public static readonly I64X2_SPLAT = 361;
	public static readonly F32X4_SPLAT = 362;
	public static readonly F64X2_SPLAT = 363;
	public static readonly I8X16_EXTRACT_LANE_S = 364;
	public static readonly I8X16_EXTRACT_LANE_U = 365;
	public static readonly I8X16_REPLACE_LANE = 366;
	public static readonly I16X8_EXTRACT_LANE_S = 367;
	public static readonly I16X8_EXTRACT_LANE_U = 368;
	public static readonly I16X8_REPLACE_LANE = 369;
	public static readonly I32X4_EXTRACT_LANE = 370;
	public static readonly I32X4_REPLACE_LANE = 371;
	public static readonly I64X2_EXTRACT_LANE = 372;
	public static readonly I64X2_REPLACE_LANE = 373;
	public static readonly F32X4_EXTRACT_LANE = 374;
	public static readonly F32X4_REPLACE_LANE = 375;
	public static readonly F64X2_EXTRACT_LANE = 376;
	public static readonly F64X2_REPLACE_LANE = 377;
	public static readonly I8X16_EQ = 378;
	public static readonly I8X16_NE = 379;
	public static readonly I8X16_LT_S = 380;
	public static readonly I8X16_LT_U = 381;
	public static readonly I8X16_GT_S = 382;
	public static readonly I8X16_GT_U = 383;
	public static readonly I8X16_LE_S = 384;
	public static readonly I8X16_LE_U = 385;
	public static readonly I8X16_GE_S = 386;
	public static readonly I8X16_GE_U = 387;
	public static readonly I16X8_EQ = 388;
	public static readonly I16X8_NE = 389;
	public static readonly I16X8_LT_S = 390;
	public static readonly I16X8_LT_U = 391;
	public static readonly I16X8_GT_S = 392;
	public static readonly I16X8_GT_U = 393;
	public static readonly I16X8_LE_S = 394;
	public static readonly I16X8_LE_U = 395;
	public static readonly I16X8_GE_S = 396;
	public static readonly I16X8_GE_U = 397;
	public static readonly I32X4_EQ = 398;
	public static readonly I32X4_NE = 399;
	public static readonly I32X4_LT_S = 400;
	public static readonly I32X4_LT_U = 401;
	public static readonly I32X4_GT_S = 402;
	public static readonly I32X4_GT_U = 403;
	public static readonly I32X4_LE_S = 404;
	public static readonly I32X4_LE_U = 405;
	public static readonly I32X4_GE_S = 406;
	public static readonly I32X4_GE_U = 407;
	public static readonly F32X4_EQ = 408;
	public static readonly F32X4_NE = 409;
	public static readonly F32X4_LT = 410;
	public static readonly F32X4_GT = 411;
	public static readonly F32X4_LE = 412;
	public static readonly F32X4_GE = 413;
	public static readonly F64X2_EQ = 414;
	public static readonly F64X2_NE = 415;
	public static readonly F64X2_LT = 416;
	public static readonly F64X2_GT = 417;
	public static readonly F64X2_LE = 418;
	public static readonly F64X2_GE = 419;
	public static readonly V128_NOT = 420;
	public static readonly V128_AND = 421;
	public static readonly V128_ANDNOT = 422;
	public static readonly V128_OR = 423;
	public static readonly V128_XOR = 424;
	public static readonly V128_BITSELECT = 425;
	public static readonly V128_ANY_TRUE = 426;
	public static readonly V128_LOAD8_LANE = 427;
	public static readonly V128_LOAD16_LANE = 428;
	public static readonly V128_LOAD32_LANE = 429;
	public static readonly V128_LOAD64_LANE = 430;
	public static readonly V128_STORE8_LANE = 431;
	public static readonly V128_STORE16_LANE = 432;
	public static readonly V128_STORE32_LANE = 433;
	public static readonly V128_STORE64_LANE = 434;
	public static readonly V128_LOAD32_ZERO = 435;
	public static readonly V128_LOAD64_ZERO = 436;
	public static readonly F32X4_DEMOTE_F64X2_ZERO = 437;
	public static readonly F64X2_PROMOTE_LOW_F32X4 = 438;
	public static readonly I8X16_ABS = 439;
	public static readonly I8X16_NEG = 440;
	public static readonly I8X16_POPCNT = 441;
	public static readonly I8X16_ALL_TRUE = 442;
	public static readonly I8X16_BITMASK = 443;
	public static readonly I8X16_NARROW_I16X8_S = 444;
	public static readonly I8X16_NARROW_I16X8_U = 445;
	public static readonly F32X4_CEIL = 446;
	public static readonly F32X4_FLOOR = 447;
	public static readonly F32X4_TRUNC = 448;
	public static readonly F32X4_NEAREST = 449;
	public static readonly I8X16_SHL = 450;
	public static readonly I8X16_SHR_S = 451;
	public static readonly I8X16_SHR_U = 452;
	public static readonly I8X16_ADD = 453;
	public static readonly I8X16_ADD_SAT_S = 454;
	public static readonly I8X16_ADD_SAT_U = 455;
	public static readonly I8X16_SUB = 456;
	public static readonly I8X16_SUB_SAT_S = 457;
	public static readonly I8X16_SUB_SAT_U = 458;
	public static readonly F64X2_CEIL = 459;
	public static readonly F64X2_FLOOR = 460;
	public static readonly I8X16_MIN_S = 461;
	public static readonly I8X16_MIN_U = 462;
	public static readonly I8X16_MAX_S = 463;
	public static readonly I8X16_MAX_U = 464;
	public static readonly F64X2_TRUNC = 465;
	public static readonly I8X16_AVGR_U = 466;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_S = 467;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_U = 468;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_S = 469;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_U = 470;
	public static readonly I16X8_ABS = 471;
	public static readonly I16X8_NEG = 472;
	public static readonly I16X8_Q15MULR_SAT_S = 473;
	public static readonly I16X8_ALL_TRUE = 474;
	public static readonly I16X8_BITMASK = 475;
	public static readonly I16X8_NARROW_I32X4_S = 476;
	public static readonly I16X8_NARROW_I32X4_U = 477;
	public static readonly I16X8_EXTEND_LOW_I8X16_S = 478;
	public static readonly I16X8_EXTEND_HIGH_I8X16_S = 479;
	public static readonly I16X8_EXTEND_LOW_I8X16_U = 480;
	public static readonly I16X8_EXTEND_HIGH_I8X16_U = 481;
	public static readonly I16X8_SHL = 482;
	public static readonly I16X8_SHR_S = 483;
	public static readonly I16X8_SHR_U = 484;
	public static readonly I16X8_ADD = 485;
	public static readonly I16X8_ADD_SAT_S = 486;
	public static readonly I16X8_ADD_SAT_U = 487;
	public static readonly I16X8_SUB = 488;
	public static readonly I16X8_SUB_SAT_S = 489;
	public static readonly I16X8_SUB_SAT_U = 490;
	public static readonly F64X2_NEAREST = 491;
	public static readonly I16X8_MUL = 492;
	public static readonly I16X8_MIN_S = 493;
	public static readonly I16X8_MIN_U = 494;
	public static readonly I16X8_MAX_S = 495;
	public static readonly I16X8_MAX_U = 496;
	public static readonly I16X8_AVGR_U = 497;
	public static readonly I16X8_EXTMUL_LOW_I8X16_S = 498;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_S = 499;
	public static readonly I16X8_EXTMUL_LOW_I8X16_U = 500;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_U = 501;
	public static readonly I32X4_ABS = 502;
	public static readonly I32X4_NEG = 503;
	public static readonly I32X4_ALL_TRUE = 504;
	public static readonly I32X4_BITMASK = 505;
	public static readonly I32X4_EXTEND_LOW_I16X8_S = 506;
	public static readonly I32X4_EXTEND_HIGH_I16X8_S = 507;
	public static readonly I32X4_EXTEND_LOW_I16X8_U = 508;
	public static readonly I32X4_EXTEND_HIGH_I16X8_U = 509;
	public static readonly I32X4_SHL = 510;
	public static readonly I32X4_SHR_S = 511;
	public static readonly I32X4_SHR_U = 512;
	public static readonly I32X4_ADD = 513;
	public static readonly I32X4_SUB = 514;
	public static readonly I32X4_MUL = 515;
	public static readonly I32X4_MIN_S = 516;
	public static readonly I32X4_MIN_U = 517;
	public static readonly I32X4_MAX_S = 518;
	public static readonly I32X4_MAX_U = 519;
	public static readonly I32X4_DOT_I16X8_S = 520;
	public static readonly I32X4_EXTMUL_LOW_I16X8_S = 521;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_S = 522;
	public static readonly I32X4_EXTMUL_LOW_I16X8_U = 523;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_U = 524;
	public static readonly I64X2_ABS = 525;
	public static readonly I64X2_NEG = 526;
	public static readonly I64X2_ALL_TRUE = 527;
	public static readonly I64X2_BITMASK = 528;
	public static readonly I64X2_EXTEND_LOW_I32X4_S = 529;
	public static readonly I64X2_EXTEND_HIGH_I32X4_S = 530;
	public static readonly I64X2_EXTEND_LOW_I32X4_U = 531;
	public static readonly I64X2_EXTEND_HIGH_I32X4_U = 532;
	public static readonly I64X2_SHL = 533;
	public static readonly I64X2_SHR_S = 534;
	public static readonly I64X2_SHR_U = 535;
	public static readonly I64X2_ADD = 536;
	public static readonly I64X2_SUB = 537;
	public static readonly I64X2_MUL = 538;
	public static readonly I64X2_EQ = 539;
	public static readonly I64X2_NE = 540;
	public static readonly I64X2_LT_S = 541;
	public static readonly I64X2_GT_S = 542;
	public static readonly I64X2_LE_S = 543;
	public static readonly I64X2_GE_S = 544;
	public static readonly I64X2_EXTMUL_LOW_I32X4_S = 545;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_S = 546;
	public static readonly I64X2_EXTMUL_LOW_I32X4_U = 547;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_U = 548;
	public static readonly F32X4_ABS = 549;
	public static readonly F32X4_NEG = 550;
	public static readonly F32X4_SQRT = 551;
	public static readonly F32X4_ADD = 552;
	public static readonly F32X4_SUB = 553;
	public static readonly F32X4_MUL = 554;
	public static readonly F32X4_DIV = 555;
	public static readonly F32X4_MIN = 556;
	public static readonly F32X4_MAX = 557;
	public static readonly F32X4_PMIN = 558;
	public static readonly F32X4_PMAX = 559;
	public static readonly F64X2_ABS = 560;
	public static readonly F64X2_NEG = 561;
	public static readonly F64X2_SQRT = 562;
	public static readonly F64X2_ADD = 563;
	public static readonly F64X2_SUB = 564;
	public static readonly F64X2_MUL = 565;
	public static readonly F64X2_DIV = 566;
	public static readonly F64X2_MIN = 567;
	public static readonly F64X2_MAX = 568;
	public static readonly F64X2_PMIN = 569;
	public static readonly F64X2_PMAX = 570;
	public static readonly I32X4_TRUNC_SAT_F32X4_S = 571;
	public static readonly I32X4_TRUNC_SAT_F32X4_U = 572;
	public static readonly F32X4_CONVERT_I32X4_S = 573;
	public static readonly F32X4_CONVERT_I32X4_U = 574;
	public static readonly I32X4_TRUNC_SAT_F64X2_S_ZERO = 575;
	public static readonly I32X4_TRUNC_SAT_F64X2_U_ZERO = 576;
	public static readonly F64X2_CONVERT_LOW_I32X4_S = 577;
	public static readonly F64X2_CONVERT_LOW_I32X4_U = 578;
	public static readonly TRY = 579;
	public static readonly CATCH = 580;
	public static readonly THROW = 581;
	public static readonly IDENTIFIER = 582;
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
	public static readonly RULE_value_type_or_null = 13;
	public static readonly RULE_native_type = 14;
	public static readonly RULE_any_type = 15;
	public static readonly RULE_boolean_type = 16;
	public static readonly RULE_number_type = 17;
	public static readonly RULE_integer_type = 18;
	public static readonly RULE_decimal_type = 19;
	public static readonly RULE_i32_type = 20;
	public static readonly RULE_i64_type = 21;
	public static readonly RULE_u32_type = 22;
	public static readonly RULE_u64_type = 23;
	public static readonly RULE_f32_type = 24;
	public static readonly RULE_f64_type = 25;
	public static readonly RULE_string_type = 26;
	public static readonly RULE_void_type = 27;
	public static readonly RULE_attribute_type = 28;
	public static readonly RULE_attribute_type_or_null = 29;
	public static readonly RULE_attribute_ref = 30;
	public static readonly RULE_class_type = 31;
	public static readonly RULE_class_ref = 32;
	public static readonly RULE_function_type = 33;
	public static readonly RULE_function_type_or_null = 34;
	public static readonly RULE_return_type = 35;
	public static readonly RULE_return_types = 36;
	public static readonly RULE_parameter = 37;
	public static readonly RULE_class_declaration = 38;
	public static readonly RULE_accessibility = 39;
	public static readonly RULE_field_declaration = 40;
	public static readonly RULE_function_declaration = 41;
	public static readonly RULE_abstract_function_declaration = 42;
	public static readonly RULE_concrete_function_declaration = 43;
	public static readonly RULE_native_function_declaration = 44;
	public static readonly RULE_function_prototype = 45;
	public static readonly RULE_generic_parameter = 46;
	public static readonly RULE_statement = 47;
	public static readonly RULE_embeddable_statement = 48;
	public static readonly RULE_standalone_statement = 49;
	public static readonly RULE_unary_statement = 50;
	public static readonly RULE_throw_statement = 51;
	public static readonly RULE_try_statement = 52;
	public static readonly RULE_catch_clause = 53;
	public static readonly RULE_catch_all_clause = 54;
	public static readonly RULE_finally_clause = 55;
	public static readonly RULE_break_statement = 56;
	public static readonly RULE_for_statement = 57;
	public static readonly RULE_if_statement = 58;
	public static readonly RULE_statements = 59;
	public static readonly RULE_function_call_statement = 60;
	public static readonly RULE_declare_instances_statement = 61;
	public static readonly RULE_declare_one = 62;
	public static readonly RULE_assign_instance_statement = 63;
	public static readonly RULE_assign_op = 64;
	public static readonly RULE_assign_item_statement = 65;
	public static readonly RULE_return_statement = 66;
	public static readonly RULE_expression = 67;
	public static readonly RULE_function_call = 68;
	public static readonly RULE_literal_expression = 69;
	public static readonly RULE_list_literal = 70;
	public static readonly RULE_set_literal = 71;
	public static readonly RULE_map_literal = 72;
	public static readonly RULE_map_entry = 73;
	public static readonly RULE_instruction = 74;
	public static readonly RULE_opcode = 75;
	public static readonly RULE_plain_opcode = 76;
	public static readonly RULE_keyword_opcode = 77;
	public static readonly RULE_composite_opcode = 78;
	public static readonly literalNames: (string | null)[] = [ null, null,
                                                            "'i32'.ts", "'i64'",
                                                            "'u32'", "'u64'",
                                                            "'f32'", "'f64'",
                                                            "'v128'", "'string'",
                                                            "'boolean'",
                                                            "'any'", "'void'",
                                                            "'attribute'",
                                                            "'class'", "'enum'",
                                                            "'extends'",
                                                            "'function'",
                                                            "'static'",
                                                            "'abstract'",
                                                            "'native'",
                                                            "'public'",
                                                            "'protected'",
                                                            "'private'",
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
                                                             "I32", "I64",
                                                             "U32", "U64",
                                                             "F32", "F64",
                                                             "V128", "STRING",
                                                             "BOOLEAN",
                                                             "ANY", "VOID",
                                                             "ATTRIBUTE",
                                                             "CLASS", "ENUM",
                                                             "EXTENDS",
                                                             "FUNCTION",
                                                             "STATIC", "ABSTRACT",
                                                             "NATIVE", "PUBLIC",
                                                             "PROTECTED",
                                                             "PRIVATE",
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
		"identifier", "annotation", "value_type", "value_type_or_null", "native_type",
		"any_type", "boolean_type", "number_type", "integer_type", "decimal_type",
		"i32_type", "i64_type", "u32_type", "u64_type", "f32_type", "f64_type",
		"string_type", "void_type", "attribute_type", "attribute_type_or_null",
		"attribute_ref", "class_type", "class_ref", "function_type", "function_type_or_null",
		"return_type", "return_types", "parameter", "class_declaration", "accessibility",
		"field_declaration", "function_declaration", "abstract_function_declaration",
		"concrete_function_declaration", "native_function_declaration", "function_prototype",
		"generic_parameter", "statement", "embeddable_statement", "standalone_statement",
		"unary_statement", "throw_statement", "try_statement", "catch_clause",
		"catch_all_clause", "finally_clause", "break_statement", "for_statement",
		"if_statement", "statements", "function_call_statement", "declare_instances_statement",
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
			this.state = 158;
			this.preamble();
			this.state = 162;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 159;
					this.compilation_atom();
					}
					}
				}
				this.state = 164;
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
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 165;
					this.import_statement();
					}
					}
				}
				this.state = 170;
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
			this.state = 171;
			this.match(ComposeParser.IMPORT);
			this.state = 198;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 106:
			case 107:
			case 108:
			case 109:
			case 112:
			case 113:
			case 114:
			case 115:
			case 117:
			case 118:
			case 123:
			case 124:
			case 582:
				{
				this.state = 172;
				localctx._main = this.identifier();
				this.state = 185;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===65) {
					{
					this.state = 173;
					this.match(ComposeParser.COMMA);
					this.state = 174;
					this.match(ComposeParser.LCURL);
					this.state = 175;
					this.identifier();
					this.state = 180;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===65) {
						{
						{
						this.state = 176;
						this.match(ComposeParser.COMMA);
						this.state = 177;
						this.identifier();
						}
						}
						this.state = 182;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 183;
					this.match(ComposeParser.RCURL);
					}
				}

				}
				break;
			case 50:
				{
				this.state = 187;
				this.match(ComposeParser.LCURL);
				this.state = 188;
				this.identifier();
				this.state = 193;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 189;
					this.match(ComposeParser.COMMA);
					this.state = 190;
					this.identifier();
					}
					}
					this.state = 195;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 196;
				this.match(ComposeParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 200;
			this.match(ComposeParser.FROM);
			this.state = 201;
			this.import_source();
			this.state = 202;
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
			this.state = 204;
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
			this.state = 208;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 206;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 207;
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
			this.state = 213;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===102) {
				{
				{
				this.state = 210;
				this.annotation();
				}
				}
				this.state = 215;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 220;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 216;
				this.match(ComposeParser.EXPORT);
				this.state = 218;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===43) {
					{
					this.state = 217;
					this.match(ComposeParser.DEFAULT);
					}
				}

				}
			}

			this.state = 222;
			this.declare_instances_statement();
			this.state = 223;
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
			this.state = 228;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 225;
					this.annotation();
					}
					}
				}
				this.state = 230;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 235;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 231;
				this.match(ComposeParser.EXPORT);
				this.state = 233;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 232;
					this.match(ComposeParser.DEFAULT);
					}
					break;
				}
				}
				break;
			}
			this.state = 241;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 237;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 238;
				this.class_declaration();
				}
				break;
			case 3:
				{
				this.state = 239;
				this.function_declaration(false);
				}
				break;
			case 4:
				{
				this.state = 240;
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
			this.state = 243;
			this.match(ComposeParser.ENUM);
			this.state = 244;
			this.identifier();
			this.state = 245;
			this.match(ComposeParser.LCURL);
			this.state = 246;
			this.enum_item();
			this.state = 251;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===65) {
				{
				{
				this.state = 247;
				this.match(ComposeParser.COMMA);
				this.state = 248;
				this.enum_item();
				}
				}
				this.state = 253;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 254;
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
			this.state = 256;
			this.identifier();
			this.state = 257;
			this.match(ComposeParser.ASSIGN);
			this.state = 258;
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
			this.state = 260;
			this.match(ComposeParser.ATTRIBUTE);
			this.state = 261;
			this.identifier();
			this.state = 262;
			this.match(ComposeParser.COLON);
			this.state = 263;
			this.value_type_or_null();
			this.state = 264;
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
			this.state = 268;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 582:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 266;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 1:
			case 106:
			case 107:
			case 108:
			case 109:
			case 112:
			case 113:
			case 114:
			case 115:
			case 117:
			case 118:
			case 123:
			case 124:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 267;
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
			this.state = 270;
			this.match(ComposeParser.ANNOTATION);
			this.state = 275;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 271;
				this.match(ComposeParser.LPAR);
				this.state = 272;
				this.literal_expression();
				this.state = 273;
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
			this.state = 280;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				localctx = new NativeTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 278;
				this.native_type();
				}
				break;
			case 2:
				{
				localctx = new ClassTypeContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 279;
				this.class_type();
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 290;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 19, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 288;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
					case 1:
						{
						localctx = new ArrayTypeContext(this, new Value_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_value_type);
						this.state = 282;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 283;
						this.match(ComposeParser.LBRAK);
						this.state = 284;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 2:
						{
						localctx = new SetTypeContext(this, new Value_typeContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_value_type);
						this.state = 285;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 286;
						this.match(ComposeParser.LT);
						this.state = 287;
						this.match(ComposeParser.GT);
						}
						break;
					}
					}
				}
				this.state = 292;
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
	public value_type_or_null(): Value_type_or_nullContext {
		let localctx: Value_type_or_nullContext = new Value_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ComposeParser.RULE_value_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 293;
			this.value_type(0);
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 20, this._ctx) ) {
			case 1:
				{
				this.state = 294;
				this.match(ComposeParser.PIPE);
				this.state = 295;
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
	public native_type(): Native_typeContext {
		let localctx: Native_typeContext = new Native_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ComposeParser.RULE_native_type);
		try {
			this.state = 302;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 10:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 298;
				this.boolean_type();
				}
				break;
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 299;
				this.number_type();
				}
				break;
			case 9:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 300;
				this.string_type();
				}
				break;
			case 11:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 301;
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
		this.enterRule(localctx, 30, ComposeParser.RULE_any_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 304;
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
		this.enterRule(localctx, 32, ComposeParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 306;
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
	public number_type(): Number_typeContext {
		let localctx: Number_typeContext = new Number_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 34, ComposeParser.RULE_number_type);
		try {
			this.state = 310;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
			case 3:
			case 4:
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 308;
				this.integer_type();
				}
				break;
			case 6:
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 309;
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
		this.enterRule(localctx, 36, ComposeParser.RULE_integer_type);
		try {
			this.state = 316;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 312;
				this.i32_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 313;
				this.i64_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 314;
				this.u32_type();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 315;
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
		this.enterRule(localctx, 38, ComposeParser.RULE_decimal_type);
		try {
			this.state = 320;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 318;
				this.f32_type();
				}
				break;
			case 7:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 319;
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
	public i32_type(): I32_typeContext {
		let localctx: I32_typeContext = new I32_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ComposeParser.RULE_i32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 322;
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
		this.enterRule(localctx, 42, ComposeParser.RULE_i64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 324;
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
	public u32_type(): U32_typeContext {
		let localctx: U32_typeContext = new U32_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ComposeParser.RULE_u32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 326;
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
		this.enterRule(localctx, 46, ComposeParser.RULE_u64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 328;
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
		this.enterRule(localctx, 48, ComposeParser.RULE_f32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 330;
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
		this.enterRule(localctx, 50, ComposeParser.RULE_f64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 332;
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
		this.enterRule(localctx, 52, ComposeParser.RULE_string_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 334;
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
		this.enterRule(localctx, 54, ComposeParser.RULE_void_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 336;
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
		this.enterRule(localctx, 56, ComposeParser.RULE_attribute_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 338;
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
		this.enterRule(localctx, 58, ComposeParser.RULE_attribute_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 340;
			this.attribute_type();
			this.state = 343;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 341;
				this.match(ComposeParser.PIPE);
				this.state = 342;
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
		this.enterRule(localctx, 60, ComposeParser.RULE_attribute_ref);
		try {
			this.state = 348;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 345;
				if (!( this.willBeLowercase() )) {
					throw this.createFailedPredicateException(" this.willBeLowercase() ");
				}
				this.state = 346;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 347;
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
	public class_type(): Class_typeContext {
		let localctx: Class_typeContext = new Class_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ComposeParser.RULE_class_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 350;
			this.class_ref();
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
	public class_ref(): Class_refContext {
		let localctx: Class_refContext = new Class_refContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ComposeParser.RULE_class_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 352;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 353;
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
		this.enterRule(localctx, 66, ComposeParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 368;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 355;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 356;
				this.match(ComposeParser.LPAR);
				this.state = 365;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
				case 1:
					{
					this.state = 357;
					this.parameter();
					this.state = 362;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===65) {
						{
						{
						this.state = 358;
						this.match(ComposeParser.COMMA);
						this.state = 359;
						this.parameter();
						}
						}
						this.state = 364;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 367;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 370;
			this.match(ComposeParser.ARROW);
			this.state = 371;
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
		this.enterRule(localctx, 68, ComposeParser.RULE_function_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 373;
			this.function_type();
			this.state = 376;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 374;
				this.match(ComposeParser.PIPE);
				this.state = 375;
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
		this.enterRule(localctx, 70, ComposeParser.RULE_return_type);
		try {
			this.state = 386;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 378;
				this.value_type_or_null();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 379;
				this.attribute_type_or_null();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 380;
				if (!( !localctx.requireParenthesis )) {
					throw this.createFailedPredicateException(" !$requireParenthesis ");
				}
				this.state = 381;
				this.function_type_or_null();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 382;
				this.match(ComposeParser.LPAR);
				this.state = 383;
				this.function_type_or_null();
				this.state = 384;
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
		this.enterRule(localctx, 72, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 397;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 33, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 388;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 389;
				this.return_type(true);
				this.state = 394;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 390;
						this.match(ComposeParser.COMMA);
						this.state = 391;
						this.return_type(false);
						}
						}
					}
					this.state = 396;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 32, this._ctx);
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
		this.enterRule(localctx, 74, ComposeParser.RULE_parameter);
		let _la: number;
		try {
			this.state = 411;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 399;
				this.attribute_type_or_null();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 401;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===66) {
					{
					this.state = 400;
					this.match(ComposeParser.ETC);
					}
				}

				this.state = 403;
				this.identifier();
				this.state = 404;
				this.match(ComposeParser.COLON);
				this.state = 405;
				this.value_type_or_null();
				}
				break;
			case 3:
				localctx = new FunctionParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 407;
				this.identifier();
				this.state = 408;
				this.match(ComposeParser.COLON);
				this.state = 409;
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
		this.enterRule(localctx, 76, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 414;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0)) {
				{
				this.state = 413;
				this.accessibility();
				}
			}

			this.state = 417;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 416;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 419;
			this.match(ComposeParser.CLASS);
			this.state = 420;
			localctx._id = this.class_ref();
			this.state = 432;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===46) {
				{
				this.state = 421;
				this.match(ComposeParser.LPAR);
				this.state = 422;
				this.attribute_ref();
				this.state = 427;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 423;
					this.match(ComposeParser.COMMA);
					this.state = 424;
					this.attribute_ref();
					}
					}
					this.state = 429;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 430;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 443;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 434;
				this.match(ComposeParser.EXTENDS);
				this.state = 435;
				this.class_ref();
				this.state = 440;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 436;
					this.match(ComposeParser.COMMA);
					this.state = 437;
					this.class_ref();
					}
					}
					this.state = 442;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 445;
			this.match(ComposeParser.LCURL);
			this.state = 449;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 446;
					this.field_declaration();
					}
					}
				}
				this.state = 451;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 42, this._ctx);
			}
			this.state = 455;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 452;
					this.function_declaration(true);
					}
					}
				}
				this.state = 457;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 43, this._ctx);
			}
			this.state = 458;
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
	public accessibility(): AccessibilityContext {
		let localctx: AccessibilityContext = new AccessibilityContext(this, this._ctx, this.state);
		this.enterRule(localctx, 78, ComposeParser.RULE_accessibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 460;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0))) {
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
		this.enterRule(localctx, 80, ComposeParser.RULE_field_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 463;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0)) {
				{
				this.state = 462;
				this.accessibility();
				}
			}

			this.state = 466;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 465;
				this.match(ComposeParser.STATIC);
				}
			}

			this.state = 468;
			this.identifier();
			this.state = 469;
			this.match(ComposeParser.COLON);
			this.state = 470;
			this.value_type_or_null();
			this.state = 471;
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
		this.enterRule(localctx, 82, ComposeParser.RULE_function_declaration);
		try {
			this.state = 476;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 46, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 473;
				this.abstract_function_declaration(localctx.as_member);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 474;
				this.concrete_function_declaration(localctx.as_member);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 475;
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
		this.enterRule(localctx, 84, ComposeParser.RULE_abstract_function_declaration);
		let _la: number;
		try {
			this.state = 492;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 478;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 480;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0)) {
					{
					this.state = 479;
					this.accessibility();
					}
				}

				this.state = 482;
				this.match(ComposeParser.ABSTRACT);
				this.state = 483;
				this.function_prototype(true);
				this.state = 484;
				this.match(ComposeParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 486;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 487;
				this.match(ComposeParser.ABSTRACT);
				this.state = 488;
				this.match(ComposeParser.FUNCTION);
				this.state = 489;
				this.function_prototype(true);
				this.state = 490;
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
		this.enterRule(localctx, 86, ComposeParser.RULE_concrete_function_declaration);
		let _la: number;
		try {
			this.state = 523;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 53, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 494;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 496;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0)) {
					{
					this.state = 495;
					this.accessibility();
					}
				}

				this.state = 499;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===18) {
					{
					this.state = 498;
					this.match(ComposeParser.STATIC);
					}
				}

				this.state = 501;
				this.function_prototype(false);
				this.state = 502;
				this.match(ComposeParser.LCURL);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
					{
					{
					this.state = 503;
					this.statement();
					}
					}
					this.state = 508;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 509;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 511;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 512;
				this.match(ComposeParser.FUNCTION);
				this.state = 513;
				this.function_prototype(false);
				this.state = 514;
				this.match(ComposeParser.LCURL);
				this.state = 518;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
					{
					{
					this.state = 515;
					this.statement();
					}
					}
					this.state = 520;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 521;
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
		this.enterRule(localctx, 88, ComposeParser.RULE_native_function_declaration);
		let _la: number;
		try {
			this.state = 554;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 525;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 527;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 14680064) !== 0)) {
					{
					this.state = 526;
					this.accessibility();
					}
				}

				this.state = 529;
				this.match(ComposeParser.STATIC);
				this.state = 530;
				this.match(ComposeParser.NATIVE);
				this.state = 531;
				this.function_prototype(false);
				this.state = 532;
				this.match(ComposeParser.LCURL);
				this.state = 536;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4291035105) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 4294967295) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & 4294967295) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 4294967295) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 4294967295) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2147483647) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & 4294967295) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 4294967295) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & 4294967295) !== 0) || ((((_la - 421)) & ~0x1F) === 0 && ((1 << (_la - 421)) & 4294967295) !== 0) || ((((_la - 453)) & ~0x1F) === 0 && ((1 << (_la - 453)) & 4294967295) !== 0) || ((((_la - 485)) & ~0x1F) === 0 && ((1 << (_la - 485)) & 4294967295) !== 0) || ((((_la - 517)) & ~0x1F) === 0 && ((1 << (_la - 517)) & 4294967295) !== 0) || ((((_la - 549)) & ~0x1F) === 0 && ((1 << (_la - 549)) & 4294967295) !== 0) || _la===581 || _la===582) {
					{
					{
					this.state = 533;
					this.instruction();
					}
					}
					this.state = 538;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 539;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 541;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 542;
				this.match(ComposeParser.NATIVE);
				this.state = 543;
				this.match(ComposeParser.FUNCTION);
				this.state = 544;
				this.function_prototype(false);
				this.state = 545;
				this.match(ComposeParser.LCURL);
				this.state = 549;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 4291035105) !== 0) || ((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & 4294967295) !== 0) || ((((_la - 165)) & ~0x1F) === 0 && ((1 << (_la - 165)) & 4294967295) !== 0) || ((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & 4294967295) !== 0) || ((((_la - 229)) & ~0x1F) === 0 && ((1 << (_la - 229)) & 4294967295) !== 0) || ((((_la - 261)) & ~0x1F) === 0 && ((1 << (_la - 261)) & 2147483647) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & 4294967295) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 4294967295) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & 4294967295) !== 0) || ((((_la - 421)) & ~0x1F) === 0 && ((1 << (_la - 421)) & 4294967295) !== 0) || ((((_la - 453)) & ~0x1F) === 0 && ((1 << (_la - 453)) & 4294967295) !== 0) || ((((_la - 485)) & ~0x1F) === 0 && ((1 << (_la - 485)) & 4294967295) !== 0) || ((((_la - 517)) & ~0x1F) === 0 && ((1 << (_la - 517)) & 4294967295) !== 0) || ((((_la - 549)) & ~0x1F) === 0 && ((1 << (_la - 549)) & 4294967295) !== 0) || _la===581 || _la===582) {
					{
					{
					this.state = 546;
					this.instruction();
					}
					}
					this.state = 551;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 552;
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
		this.enterRule(localctx, 90, ComposeParser.RULE_function_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 556;
			this.identifier();
			this.state = 568;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 557;
				this.match(ComposeParser.LT);
				this.state = 558;
				this.generic_parameter();
				this.state = 563;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 559;
					this.match(ComposeParser.COMMA);
					this.state = 560;
					this.generic_parameter();
					}
					}
					this.state = 565;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 566;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 570;
			this.match(ComposeParser.LPAR);
			this.state = 579;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 61, this._ctx) ) {
			case 1:
				{
				this.state = 571;
				this.parameter();
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 572;
					this.match(ComposeParser.COMMA);
					this.state = 573;
					this.parameter();
					}
					}
					this.state = 578;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 581;
			this.match(ComposeParser.RPAR);
			this.state = 590;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 582;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 583;
				this.match(ComposeParser.COLON);
				this.state = 584;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 585;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 588;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===64) {
					{
					this.state = 586;
					this.match(ComposeParser.COLON);
					this.state = 587;
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
		this.enterRule(localctx, 92, ComposeParser.RULE_generic_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 592;
			this.class_ref();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===16) {
				{
				this.state = 593;
				this.match(ComposeParser.EXTENDS);
				this.state = 594;
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
		this.enterRule(localctx, 94, ComposeParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 600;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===102) {
				{
				{
				this.state = 597;
				this.annotation();
				}
				}
				this.state = 602;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 607;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 24:
			case 25:
			case 26:
			case 37:
			case 38:
			case 39:
			case 46:
			case 48:
			case 50:
			case 54:
			case 59:
			case 69:
			case 70:
			case 71:
			case 72:
			case 78:
			case 96:
			case 97:
			case 98:
			case 99:
			case 100:
			case 101:
			case 106:
			case 107:
			case 108:
			case 109:
			case 112:
			case 113:
			case 114:
			case 115:
			case 117:
			case 118:
			case 123:
			case 124:
			case 582:
				{
				this.state = 603;
				this.embeddable_statement();
				this.state = 604;
				this.match(ComposeParser.SEMI);
				}
				break;
			case 32:
			case 35:
			case 110:
			case 116:
			case 579:
			case 581:
				{
				this.state = 606;
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
		this.enterRule(localctx, 96, ComposeParser.RULE_embeddable_statement);
		try {
			this.state = 614;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 609;
				this.declare_instances_statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 610;
				this.assign_instance_statement();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 611;
				this.assign_item_statement();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 612;
				this.unary_statement();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 613;
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
		this.enterRule(localctx, 98, ComposeParser.RULE_standalone_statement);
		try {
			this.state = 622;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 110:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 616;
				this.if_statement();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 617;
				this.for_statement();
				}
				break;
			case 579:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 618;
				this.try_statement();
				}
				break;
			case 581:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 619;
				this.throw_statement();
				}
				break;
			case 35:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 620;
				this.break_statement();
				}
				break;
			case 116:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 621;
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
		this.enterRule(localctx, 100, ComposeParser.RULE_unary_statement);
		try {
			this.state = 636;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 624;
				this.expression(0);
				 this.willNotContainLineTerminator()
				this.state = 626;
				this.match(ComposeParser.INC);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 628;
				this.expression(0);
				 this.willNotContainLineTerminator()
				this.state = 630;
				this.match(ComposeParser.DEC);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 632;
				this.match(ComposeParser.INC);
				this.state = 633;
				this.expression(0);
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 634;
				this.match(ComposeParser.DEC);
				this.state = 635;
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
		this.enterRule(localctx, 102, ComposeParser.RULE_throw_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 638;
			this.match(ComposeParser.THROW);
			this.state = 639;
			this.expression(0);
			this.state = 640;
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
		this.enterRule(localctx, 104, ComposeParser.RULE_try_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			this.match(ComposeParser.TRY);
			this.state = 643;
			this.match(ComposeParser.LCURL);
			this.state = 647;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
				{
				{
				this.state = 644;
				this.statement();
				}
				}
				this.state = 649;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 650;
			this.match(ComposeParser.RCURL);
			this.state = 654;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 651;
					this.catch_clause();
					}
					}
				}
				this.state = 656;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 71, this._ctx);
			}
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===580) {
				{
				this.state = 657;
				this.catch_all_clause();
				}
			}

			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===36) {
				{
				this.state = 660;
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
		this.enterRule(localctx, 106, ComposeParser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 663;
			this.match(ComposeParser.CATCH);
			this.state = 664;
			this.match(ComposeParser.LPAR);
			this.state = 665;
			this.identifier();
			this.state = 666;
			this.match(ComposeParser.COLON);
			this.state = 667;
			this.value_type(0);
			this.state = 672;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===80) {
				{
				{
				this.state = 668;
				this.match(ComposeParser.PIPE);
				this.state = 669;
				this.value_type(0);
				}
				}
				this.state = 674;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 675;
			this.match(ComposeParser.RPAR);
			this.state = 676;
			this.match(ComposeParser.LCURL);
			this.state = 680;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
				{
				{
				this.state = 677;
				this.statement();
				}
				}
				this.state = 682;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 683;
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
		this.enterRule(localctx, 108, ComposeParser.RULE_catch_all_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 685;
			this.match(ComposeParser.CATCH);
			this.state = 686;
			this.match(ComposeParser.LPAR);
			this.state = 687;
			this.match(ComposeParser.ETC);
			this.state = 688;
			this.match(ComposeParser.RPAR);
			this.state = 689;
			this.match(ComposeParser.LCURL);
			this.state = 693;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
				{
				{
				this.state = 690;
				this.statement();
				}
				}
				this.state = 695;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 696;
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
		this.enterRule(localctx, 110, ComposeParser.RULE_finally_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 698;
			this.match(ComposeParser.FINALLY);
			this.state = 699;
			this.match(ComposeParser.LCURL);
			this.state = 703;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
				{
				{
				this.state = 700;
				this.statement();
				}
				}
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 706;
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
		this.enterRule(localctx, 112, ComposeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 708;
			this.match(ComposeParser.BREAK);
			this.state = 709;
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
		this.enterRule(localctx, 114, ComposeParser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 711;
			this.match(ComposeParser.FOR);
			this.state = 712;
			this.match(ComposeParser.LPAR);
			this.state = 722;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===25) {
				{
				this.state = 713;
				this.match(ComposeParser.LET);
				this.state = 714;
				this.declare_one();
				this.state = 719;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 715;
					this.match(ComposeParser.COMMA);
					this.state = 716;
					this.declare_one();
					}
					}
					this.state = 721;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 724;
			this.match(ComposeParser.SEMI);
			this.state = 733;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 725;
				this.expression(0);
				this.state = 730;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 726;
					this.match(ComposeParser.COMMA);
					this.state = 727;
					this.expression(0);
					}
					}
					this.state = 732;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 735;
			this.match(ComposeParser.SEMI);
			this.state = 744;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 736;
				this.embeddable_statement();
				this.state = 741;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 737;
					this.match(ComposeParser.COMMA);
					this.state = 738;
					this.embeddable_statement();
					}
					}
					this.state = 743;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 746;
			this.match(ComposeParser.RPAR);
			this.state = 747;
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
	public if_statement(): If_statementContext {
		let localctx: If_statementContext = new If_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 116, ComposeParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 749;
			this.match(ComposeParser.IF);
			this.state = 750;
			this.match(ComposeParser.LPAR);
			this.state = 751;
			this.expression(0);
			this.state = 752;
			this.match(ComposeParser.RPAR);
			this.state = 753;
			this.statements();
			this.state = 763;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 754;
					this.match(ComposeParser.ELSE);
					this.state = 755;
					this.match(ComposeParser.IF);
					this.state = 756;
					this.match(ComposeParser.LPAR);
					this.state = 757;
					this.expression(0);
					this.state = 758;
					this.match(ComposeParser.RPAR);
					this.state = 759;
					this.statements();
					}
					}
				}
				this.state = 765;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 84, this._ctx);
			}
			this.state = 770;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 766;
					this.match(ComposeParser.ELSE);
					this.state = 767;
					this.statements();
					}
					}
				}
				this.state = 772;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 85, this._ctx);
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
		this.enterRule(localctx, 118, ComposeParser.RULE_statements);
		let _la: number;
		try {
			this.state = 782;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 87, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 773;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 774;
				this.match(ComposeParser.LCURL);
				this.state = 778;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 117440514) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 138756329) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12844003) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 13) !== 0)) {
					{
					{
					this.state = 775;
					this.statement();
					}
					}
					this.state = 780;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 781;
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
		this.enterRule(localctx, 120, ComposeParser.RULE_function_call_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 787;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 88, this._ctx) ) {
			case 1:
				{
				this.state = 784;
				this.expression(0);
				this.state = 785;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 789;
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
		this.enterRule(localctx, 122, ComposeParser.RULE_declare_instances_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 791;
			_la = this._input.LA(1);
			if(!(_la===24 || _la===25)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 792;
			this.declare_one();
			this.state = 797;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 89, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 793;
					this.match(ComposeParser.COMMA);
					this.state = 794;
					this.declare_one();
					}
					}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 89, this._ctx);
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
		this.enterRule(localctx, 124, ComposeParser.RULE_declare_one);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 800;
			this.identifier();
			this.state = 804;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
			case 1:
				{
				this.state = 801;
				this.match(ComposeParser.COLON);
				this.state = 802;
				this.value_type_or_null();
				}
				break;
			case 2:
				{
				this.state = 803;
				this.function_type_or_null();
				}
				break;
			}
			this.state = 808;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===84) {
				{
				this.state = 806;
				this.match(ComposeParser.ASSIGN);
				this.state = 807;
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
		this.enterRule(localctx, 126, ComposeParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 813;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
			case 1:
				{
				this.state = 810;
				localctx._parent = this.expression(0);
				this.state = 811;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 815;
			this.identifier();
			this.state = 816;
			this.assign_op();
			this.state = 817;
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
		this.enterRule(localctx, 128, ComposeParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 819;
			_la = this._input.LA(1);
			if(!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & 4095) !== 0))) {
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
		this.enterRule(localctx, 130, ComposeParser.RULE_assign_item_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 821;
			this.expression(0);
			this.state = 822;
			this.match(ComposeParser.LPAR);
			this.state = 823;
			this.expression(0);
			this.state = 824;
			this.match(ComposeParser.RPAR);
			this.state = 825;
			this.assign_op();
			this.state = 826;
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
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 132, ComposeParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 828;
			this.match(ComposeParser.RETURN);
			this.state = 830;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 829;
				this.expression(0);
				}
			}

			this.state = 832;
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
		let _startState: number = 134;
		this.enterRecursionRule(localctx, 134, ComposeParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 882;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 96, this._ctx) ) {
			case 1:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 835;
				this.match(ComposeParser.NEW);
				this.state = 836;
				this.function_call();
				}
				break;
			case 2:
				{
				localctx = new SimpleCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 837;
				this.function_call();
				}
				break;
			case 3:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 838;
				this.match(ComposeParser.TYPE_OF);
				this.state = 845;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 46:
					{
					{
					this.state = 839;
					this.match(ComposeParser.LPAR);
					this.state = 840;
					this.expression(0);
					this.state = 841;
					this.match(ComposeParser.RPAR);
					}
					}
					break;
				case 39:
					{
					this.state = 843;
					this.match(ComposeParser.TYPE_OF);
					this.state = 844;
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
				this.state = 847;
				this.match(ComposeParser.INC);
				this.state = 848;
				this.expression(27);
				}
				break;
			case 5:
				{
				localctx = new PreDecrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 849;
				this.match(ComposeParser.DEC);
				this.state = 850;
				this.expression(26);
				}
				break;
			case 6:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 851;
				this.match(ComposeParser.PLUS);
				this.state = 852;
				this.expression(25);
				}
				break;
			case 7:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 853;
				this.match(ComposeParser.MINUS);
				this.state = 854;
				this.expression(24);
				}
				break;
			case 8:
				{
				localctx = new UnaryBitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 855;
				this.match(ComposeParser.TILDE);
				this.state = 856;
				this.expression(23);
				}
				break;
			case 9:
				{
				localctx = new UnaryNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 857;
				this.match(ComposeParser.NOT);
				this.state = 858;
				this.expression(22);
				}
				break;
			case 10:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 859;
				this.match(ComposeParser.THIS);
				}
				break;
			case 11:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 860;
				this.identifier();
				}
				break;
			case 12:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 861;
				this.match(ComposeParser.SUPER);
				this.state = 866;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 95, this._ctx) ) {
				case 1:
					{
					this.state = 862;
					this.match(ComposeParser.LT);
					this.state = 863;
					this.identifier();
					this.state = 864;
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
				this.state = 868;
				this.literal_expression();
				}
				break;
			case 14:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 869;
				this.match(ComposeParser.LPAR);
				this.state = 870;
				this.expression(0);
				this.state = 871;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 15:
				{
				localctx = new PreCastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 873;
				this.match(ComposeParser.LT);
				this.state = 874;
				this.value_type(0);
				this.state = 875;
				this.match(ComposeParser.GT);
				this.state = 876;
				this.expression(3);
				}
				break;
			case 16:
				{
				localctx = new AssignExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 878;
				this.identifier();
				this.state = 879;
				this.assign_op();
				this.state = 880;
				this.expression(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 948;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 98, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 946;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 97, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 884;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 885;
						_la = this._input.LA(1);
						if(!(((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 11) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 886;
						(localctx as MultiplyExpressionContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 887;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 888;
						_la = this._input.LA(1);
						if(!(_la===71 || _la===72)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 889;
						(localctx as AddExpressionContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 890;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 891;
						_la = this._input.LA(1);
						if(!(((((_la - 81)) & ~0x1F) === 0 && ((1 << (_la - 81)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 892;
						(localctx as BitShiftExpressionContext)._right = this.expression(20);
						}
						break;
					case 4:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 893;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 894;
						_la = this._input.LA(1);
						if(!(((((_la - 53)) & ~0x1F) === 0 && ((1 << (_la - 53)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 895;
						(localctx as CompareExpressionContext)._right = this.expression(19);
						}
						break;
					case 5:
						{
						localctx = new InstanceofExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InstanceofExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 896;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 897;
						this.match(ComposeParser.INSTANCE_OF);
						this.state = 898;
						(localctx as InstanceofExpressionContext)._right = this.expression(18);
						}
						break;
					case 6:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 899;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 900;
						this.match(ComposeParser.IN);
						this.state = 901;
						(localctx as InExpressionContext)._right = this.expression(17);
						}
						break;
					case 7:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 902;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 903;
						_la = this._input.LA(1);
						if(!(_la===57 || _la===58)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 904;
						(localctx as EqualsExpressionContext)._right = this.expression(16);
						}
						break;
					case 8:
						{
						localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 905;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 906;
						this.match(ComposeParser.AMP);
						this.state = 907;
						(localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;
					case 9:
						{
						localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 908;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 909;
						this.match(ComposeParser.CARET);
						this.state = 910;
						(localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;
					case 10:
						{
						localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 911;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 912;
						this.match(ComposeParser.PIPE);
						this.state = 913;
						(localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;
					case 11:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 914;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 915;
						this.match(ComposeParser.AND);
						this.state = 916;
						(localctx as AndExpressionContext)._right = this.expression(12);
						}
						break;
					case 12:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 917;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 918;
						this.match(ComposeParser.OR);
						this.state = 919;
						(localctx as OrExpressionContext)._right = this.expression(11);
						}
						break;
					case 13:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._condition = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 920;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 921;
						this.match(ComposeParser.QUESTION);
						this.state = 922;
						(localctx as TernaryExpressionContext)._if_true = this.expression(0);
						this.state = 923;
						this.match(ComposeParser.COLON);
						this.state = 924;
						(localctx as TernaryExpressionContext)._if_false = this.expression(10);
						}
						break;
					case 14:
						{
						localctx = new ItemExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ItemExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 926;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 927;
						this.match(ComposeParser.LBRAK);
						this.state = 928;
						(localctx as ItemExpressionContext)._item = this.expression(0);
						this.state = 929;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 15:
						{
						localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 931;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 932;
						this.match(ComposeParser.DOT);
						this.state = 933;
						(localctx as MemberExpressionContext)._member = this.identifier();
						}
						break;
					case 16:
						{
						localctx = new ChildCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 934;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 935;
						this.match(ComposeParser.DOT);
						this.state = 936;
						this.function_call();
						}
						break;
					case 17:
						{
						localctx = new PostIncrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 937;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						 this.willNotContainLineTerminator()
						this.state = 939;
						this.match(ComposeParser.INC);
						}
						break;
					case 18:
						{
						localctx = new PostDecrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 940;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						 this.willNotContainLineTerminator()
						this.state = 942;
						this.match(ComposeParser.DEC);
						}
						break;
					case 19:
						{
						localctx = new CastAsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 943;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 944;
						this.match(ComposeParser.AS);
						this.state = 945;
						this.value_type(0);
						}
						break;
					}
					}
				}
				this.state = 950;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 98, this._ctx);
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
		this.enterRule(localctx, 136, ComposeParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 951;
			localctx._name = this.identifier();
			this.state = 963;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===54) {
				{
				this.state = 952;
				this.match(ComposeParser.LT);
				this.state = 953;
				this.value_type_or_null();
				this.state = 958;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 954;
					this.match(ComposeParser.COMMA);
					this.state = 955;
					this.value_type_or_null();
					}
					}
					this.state = 960;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 961;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 965;
			this.match(ComposeParser.LPAR);
			this.state = 974;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 966;
				this.expression(0);
				this.state = 971;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 967;
					this.match(ComposeParser.COMMA);
					this.state = 968;
					this.expression(0);
					}
					}
					this.state = 973;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 976;
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
		this.enterRule(localctx, 138, ComposeParser.RULE_literal_expression);
		try {
			this.state = 987;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 978;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 98:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 979;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 96:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 980;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 97:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 981;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 99:
				localctx = new CharLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 982;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 100:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 983;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 48:
				localctx = new ListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 984;
				this.list_literal();
				}
				break;
			case 54:
				localctx = new SetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 985;
				this.set_literal();
				}
				break;
			case 50:
				localctx = new MapLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 986;
				this.map_literal();
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
	public list_literal(): List_literalContext {
		let localctx: List_literalContext = new List_literalContext(this, this._ctx, this.state);
		this.enterRule(localctx, 140, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 989;
			this.match(ComposeParser.LBRAK);
			this.state = 998;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 990;
				localctx._exp = this.expression(0);
				this.state = 995;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 991;
					this.match(ComposeParser.COMMA);
					this.state = 992;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 997;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1000;
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
		this.enterRule(localctx, 142, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1002;
			this.match(ComposeParser.LT);
			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || _la===26 || ((((_la - 37)) & ~0x1F) === 0 && ((1 << (_la - 37)) & 4336135) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 4160750095) !== 0) || ((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 12810721) !== 0) || _la===582) {
				{
				this.state = 1003;
				localctx._exp = this.expression(0);
				this.state = 1008;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 1004;
					this.match(ComposeParser.COMMA);
					this.state = 1005;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 1010;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1013;
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
		this.enterRule(localctx, 144, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1015;
			this.match(ComposeParser.LCURL);
			this.state = 1024;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===1 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 400335) !== 0) || _la===582) {
				{
				this.state = 1016;
				localctx._entry = this.map_entry();
				this.state = 1021;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===65) {
					{
					{
					this.state = 1017;
					this.match(ComposeParser.COMMA);
					this.state = 1018;
					localctx._entry = this.map_entry();
					}
					}
					this.state = 1023;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1026;
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
		this.enterRule(localctx, 146, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1028;
			this.identifier();
			this.state = 1029;
			this.match(ComposeParser.COLON);
			this.state = 1030;
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
		this.enterRule(localctx, 148, ComposeParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1035;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1032;
					this.expression(0);
					}
					}
				}
				this.state = 1037;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 110, this._ctx);
			}
			this.state = 1038;
			this.opcode();
			this.state = 1042;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===96) {
				{
				{
				this.state = 1039;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				}
				this.state = 1044;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1045;
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
		this.enterRule(localctx, 150, ComposeParser.RULE_opcode);
		try {
			this.state = 1050;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 106:
			case 107:
			case 108:
			case 109:
			case 112:
			case 113:
			case 114:
			case 115:
			case 117:
			case 118:
			case 123:
			case 124:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1047;
				this.plain_opcode();
				}
				break;
			case 110:
			case 111:
			case 116:
			case 579:
			case 580:
			case 581:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1048;
				this.keyword_opcode();
				}
				break;
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 130:
			case 131:
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
			case 325:
			case 326:
			case 327:
			case 328:
			case 329:
			case 330:
			case 331:
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1049;
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
		this.enterRule(localctx, 152, ComposeParser.RULE_plain_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1052;
			_la = this._input.LA(1);
			if(!(_la===1 || ((((_la - 106)) & ~0x1F) === 0 && ((1 << (_la - 106)) & 400335) !== 0))) {
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
		this.enterRule(localctx, 154, ComposeParser.RULE_keyword_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1054;
			_la = this._input.LA(1);
			if(!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 67) !== 0) || ((((_la - 579)) & ~0x1F) === 0 && ((1 << (_la - 579)) & 7) !== 0))) {
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
		this.enterRule(localctx, 156, ComposeParser.RULE_composite_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1056;
			_la = this._input.LA(1);
			if(!(((((_la - 125)) & ~0x1F) === 0 && ((1 << (_la - 125)) & 4294967295) !== 0) || ((((_la - 157)) & ~0x1F) === 0 && ((1 << (_la - 157)) & 4294967295) !== 0) || ((((_la - 189)) & ~0x1F) === 0 && ((1 << (_la - 189)) & 4294967295) !== 0) || ((((_la - 221)) & ~0x1F) === 0 && ((1 << (_la - 221)) & 4294967295) !== 0) || ((((_la - 253)) & ~0x1F) === 0 && ((1 << (_la - 253)) & 4294967295) !== 0) || ((((_la - 285)) & ~0x1F) === 0 && ((1 << (_la - 285)) & 127) !== 0) || ((((_la - 325)) & ~0x1F) === 0 && ((1 << (_la - 325)) & 4294967295) !== 0) || ((((_la - 357)) & ~0x1F) === 0 && ((1 << (_la - 357)) & 4294967295) !== 0) || ((((_la - 389)) & ~0x1F) === 0 && ((1 << (_la - 389)) & 4294967295) !== 0) || ((((_la - 421)) & ~0x1F) === 0 && ((1 << (_la - 421)) & 4294967295) !== 0) || ((((_la - 453)) & ~0x1F) === 0 && ((1 << (_la - 453)) & 4294967295) !== 0) || ((((_la - 485)) & ~0x1F) === 0 && ((1 << (_la - 485)) & 4294967295) !== 0) || ((((_la - 517)) & ~0x1F) === 0 && ((1 << (_la - 517)) & 4294967295) !== 0) || ((((_la - 549)) & ~0x1F) === 0 && ((1 << (_la - 549)) & 1073741823) !== 0))) {
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
		case 30:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 32:
			return this.class_ref_sempred(localctx as Class_refContext, predIndex);
		case 35:
			return this.return_type_sempred(localctx as Return_typeContext, predIndex);
		case 42:
			return this.abstract_function_declaration_sempred(localctx as Abstract_function_declarationContext, predIndex);
		case 43:
			return this.concrete_function_declaration_sempred(localctx as Concrete_function_declarationContext, predIndex);
		case 44:
			return this.native_function_declaration_sempred(localctx as Native_function_declarationContext, predIndex);
		case 45:
			return this.function_prototype_sempred(localctx as Function_prototypeContext, predIndex);
		case 67:
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
	private class_ref_sempred(localctx: Class_refContext, predIndex: number): boolean {
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

	public static readonly _serializedATN: number[] = [4,1,582,1059,2,0,7,0,
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
	75,7,75,2,76,7,76,2,77,7,77,2,78,7,78,1,0,1,0,5,0,161,8,0,10,0,12,0,164,
	9,0,1,1,5,1,167,8,1,10,1,12,1,170,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,179,
	8,2,10,2,12,2,182,9,2,1,2,1,2,3,2,186,8,2,1,2,1,2,1,2,1,2,5,2,192,8,2,10,
	2,12,2,195,9,2,1,2,1,2,3,2,199,8,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,3,4,
	209,8,4,1,5,5,5,212,8,5,10,5,12,5,215,9,5,1,5,1,5,3,5,219,8,5,3,5,221,8,
	5,1,5,1,5,1,5,1,6,5,6,227,8,6,10,6,12,6,230,9,6,1,6,1,6,3,6,234,8,6,3,6,
	236,8,6,1,6,1,6,1,6,1,6,3,6,242,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,250,8,7,
	10,7,12,7,253,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,
	1,10,3,10,269,8,10,1,11,1,11,1,11,1,11,1,11,3,11,276,8,11,1,12,1,12,1,12,
	3,12,281,8,12,1,12,1,12,1,12,1,12,1,12,1,12,5,12,289,8,12,10,12,12,12,292,
	9,12,1,13,1,13,1,13,3,13,297,8,13,1,14,1,14,1,14,1,14,3,14,303,8,14,1,15,
	1,15,1,16,1,16,1,17,1,17,3,17,311,8,17,1,18,1,18,1,18,1,18,3,18,317,8,18,
	1,19,1,19,3,19,321,8,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,24,1,
	24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,29,3,29,344,8,29,
	1,30,1,30,1,30,3,30,349,8,30,1,31,1,31,1,32,1,32,1,32,1,33,1,33,1,33,1,
	33,1,33,5,33,361,8,33,10,33,12,33,364,9,33,3,33,366,8,33,1,33,3,33,369,
	8,33,1,33,1,33,1,33,1,34,1,34,1,34,3,34,377,8,34,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,3,35,387,8,35,1,36,1,36,1,36,1,36,5,36,393,8,36,10,36,
	12,36,396,9,36,3,36,398,8,36,1,37,1,37,3,37,402,8,37,1,37,1,37,1,37,1,37,
	1,37,1,37,1,37,1,37,3,37,412,8,37,1,38,3,38,415,8,38,1,38,3,38,418,8,38,
	1,38,1,38,1,38,1,38,1,38,1,38,5,38,426,8,38,10,38,12,38,429,9,38,1,38,1,
	38,3,38,433,8,38,1,38,1,38,1,38,1,38,5,38,439,8,38,10,38,12,38,442,9,38,
	3,38,444,8,38,1,38,1,38,5,38,448,8,38,10,38,12,38,451,9,38,1,38,5,38,454,
	8,38,10,38,12,38,457,9,38,1,38,1,38,1,39,1,39,1,40,3,40,464,8,40,1,40,3,
	40,467,8,40,1,40,1,40,1,40,1,40,1,40,1,41,1,41,1,41,3,41,477,8,41,1,42,
	1,42,3,42,481,8,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,
	42,493,8,42,1,43,1,43,3,43,497,8,43,1,43,3,43,500,8,43,1,43,1,43,1,43,5,
	43,505,8,43,10,43,12,43,508,9,43,1,43,1,43,1,43,1,43,1,43,1,43,1,43,5,43,
	517,8,43,10,43,12,43,520,9,43,1,43,1,43,3,43,524,8,43,1,44,1,44,3,44,528,
	8,44,1,44,1,44,1,44,1,44,1,44,5,44,535,8,44,10,44,12,44,538,9,44,1,44,1,
	44,1,44,1,44,1,44,1,44,1,44,1,44,5,44,548,8,44,10,44,12,44,551,9,44,1,44,
	1,44,3,44,555,8,44,1,45,1,45,1,45,1,45,1,45,5,45,562,8,45,10,45,12,45,565,
	9,45,1,45,1,45,3,45,569,8,45,1,45,1,45,1,45,1,45,5,45,575,8,45,10,45,12,
	45,578,9,45,3,45,580,8,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,3,45,589,8,
	45,3,45,591,8,45,1,46,1,46,1,46,3,46,596,8,46,1,47,5,47,599,8,47,10,47,
	12,47,602,9,47,1,47,1,47,1,47,1,47,3,47,608,8,47,1,48,1,48,1,48,1,48,1,
	48,3,48,615,8,48,1,49,1,49,1,49,1,49,1,49,1,49,3,49,623,8,49,1,50,1,50,
	1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,3,50,637,8,50,1,51,1,
	51,1,51,1,51,1,52,1,52,1,52,5,52,646,8,52,10,52,12,52,649,9,52,1,52,1,52,
	5,52,653,8,52,10,52,12,52,656,9,52,1,52,3,52,659,8,52,1,52,3,52,662,8,52,
	1,53,1,53,1,53,1,53,1,53,1,53,1,53,5,53,671,8,53,10,53,12,53,674,9,53,1,
	53,1,53,1,53,5,53,679,8,53,10,53,12,53,682,9,53,1,53,1,53,1,54,1,54,1,54,
	1,54,1,54,1,54,5,54,692,8,54,10,54,12,54,695,9,54,1,54,1,54,1,55,1,55,1,
	55,5,55,702,8,55,10,55,12,55,705,9,55,1,55,1,55,1,56,1,56,1,56,1,57,1,57,
	1,57,1,57,1,57,1,57,5,57,718,8,57,10,57,12,57,721,9,57,3,57,723,8,57,1,
	57,1,57,1,57,1,57,5,57,729,8,57,10,57,12,57,732,9,57,3,57,734,8,57,1,57,
	1,57,1,57,1,57,5,57,740,8,57,10,57,12,57,743,9,57,3,57,745,8,57,1,57,1,
	57,1,57,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,1,58,5,58,
	762,8,58,10,58,12,58,765,9,58,1,58,1,58,5,58,769,8,58,10,58,12,58,772,9,
	58,1,59,1,59,1,59,5,59,777,8,59,10,59,12,59,780,9,59,1,59,3,59,783,8,59,
	1,60,1,60,1,60,3,60,788,8,60,1,60,1,60,1,61,1,61,1,61,1,61,5,61,796,8,61,
	10,61,12,61,799,9,61,1,62,1,62,1,62,1,62,3,62,805,8,62,1,62,1,62,3,62,809,
	8,62,1,63,1,63,1,63,3,63,814,8,63,1,63,1,63,1,63,1,63,1,64,1,64,1,65,1,
	65,1,65,1,65,1,65,1,65,1,65,1,66,1,66,3,66,831,8,66,1,66,1,66,1,67,1,67,
	1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,3,67,846,8,67,1,67,1,67,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
	1,67,1,67,3,67,867,8,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,
	67,1,67,1,67,1,67,1,67,3,67,883,8,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
	1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,
	1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,
	67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,1,67,5,67,947,8,67,
	10,67,12,67,950,9,67,1,68,1,68,1,68,1,68,1,68,5,68,957,8,68,10,68,12,68,
	960,9,68,1,68,1,68,3,68,964,8,68,1,68,1,68,1,68,1,68,5,68,970,8,68,10,68,
	12,68,973,9,68,3,68,975,8,68,1,68,1,68,1,69,1,69,1,69,1,69,1,69,1,69,1,
	69,1,69,1,69,3,69,988,8,69,1,70,1,70,1,70,1,70,5,70,994,8,70,10,70,12,70,
	997,9,70,3,70,999,8,70,1,70,1,70,1,71,1,71,1,71,1,71,5,71,1007,8,71,10,
	71,12,71,1010,9,71,3,71,1012,8,71,1,71,1,71,1,72,1,72,1,72,1,72,5,72,1020,
	8,72,10,72,12,72,1023,9,72,3,72,1025,8,72,1,72,1,72,1,73,1,73,1,73,1,73,
	1,74,5,74,1034,8,74,10,74,12,74,1037,9,74,1,74,1,74,5,74,1041,8,74,10,74,
	12,74,1044,9,74,1,74,1,74,1,75,1,75,1,75,3,75,1051,8,75,1,76,1,76,1,77,
	1,77,1,78,1,78,1,78,0,2,24,134,79,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
	28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,
	76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,
	118,120,122,124,126,128,130,132,134,136,138,140,142,144,146,148,150,152,
	154,156,0,11,1,0,21,23,1,0,24,25,1,0,84,95,2,0,73,74,76,76,1,0,71,72,1,
	0,81,83,1,0,53,56,1,0,57,58,5,0,1,1,106,109,112,115,117,118,123,124,3,0,
	110,111,116,116,579,581,2,0,125,291,325,578,1151,0,158,1,0,0,0,2,168,1,
	0,0,0,4,171,1,0,0,0,6,204,1,0,0,0,8,208,1,0,0,0,10,213,1,0,0,0,12,228,1,
	0,0,0,14,243,1,0,0,0,16,256,1,0,0,0,18,260,1,0,0,0,20,268,1,0,0,0,22,270,
	1,0,0,0,24,280,1,0,0,0,26,293,1,0,0,0,28,302,1,0,0,0,30,304,1,0,0,0,32,
	306,1,0,0,0,34,310,1,0,0,0,36,316,1,0,0,0,38,320,1,0,0,0,40,322,1,0,0,0,
	42,324,1,0,0,0,44,326,1,0,0,0,46,328,1,0,0,0,48,330,1,0,0,0,50,332,1,0,
	0,0,52,334,1,0,0,0,54,336,1,0,0,0,56,338,1,0,0,0,58,340,1,0,0,0,60,348,
	1,0,0,0,62,350,1,0,0,0,64,352,1,0,0,0,66,368,1,0,0,0,68,373,1,0,0,0,70,
	386,1,0,0,0,72,397,1,0,0,0,74,411,1,0,0,0,76,414,1,0,0,0,78,460,1,0,0,0,
	80,463,1,0,0,0,82,476,1,0,0,0,84,492,1,0,0,0,86,523,1,0,0,0,88,554,1,0,
	0,0,90,556,1,0,0,0,92,592,1,0,0,0,94,600,1,0,0,0,96,614,1,0,0,0,98,622,
	1,0,0,0,100,636,1,0,0,0,102,638,1,0,0,0,104,642,1,0,0,0,106,663,1,0,0,0,
	108,685,1,0,0,0,110,698,1,0,0,0,112,708,1,0,0,0,114,711,1,0,0,0,116,749,
	1,0,0,0,118,782,1,0,0,0,120,787,1,0,0,0,122,791,1,0,0,0,124,800,1,0,0,0,
	126,813,1,0,0,0,128,819,1,0,0,0,130,821,1,0,0,0,132,828,1,0,0,0,134,882,
	1,0,0,0,136,951,1,0,0,0,138,987,1,0,0,0,140,989,1,0,0,0,142,1002,1,0,0,
	0,144,1015,1,0,0,0,146,1028,1,0,0,0,148,1035,1,0,0,0,150,1050,1,0,0,0,152,
	1052,1,0,0,0,154,1054,1,0,0,0,156,1056,1,0,0,0,158,162,3,2,1,0,159,161,
	3,8,4,0,160,159,1,0,0,0,161,164,1,0,0,0,162,160,1,0,0,0,162,163,1,0,0,0,
	163,1,1,0,0,0,164,162,1,0,0,0,165,167,3,4,2,0,166,165,1,0,0,0,167,170,1,
	0,0,0,168,166,1,0,0,0,168,169,1,0,0,0,169,3,1,0,0,0,170,168,1,0,0,0,171,
	198,5,42,0,0,172,185,3,20,10,0,173,174,5,65,0,0,174,175,5,50,0,0,175,180,
	3,20,10,0,176,177,5,65,0,0,177,179,3,20,10,0,178,176,1,0,0,0,179,182,1,
	0,0,0,180,178,1,0,0,0,180,181,1,0,0,0,181,183,1,0,0,0,182,180,1,0,0,0,183,
	184,5,51,0,0,184,186,1,0,0,0,185,173,1,0,0,0,185,186,1,0,0,0,186,199,1,
	0,0,0,187,188,5,50,0,0,188,193,3,20,10,0,189,190,5,65,0,0,190,192,3,20,
	10,0,191,189,1,0,0,0,192,195,1,0,0,0,193,191,1,0,0,0,193,194,1,0,0,0,194,
	196,1,0,0,0,195,193,1,0,0,0,196,197,5,51,0,0,197,199,1,0,0,0,198,172,1,
	0,0,0,198,187,1,0,0,0,199,200,1,0,0,0,200,201,5,29,0,0,201,202,3,6,3,0,
	202,203,5,63,0,0,203,5,1,0,0,0,204,205,5,100,0,0,205,7,1,0,0,0,206,209,
	3,12,6,0,207,209,3,10,5,0,208,206,1,0,0,0,208,207,1,0,0,0,209,9,1,0,0,0,
	210,212,3,22,11,0,211,210,1,0,0,0,212,215,1,0,0,0,213,211,1,0,0,0,213,214,
	1,0,0,0,214,220,1,0,0,0,215,213,1,0,0,0,216,218,5,41,0,0,217,219,5,43,0,
	0,218,217,1,0,0,0,218,219,1,0,0,0,219,221,1,0,0,0,220,216,1,0,0,0,220,221,
	1,0,0,0,221,222,1,0,0,0,222,223,3,122,61,0,223,224,5,63,0,0,224,11,1,0,
	0,0,225,227,3,22,11,0,226,225,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,0,228,
	229,1,0,0,0,229,235,1,0,0,0,230,228,1,0,0,0,231,233,5,41,0,0,232,234,5,
	43,0,0,233,232,1,0,0,0,233,234,1,0,0,0,234,236,1,0,0,0,235,231,1,0,0,0,
	235,236,1,0,0,0,236,241,1,0,0,0,237,242,3,18,9,0,238,242,3,76,38,0,239,
	242,3,82,41,0,240,242,3,14,7,0,241,237,1,0,0,0,241,238,1,0,0,0,241,239,
	1,0,0,0,241,240,1,0,0,0,242,13,1,0,0,0,243,244,5,15,0,0,244,245,3,20,10,
	0,245,246,5,50,0,0,246,251,3,16,8,0,247,248,5,65,0,0,248,250,3,16,8,0,249,
	247,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,251,252,1,0,0,0,252,254,1,0,
	0,0,253,251,1,0,0,0,254,255,5,51,0,0,255,15,1,0,0,0,256,257,3,20,10,0,257,
	258,5,84,0,0,258,259,3,134,67,0,259,17,1,0,0,0,260,261,5,13,0,0,261,262,
	3,20,10,0,262,263,5,64,0,0,263,264,3,26,13,0,264,265,5,63,0,0,265,19,1,
	0,0,0,266,269,5,582,0,0,267,269,3,152,76,0,268,266,1,0,0,0,268,267,1,0,
	0,0,269,21,1,0,0,0,270,275,5,102,0,0,271,272,5,46,0,0,272,273,3,138,69,
	0,273,274,5,47,0,0,274,276,1,0,0,0,275,271,1,0,0,0,275,276,1,0,0,0,276,
	23,1,0,0,0,277,278,6,12,-1,0,278,281,3,28,14,0,279,281,3,62,31,0,280,277,
	1,0,0,0,280,279,1,0,0,0,281,290,1,0,0,0,282,283,10,2,0,0,283,284,5,48,0,
	0,284,289,5,49,0,0,285,286,10,1,0,0,286,287,5,54,0,0,287,289,5,53,0,0,288,
	282,1,0,0,0,288,285,1,0,0,0,289,292,1,0,0,0,290,288,1,0,0,0,290,291,1,0,
	0,0,291,25,1,0,0,0,292,290,1,0,0,0,293,296,3,24,12,0,294,295,5,80,0,0,295,
	297,5,101,0,0,296,294,1,0,0,0,296,297,1,0,0,0,297,27,1,0,0,0,298,303,3,
	32,16,0,299,303,3,34,17,0,300,303,3,52,26,0,301,303,3,30,15,0,302,298,1,
	0,0,0,302,299,1,0,0,0,302,300,1,0,0,0,302,301,1,0,0,0,303,29,1,0,0,0,304,
	305,5,11,0,0,305,31,1,0,0,0,306,307,5,10,0,0,307,33,1,0,0,0,308,311,3,36,
	18,0,309,311,3,38,19,0,310,308,1,0,0,0,310,309,1,0,0,0,311,35,1,0,0,0,312,
	317,3,40,20,0,313,317,3,42,21,0,314,317,3,44,22,0,315,317,3,46,23,0,316,
	312,1,0,0,0,316,313,1,0,0,0,316,314,1,0,0,0,316,315,1,0,0,0,317,37,1,0,
	0,0,318,321,3,48,24,0,319,321,3,50,25,0,320,318,1,0,0,0,320,319,1,0,0,0,
	321,39,1,0,0,0,322,323,5,2,0,0,323,41,1,0,0,0,324,325,5,3,0,0,325,43,1,
	0,0,0,326,327,5,4,0,0,327,45,1,0,0,0,328,329,5,5,0,0,329,47,1,0,0,0,330,
	331,5,6,0,0,331,49,1,0,0,0,332,333,5,7,0,0,333,51,1,0,0,0,334,335,5,9,0,
	0,335,53,1,0,0,0,336,337,5,12,0,0,337,55,1,0,0,0,338,339,3,60,30,0,339,
	57,1,0,0,0,340,343,3,56,28,0,341,342,5,80,0,0,342,344,5,101,0,0,343,341,
	1,0,0,0,343,344,1,0,0,0,344,59,1,0,0,0,345,346,4,30,2,0,346,349,5,582,0,
	0,347,349,3,152,76,0,348,345,1,0,0,0,348,347,1,0,0,0,349,61,1,0,0,0,350,
	351,3,64,32,0,351,63,1,0,0,0,352,353,4,32,3,0,353,354,5,582,0,0,354,65,
	1,0,0,0,355,369,3,56,28,0,356,365,5,46,0,0,357,362,3,74,37,0,358,359,5,
	65,0,0,359,361,3,74,37,0,360,358,1,0,0,0,361,364,1,0,0,0,362,360,1,0,0,
	0,362,363,1,0,0,0,363,366,1,0,0,0,364,362,1,0,0,0,365,357,1,0,0,0,365,366,
	1,0,0,0,366,367,1,0,0,0,367,369,5,47,0,0,368,355,1,0,0,0,368,356,1,0,0,
	0,369,370,1,0,0,0,370,371,5,52,0,0,371,372,3,72,36,0,372,67,1,0,0,0,373,
	376,3,66,33,0,374,375,5,80,0,0,375,377,5,101,0,0,376,374,1,0,0,0,376,377,
	1,0,0,0,377,69,1,0,0,0,378,387,3,26,13,0,379,387,3,58,29,0,380,381,4,35,
	4,1,381,387,3,68,34,0,382,383,5,46,0,0,383,384,3,68,34,0,384,385,5,47,0,
	0,385,387,1,0,0,0,386,378,1,0,0,0,386,379,1,0,0,0,386,380,1,0,0,0,386,382,
	1,0,0,0,387,71,1,0,0,0,388,398,3,54,27,0,389,394,3,70,35,0,390,391,5,65,
	0,0,391,393,3,70,35,0,392,390,1,0,0,0,393,396,1,0,0,0,394,392,1,0,0,0,394,
	395,1,0,0,0,395,398,1,0,0,0,396,394,1,0,0,0,397,388,1,0,0,0,397,389,1,0,
	0,0,398,73,1,0,0,0,399,412,3,58,29,0,400,402,5,66,0,0,401,400,1,0,0,0,401,
	402,1,0,0,0,402,403,1,0,0,0,403,404,3,20,10,0,404,405,5,64,0,0,405,406,
	3,26,13,0,406,412,1,0,0,0,407,408,3,20,10,0,408,409,5,64,0,0,409,410,3,
	68,34,0,410,412,1,0,0,0,411,399,1,0,0,0,411,401,1,0,0,0,411,407,1,0,0,0,
	412,75,1,0,0,0,413,415,3,78,39,0,414,413,1,0,0,0,414,415,1,0,0,0,415,417,
	1,0,0,0,416,418,5,19,0,0,417,416,1,0,0,0,417,418,1,0,0,0,418,419,1,0,0,
	0,419,420,5,14,0,0,420,432,3,64,32,0,421,422,5,46,0,0,422,427,3,60,30,0,
	423,424,5,65,0,0,424,426,3,60,30,0,425,423,1,0,0,0,426,429,1,0,0,0,427,
	425,1,0,0,0,427,428,1,0,0,0,428,430,1,0,0,0,429,427,1,0,0,0,430,431,5,47,
	0,0,431,433,1,0,0,0,432,421,1,0,0,0,432,433,1,0,0,0,433,443,1,0,0,0,434,
	435,5,16,0,0,435,440,3,64,32,0,436,437,5,65,0,0,437,439,3,64,32,0,438,436,
	1,0,0,0,439,442,1,0,0,0,440,438,1,0,0,0,440,441,1,0,0,0,441,444,1,0,0,0,
	442,440,1,0,0,0,443,434,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,449,
	5,50,0,0,446,448,3,80,40,0,447,446,1,0,0,0,448,451,1,0,0,0,449,447,1,0,
	0,0,449,450,1,0,0,0,450,455,1,0,0,0,451,449,1,0,0,0,452,454,3,82,41,0,453,
	452,1,0,0,0,454,457,1,0,0,0,455,453,1,0,0,0,455,456,1,0,0,0,456,458,1,0,
	0,0,457,455,1,0,0,0,458,459,5,51,0,0,459,77,1,0,0,0,460,461,7,0,0,0,461,
	79,1,0,0,0,462,464,3,78,39,0,463,462,1,0,0,0,463,464,1,0,0,0,464,466,1,
	0,0,0,465,467,5,18,0,0,466,465,1,0,0,0,466,467,1,0,0,0,467,468,1,0,0,0,
	468,469,3,20,10,0,469,470,5,64,0,0,470,471,3,26,13,0,471,472,5,63,0,0,472,
	81,1,0,0,0,473,477,3,84,42,0,474,477,3,86,43,0,475,477,3,88,44,0,476,473,
	1,0,0,0,476,474,1,0,0,0,476,475,1,0,0,0,477,83,1,0,0,0,478,480,4,42,5,1,
	479,481,3,78,39,0,480,479,1,0,0,0,480,481,1,0,0,0,481,482,1,0,0,0,482,483,
	5,19,0,0,483,484,3,90,45,0,484,485,5,63,0,0,485,493,1,0,0,0,486,487,4,42,
	6,1,487,488,5,19,0,0,488,489,5,17,0,0,489,490,3,90,45,0,490,491,5,63,0,
	0,491,493,1,0,0,0,492,478,1,0,0,0,492,486,1,0,0,0,493,85,1,0,0,0,494,496,
	4,43,7,1,495,497,3,78,39,0,496,495,1,0,0,0,496,497,1,0,0,0,497,499,1,0,
	0,0,498,500,5,18,0,0,499,498,1,0,0,0,499,500,1,0,0,0,500,501,1,0,0,0,501,
	502,3,90,45,0,502,506,5,50,0,0,503,505,3,94,47,0,504,503,1,0,0,0,505,508,
	1,0,0,0,506,504,1,0,0,0,506,507,1,0,0,0,507,509,1,0,0,0,508,506,1,0,0,0,
	509,510,5,51,0,0,510,524,1,0,0,0,511,512,4,43,8,1,512,513,5,17,0,0,513,
	514,3,90,45,0,514,518,5,50,0,0,515,517,3,94,47,0,516,515,1,0,0,0,517,520,
	1,0,0,0,518,516,1,0,0,0,518,519,1,0,0,0,519,521,1,0,0,0,520,518,1,0,0,0,
	521,522,5,51,0,0,522,524,1,0,0,0,523,494,1,0,0,0,523,511,1,0,0,0,524,87,
	1,0,0,0,525,527,4,44,9,1,526,528,3,78,39,0,527,526,1,0,0,0,527,528,1,0,
	0,0,528,529,1,0,0,0,529,530,5,18,0,0,530,531,5,20,0,0,531,532,3,90,45,0,
	532,536,5,50,0,0,533,535,3,148,74,0,534,533,1,0,0,0,535,538,1,0,0,0,536,
	534,1,0,0,0,536,537,1,0,0,0,537,539,1,0,0,0,538,536,1,0,0,0,539,540,5,51,
	0,0,540,555,1,0,0,0,541,542,4,44,10,1,542,543,5,20,0,0,543,544,5,17,0,0,
	544,545,3,90,45,0,545,549,5,50,0,0,546,548,3,148,74,0,547,546,1,0,0,0,548,
	551,1,0,0,0,549,547,1,0,0,0,549,550,1,0,0,0,550,552,1,0,0,0,551,549,1,0,
	0,0,552,553,5,51,0,0,553,555,1,0,0,0,554,525,1,0,0,0,554,541,1,0,0,0,555,
	89,1,0,0,0,556,568,3,20,10,0,557,558,5,54,0,0,558,563,3,92,46,0,559,560,
	5,65,0,0,560,562,3,92,46,0,561,559,1,0,0,0,562,565,1,0,0,0,563,561,1,0,
	0,0,563,564,1,0,0,0,564,566,1,0,0,0,565,563,1,0,0,0,566,567,5,53,0,0,567,
	569,1,0,0,0,568,557,1,0,0,0,568,569,1,0,0,0,569,570,1,0,0,0,570,579,5,46,
	0,0,571,576,3,74,37,0,572,573,5,65,0,0,573,575,3,74,37,0,574,572,1,0,0,
	0,575,578,1,0,0,0,576,574,1,0,0,0,576,577,1,0,0,0,577,580,1,0,0,0,578,576,
	1,0,0,0,579,571,1,0,0,0,579,580,1,0,0,0,580,581,1,0,0,0,581,590,5,47,0,
	0,582,583,4,45,11,1,583,584,5,64,0,0,584,591,3,72,36,0,585,588,4,45,12,
	1,586,587,5,64,0,0,587,589,3,72,36,0,588,586,1,0,0,0,588,589,1,0,0,0,589,
	591,1,0,0,0,590,582,1,0,0,0,590,585,1,0,0,0,591,91,1,0,0,0,592,595,3,64,
	32,0,593,594,5,16,0,0,594,596,3,24,12,0,595,593,1,0,0,0,595,596,1,0,0,0,
	596,93,1,0,0,0,597,599,3,22,11,0,598,597,1,0,0,0,599,602,1,0,0,0,600,598,
	1,0,0,0,600,601,1,0,0,0,601,607,1,0,0,0,602,600,1,0,0,0,603,604,3,96,48,
	0,604,605,5,63,0,0,605,608,1,0,0,0,606,608,3,98,49,0,607,603,1,0,0,0,607,
	606,1,0,0,0,608,95,1,0,0,0,609,615,3,122,61,0,610,615,3,126,63,0,611,615,
	3,130,65,0,612,615,3,100,50,0,613,615,3,120,60,0,614,609,1,0,0,0,614,610,
	1,0,0,0,614,611,1,0,0,0,614,612,1,0,0,0,614,613,1,0,0,0,615,97,1,0,0,0,
	616,623,3,116,58,0,617,623,3,114,57,0,618,623,3,104,52,0,619,623,3,102,
	51,0,620,623,3,112,56,0,621,623,3,132,66,0,622,616,1,0,0,0,622,617,1,0,
	0,0,622,618,1,0,0,0,622,619,1,0,0,0,622,620,1,0,0,0,622,621,1,0,0,0,623,
	99,1,0,0,0,624,625,3,134,67,0,625,626,6,50,-1,0,626,627,5,69,0,0,627,637,
	1,0,0,0,628,629,3,134,67,0,629,630,6,50,-1,0,630,631,5,70,0,0,631,637,1,
	0,0,0,632,633,5,69,0,0,633,637,3,134,67,0,634,635,5,70,0,0,635,637,3,134,
	67,0,636,624,1,0,0,0,636,628,1,0,0,0,636,632,1,0,0,0,636,634,1,0,0,0,637,
	101,1,0,0,0,638,639,5,581,0,0,639,640,3,134,67,0,640,641,5,63,0,0,641,103,
	1,0,0,0,642,643,5,579,0,0,643,647,5,50,0,0,644,646,3,94,47,0,645,644,1,
	0,0,0,646,649,1,0,0,0,647,645,1,0,0,0,647,648,1,0,0,0,648,650,1,0,0,0,649,
	647,1,0,0,0,650,654,5,51,0,0,651,653,3,106,53,0,652,651,1,0,0,0,653,656,
	1,0,0,0,654,652,1,0,0,0,654,655,1,0,0,0,655,658,1,0,0,0,656,654,1,0,0,0,
	657,659,3,108,54,0,658,657,1,0,0,0,658,659,1,0,0,0,659,661,1,0,0,0,660,
	662,3,110,55,0,661,660,1,0,0,0,661,662,1,0,0,0,662,105,1,0,0,0,663,664,
	5,580,0,0,664,665,5,46,0,0,665,666,3,20,10,0,666,667,5,64,0,0,667,672,3,
	24,12,0,668,669,5,80,0,0,669,671,3,24,12,0,670,668,1,0,0,0,671,674,1,0,
	0,0,672,670,1,0,0,0,672,673,1,0,0,0,673,675,1,0,0,0,674,672,1,0,0,0,675,
	676,5,47,0,0,676,680,5,50,0,0,677,679,3,94,47,0,678,677,1,0,0,0,679,682,
	1,0,0,0,680,678,1,0,0,0,680,681,1,0,0,0,681,683,1,0,0,0,682,680,1,0,0,0,
	683,684,5,51,0,0,684,107,1,0,0,0,685,686,5,580,0,0,686,687,5,46,0,0,687,
	688,5,66,0,0,688,689,5,47,0,0,689,693,5,50,0,0,690,692,3,94,47,0,691,690,
	1,0,0,0,692,695,1,0,0,0,693,691,1,0,0,0,693,694,1,0,0,0,694,696,1,0,0,0,
	695,693,1,0,0,0,696,697,5,51,0,0,697,109,1,0,0,0,698,699,5,36,0,0,699,703,
	5,50,0,0,700,702,3,94,47,0,701,700,1,0,0,0,702,705,1,0,0,0,703,701,1,0,
	0,0,703,704,1,0,0,0,704,706,1,0,0,0,705,703,1,0,0,0,706,707,5,51,0,0,707,
	111,1,0,0,0,708,709,5,35,0,0,709,710,5,63,0,0,710,113,1,0,0,0,711,712,5,
	32,0,0,712,722,5,46,0,0,713,714,5,25,0,0,714,719,3,124,62,0,715,716,5,65,
	0,0,716,718,3,124,62,0,717,715,1,0,0,0,718,721,1,0,0,0,719,717,1,0,0,0,
	719,720,1,0,0,0,720,723,1,0,0,0,721,719,1,0,0,0,722,713,1,0,0,0,722,723,
	1,0,0,0,723,724,1,0,0,0,724,733,5,63,0,0,725,730,3,134,67,0,726,727,5,65,
	0,0,727,729,3,134,67,0,728,726,1,0,0,0,729,732,1,0,0,0,730,728,1,0,0,0,
	730,731,1,0,0,0,731,734,1,0,0,0,732,730,1,0,0,0,733,725,1,0,0,0,733,734,
	1,0,0,0,734,735,1,0,0,0,735,744,5,63,0,0,736,741,3,96,48,0,737,738,5,65,
	0,0,738,740,3,96,48,0,739,737,1,0,0,0,740,743,1,0,0,0,741,739,1,0,0,0,741,
	742,1,0,0,0,742,745,1,0,0,0,743,741,1,0,0,0,744,736,1,0,0,0,744,745,1,0,
	0,0,745,746,1,0,0,0,746,747,5,47,0,0,747,748,3,118,59,0,748,115,1,0,0,0,
	749,750,5,110,0,0,750,751,5,46,0,0,751,752,3,134,67,0,752,753,5,47,0,0,
	753,763,3,118,59,0,754,755,5,111,0,0,755,756,5,110,0,0,756,757,5,46,0,0,
	757,758,3,134,67,0,758,759,5,47,0,0,759,760,3,118,59,0,760,762,1,0,0,0,
	761,754,1,0,0,0,762,765,1,0,0,0,763,761,1,0,0,0,763,764,1,0,0,0,764,770,
	1,0,0,0,765,763,1,0,0,0,766,767,5,111,0,0,767,769,3,118,59,0,768,766,1,
	0,0,0,769,772,1,0,0,0,770,768,1,0,0,0,770,771,1,0,0,0,771,117,1,0,0,0,772,
	770,1,0,0,0,773,783,3,94,47,0,774,778,5,50,0,0,775,777,3,94,47,0,776,775,
	1,0,0,0,777,780,1,0,0,0,778,776,1,0,0,0,778,779,1,0,0,0,779,781,1,0,0,0,
	780,778,1,0,0,0,781,783,5,51,0,0,782,773,1,0,0,0,782,774,1,0,0,0,783,119,
	1,0,0,0,784,785,3,134,67,0,785,786,5,67,0,0,786,788,1,0,0,0,787,784,1,0,
	0,0,787,788,1,0,0,0,788,789,1,0,0,0,789,790,3,136,68,0,790,121,1,0,0,0,
	791,792,7,1,0,0,792,797,3,124,62,0,793,794,5,65,0,0,794,796,3,124,62,0,
	795,793,1,0,0,0,796,799,1,0,0,0,797,795,1,0,0,0,797,798,1,0,0,0,798,123,
	1,0,0,0,799,797,1,0,0,0,800,804,3,20,10,0,801,802,5,64,0,0,802,805,3,26,
	13,0,803,805,3,68,34,0,804,801,1,0,0,0,804,803,1,0,0,0,804,805,1,0,0,0,
	805,808,1,0,0,0,806,807,5,84,0,0,807,809,3,134,67,0,808,806,1,0,0,0,808,
	809,1,0,0,0,809,125,1,0,0,0,810,811,3,134,67,0,811,812,5,67,0,0,812,814,
	1,0,0,0,813,810,1,0,0,0,813,814,1,0,0,0,814,815,1,0,0,0,815,816,3,20,10,
	0,816,817,3,128,64,0,817,818,3,134,67,0,818,127,1,0,0,0,819,820,7,2,0,0,
	820,129,1,0,0,0,821,822,3,134,67,0,822,823,5,46,0,0,823,824,3,134,67,0,
	824,825,5,47,0,0,825,826,3,128,64,0,826,827,3,134,67,0,827,131,1,0,0,0,
	828,830,5,116,0,0,829,831,3,134,67,0,830,829,1,0,0,0,830,831,1,0,0,0,831,
	832,1,0,0,0,832,833,5,63,0,0,833,133,1,0,0,0,834,835,6,67,-1,0,835,836,
	5,26,0,0,836,883,3,136,68,0,837,883,3,136,68,0,838,845,5,39,0,0,839,840,
	5,46,0,0,840,841,3,134,67,0,841,842,5,47,0,0,842,846,1,0,0,0,843,844,5,
	39,0,0,844,846,3,134,67,0,845,839,1,0,0,0,845,843,1,0,0,0,846,883,1,0,0,
	0,847,848,5,69,0,0,848,883,3,134,67,27,849,850,5,70,0,0,850,883,3,134,67,
	26,851,852,5,71,0,0,852,883,3,134,67,25,853,854,5,72,0,0,854,883,3,134,
	67,24,855,856,5,78,0,0,856,883,3,134,67,23,857,858,5,59,0,0,858,883,3,134,
	67,22,859,883,5,37,0,0,860,883,3,20,10,0,861,866,5,38,0,0,862,863,5,54,
	0,0,863,864,3,20,10,0,864,865,5,53,0,0,865,867,1,0,0,0,866,862,1,0,0,0,
	866,867,1,0,0,0,867,883,1,0,0,0,868,883,3,138,69,0,869,870,5,46,0,0,870,
	871,3,134,67,0,871,872,5,47,0,0,872,883,1,0,0,0,873,874,5,54,0,0,874,875,
	3,24,12,0,875,876,5,53,0,0,876,877,3,134,67,3,877,883,1,0,0,0,878,879,3,
	20,10,0,879,880,3,128,64,0,880,881,3,134,67,1,881,883,1,0,0,0,882,834,1,
	0,0,0,882,837,1,0,0,0,882,838,1,0,0,0,882,847,1,0,0,0,882,849,1,0,0,0,882,
	851,1,0,0,0,882,853,1,0,0,0,882,855,1,0,0,0,882,857,1,0,0,0,882,859,1,0,
	0,0,882,860,1,0,0,0,882,861,1,0,0,0,882,868,1,0,0,0,882,869,1,0,0,0,882,
	873,1,0,0,0,882,878,1,0,0,0,883,948,1,0,0,0,884,885,10,21,0,0,885,886,7,
	3,0,0,886,947,3,134,67,22,887,888,10,20,0,0,888,889,7,4,0,0,889,947,3,134,
	67,21,890,891,10,19,0,0,891,892,7,5,0,0,892,947,3,134,67,20,893,894,10,
	18,0,0,894,895,7,6,0,0,895,947,3,134,67,19,896,897,10,17,0,0,897,898,5,
	40,0,0,898,947,3,134,67,18,899,900,10,16,0,0,900,901,5,44,0,0,901,947,3,
	134,67,17,902,903,10,15,0,0,903,904,7,7,0,0,904,947,3,134,67,16,905,906,
	10,14,0,0,906,907,5,79,0,0,907,947,3,134,67,15,908,909,10,13,0,0,909,910,
	5,77,0,0,910,947,3,134,67,14,911,912,10,12,0,0,912,913,5,80,0,0,913,947,
	3,134,67,13,914,915,10,11,0,0,915,916,5,60,0,0,916,947,3,134,67,12,917,
	918,10,10,0,0,918,919,5,61,0,0,919,947,3,134,67,11,920,921,10,9,0,0,921,
	922,5,62,0,0,922,923,3,134,67,0,923,924,5,64,0,0,924,925,3,134,67,10,925,
	947,1,0,0,0,926,927,10,35,0,0,927,928,5,48,0,0,928,929,3,134,67,0,929,930,
	5,49,0,0,930,947,1,0,0,0,931,932,10,34,0,0,932,933,5,67,0,0,933,947,3,20,
	10,0,934,935,10,31,0,0,935,936,5,67,0,0,936,947,3,136,68,0,937,938,10,30,
	0,0,938,939,6,67,-1,0,939,947,5,69,0,0,940,941,10,29,0,0,941,942,6,67,-1,
	0,942,947,5,70,0,0,943,944,10,2,0,0,944,945,5,45,0,0,945,947,3,24,12,0,
	946,884,1,0,0,0,946,887,1,0,0,0,946,890,1,0,0,0,946,893,1,0,0,0,946,896,
	1,0,0,0,946,899,1,0,0,0,946,902,1,0,0,0,946,905,1,0,0,0,946,908,1,0,0,0,
	946,911,1,0,0,0,946,914,1,0,0,0,946,917,1,0,0,0,946,920,1,0,0,0,946,926,
	1,0,0,0,946,931,1,0,0,0,946,934,1,0,0,0,946,937,1,0,0,0,946,940,1,0,0,0,
	946,943,1,0,0,0,947,950,1,0,0,0,948,946,1,0,0,0,948,949,1,0,0,0,949,135,
	1,0,0,0,950,948,1,0,0,0,951,963,3,20,10,0,952,953,5,54,0,0,953,958,3,26,
	13,0,954,955,5,65,0,0,955,957,3,26,13,0,956,954,1,0,0,0,957,960,1,0,0,0,
	958,956,1,0,0,0,958,959,1,0,0,0,959,961,1,0,0,0,960,958,1,0,0,0,961,962,
	5,53,0,0,962,964,1,0,0,0,963,952,1,0,0,0,963,964,1,0,0,0,964,965,1,0,0,
	0,965,974,5,46,0,0,966,971,3,134,67,0,967,968,5,65,0,0,968,970,3,134,67,
	0,969,967,1,0,0,0,970,973,1,0,0,0,971,969,1,0,0,0,971,972,1,0,0,0,972,975,
	1,0,0,0,973,971,1,0,0,0,974,966,1,0,0,0,974,975,1,0,0,0,975,976,1,0,0,0,
	976,977,5,47,0,0,977,137,1,0,0,0,978,988,5,101,0,0,979,988,5,98,0,0,980,
	988,5,96,0,0,981,988,5,97,0,0,982,988,5,99,0,0,983,988,5,100,0,0,984,988,
	3,140,70,0,985,988,3,142,71,0,986,988,3,144,72,0,987,978,1,0,0,0,987,979,
	1,0,0,0,987,980,1,0,0,0,987,981,1,0,0,0,987,982,1,0,0,0,987,983,1,0,0,0,
	987,984,1,0,0,0,987,985,1,0,0,0,987,986,1,0,0,0,988,139,1,0,0,0,989,998,
	5,48,0,0,990,995,3,134,67,0,991,992,5,65,0,0,992,994,3,134,67,0,993,991,
	1,0,0,0,994,997,1,0,0,0,995,993,1,0,0,0,995,996,1,0,0,0,996,999,1,0,0,0,
	997,995,1,0,0,0,998,990,1,0,0,0,998,999,1,0,0,0,999,1000,1,0,0,0,1000,1001,
	5,49,0,0,1001,141,1,0,0,0,1002,1011,5,54,0,0,1003,1008,3,134,67,0,1004,
	1005,5,65,0,0,1005,1007,3,134,67,0,1006,1004,1,0,0,0,1007,1010,1,0,0,0,
	1008,1006,1,0,0,0,1008,1009,1,0,0,0,1009,1012,1,0,0,0,1010,1008,1,0,0,0,
	1011,1003,1,0,0,0,1011,1012,1,0,0,0,1012,1013,1,0,0,0,1013,1014,5,53,0,
	0,1014,143,1,0,0,0,1015,1024,5,50,0,0,1016,1021,3,146,73,0,1017,1018,5,
	65,0,0,1018,1020,3,146,73,0,1019,1017,1,0,0,0,1020,1023,1,0,0,0,1021,1019,
	1,0,0,0,1021,1022,1,0,0,0,1022,1025,1,0,0,0,1023,1021,1,0,0,0,1024,1016,
	1,0,0,0,1024,1025,1,0,0,0,1025,1026,1,0,0,0,1026,1027,5,51,0,0,1027,145,
	1,0,0,0,1028,1029,3,20,10,0,1029,1030,5,64,0,0,1030,1031,3,134,67,0,1031,
	147,1,0,0,0,1032,1034,3,134,67,0,1033,1032,1,0,0,0,1034,1037,1,0,0,0,1035,
	1033,1,0,0,0,1035,1036,1,0,0,0,1036,1038,1,0,0,0,1037,1035,1,0,0,0,1038,
	1042,3,150,75,0,1039,1041,5,96,0,0,1040,1039,1,0,0,0,1041,1044,1,0,0,0,
	1042,1040,1,0,0,0,1042,1043,1,0,0,0,1043,1045,1,0,0,0,1044,1042,1,0,0,0,
	1045,1046,5,63,0,0,1046,149,1,0,0,0,1047,1051,3,152,76,0,1048,1051,3,154,
	77,0,1049,1051,3,156,78,0,1050,1047,1,0,0,0,1050,1048,1,0,0,0,1050,1049,
	1,0,0,0,1051,151,1,0,0,0,1052,1053,7,8,0,0,1053,153,1,0,0,0,1054,1055,7,
	9,0,0,1055,155,1,0,0,0,1056,1057,7,10,0,0,1057,157,1,0,0,0,113,162,168,
	180,185,193,198,208,213,218,220,228,233,235,241,251,268,275,280,288,290,
	296,302,310,316,320,343,348,362,365,368,376,386,394,397,401,411,414,417,
	427,432,440,443,449,455,463,466,476,480,492,496,499,506,518,523,527,536,
	549,554,563,568,576,579,588,590,595,600,607,614,622,636,647,654,658,661,
	672,680,693,703,719,722,730,733,741,744,763,770,778,782,787,797,804,808,
	813,830,845,866,882,946,948,958,963,971,974,987,995,998,1008,1011,1021,
	1024,1035,1042,1050];

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
export class ClassTypeContext extends Value_typeContext {
	constructor(parser: ComposeParser, ctx: Value_typeContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public class_type(): Class_typeContext {
		return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterClassType) {
	 		listener.enterClassType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitClassType) {
	 		listener.exitClassType(this);
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
	public i32_type(): I32_typeContext {
		return this.getTypedRuleContext(I32_typeContext, 0) as I32_typeContext;
	}
	public i64_type(): I64_typeContext {
		return this.getTypedRuleContext(I64_typeContext, 0) as I64_typeContext;
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


export class Class_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public class_ref(): Class_refContext {
		return this.getTypedRuleContext(Class_refContext, 0) as Class_refContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_class_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterClass_type) {
	 		listener.enterClass_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitClass_type) {
	 		listener.exitClass_type(this);
		}
	}
}


export class Class_refContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_class_ref;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterClass_ref) {
	 		listener.enterClass_ref(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitClass_ref) {
	 		listener.exitClass_ref(this);
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
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
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
	public _id!: Class_refContext;
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
	public class_ref_list(): Class_refContext[] {
		return this.getTypedRuleContexts(Class_refContext) as Class_refContext[];
	}
	public class_ref(i: number): Class_refContext {
		return this.getTypedRuleContext(Class_refContext, i) as Class_refContext;
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
	public value_type_or_null(): Value_type_or_nullContext {
		return this.getTypedRuleContext(Value_type_or_nullContext, 0) as Value_type_or_nullContext;
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
	public class_ref(): Class_refContext {
		return this.getTypedRuleContext(Class_refContext, 0) as Class_refContext;
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
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public assign_op(): Assign_opContext {
		return this.getTypedRuleContext(Assign_opContext, 0) as Assign_opContext;
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
