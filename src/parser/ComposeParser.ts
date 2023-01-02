// Generated from ComposeParser.g4 by ANTLR 4.11.2-SNAPSHOT
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
} from 'antlr4';
import ComposeParserListener from "./ComposeParserListener.js";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

import BaseParser from './BaseParser';

export default class ComposeParser extends BaseParser {
	public static readonly I32 = 1;
	public static readonly I64 = 2;
	public static readonly ISIZE = 3;
	public static readonly U32 = 4;
	public static readonly U64 = 5;
	public static readonly USIZE = 6;
	public static readonly F32 = 7;
	public static readonly F64 = 8;
	public static readonly V128 = 9;
	public static readonly STRING = 10;
	public static readonly BOOLEAN = 11;
	public static readonly ANY = 12;
	public static readonly VOID = 13;
	public static readonly ATTRIBUTE = 14;
	public static readonly CLASS = 15;
	public static readonly ENUM = 16;
	public static readonly EXTENDS = 17;
	public static readonly FUNCTION = 18;
	public static readonly STATIC = 19;
	public static readonly ABSTRACT = 20;
	public static readonly NATIVE = 21;
	public static readonly PUBLIC = 22;
	public static readonly PROTECTED = 23;
	public static readonly PRIVATE = 24;
	public static readonly CONST = 25;
	public static readonly LET = 26;
	public static readonly NEW = 27;
	public static readonly GET = 28;
	public static readonly SET = 29;
	public static readonly FROM = 30;
	public static readonly SWITCH = 31;
	public static readonly CASE = 32;
	public static readonly FOR = 33;
	public static readonly DO = 34;
	public static readonly WHILE = 35;
	public static readonly BREAK = 36;
	public static readonly FINALLY = 37;
	public static readonly THIS = 38;
	public static readonly SUPER = 39;
	public static readonly TYPE_OF = 40;
	public static readonly INSTANCE_OF = 41;
	public static readonly SIZE_OF = 42;
	public static readonly ALIGN_OF = 43;
	public static readonly OFFSET_OF = 44;
	public static readonly EXPORT = 45;
	public static readonly IMPORT = 46;
	public static readonly DEFAULT = 47;
	public static readonly IN = 48;
	public static readonly AS = 49;
	public static readonly LPAR = 50;
	public static readonly RPAR = 51;
	public static readonly LBRAK = 52;
	public static readonly RBRAK = 53;
	public static readonly LCURL = 54;
	public static readonly RCURL = 55;
	public static readonly ARROW = 56;
	public static readonly GT = 57;
	public static readonly LT = 58;
	public static readonly LTE = 59;
	public static readonly GTE = 60;
	public static readonly EQUALS = 61;
	public static readonly NOT_EQUALS = 62;
	public static readonly NOT = 63;
	public static readonly AND = 64;
	public static readonly OR = 65;
	public static readonly QUESTION = 66;
	public static readonly SEMI = 67;
	public static readonly COLON = 68;
	public static readonly COMMA = 69;
	public static readonly ETC = 70;
	public static readonly DOT = 71;
	public static readonly AT = 72;
	public static readonly INC = 73;
	public static readonly DEC = 74;
	public static readonly PLUS = 75;
	public static readonly MINUS = 76;
	public static readonly STAR = 77;
	public static readonly SLASH = 78;
	public static readonly BSLASH = 79;
	public static readonly PERCENT = 80;
	public static readonly CARET = 81;
	public static readonly TILDE = 82;
	public static readonly AMP = 83;
	public static readonly PIPE = 84;
	public static readonly LSHIFT = 85;
	public static readonly RSHIFT = 86;
	public static readonly URSHIFT = 87;
	public static readonly ASSIGN = 88;
	public static readonly ADD_ASSIGN = 89;
	public static readonly SUB_ASSIGN = 90;
	public static readonly MUL_ASSIGN = 91;
	public static readonly DIV_ASSIGN = 92;
	public static readonly AND_ASSIGN = 93;
	public static readonly OR_ASSIGN = 94;
	public static readonly XOR_ASSIGN = 95;
	public static readonly MOD_ASSIGN = 96;
	public static readonly LSHIFT_ASSIGN = 97;
	public static readonly RSHIFT_ASSIGN = 98;
	public static readonly URSHIFT_ASSIGN = 99;
	public static readonly INTEGER_LITERAL = 100;
	public static readonly DECIMAL_LITERAL = 101;
	public static readonly BOOLEAN_LITERAL = 102;
	public static readonly CHAR_LITERAL = 103;
	public static readonly STRING_LITERAL = 104;
	public static readonly NULL_LITERAL = 105;
	public static readonly ANNOTATION = 106;
	public static readonly WS = 107;
	public static readonly COMMENT = 108;
	public static readonly LINE_COMMENT = 109;
	public static readonly UNREACHABLE = 110;
	public static readonly NOP = 111;
	public static readonly BLOCK = 112;
	public static readonly LOOP = 113;
	public static readonly IF = 114;
	public static readonly ELSE = 115;
	public static readonly TRY = 116;
	public static readonly CATCH = 117;
	public static readonly THROW = 118;
	public static readonly RETHROW = 119;
	public static readonly END = 120;
	public static readonly BR = 121;
	public static readonly BR_IF = 122;
	public static readonly BR_TABLE = 123;
	public static readonly RETURN = 124;
	public static readonly CALL = 125;
	public static readonly CALL_INDIRECT = 126;
	public static readonly DROP = 127;
	public static readonly SELECT_TYPE = 128;
	public static readonly SELECT = 129;
	public static readonly LOCAL_GET = 130;
	public static readonly LOCAL_SET = 131;
	public static readonly LOCAL_TEE = 132;
	public static readonly GLOBAL_GET = 133;
	public static readonly GLOBAL_SET = 134;
	public static readonly I32_LOAD = 135;
	public static readonly I64_LOAD = 136;
	public static readonly F32_LOAD = 137;
	public static readonly F64_LOAD = 138;
	public static readonly I32_LOAD8_S = 139;
	public static readonly I32_LOAD8_U = 140;
	public static readonly I32_LOAD16_S = 141;
	public static readonly I32_LOAD16_U = 142;
	public static readonly I64_LOAD8_S = 143;
	public static readonly I64_LOAD8_U = 144;
	public static readonly I64_LOAD16_S = 145;
	public static readonly I64_LOAD16_U = 146;
	public static readonly I64_LOAD32_S = 147;
	public static readonly I64_LOAD32_U = 148;
	public static readonly I32_STORE = 149;
	public static readonly I64_STORE = 150;
	public static readonly F32_STORE = 151;
	public static readonly F64_STORE = 152;
	public static readonly I32_STORE8 = 153;
	public static readonly I32_STORE16 = 154;
	public static readonly I64_STORE8 = 155;
	public static readonly I64_STORE16 = 156;
	public static readonly I64_STORE32 = 157;
	public static readonly MEMORY_SIZE = 158;
	public static readonly MEMORY_GROW = 159;
	public static readonly I32_CONST = 160;
	public static readonly I64_CONST = 161;
	public static readonly F32_CONST = 162;
	public static readonly F64_CONST = 163;
	public static readonly I32_EQZ = 164;
	public static readonly I32_EQ = 165;
	public static readonly I32_NE = 166;
	public static readonly I32_LT_S = 167;
	public static readonly I32_LT_U = 168;
	public static readonly I32_GT_S = 169;
	public static readonly I32_GT_U = 170;
	public static readonly I32_LE_S = 171;
	public static readonly I32_LE_U = 172;
	public static readonly I32_GE_S = 173;
	public static readonly I32_GE_U = 174;
	public static readonly I64_EQZ = 175;
	public static readonly I64_EQ = 176;
	public static readonly I64_NE = 177;
	public static readonly I64_LT_S = 178;
	public static readonly I64_LT_U = 179;
	public static readonly I64_GT_S = 180;
	public static readonly I64_GT_U = 181;
	public static readonly I64_LE_S = 182;
	public static readonly I64_LE_U = 183;
	public static readonly I64_GE_S = 184;
	public static readonly I64_GE_U = 185;
	public static readonly F32_EQ = 186;
	public static readonly F32_NE = 187;
	public static readonly F32_LT = 188;
	public static readonly F32_GT = 189;
	public static readonly F32_LE = 190;
	public static readonly F32_GE = 191;
	public static readonly F64_EQ = 192;
	public static readonly F64_NE = 193;
	public static readonly F64_LT = 194;
	public static readonly F64_GT = 195;
	public static readonly F64_LE = 196;
	public static readonly F64_GE = 197;
	public static readonly I32_CLZ = 198;
	public static readonly I32_CTZ = 199;
	public static readonly I32_POPCNT = 200;
	public static readonly I32_ADD = 201;
	public static readonly I32_SUB = 202;
	public static readonly I32_MUL = 203;
	public static readonly I32_DIV_S = 204;
	public static readonly I32_DIV_U = 205;
	public static readonly I32_REM_S = 206;
	public static readonly I32_REM_U = 207;
	public static readonly I32_AND = 208;
	public static readonly I32_OR = 209;
	public static readonly I32_XOR = 210;
	public static readonly I32_SHL = 211;
	public static readonly I32_SHR_S = 212;
	public static readonly I32_SHR_U = 213;
	public static readonly I32_ROTL = 214;
	public static readonly I32_ROTR = 215;
	public static readonly I64_CLZ = 216;
	public static readonly I64_CTZ = 217;
	public static readonly I64_POPCNT = 218;
	public static readonly I64_ADD = 219;
	public static readonly I64_SUB = 220;
	public static readonly I64_MUL = 221;
	public static readonly I64_DIV_S = 222;
	public static readonly I64_DIV_U = 223;
	public static readonly I64_REM_S = 224;
	public static readonly I64_REM_U = 225;
	public static readonly I64_AND = 226;
	public static readonly I64_OR = 227;
	public static readonly I64_XOR = 228;
	public static readonly I64_SHL = 229;
	public static readonly I64_SHR_S = 230;
	public static readonly I64_SHR_U = 231;
	public static readonly I64_ROTL = 232;
	public static readonly I64_ROTR = 233;
	public static readonly F32_ABS = 234;
	public static readonly F32_NEG = 235;
	public static readonly F32_CEIL = 236;
	public static readonly F32_FLOOR = 237;
	public static readonly F32_TRUNC = 238;
	public static readonly F32_NEAREST = 239;
	public static readonly F32_SQRT = 240;
	public static readonly F32_ADD = 241;
	public static readonly F32_SUB = 242;
	public static readonly F32_MUL = 243;
	public static readonly F32_DIV = 244;
	public static readonly F32_MIN = 245;
	public static readonly F32_MAX = 246;
	public static readonly F32_COPYSIGN = 247;
	public static readonly F64_ABS = 248;
	public static readonly F64_NEG = 249;
	public static readonly F64_CEIL = 250;
	public static readonly F64_FLOOR = 251;
	public static readonly F64_TRUNC = 252;
	public static readonly F64_NEAREST = 253;
	public static readonly F64_SQRT = 254;
	public static readonly F64_ADD = 255;
	public static readonly F64_SUB = 256;
	public static readonly F64_MUL = 257;
	public static readonly F64_DIV = 258;
	public static readonly F64_MIN = 259;
	public static readonly F64_MAX = 260;
	public static readonly F64_COPYSIGN = 261;
	public static readonly I32_WRAP_I64 = 262;
	public static readonly I32_TRUNC_F32_S = 263;
	public static readonly I32_TRUNC_F32_U = 264;
	public static readonly I32_TRUNC_F64_S = 265;
	public static readonly I32_TRUNC_F64_U = 266;
	public static readonly I64_EXTEND_I32_S = 267;
	public static readonly I64_EXTEND_I32_U = 268;
	public static readonly I64_TRUNC_F32_S = 269;
	public static readonly I64_TRUNC_F32_U = 270;
	public static readonly I64_TRUNC_F64_S = 271;
	public static readonly I64_TRUNC_F64_U = 272;
	public static readonly F32_CONVERT_I32_S = 273;
	public static readonly F32_CONVERT_I32_U = 274;
	public static readonly F32_CONVERT_I64_S = 275;
	public static readonly F32_CONVERT_I64_U = 276;
	public static readonly F32_DEMOTE_F64 = 277;
	public static readonly F64_CONVERT_I32_S = 278;
	public static readonly F64_CONVERT_I32_U = 279;
	public static readonly F64_CONVERT_I64_S = 280;
	public static readonly F64_CONVERT_I64_U = 281;
	public static readonly F64_PROMOTE_F32 = 282;
	public static readonly I32_REINTERPRET_F32 = 283;
	public static readonly I64_REINTERPRET_F64 = 284;
	public static readonly F32_REINTERPRET_I32 = 285;
	public static readonly F64_REINTERPRET_I64 = 286;
	public static readonly I32_EXTEND8_S = 287;
	public static readonly I32_EXTEND16_S = 288;
	public static readonly I64_EXTEND8_S = 289;
	public static readonly I64_EXTEND16_S = 290;
	public static readonly I64_EXTEND32_S = 291;
	public static readonly I32_TRUNC_SAT_F32_S = 292;
	public static readonly I32_TRUNC_SAT_F32_U = 293;
	public static readonly I32_TRUNC_SAT_F64_S = 294;
	public static readonly I32_TRUNC_SAT_F64_U = 295;
	public static readonly I64_TRUNC_SAT_F32_S = 296;
	public static readonly I64_TRUNC_SAT_F32_U = 297;
	public static readonly I64_TRUNC_SAT_F64_S = 298;
	public static readonly I64_TRUNC_SAT_F64_U = 299;
	public static readonly MEMORY_INIT = 300;
	public static readonly DATA_DROP = 301;
	public static readonly MEMORY_COPY = 302;
	public static readonly MEMORY_FILL = 303;
	public static readonly TABLE_INIT = 304;
	public static readonly ELEM_DROP = 305;
	public static readonly TABLE_COPY = 306;
	public static readonly TABLE_GET = 307;
	public static readonly TABLE_SET = 308;
	public static readonly TABLE_GROW = 309;
	public static readonly TABLE_SIZE = 310;
	public static readonly TABLE_FILL = 311;
	public static readonly REF_NULL = 312;
	public static readonly REF_IS_NULL = 313;
	public static readonly REF_FUNC = 314;
	public static readonly V128_LOAD = 315;
	public static readonly V128_LOAD8X8_S = 316;
	public static readonly V128_LOAD8X8_U = 317;
	public static readonly V128_LOAD16X4_S = 318;
	public static readonly V128_LOAD16X4_U = 319;
	public static readonly V128_LOAD32X2_S = 320;
	public static readonly V128_LOAD32X2_U = 321;
	public static readonly V128_LOAD8_SPLAT = 322;
	public static readonly V128_LOAD16_SPLAT = 323;
	public static readonly V128_LOAD32_SPLAT = 324;
	public static readonly V128_LOAD64_SPLAT = 325;
	public static readonly V128_STORE = 326;
	public static readonly V128_CONST = 327;
	public static readonly I8X16_SHUFFLE = 328;
	public static readonly I8X16_SWIZZLE = 329;
	public static readonly I8X16_SPLAT = 330;
	public static readonly I16X8_SPLAT = 331;
	public static readonly I32X4_SPLAT = 332;
	public static readonly I64X2_SPLAT = 333;
	public static readonly F32X4_SPLAT = 334;
	public static readonly F64X2_SPLAT = 335;
	public static readonly I8X16_EXTRACT_LANE_S = 336;
	public static readonly I8X16_EXTRACT_LANE_U = 337;
	public static readonly I8X16_REPLACE_LANE = 338;
	public static readonly I16X8_EXTRACT_LANE_S = 339;
	public static readonly I16X8_EXTRACT_LANE_U = 340;
	public static readonly I16X8_REPLACE_LANE = 341;
	public static readonly I32X4_EXTRACT_LANE = 342;
	public static readonly I32X4_REPLACE_LANE = 343;
	public static readonly I64X2_EXTRACT_LANE = 344;
	public static readonly I64X2_REPLACE_LANE = 345;
	public static readonly F32X4_EXTRACT_LANE = 346;
	public static readonly F32X4_REPLACE_LANE = 347;
	public static readonly F64X2_EXTRACT_LANE = 348;
	public static readonly F64X2_REPLACE_LANE = 349;
	public static readonly I8X16_EQ = 350;
	public static readonly I8X16_NE = 351;
	public static readonly I8X16_LT_S = 352;
	public static readonly I8X16_LT_U = 353;
	public static readonly I8X16_GT_S = 354;
	public static readonly I8X16_GT_U = 355;
	public static readonly I8X16_LE_S = 356;
	public static readonly I8X16_LE_U = 357;
	public static readonly I8X16_GE_S = 358;
	public static readonly I8X16_GE_U = 359;
	public static readonly I16X8_EQ = 360;
	public static readonly I16X8_NE = 361;
	public static readonly I16X8_LT_S = 362;
	public static readonly I16X8_LT_U = 363;
	public static readonly I16X8_GT_S = 364;
	public static readonly I16X8_GT_U = 365;
	public static readonly I16X8_LE_S = 366;
	public static readonly I16X8_LE_U = 367;
	public static readonly I16X8_GE_S = 368;
	public static readonly I16X8_GE_U = 369;
	public static readonly I32X4_EQ = 370;
	public static readonly I32X4_NE = 371;
	public static readonly I32X4_LT_S = 372;
	public static readonly I32X4_LT_U = 373;
	public static readonly I32X4_GT_S = 374;
	public static readonly I32X4_GT_U = 375;
	public static readonly I32X4_LE_S = 376;
	public static readonly I32X4_LE_U = 377;
	public static readonly I32X4_GE_S = 378;
	public static readonly I32X4_GE_U = 379;
	public static readonly F32X4_EQ = 380;
	public static readonly F32X4_NE = 381;
	public static readonly F32X4_LT = 382;
	public static readonly F32X4_GT = 383;
	public static readonly F32X4_LE = 384;
	public static readonly F32X4_GE = 385;
	public static readonly F64X2_EQ = 386;
	public static readonly F64X2_NE = 387;
	public static readonly F64X2_LT = 388;
	public static readonly F64X2_GT = 389;
	public static readonly F64X2_LE = 390;
	public static readonly F64X2_GE = 391;
	public static readonly V128_NOT = 392;
	public static readonly V128_AND = 393;
	public static readonly V128_ANDNOT = 394;
	public static readonly V128_OR = 395;
	public static readonly V128_XOR = 396;
	public static readonly V128_BITSELECT = 397;
	public static readonly V128_ANY_TRUE = 398;
	public static readonly V128_LOAD8_LANE = 399;
	public static readonly V128_LOAD16_LANE = 400;
	public static readonly V128_LOAD32_LANE = 401;
	public static readonly V128_LOAD64_LANE = 402;
	public static readonly V128_STORE8_LANE = 403;
	public static readonly V128_STORE16_LANE = 404;
	public static readonly V128_STORE32_LANE = 405;
	public static readonly V128_STORE64_LANE = 406;
	public static readonly V128_LOAD32_ZERO = 407;
	public static readonly V128_LOAD64_ZERO = 408;
	public static readonly F32X4_DEMOTE_F64X2_ZERO = 409;
	public static readonly F64X2_PROMOTE_LOW_F32X4 = 410;
	public static readonly I8X16_ABS = 411;
	public static readonly I8X16_NEG = 412;
	public static readonly I8X16_POPCNT = 413;
	public static readonly I8X16_ALL_TRUE = 414;
	public static readonly I8X16_BITMASK = 415;
	public static readonly I8X16_NARROW_I16X8_S = 416;
	public static readonly I8X16_NARROW_I16X8_U = 417;
	public static readonly I8X16_SHL = 418;
	public static readonly I8X16_SHR_S = 419;
	public static readonly I8X16_SHR_U = 420;
	public static readonly I8X16_ADD = 421;
	public static readonly I8X16_ADD_SAT_S = 422;
	public static readonly I8X16_ADD_SAT_U = 423;
	public static readonly I8X16_SUB = 424;
	public static readonly I8X16_SUB_SAT_S = 425;
	public static readonly I8X16_SUB_SAT_U = 426;
	public static readonly I8X16_MIN_S = 427;
	public static readonly I8X16_MIN_U = 428;
	public static readonly I8X16_MAX_S = 429;
	public static readonly I8X16_MAX_U = 430;
	public static readonly I8X16_AVGR_U = 431;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_S = 432;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_U = 433;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_S = 434;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_U = 435;
	public static readonly I16X8_ABS = 436;
	public static readonly I16X8_NEG = 437;
	public static readonly I16X8_Q15MULR_SAT_S = 438;
	public static readonly I16X8_ALL_TRUE = 439;
	public static readonly I16X8_BITMASK = 440;
	public static readonly I16X8_NARROW_I32X4_S = 441;
	public static readonly I16X8_NARROW_I32X4_U = 442;
	public static readonly I16X8_EXTEND_LOW_I8X16_S = 443;
	public static readonly I16X8_EXTEND_HIGH_I8X16_S = 444;
	public static readonly I16X8_EXTEND_LOW_I8X16_U = 445;
	public static readonly I16X8_EXTEND_HIGH_I8X16_U = 446;
	public static readonly I16X8_SHL = 447;
	public static readonly I16X8_SHR_S = 448;
	public static readonly I16X8_SHR_U = 449;
	public static readonly I16X8_ADD = 450;
	public static readonly I16X8_ADD_SAT_S = 451;
	public static readonly I16X8_ADD_SAT_U = 452;
	public static readonly I16X8_SUB = 453;
	public static readonly I16X8_SUB_SAT_S = 454;
	public static readonly I16X8_SUB_SAT_U = 455;
	public static readonly I16X8_MUL = 456;
	public static readonly I16X8_MIN_S = 457;
	public static readonly I16X8_MIN_U = 458;
	public static readonly I16X8_MAX_S = 459;
	public static readonly I16X8_MAX_U = 460;
	public static readonly I16X8_AVGR_U = 461;
	public static readonly I16X8_EXTMUL_LOW_I8X16_S = 462;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_S = 463;
	public static readonly I16X8_EXTMUL_LOW_I8X16_U = 464;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_U = 465;
	public static readonly I32X4_ABS = 466;
	public static readonly I32X4_NEG = 467;
	public static readonly I32X4_ALL_TRUE = 468;
	public static readonly I32X4_BITMASK = 469;
	public static readonly I32X4_EXTEND_LOW_I16X8_S = 470;
	public static readonly I32X4_EXTEND_HIGH_I16X8_S = 471;
	public static readonly I32X4_EXTEND_LOW_I16X8_U = 472;
	public static readonly I32X4_EXTEND_HIGH_I16X8_U = 473;
	public static readonly I32X4_SHL = 474;
	public static readonly I32X4_SHR_S = 475;
	public static readonly I32X4_SHR_U = 476;
	public static readonly I32X4_ADD = 477;
	public static readonly I32X4_SUB = 478;
	public static readonly I32X4_MUL = 479;
	public static readonly I32X4_MIN_S = 480;
	public static readonly I32X4_MIN_U = 481;
	public static readonly I32X4_MAX_S = 482;
	public static readonly I32X4_MAX_U = 483;
	public static readonly I32X4_DOT_I16X8_S = 484;
	public static readonly I32X4_EXTMUL_LOW_I16X8_S = 485;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_S = 486;
	public static readonly I32X4_EXTMUL_LOW_I16X8_U = 487;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_U = 488;
	public static readonly I64X2_ABS = 489;
	public static readonly I64X2_NEG = 490;
	public static readonly I64X2_ALL_TRUE = 491;
	public static readonly I64X2_BITMASK = 492;
	public static readonly I64X2_EXTEND_LOW_I32X4_S = 493;
	public static readonly I64X2_EXTEND_HIGH_I32X4_S = 494;
	public static readonly I64X2_EXTEND_LOW_I32X4_U = 495;
	public static readonly I64X2_EXTEND_HIGH_I32X4_U = 496;
	public static readonly I64X2_SHL = 497;
	public static readonly I64X2_SHR_S = 498;
	public static readonly I64X2_SHR_U = 499;
	public static readonly I64X2_ADD = 500;
	public static readonly I64X2_SUB = 501;
	public static readonly I64X2_MUL = 502;
	public static readonly I64X2_EQ = 503;
	public static readonly I64X2_NE = 504;
	public static readonly I64X2_LT_S = 505;
	public static readonly I64X2_GT_S = 506;
	public static readonly I64X2_LE_S = 507;
	public static readonly I64X2_GE_S = 508;
	public static readonly I64X2_EXTMUL_LOW_I32X4_S = 509;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_S = 510;
	public static readonly I64X2_EXTMUL_LOW_I32X4_U = 511;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_U = 512;
	public static readonly F32X4_CEIL = 513;
	public static readonly F32X4_FLOOR = 514;
	public static readonly F32X4_TRUNC = 515;
	public static readonly F32X4_NEAREST = 516;
	public static readonly F64X2_CEIL = 517;
	public static readonly F64X2_FLOOR = 518;
	public static readonly F64X2_TRUNC = 519;
	public static readonly F64X2_NEAREST = 520;
	public static readonly F32X4_ABS = 521;
	public static readonly F32X4_NEG = 522;
	public static readonly F32X4_SQRT = 523;
	public static readonly F32X4_ADD = 524;
	public static readonly F32X4_SUB = 525;
	public static readonly F32X4_MUL = 526;
	public static readonly F32X4_DIV = 527;
	public static readonly F32X4_MIN = 528;
	public static readonly F32X4_MAX = 529;
	public static readonly F32X4_PMIN = 530;
	public static readonly F32X4_PMAX = 531;
	public static readonly F64X2_ABS = 532;
	public static readonly F64X2_NEG = 533;
	public static readonly F64X2_SQRT = 534;
	public static readonly F64X2_ADD = 535;
	public static readonly F64X2_SUB = 536;
	public static readonly F64X2_MUL = 537;
	public static readonly F64X2_DIV = 538;
	public static readonly F64X2_MIN = 539;
	public static readonly F64X2_MAX = 540;
	public static readonly F64X2_PMIN = 541;
	public static readonly F64X2_PMAX = 542;
	public static readonly I32X4_TRUNC_SAT_F32X4_S = 543;
	public static readonly I32X4_TRUNC_SAT_F32X4_U = 544;
	public static readonly F32X4_CONVERT_I32X4_S = 545;
	public static readonly F32X4_CONVERT_I32X4_U = 546;
	public static readonly I32X4_TRUNC_SAT_F64X2_S_ZERO = 547;
	public static readonly I32X4_TRUNC_SAT_F64X2_U_ZERO = 548;
	public static readonly F64X2_CONVERT_LOW_I32X4_S = 549;
	public static readonly F64X2_CONVERT_LOW_I32X4_U = 550;
	public static readonly IDENTIFIER = 551;
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
	public static readonly RULE_any_type = 14;
	public static readonly RULE_native_type = 15;
	public static readonly RULE_boolean_type = 16;
	public static readonly RULE_number_type = 17;
	public static readonly RULE_integer_type = 18;
	public static readonly RULE_decimal_type = 19;
	public static readonly RULE_i32_type = 20;
	public static readonly RULE_i64_type = 21;
	public static readonly RULE_isize_type = 22;
	public static readonly RULE_u32_type = 23;
	public static readonly RULE_u64_type = 24;
	public static readonly RULE_usize_type = 25;
	public static readonly RULE_f32_type = 26;
	public static readonly RULE_f64_type = 27;
	public static readonly RULE_string_type = 28;
	public static readonly RULE_void_type = 29;
	public static readonly RULE_attribute_type = 30;
	public static readonly RULE_attribute_type_or_null = 31;
	public static readonly RULE_attribute_ref = 32;
	public static readonly RULE_class_type = 33;
	public static readonly RULE_class_ref = 34;
	public static readonly RULE_function_type = 35;
	public static readonly RULE_function_type_or_null = 36;
	public static readonly RULE_return_type = 37;
	public static readonly RULE_return_types = 38;
	public static readonly RULE_parameter = 39;
	public static readonly RULE_class_declaration = 40;
	public static readonly RULE_accessibility = 41;
	public static readonly RULE_field_declaration = 42;
	public static readonly RULE_function_declaration = 43;
	public static readonly RULE_abstract_function_declaration = 44;
	public static readonly RULE_concrete_function_declaration = 45;
	public static readonly RULE_native_function_declaration = 46;
	public static readonly RULE_function_prototype = 47;
	public static readonly RULE_generic_parameter = 48;
	public static readonly RULE_statement = 49;
	public static readonly RULE_throw_statement = 50;
	public static readonly RULE_try_statement = 51;
	public static readonly RULE_catch_clause = 52;
	public static readonly RULE_catch_all_clause = 53;
	public static readonly RULE_finally_clause = 54;
	public static readonly RULE_break_statement = 55;
	public static readonly RULE_for_statement = 56;
	public static readonly RULE_if_statement = 57;
	public static readonly RULE_statements = 58;
	public static readonly RULE_function_call_statement = 59;
	public static readonly RULE_declare_instances_statement = 60;
	public static readonly RULE_declare_one = 61;
	public static readonly RULE_assign_instance_statement = 62;
	public static readonly RULE_assign_op = 63;
	public static readonly RULE_assign_item_statement = 64;
	public static readonly RULE_return_statement = 65;
	public static readonly RULE_expression = 66;
	public static readonly RULE_function_call = 67;
	public static readonly RULE_literal_expression = 68;
	public static readonly RULE_list_literal = 69;
	public static readonly RULE_set_literal = 70;
	public static readonly RULE_map_literal = 71;
	public static readonly RULE_map_entry = 72;
	public static readonly RULE_instruction = 73;
	public static readonly RULE_opcode = 74;
	public static readonly RULE_plain_opcode = 75;
	public static readonly RULE_keyword_opcode = 76;
	public static readonly RULE_composite_opcode = 77;
	public static readonly literalNames: string[] = [ null, "'i32'", "'i64'", 
                                                   "'isize'", "'u32'", "'u64'", 
                                                   "'usize'", "'f32'", "'f64'", 
                                                   "'v128'", "'string'", 
                                                   "'boolean'", "'any'", 
                                                   "'void'", "'attribute'", 
                                                   "'class'", "'enum'", 
                                                   "'extends'", "'function'", 
                                                   "'static'", "'abstract'", 
                                                   "'native'", "'public'", 
                                                   "'protected'", "'private'", 
                                                   "'const'", "'let'", "'new'", 
                                                   "'get'", "'set'", "'from'", 
                                                   "'switch'", "'case'", 
                                                   "'for'", "'do'", "'while'", 
                                                   "'break'", "'finally'", 
                                                   "'this'", "'super'", 
                                                   "'typeof'", "'instanceof'", 
                                                   "'sizeof'", "'alignof'", 
                                                   "'offsetof'", "'export'", 
                                                   "'import'", "'default'", 
                                                   "'in'", "'as'", "'('", 
                                                   "')'", "'['", "']'", 
                                                   "'{'", "'}'", "'=>'", 
                                                   "'>'", "'<'", "'<='", 
                                                   "'>='", "'=='", "'!='", 
                                                   "'!'", "'&&'", "'||'", 
                                                   "'?'", "';'", "':'", 
                                                   "','", "'...'", "'.'", 
                                                   "'@'", "'++'", "'--'", 
                                                   "'+'", "'-'", "'*'", 
                                                   "'/'", "'\\'", "'%'", 
                                                   "'^'", "'~'", "'&'", 
                                                   "'|'", "'<<'", "'>>'", 
                                                   "'>>>'", "'='", "'+='", 
                                                   "'-='", "'*='", "'/='", 
                                                   "'&='", "'|='", "'^='", 
                                                   "'%='", "'<<='", "'>>='", 
                                                   "'>>>='", null, null, 
                                                   null, null, null, "'null'", 
                                                   null, null, null, null, 
                                                   "'unreachable'", "'nop'", 
                                                   "'block'", "'loop'", 
                                                   "'if'", "'else'", "'try'", 
                                                   "'catch'", "'throw'", 
                                                   "'rethrow'", "'end'", 
                                                   "'br'", "'br_if'", "'br_table'", 
                                                   "'return'", "'call'", 
                                                   "'call_indirect'", "'drop'", 
                                                   "'select_type'", "'select'", 
                                                   "'local.get'", "'local.set'", 
                                                   "'local.tee'", "'global.get'", 
                                                   "'global.set'", "'i32.load'", 
                                                   "'i64.load'", "'f32.load'", 
                                                   "'f64.load'", "'i32.load8_s'", 
                                                   "'i32.load8_u'", "'i32.load16_s'", 
                                                   "'i32.load16_u'", "'i64.load8_s'", 
                                                   "'i64.load8_u'", "'i64.load16_s'", 
                                                   "'i64.load16_u'", "'i64.load32_s'", 
                                                   "'i64.load32_u'", "'i32.store'", 
                                                   "'i64.store'", "'f32.store'", 
                                                   "'f64.store'", "'i32.store8'", 
                                                   "'i32.store16'", "'i64.store8'", 
                                                   "'i64.store16'", "'i64.store32'", 
                                                   "'memory.size'", "'memory.grow'", 
                                                   "'i32.const'", "'i64.const'", 
                                                   "'f32.const'", "'f64.const'", 
                                                   "'i32.eqz'", "'i32.eq'", 
                                                   "'i32.ne'", "'i32.lt_s'", 
                                                   "'i32.lt_u'", "'i32.gt_s'", 
                                                   "'i32.gt_u'", "'i32.le_s'", 
                                                   "'i32.le_u'", "'i32.ge_s'", 
                                                   "'i32.ge_u'", "'i64.eqz'", 
                                                   "'i64.eq'", "'i64.ne'", 
                                                   "'i64.lt_s'", "'i64.lt_u'", 
                                                   "'i64.gt_s'", "'i64.gt_u'", 
                                                   "'i64.le_s'", "'i64.le_u'", 
                                                   "'i64.ge_s'", "'i64.ge_u'", 
                                                   "'f32.eq'", "'f32.ne'", 
                                                   "'f32.lt'", "'f32.gt'", 
                                                   "'f32.le'", "'f32.ge'", 
                                                   "'f64.eq'", "'f64.ne'", 
                                                   "'f64.lt'", "'f64.gt'", 
                                                   "'f64.le'", "'f64.ge'", 
                                                   "'i32.clz'", "'i32.ctz'", 
                                                   "'i32.popcnt'", "'i32.add'", 
                                                   "'i32.sub'", "'i32.mul'", 
                                                   "'i32.div_s'", "'i32.div_u'", 
                                                   "'i32.rem_s'", "'i32.rem_u'", 
                                                   "'i32.and'", "'i32.or'", 
                                                   "'i32.xor'", "'i32.shl'", 
                                                   "'i32.shr_s'", "'i32.shr_u'", 
                                                   "'i32.rotl'", "'i32.rotr'", 
                                                   "'i64.clz'", "'i64.ctz'", 
                                                   "'i64.popcnt'", "'i64.add'", 
                                                   "'i64.sub'", "'i64.mul'", 
                                                   "'i64.div_s'", "'i64.div_u'", 
                                                   "'i64.rem_s'", "'i64.rem_u'", 
                                                   "'i64.and'", "'i64.or'", 
                                                   "'i64.xor'", "'i64.shl'", 
                                                   "'i64.shr_s'", "'i64.shr_u'", 
                                                   "'i64.rotl'", "'i64.rotr'", 
                                                   "'f32.abs'", "'f32.neg'", 
                                                   "'f32.ceil'", "'f32.floor'", 
                                                   "'f32.trunc'", "'f32.nearest'", 
                                                   "'f32.sqrt'", "'f32.add'", 
                                                   "'f32.sub'", "'f32.mul'", 
                                                   "'f32.div'", "'f32.min'", 
                                                   "'f32.max'", "'f32.copysign'", 
                                                   "'f64.abs'", "'f64.neg'", 
                                                   "'f64.ceil'", "'f64.floor'", 
                                                   "'f64.trunc'", "'f64.nearest'", 
                                                   "'f64.sqrt'", "'f64.add'", 
                                                   "'f64.sub'", "'f64.mul'", 
                                                   "'f64.div'", "'f64.min'", 
                                                   "'f64.max'", "'f64.copysign'", 
                                                   "'i32.wrap_i64'", "'i32.trunc_f32_s'", 
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
                                                   "'f32.demote_f64'", "'f64.convert_i32_s'", 
                                                   "'f64.convert_i32_u'", 
                                                   "'f64.convert_i64_s'", 
                                                   "'f64.convert_i64_u'", 
                                                   "'f64.promote_f32'", 
                                                   "'i32.reinterpret_f32'", 
                                                   "'i64.reinterpret_f64'", 
                                                   "'f32.reinterpret_i32'", 
                                                   "'f64.reinterpret_i64'", 
                                                   "'i32.extend8_s'", "'i32.extend16_s'", 
                                                   "'i64.extend8_s'", "'i64.extend16_s'", 
                                                   "'i64.extend32_s'", "'i32.trunc_sat_f32_s'", 
                                                   "'i32.trunc_sat_f32_u'", 
                                                   "'i32.trunc_sat_f64_s'", 
                                                   "'i32.trunc_sat_f64_u'", 
                                                   "'i64.trunc_sat_f32_s'", 
                                                   "'i64.trunc_sat_f32_u'", 
                                                   "'i64.trunc_sat_f64_s'", 
                                                   "'i64.trunc_sat_f64_u'", 
                                                   "'memory.init'", "'data.drop'", 
                                                   "'memory.copy'", "'memory.fill'", 
                                                   "'table.init'", "'elem.drop'", 
                                                   "'table.copy'", "'table.get'", 
                                                   "'table.set'", "'table.grow'", 
                                                   "'table.size'", "'table.fill'", 
                                                   "'ref.null'", "'ref.is_null'", 
                                                   "'ref.func'", "'v128.load'", 
                                                   "'v128.load8x8_s'", "'v128.load8x8_u'", 
                                                   "'v128.load16x4_s'", 
                                                   "'v128.load16x4_u'", 
                                                   "'v128.load32x2_s'", 
                                                   "'v128.load32x2_u'", 
                                                   "'v128.load8_splat'", 
                                                   "'v128.load16_splat'", 
                                                   "'v128.load32_splat'", 
                                                   "'v128.load64_splat'", 
                                                   "'v128.store'", "'v128.const'", 
                                                   "'i8x16.shuffle'", "'i8x16.swizzle'", 
                                                   "'i8x16.splat'", "'i16x8.splat'", 
                                                   "'i32x4.splat'", "'i64x2.splat'", 
                                                   "'f32x4.splat'", "'f64x2.splat'", 
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
                                                   "'i8x16.eq'", "'i8x16.ne'", 
                                                   "'i8x16.lt_s'", "'i8x16.lt_u'", 
                                                   "'i8x16.gt_s'", "'i8x16.gt_u'", 
                                                   "'i8x16.le_s'", "'i8x16.le_u'", 
                                                   "'i8x16.ge_s'", "'i8x16.ge_u'", 
                                                   "'i16x8.eq'", "'i16x8.ne'", 
                                                   "'i16x8.lt_s'", "'i16x8.lt_u'", 
                                                   "'i16x8.gt_s'", "'i16x8.gt_u'", 
                                                   "'i16x8.le_s'", "'i16x8.le_u'", 
                                                   "'i16x8.ge_s'", "'i16x8.ge_u'", 
                                                   "'i32x4.eq'", "'i32x4.ne'", 
                                                   "'i32x4.lt_s'", "'i32x4.lt_u'", 
                                                   "'i32x4.gt_s'", "'i32x4.gt_u'", 
                                                   "'i32x4.le_s'", "'i32x4.le_u'", 
                                                   "'i32x4.ge_s'", "'i32x4.ge_u'", 
                                                   "'f32x4.eq'", "'f32x4.ne'", 
                                                   "'f32x4.lt'", "'f32x4.gt'", 
                                                   "'f32x4.le'", "'f32x4.ge'", 
                                                   "'f64x2.eq'", "'f64x2.ne'", 
                                                   "'f64x2.lt'", "'f64x2.gt'", 
                                                   "'f64x2.le'", "'f64x2.ge'", 
                                                   "'v128.not'", "'v128.and'", 
                                                   "'v128.andnot'", "'v128.or'", 
                                                   "'v128.xor'", "'v128.bitselect'", 
                                                   "'v128.any_true'", "'v128.load8_lane'", 
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
                                                   "'i8x16.abs'", "'i8x16.neg'", 
                                                   "'i8x16.popcnt'", "'i8x16.all_true'", 
                                                   "'i8x16.bitmask'", "'i8x16.narrow_i16x8_s'", 
                                                   "'i8x16.narrow_i16x8_u'", 
                                                   "'i8x16.shl'", "'i8x16.shr_s'", 
                                                   "'i8x16.shr_u'", "'i8x16.add'", 
                                                   "'i8x16.add_sat_s'", 
                                                   "'i8x16.add_sat_u'", 
                                                   "'i8x16.sub'", "'i8x16.sub_sat_s'", 
                                                   "'i8x16.sub_sat_u'", 
                                                   "'i8x16.min_s'", "'i8x16.min_u'", 
                                                   "'i8x16.max_s'", "'i8x16.max_u'", 
                                                   "'i8x16.avgr_u'", "'i16x8.extadd_pairwise_i8x16_s'", 
                                                   "'i16x8.extadd_pairwise_i8x16_u'", 
                                                   "'i32x4.extadd_pairwise_i16x8_s'", 
                                                   "'i32x4.extadd_pairwise_i16x8_u'", 
                                                   "'i16x8.abs'", "'i16x8.neg'", 
                                                   "'i16x8.q15mulr_sat_s'", 
                                                   "'i16x8.all_true'", "'i16x8.bitmask'", 
                                                   "'i16x8.narrow_i32x4_s'", 
                                                   "'i16x8.narrow_i32x4_u'", 
                                                   "'i16x8.extend_low_i8x16_s'", 
                                                   "'i16x8.extend_high_i8x16_s'", 
                                                   "'i16x8.extend_low_i8x16_u'", 
                                                   "'i16x8.extend_high_i8x16_u'", 
                                                   "'i16x8.shl'", "'i16x8.shr_s'", 
                                                   "'i16x8.shr_u'", "'i16x8.add'", 
                                                   "'i16x8.add_sat_s'", 
                                                   "'i16x8.add_sat_u'", 
                                                   "'i16x8.sub'", "'i16x8.sub_sat_s'", 
                                                   "'i16x8.sub_sat_u'", 
                                                   "'i16x8.mul'", "'i16x8.min_s'", 
                                                   "'i16x8.min_u'", "'i16x8.max_s'", 
                                                   "'i16x8.max_u'", "'i16x8.avgr_u'", 
                                                   "'i16x8.extmul_low_i8x16_s'", 
                                                   "'i16x8.extmul_high_i8x16_s'", 
                                                   "'i16x8.extmul_low_i8x16_u'", 
                                                   "'i16x8.extmul_high_i8x16_u'", 
                                                   "'i32x4.abs'", "'i32x4.neg'", 
                                                   "'i32x4.all_true'", "'i32x4.bitmask'", 
                                                   "'i32x4.extend_low_i16x8_s'", 
                                                   "'i32x4.extend_high_i16x8_s'", 
                                                   "'i32x4.extend_low_i16x8_u'", 
                                                   "'i32x4.extend_high_i16x8_u'", 
                                                   "'i32x4.shl'", "'i32x4.shr_s'", 
                                                   "'i32x4.shr_u'", "'i32x4.add'", 
                                                   "'i32x4.sub'", "'i32x4.mul'", 
                                                   "'i32x4.min_s'", "'i32x4.min_u'", 
                                                   "'i32x4.max_s'", "'i32x4.max_u'", 
                                                   "'i32x4.dot_i16x8_s'", 
                                                   "'i32x4.extmul_low_i16x8_s'", 
                                                   "'i32x4.extmul_high_i16x8_s'", 
                                                   "'i32x4.extmul_low_i16x8_u'", 
                                                   "'i32x4.extmul_high_i16x8_u'", 
                                                   "'i64x2.abs'", "'i64x2.neg'", 
                                                   "'i64x2.all_true'", "'i64x2.bitmask'", 
                                                   "'i64x2.extend_low_i32x4_s'", 
                                                   "'i64x2.extend_high_i32x4_s'", 
                                                   "'i64x2.extend_low_i32x4_u'", 
                                                   "'i64x2.extend_high_i32x4_u'", 
                                                   "'i64x2.shl'", "'i64x2.shr_s'", 
                                                   "'i64x2.shr_u'", "'i64x2.add'", 
                                                   "'i64x2.sub'", "'i64x2.mul'", 
                                                   "'i64x2.eq'", "'i64x2.ne'", 
                                                   "'i64x2.lt_s'", "'i64x2.gt_s'", 
                                                   "'i64x2.le_s'", "'i64x2.ge_s'", 
                                                   "'i64x2.extmul_low_i32x4_s'", 
                                                   "'i64x2.extmul_high_i32x4_s'", 
                                                   "'i64x2.extmul_low_i32x4_u'", 
                                                   "'i64x2.extmul_high_i32x4_u'", 
                                                   "'f32x4.ceil'", "'f32x4.floor'", 
                                                   "'f32x4.trunc'", "'f32x4.nearest'", 
                                                   "'f64x2.ceil'", "'f64x2.floor'", 
                                                   "'f64x2.trunc'", "'f64x2.nearest'", 
                                                   "'f32x4.abs'", "'f32x4.neg'", 
                                                   "'f32x4.sqrt'", "'f32x4.add'", 
                                                   "'f32x4.sub'", "'f32x4.mul'", 
                                                   "'f32x4.div'", "'f32x4.min'", 
                                                   "'f32x4.max'", "'f32x4.pmin'", 
                                                   "'f32x4.pmax'", "'f64x2.abs'", 
                                                   "'f64x2.neg'", "'f64x2.sqrt'", 
                                                   "'f64x2.add'", "'f64x2.sub'", 
                                                   "'f64x2.mul'", "'f64x2.div'", 
                                                   "'f64x2.min'", "'f64x2.max'", 
                                                   "'f64x2.pmin'", "'f64x2.pmax'", 
                                                   "'i32x4.trunc_sat_f32x4_s'", 
                                                   "'i32x4.trunc_sat_f32x4_u'", 
                                                   "'f32x4.convert_i32x4_s'", 
                                                   "'f32x4.convert_i32x4_u'", 
                                                   "'i32x4.trunc_sat_f64x2_s_zero'", 
                                                   "'i32x4.trunc_sat_f64x2_u_zero'", 
                                                   "'f64x2.convert_low_i32x4_s'", 
                                                   "'f64x2.convert_low_i32x4_u'" ];
	public static readonly symbolicNames: string[] = [ null, "I32", "I64", 
                                                    "ISIZE", "U32", "U64", 
                                                    "USIZE", "F32", "F64", 
                                                    "V128", "STRING", "BOOLEAN", 
                                                    "ANY", "VOID", "ATTRIBUTE", 
                                                    "CLASS", "ENUM", "EXTENDS", 
                                                    "FUNCTION", "STATIC", 
                                                    "ABSTRACT", "NATIVE", 
                                                    "PUBLIC", "PROTECTED", 
                                                    "PRIVATE", "CONST", 
                                                    "LET", "NEW", "GET", 
                                                    "SET", "FROM", "SWITCH", 
                                                    "CASE", "FOR", "DO", 
                                                    "WHILE", "BREAK", "FINALLY", 
                                                    "THIS", "SUPER", "TYPE_OF", 
                                                    "INSTANCE_OF", "SIZE_OF", 
                                                    "ALIGN_OF", "OFFSET_OF", 
                                                    "EXPORT", "IMPORT", 
                                                    "DEFAULT", "IN", "AS", 
                                                    "LPAR", "RPAR", "LBRAK", 
                                                    "RBRAK", "LCURL", "RCURL", 
                                                    "ARROW", "GT", "LT", 
                                                    "LTE", "GTE", "EQUALS", 
                                                    "NOT_EQUALS", "NOT", 
                                                    "AND", "OR", "QUESTION", 
                                                    "SEMI", "COLON", "COMMA", 
                                                    "ETC", "DOT", "AT", 
                                                    "INC", "DEC", "PLUS", 
                                                    "MINUS", "STAR", "SLASH", 
                                                    "BSLASH", "PERCENT", 
                                                    "CARET", "TILDE", "AMP", 
                                                    "PIPE", "LSHIFT", "RSHIFT", 
                                                    "URSHIFT", "ASSIGN", 
                                                    "ADD_ASSIGN", "SUB_ASSIGN", 
                                                    "MUL_ASSIGN", "DIV_ASSIGN", 
                                                    "AND_ASSIGN", "OR_ASSIGN", 
                                                    "XOR_ASSIGN", "MOD_ASSIGN", 
                                                    "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
                                                    "URSHIFT_ASSIGN", "INTEGER_LITERAL", 
                                                    "DECIMAL_LITERAL", "BOOLEAN_LITERAL", 
                                                    "CHAR_LITERAL", "STRING_LITERAL", 
                                                    "NULL_LITERAL", "ANNOTATION", 
                                                    "WS", "COMMENT", "LINE_COMMENT", 
                                                    "UNREACHABLE", "NOP", 
                                                    "BLOCK", "LOOP", "IF", 
                                                    "ELSE", "TRY", "CATCH", 
                                                    "THROW", "RETHROW", 
                                                    "END", "BR", "BR_IF", 
                                                    "BR_TABLE", "RETURN", 
                                                    "CALL", "CALL_INDIRECT", 
                                                    "DROP", "SELECT_TYPE", 
                                                    "SELECT", "LOCAL_GET", 
                                                    "LOCAL_SET", "LOCAL_TEE", 
                                                    "GLOBAL_GET", "GLOBAL_SET", 
                                                    "I32_LOAD", "I64_LOAD", 
                                                    "F32_LOAD", "F64_LOAD", 
                                                    "I32_LOAD8_S", "I32_LOAD8_U", 
                                                    "I32_LOAD16_S", "I32_LOAD16_U", 
                                                    "I64_LOAD8_S", "I64_LOAD8_U", 
                                                    "I64_LOAD16_S", "I64_LOAD16_U", 
                                                    "I64_LOAD32_S", "I64_LOAD32_U", 
                                                    "I32_STORE", "I64_STORE", 
                                                    "F32_STORE", "F64_STORE", 
                                                    "I32_STORE8", "I32_STORE16", 
                                                    "I64_STORE8", "I64_STORE16", 
                                                    "I64_STORE32", "MEMORY_SIZE", 
                                                    "MEMORY_GROW", "I32_CONST", 
                                                    "I64_CONST", "F32_CONST", 
                                                    "F64_CONST", "I32_EQZ", 
                                                    "I32_EQ", "I32_NE", 
                                                    "I32_LT_S", "I32_LT_U", 
                                                    "I32_GT_S", "I32_GT_U", 
                                                    "I32_LE_S", "I32_LE_U", 
                                                    "I32_GE_S", "I32_GE_U", 
                                                    "I64_EQZ", "I64_EQ", 
                                                    "I64_NE", "I64_LT_S", 
                                                    "I64_LT_U", "I64_GT_S", 
                                                    "I64_GT_U", "I64_LE_S", 
                                                    "I64_LE_U", "I64_GE_S", 
                                                    "I64_GE_U", "F32_EQ", 
                                                    "F32_NE", "F32_LT", 
                                                    "F32_GT", "F32_LE", 
                                                    "F32_GE", "F64_EQ", 
                                                    "F64_NE", "F64_LT", 
                                                    "F64_GT", "F64_LE", 
                                                    "F64_GE", "I32_CLZ", 
                                                    "I32_CTZ", "I32_POPCNT", 
                                                    "I32_ADD", "I32_SUB", 
                                                    "I32_MUL", "I32_DIV_S", 
                                                    "I32_DIV_U", "I32_REM_S", 
                                                    "I32_REM_U", "I32_AND", 
                                                    "I32_OR", "I32_XOR", 
                                                    "I32_SHL", "I32_SHR_S", 
                                                    "I32_SHR_U", "I32_ROTL", 
                                                    "I32_ROTR", "I64_CLZ", 
                                                    "I64_CTZ", "I64_POPCNT", 
                                                    "I64_ADD", "I64_SUB", 
                                                    "I64_MUL", "I64_DIV_S", 
                                                    "I64_DIV_U", "I64_REM_S", 
                                                    "I64_REM_U", "I64_AND", 
                                                    "I64_OR", "I64_XOR", 
                                                    "I64_SHL", "I64_SHR_S", 
                                                    "I64_SHR_U", "I64_ROTL", 
                                                    "I64_ROTR", "F32_ABS", 
                                                    "F32_NEG", "F32_CEIL", 
                                                    "F32_FLOOR", "F32_TRUNC", 
                                                    "F32_NEAREST", "F32_SQRT", 
                                                    "F32_ADD", "F32_SUB", 
                                                    "F32_MUL", "F32_DIV", 
                                                    "F32_MIN", "F32_MAX", 
                                                    "F32_COPYSIGN", "F64_ABS", 
                                                    "F64_NEG", "F64_CEIL", 
                                                    "F64_FLOOR", "F64_TRUNC", 
                                                    "F64_NEAREST", "F64_SQRT", 
                                                    "F64_ADD", "F64_SUB", 
                                                    "F64_MUL", "F64_DIV", 
                                                    "F64_MIN", "F64_MAX", 
                                                    "F64_COPYSIGN", "I32_WRAP_I64", 
                                                    "I32_TRUNC_F32_S", "I32_TRUNC_F32_U", 
                                                    "I32_TRUNC_F64_S", "I32_TRUNC_F64_U", 
                                                    "I64_EXTEND_I32_S", 
                                                    "I64_EXTEND_I32_U", 
                                                    "I64_TRUNC_F32_S", "I64_TRUNC_F32_U", 
                                                    "I64_TRUNC_F64_S", "I64_TRUNC_F64_U", 
                                                    "F32_CONVERT_I32_S", 
                                                    "F32_CONVERT_I32_U", 
                                                    "F32_CONVERT_I64_S", 
                                                    "F32_CONVERT_I64_U", 
                                                    "F32_DEMOTE_F64", "F64_CONVERT_I32_S", 
                                                    "F64_CONVERT_I32_U", 
                                                    "F64_CONVERT_I64_S", 
                                                    "F64_CONVERT_I64_U", 
                                                    "F64_PROMOTE_F32", "I32_REINTERPRET_F32", 
                                                    "I64_REINTERPRET_F64", 
                                                    "F32_REINTERPRET_I32", 
                                                    "F64_REINTERPRET_I64", 
                                                    "I32_EXTEND8_S", "I32_EXTEND16_S", 
                                                    "I64_EXTEND8_S", "I64_EXTEND16_S", 
                                                    "I64_EXTEND32_S", "I32_TRUNC_SAT_F32_S", 
                                                    "I32_TRUNC_SAT_F32_U", 
                                                    "I32_TRUNC_SAT_F64_S", 
                                                    "I32_TRUNC_SAT_F64_U", 
                                                    "I64_TRUNC_SAT_F32_S", 
                                                    "I64_TRUNC_SAT_F32_U", 
                                                    "I64_TRUNC_SAT_F64_S", 
                                                    "I64_TRUNC_SAT_F64_U", 
                                                    "MEMORY_INIT", "DATA_DROP", 
                                                    "MEMORY_COPY", "MEMORY_FILL", 
                                                    "TABLE_INIT", "ELEM_DROP", 
                                                    "TABLE_COPY", "TABLE_GET", 
                                                    "TABLE_SET", "TABLE_GROW", 
                                                    "TABLE_SIZE", "TABLE_FILL", 
                                                    "REF_NULL", "REF_IS_NULL", 
                                                    "REF_FUNC", "V128_LOAD", 
                                                    "V128_LOAD8X8_S", "V128_LOAD8X8_U", 
                                                    "V128_LOAD16X4_S", "V128_LOAD16X4_U", 
                                                    "V128_LOAD32X2_S", "V128_LOAD32X2_U", 
                                                    "V128_LOAD8_SPLAT", 
                                                    "V128_LOAD16_SPLAT", 
                                                    "V128_LOAD32_SPLAT", 
                                                    "V128_LOAD64_SPLAT", 
                                                    "V128_STORE", "V128_CONST", 
                                                    "I8X16_SHUFFLE", "I8X16_SWIZZLE", 
                                                    "I8X16_SPLAT", "I16X8_SPLAT", 
                                                    "I32X4_SPLAT", "I64X2_SPLAT", 
                                                    "F32X4_SPLAT", "F64X2_SPLAT", 
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
                                                    "I8X16_EQ", "I8X16_NE", 
                                                    "I8X16_LT_S", "I8X16_LT_U", 
                                                    "I8X16_GT_S", "I8X16_GT_U", 
                                                    "I8X16_LE_S", "I8X16_LE_U", 
                                                    "I8X16_GE_S", "I8X16_GE_U", 
                                                    "I16X8_EQ", "I16X8_NE", 
                                                    "I16X8_LT_S", "I16X8_LT_U", 
                                                    "I16X8_GT_S", "I16X8_GT_U", 
                                                    "I16X8_LE_S", "I16X8_LE_U", 
                                                    "I16X8_GE_S", "I16X8_GE_U", 
                                                    "I32X4_EQ", "I32X4_NE", 
                                                    "I32X4_LT_S", "I32X4_LT_U", 
                                                    "I32X4_GT_S", "I32X4_GT_U", 
                                                    "I32X4_LE_S", "I32X4_LE_U", 
                                                    "I32X4_GE_S", "I32X4_GE_U", 
                                                    "F32X4_EQ", "F32X4_NE", 
                                                    "F32X4_LT", "F32X4_GT", 
                                                    "F32X4_LE", "F32X4_GE", 
                                                    "F64X2_EQ", "F64X2_NE", 
                                                    "F64X2_LT", "F64X2_GT", 
                                                    "F64X2_LE", "F64X2_GE", 
                                                    "V128_NOT", "V128_AND", 
                                                    "V128_ANDNOT", "V128_OR", 
                                                    "V128_XOR", "V128_BITSELECT", 
                                                    "V128_ANY_TRUE", "V128_LOAD8_LANE", 
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
                                                    "I8X16_ABS", "I8X16_NEG", 
                                                    "I8X16_POPCNT", "I8X16_ALL_TRUE", 
                                                    "I8X16_BITMASK", "I8X16_NARROW_I16X8_S", 
                                                    "I8X16_NARROW_I16X8_U", 
                                                    "I8X16_SHL", "I8X16_SHR_S", 
                                                    "I8X16_SHR_U", "I8X16_ADD", 
                                                    "I8X16_ADD_SAT_S", "I8X16_ADD_SAT_U", 
                                                    "I8X16_SUB", "I8X16_SUB_SAT_S", 
                                                    "I8X16_SUB_SAT_U", "I8X16_MIN_S", 
                                                    "I8X16_MIN_U", "I8X16_MAX_S", 
                                                    "I8X16_MAX_U", "I8X16_AVGR_U", 
                                                    "I16X8_EXTADD_PAIRWISE_I8X16_S", 
                                                    "I16X8_EXTADD_PAIRWISE_I8X16_U", 
                                                    "I32X4_EXTADD_PAIRWISE_I16X8_S", 
                                                    "I32X4_EXTADD_PAIRWISE_I16X8_U", 
                                                    "I16X8_ABS", "I16X8_NEG", 
                                                    "I16X8_Q15MULR_SAT_S", 
                                                    "I16X8_ALL_TRUE", "I16X8_BITMASK", 
                                                    "I16X8_NARROW_I32X4_S", 
                                                    "I16X8_NARROW_I32X4_U", 
                                                    "I16X8_EXTEND_LOW_I8X16_S", 
                                                    "I16X8_EXTEND_HIGH_I8X16_S", 
                                                    "I16X8_EXTEND_LOW_I8X16_U", 
                                                    "I16X8_EXTEND_HIGH_I8X16_U", 
                                                    "I16X8_SHL", "I16X8_SHR_S", 
                                                    "I16X8_SHR_U", "I16X8_ADD", 
                                                    "I16X8_ADD_SAT_S", "I16X8_ADD_SAT_U", 
                                                    "I16X8_SUB", "I16X8_SUB_SAT_S", 
                                                    "I16X8_SUB_SAT_U", "I16X8_MUL", 
                                                    "I16X8_MIN_S", "I16X8_MIN_U", 
                                                    "I16X8_MAX_S", "I16X8_MAX_U", 
                                                    "I16X8_AVGR_U", "I16X8_EXTMUL_LOW_I8X16_S", 
                                                    "I16X8_EXTMUL_HIGH_I8X16_S", 
                                                    "I16X8_EXTMUL_LOW_I8X16_U", 
                                                    "I16X8_EXTMUL_HIGH_I8X16_U", 
                                                    "I32X4_ABS", "I32X4_NEG", 
                                                    "I32X4_ALL_TRUE", "I32X4_BITMASK", 
                                                    "I32X4_EXTEND_LOW_I16X8_S", 
                                                    "I32X4_EXTEND_HIGH_I16X8_S", 
                                                    "I32X4_EXTEND_LOW_I16X8_U", 
                                                    "I32X4_EXTEND_HIGH_I16X8_U", 
                                                    "I32X4_SHL", "I32X4_SHR_S", 
                                                    "I32X4_SHR_U", "I32X4_ADD", 
                                                    "I32X4_SUB", "I32X4_MUL", 
                                                    "I32X4_MIN_S", "I32X4_MIN_U", 
                                                    "I32X4_MAX_S", "I32X4_MAX_U", 
                                                    "I32X4_DOT_I16X8_S", 
                                                    "I32X4_EXTMUL_LOW_I16X8_S", 
                                                    "I32X4_EXTMUL_HIGH_I16X8_S", 
                                                    "I32X4_EXTMUL_LOW_I16X8_U", 
                                                    "I32X4_EXTMUL_HIGH_I16X8_U", 
                                                    "I64X2_ABS", "I64X2_NEG", 
                                                    "I64X2_ALL_TRUE", "I64X2_BITMASK", 
                                                    "I64X2_EXTEND_LOW_I32X4_S", 
                                                    "I64X2_EXTEND_HIGH_I32X4_S", 
                                                    "I64X2_EXTEND_LOW_I32X4_U", 
                                                    "I64X2_EXTEND_HIGH_I32X4_U", 
                                                    "I64X2_SHL", "I64X2_SHR_S", 
                                                    "I64X2_SHR_U", "I64X2_ADD", 
                                                    "I64X2_SUB", "I64X2_MUL", 
                                                    "I64X2_EQ", "I64X2_NE", 
                                                    "I64X2_LT_S", "I64X2_GT_S", 
                                                    "I64X2_LE_S", "I64X2_GE_S", 
                                                    "I64X2_EXTMUL_LOW_I32X4_S", 
                                                    "I64X2_EXTMUL_HIGH_I32X4_S", 
                                                    "I64X2_EXTMUL_LOW_I32X4_U", 
                                                    "I64X2_EXTMUL_HIGH_I32X4_U", 
                                                    "F32X4_CEIL", "F32X4_FLOOR", 
                                                    "F32X4_TRUNC", "F32X4_NEAREST", 
                                                    "F64X2_CEIL", "F64X2_FLOOR", 
                                                    "F64X2_TRUNC", "F64X2_NEAREST", 
                                                    "F32X4_ABS", "F32X4_NEG", 
                                                    "F32X4_SQRT", "F32X4_ADD", 
                                                    "F32X4_SUB", "F32X4_MUL", 
                                                    "F32X4_DIV", "F32X4_MIN", 
                                                    "F32X4_MAX", "F32X4_PMIN", 
                                                    "F32X4_PMAX", "F64X2_ABS", 
                                                    "F64X2_NEG", "F64X2_SQRT", 
                                                    "F64X2_ADD", "F64X2_SUB", 
                                                    "F64X2_MUL", "F64X2_DIV", 
                                                    "F64X2_MIN", "F64X2_MAX", 
                                                    "F64X2_PMIN", "F64X2_PMAX", 
                                                    "I32X4_TRUNC_SAT_F32X4_S", 
                                                    "I32X4_TRUNC_SAT_F32X4_U", 
                                                    "F32X4_CONVERT_I32X4_S", 
                                                    "F32X4_CONVERT_I32X4_U", 
                                                    "I32X4_TRUNC_SAT_F64X2_S_ZERO", 
                                                    "I32X4_TRUNC_SAT_F64X2_U_ZERO", 
                                                    "F64X2_CONVERT_LOW_I32X4_S", 
                                                    "F64X2_CONVERT_LOW_I32X4_U", 
                                                    "IDENTIFIER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "preamble", "import_statement", "import_source", "compilation_atom", 
		"global_statement", "declaration", "enum_declaration", "enum_item", "attribute_declaration", 
		"identifier", "annotation", "value_type", "value_type_or_null", "any_type", 
		"native_type", "boolean_type", "number_type", "integer_type", "decimal_type", 
		"i32_type", "i64_type", "isize_type", "u32_type", "u64_type", "usize_type", 
		"f32_type", "f64_type", "string_type", "void_type", "attribute_type", 
		"attribute_type_or_null", "attribute_ref", "class_type", "class_ref", 
		"function_type", "function_type_or_null", "return_type", "return_types", 
		"parameter", "class_declaration", "accessibility", "field_declaration", 
		"function_declaration", "abstract_function_declaration", "concrete_function_declaration", 
		"native_function_declaration", "function_prototype", "generic_parameter", 
		"statement", "throw_statement", "try_statement", "catch_clause", "catch_all_clause", 
		"finally_clause", "break_statement", "for_statement", "if_statement", 
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
			this.state = 156;
			this.preamble();
			this.state = 160;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 157;
					this.compilation_atom();
					}
					}
				}
				this.state = 162;
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
			this.state = 166;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 1, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 163;
					this.import_statement();
					}
					}
				}
				this.state = 168;
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
			this.state = 169;
			this.match(ComposeParser.IMPORT);
			this.state = 196;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 110:
			case 111:
			case 112:
			case 113:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
			case 551:
				{
				this.state = 170;
				localctx._main = this.identifier();
				this.state = 183;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 171;
					this.match(ComposeParser.COMMA);
					this.state = 172;
					this.match(ComposeParser.LCURL);
					this.state = 173;
					this.identifier();
					this.state = 178;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===69) {
						{
						{
						this.state = 174;
						this.match(ComposeParser.COMMA);
						this.state = 175;
						this.identifier();
						}
						}
						this.state = 180;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					this.state = 181;
					this.match(ComposeParser.RCURL);
					}
				}

				}
				break;
			case 54:
				{
				this.state = 185;
				this.match(ComposeParser.LCURL);
				this.state = 186;
				this.identifier();
				this.state = 191;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 187;
					this.match(ComposeParser.COMMA);
					this.state = 188;
					this.identifier();
					}
					}
					this.state = 193;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 194;
				this.match(ComposeParser.RCURL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			this.state = 198;
			this.match(ComposeParser.FROM);
			this.state = 199;
			this.import_source();
			this.state = 200;
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
			this.state = 202;
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
			this.state = 206;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 204;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 205;
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
			this.state = 211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===106) {
				{
				{
				this.state = 208;
				this.annotation();
				}
				}
				this.state = 213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 218;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===45) {
				{
				this.state = 214;
				this.match(ComposeParser.EXPORT);
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===47) {
					{
					this.state = 215;
					this.match(ComposeParser.DEFAULT);
					}
				}

				}
			}

			{
			this.state = 220;
			this.declare_instances_statement();
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
	public declaration(): DeclarationContext {
		let localctx: DeclarationContext = new DeclarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ComposeParser.RULE_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 222;
					this.annotation();
					}
					}
				}
				this.state = 227;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 10, this._ctx);
			}
			this.state = 232;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				{
				this.state = 228;
				this.match(ComposeParser.EXPORT);
				this.state = 230;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
				case 1:
					{
					this.state = 229;
					this.match(ComposeParser.DEFAULT);
					}
					break;
				}
				}
				break;
			}
			this.state = 238;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 234;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 235;
				this.class_declaration();
				}
				break;
			case 3:
				{
				this.state = 236;
				this.function_declaration(false);
				}
				break;
			case 4:
				{
				this.state = 237;
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
			this.state = 240;
			this.match(ComposeParser.ENUM);
			this.state = 241;
			this.identifier();
			this.state = 242;
			this.match(ComposeParser.LCURL);
			this.state = 243;
			this.enum_item();
			this.state = 248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===69) {
				{
				{
				this.state = 244;
				this.match(ComposeParser.COMMA);
				this.state = 245;
				this.enum_item();
				}
				}
				this.state = 250;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 251;
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
			this.state = 253;
			this.identifier();
			this.state = 254;
			this.match(ComposeParser.ASSIGN);
			this.state = 255;
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
			this.state = 257;
			this.match(ComposeParser.ATTRIBUTE);
			this.state = 258;
			this.identifier();
			this.state = 259;
			this.match(ComposeParser.COLON);
			this.state = 260;
			this.value_type_or_null();
			this.state = 261;
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
			this.state = 265;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 551:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 263;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 110:
			case 111:
			case 112:
			case 113:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 264;
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
			this.state = 267;
			this.match(ComposeParser.ANNOTATION);
			this.state = 272;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
			case 1:
				{
				this.state = 268;
				this.match(ComposeParser.LPAR);
				this.state = 269;
				this.literal_expression();
				this.state = 270;
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
	// @RuleVersion(0)
	public value_type(): Value_typeContext {
		let localctx: Value_typeContext = new Value_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 24, ComposeParser.RULE_value_type);
		try {
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 274;
				this.native_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 275;
				this.class_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 276;
				this.any_type();
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
	public value_type_or_null(): Value_type_or_nullContext {
		let localctx: Value_type_or_nullContext = new Value_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 26, ComposeParser.RULE_value_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 279;
			this.value_type();
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 280;
				this.match(ComposeParser.PIPE);
				this.state = 281;
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
	public any_type(): Any_typeContext {
		let localctx: Any_typeContext = new Any_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 28, ComposeParser.RULE_any_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
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
	public native_type(): Native_typeContext {
		let localctx: Native_typeContext = new Native_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 30, ComposeParser.RULE_native_type);
		try {
			this.state = 289;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 286;
				this.boolean_type();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 287;
				this.number_type();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 288;
				this.string_type();
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
	public boolean_type(): Boolean_typeContext {
		let localctx: Boolean_typeContext = new Boolean_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 32, ComposeParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 291;
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
			this.state = 295;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 293;
				this.integer_type();
				}
				break;
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 294;
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
			this.state = 303;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 297;
				this.i32_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 298;
				this.i64_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 299;
				this.isize_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 300;
				this.u32_type();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 301;
				this.u64_type();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 302;
				this.usize_type();
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
			this.state = 307;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 305;
				this.f32_type();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 306;
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
			this.state = 309;
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
			this.state = 311;
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
	public isize_type(): Isize_typeContext {
		let localctx: Isize_typeContext = new Isize_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 44, ComposeParser.RULE_isize_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 313;
			this.match(ComposeParser.ISIZE);
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
		this.enterRule(localctx, 46, ComposeParser.RULE_u32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 315;
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
		this.enterRule(localctx, 48, ComposeParser.RULE_u64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 317;
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
	public usize_type(): Usize_typeContext {
		let localctx: Usize_typeContext = new Usize_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 50, ComposeParser.RULE_usize_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 319;
			this.match(ComposeParser.USIZE);
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
		this.enterRule(localctx, 52, ComposeParser.RULE_f32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 321;
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
		this.enterRule(localctx, 54, ComposeParser.RULE_f64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 323;
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
		this.enterRule(localctx, 56, ComposeParser.RULE_string_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
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
		this.enterRule(localctx, 58, ComposeParser.RULE_void_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 327;
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
		this.enterRule(localctx, 60, ComposeParser.RULE_attribute_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 329;
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
		this.enterRule(localctx, 62, ComposeParser.RULE_attribute_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 331;
			this.attribute_type();
			this.state = 334;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 332;
				this.match(ComposeParser.PIPE);
				this.state = 333;
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
		this.enterRule(localctx, 64, ComposeParser.RULE_attribute_ref);
		try {
			this.state = 339;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 336;
				if (!( this.willBeLowercase() )) {
					throw this.createFailedPredicateException(" this.willBeLowercase() ");
				}
				this.state = 337;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 338;
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
		this.enterRule(localctx, 66, ComposeParser.RULE_class_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 341;
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
		this.enterRule(localctx, 68, ComposeParser.RULE_class_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 343;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 344;
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
		this.enterRule(localctx, 70, ComposeParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 359;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 346;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 347;
				this.match(ComposeParser.LPAR);
				this.state = 356;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
				case 1:
					{
					this.state = 348;
					this.parameter();
					this.state = 353;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===69) {
						{
						{
						this.state = 349;
						this.match(ComposeParser.COMMA);
						this.state = 350;
						this.parameter();
						}
						}
						this.state = 355;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 358;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 361;
			this.match(ComposeParser.ARROW);
			this.state = 362;
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
		this.enterRule(localctx, 72, ComposeParser.RULE_function_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this.function_type();
			this.state = 367;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				{
				this.state = 365;
				this.match(ComposeParser.PIPE);
				this.state = 366;
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
		this.enterRule(localctx, 74, ComposeParser.RULE_return_type);
		try {
			this.state = 377;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 369;
				this.value_type_or_null();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 370;
				this.attribute_type_or_null();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 371;
				if (!( !localctx.requireParenthesis )) {
					throw this.createFailedPredicateException(" !$requireParenthesis ");
				}
				this.state = 372;
				this.function_type_or_null();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 373;
				this.match(ComposeParser.LPAR);
				this.state = 374;
				this.function_type_or_null();
				this.state = 375;
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
		this.enterRule(localctx, 76, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 388;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 379;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 380;
				this.return_type(true);
				this.state = 385;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 381;
						this.match(ComposeParser.COMMA);
						this.state = 382;
						this.return_type(false);
						}
						}
					}
					this.state = 387;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 30, this._ctx);
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
		this.enterRule(localctx, 78, ComposeParser.RULE_parameter);
		try {
			this.state = 399;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 32, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 390;
				this.attribute_type_or_null();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 391;
				this.identifier();
				this.state = 392;
				this.match(ComposeParser.COLON);
				this.state = 393;
				this.value_type_or_null();
				}
				break;
			case 3:
				localctx = new FunctionParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 395;
				this.identifier();
				this.state = 396;
				this.match(ComposeParser.COLON);
				this.state = 397;
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
		this.enterRule(localctx, 80, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 402;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0)) {
				{
				this.state = 401;
				this.accessibility();
				}
			}

			this.state = 405;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===20) {
				{
				this.state = 404;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 407;
			this.match(ComposeParser.CLASS);
			this.state = 408;
			localctx._id = this.class_ref();
			this.state = 420;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===50) {
				{
				this.state = 409;
				this.match(ComposeParser.LPAR);
				this.state = 410;
				this.attribute_ref();
				this.state = 415;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 411;
					this.match(ComposeParser.COMMA);
					this.state = 412;
					this.attribute_ref();
					}
					}
					this.state = 417;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 418;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 431;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 422;
				this.match(ComposeParser.EXTENDS);
				this.state = 423;
				this.class_ref();
				this.state = 428;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 424;
					this.match(ComposeParser.COMMA);
					this.state = 425;
					this.class_ref();
					}
					}
					this.state = 430;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 433;
			this.match(ComposeParser.LCURL);
			this.state = 437;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 434;
					this.field_declaration();
					}
					}
				}
				this.state = 439;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 39, this._ctx);
			}
			this.state = 443;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 440;
					this.function_declaration(true);
					}
					}
				}
				this.state = 445;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 40, this._ctx);
			}
			this.state = 446;
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
		this.enterRule(localctx, 82, ComposeParser.RULE_accessibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 448;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0))) {
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
		this.enterRule(localctx, 84, ComposeParser.RULE_field_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 451;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0)) {
				{
				this.state = 450;
				this.accessibility();
				}
			}

			this.state = 454;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===19) {
				{
				this.state = 453;
				this.match(ComposeParser.STATIC);
				}
			}

			this.state = 456;
			this.identifier();
			this.state = 457;
			this.match(ComposeParser.COLON);
			this.state = 458;
			this.value_type_or_null();
			this.state = 459;
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
		this.enterRule(localctx, 86, ComposeParser.RULE_function_declaration);
		try {
			this.state = 464;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 43, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 461;
				this.abstract_function_declaration(localctx.as_member);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 462;
				this.concrete_function_declaration(localctx.as_member);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 463;
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
		this.enterRule(localctx, 88, ComposeParser.RULE_abstract_function_declaration);
		let _la: number;
		try {
			this.state = 480;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 466;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 468;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0)) {
					{
					this.state = 467;
					this.accessibility();
					}
				}

				this.state = 470;
				this.match(ComposeParser.ABSTRACT);
				this.state = 471;
				this.function_prototype(true);
				this.state = 472;
				this.match(ComposeParser.SEMI);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 474;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 475;
				this.match(ComposeParser.ABSTRACT);
				this.state = 476;
				this.match(ComposeParser.FUNCTION);
				this.state = 477;
				this.function_prototype(true);
				this.state = 478;
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
		this.enterRule(localctx, 90, ComposeParser.RULE_concrete_function_declaration);
		let _la: number;
		try {
			this.state = 511;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 482;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 484;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0)) {
					{
					this.state = 483;
					this.accessibility();
					}
				}

				this.state = 487;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===19) {
					{
					this.state = 486;
					this.match(ComposeParser.STATIC);
					}
				}

				this.state = 489;
				this.function_prototype(false);
				this.state = 490;
				this.match(ComposeParser.LCURL);
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
					{
					{
					this.state = 491;
					this.statement();
					}
					}
					this.state = 496;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 497;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 499;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 500;
				this.match(ComposeParser.FUNCTION);
				this.state = 501;
				this.function_prototype(false);
				this.state = 502;
				this.match(ComposeParser.LCURL);
				this.state = 506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
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
		this.enterRule(localctx, 92, ComposeParser.RULE_native_function_declaration);
		let _la: number;
		try {
			this.state = 542;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 54, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 513;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 515;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 29360128) !== 0)) {
					{
					this.state = 514;
					this.accessibility();
					}
				}

				this.state = 517;
				this.match(ComposeParser.STATIC);
				this.state = 518;
				this.match(ComposeParser.NATIVE);
				this.state = 519;
				this.function_prototype(false);
				this.state = 520;
				this.match(ComposeParser.LCURL);
				this.state = 524;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 34689143) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4160750095) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 4294967265) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 4294967295) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 4294967295) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 4294967295) !== 0) || ((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 4294967295) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 4294967295) !== 0) || ((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & 4294967295) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & 4294967295) !== 0) || ((((_la - 361)) & ~0x1F) === 0 && ((1 << (_la - 361)) & 4294967295) !== 0) || ((((_la - 393)) & ~0x1F) === 0 && ((1 << (_la - 393)) & 4294967295) !== 0) || ((((_la - 425)) & ~0x1F) === 0 && ((1 << (_la - 425)) & 4294967295) !== 0) || ((((_la - 457)) & ~0x1F) === 0 && ((1 << (_la - 457)) & 4294967295) !== 0) || ((((_la - 489)) & ~0x1F) === 0 && ((1 << (_la - 489)) & 4294967295) !== 0) || ((((_la - 521)) & ~0x1F) === 0 && ((1 << (_la - 521)) & 2147483647) !== 0)) {
					{
					{
					this.state = 521;
					this.instruction();
					}
					}
					this.state = 526;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 527;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 529;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 530;
				this.match(ComposeParser.NATIVE);
				this.state = 531;
				this.match(ComposeParser.FUNCTION);
				this.state = 532;
				this.function_prototype(false);
				this.state = 533;
				this.match(ComposeParser.LCURL);
				this.state = 537;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===27 || ((((_la - 38)) & ~0x1F) === 0 && ((1 << (_la - 38)) & 34689143) !== 0) || ((((_la - 73)) & ~0x1F) === 0 && ((1 << (_la - 73)) & 4160750095) !== 0) || ((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 4294967265) !== 0) || ((((_la - 137)) & ~0x1F) === 0 && ((1 << (_la - 137)) & 4294967295) !== 0) || ((((_la - 169)) & ~0x1F) === 0 && ((1 << (_la - 169)) & 4294967295) !== 0) || ((((_la - 201)) & ~0x1F) === 0 && ((1 << (_la - 201)) & 4294967295) !== 0) || ((((_la - 233)) & ~0x1F) === 0 && ((1 << (_la - 233)) & 4294967295) !== 0) || ((((_la - 265)) & ~0x1F) === 0 && ((1 << (_la - 265)) & 4294967295) !== 0) || ((((_la - 297)) & ~0x1F) === 0 && ((1 << (_la - 297)) & 4294967295) !== 0) || ((((_la - 329)) & ~0x1F) === 0 && ((1 << (_la - 329)) & 4294967295) !== 0) || ((((_la - 361)) & ~0x1F) === 0 && ((1 << (_la - 361)) & 4294967295) !== 0) || ((((_la - 393)) & ~0x1F) === 0 && ((1 << (_la - 393)) & 4294967295) !== 0) || ((((_la - 425)) & ~0x1F) === 0 && ((1 << (_la - 425)) & 4294967295) !== 0) || ((((_la - 457)) & ~0x1F) === 0 && ((1 << (_la - 457)) & 4294967295) !== 0) || ((((_la - 489)) & ~0x1F) === 0 && ((1 << (_la - 489)) & 4294967295) !== 0) || ((((_la - 521)) & ~0x1F) === 0 && ((1 << (_la - 521)) & 2147483647) !== 0)) {
					{
					{
					this.state = 534;
					this.instruction();
					}
					}
					this.state = 539;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 540;
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
		this.enterRule(localctx, 94, ComposeParser.RULE_function_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 544;
			this.identifier();
			this.state = 556;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 545;
				this.match(ComposeParser.LT);
				this.state = 546;
				this.generic_parameter();
				this.state = 551;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 547;
					this.match(ComposeParser.COMMA);
					this.state = 548;
					this.generic_parameter();
					}
					}
					this.state = 553;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 554;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 558;
			this.match(ComposeParser.LPAR);
			this.state = 567;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 58, this._ctx) ) {
			case 1:
				{
				this.state = 559;
				this.parameter();
				this.state = 564;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 560;
					this.match(ComposeParser.COMMA);
					this.state = 561;
					this.parameter();
					}
					}
					this.state = 566;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 569;
			this.match(ComposeParser.RPAR);
			this.state = 578;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 60, this._ctx) ) {
			case 1:
				{
				this.state = 570;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 571;
				this.match(ComposeParser.COLON);
				this.state = 572;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 573;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 576;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===68) {
					{
					this.state = 574;
					this.match(ComposeParser.COLON);
					this.state = 575;
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
		this.enterRule(localctx, 96, ComposeParser.RULE_generic_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 580;
			this.class_ref();
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===17) {
				{
				this.state = 581;
				this.match(ComposeParser.EXTENDS);
				this.state = 582;
				this.value_type();
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
		this.enterRule(localctx, 98, ComposeParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 588;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===106) {
				{
				{
				this.state = 585;
				this.annotation();
				}
				}
				this.state = 590;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 601;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 63, this._ctx) ) {
			case 1:
				{
				this.state = 591;
				this.declare_instances_statement();
				}
				break;
			case 2:
				{
				this.state = 592;
				this.assign_instance_statement();
				}
				break;
			case 3:
				{
				this.state = 593;
				this.assign_item_statement();
				}
				break;
			case 4:
				{
				this.state = 594;
				this.function_call_statement();
				}
				break;
			case 5:
				{
				this.state = 595;
				this.if_statement();
				}
				break;
			case 6:
				{
				this.state = 596;
				this.for_statement();
				}
				break;
			case 7:
				{
				this.state = 597;
				this.try_statement();
				}
				break;
			case 8:
				{
				this.state = 598;
				this.throw_statement();
				}
				break;
			case 9:
				{
				this.state = 599;
				this.return_statement();
				}
				break;
			case 10:
				{
				this.state = 600;
				this.break_statement();
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
	public throw_statement(): Throw_statementContext {
		let localctx: Throw_statementContext = new Throw_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 100, ComposeParser.RULE_throw_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 603;
			this.match(ComposeParser.THROW);
			this.state = 604;
			this.expression(0);
			this.state = 605;
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
		this.enterRule(localctx, 102, ComposeParser.RULE_try_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 607;
			this.match(ComposeParser.TRY);
			this.state = 608;
			this.match(ComposeParser.LCURL);
			this.state = 612;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
				{
				{
				this.state = 609;
				this.statement();
				}
				}
				this.state = 614;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 615;
			this.match(ComposeParser.RCURL);
			this.state = 619;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 616;
					this.catch_clause();
					}
					}
				}
				this.state = 621;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 623;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===117) {
				{
				this.state = 622;
				this.catch_all_clause();
				}
			}

			this.state = 626;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===37) {
				{
				this.state = 625;
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
		this.enterRule(localctx, 104, ComposeParser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 628;
			this.match(ComposeParser.CATCH);
			this.state = 629;
			this.match(ComposeParser.LPAR);
			this.state = 630;
			this.identifier();
			this.state = 631;
			this.match(ComposeParser.COLON);
			this.state = 632;
			this.value_type();
			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===84) {
				{
				{
				this.state = 633;
				this.match(ComposeParser.PIPE);
				this.state = 634;
				this.value_type();
				}
				}
				this.state = 639;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 640;
			this.match(ComposeParser.RPAR);
			this.state = 641;
			this.match(ComposeParser.LCURL);
			this.state = 645;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
				{
				{
				this.state = 642;
				this.statement();
				}
				}
				this.state = 647;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 648;
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
		this.enterRule(localctx, 106, ComposeParser.RULE_catch_all_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 650;
			this.match(ComposeParser.CATCH);
			this.state = 651;
			this.match(ComposeParser.LPAR);
			this.state = 652;
			this.match(ComposeParser.ETC);
			this.state = 653;
			this.match(ComposeParser.RPAR);
			this.state = 654;
			this.match(ComposeParser.LCURL);
			this.state = 658;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
				{
				{
				this.state = 655;
				this.statement();
				}
				}
				this.state = 660;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 661;
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
		this.enterRule(localctx, 108, ComposeParser.RULE_finally_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 663;
			this.match(ComposeParser.FINALLY);
			this.state = 664;
			this.match(ComposeParser.LCURL);
			this.state = 668;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
				{
				{
				this.state = 665;
				this.statement();
				}
				}
				this.state = 670;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 671;
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
		this.enterRule(localctx, 110, ComposeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 673;
			this.match(ComposeParser.BREAK);
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
		this.enterRule(localctx, 112, ComposeParser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this.match(ComposeParser.FOR);
			this.state = 676;
			this.match(ComposeParser.LPAR);
			this.state = 686;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===26) {
				{
				this.state = 677;
				this.match(ComposeParser.LET);
				this.state = 678;
				this.declare_one();
				this.state = 683;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 679;
					this.match(ComposeParser.COMMA);
					this.state = 680;
					this.declare_one();
					}
					}
					this.state = 685;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 688;
			this.match(ComposeParser.SEMI);
			this.state = 697;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 689;
				this.expression(0);
				this.state = 694;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 690;
					this.match(ComposeParser.COMMA);
					this.state = 691;
					this.expression(0);
					}
					}
					this.state = 696;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 699;
			this.match(ComposeParser.SEMI);
			this.state = 708;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 700;
				this.expression(0);
				this.state = 705;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 701;
					this.match(ComposeParser.COMMA);
					this.state = 702;
					this.expression(0);
					}
					}
					this.state = 707;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 710;
			this.match(ComposeParser.RPAR);
			this.state = 711;
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
		this.enterRule(localctx, 114, ComposeParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 713;
			this.match(ComposeParser.IF);
			this.state = 714;
			this.match(ComposeParser.LPAR);
			this.state = 715;
			this.expression(0);
			this.state = 716;
			this.match(ComposeParser.RPAR);
			this.state = 717;
			this.statements();
			this.state = 727;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 718;
					this.match(ComposeParser.ELSE);
					this.state = 719;
					this.match(ComposeParser.IF);
					this.state = 720;
					this.match(ComposeParser.LPAR);
					this.state = 721;
					this.expression(0);
					this.state = 722;
					this.match(ComposeParser.RPAR);
					this.state = 723;
					this.statements();
					}
					}
				}
				this.state = 729;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 78, this._ctx);
			}
			this.state = 734;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 730;
					this.match(ComposeParser.ELSE);
					this.state = 731;
					this.statements();
					}
					}
				}
				this.state = 736;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
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
		this.enterRule(localctx, 116, ComposeParser.RULE_statements);
		let _la: number;
		try {
			this.state = 746;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 81, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 737;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 738;
				this.match(ComposeParser.LCURL);
				this.state = 742;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 705620231) !== 0) || ((((_la - 58)) & ~0x1F) === 0 && ((1 << (_la - 58)) & 17268769) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1073052799) !== 0) || _la===551) {
					{
					{
					this.state = 739;
					this.statement();
					}
					}
					this.state = 744;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 745;
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
		this.enterRule(localctx, 118, ComposeParser.RULE_function_call_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 751;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 82, this._ctx) ) {
			case 1:
				{
				this.state = 748;
				this.expression(0);
				this.state = 749;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 753;
			this.function_call();
			this.state = 754;
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
	public declare_instances_statement(): Declare_instances_statementContext {
		let localctx: Declare_instances_statementContext = new Declare_instances_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, ComposeParser.RULE_declare_instances_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 756;
			_la = this._input.LA(1);
			if(!(_la===25 || _la===26)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 757;
			this.declare_one();
			this.state = 762;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===69) {
				{
				{
				this.state = 758;
				this.match(ComposeParser.COMMA);
				this.state = 759;
				this.declare_one();
				}
				}
				this.state = 764;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 765;
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
	public declare_one(): Declare_oneContext {
		let localctx: Declare_oneContext = new Declare_oneContext(this, this._ctx, this.state);
		this.enterRule(localctx, 122, ComposeParser.RULE_declare_one);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 767;
			this.identifier();
			this.state = 771;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 84, this._ctx) ) {
			case 1:
				{
				this.state = 768;
				this.match(ComposeParser.COLON);
				this.state = 769;
				this.value_type_or_null();
				}
				break;
			case 2:
				{
				this.state = 770;
				this.function_type_or_null();
				}
				break;
			}
			this.state = 775;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===88) {
				{
				this.state = 773;
				this.match(ComposeParser.ASSIGN);
				this.state = 774;
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
		this.enterRule(localctx, 124, ComposeParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 780;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 86, this._ctx) ) {
			case 1:
				{
				this.state = 777;
				localctx._parent = this.expression(0);
				this.state = 778;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 782;
			this.identifier();
			this.state = 783;
			this.assign_op();
			this.state = 784;
			localctx._value = this.expression(0);
			this.state = 785;
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
	public assign_op(): Assign_opContext {
		let localctx: Assign_opContext = new Assign_opContext(this, this._ctx, this.state);
		this.enterRule(localctx, 126, ComposeParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 787;
			_la = this._input.LA(1);
			if(!(((((_la - 88)) & ~0x1F) === 0 && ((1 << (_la - 88)) & 4095) !== 0))) {
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
		this.enterRule(localctx, 128, ComposeParser.RULE_assign_item_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 789;
			this.expression(0);
			this.state = 790;
			this.match(ComposeParser.LPAR);
			this.state = 791;
			this.expression(0);
			this.state = 792;
			this.match(ComposeParser.RPAR);
			this.state = 793;
			this.assign_op();
			this.state = 794;
			this.expression(0);
			this.state = 795;
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
	public return_statement(): Return_statementContext {
		let localctx: Return_statementContext = new Return_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 130, ComposeParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 797;
			this.match(ComposeParser.RETURN);
			this.state = 799;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 798;
				this.expression(0);
				}
			}

			this.state = 801;
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
		let _startState: number = 132;
		this.enterRecursionRule(localctx, 132, ComposeParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 870;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 91, this._ctx) ) {
			case 1:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 804;
				this.match(ComposeParser.NEW);
				this.state = 805;
				this.function_call();
				}
				break;
			case 2:
				{
				localctx = new SizeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 806;
				this.match(ComposeParser.SIZE_OF);
				this.state = 807;
				this.match(ComposeParser.LPAR);
				this.state = 808;
				this.value_type();
				this.state = 809;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 3:
				{
				localctx = new AlignofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 811;
				this.match(ComposeParser.ALIGN_OF);
				this.state = 812;
				this.match(ComposeParser.LPAR);
				this.state = 813;
				this.value_type();
				this.state = 814;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 4:
				{
				localctx = new OffsetofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 816;
				this.match(ComposeParser.OFFSET_OF);
				this.state = 817;
				this.match(ComposeParser.LPAR);
				this.state = 818;
				this.class_type();
				this.state = 821;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===69) {
					{
					this.state = 819;
					this.match(ComposeParser.COMMA);
					this.state = 820;
					this.attribute_ref();
					}
				}

				this.state = 823;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 5:
				{
				localctx = new SimpleCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 825;
				this.function_call();
				}
				break;
			case 6:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 826;
				this.match(ComposeParser.TYPE_OF);
				this.state = 833;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 50:
					{
					{
					this.state = 827;
					this.match(ComposeParser.LPAR);
					this.state = 828;
					this.expression(0);
					this.state = 829;
					this.match(ComposeParser.RPAR);
					}
					}
					break;
				case 40:
					{
					this.state = 831;
					this.match(ComposeParser.TYPE_OF);
					this.state = 832;
					this.expression(0);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 7:
				{
				localctx = new UnaryPreIncrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 835;
				this.match(ComposeParser.INC);
				this.state = 836;
				this.expression(27);
				}
				break;
			case 8:
				{
				localctx = new UnaryPreDecrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 837;
				this.match(ComposeParser.DEC);
				this.state = 838;
				this.expression(26);
				}
				break;
			case 9:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 839;
				this.match(ComposeParser.PLUS);
				this.state = 840;
				this.expression(25);
				}
				break;
			case 10:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 841;
				this.match(ComposeParser.MINUS);
				this.state = 842;
				this.expression(24);
				}
				break;
			case 11:
				{
				localctx = new UnaryBitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 843;
				this.match(ComposeParser.TILDE);
				this.state = 844;
				this.expression(23);
				}
				break;
			case 12:
				{
				localctx = new UnaryNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 845;
				this.match(ComposeParser.NOT);
				this.state = 846;
				this.expression(22);
				}
				break;
			case 13:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 847;
				this.match(ComposeParser.THIS);
				}
				break;
			case 14:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 848;
				this.identifier();
				}
				break;
			case 15:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 849;
				this.match(ComposeParser.SUPER);
				this.state = 854;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 90, this._ctx) ) {
				case 1:
					{
					this.state = 850;
					this.match(ComposeParser.LT);
					this.state = 851;
					this.identifier();
					this.state = 852;
					this.match(ComposeParser.GT);
					}
					break;
				}
				}
				break;
			case 16:
				{
				localctx = new LiteralExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 856;
				this.literal_expression();
				}
				break;
			case 17:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 857;
				this.match(ComposeParser.LPAR);
				this.state = 858;
				this.expression(0);
				this.state = 859;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 18:
				{
				localctx = new PreCastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 861;
				this.match(ComposeParser.LT);
				this.state = 862;
				this.value_type();
				this.state = 863;
				this.match(ComposeParser.GT);
				this.state = 864;
				this.expression(3);
				}
				break;
			case 19:
				{
				localctx = new AssignExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 866;
				this.identifier();
				this.state = 867;
				this.assign_op();
				this.state = 868;
				this.expression(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 936;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 934;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 92, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 872;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 873;
						_la = this._input.LA(1);
						if(!(((((_la - 77)) & ~0x1F) === 0 && ((1 << (_la - 77)) & 11) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 874;
						(localctx as MultiplyExpressionContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 875;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 876;
						_la = this._input.LA(1);
						if(!(_la===75 || _la===76)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 877;
						(localctx as AddExpressionContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 878;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 879;
						_la = this._input.LA(1);
						if(!(((((_la - 85)) & ~0x1F) === 0 && ((1 << (_la - 85)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 880;
						(localctx as BitShiftExpressionContext)._right = this.expression(20);
						}
						break;
					case 4:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 881;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 882;
						_la = this._input.LA(1);
						if(!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 883;
						(localctx as CompareExpressionContext)._right = this.expression(19);
						}
						break;
					case 5:
						{
						localctx = new InstanceofExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InstanceofExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 884;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 885;
						this.match(ComposeParser.INSTANCE_OF);
						this.state = 886;
						(localctx as InstanceofExpressionContext)._right = this.expression(18);
						}
						break;
					case 6:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 887;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 888;
						this.match(ComposeParser.IN);
						this.state = 889;
						(localctx as InExpressionContext)._right = this.expression(17);
						}
						break;
					case 7:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 890;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 891;
						_la = this._input.LA(1);
						if(!(_la===61 || _la===62)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 892;
						(localctx as EqualsExpressionContext)._right = this.expression(16);
						}
						break;
					case 8:
						{
						localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 893;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 894;
						this.match(ComposeParser.AMP);
						this.state = 895;
						(localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;
					case 9:
						{
						localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 896;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 897;
						this.match(ComposeParser.CARET);
						this.state = 898;
						(localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;
					case 10:
						{
						localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 899;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 900;
						this.match(ComposeParser.PIPE);
						this.state = 901;
						(localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;
					case 11:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 902;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 903;
						this.match(ComposeParser.AND);
						this.state = 904;
						(localctx as AndExpressionContext)._right = this.expression(12);
						}
						break;
					case 12:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 905;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 906;
						this.match(ComposeParser.OR);
						this.state = 907;
						(localctx as OrExpressionContext)._right = this.expression(11);
						}
						break;
					case 13:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._condition = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 908;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 909;
						this.match(ComposeParser.QUESTION);
						this.state = 910;
						(localctx as TernaryExpressionContext)._if_true = this.expression(0);
						this.state = 911;
						this.match(ComposeParser.COLON);
						this.state = 912;
						(localctx as TernaryExpressionContext)._if_false = this.expression(10);
						}
						break;
					case 14:
						{
						localctx = new ItemExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ItemExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 914;
						if (!(this.precpred(this._ctx, 38))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 38)");
						}
						this.state = 915;
						this.match(ComposeParser.LBRAK);
						this.state = 916;
						(localctx as ItemExpressionContext)._item = this.expression(0);
						this.state = 917;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 15:
						{
						localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 919;
						if (!(this.precpred(this._ctx, 37))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 37)");
						}
						this.state = 920;
						this.match(ComposeParser.DOT);
						this.state = 921;
						(localctx as MemberExpressionContext)._member = this.identifier();
						}
						break;
					case 16:
						{
						localctx = new ChildCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 922;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 923;
						this.match(ComposeParser.DOT);
						this.state = 924;
						this.function_call();
						}
						break;
					case 17:
						{
						localctx = new PostIncrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 925;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						 this.willNotContainLineTerminator()
						this.state = 927;
						this.match(ComposeParser.INC);
						}
						break;
					case 18:
						{
						localctx = new PostDecrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 928;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						 this.willNotContainLineTerminator()
						this.state = 930;
						this.match(ComposeParser.DEC);
						}
						break;
					case 19:
						{
						localctx = new CastAsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 931;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 932;
						this.match(ComposeParser.AS);
						this.state = 933;
						this.value_type();
						}
						break;
					}
					}
				}
				this.state = 938;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 93, this._ctx);
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
		this.enterRule(localctx, 134, ComposeParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 939;
			localctx._name = this.identifier();
			this.state = 951;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===58) {
				{
				this.state = 940;
				this.match(ComposeParser.LT);
				this.state = 941;
				this.value_type_or_null();
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 942;
					this.match(ComposeParser.COMMA);
					this.state = 943;
					this.value_type_or_null();
					}
					}
					this.state = 948;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 949;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 953;
			this.match(ComposeParser.LPAR);
			this.state = 962;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 954;
				this.expression(0);
				this.state = 959;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 955;
					this.match(ComposeParser.COMMA);
					this.state = 956;
					this.expression(0);
					}
					}
					this.state = 961;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 964;
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
		this.enterRule(localctx, 136, ComposeParser.RULE_literal_expression);
		try {
			this.state = 975;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 105:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 966;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 102:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 967;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 100:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 968;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 101:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 969;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 103:
				localctx = new CharLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 970;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 104:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 971;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 52:
				localctx = new ListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 972;
				this.list_literal();
				}
				break;
			case 58:
				localctx = new SetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 973;
				this.set_literal();
				}
				break;
			case 54:
				localctx = new MapLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 974;
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
		this.enterRule(localctx, 138, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 977;
			this.match(ComposeParser.LBRAK);
			this.state = 986;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 978;
				localctx._exp = this.expression(0);
				this.state = 983;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 979;
					this.match(ComposeParser.COMMA);
					this.state = 980;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 985;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 988;
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
		this.enterRule(localctx, 140, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 990;
			this.match(ComposeParser.LT);
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 2323888129) !== 0) || ((((_la - 63)) & ~0x1F) === 0 && ((1 << (_la - 63)) & 539649) !== 0) || ((((_la - 100)) & ~0x1F) === 0 && ((1 << (_la - 100)) & 1055931455) !== 0) || _la===551) {
				{
				this.state = 991;
				localctx._exp = this.expression(0);
				this.state = 996;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 992;
					this.match(ComposeParser.COMMA);
					this.state = 993;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 998;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1001;
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
		this.enterRule(localctx, 142, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1003;
			this.match(ComposeParser.LCURL);
			this.state = 1012;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1031183) !== 0) || _la===551) {
				{
				this.state = 1004;
				localctx._entry = this.map_entry();
				this.state = 1009;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===69) {
					{
					{
					this.state = 1005;
					this.match(ComposeParser.COMMA);
					this.state = 1006;
					localctx._entry = this.map_entry();
					}
					}
					this.state = 1011;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 1014;
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
		this.enterRule(localctx, 144, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1016;
			this.identifier();
			this.state = 1017;
			this.match(ComposeParser.COLON);
			this.state = 1018;
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
		this.enterRule(localctx, 146, ComposeParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1023;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 1020;
					this.expression(0);
					}
					}
				}
				this.state = 1025;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 105, this._ctx);
			}
			this.state = 1026;
			this.opcode();
			this.state = 1030;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===100) {
				{
				{
				this.state = 1027;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				}
				this.state = 1032;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 1033;
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
		this.enterRule(localctx, 148, ComposeParser.RULE_opcode);
		try {
			this.state = 1038;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 110:
			case 111:
			case 112:
			case 113:
			case 120:
			case 121:
			case 122:
			case 123:
			case 125:
			case 126:
			case 127:
			case 128:
			case 129:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 1035;
				this.plain_opcode();
				}
				break;
			case 114:
			case 115:
			case 116:
			case 117:
			case 118:
			case 119:
			case 124:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 1036;
				this.keyword_opcode();
				}
				break;
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
			case 292:
			case 293:
			case 294:
			case 295:
			case 296:
			case 297:
			case 298:
			case 299:
			case 300:
			case 301:
			case 302:
			case 303:
			case 304:
			case 305:
			case 306:
			case 307:
			case 308:
			case 309:
			case 310:
			case 311:
			case 312:
			case 313:
			case 314:
			case 315:
			case 316:
			case 317:
			case 318:
			case 319:
			case 320:
			case 321:
			case 322:
			case 323:
			case 324:
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 1037;
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
		this.enterRule(localctx, 150, ComposeParser.RULE_plain_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1040;
			_la = this._input.LA(1);
			if(!(((((_la - 110)) & ~0x1F) === 0 && ((1 << (_la - 110)) & 1031183) !== 0))) {
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
		this.enterRule(localctx, 152, ComposeParser.RULE_keyword_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1042;
			_la = this._input.LA(1);
			if(!(((((_la - 114)) & ~0x1F) === 0 && ((1 << (_la - 114)) & 1087) !== 0))) {
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
		this.enterRule(localctx, 154, ComposeParser.RULE_composite_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 1044;
			_la = this._input.LA(1);
			if(!(((((_la - 130)) & ~0x1F) === 0 && ((1 << (_la - 130)) & 4294967295) !== 0) || ((((_la - 162)) & ~0x1F) === 0 && ((1 << (_la - 162)) & 4294967295) !== 0) || ((((_la - 194)) & ~0x1F) === 0 && ((1 << (_la - 194)) & 4294967295) !== 0) || ((((_la - 226)) & ~0x1F) === 0 && ((1 << (_la - 226)) & 4294967295) !== 0) || ((((_la - 258)) & ~0x1F) === 0 && ((1 << (_la - 258)) & 4294967295) !== 0) || ((((_la - 290)) & ~0x1F) === 0 && ((1 << (_la - 290)) & 4294967295) !== 0) || ((((_la - 322)) & ~0x1F) === 0 && ((1 << (_la - 322)) & 4294967295) !== 0) || ((((_la - 354)) & ~0x1F) === 0 && ((1 << (_la - 354)) & 4294967295) !== 0) || ((((_la - 386)) & ~0x1F) === 0 && ((1 << (_la - 386)) & 4294967295) !== 0) || ((((_la - 418)) & ~0x1F) === 0 && ((1 << (_la - 418)) & 4294967295) !== 0) || ((((_la - 450)) & ~0x1F) === 0 && ((1 << (_la - 450)) & 4294967295) !== 0) || ((((_la - 482)) & ~0x1F) === 0 && ((1 << (_la - 482)) & 4294967295) !== 0) || ((((_la - 514)) & ~0x1F) === 0 && ((1 << (_la - 514)) & 4294967295) !== 0) || ((((_la - 546)) & ~0x1F) === 0 && ((1 << (_la - 546)) & 31) !== 0))) {
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
		case 32:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 34:
			return this.class_ref_sempred(localctx as Class_refContext, predIndex);
		case 37:
			return this.return_type_sempred(localctx as Return_typeContext, predIndex);
		case 44:
			return this.abstract_function_declaration_sempred(localctx as Abstract_function_declarationContext, predIndex);
		case 45:
			return this.concrete_function_declaration_sempred(localctx as Concrete_function_declarationContext, predIndex);
		case 46:
			return this.native_function_declaration_sempred(localctx as Native_function_declarationContext, predIndex);
		case 47:
			return this.function_prototype_sempred(localctx as Function_prototypeContext, predIndex);
		case 66:
			return this.expression_sempred(localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private attribute_ref_sempred(localctx: Attribute_refContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return  this.willBeLowercase() ;
		}
		return true;
	}
	private class_ref_sempred(localctx: Class_refContext, predIndex: number): boolean {
		switch (predIndex) {
		case 1:
			return  this.willBeUppercase() ;
		}
		return true;
	}
	private return_type_sempred(localctx: Return_typeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  !localctx.requireParenthesis ;
		}
		return true;
	}
	private abstract_function_declaration_sempred(localctx: Abstract_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return localctx.as_member;
		case 4:
			return !localctx.as_member;
		}
		return true;
	}
	private concrete_function_declaration_sempred(localctx: Concrete_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return localctx.as_member;
		case 6:
			return !localctx.as_member;
		}
		return true;
	}
	private native_function_declaration_sempred(localctx: Native_function_declarationContext, predIndex: number): boolean {
		switch (predIndex) {
		case 7:
			return localctx.as_member;
		case 8:
			return !localctx.as_member;
		}
		return true;
	}
	private function_prototype_sempred(localctx: Function_prototypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return  localctx.mandatory_return ;
		case 10:
			return  !localctx.mandatory_return ;
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 11:
			return this.precpred(this._ctx, 21);
		case 12:
			return this.precpred(this._ctx, 20);
		case 13:
			return this.precpred(this._ctx, 19);
		case 14:
			return this.precpred(this._ctx, 18);
		case 15:
			return this.precpred(this._ctx, 17);
		case 16:
			return this.precpred(this._ctx, 16);
		case 17:
			return this.precpred(this._ctx, 15);
		case 18:
			return this.precpred(this._ctx, 14);
		case 19:
			return this.precpred(this._ctx, 13);
		case 20:
			return this.precpred(this._ctx, 12);
		case 21:
			return this.precpred(this._ctx, 11);
		case 22:
			return this.precpred(this._ctx, 10);
		case 23:
			return this.precpred(this._ctx, 9);
		case 24:
			return this.precpred(this._ctx, 38);
		case 25:
			return this.precpred(this._ctx, 37);
		case 26:
			return this.precpred(this._ctx, 31);
		case 27:
			return this.precpred(this._ctx, 30);
		case 28:
			return this.precpred(this._ctx, 29);
		case 29:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,551,1047,2,0,7,0,
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
	75,7,75,2,76,7,76,2,77,7,77,1,0,1,0,5,0,159,8,0,10,0,12,0,162,9,0,1,1,5,
	1,165,8,1,10,1,12,1,168,9,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,177,8,2,10,
	2,12,2,180,9,2,1,2,1,2,3,2,184,8,2,1,2,1,2,1,2,1,2,5,2,190,8,2,10,2,12,
	2,193,9,2,1,2,1,2,3,2,197,8,2,1,2,1,2,1,2,1,2,1,3,1,3,1,4,1,4,3,4,207,8,
	4,1,5,5,5,210,8,5,10,5,12,5,213,9,5,1,5,1,5,3,5,217,8,5,3,5,219,8,5,1,5,
	1,5,1,6,5,6,224,8,6,10,6,12,6,227,9,6,1,6,1,6,3,6,231,8,6,3,6,233,8,6,1,
	6,1,6,1,6,1,6,3,6,239,8,6,1,7,1,7,1,7,1,7,1,7,1,7,5,7,247,8,7,10,7,12,7,
	250,9,7,1,7,1,7,1,8,1,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,3,10,
	266,8,10,1,11,1,11,1,11,1,11,1,11,3,11,273,8,11,1,12,1,12,1,12,3,12,278,
	8,12,1,13,1,13,1,13,3,13,283,8,13,1,14,1,14,1,15,1,15,1,15,3,15,290,8,15,
	1,16,1,16,1,17,1,17,3,17,296,8,17,1,18,1,18,1,18,1,18,1,18,1,18,3,18,304,
	8,18,1,19,1,19,3,19,308,8,19,1,20,1,20,1,21,1,21,1,22,1,22,1,23,1,23,1,
	24,1,24,1,25,1,25,1,26,1,26,1,27,1,27,1,28,1,28,1,29,1,29,1,30,1,30,1,31,
	1,31,1,31,3,31,335,8,31,1,32,1,32,1,32,3,32,340,8,32,1,33,1,33,1,34,1,34,
	1,34,1,35,1,35,1,35,1,35,1,35,5,35,352,8,35,10,35,12,35,355,9,35,3,35,357,
	8,35,1,35,3,35,360,8,35,1,35,1,35,1,35,1,36,1,36,1,36,3,36,368,8,36,1,37,
	1,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,378,8,37,1,38,1,38,1,38,1,38,5,
	38,384,8,38,10,38,12,38,387,9,38,3,38,389,8,38,1,39,1,39,1,39,1,39,1,39,
	1,39,1,39,1,39,1,39,3,39,400,8,39,1,40,3,40,403,8,40,1,40,3,40,406,8,40,
	1,40,1,40,1,40,1,40,1,40,1,40,5,40,414,8,40,10,40,12,40,417,9,40,1,40,1,
	40,3,40,421,8,40,1,40,1,40,1,40,1,40,5,40,427,8,40,10,40,12,40,430,9,40,
	3,40,432,8,40,1,40,1,40,5,40,436,8,40,10,40,12,40,439,9,40,1,40,5,40,442,
	8,40,10,40,12,40,445,9,40,1,40,1,40,1,41,1,41,1,42,3,42,452,8,42,1,42,3,
	42,455,8,42,1,42,1,42,1,42,1,42,1,42,1,43,1,43,1,43,3,43,465,8,43,1,44,
	1,44,3,44,469,8,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,1,44,3,
	44,481,8,44,1,45,1,45,3,45,485,8,45,1,45,3,45,488,8,45,1,45,1,45,1,45,5,
	45,493,8,45,10,45,12,45,496,9,45,1,45,1,45,1,45,1,45,1,45,1,45,1,45,5,45,
	505,8,45,10,45,12,45,508,9,45,1,45,1,45,3,45,512,8,45,1,46,1,46,3,46,516,
	8,46,1,46,1,46,1,46,1,46,1,46,5,46,523,8,46,10,46,12,46,526,9,46,1,46,1,
	46,1,46,1,46,1,46,1,46,1,46,1,46,5,46,536,8,46,10,46,12,46,539,9,46,1,46,
	1,46,3,46,543,8,46,1,47,1,47,1,47,1,47,1,47,5,47,550,8,47,10,47,12,47,553,
	9,47,1,47,1,47,3,47,557,8,47,1,47,1,47,1,47,1,47,5,47,563,8,47,10,47,12,
	47,566,9,47,3,47,568,8,47,1,47,1,47,1,47,1,47,1,47,1,47,1,47,3,47,577,8,
	47,3,47,579,8,47,1,48,1,48,1,48,3,48,584,8,48,1,49,5,49,587,8,49,10,49,
	12,49,590,9,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,1,49,3,49,602,
	8,49,1,50,1,50,1,50,1,50,1,51,1,51,1,51,5,51,611,8,51,10,51,12,51,614,9,
	51,1,51,1,51,5,51,618,8,51,10,51,12,51,621,9,51,1,51,3,51,624,8,51,1,51,
	3,51,627,8,51,1,52,1,52,1,52,1,52,1,52,1,52,1,52,5,52,636,8,52,10,52,12,
	52,639,9,52,1,52,1,52,1,52,5,52,644,8,52,10,52,12,52,647,9,52,1,52,1,52,
	1,53,1,53,1,53,1,53,1,53,1,53,5,53,657,8,53,10,53,12,53,660,9,53,1,53,1,
	53,1,54,1,54,1,54,5,54,667,8,54,10,54,12,54,670,9,54,1,54,1,54,1,55,1,55,
	1,56,1,56,1,56,1,56,1,56,1,56,5,56,682,8,56,10,56,12,56,685,9,56,3,56,687,
	8,56,1,56,1,56,1,56,1,56,5,56,693,8,56,10,56,12,56,696,9,56,3,56,698,8,
	56,1,56,1,56,1,56,1,56,5,56,704,8,56,10,56,12,56,707,9,56,3,56,709,8,56,
	1,56,1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,
	57,5,57,726,8,57,10,57,12,57,729,9,57,1,57,1,57,5,57,733,8,57,10,57,12,
	57,736,9,57,1,58,1,58,1,58,5,58,741,8,58,10,58,12,58,744,9,58,1,58,3,58,
	747,8,58,1,59,1,59,1,59,3,59,752,8,59,1,59,1,59,1,59,1,60,1,60,1,60,1,60,
	5,60,761,8,60,10,60,12,60,764,9,60,1,60,1,60,1,61,1,61,1,61,1,61,3,61,772,
	8,61,1,61,1,61,3,61,776,8,61,1,62,1,62,1,62,3,62,781,8,62,1,62,1,62,1,62,
	1,62,1,62,1,63,1,63,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,64,1,65,1,65,3,
	65,800,8,65,1,65,1,65,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,822,8,66,1,66,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,66,3,66,834,8,66,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,3,
	66,855,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,3,66,871,8,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,
	66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,
	1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,1,66,5,66,935,8,66,10,66,12,66,
	938,9,66,1,67,1,67,1,67,1,67,1,67,5,67,945,8,67,10,67,12,67,948,9,67,1,
	67,1,67,3,67,952,8,67,1,67,1,67,1,67,1,67,5,67,958,8,67,10,67,12,67,961,
	9,67,3,67,963,8,67,1,67,1,67,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,68,1,
	68,3,68,976,8,68,1,69,1,69,1,69,1,69,5,69,982,8,69,10,69,12,69,985,9,69,
	3,69,987,8,69,1,69,1,69,1,70,1,70,1,70,1,70,5,70,995,8,70,10,70,12,70,998,
	9,70,3,70,1000,8,70,1,70,1,70,1,71,1,71,1,71,1,71,5,71,1008,8,71,10,71,
	12,71,1011,9,71,3,71,1013,8,71,1,71,1,71,1,72,1,72,1,72,1,72,1,73,5,73,
	1022,8,73,10,73,12,73,1025,9,73,1,73,1,73,5,73,1029,8,73,10,73,12,73,1032,
	9,73,1,73,1,73,1,74,1,74,1,74,3,74,1039,8,74,1,75,1,75,1,76,1,76,1,77,1,
	77,1,77,0,1,132,78,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,
	38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,84,
	86,88,90,92,94,96,98,100,102,104,106,108,110,112,114,116,118,120,122,124,
	126,128,130,132,134,136,138,140,142,144,146,148,150,152,154,0,11,1,0,22,
	24,1,0,25,26,1,0,88,99,2,0,77,78,80,80,1,0,75,76,1,0,85,87,1,0,57,60,1,
	0,61,62,3,0,110,113,120,123,125,129,2,0,114,119,124,124,1,0,130,550,1139,
	0,156,1,0,0,0,2,166,1,0,0,0,4,169,1,0,0,0,6,202,1,0,0,0,8,206,1,0,0,0,10,
	211,1,0,0,0,12,225,1,0,0,0,14,240,1,0,0,0,16,253,1,0,0,0,18,257,1,0,0,0,
	20,265,1,0,0,0,22,267,1,0,0,0,24,277,1,0,0,0,26,279,1,0,0,0,28,284,1,0,
	0,0,30,289,1,0,0,0,32,291,1,0,0,0,34,295,1,0,0,0,36,303,1,0,0,0,38,307,
	1,0,0,0,40,309,1,0,0,0,42,311,1,0,0,0,44,313,1,0,0,0,46,315,1,0,0,0,48,
	317,1,0,0,0,50,319,1,0,0,0,52,321,1,0,0,0,54,323,1,0,0,0,56,325,1,0,0,0,
	58,327,1,0,0,0,60,329,1,0,0,0,62,331,1,0,0,0,64,339,1,0,0,0,66,341,1,0,
	0,0,68,343,1,0,0,0,70,359,1,0,0,0,72,364,1,0,0,0,74,377,1,0,0,0,76,388,
	1,0,0,0,78,399,1,0,0,0,80,402,1,0,0,0,82,448,1,0,0,0,84,451,1,0,0,0,86,
	464,1,0,0,0,88,480,1,0,0,0,90,511,1,0,0,0,92,542,1,0,0,0,94,544,1,0,0,0,
	96,580,1,0,0,0,98,588,1,0,0,0,100,603,1,0,0,0,102,607,1,0,0,0,104,628,1,
	0,0,0,106,650,1,0,0,0,108,663,1,0,0,0,110,673,1,0,0,0,112,675,1,0,0,0,114,
	713,1,0,0,0,116,746,1,0,0,0,118,751,1,0,0,0,120,756,1,0,0,0,122,767,1,0,
	0,0,124,780,1,0,0,0,126,787,1,0,0,0,128,789,1,0,0,0,130,797,1,0,0,0,132,
	870,1,0,0,0,134,939,1,0,0,0,136,975,1,0,0,0,138,977,1,0,0,0,140,990,1,0,
	0,0,142,1003,1,0,0,0,144,1016,1,0,0,0,146,1023,1,0,0,0,148,1038,1,0,0,0,
	150,1040,1,0,0,0,152,1042,1,0,0,0,154,1044,1,0,0,0,156,160,3,2,1,0,157,
	159,3,8,4,0,158,157,1,0,0,0,159,162,1,0,0,0,160,158,1,0,0,0,160,161,1,0,
	0,0,161,1,1,0,0,0,162,160,1,0,0,0,163,165,3,4,2,0,164,163,1,0,0,0,165,168,
	1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,167,3,1,0,0,0,168,166,1,0,0,0,169,
	196,5,46,0,0,170,183,3,20,10,0,171,172,5,69,0,0,172,173,5,54,0,0,173,178,
	3,20,10,0,174,175,5,69,0,0,175,177,3,20,10,0,176,174,1,0,0,0,177,180,1,
	0,0,0,178,176,1,0,0,0,178,179,1,0,0,0,179,181,1,0,0,0,180,178,1,0,0,0,181,
	182,5,55,0,0,182,184,1,0,0,0,183,171,1,0,0,0,183,184,1,0,0,0,184,197,1,
	0,0,0,185,186,5,54,0,0,186,191,3,20,10,0,187,188,5,69,0,0,188,190,3,20,
	10,0,189,187,1,0,0,0,190,193,1,0,0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,
	194,1,0,0,0,193,191,1,0,0,0,194,195,5,55,0,0,195,197,1,0,0,0,196,170,1,
	0,0,0,196,185,1,0,0,0,197,198,1,0,0,0,198,199,5,30,0,0,199,200,3,6,3,0,
	200,201,5,67,0,0,201,5,1,0,0,0,202,203,5,104,0,0,203,7,1,0,0,0,204,207,
	3,12,6,0,205,207,3,10,5,0,206,204,1,0,0,0,206,205,1,0,0,0,207,9,1,0,0,0,
	208,210,3,22,11,0,209,208,1,0,0,0,210,213,1,0,0,0,211,209,1,0,0,0,211,212,
	1,0,0,0,212,218,1,0,0,0,213,211,1,0,0,0,214,216,5,45,0,0,215,217,5,47,0,
	0,216,215,1,0,0,0,216,217,1,0,0,0,217,219,1,0,0,0,218,214,1,0,0,0,218,219,
	1,0,0,0,219,220,1,0,0,0,220,221,3,120,60,0,221,11,1,0,0,0,222,224,3,22,
	11,0,223,222,1,0,0,0,224,227,1,0,0,0,225,223,1,0,0,0,225,226,1,0,0,0,226,
	232,1,0,0,0,227,225,1,0,0,0,228,230,5,45,0,0,229,231,5,47,0,0,230,229,1,
	0,0,0,230,231,1,0,0,0,231,233,1,0,0,0,232,228,1,0,0,0,232,233,1,0,0,0,233,
	238,1,0,0,0,234,239,3,18,9,0,235,239,3,80,40,0,236,239,3,86,43,0,237,239,
	3,14,7,0,238,234,1,0,0,0,238,235,1,0,0,0,238,236,1,0,0,0,238,237,1,0,0,
	0,239,13,1,0,0,0,240,241,5,16,0,0,241,242,3,20,10,0,242,243,5,54,0,0,243,
	248,3,16,8,0,244,245,5,69,0,0,245,247,3,16,8,0,246,244,1,0,0,0,247,250,
	1,0,0,0,248,246,1,0,0,0,248,249,1,0,0,0,249,251,1,0,0,0,250,248,1,0,0,0,
	251,252,5,55,0,0,252,15,1,0,0,0,253,254,3,20,10,0,254,255,5,88,0,0,255,
	256,3,132,66,0,256,17,1,0,0,0,257,258,5,14,0,0,258,259,3,20,10,0,259,260,
	5,68,0,0,260,261,3,26,13,0,261,262,5,67,0,0,262,19,1,0,0,0,263,266,5,551,
	0,0,264,266,3,150,75,0,265,263,1,0,0,0,265,264,1,0,0,0,266,21,1,0,0,0,267,
	272,5,106,0,0,268,269,5,50,0,0,269,270,3,136,68,0,270,271,5,51,0,0,271,
	273,1,0,0,0,272,268,1,0,0,0,272,273,1,0,0,0,273,23,1,0,0,0,274,278,3,30,
	15,0,275,278,3,66,33,0,276,278,3,28,14,0,277,274,1,0,0,0,277,275,1,0,0,
	0,277,276,1,0,0,0,278,25,1,0,0,0,279,282,3,24,12,0,280,281,5,84,0,0,281,
	283,5,105,0,0,282,280,1,0,0,0,282,283,1,0,0,0,283,27,1,0,0,0,284,285,5,
	12,0,0,285,29,1,0,0,0,286,290,3,32,16,0,287,290,3,34,17,0,288,290,3,56,
	28,0,289,286,1,0,0,0,289,287,1,0,0,0,289,288,1,0,0,0,290,31,1,0,0,0,291,
	292,5,11,0,0,292,33,1,0,0,0,293,296,3,36,18,0,294,296,3,38,19,0,295,293,
	1,0,0,0,295,294,1,0,0,0,296,35,1,0,0,0,297,304,3,40,20,0,298,304,3,42,21,
	0,299,304,3,44,22,0,300,304,3,46,23,0,301,304,3,48,24,0,302,304,3,50,25,
	0,303,297,1,0,0,0,303,298,1,0,0,0,303,299,1,0,0,0,303,300,1,0,0,0,303,301,
	1,0,0,0,303,302,1,0,0,0,304,37,1,0,0,0,305,308,3,52,26,0,306,308,3,54,27,
	0,307,305,1,0,0,0,307,306,1,0,0,0,308,39,1,0,0,0,309,310,5,1,0,0,310,41,
	1,0,0,0,311,312,5,2,0,0,312,43,1,0,0,0,313,314,5,3,0,0,314,45,1,0,0,0,315,
	316,5,4,0,0,316,47,1,0,0,0,317,318,5,5,0,0,318,49,1,0,0,0,319,320,5,6,0,
	0,320,51,1,0,0,0,321,322,5,7,0,0,322,53,1,0,0,0,323,324,5,8,0,0,324,55,
	1,0,0,0,325,326,5,10,0,0,326,57,1,0,0,0,327,328,5,13,0,0,328,59,1,0,0,0,
	329,330,3,64,32,0,330,61,1,0,0,0,331,334,3,60,30,0,332,333,5,84,0,0,333,
	335,5,105,0,0,334,332,1,0,0,0,334,335,1,0,0,0,335,63,1,0,0,0,336,337,4,
	32,0,0,337,340,5,551,0,0,338,340,3,150,75,0,339,336,1,0,0,0,339,338,1,0,
	0,0,340,65,1,0,0,0,341,342,3,68,34,0,342,67,1,0,0,0,343,344,4,34,1,0,344,
	345,5,551,0,0,345,69,1,0,0,0,346,360,3,60,30,0,347,356,5,50,0,0,348,353,
	3,78,39,0,349,350,5,69,0,0,350,352,3,78,39,0,351,349,1,0,0,0,352,355,1,
	0,0,0,353,351,1,0,0,0,353,354,1,0,0,0,354,357,1,0,0,0,355,353,1,0,0,0,356,
	348,1,0,0,0,356,357,1,0,0,0,357,358,1,0,0,0,358,360,5,51,0,0,359,346,1,
	0,0,0,359,347,1,0,0,0,360,361,1,0,0,0,361,362,5,56,0,0,362,363,3,76,38,
	0,363,71,1,0,0,0,364,367,3,70,35,0,365,366,5,84,0,0,366,368,5,105,0,0,367,
	365,1,0,0,0,367,368,1,0,0,0,368,73,1,0,0,0,369,378,3,26,13,0,370,378,3,
	62,31,0,371,372,4,37,2,1,372,378,3,72,36,0,373,374,5,50,0,0,374,375,3,72,
	36,0,375,376,5,51,0,0,376,378,1,0,0,0,377,369,1,0,0,0,377,370,1,0,0,0,377,
	371,1,0,0,0,377,373,1,0,0,0,378,75,1,0,0,0,379,389,3,58,29,0,380,385,3,
	74,37,0,381,382,5,69,0,0,382,384,3,74,37,0,383,381,1,0,0,0,384,387,1,0,
	0,0,385,383,1,0,0,0,385,386,1,0,0,0,386,389,1,0,0,0,387,385,1,0,0,0,388,
	379,1,0,0,0,388,380,1,0,0,0,389,77,1,0,0,0,390,400,3,62,31,0,391,392,3,
	20,10,0,392,393,5,68,0,0,393,394,3,26,13,0,394,400,1,0,0,0,395,396,3,20,
	10,0,396,397,5,68,0,0,397,398,3,72,36,0,398,400,1,0,0,0,399,390,1,0,0,0,
	399,391,1,0,0,0,399,395,1,0,0,0,400,79,1,0,0,0,401,403,3,82,41,0,402,401,
	1,0,0,0,402,403,1,0,0,0,403,405,1,0,0,0,404,406,5,20,0,0,405,404,1,0,0,
	0,405,406,1,0,0,0,406,407,1,0,0,0,407,408,5,15,0,0,408,420,3,68,34,0,409,
	410,5,50,0,0,410,415,3,64,32,0,411,412,5,69,0,0,412,414,3,64,32,0,413,411,
	1,0,0,0,414,417,1,0,0,0,415,413,1,0,0,0,415,416,1,0,0,0,416,418,1,0,0,0,
	417,415,1,0,0,0,418,419,5,51,0,0,419,421,1,0,0,0,420,409,1,0,0,0,420,421,
	1,0,0,0,421,431,1,0,0,0,422,423,5,17,0,0,423,428,3,68,34,0,424,425,5,69,
	0,0,425,427,3,68,34,0,426,424,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,
	429,1,0,0,0,429,432,1,0,0,0,430,428,1,0,0,0,431,422,1,0,0,0,431,432,1,0,
	0,0,432,433,1,0,0,0,433,437,5,54,0,0,434,436,3,84,42,0,435,434,1,0,0,0,
	436,439,1,0,0,0,437,435,1,0,0,0,437,438,1,0,0,0,438,443,1,0,0,0,439,437,
	1,0,0,0,440,442,3,86,43,0,441,440,1,0,0,0,442,445,1,0,0,0,443,441,1,0,0,
	0,443,444,1,0,0,0,444,446,1,0,0,0,445,443,1,0,0,0,446,447,5,55,0,0,447,
	81,1,0,0,0,448,449,7,0,0,0,449,83,1,0,0,0,450,452,3,82,41,0,451,450,1,0,
	0,0,451,452,1,0,0,0,452,454,1,0,0,0,453,455,5,19,0,0,454,453,1,0,0,0,454,
	455,1,0,0,0,455,456,1,0,0,0,456,457,3,20,10,0,457,458,5,68,0,0,458,459,
	3,26,13,0,459,460,5,67,0,0,460,85,1,0,0,0,461,465,3,88,44,0,462,465,3,90,
	45,0,463,465,3,92,46,0,464,461,1,0,0,0,464,462,1,0,0,0,464,463,1,0,0,0,
	465,87,1,0,0,0,466,468,4,44,3,1,467,469,3,82,41,0,468,467,1,0,0,0,468,469,
	1,0,0,0,469,470,1,0,0,0,470,471,5,20,0,0,471,472,3,94,47,0,472,473,5,67,
	0,0,473,481,1,0,0,0,474,475,4,44,4,1,475,476,5,20,0,0,476,477,5,18,0,0,
	477,478,3,94,47,0,478,479,5,67,0,0,479,481,1,0,0,0,480,466,1,0,0,0,480,
	474,1,0,0,0,481,89,1,0,0,0,482,484,4,45,5,1,483,485,3,82,41,0,484,483,1,
	0,0,0,484,485,1,0,0,0,485,487,1,0,0,0,486,488,5,19,0,0,487,486,1,0,0,0,
	487,488,1,0,0,0,488,489,1,0,0,0,489,490,3,94,47,0,490,494,5,54,0,0,491,
	493,3,98,49,0,492,491,1,0,0,0,493,496,1,0,0,0,494,492,1,0,0,0,494,495,1,
	0,0,0,495,497,1,0,0,0,496,494,1,0,0,0,497,498,5,55,0,0,498,512,1,0,0,0,
	499,500,4,45,6,1,500,501,5,18,0,0,501,502,3,94,47,0,502,506,5,54,0,0,503,
	505,3,98,49,0,504,503,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,507,1,
	0,0,0,507,509,1,0,0,0,508,506,1,0,0,0,509,510,5,55,0,0,510,512,1,0,0,0,
	511,482,1,0,0,0,511,499,1,0,0,0,512,91,1,0,0,0,513,515,4,46,7,1,514,516,
	3,82,41,0,515,514,1,0,0,0,515,516,1,0,0,0,516,517,1,0,0,0,517,518,5,19,
	0,0,518,519,5,21,0,0,519,520,3,94,47,0,520,524,5,54,0,0,521,523,3,146,73,
	0,522,521,1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,527,
	1,0,0,0,526,524,1,0,0,0,527,528,5,55,0,0,528,543,1,0,0,0,529,530,4,46,8,
	1,530,531,5,21,0,0,531,532,5,18,0,0,532,533,3,94,47,0,533,537,5,54,0,0,
	534,536,3,146,73,0,535,534,1,0,0,0,536,539,1,0,0,0,537,535,1,0,0,0,537,
	538,1,0,0,0,538,540,1,0,0,0,539,537,1,0,0,0,540,541,5,55,0,0,541,543,1,
	0,0,0,542,513,1,0,0,0,542,529,1,0,0,0,543,93,1,0,0,0,544,556,3,20,10,0,
	545,546,5,58,0,0,546,551,3,96,48,0,547,548,5,69,0,0,548,550,3,96,48,0,549,
	547,1,0,0,0,550,553,1,0,0,0,551,549,1,0,0,0,551,552,1,0,0,0,552,554,1,0,
	0,0,553,551,1,0,0,0,554,555,5,57,0,0,555,557,1,0,0,0,556,545,1,0,0,0,556,
	557,1,0,0,0,557,558,1,0,0,0,558,567,5,50,0,0,559,564,3,78,39,0,560,561,
	5,69,0,0,561,563,3,78,39,0,562,560,1,0,0,0,563,566,1,0,0,0,564,562,1,0,
	0,0,564,565,1,0,0,0,565,568,1,0,0,0,566,564,1,0,0,0,567,559,1,0,0,0,567,
	568,1,0,0,0,568,569,1,0,0,0,569,578,5,51,0,0,570,571,4,47,9,1,571,572,5,
	68,0,0,572,579,3,76,38,0,573,576,4,47,10,1,574,575,5,68,0,0,575,577,3,76,
	38,0,576,574,1,0,0,0,576,577,1,0,0,0,577,579,1,0,0,0,578,570,1,0,0,0,578,
	573,1,0,0,0,579,95,1,0,0,0,580,583,3,68,34,0,581,582,5,17,0,0,582,584,3,
	24,12,0,583,581,1,0,0,0,583,584,1,0,0,0,584,97,1,0,0,0,585,587,3,22,11,
	0,586,585,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,601,
	1,0,0,0,590,588,1,0,0,0,591,602,3,120,60,0,592,602,3,124,62,0,593,602,3,
	128,64,0,594,602,3,118,59,0,595,602,3,114,57,0,596,602,3,112,56,0,597,602,
	3,102,51,0,598,602,3,100,50,0,599,602,3,130,65,0,600,602,3,110,55,0,601,
	591,1,0,0,0,601,592,1,0,0,0,601,593,1,0,0,0,601,594,1,0,0,0,601,595,1,0,
	0,0,601,596,1,0,0,0,601,597,1,0,0,0,601,598,1,0,0,0,601,599,1,0,0,0,601,
	600,1,0,0,0,602,99,1,0,0,0,603,604,5,118,0,0,604,605,3,132,66,0,605,606,
	5,67,0,0,606,101,1,0,0,0,607,608,5,116,0,0,608,612,5,54,0,0,609,611,3,98,
	49,0,610,609,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,613,
	615,1,0,0,0,614,612,1,0,0,0,615,619,5,55,0,0,616,618,3,104,52,0,617,616,
	1,0,0,0,618,621,1,0,0,0,619,617,1,0,0,0,619,620,1,0,0,0,620,623,1,0,0,0,
	621,619,1,0,0,0,622,624,3,106,53,0,623,622,1,0,0,0,623,624,1,0,0,0,624,
	626,1,0,0,0,625,627,3,108,54,0,626,625,1,0,0,0,626,627,1,0,0,0,627,103,
	1,0,0,0,628,629,5,117,0,0,629,630,5,50,0,0,630,631,3,20,10,0,631,632,5,
	68,0,0,632,637,3,24,12,0,633,634,5,84,0,0,634,636,3,24,12,0,635,633,1,0,
	0,0,636,639,1,0,0,0,637,635,1,0,0,0,637,638,1,0,0,0,638,640,1,0,0,0,639,
	637,1,0,0,0,640,641,5,51,0,0,641,645,5,54,0,0,642,644,3,98,49,0,643,642,
	1,0,0,0,644,647,1,0,0,0,645,643,1,0,0,0,645,646,1,0,0,0,646,648,1,0,0,0,
	647,645,1,0,0,0,648,649,5,55,0,0,649,105,1,0,0,0,650,651,5,117,0,0,651,
	652,5,50,0,0,652,653,5,70,0,0,653,654,5,51,0,0,654,658,5,54,0,0,655,657,
	3,98,49,0,656,655,1,0,0,0,657,660,1,0,0,0,658,656,1,0,0,0,658,659,1,0,0,
	0,659,661,1,0,0,0,660,658,1,0,0,0,661,662,5,55,0,0,662,107,1,0,0,0,663,
	664,5,37,0,0,664,668,5,54,0,0,665,667,3,98,49,0,666,665,1,0,0,0,667,670,
	1,0,0,0,668,666,1,0,0,0,668,669,1,0,0,0,669,671,1,0,0,0,670,668,1,0,0,0,
	671,672,5,55,0,0,672,109,1,0,0,0,673,674,5,36,0,0,674,111,1,0,0,0,675,676,
	5,33,0,0,676,686,5,50,0,0,677,678,5,26,0,0,678,683,3,122,61,0,679,680,5,
	69,0,0,680,682,3,122,61,0,681,679,1,0,0,0,682,685,1,0,0,0,683,681,1,0,0,
	0,683,684,1,0,0,0,684,687,1,0,0,0,685,683,1,0,0,0,686,677,1,0,0,0,686,687,
	1,0,0,0,687,688,1,0,0,0,688,697,5,67,0,0,689,694,3,132,66,0,690,691,5,69,
	0,0,691,693,3,132,66,0,692,690,1,0,0,0,693,696,1,0,0,0,694,692,1,0,0,0,
	694,695,1,0,0,0,695,698,1,0,0,0,696,694,1,0,0,0,697,689,1,0,0,0,697,698,
	1,0,0,0,698,699,1,0,0,0,699,708,5,67,0,0,700,705,3,132,66,0,701,702,5,69,
	0,0,702,704,3,132,66,0,703,701,1,0,0,0,704,707,1,0,0,0,705,703,1,0,0,0,
	705,706,1,0,0,0,706,709,1,0,0,0,707,705,1,0,0,0,708,700,1,0,0,0,708,709,
	1,0,0,0,709,710,1,0,0,0,710,711,5,51,0,0,711,712,3,116,58,0,712,113,1,0,
	0,0,713,714,5,114,0,0,714,715,5,50,0,0,715,716,3,132,66,0,716,717,5,51,
	0,0,717,727,3,116,58,0,718,719,5,115,0,0,719,720,5,114,0,0,720,721,5,50,
	0,0,721,722,3,132,66,0,722,723,5,51,0,0,723,724,3,116,58,0,724,726,1,0,
	0,0,725,718,1,0,0,0,726,729,1,0,0,0,727,725,1,0,0,0,727,728,1,0,0,0,728,
	734,1,0,0,0,729,727,1,0,0,0,730,731,5,115,0,0,731,733,3,116,58,0,732,730,
	1,0,0,0,733,736,1,0,0,0,734,732,1,0,0,0,734,735,1,0,0,0,735,115,1,0,0,0,
	736,734,1,0,0,0,737,747,3,98,49,0,738,742,5,54,0,0,739,741,3,98,49,0,740,
	739,1,0,0,0,741,744,1,0,0,0,742,740,1,0,0,0,742,743,1,0,0,0,743,745,1,0,
	0,0,744,742,1,0,0,0,745,747,5,55,0,0,746,737,1,0,0,0,746,738,1,0,0,0,747,
	117,1,0,0,0,748,749,3,132,66,0,749,750,5,71,0,0,750,752,1,0,0,0,751,748,
	1,0,0,0,751,752,1,0,0,0,752,753,1,0,0,0,753,754,3,134,67,0,754,755,5,67,
	0,0,755,119,1,0,0,0,756,757,7,1,0,0,757,762,3,122,61,0,758,759,5,69,0,0,
	759,761,3,122,61,0,760,758,1,0,0,0,761,764,1,0,0,0,762,760,1,0,0,0,762,
	763,1,0,0,0,763,765,1,0,0,0,764,762,1,0,0,0,765,766,5,67,0,0,766,121,1,
	0,0,0,767,771,3,20,10,0,768,769,5,68,0,0,769,772,3,26,13,0,770,772,3,72,
	36,0,771,768,1,0,0,0,771,770,1,0,0,0,771,772,1,0,0,0,772,775,1,0,0,0,773,
	774,5,88,0,0,774,776,3,132,66,0,775,773,1,0,0,0,775,776,1,0,0,0,776,123,
	1,0,0,0,777,778,3,132,66,0,778,779,5,71,0,0,779,781,1,0,0,0,780,777,1,0,
	0,0,780,781,1,0,0,0,781,782,1,0,0,0,782,783,3,20,10,0,783,784,3,126,63,
	0,784,785,3,132,66,0,785,786,5,67,0,0,786,125,1,0,0,0,787,788,7,2,0,0,788,
	127,1,0,0,0,789,790,3,132,66,0,790,791,5,50,0,0,791,792,3,132,66,0,792,
	793,5,51,0,0,793,794,3,126,63,0,794,795,3,132,66,0,795,796,5,67,0,0,796,
	129,1,0,0,0,797,799,5,124,0,0,798,800,3,132,66,0,799,798,1,0,0,0,799,800,
	1,0,0,0,800,801,1,0,0,0,801,802,5,67,0,0,802,131,1,0,0,0,803,804,6,66,-1,
	0,804,805,5,27,0,0,805,871,3,134,67,0,806,807,5,42,0,0,807,808,5,50,0,0,
	808,809,3,24,12,0,809,810,5,51,0,0,810,871,1,0,0,0,811,812,5,43,0,0,812,
	813,5,50,0,0,813,814,3,24,12,0,814,815,5,51,0,0,815,871,1,0,0,0,816,817,
	5,44,0,0,817,818,5,50,0,0,818,821,3,66,33,0,819,820,5,69,0,0,820,822,3,
	64,32,0,821,819,1,0,0,0,821,822,1,0,0,0,822,823,1,0,0,0,823,824,5,51,0,
	0,824,871,1,0,0,0,825,871,3,134,67,0,826,833,5,40,0,0,827,828,5,50,0,0,
	828,829,3,132,66,0,829,830,5,51,0,0,830,834,1,0,0,0,831,832,5,40,0,0,832,
	834,3,132,66,0,833,827,1,0,0,0,833,831,1,0,0,0,834,871,1,0,0,0,835,836,
	5,73,0,0,836,871,3,132,66,27,837,838,5,74,0,0,838,871,3,132,66,26,839,840,
	5,75,0,0,840,871,3,132,66,25,841,842,5,76,0,0,842,871,3,132,66,24,843,844,
	5,82,0,0,844,871,3,132,66,23,845,846,5,63,0,0,846,871,3,132,66,22,847,871,
	5,38,0,0,848,871,3,20,10,0,849,854,5,39,0,0,850,851,5,58,0,0,851,852,3,
	20,10,0,852,853,5,57,0,0,853,855,1,0,0,0,854,850,1,0,0,0,854,855,1,0,0,
	0,855,871,1,0,0,0,856,871,3,136,68,0,857,858,5,50,0,0,858,859,3,132,66,
	0,859,860,5,51,0,0,860,871,1,0,0,0,861,862,5,58,0,0,862,863,3,24,12,0,863,
	864,5,57,0,0,864,865,3,132,66,3,865,871,1,0,0,0,866,867,3,20,10,0,867,868,
	3,126,63,0,868,869,3,132,66,1,869,871,1,0,0,0,870,803,1,0,0,0,870,806,1,
	0,0,0,870,811,1,0,0,0,870,816,1,0,0,0,870,825,1,0,0,0,870,826,1,0,0,0,870,
	835,1,0,0,0,870,837,1,0,0,0,870,839,1,0,0,0,870,841,1,0,0,0,870,843,1,0,
	0,0,870,845,1,0,0,0,870,847,1,0,0,0,870,848,1,0,0,0,870,849,1,0,0,0,870,
	856,1,0,0,0,870,857,1,0,0,0,870,861,1,0,0,0,870,866,1,0,0,0,871,936,1,0,
	0,0,872,873,10,21,0,0,873,874,7,3,0,0,874,935,3,132,66,22,875,876,10,20,
	0,0,876,877,7,4,0,0,877,935,3,132,66,21,878,879,10,19,0,0,879,880,7,5,0,
	0,880,935,3,132,66,20,881,882,10,18,0,0,882,883,7,6,0,0,883,935,3,132,66,
	19,884,885,10,17,0,0,885,886,5,41,0,0,886,935,3,132,66,18,887,888,10,16,
	0,0,888,889,5,48,0,0,889,935,3,132,66,17,890,891,10,15,0,0,891,892,7,7,
	0,0,892,935,3,132,66,16,893,894,10,14,0,0,894,895,5,83,0,0,895,935,3,132,
	66,15,896,897,10,13,0,0,897,898,5,81,0,0,898,935,3,132,66,14,899,900,10,
	12,0,0,900,901,5,84,0,0,901,935,3,132,66,13,902,903,10,11,0,0,903,904,5,
	64,0,0,904,935,3,132,66,12,905,906,10,10,0,0,906,907,5,65,0,0,907,935,3,
	132,66,11,908,909,10,9,0,0,909,910,5,66,0,0,910,911,3,132,66,0,911,912,
	5,68,0,0,912,913,3,132,66,10,913,935,1,0,0,0,914,915,10,38,0,0,915,916,
	5,52,0,0,916,917,3,132,66,0,917,918,5,53,0,0,918,935,1,0,0,0,919,920,10,
	37,0,0,920,921,5,71,0,0,921,935,3,20,10,0,922,923,10,31,0,0,923,924,5,71,
	0,0,924,935,3,134,67,0,925,926,10,30,0,0,926,927,6,66,-1,0,927,935,5,73,
	0,0,928,929,10,29,0,0,929,930,6,66,-1,0,930,935,5,74,0,0,931,932,10,2,0,
	0,932,933,5,49,0,0,933,935,3,24,12,0,934,872,1,0,0,0,934,875,1,0,0,0,934,
	878,1,0,0,0,934,881,1,0,0,0,934,884,1,0,0,0,934,887,1,0,0,0,934,890,1,0,
	0,0,934,893,1,0,0,0,934,896,1,0,0,0,934,899,1,0,0,0,934,902,1,0,0,0,934,
	905,1,0,0,0,934,908,1,0,0,0,934,914,1,0,0,0,934,919,1,0,0,0,934,922,1,0,
	0,0,934,925,1,0,0,0,934,928,1,0,0,0,934,931,1,0,0,0,935,938,1,0,0,0,936,
	934,1,0,0,0,936,937,1,0,0,0,937,133,1,0,0,0,938,936,1,0,0,0,939,951,3,20,
	10,0,940,941,5,58,0,0,941,946,3,26,13,0,942,943,5,69,0,0,943,945,3,26,13,
	0,944,942,1,0,0,0,945,948,1,0,0,0,946,944,1,0,0,0,946,947,1,0,0,0,947,949,
	1,0,0,0,948,946,1,0,0,0,949,950,5,57,0,0,950,952,1,0,0,0,951,940,1,0,0,
	0,951,952,1,0,0,0,952,953,1,0,0,0,953,962,5,50,0,0,954,959,3,132,66,0,955,
	956,5,69,0,0,956,958,3,132,66,0,957,955,1,0,0,0,958,961,1,0,0,0,959,957,
	1,0,0,0,959,960,1,0,0,0,960,963,1,0,0,0,961,959,1,0,0,0,962,954,1,0,0,0,
	962,963,1,0,0,0,963,964,1,0,0,0,964,965,5,51,0,0,965,135,1,0,0,0,966,976,
	5,105,0,0,967,976,5,102,0,0,968,976,5,100,0,0,969,976,5,101,0,0,970,976,
	5,103,0,0,971,976,5,104,0,0,972,976,3,138,69,0,973,976,3,140,70,0,974,976,
	3,142,71,0,975,966,1,0,0,0,975,967,1,0,0,0,975,968,1,0,0,0,975,969,1,0,
	0,0,975,970,1,0,0,0,975,971,1,0,0,0,975,972,1,0,0,0,975,973,1,0,0,0,975,
	974,1,0,0,0,976,137,1,0,0,0,977,986,5,52,0,0,978,983,3,132,66,0,979,980,
	5,69,0,0,980,982,3,132,66,0,981,979,1,0,0,0,982,985,1,0,0,0,983,981,1,0,
	0,0,983,984,1,0,0,0,984,987,1,0,0,0,985,983,1,0,0,0,986,978,1,0,0,0,986,
	987,1,0,0,0,987,988,1,0,0,0,988,989,5,53,0,0,989,139,1,0,0,0,990,999,5,
	58,0,0,991,996,3,132,66,0,992,993,5,69,0,0,993,995,3,132,66,0,994,992,1,
	0,0,0,995,998,1,0,0,0,996,994,1,0,0,0,996,997,1,0,0,0,997,1000,1,0,0,0,
	998,996,1,0,0,0,999,991,1,0,0,0,999,1000,1,0,0,0,1000,1001,1,0,0,0,1001,
	1002,5,57,0,0,1002,141,1,0,0,0,1003,1012,5,54,0,0,1004,1009,3,144,72,0,
	1005,1006,5,69,0,0,1006,1008,3,144,72,0,1007,1005,1,0,0,0,1008,1011,1,0,
	0,0,1009,1007,1,0,0,0,1009,1010,1,0,0,0,1010,1013,1,0,0,0,1011,1009,1,0,
	0,0,1012,1004,1,0,0,0,1012,1013,1,0,0,0,1013,1014,1,0,0,0,1014,1015,5,55,
	0,0,1015,143,1,0,0,0,1016,1017,3,20,10,0,1017,1018,5,68,0,0,1018,1019,3,
	132,66,0,1019,145,1,0,0,0,1020,1022,3,132,66,0,1021,1020,1,0,0,0,1022,1025,
	1,0,0,0,1023,1021,1,0,0,0,1023,1024,1,0,0,0,1024,1026,1,0,0,0,1025,1023,
	1,0,0,0,1026,1030,3,148,74,0,1027,1029,5,100,0,0,1028,1027,1,0,0,0,1029,
	1032,1,0,0,0,1030,1028,1,0,0,0,1030,1031,1,0,0,0,1031,1033,1,0,0,0,1032,
	1030,1,0,0,0,1033,1034,5,67,0,0,1034,147,1,0,0,0,1035,1039,3,150,75,0,1036,
	1039,3,152,76,0,1037,1039,3,154,77,0,1038,1035,1,0,0,0,1038,1036,1,0,0,
	0,1038,1037,1,0,0,0,1039,149,1,0,0,0,1040,1041,7,8,0,0,1041,151,1,0,0,0,
	1042,1043,7,9,0,0,1043,153,1,0,0,0,1044,1045,7,10,0,0,1045,155,1,0,0,0,
	108,160,166,178,183,191,196,206,211,216,218,225,230,232,238,248,265,272,
	277,282,289,295,303,307,334,339,353,356,359,367,377,385,388,399,402,405,
	415,420,428,431,437,443,451,454,464,468,480,484,487,494,506,511,515,524,
	537,542,551,556,564,567,576,578,583,588,601,612,619,623,626,637,645,658,
	668,683,686,694,697,705,708,727,734,742,746,751,762,771,775,780,799,821,
	833,854,870,934,936,946,951,959,962,975,983,986,996,999,1009,1012,1023,
	1030,1038];

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
	public native_type(): Native_typeContext {
		return this.getTypedRuleContext(Native_typeContext, 0) as Native_typeContext;
	}
	public class_type(): Class_typeContext {
		return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
	}
	public any_type(): Any_typeContext {
		return this.getTypedRuleContext(Any_typeContext, 0) as Any_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_value_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterValue_type) {
	 		listener.enterValue_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitValue_type) {
	 		listener.exitValue_type(this);
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
	public isize_type(): Isize_typeContext {
		return this.getTypedRuleContext(Isize_typeContext, 0) as Isize_typeContext;
	}
	public u32_type(): U32_typeContext {
		return this.getTypedRuleContext(U32_typeContext, 0) as U32_typeContext;
	}
	public u64_type(): U64_typeContext {
		return this.getTypedRuleContext(U64_typeContext, 0) as U64_typeContext;
	}
	public usize_type(): Usize_typeContext {
		return this.getTypedRuleContext(Usize_typeContext, 0) as Usize_typeContext;
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


export class Isize_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ISIZE(): TerminalNode {
		return this.getToken(ComposeParser.ISIZE, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_isize_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterIsize_type) {
	 		listener.enterIsize_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitIsize_type) {
	 		listener.exitIsize_type(this);
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


export class Usize_typeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public USIZE(): TerminalNode {
		return this.getToken(ComposeParser.USIZE, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_usize_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUsize_type) {
	 		listener.enterUsize_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUsize_type) {
	 		listener.exitUsize_type(this);
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
	public declare_instances_statement(): Declare_instances_statementContext {
		return this.getTypedRuleContext(Declare_instances_statementContext, 0) as Declare_instances_statementContext;
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
	}
	public assign_item_statement(): Assign_item_statementContext {
		return this.getTypedRuleContext(Assign_item_statementContext, 0) as Assign_item_statementContext;
	}
	public function_call_statement(): Function_call_statementContext {
		return this.getTypedRuleContext(Function_call_statementContext, 0) as Function_call_statementContext;
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
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
	}
	public break_statement(): Break_statementContext {
		return this.getTypedRuleContext(Break_statementContext, 0) as Break_statementContext;
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
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
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
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
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
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
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
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
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
export class SizeofExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public SIZE_OF(): TerminalNode {
		return this.getToken(ComposeParser.SIZE_OF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterSizeofExpression) {
	 		listener.enterSizeofExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitSizeofExpression) {
	 		listener.exitSizeofExpression(this);
		}
	}
}
export class AlignofExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public ALIGN_OF(): TerminalNode {
		return this.getToken(ComposeParser.ALIGN_OF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public value_type(): Value_typeContext {
		return this.getTypedRuleContext(Value_typeContext, 0) as Value_typeContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAlignofExpression) {
	 		listener.enterAlignofExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAlignofExpression) {
	 		listener.exitAlignofExpression(this);
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
export class UnaryPreIncrementExpressionContext extends ExpressionContext {
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
	    if(listener.enterUnaryPreIncrementExpression) {
	 		listener.enterUnaryPreIncrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryPreIncrementExpression) {
	 		listener.exitUnaryPreIncrementExpression(this);
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
export class OffsetofExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public OFFSET_OF(): TerminalNode {
		return this.getToken(ComposeParser.OFFSET_OF, 0);
	}
	public LPAR(): TerminalNode {
		return this.getToken(ComposeParser.LPAR, 0);
	}
	public class_type(): Class_typeContext {
		return this.getTypedRuleContext(Class_typeContext, 0) as Class_typeContext;
	}
	public RPAR(): TerminalNode {
		return this.getToken(ComposeParser.RPAR, 0);
	}
	public COMMA(): TerminalNode {
		return this.getToken(ComposeParser.COMMA, 0);
	}
	public attribute_ref(): Attribute_refContext {
		return this.getTypedRuleContext(Attribute_refContext, 0) as Attribute_refContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterOffsetofExpression) {
	 		listener.enterOffsetofExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitOffsetofExpression) {
	 		listener.exitOffsetofExpression(this);
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
export class UnaryPreDecrementExpressionContext extends ExpressionContext {
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
	    if(listener.enterUnaryPreDecrementExpression) {
	 		listener.enterUnaryPreDecrementExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnaryPreDecrementExpression) {
	 		listener.exitUnaryPreDecrementExpression(this);
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
	public SELECT_TYPE(): TerminalNode {
		return this.getToken(ComposeParser.SELECT_TYPE, 0);
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
	public RETHROW(): TerminalNode {
		return this.getToken(ComposeParser.RETHROW, 0);
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
