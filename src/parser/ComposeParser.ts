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
	public static readonly VOID = 12;
	public static readonly ATTRIBUTE = 13;
	public static readonly CLASS = 14;
	public static readonly EXTENDS = 15;
	public static readonly FUNCTION = 16;
	public static readonly STATIC = 17;
	public static readonly ABSTRACT = 18;
	public static readonly NATIVE = 19;
	public static readonly PUBLIC = 20;
	public static readonly PROTECTED = 21;
	public static readonly PRIVATE = 22;
	public static readonly CONST = 23;
	public static readonly LET = 24;
	public static readonly NEW = 25;
	public static readonly GET = 26;
	public static readonly SET = 27;
	public static readonly SWITCH = 28;
	public static readonly CASE = 29;
	public static readonly FOR = 30;
	public static readonly DO = 31;
	public static readonly WHILE = 32;
	public static readonly BREAK = 33;
	public static readonly FINALLY = 34;
	public static readonly THIS = 35;
	public static readonly SUPER = 36;
	public static readonly TYPE_OF = 37;
	public static readonly INSTANCE_OF = 38;
	public static readonly IN = 39;
	public static readonly AS = 40;
	public static readonly LPAR = 41;
	public static readonly RPAR = 42;
	public static readonly LBRAK = 43;
	public static readonly RBRAK = 44;
	public static readonly LCURL = 45;
	public static readonly RCURL = 46;
	public static readonly ARROW = 47;
	public static readonly GT = 48;
	public static readonly LT = 49;
	public static readonly LTE = 50;
	public static readonly GTE = 51;
	public static readonly EQUALS = 52;
	public static readonly NOT_EQUALS = 53;
	public static readonly NOT = 54;
	public static readonly AND = 55;
	public static readonly OR = 56;
	public static readonly QUESTION = 57;
	public static readonly SEMI = 58;
	public static readonly COLON = 59;
	public static readonly COMMA = 60;
	public static readonly ETC = 61;
	public static readonly DOT = 62;
	public static readonly AT = 63;
	public static readonly INC = 64;
	public static readonly DEC = 65;
	public static readonly PLUS = 66;
	public static readonly MINUS = 67;
	public static readonly STAR = 68;
	public static readonly SLASH = 69;
	public static readonly BSLASH = 70;
	public static readonly PERCENT = 71;
	public static readonly CARET = 72;
	public static readonly TILDE = 73;
	public static readonly AMP = 74;
	public static readonly PIPE = 75;
	public static readonly LSHIFT = 76;
	public static readonly RSHIFT = 77;
	public static readonly URSHIFT = 78;
	public static readonly ASSIGN = 79;
	public static readonly ADD_ASSIGN = 80;
	public static readonly SUB_ASSIGN = 81;
	public static readonly MUL_ASSIGN = 82;
	public static readonly DIV_ASSIGN = 83;
	public static readonly AND_ASSIGN = 84;
	public static readonly OR_ASSIGN = 85;
	public static readonly XOR_ASSIGN = 86;
	public static readonly MOD_ASSIGN = 87;
	public static readonly LSHIFT_ASSIGN = 88;
	public static readonly RSHIFT_ASSIGN = 89;
	public static readonly URSHIFT_ASSIGN = 90;
	public static readonly INTEGER_LITERAL = 91;
	public static readonly DECIMAL_LITERAL = 92;
	public static readonly BOOLEAN_LITERAL = 93;
	public static readonly CHAR_LITERAL = 94;
	public static readonly STRING_LITERAL = 95;
	public static readonly NULL_LITERAL = 96;
	public static readonly ANNOTATION = 97;
	public static readonly WS = 98;
	public static readonly COMMENT = 99;
	public static readonly LINE_COMMENT = 100;
	public static readonly UNREACHABLE = 101;
	public static readonly NOP = 102;
	public static readonly BLOCK = 103;
	public static readonly LOOP = 104;
	public static readonly IF = 105;
	public static readonly ELSE = 106;
	public static readonly TRY = 107;
	public static readonly CATCH = 108;
	public static readonly THROW = 109;
	public static readonly RETHROW = 110;
	public static readonly END = 111;
	public static readonly BR = 112;
	public static readonly BR_IF = 113;
	public static readonly BR_TABLE = 114;
	public static readonly RETURN = 115;
	public static readonly CALL = 116;
	public static readonly CALL_INDIRECT = 117;
	public static readonly DROP = 118;
	public static readonly SELECT_TYPE = 119;
	public static readonly SELECT = 120;
	public static readonly LOCAL_GET = 121;
	public static readonly LOCAL_SET = 122;
	public static readonly LOCAL_TEE = 123;
	public static readonly GLOBAL_GET = 124;
	public static readonly GLOBAL_SET = 125;
	public static readonly I32_LOAD = 126;
	public static readonly I64_LOAD = 127;
	public static readonly F32_LOAD = 128;
	public static readonly F64_LOAD = 129;
	public static readonly I32_LOAD8_S = 130;
	public static readonly I32_LOAD8_U = 131;
	public static readonly I32_LOAD16_S = 132;
	public static readonly I32_LOAD16_U = 133;
	public static readonly I64_LOAD8_S = 134;
	public static readonly I64_LOAD8_U = 135;
	public static readonly I64_LOAD16_S = 136;
	public static readonly I64_LOAD16_U = 137;
	public static readonly I64_LOAD32_S = 138;
	public static readonly I64_LOAD32_U = 139;
	public static readonly I32_STORE = 140;
	public static readonly I64_STORE = 141;
	public static readonly F32_STORE = 142;
	public static readonly F64_STORE = 143;
	public static readonly I32_STORE8 = 144;
	public static readonly I32_STORE16 = 145;
	public static readonly I64_STORE8 = 146;
	public static readonly I64_STORE16 = 147;
	public static readonly I64_STORE32 = 148;
	public static readonly MEMORY_SIZE = 149;
	public static readonly MEMORY_GROW = 150;
	public static readonly I32_CONST = 151;
	public static readonly I64_CONST = 152;
	public static readonly F32_CONST = 153;
	public static readonly F64_CONST = 154;
	public static readonly I32_EQZ = 155;
	public static readonly I32_EQ = 156;
	public static readonly I32_NE = 157;
	public static readonly I32_LT_S = 158;
	public static readonly I32_LT_U = 159;
	public static readonly I32_GT_S = 160;
	public static readonly I32_GT_U = 161;
	public static readonly I32_LE_S = 162;
	public static readonly I32_LE_U = 163;
	public static readonly I32_GE_S = 164;
	public static readonly I32_GE_U = 165;
	public static readonly I64_EQZ = 166;
	public static readonly I64_EQ = 167;
	public static readonly I64_NE = 168;
	public static readonly I64_LT_S = 169;
	public static readonly I64_LT_U = 170;
	public static readonly I64_GT_S = 171;
	public static readonly I64_GT_U = 172;
	public static readonly I64_LE_S = 173;
	public static readonly I64_LE_U = 174;
	public static readonly I64_GE_S = 175;
	public static readonly I64_GE_U = 176;
	public static readonly F32_EQ = 177;
	public static readonly F32_NE = 178;
	public static readonly F32_LT = 179;
	public static readonly F32_GT = 180;
	public static readonly F32_LE = 181;
	public static readonly F32_GE = 182;
	public static readonly F64_EQ = 183;
	public static readonly F64_NE = 184;
	public static readonly F64_LT = 185;
	public static readonly F64_GT = 186;
	public static readonly F64_LE = 187;
	public static readonly F64_GE = 188;
	public static readonly I32_CLZ = 189;
	public static readonly I32_CTZ = 190;
	public static readonly I32_POPCNT = 191;
	public static readonly I32_ADD = 192;
	public static readonly I32_SUB = 193;
	public static readonly I32_MUL = 194;
	public static readonly I32_DIV_S = 195;
	public static readonly I32_DIV_U = 196;
	public static readonly I32_REM_S = 197;
	public static readonly I32_REM_U = 198;
	public static readonly I32_AND = 199;
	public static readonly I32_OR = 200;
	public static readonly I32_XOR = 201;
	public static readonly I32_SHL = 202;
	public static readonly I32_SHR_S = 203;
	public static readonly I32_SHR_U = 204;
	public static readonly I32_ROTL = 205;
	public static readonly I32_ROTR = 206;
	public static readonly I64_CLZ = 207;
	public static readonly I64_CTZ = 208;
	public static readonly I64_POPCNT = 209;
	public static readonly I64_ADD = 210;
	public static readonly I64_SUB = 211;
	public static readonly I64_MUL = 212;
	public static readonly I64_DIV_S = 213;
	public static readonly I64_DIV_U = 214;
	public static readonly I64_REM_S = 215;
	public static readonly I64_REM_U = 216;
	public static readonly I64_AND = 217;
	public static readonly I64_OR = 218;
	public static readonly I64_XOR = 219;
	public static readonly I64_SHL = 220;
	public static readonly I64_SHR_S = 221;
	public static readonly I64_SHR_U = 222;
	public static readonly I64_ROTL = 223;
	public static readonly I64_ROTR = 224;
	public static readonly F32_ABS = 225;
	public static readonly F32_NEG = 226;
	public static readonly F32_CEIL = 227;
	public static readonly F32_FLOOR = 228;
	public static readonly F32_TRUNC = 229;
	public static readonly F32_NEAREST = 230;
	public static readonly F32_SQRT = 231;
	public static readonly F32_ADD = 232;
	public static readonly F32_SUB = 233;
	public static readonly F32_MUL = 234;
	public static readonly F32_DIV = 235;
	public static readonly F32_MIN = 236;
	public static readonly F32_MAX = 237;
	public static readonly F32_COPYSIGN = 238;
	public static readonly F64_ABS = 239;
	public static readonly F64_NEG = 240;
	public static readonly F64_CEIL = 241;
	public static readonly F64_FLOOR = 242;
	public static readonly F64_TRUNC = 243;
	public static readonly F64_NEAREST = 244;
	public static readonly F64_SQRT = 245;
	public static readonly F64_ADD = 246;
	public static readonly F64_SUB = 247;
	public static readonly F64_MUL = 248;
	public static readonly F64_DIV = 249;
	public static readonly F64_MIN = 250;
	public static readonly F64_MAX = 251;
	public static readonly F64_COPYSIGN = 252;
	public static readonly I32_WRAP_I64 = 253;
	public static readonly I32_TRUNC_F32_S = 254;
	public static readonly I32_TRUNC_F32_U = 255;
	public static readonly I32_TRUNC_F64_S = 256;
	public static readonly I32_TRUNC_F64_U = 257;
	public static readonly I64_EXTEND_I32_S = 258;
	public static readonly I64_EXTEND_I32_U = 259;
	public static readonly I64_TRUNC_F32_S = 260;
	public static readonly I64_TRUNC_F32_U = 261;
	public static readonly I64_TRUNC_F64_S = 262;
	public static readonly I64_TRUNC_F64_U = 263;
	public static readonly F32_CONVERT_I32_S = 264;
	public static readonly F32_CONVERT_I32_U = 265;
	public static readonly F32_CONVERT_I64_S = 266;
	public static readonly F32_CONVERT_I64_U = 267;
	public static readonly F32_DEMOTE_F64 = 268;
	public static readonly F64_CONVERT_I32_S = 269;
	public static readonly F64_CONVERT_I32_U = 270;
	public static readonly F64_CONVERT_I64_S = 271;
	public static readonly F64_CONVERT_I64_U = 272;
	public static readonly F64_PROMOTE_F32 = 273;
	public static readonly I32_REINTERPRET_F32 = 274;
	public static readonly I64_REINTERPRET_F64 = 275;
	public static readonly F32_REINTERPRET_I32 = 276;
	public static readonly F64_REINTERPRET_I64 = 277;
	public static readonly I32_EXTEND8_S = 278;
	public static readonly I32_EXTEND16_S = 279;
	public static readonly I64_EXTEND8_S = 280;
	public static readonly I64_EXTEND16_S = 281;
	public static readonly I64_EXTEND32_S = 282;
	public static readonly I32_TRUNC_SAT_F32_S = 283;
	public static readonly I32_TRUNC_SAT_F32_U = 284;
	public static readonly I32_TRUNC_SAT_F64_S = 285;
	public static readonly I32_TRUNC_SAT_F64_U = 286;
	public static readonly I64_TRUNC_SAT_F32_S = 287;
	public static readonly I64_TRUNC_SAT_F32_U = 288;
	public static readonly I64_TRUNC_SAT_F64_S = 289;
	public static readonly I64_TRUNC_SAT_F64_U = 290;
	public static readonly MEMORY_INIT = 291;
	public static readonly DATA_DROP = 292;
	public static readonly MEMORY_COPY = 293;
	public static readonly MEMORY_FILL = 294;
	public static readonly TABLE_INIT = 295;
	public static readonly ELEM_DROP = 296;
	public static readonly TABLE_COPY = 297;
	public static readonly TABLE_GET = 298;
	public static readonly TABLE_SET = 299;
	public static readonly TABLE_GROW = 300;
	public static readonly TABLE_SIZE = 301;
	public static readonly TABLE_FILL = 302;
	public static readonly REF_NULL = 303;
	public static readonly REF_IS_NULL = 304;
	public static readonly REF_FUNC = 305;
	public static readonly V128_LOAD = 306;
	public static readonly V128_LOAD8X8_S = 307;
	public static readonly V128_LOAD8X8_U = 308;
	public static readonly V128_LOAD16X4_S = 309;
	public static readonly V128_LOAD16X4_U = 310;
	public static readonly V128_LOAD32X2_S = 311;
	public static readonly V128_LOAD32X2_U = 312;
	public static readonly V128_LOAD8_SPLAT = 313;
	public static readonly V128_LOAD16_SPLAT = 314;
	public static readonly V128_LOAD32_SPLAT = 315;
	public static readonly V128_LOAD64_SPLAT = 316;
	public static readonly V128_STORE = 317;
	public static readonly V128_CONST = 318;
	public static readonly I8X16_SHUFFLE = 319;
	public static readonly I8X16_SWIZZLE = 320;
	public static readonly I8X16_SPLAT = 321;
	public static readonly I16X8_SPLAT = 322;
	public static readonly I32X4_SPLAT = 323;
	public static readonly I64X2_SPLAT = 324;
	public static readonly F32X4_SPLAT = 325;
	public static readonly F64X2_SPLAT = 326;
	public static readonly I8X16_EXTRACT_LANE_S = 327;
	public static readonly I8X16_EXTRACT_LANE_U = 328;
	public static readonly I8X16_REPLACE_LANE = 329;
	public static readonly I16X8_EXTRACT_LANE_S = 330;
	public static readonly I16X8_EXTRACT_LANE_U = 331;
	public static readonly I16X8_REPLACE_LANE = 332;
	public static readonly I32X4_EXTRACT_LANE = 333;
	public static readonly I32X4_REPLACE_LANE = 334;
	public static readonly I64X2_EXTRACT_LANE = 335;
	public static readonly I64X2_REPLACE_LANE = 336;
	public static readonly F32X4_EXTRACT_LANE = 337;
	public static readonly F32X4_REPLACE_LANE = 338;
	public static readonly F64X2_EXTRACT_LANE = 339;
	public static readonly F64X2_REPLACE_LANE = 340;
	public static readonly I8X16_EQ = 341;
	public static readonly I8X16_NE = 342;
	public static readonly I8X16_LT_S = 343;
	public static readonly I8X16_LT_U = 344;
	public static readonly I8X16_GT_S = 345;
	public static readonly I8X16_GT_U = 346;
	public static readonly I8X16_LE_S = 347;
	public static readonly I8X16_LE_U = 348;
	public static readonly I8X16_GE_S = 349;
	public static readonly I8X16_GE_U = 350;
	public static readonly I16X8_EQ = 351;
	public static readonly I16X8_NE = 352;
	public static readonly I16X8_LT_S = 353;
	public static readonly I16X8_LT_U = 354;
	public static readonly I16X8_GT_S = 355;
	public static readonly I16X8_GT_U = 356;
	public static readonly I16X8_LE_S = 357;
	public static readonly I16X8_LE_U = 358;
	public static readonly I16X8_GE_S = 359;
	public static readonly I16X8_GE_U = 360;
	public static readonly I32X4_EQ = 361;
	public static readonly I32X4_NE = 362;
	public static readonly I32X4_LT_S = 363;
	public static readonly I32X4_LT_U = 364;
	public static readonly I32X4_GT_S = 365;
	public static readonly I32X4_GT_U = 366;
	public static readonly I32X4_LE_S = 367;
	public static readonly I32X4_LE_U = 368;
	public static readonly I32X4_GE_S = 369;
	public static readonly I32X4_GE_U = 370;
	public static readonly F32X4_EQ = 371;
	public static readonly F32X4_NE = 372;
	public static readonly F32X4_LT = 373;
	public static readonly F32X4_GT = 374;
	public static readonly F32X4_LE = 375;
	public static readonly F32X4_GE = 376;
	public static readonly F64X2_EQ = 377;
	public static readonly F64X2_NE = 378;
	public static readonly F64X2_LT = 379;
	public static readonly F64X2_GT = 380;
	public static readonly F64X2_LE = 381;
	public static readonly F64X2_GE = 382;
	public static readonly V128_NOT = 383;
	public static readonly V128_AND = 384;
	public static readonly V128_ANDNOT = 385;
	public static readonly V128_OR = 386;
	public static readonly V128_XOR = 387;
	public static readonly V128_BITSELECT = 388;
	public static readonly V128_ANY_TRUE = 389;
	public static readonly V128_LOAD8_LANE = 390;
	public static readonly V128_LOAD16_LANE = 391;
	public static readonly V128_LOAD32_LANE = 392;
	public static readonly V128_LOAD64_LANE = 393;
	public static readonly V128_STORE8_LANE = 394;
	public static readonly V128_STORE16_LANE = 395;
	public static readonly V128_STORE32_LANE = 396;
	public static readonly V128_STORE64_LANE = 397;
	public static readonly V128_LOAD32_ZERO = 398;
	public static readonly V128_LOAD64_ZERO = 399;
	public static readonly F32X4_DEMOTE_F64X2_ZERO = 400;
	public static readonly F64X2_PROMOTE_LOW_F32X4 = 401;
	public static readonly I8X16_ABS = 402;
	public static readonly I8X16_NEG = 403;
	public static readonly I8X16_POPCNT = 404;
	public static readonly I8X16_ALL_TRUE = 405;
	public static readonly I8X16_BITMASK = 406;
	public static readonly I8X16_NARROW_I16X8_S = 407;
	public static readonly I8X16_NARROW_I16X8_U = 408;
	public static readonly I8X16_SHL = 409;
	public static readonly I8X16_SHR_S = 410;
	public static readonly I8X16_SHR_U = 411;
	public static readonly I8X16_ADD = 412;
	public static readonly I8X16_ADD_SAT_S = 413;
	public static readonly I8X16_ADD_SAT_U = 414;
	public static readonly I8X16_SUB = 415;
	public static readonly I8X16_SUB_SAT_S = 416;
	public static readonly I8X16_SUB_SAT_U = 417;
	public static readonly I8X16_MIN_S = 418;
	public static readonly I8X16_MIN_U = 419;
	public static readonly I8X16_MAX_S = 420;
	public static readonly I8X16_MAX_U = 421;
	public static readonly I8X16_AVGR_U = 422;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_S = 423;
	public static readonly I16X8_EXTADD_PAIRWISE_I8X16_U = 424;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_S = 425;
	public static readonly I32X4_EXTADD_PAIRWISE_I16X8_U = 426;
	public static readonly I16X8_ABS = 427;
	public static readonly I16X8_NEG = 428;
	public static readonly I16X8_Q15MULR_SAT_S = 429;
	public static readonly I16X8_ALL_TRUE = 430;
	public static readonly I16X8_BITMASK = 431;
	public static readonly I16X8_NARROW_I32X4_S = 432;
	public static readonly I16X8_NARROW_I32X4_U = 433;
	public static readonly I16X8_EXTEND_LOW_I8X16_S = 434;
	public static readonly I16X8_EXTEND_HIGH_I8X16_S = 435;
	public static readonly I16X8_EXTEND_LOW_I8X16_U = 436;
	public static readonly I16X8_EXTEND_HIGH_I8X16_U = 437;
	public static readonly I16X8_SHL = 438;
	public static readonly I16X8_SHR_S = 439;
	public static readonly I16X8_SHR_U = 440;
	public static readonly I16X8_ADD = 441;
	public static readonly I16X8_ADD_SAT_S = 442;
	public static readonly I16X8_ADD_SAT_U = 443;
	public static readonly I16X8_SUB = 444;
	public static readonly I16X8_SUB_SAT_S = 445;
	public static readonly I16X8_SUB_SAT_U = 446;
	public static readonly I16X8_MUL = 447;
	public static readonly I16X8_MIN_S = 448;
	public static readonly I16X8_MIN_U = 449;
	public static readonly I16X8_MAX_S = 450;
	public static readonly I16X8_MAX_U = 451;
	public static readonly I16X8_AVGR_U = 452;
	public static readonly I16X8_EXTMUL_LOW_I8X16_S = 453;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_S = 454;
	public static readonly I16X8_EXTMUL_LOW_I8X16_U = 455;
	public static readonly I16X8_EXTMUL_HIGH_I8X16_U = 456;
	public static readonly I32X4_ABS = 457;
	public static readonly I32X4_NEG = 458;
	public static readonly I32X4_ALL_TRUE = 459;
	public static readonly I32X4_BITMASK = 460;
	public static readonly I32X4_EXTEND_LOW_I16X8_S = 461;
	public static readonly I32X4_EXTEND_HIGH_I16X8_S = 462;
	public static readonly I32X4_EXTEND_LOW_I16X8_U = 463;
	public static readonly I32X4_EXTEND_HIGH_I16X8_U = 464;
	public static readonly I32X4_SHL = 465;
	public static readonly I32X4_SHR_S = 466;
	public static readonly I32X4_SHR_U = 467;
	public static readonly I32X4_ADD = 468;
	public static readonly I32X4_SUB = 469;
	public static readonly I32X4_MUL = 470;
	public static readonly I32X4_MIN_S = 471;
	public static readonly I32X4_MIN_U = 472;
	public static readonly I32X4_MAX_S = 473;
	public static readonly I32X4_MAX_U = 474;
	public static readonly I32X4_DOT_I16X8_S = 475;
	public static readonly I32X4_EXTMUL_LOW_I16X8_S = 476;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_S = 477;
	public static readonly I32X4_EXTMUL_LOW_I16X8_U = 478;
	public static readonly I32X4_EXTMUL_HIGH_I16X8_U = 479;
	public static readonly I64X2_ABS = 480;
	public static readonly I64X2_NEG = 481;
	public static readonly I64X2_ALL_TRUE = 482;
	public static readonly I64X2_BITMASK = 483;
	public static readonly I64X2_EXTEND_LOW_I32X4_S = 484;
	public static readonly I64X2_EXTEND_HIGH_I32X4_S = 485;
	public static readonly I64X2_EXTEND_LOW_I32X4_U = 486;
	public static readonly I64X2_EXTEND_HIGH_I32X4_U = 487;
	public static readonly I64X2_SHL = 488;
	public static readonly I64X2_SHR_S = 489;
	public static readonly I64X2_SHR_U = 490;
	public static readonly I64X2_ADD = 491;
	public static readonly I64X2_SUB = 492;
	public static readonly I64X2_MUL = 493;
	public static readonly I64X2_EQ = 494;
	public static readonly I64X2_NE = 495;
	public static readonly I64X2_LT_S = 496;
	public static readonly I64X2_GT_S = 497;
	public static readonly I64X2_LE_S = 498;
	public static readonly I64X2_GE_S = 499;
	public static readonly I64X2_EXTMUL_LOW_I32X4_S = 500;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_S = 501;
	public static readonly I64X2_EXTMUL_LOW_I32X4_U = 502;
	public static readonly I64X2_EXTMUL_HIGH_I32X4_U = 503;
	public static readonly F32X4_CEIL = 504;
	public static readonly F32X4_FLOOR = 505;
	public static readonly F32X4_TRUNC = 506;
	public static readonly F32X4_NEAREST = 507;
	public static readonly F64X2_CEIL = 508;
	public static readonly F64X2_FLOOR = 509;
	public static readonly F64X2_TRUNC = 510;
	public static readonly F64X2_NEAREST = 511;
	public static readonly F32X4_ABS = 512;
	public static readonly F32X4_NEG = 513;
	public static readonly F32X4_SQRT = 514;
	public static readonly F32X4_ADD = 515;
	public static readonly F32X4_SUB = 516;
	public static readonly F32X4_MUL = 517;
	public static readonly F32X4_DIV = 518;
	public static readonly F32X4_MIN = 519;
	public static readonly F32X4_MAX = 520;
	public static readonly F32X4_PMIN = 521;
	public static readonly F32X4_PMAX = 522;
	public static readonly F64X2_ABS = 523;
	public static readonly F64X2_NEG = 524;
	public static readonly F64X2_SQRT = 525;
	public static readonly F64X2_ADD = 526;
	public static readonly F64X2_SUB = 527;
	public static readonly F64X2_MUL = 528;
	public static readonly F64X2_DIV = 529;
	public static readonly F64X2_MIN = 530;
	public static readonly F64X2_MAX = 531;
	public static readonly F64X2_PMIN = 532;
	public static readonly F64X2_PMAX = 533;
	public static readonly I32X4_TRUNC_SAT_F32X4_S = 534;
	public static readonly I32X4_TRUNC_SAT_F32X4_U = 535;
	public static readonly F32X4_CONVERT_I32X4_S = 536;
	public static readonly F32X4_CONVERT_I32X4_U = 537;
	public static readonly I32X4_TRUNC_SAT_F64X2_S_ZERO = 538;
	public static readonly I32X4_TRUNC_SAT_F64X2_U_ZERO = 539;
	public static readonly F64X2_CONVERT_LOW_I32X4_S = 540;
	public static readonly F64X2_CONVERT_LOW_I32X4_U = 541;
	public static readonly IDENTIFIER = 542;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_compilation_atom = 1;
	public static readonly RULE_global_statement = 2;
	public static readonly RULE_declaration = 3;
	public static readonly RULE_attribute_declaration = 4;
	public static readonly RULE_identifier = 5;
	public static readonly RULE_annotation = 6;
	public static readonly RULE_data_type = 7;
	public static readonly RULE_data_type_or_null = 8;
	public static readonly RULE_native_type = 9;
	public static readonly RULE_boolean_type = 10;
	public static readonly RULE_number_type = 11;
	public static readonly RULE_integer_type = 12;
	public static readonly RULE_decimal_type = 13;
	public static readonly RULE_i32_type = 14;
	public static readonly RULE_i64_type = 15;
	public static readonly RULE_isize_type = 16;
	public static readonly RULE_u32_type = 17;
	public static readonly RULE_u64_type = 18;
	public static readonly RULE_usize_type = 19;
	public static readonly RULE_f32_type = 20;
	public static readonly RULE_f64_type = 21;
	public static readonly RULE_string_type = 22;
	public static readonly RULE_void_type = 23;
	public static readonly RULE_attribute_type = 24;
	public static readonly RULE_attribute_type_or_null = 25;
	public static readonly RULE_attribute_ref = 26;
	public static readonly RULE_class_type = 27;
	public static readonly RULE_class_ref = 28;
	public static readonly RULE_function_type = 29;
	public static readonly RULE_function_type_or_null = 30;
	public static readonly RULE_return_type = 31;
	public static readonly RULE_return_types = 32;
	public static readonly RULE_parameter = 33;
	public static readonly RULE_class_declaration = 34;
	public static readonly RULE_accessibility = 35;
	public static readonly RULE_function_declaration = 36;
	public static readonly RULE_abstract_function_declaration = 37;
	public static readonly RULE_function_prototype = 38;
	public static readonly RULE_generic_parameter = 39;
	public static readonly RULE_concrete_function_declaration = 40;
	public static readonly RULE_native_function_declaration = 41;
	public static readonly RULE_statement = 42;
	public static readonly RULE_throw_statement = 43;
	public static readonly RULE_try_statement = 44;
	public static readonly RULE_catch_clause = 45;
	public static readonly RULE_catch_all_clause = 46;
	public static readonly RULE_finally_clause = 47;
	public static readonly RULE_break_statement = 48;
	public static readonly RULE_for_statement = 49;
	public static readonly RULE_if_statement = 50;
	public static readonly RULE_statements = 51;
	public static readonly RULE_function_call_statement = 52;
	public static readonly RULE_declare_instances_statement = 53;
	public static readonly RULE_declare_one = 54;
	public static readonly RULE_assign_instance_statement = 55;
	public static readonly RULE_assign_op = 56;
	public static readonly RULE_assign_item_statement = 57;
	public static readonly RULE_return_statement = 58;
	public static readonly RULE_expression = 59;
	public static readonly RULE_function_call = 60;
	public static readonly RULE_literal_expression = 61;
	public static readonly RULE_list_literal = 62;
	public static readonly RULE_set_literal = 63;
	public static readonly RULE_map_literal = 64;
	public static readonly RULE_map_entry = 65;
	public static readonly RULE_instruction = 66;
	public static readonly RULE_opcode = 67;
	public static readonly RULE_plain_opcode = 68;
	public static readonly RULE_keyword_opcode = 69;
	public static readonly RULE_composite_opcode = 70;
	public static readonly literalNames: string[] = [ null, "'i32'", "'i64'", 
                                                   "'isize'", "'u32'", "'u64'", 
                                                   "'usize'", "'f32'", "'f64'", 
                                                   "'v128'", "'string'", 
                                                   "'boolean'", "'void'", 
                                                   "'attribute'", "'class'", 
                                                   "'extends'", "'function'", 
                                                   "'static'", "'abstract'", 
                                                   "'native'", "'public'", 
                                                   "'protected'", "'private'", 
                                                   "'const'", "'let'", "'new'", 
                                                   "'get'", "'set'", "'switch'", 
                                                   "'case'", "'for'", "'do'", 
                                                   "'while'", "'break'", 
                                                   "'finally'", "'this'", 
                                                   "'super'", "'typeof'", 
                                                   "'instanceof'", "'in'", 
                                                   "'as'", "'('", "')'", 
                                                   "'['", "']'", "'{'", 
                                                   "'}'", "'=>'", "'>'", 
                                                   "'<'", "'<='", "'>='", 
                                                   "'=='", "'!='", "'!'", 
                                                   "'&&'", "'||'", "'?'", 
                                                   "';'", "':'", "','", 
                                                   "'...'", "'.'", "'@'", 
                                                   "'++'", "'--'", "'+'", 
                                                   "'-'", "'*'", "'/'", 
                                                   "'\\'", "'%'", "'^'", 
                                                   "'~'", "'&'", "'|'", 
                                                   "'<<'", "'>>'", "'>>>'", 
                                                   "'='", "'+='", "'-='", 
                                                   "'*='", "'/='", "'&='", 
                                                   "'|='", "'^='", "'%='", 
                                                   "'<<='", "'>>='", "'>>>='", 
                                                   null, null, null, null, 
                                                   null, "'null'", null, 
                                                   null, null, null, "'unreachable'", 
                                                   "'nop'", "'block'", "'loop'", 
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
                                                    "VOID", "ATTRIBUTE", 
                                                    "CLASS", "EXTENDS", 
                                                    "FUNCTION", "STATIC", 
                                                    "ABSTRACT", "NATIVE", 
                                                    "PUBLIC", "PROTECTED", 
                                                    "PRIVATE", "CONST", 
                                                    "LET", "NEW", "GET", 
                                                    "SET", "SWITCH", "CASE", 
                                                    "FOR", "DO", "WHILE", 
                                                    "BREAK", "FINALLY", 
                                                    "THIS", "SUPER", "TYPE_OF", 
                                                    "INSTANCE_OF", "IN", 
                                                    "AS", "LPAR", "RPAR", 
                                                    "LBRAK", "RBRAK", "LCURL", 
                                                    "RCURL", "ARROW", "GT", 
                                                    "LT", "LTE", "GTE", 
                                                    "EQUALS", "NOT_EQUALS", 
                                                    "NOT", "AND", "OR", 
                                                    "QUESTION", "SEMI", 
                                                    "COLON", "COMMA", "ETC", 
                                                    "DOT", "AT", "INC", 
                                                    "DEC", "PLUS", "MINUS", 
                                                    "STAR", "SLASH", "BSLASH", 
                                                    "PERCENT", "CARET", 
                                                    "TILDE", "AMP", "PIPE", 
                                                    "LSHIFT", "RSHIFT", 
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
		"compilation_unit", "compilation_atom", "global_statement", "declaration", 
		"attribute_declaration", "identifier", "annotation", "data_type", "data_type_or_null", 
		"native_type", "boolean_type", "number_type", "integer_type", "decimal_type", 
		"i32_type", "i64_type", "isize_type", "u32_type", "u64_type", "usize_type", 
		"f32_type", "f64_type", "string_type", "void_type", "attribute_type", 
		"attribute_type_or_null", "attribute_ref", "class_type", "class_ref", 
		"function_type", "function_type_or_null", "return_type", "return_types", 
		"parameter", "class_declaration", "accessibility", "function_declaration", 
		"abstract_function_declaration", "function_prototype", "generic_parameter", 
		"concrete_function_declaration", "native_function_declaration", "statement", 
		"throw_statement", "try_statement", "catch_clause", "catch_all_clause", 
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
			this.state = 145;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 142;
					this.compilation_atom();
					}
					}
				}
				this.state = 147;
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
	public compilation_atom(): Compilation_atomContext {
		let localctx: Compilation_atomContext = new Compilation_atomContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ComposeParser.RULE_compilation_atom);
		try {
			this.state = 150;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 148;
				this.declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 149;
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
		this.enterRule(localctx, 4, ComposeParser.RULE_global_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 155;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===97) {
				{
				{
				this.state = 152;
				this.annotation();
				}
				}
				this.state = 157;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			{
			this.state = 158;
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
		this.enterRule(localctx, 6, ComposeParser.RULE_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 163;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 160;
					this.annotation();
					}
					}
				}
				this.state = 165;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 3, this._ctx);
			}
			this.state = 169;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 4, this._ctx) ) {
			case 1:
				{
				this.state = 166;
				this.attribute_declaration();
				}
				break;
			case 2:
				{
				this.state = 167;
				this.class_declaration();
				}
				break;
			case 3:
				{
				this.state = 168;
				this.function_declaration(false);
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
	public attribute_declaration(): Attribute_declarationContext {
		let localctx: Attribute_declarationContext = new Attribute_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ComposeParser.RULE_attribute_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 171;
			this.match(ComposeParser.ATTRIBUTE);
			this.state = 172;
			this.identifier();
			this.state = 173;
			this.match(ComposeParser.COLON);
			this.state = 174;
			this.data_type();
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
		this.enterRule(localctx, 10, ComposeParser.RULE_identifier);
		try {
			this.state = 178;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 542:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 176;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 101:
			case 102:
			case 103:
			case 104:
			case 111:
			case 112:
			case 113:
			case 114:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 177;
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
		this.enterRule(localctx, 12, ComposeParser.RULE_annotation);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 180;
			this.match(ComposeParser.ANNOTATION);
			this.state = 185;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 6, this._ctx) ) {
			case 1:
				{
				this.state = 181;
				this.match(ComposeParser.LPAR);
				this.state = 182;
				this.literal_expression();
				this.state = 183;
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
	public data_type(): Data_typeContext {
		let localctx: Data_typeContext = new Data_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 14, ComposeParser.RULE_data_type);
		try {
			this.state = 189;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 7, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 187;
				this.native_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 188;
				this.class_type();
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
	public data_type_or_null(): Data_type_or_nullContext {
		let localctx: Data_type_or_nullContext = new Data_type_or_nullContext(this, this._ctx, this.state);
		this.enterRule(localctx, 16, ComposeParser.RULE_data_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 191;
			this.data_type();
			this.state = 194;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 8, this._ctx) ) {
			case 1:
				{
				this.state = 192;
				this.match(ComposeParser.PIPE);
				this.state = 193;
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
		this.enterRule(localctx, 18, ComposeParser.RULE_native_type);
		try {
			this.state = 199;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 11:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 196;
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
				this.state = 197;
				this.number_type();
				}
				break;
			case 10:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 198;
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
		this.enterRule(localctx, 20, ComposeParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 201;
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
		this.enterRule(localctx, 22, ComposeParser.RULE_number_type);
		try {
			this.state = 205;
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
				this.state = 203;
				this.integer_type();
				}
				break;
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 204;
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
		this.enterRule(localctx, 24, ComposeParser.RULE_integer_type);
		try {
			this.state = 213;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 207;
				this.i32_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 208;
				this.i64_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 209;
				this.isize_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 210;
				this.u32_type();
				}
				break;
			case 5:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 211;
				this.u64_type();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 212;
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
		this.enterRule(localctx, 26, ComposeParser.RULE_decimal_type);
		try {
			this.state = 217;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 7:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 215;
				this.f32_type();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 216;
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
		this.enterRule(localctx, 28, ComposeParser.RULE_i32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 219;
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
		this.enterRule(localctx, 30, ComposeParser.RULE_i64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 221;
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
		this.enterRule(localctx, 32, ComposeParser.RULE_isize_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 223;
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
		this.enterRule(localctx, 34, ComposeParser.RULE_u32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 225;
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
		this.enterRule(localctx, 36, ComposeParser.RULE_u64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 227;
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
		this.enterRule(localctx, 38, ComposeParser.RULE_usize_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 229;
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
		this.enterRule(localctx, 40, ComposeParser.RULE_f32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 231;
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
		this.enterRule(localctx, 42, ComposeParser.RULE_f64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 233;
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
		this.enterRule(localctx, 44, ComposeParser.RULE_string_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 235;
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
		this.enterRule(localctx, 46, ComposeParser.RULE_void_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 237;
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
		this.enterRule(localctx, 48, ComposeParser.RULE_attribute_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 239;
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
		this.enterRule(localctx, 50, ComposeParser.RULE_attribute_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.attribute_type();
			this.state = 244;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				{
				this.state = 242;
				this.match(ComposeParser.PIPE);
				this.state = 243;
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
		this.enterRule(localctx, 52, ComposeParser.RULE_attribute_ref);
		try {
			this.state = 249;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 246;
				if (!( this.willBeLowercase() )) {
					throw this.createFailedPredicateException(" this.willBeLowercase() ");
				}
				this.state = 247;
				this.match(ComposeParser.IDENTIFIER);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 248;
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
		this.enterRule(localctx, 54, ComposeParser.RULE_class_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 251;
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
		this.enterRule(localctx, 56, ComposeParser.RULE_class_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 253;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 254;
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
		this.enterRule(localctx, 58, ComposeParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 269;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 17, this._ctx) ) {
			case 1:
				{
				this.state = 256;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 257;
				this.match(ComposeParser.LPAR);
				this.state = 266;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 16, this._ctx) ) {
				case 1:
					{
					this.state = 258;
					this.parameter();
					this.state = 263;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===60) {
						{
						{
						this.state = 259;
						this.match(ComposeParser.COMMA);
						this.state = 260;
						this.parameter();
						}
						}
						this.state = 265;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 268;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 271;
			this.match(ComposeParser.ARROW);
			this.state = 272;
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
		this.enterRule(localctx, 60, ComposeParser.RULE_function_type_or_null);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 274;
			this.function_type();
			this.state = 277;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 275;
				this.match(ComposeParser.PIPE);
				this.state = 276;
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
		this.enterRule(localctx, 62, ComposeParser.RULE_return_type);
		try {
			this.state = 287;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 19, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 279;
				this.data_type_or_null();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 280;
				this.attribute_type_or_null();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 281;
				if (!( !localctx.requireParenthesis )) {
					throw this.createFailedPredicateException(" !$requireParenthesis ");
				}
				this.state = 282;
				this.function_type_or_null();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 283;
				this.match(ComposeParser.LPAR);
				this.state = 284;
				this.function_type_or_null();
				this.state = 285;
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
		this.enterRule(localctx, 64, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 298;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 21, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 289;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 290;
				this.return_type(true);
				this.state = 295;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 291;
						this.match(ComposeParser.COMMA);
						this.state = 292;
						this.return_type(false);
						}
						}
					}
					this.state = 297;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 20, this._ctx);
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
		this.enterRule(localctx, 66, ComposeParser.RULE_parameter);
		try {
			this.state = 309;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 300;
				this.attribute_type_or_null();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 301;
				this.identifier();
				this.state = 302;
				this.match(ComposeParser.COLON);
				this.state = 303;
				this.data_type_or_null();
				}
				break;
			case 3:
				localctx = new FunctionParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 305;
				this.identifier();
				this.state = 306;
				this.match(ComposeParser.COLON);
				this.state = 307;
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
		this.enterRule(localctx, 68, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0)) {
				{
				this.state = 311;
				this.accessibility();
				}
			}

			this.state = 315;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18) {
				{
				this.state = 314;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 317;
			this.match(ComposeParser.CLASS);
			this.state = 318;
			localctx._id = this.class_ref();
			this.state = 330;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===41) {
				{
				this.state = 319;
				this.match(ComposeParser.LPAR);
				this.state = 320;
				this.attribute_ref();
				this.state = 325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 321;
					this.match(ComposeParser.COMMA);
					this.state = 322;
					this.attribute_ref();
					}
					}
					this.state = 327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 328;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 332;
				this.match(ComposeParser.EXTENDS);
				this.state = 333;
				this.class_ref();
				this.state = 338;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 334;
					this.match(ComposeParser.COMMA);
					this.state = 335;
					this.class_ref();
					}
					}
					this.state = 340;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 343;
			this.match(ComposeParser.LCURL);
			this.state = 352;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 344;
				this.function_declaration(true);
				this.state = 349;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 345;
					this.match(ComposeParser.COMMA);
					this.state = 346;
					this.function_declaration(true);
					}
					}
					this.state = 351;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 354;
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
		this.enterRule(localctx, 70, ComposeParser.RULE_accessibility);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 356;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0))) {
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
	public function_declaration(as_member: boolean): Function_declarationContext {
		let localctx: Function_declarationContext = new Function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 72, ComposeParser.RULE_function_declaration);
		try {
			this.state = 361;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 358;
				this.abstract_function_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 359;
				this.concrete_function_declaration(localctx.as_member);
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 360;
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
	public abstract_function_declaration(): Abstract_function_declarationContext {
		let localctx: Abstract_function_declarationContext = new Abstract_function_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 74, ComposeParser.RULE_abstract_function_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 364;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0)) {
				{
				this.state = 363;
				this.accessibility();
				}
			}

			this.state = 366;
			this.match(ComposeParser.ABSTRACT);
			this.state = 367;
			this.function_prototype(true);
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
		this.enterRule(localctx, 76, ComposeParser.RULE_function_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 369;
			this.match(ComposeParser.FUNCTION);
			this.state = 370;
			this.identifier();
			this.state = 382;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 371;
				this.match(ComposeParser.LT);
				this.state = 372;
				this.generic_parameter();
				this.state = 377;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 373;
					this.match(ComposeParser.COMMA);
					this.state = 374;
					this.generic_parameter();
					}
					}
					this.state = 379;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 380;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 384;
			this.match(ComposeParser.LPAR);
			this.state = 393;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
			case 1:
				{
				this.state = 385;
				this.parameter();
				this.state = 390;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 386;
					this.match(ComposeParser.COMMA);
					this.state = 387;
					this.parameter();
					}
					}
					this.state = 392;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 395;
			this.match(ComposeParser.RPAR);
			this.state = 404;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 38, this._ctx) ) {
			case 1:
				{
				this.state = 396;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 397;
				this.match(ComposeParser.COLON);
				this.state = 398;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 399;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 402;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 37, this._ctx) ) {
				case 1:
					{
					this.state = 400;
					this.match(ComposeParser.COLON);
					this.state = 401;
					this.return_types();
					}
					break;
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
		this.enterRule(localctx, 78, ComposeParser.RULE_generic_parameter);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 406;
			this.class_ref();
			this.state = 409;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===15) {
				{
				this.state = 407;
				this.match(ComposeParser.EXTENDS);
				this.state = 408;
				this.data_type();
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
	public concrete_function_declaration(as_member: boolean): Concrete_function_declarationContext {
		let localctx: Concrete_function_declarationContext = new Concrete_function_declarationContext(this, this._ctx, this.state, as_member);
		this.enterRule(localctx, 80, ComposeParser.RULE_concrete_function_declaration);
		let _la: number;
		try {
			this.state = 439;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 44, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 411;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 413;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0)) {
					{
					this.state = 412;
					this.accessibility();
					}
				}

				this.state = 416;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17) {
					{
					this.state = 415;
					this.match(ComposeParser.STATIC);
					}
				}

				this.state = 418;
				this.function_prototype(false);
				this.state = 419;
				this.match(ComposeParser.LCURL);
				this.state = 423;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
					{
					{
					this.state = 420;
					this.statement();
					}
					}
					this.state = 425;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 426;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 428;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 429;
				this.function_prototype(false);
				this.state = 430;
				this.match(ComposeParser.LCURL);
				this.state = 434;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
					{
					{
					this.state = 431;
					this.statement();
					}
					}
					this.state = 436;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 437;
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
		this.enterRule(localctx, 82, ComposeParser.RULE_native_function_declaration);
		let _la: number;
		try {
			this.state = 469;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 48, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 441;
				if (!(localctx.as_member)) {
					throw this.createFailedPredicateException("$as_member");
				}
				this.state = 443;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 7340032) !== 0)) {
					{
					this.state = 442;
					this.accessibility();
					}
				}

				this.state = 445;
				this.match(ComposeParser.STATIC);
				this.state = 446;
				this.match(ComposeParser.NATIVE);
				this.state = 447;
				this.function_prototype(false);
				this.state = 448;
				this.match(ComposeParser.LCURL);
				this.state = 452;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967265) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294967295) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294967295) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 4294967295) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294967295) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 4294967295) !== 0) || ((((_la - 352)) & ~0x1F) === 0 && ((1 << (_la - 352)) & 4294967295) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 4294967295) !== 0) || ((((_la - 416)) & ~0x1F) === 0 && ((1 << (_la - 416)) & 4294967295) !== 0) || ((((_la - 448)) & ~0x1F) === 0 && ((1 << (_la - 448)) & 4294967295) !== 0) || ((((_la - 480)) & ~0x1F) === 0 && ((1 << (_la - 480)) & 4294967295) !== 0) || ((((_la - 512)) & ~0x1F) === 0 && ((1 << (_la - 512)) & 2147483647) !== 0)) {
					{
					{
					this.state = 449;
					this.instruction();
					}
					}
					this.state = 454;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 455;
				this.match(ComposeParser.RCURL);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 457;
				if (!(!localctx.as_member)) {
					throw this.createFailedPredicateException("!$as_member");
				}
				this.state = 458;
				this.match(ComposeParser.NATIVE);
				this.state = 459;
				this.function_prototype(false);
				this.state = 460;
				this.match(ComposeParser.LCURL);
				this.state = 464;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 4294967265) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & 4294967295) !== 0) || ((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & 4294967295) !== 0) || ((((_la - 192)) & ~0x1F) === 0 && ((1 << (_la - 192)) & 4294967295) !== 0) || ((((_la - 224)) & ~0x1F) === 0 && ((1 << (_la - 224)) & 4294967295) !== 0) || ((((_la - 256)) & ~0x1F) === 0 && ((1 << (_la - 256)) & 4294967295) !== 0) || ((((_la - 288)) & ~0x1F) === 0 && ((1 << (_la - 288)) & 4294967295) !== 0) || ((((_la - 320)) & ~0x1F) === 0 && ((1 << (_la - 320)) & 4294967295) !== 0) || ((((_la - 352)) & ~0x1F) === 0 && ((1 << (_la - 352)) & 4294967295) !== 0) || ((((_la - 384)) & ~0x1F) === 0 && ((1 << (_la - 384)) & 4294967295) !== 0) || ((((_la - 416)) & ~0x1F) === 0 && ((1 << (_la - 416)) & 4294967295) !== 0) || ((((_la - 448)) & ~0x1F) === 0 && ((1 << (_la - 448)) & 4294967295) !== 0) || ((((_la - 480)) & ~0x1F) === 0 && ((1 << (_la - 480)) & 4294967295) !== 0) || ((((_la - 512)) & ~0x1F) === 0 && ((1 << (_la - 512)) & 2147483647) !== 0)) {
					{
					{
					this.state = 461;
					this.instruction();
					}
					}
					this.state = 466;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 467;
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 84, ComposeParser.RULE_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 474;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===97) {
				{
				{
				this.state = 471;
				this.annotation();
				}
				}
				this.state = 476;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 487;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 50, this._ctx) ) {
			case 1:
				{
				this.state = 477;
				this.declare_instances_statement();
				}
				break;
			case 2:
				{
				this.state = 478;
				this.assign_instance_statement();
				}
				break;
			case 3:
				{
				this.state = 479;
				this.assign_item_statement();
				}
				break;
			case 4:
				{
				this.state = 480;
				this.function_call_statement();
				}
				break;
			case 5:
				{
				this.state = 481;
				this.if_statement();
				}
				break;
			case 6:
				{
				this.state = 482;
				this.for_statement();
				}
				break;
			case 7:
				{
				this.state = 483;
				this.try_statement();
				}
				break;
			case 8:
				{
				this.state = 484;
				this.throw_statement();
				}
				break;
			case 9:
				{
				this.state = 485;
				this.return_statement();
				}
				break;
			case 10:
				{
				this.state = 486;
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
		this.enterRule(localctx, 86, ComposeParser.RULE_throw_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 489;
			this.match(ComposeParser.THROW);
			this.state = 490;
			this.expression(0);
			this.state = 491;
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
		this.enterRule(localctx, 88, ComposeParser.RULE_try_statement);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 493;
			this.match(ComposeParser.TRY);
			this.state = 494;
			this.match(ComposeParser.LCURL);
			this.state = 498;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
				{
				{
				this.state = 495;
				this.statement();
				}
				}
				this.state = 500;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 501;
			this.match(ComposeParser.RCURL);
			this.state = 505;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 502;
					this.catch_clause();
					}
					}
				}
				this.state = 507;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 52, this._ctx);
			}
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===108) {
				{
				this.state = 508;
				this.catch_all_clause();
				}
			}

			this.state = 512;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===34) {
				{
				this.state = 511;
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
		this.enterRule(localctx, 90, ComposeParser.RULE_catch_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 514;
			this.match(ComposeParser.CATCH);
			this.state = 515;
			this.match(ComposeParser.LPAR);
			this.state = 516;
			this.identifier();
			this.state = 517;
			this.match(ComposeParser.COLON);
			this.state = 518;
			this.data_type();
			this.state = 523;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===75) {
				{
				{
				this.state = 519;
				this.match(ComposeParser.PIPE);
				this.state = 520;
				this.data_type();
				}
				}
				this.state = 525;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 526;
			this.match(ComposeParser.RPAR);
			this.state = 527;
			this.match(ComposeParser.LCURL);
			this.state = 531;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
				{
				{
				this.state = 528;
				this.statement();
				}
				}
				this.state = 533;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 534;
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
		this.enterRule(localctx, 92, ComposeParser.RULE_catch_all_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 536;
			this.match(ComposeParser.CATCH);
			this.state = 537;
			this.match(ComposeParser.LPAR);
			this.state = 538;
			this.match(ComposeParser.ETC);
			this.state = 539;
			this.match(ComposeParser.RPAR);
			this.state = 540;
			this.match(ComposeParser.LCURL);
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
				{
				{
				this.state = 541;
				this.statement();
				}
				}
				this.state = 546;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 547;
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
		this.enterRule(localctx, 94, ComposeParser.RULE_finally_clause);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 549;
			this.match(ComposeParser.FINALLY);
			this.state = 550;
			this.match(ComposeParser.LCURL);
			this.state = 554;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
				{
				{
				this.state = 551;
				this.statement();
				}
				}
				this.state = 556;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 557;
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
		this.enterRule(localctx, 96, ComposeParser.RULE_break_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 559;
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
		this.enterRule(localctx, 98, ComposeParser.RULE_for_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 561;
			this.match(ComposeParser.FOR);
			this.state = 562;
			this.match(ComposeParser.LPAR);
			this.state = 572;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 563;
				this.match(ComposeParser.LET);
				this.state = 564;
				this.declare_one();
				this.state = 569;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 565;
					this.match(ComposeParser.COMMA);
					this.state = 566;
					this.declare_one();
					}
					}
					this.state = 571;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 574;
			this.match(ComposeParser.SEMI);
			this.state = 583;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 575;
				this.expression(0);
				this.state = 580;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 576;
					this.match(ComposeParser.COMMA);
					this.state = 577;
					this.expression(0);
					}
					}
					this.state = 582;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 585;
			this.match(ComposeParser.SEMI);
			this.state = 594;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 586;
				this.expression(0);
				this.state = 591;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 587;
					this.match(ComposeParser.COMMA);
					this.state = 588;
					this.expression(0);
					}
					}
					this.state = 593;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 596;
			this.match(ComposeParser.RPAR);
			this.state = 597;
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
		this.enterRule(localctx, 100, ComposeParser.RULE_if_statement);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 599;
			this.match(ComposeParser.IF);
			this.state = 600;
			this.match(ComposeParser.LPAR);
			this.state = 601;
			this.expression(0);
			this.state = 602;
			this.match(ComposeParser.RPAR);
			this.state = 603;
			this.statements();
			this.state = 613;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 604;
					this.match(ComposeParser.ELSE);
					this.state = 605;
					this.match(ComposeParser.IF);
					this.state = 606;
					this.match(ComposeParser.LPAR);
					this.state = 607;
					this.expression(0);
					this.state = 608;
					this.match(ComposeParser.RPAR);
					this.state = 609;
					this.statements();
					}
					}
				}
				this.state = 615;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 65, this._ctx);
			}
			this.state = 620;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 616;
					this.match(ComposeParser.ELSE);
					this.state = 617;
					this.statements();
					}
					}
				}
				this.state = 622;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 66, this._ctx);
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
		this.enterRule(localctx, 102, ComposeParser.RULE_statements);
		let _la: number;
		try {
			this.state = 632;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 68, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 623;
				this.statement();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 624;
				this.match(ComposeParser.LCURL);
				this.state = 628;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (((((_la - 23)) & ~0x1F) === 0 && ((1 << (_la - 23)) & 2220127367) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 33532899) !== 0) || _la===542) {
					{
					{
					this.state = 625;
					this.statement();
					}
					}
					this.state = 630;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 631;
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
		this.enterRule(localctx, 104, ComposeParser.RULE_function_call_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 637;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 634;
				this.expression(0);
				this.state = 635;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 639;
			this.function_call();
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
	public declare_instances_statement(): Declare_instances_statementContext {
		let localctx: Declare_instances_statementContext = new Declare_instances_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 106, ComposeParser.RULE_declare_instances_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 642;
			_la = this._input.LA(1);
			if(!(_la===23 || _la===24)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 643;
			this.declare_one();
			this.state = 648;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===60) {
				{
				{
				this.state = 644;
				this.match(ComposeParser.COMMA);
				this.state = 645;
				this.declare_one();
				}
				}
				this.state = 650;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 651;
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
		this.enterRule(localctx, 108, ComposeParser.RULE_declare_one);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 653;
			this.identifier();
			this.state = 657;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 71, this._ctx) ) {
			case 1:
				{
				this.state = 654;
				this.match(ComposeParser.COLON);
				this.state = 655;
				this.data_type_or_null();
				}
				break;
			case 2:
				{
				this.state = 656;
				this.function_type_or_null();
				}
				break;
			}
			this.state = 661;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===79) {
				{
				this.state = 659;
				this.match(ComposeParser.ASSIGN);
				this.state = 660;
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
		this.enterRule(localctx, 110, ComposeParser.RULE_assign_instance_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 666;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 73, this._ctx) ) {
			case 1:
				{
				this.state = 663;
				localctx._parent = this.expression(0);
				this.state = 664;
				this.match(ComposeParser.DOT);
				}
				break;
			}
			this.state = 668;
			this.identifier();
			this.state = 669;
			this.assign_op();
			this.state = 670;
			localctx._value = this.expression(0);
			this.state = 671;
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
		this.enterRule(localctx, 112, ComposeParser.RULE_assign_op);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 673;
			_la = this._input.LA(1);
			if(!(((((_la - 79)) & ~0x1F) === 0 && ((1 << (_la - 79)) & 4095) !== 0))) {
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
		this.enterRule(localctx, 114, ComposeParser.RULE_assign_item_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 675;
			this.expression(0);
			this.state = 676;
			this.match(ComposeParser.LPAR);
			this.state = 677;
			this.expression(0);
			this.state = 678;
			this.match(ComposeParser.RPAR);
			this.state = 679;
			this.assign_op();
			this.state = 680;
			this.expression(0);
			this.state = 681;
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
		this.enterRule(localctx, 116, ComposeParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 683;
			this.match(ComposeParser.RETURN);
			this.state = 685;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 684;
				this.expression(0);
				}
			}

			this.state = 687;
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
		let _startState: number = 118;
		this.enterRecursionRule(localctx, 118, ComposeParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 737;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 77, this._ctx) ) {
			case 1:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 690;
				this.match(ComposeParser.NEW);
				this.state = 691;
				this.function_call();
				}
				break;
			case 2:
				{
				localctx = new SimpleCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 692;
				this.function_call();
				}
				break;
			case 3:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 693;
				this.match(ComposeParser.TYPE_OF);
				this.state = 700;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 41:
					{
					{
					this.state = 694;
					this.match(ComposeParser.LPAR);
					this.state = 695;
					this.expression(0);
					this.state = 696;
					this.match(ComposeParser.RPAR);
					}
					}
					break;
				case 37:
					{
					this.state = 698;
					this.match(ComposeParser.TYPE_OF);
					this.state = 699;
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
				localctx = new UnaryPreIncrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 702;
				this.match(ComposeParser.INC);
				this.state = 703;
				this.expression(27);
				}
				break;
			case 5:
				{
				localctx = new UnaryPreDecrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 704;
				this.match(ComposeParser.DEC);
				this.state = 705;
				this.expression(26);
				}
				break;
			case 6:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 706;
				this.match(ComposeParser.PLUS);
				this.state = 707;
				this.expression(25);
				}
				break;
			case 7:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 708;
				this.match(ComposeParser.MINUS);
				this.state = 709;
				this.expression(24);
				}
				break;
			case 8:
				{
				localctx = new UnaryBitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 710;
				this.match(ComposeParser.TILDE);
				this.state = 711;
				this.expression(23);
				}
				break;
			case 9:
				{
				localctx = new UnaryNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 712;
				this.match(ComposeParser.NOT);
				this.state = 713;
				this.expression(22);
				}
				break;
			case 10:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 714;
				this.match(ComposeParser.THIS);
				}
				break;
			case 11:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 715;
				this.identifier();
				}
				break;
			case 12:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 716;
				this.match(ComposeParser.SUPER);
				this.state = 721;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 76, this._ctx) ) {
				case 1:
					{
					this.state = 717;
					this.match(ComposeParser.LT);
					this.state = 718;
					this.identifier();
					this.state = 719;
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
				this.state = 723;
				this.literal_expression();
				}
				break;
			case 14:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 724;
				this.match(ComposeParser.LPAR);
				this.state = 725;
				this.expression(0);
				this.state = 726;
				this.match(ComposeParser.RPAR);
				}
				break;
			case 15:
				{
				localctx = new PreCastExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 728;
				this.match(ComposeParser.LT);
				this.state = 729;
				this.data_type();
				this.state = 730;
				this.match(ComposeParser.GT);
				this.state = 731;
				this.expression(3);
				}
				break;
			case 16:
				{
				localctx = new AssignExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 733;
				this.identifier();
				this.state = 734;
				this.assign_op();
				this.state = 735;
				this.expression(1);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 803;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 79, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 801;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 78, this._ctx) ) {
					case 1:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 739;
						if (!(this.precpred(this._ctx, 21))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 21)");
						}
						this.state = 740;
						_la = this._input.LA(1);
						if(!(((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 11) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 741;
						(localctx as MultiplyExpressionContext)._right = this.expression(22);
						}
						break;
					case 2:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 742;
						if (!(this.precpred(this._ctx, 20))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 20)");
						}
						this.state = 743;
						_la = this._input.LA(1);
						if(!(_la===66 || _la===67)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 744;
						(localctx as AddExpressionContext)._right = this.expression(21);
						}
						break;
					case 3:
						{
						localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 745;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 746;
						_la = this._input.LA(1);
						if(!(((((_la - 76)) & ~0x1F) === 0 && ((1 << (_la - 76)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 747;
						(localctx as BitShiftExpressionContext)._right = this.expression(20);
						}
						break;
					case 4:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 748;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 749;
						_la = this._input.LA(1);
						if(!(((((_la - 48)) & ~0x1F) === 0 && ((1 << (_la - 48)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 750;
						(localctx as CompareExpressionContext)._right = this.expression(19);
						}
						break;
					case 5:
						{
						localctx = new InstanceofExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InstanceofExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 751;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 752;
						this.match(ComposeParser.INSTANCE_OF);
						this.state = 753;
						(localctx as InstanceofExpressionContext)._right = this.expression(18);
						}
						break;
					case 6:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 754;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 755;
						this.match(ComposeParser.IN);
						this.state = 756;
						(localctx as InExpressionContext)._right = this.expression(17);
						}
						break;
					case 7:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 757;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 758;
						_la = this._input.LA(1);
						if(!(_la===52 || _la===53)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 759;
						(localctx as EqualsExpressionContext)._right = this.expression(16);
						}
						break;
					case 8:
						{
						localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 760;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 761;
						this.match(ComposeParser.AMP);
						this.state = 762;
						(localctx as BitAndExpressionContext)._right = this.expression(15);
						}
						break;
					case 9:
						{
						localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 763;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 764;
						this.match(ComposeParser.CARET);
						this.state = 765;
						(localctx as BitXorExpressionContext)._right = this.expression(14);
						}
						break;
					case 10:
						{
						localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 766;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 767;
						this.match(ComposeParser.PIPE);
						this.state = 768;
						(localctx as BitOrExpressionContext)._right = this.expression(13);
						}
						break;
					case 11:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 769;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 770;
						this.match(ComposeParser.AND);
						this.state = 771;
						(localctx as AndExpressionContext)._right = this.expression(12);
						}
						break;
					case 12:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 772;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 773;
						this.match(ComposeParser.OR);
						this.state = 774;
						(localctx as OrExpressionContext)._right = this.expression(11);
						}
						break;
					case 13:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._condition = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 775;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 776;
						this.match(ComposeParser.QUESTION);
						this.state = 777;
						(localctx as TernaryExpressionContext)._if_true = this.expression(0);
						this.state = 778;
						this.match(ComposeParser.COLON);
						this.state = 779;
						(localctx as TernaryExpressionContext)._if_false = this.expression(10);
						}
						break;
					case 14:
						{
						localctx = new ItemExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ItemExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 781;
						if (!(this.precpred(this._ctx, 35))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 35)");
						}
						this.state = 782;
						this.match(ComposeParser.LBRAK);
						this.state = 783;
						(localctx as ItemExpressionContext)._item = this.expression(0);
						this.state = 784;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 15:
						{
						localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 786;
						if (!(this.precpred(this._ctx, 34))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 34)");
						}
						this.state = 787;
						this.match(ComposeParser.DOT);
						this.state = 788;
						(localctx as MemberExpressionContext)._member = this.identifier();
						}
						break;
					case 16:
						{
						localctx = new ChildCallExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 789;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 790;
						this.match(ComposeParser.DOT);
						this.state = 791;
						this.function_call();
						}
						break;
					case 17:
						{
						localctx = new PostIncrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 792;
						if (!(this.precpred(this._ctx, 30))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 30)");
						}
						 this.willNotContainLineTerminator()
						this.state = 794;
						this.match(ComposeParser.INC);
						}
						break;
					case 18:
						{
						localctx = new PostDecrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 795;
						if (!(this.precpred(this._ctx, 29))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 29)");
						}
						 this.willNotContainLineTerminator()
						this.state = 797;
						this.match(ComposeParser.DEC);
						}
						break;
					case 19:
						{
						localctx = new CastAsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 798;
						if (!(this.precpred(this._ctx, 2))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 2)");
						}
						this.state = 799;
						this.match(ComposeParser.AS);
						this.state = 800;
						this.data_type();
						}
						break;
					}
					}
				}
				this.state = 805;
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
			this.unrollRecursionContexts(_parentctx);
		}
		return localctx;
	}
	// @RuleVersion(0)
	public function_call(): Function_callContext {
		let localctx: Function_callContext = new Function_callContext(this, this._ctx, this.state);
		this.enterRule(localctx, 120, ComposeParser.RULE_function_call);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 806;
			localctx._name = this.identifier();
			this.state = 818;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===49) {
				{
				this.state = 807;
				this.match(ComposeParser.LT);
				this.state = 808;
				this.data_type_or_null();
				this.state = 813;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 809;
					this.match(ComposeParser.COMMA);
					this.state = 810;
					this.data_type_or_null();
					}
					}
					this.state = 815;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 816;
				this.match(ComposeParser.GT);
				}
			}

			this.state = 820;
			this.match(ComposeParser.LPAR);
			this.state = 829;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 821;
				this.expression(0);
				this.state = 826;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 822;
					this.match(ComposeParser.COMMA);
					this.state = 823;
					this.expression(0);
					}
					}
					this.state = 828;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 831;
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
		this.enterRule(localctx, 122, ComposeParser.RULE_literal_expression);
		try {
			this.state = 842;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 96:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 833;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 93:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 834;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 91:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 835;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 92:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 836;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 94:
				localctx = new CharLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 837;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 95:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 838;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 43:
				localctx = new ListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 839;
				this.list_literal();
				}
				break;
			case 49:
				localctx = new SetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 840;
				this.set_literal();
				}
				break;
			case 45:
				localctx = new MapLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 841;
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
		this.enterRule(localctx, 124, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 844;
			this.match(ComposeParser.LBRAK);
			this.state = 853;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 845;
				localctx._exp = this.expression(0);
				this.state = 850;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 846;
					this.match(ComposeParser.COMMA);
					this.state = 847;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 852;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 855;
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
		this.enterRule(localctx, 126, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 857;
			this.match(ComposeParser.LT);
			this.state = 866;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 25)) & ~0x1F) === 0 && ((1 << (_la - 25)) & 555031553) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4160750095) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 32997857) !== 0) || _la===542) {
				{
				this.state = 858;
				localctx._exp = this.expression(0);
				this.state = 863;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 859;
					this.match(ComposeParser.COMMA);
					this.state = 860;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 865;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 868;
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
		this.enterRule(localctx, 128, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 870;
			this.match(ComposeParser.LCURL);
			this.state = 879;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 1031183) !== 0) || _la===542) {
				{
				this.state = 871;
				localctx._entry = this.map_entry();
				this.state = 876;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===60) {
					{
					{
					this.state = 872;
					this.match(ComposeParser.COMMA);
					this.state = 873;
					localctx._entry = this.map_entry();
					}
					}
					this.state = 878;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 881;
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
		this.enterRule(localctx, 130, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 883;
			this.identifier();
			this.state = 884;
			this.match(ComposeParser.COLON);
			this.state = 885;
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
		this.enterRule(localctx, 132, ComposeParser.RULE_instruction);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 890;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 887;
					this.expression(0);
					}
					}
				}
				this.state = 892;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 91, this._ctx);
			}
			this.state = 893;
			this.opcode();
			this.state = 897;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===91) {
				{
				{
				this.state = 894;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				}
				this.state = 899;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 900;
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
		this.enterRule(localctx, 134, ComposeParser.RULE_opcode);
		try {
			this.state = 905;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 101:
			case 102:
			case 103:
			case 104:
			case 111:
			case 112:
			case 113:
			case 114:
			case 116:
			case 117:
			case 118:
			case 119:
			case 120:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 902;
				this.plain_opcode();
				}
				break;
			case 105:
			case 106:
			case 107:
			case 108:
			case 109:
			case 110:
			case 115:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 903;
				this.keyword_opcode();
				}
				break;
			case 121:
			case 122:
			case 123:
			case 124:
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
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 904;
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
		this.enterRule(localctx, 136, ComposeParser.RULE_plain_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 907;
			_la = this._input.LA(1);
			if(!(((((_la - 101)) & ~0x1F) === 0 && ((1 << (_la - 101)) & 1031183) !== 0))) {
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
		this.enterRule(localctx, 138, ComposeParser.RULE_keyword_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 909;
			_la = this._input.LA(1);
			if(!(((((_la - 105)) & ~0x1F) === 0 && ((1 << (_la - 105)) & 1087) !== 0))) {
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
		this.enterRule(localctx, 140, ComposeParser.RULE_composite_opcode);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 911;
			_la = this._input.LA(1);
			if(!(((((_la - 121)) & ~0x1F) === 0 && ((1 << (_la - 121)) & 4294967295) !== 0) || ((((_la - 153)) & ~0x1F) === 0 && ((1 << (_la - 153)) & 4294967295) !== 0) || ((((_la - 185)) & ~0x1F) === 0 && ((1 << (_la - 185)) & 4294967295) !== 0) || ((((_la - 217)) & ~0x1F) === 0 && ((1 << (_la - 217)) & 4294967295) !== 0) || ((((_la - 249)) & ~0x1F) === 0 && ((1 << (_la - 249)) & 4294967295) !== 0) || ((((_la - 281)) & ~0x1F) === 0 && ((1 << (_la - 281)) & 4294967295) !== 0) || ((((_la - 313)) & ~0x1F) === 0 && ((1 << (_la - 313)) & 4294967295) !== 0) || ((((_la - 345)) & ~0x1F) === 0 && ((1 << (_la - 345)) & 4294967295) !== 0) || ((((_la - 377)) & ~0x1F) === 0 && ((1 << (_la - 377)) & 4294967295) !== 0) || ((((_la - 409)) & ~0x1F) === 0 && ((1 << (_la - 409)) & 4294967295) !== 0) || ((((_la - 441)) & ~0x1F) === 0 && ((1 << (_la - 441)) & 4294967295) !== 0) || ((((_la - 473)) & ~0x1F) === 0 && ((1 << (_la - 473)) & 4294967295) !== 0) || ((((_la - 505)) & ~0x1F) === 0 && ((1 << (_la - 505)) & 4294967295) !== 0) || ((((_la - 537)) & ~0x1F) === 0 && ((1 << (_la - 537)) & 31) !== 0))) {
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
		case 26:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 28:
			return this.class_ref_sempred(localctx as Class_refContext, predIndex);
		case 31:
			return this.return_type_sempred(localctx as Return_typeContext, predIndex);
		case 38:
			return this.function_prototype_sempred(localctx as Function_prototypeContext, predIndex);
		case 40:
			return this.concrete_function_declaration_sempred(localctx as Concrete_function_declarationContext, predIndex);
		case 41:
			return this.native_function_declaration_sempred(localctx as Native_function_declarationContext, predIndex);
		case 59:
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
	private function_prototype_sempred(localctx: Function_prototypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 3:
			return  localctx.mandatory_return ;
		case 4:
			return  !localctx.mandatory_return ;
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
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 9:
			return this.precpred(this._ctx, 21);
		case 10:
			return this.precpred(this._ctx, 20);
		case 11:
			return this.precpred(this._ctx, 19);
		case 12:
			return this.precpred(this._ctx, 18);
		case 13:
			return this.precpred(this._ctx, 17);
		case 14:
			return this.precpred(this._ctx, 16);
		case 15:
			return this.precpred(this._ctx, 15);
		case 16:
			return this.precpred(this._ctx, 14);
		case 17:
			return this.precpred(this._ctx, 13);
		case 18:
			return this.precpred(this._ctx, 12);
		case 19:
			return this.precpred(this._ctx, 11);
		case 20:
			return this.precpred(this._ctx, 10);
		case 21:
			return this.precpred(this._ctx, 9);
		case 22:
			return this.precpred(this._ctx, 35);
		case 23:
			return this.precpred(this._ctx, 34);
		case 24:
			return this.precpred(this._ctx, 31);
		case 25:
			return this.precpred(this._ctx, 30);
		case 26:
			return this.precpred(this._ctx, 29);
		case 27:
			return this.precpred(this._ctx, 2);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,542,914,2,0,7,0,
	2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,
	2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,
	17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,
	7,24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,
	31,2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,
	2,39,7,39,2,40,7,40,2,41,7,41,2,42,7,42,2,43,7,43,2,44,7,44,2,45,7,45,2,
	46,7,46,2,47,7,47,2,48,7,48,2,49,7,49,2,50,7,50,2,51,7,51,2,52,7,52,2,53,
	7,53,2,54,7,54,2,55,7,55,2,56,7,56,2,57,7,57,2,58,7,58,2,59,7,59,2,60,7,
	60,2,61,7,61,2,62,7,62,2,63,7,63,2,64,7,64,2,65,7,65,2,66,7,66,2,67,7,67,
	2,68,7,68,2,69,7,69,2,70,7,70,1,0,5,0,144,8,0,10,0,12,0,147,9,0,1,1,1,1,
	3,1,151,8,1,1,2,5,2,154,8,2,10,2,12,2,157,9,2,1,2,1,2,1,3,5,3,162,8,3,10,
	3,12,3,165,9,3,1,3,1,3,1,3,3,3,170,8,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,3,5,
	179,8,5,1,6,1,6,1,6,1,6,1,6,3,6,186,8,6,1,7,1,7,3,7,190,8,7,1,8,1,8,1,8,
	3,8,195,8,8,1,9,1,9,1,9,3,9,200,8,9,1,10,1,10,1,11,1,11,3,11,206,8,11,1,
	12,1,12,1,12,1,12,1,12,1,12,3,12,214,8,12,1,13,1,13,3,13,218,8,13,1,14,
	1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,21,1,
	21,1,22,1,22,1,23,1,23,1,24,1,24,1,25,1,25,1,25,3,25,245,8,25,1,26,1,26,
	1,26,3,26,250,8,26,1,27,1,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,5,
	29,262,8,29,10,29,12,29,265,9,29,3,29,267,8,29,1,29,3,29,270,8,29,1,29,
	1,29,1,29,1,30,1,30,1,30,3,30,278,8,30,1,31,1,31,1,31,1,31,1,31,1,31,1,
	31,1,31,3,31,288,8,31,1,32,1,32,1,32,1,32,5,32,294,8,32,10,32,12,32,297,
	9,32,3,32,299,8,32,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,310,
	8,33,1,34,3,34,313,8,34,1,34,3,34,316,8,34,1,34,1,34,1,34,1,34,1,34,1,34,
	5,34,324,8,34,10,34,12,34,327,9,34,1,34,1,34,3,34,331,8,34,1,34,1,34,1,
	34,1,34,5,34,337,8,34,10,34,12,34,340,9,34,3,34,342,8,34,1,34,1,34,1,34,
	1,34,5,34,348,8,34,10,34,12,34,351,9,34,3,34,353,8,34,1,34,1,34,1,35,1,
	35,1,36,1,36,1,36,3,36,362,8,36,1,37,3,37,365,8,37,1,37,1,37,1,37,1,38,
	1,38,1,38,1,38,1,38,1,38,5,38,376,8,38,10,38,12,38,379,9,38,1,38,1,38,3,
	38,383,8,38,1,38,1,38,1,38,1,38,5,38,389,8,38,10,38,12,38,392,9,38,3,38,
	394,8,38,1,38,1,38,1,38,1,38,1,38,1,38,1,38,3,38,403,8,38,3,38,405,8,38,
	1,39,1,39,1,39,3,39,410,8,39,1,40,1,40,3,40,414,8,40,1,40,3,40,417,8,40,
	1,40,1,40,1,40,5,40,422,8,40,10,40,12,40,425,9,40,1,40,1,40,1,40,1,40,1,
	40,1,40,5,40,433,8,40,10,40,12,40,436,9,40,1,40,1,40,3,40,440,8,40,1,41,
	1,41,3,41,444,8,41,1,41,1,41,1,41,1,41,1,41,5,41,451,8,41,10,41,12,41,454,
	9,41,1,41,1,41,1,41,1,41,1,41,1,41,1,41,5,41,463,8,41,10,41,12,41,466,9,
	41,1,41,1,41,3,41,470,8,41,1,42,5,42,473,8,42,10,42,12,42,476,9,42,1,42,
	1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,1,42,3,42,488,8,42,1,43,1,43,1,
	43,1,43,1,44,1,44,1,44,5,44,497,8,44,10,44,12,44,500,9,44,1,44,1,44,5,44,
	504,8,44,10,44,12,44,507,9,44,1,44,3,44,510,8,44,1,44,3,44,513,8,44,1,45,
	1,45,1,45,1,45,1,45,1,45,1,45,5,45,522,8,45,10,45,12,45,525,9,45,1,45,1,
	45,1,45,5,45,530,8,45,10,45,12,45,533,9,45,1,45,1,45,1,46,1,46,1,46,1,46,
	1,46,1,46,5,46,543,8,46,10,46,12,46,546,9,46,1,46,1,46,1,47,1,47,1,47,5,
	47,553,8,47,10,47,12,47,556,9,47,1,47,1,47,1,48,1,48,1,49,1,49,1,49,1,49,
	1,49,1,49,5,49,568,8,49,10,49,12,49,571,9,49,3,49,573,8,49,1,49,1,49,1,
	49,1,49,5,49,579,8,49,10,49,12,49,582,9,49,3,49,584,8,49,1,49,1,49,1,49,
	1,49,5,49,590,8,49,10,49,12,49,593,9,49,3,49,595,8,49,1,49,1,49,1,49,1,
	50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,1,50,5,50,612,8,50,
	10,50,12,50,615,9,50,1,50,1,50,5,50,619,8,50,10,50,12,50,622,9,50,1,51,
	1,51,1,51,5,51,627,8,51,10,51,12,51,630,9,51,1,51,3,51,633,8,51,1,52,1,
	52,1,52,3,52,638,8,52,1,52,1,52,1,52,1,53,1,53,1,53,1,53,5,53,647,8,53,
	10,53,12,53,650,9,53,1,53,1,53,1,54,1,54,1,54,1,54,3,54,658,8,54,1,54,1,
	54,3,54,662,8,54,1,55,1,55,1,55,3,55,667,8,55,1,55,1,55,1,55,1,55,1,55,
	1,56,1,56,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,57,1,58,1,58,3,58,686,8,
	58,1,58,1,58,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,
	701,8,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,722,8,59,1,59,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,3,59,738,8,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,
	1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,59,1,
	59,1,59,5,59,802,8,59,10,59,12,59,805,9,59,1,60,1,60,1,60,1,60,1,60,5,60,
	812,8,60,10,60,12,60,815,9,60,1,60,1,60,3,60,819,8,60,1,60,1,60,1,60,1,
	60,5,60,825,8,60,10,60,12,60,828,9,60,3,60,830,8,60,1,60,1,60,1,61,1,61,
	1,61,1,61,1,61,1,61,1,61,1,61,1,61,3,61,843,8,61,1,62,1,62,1,62,1,62,5,
	62,849,8,62,10,62,12,62,852,9,62,3,62,854,8,62,1,62,1,62,1,63,1,63,1,63,
	1,63,5,63,862,8,63,10,63,12,63,865,9,63,3,63,867,8,63,1,63,1,63,1,64,1,
	64,1,64,1,64,5,64,875,8,64,10,64,12,64,878,9,64,3,64,880,8,64,1,64,1,64,
	1,65,1,65,1,65,1,65,1,66,5,66,889,8,66,10,66,12,66,892,9,66,1,66,1,66,5,
	66,896,8,66,10,66,12,66,899,9,66,1,66,1,66,1,67,1,67,1,67,3,67,906,8,67,
	1,68,1,68,1,69,1,69,1,70,1,70,1,70,0,1,118,71,0,2,4,6,8,10,12,14,16,18,
	20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,
	68,70,72,74,76,78,80,82,84,86,88,90,92,94,96,98,100,102,104,106,108,110,
	112,114,116,118,120,122,124,126,128,130,132,134,136,138,140,0,11,1,0,20,
	22,1,0,23,24,1,0,79,90,2,0,68,69,71,71,1,0,66,67,1,0,76,78,1,0,48,51,1,
	0,52,53,3,0,101,104,111,114,116,120,2,0,105,110,115,115,1,0,121,541,994,
	0,145,1,0,0,0,2,150,1,0,0,0,4,155,1,0,0,0,6,163,1,0,0,0,8,171,1,0,0,0,10,
	178,1,0,0,0,12,180,1,0,0,0,14,189,1,0,0,0,16,191,1,0,0,0,18,199,1,0,0,0,
	20,201,1,0,0,0,22,205,1,0,0,0,24,213,1,0,0,0,26,217,1,0,0,0,28,219,1,0,
	0,0,30,221,1,0,0,0,32,223,1,0,0,0,34,225,1,0,0,0,36,227,1,0,0,0,38,229,
	1,0,0,0,40,231,1,0,0,0,42,233,1,0,0,0,44,235,1,0,0,0,46,237,1,0,0,0,48,
	239,1,0,0,0,50,241,1,0,0,0,52,249,1,0,0,0,54,251,1,0,0,0,56,253,1,0,0,0,
	58,269,1,0,0,0,60,274,1,0,0,0,62,287,1,0,0,0,64,298,1,0,0,0,66,309,1,0,
	0,0,68,312,1,0,0,0,70,356,1,0,0,0,72,361,1,0,0,0,74,364,1,0,0,0,76,369,
	1,0,0,0,78,406,1,0,0,0,80,439,1,0,0,0,82,469,1,0,0,0,84,474,1,0,0,0,86,
	489,1,0,0,0,88,493,1,0,0,0,90,514,1,0,0,0,92,536,1,0,0,0,94,549,1,0,0,0,
	96,559,1,0,0,0,98,561,1,0,0,0,100,599,1,0,0,0,102,632,1,0,0,0,104,637,1,
	0,0,0,106,642,1,0,0,0,108,653,1,0,0,0,110,666,1,0,0,0,112,673,1,0,0,0,114,
	675,1,0,0,0,116,683,1,0,0,0,118,737,1,0,0,0,120,806,1,0,0,0,122,842,1,0,
	0,0,124,844,1,0,0,0,126,857,1,0,0,0,128,870,1,0,0,0,130,883,1,0,0,0,132,
	890,1,0,0,0,134,905,1,0,0,0,136,907,1,0,0,0,138,909,1,0,0,0,140,911,1,0,
	0,0,142,144,3,2,1,0,143,142,1,0,0,0,144,147,1,0,0,0,145,143,1,0,0,0,145,
	146,1,0,0,0,146,1,1,0,0,0,147,145,1,0,0,0,148,151,3,6,3,0,149,151,3,4,2,
	0,150,148,1,0,0,0,150,149,1,0,0,0,151,3,1,0,0,0,152,154,3,12,6,0,153,152,
	1,0,0,0,154,157,1,0,0,0,155,153,1,0,0,0,155,156,1,0,0,0,156,158,1,0,0,0,
	157,155,1,0,0,0,158,159,3,106,53,0,159,5,1,0,0,0,160,162,3,12,6,0,161,160,
	1,0,0,0,162,165,1,0,0,0,163,161,1,0,0,0,163,164,1,0,0,0,164,169,1,0,0,0,
	165,163,1,0,0,0,166,170,3,8,4,0,167,170,3,68,34,0,168,170,3,72,36,0,169,
	166,1,0,0,0,169,167,1,0,0,0,169,168,1,0,0,0,170,7,1,0,0,0,171,172,5,13,
	0,0,172,173,3,10,5,0,173,174,5,59,0,0,174,175,3,14,7,0,175,9,1,0,0,0,176,
	179,5,542,0,0,177,179,3,136,68,0,178,176,1,0,0,0,178,177,1,0,0,0,179,11,
	1,0,0,0,180,185,5,97,0,0,181,182,5,41,0,0,182,183,3,122,61,0,183,184,5,
	42,0,0,184,186,1,0,0,0,185,181,1,0,0,0,185,186,1,0,0,0,186,13,1,0,0,0,187,
	190,3,18,9,0,188,190,3,54,27,0,189,187,1,0,0,0,189,188,1,0,0,0,190,15,1,
	0,0,0,191,194,3,14,7,0,192,193,5,75,0,0,193,195,5,96,0,0,194,192,1,0,0,
	0,194,195,1,0,0,0,195,17,1,0,0,0,196,200,3,20,10,0,197,200,3,22,11,0,198,
	200,3,44,22,0,199,196,1,0,0,0,199,197,1,0,0,0,199,198,1,0,0,0,200,19,1,
	0,0,0,201,202,5,11,0,0,202,21,1,0,0,0,203,206,3,24,12,0,204,206,3,26,13,
	0,205,203,1,0,0,0,205,204,1,0,0,0,206,23,1,0,0,0,207,214,3,28,14,0,208,
	214,3,30,15,0,209,214,3,32,16,0,210,214,3,34,17,0,211,214,3,36,18,0,212,
	214,3,38,19,0,213,207,1,0,0,0,213,208,1,0,0,0,213,209,1,0,0,0,213,210,1,
	0,0,0,213,211,1,0,0,0,213,212,1,0,0,0,214,25,1,0,0,0,215,218,3,40,20,0,
	216,218,3,42,21,0,217,215,1,0,0,0,217,216,1,0,0,0,218,27,1,0,0,0,219,220,
	5,1,0,0,220,29,1,0,0,0,221,222,5,2,0,0,222,31,1,0,0,0,223,224,5,3,0,0,224,
	33,1,0,0,0,225,226,5,4,0,0,226,35,1,0,0,0,227,228,5,5,0,0,228,37,1,0,0,
	0,229,230,5,6,0,0,230,39,1,0,0,0,231,232,5,7,0,0,232,41,1,0,0,0,233,234,
	5,8,0,0,234,43,1,0,0,0,235,236,5,10,0,0,236,45,1,0,0,0,237,238,5,12,0,0,
	238,47,1,0,0,0,239,240,3,52,26,0,240,49,1,0,0,0,241,244,3,48,24,0,242,243,
	5,75,0,0,243,245,5,96,0,0,244,242,1,0,0,0,244,245,1,0,0,0,245,51,1,0,0,
	0,246,247,4,26,0,0,247,250,5,542,0,0,248,250,3,136,68,0,249,246,1,0,0,0,
	249,248,1,0,0,0,250,53,1,0,0,0,251,252,3,56,28,0,252,55,1,0,0,0,253,254,
	4,28,1,0,254,255,5,542,0,0,255,57,1,0,0,0,256,270,3,48,24,0,257,266,5,41,
	0,0,258,263,3,66,33,0,259,260,5,60,0,0,260,262,3,66,33,0,261,259,1,0,0,
	0,262,265,1,0,0,0,263,261,1,0,0,0,263,264,1,0,0,0,264,267,1,0,0,0,265,263,
	1,0,0,0,266,258,1,0,0,0,266,267,1,0,0,0,267,268,1,0,0,0,268,270,5,42,0,
	0,269,256,1,0,0,0,269,257,1,0,0,0,270,271,1,0,0,0,271,272,5,47,0,0,272,
	273,3,64,32,0,273,59,1,0,0,0,274,277,3,58,29,0,275,276,5,75,0,0,276,278,
	5,96,0,0,277,275,1,0,0,0,277,278,1,0,0,0,278,61,1,0,0,0,279,288,3,16,8,
	0,280,288,3,50,25,0,281,282,4,31,2,1,282,288,3,60,30,0,283,284,5,41,0,0,
	284,285,3,60,30,0,285,286,5,42,0,0,286,288,1,0,0,0,287,279,1,0,0,0,287,
	280,1,0,0,0,287,281,1,0,0,0,287,283,1,0,0,0,288,63,1,0,0,0,289,299,3,46,
	23,0,290,295,3,62,31,0,291,292,5,60,0,0,292,294,3,62,31,0,293,291,1,0,0,
	0,294,297,1,0,0,0,295,293,1,0,0,0,295,296,1,0,0,0,296,299,1,0,0,0,297,295,
	1,0,0,0,298,289,1,0,0,0,298,290,1,0,0,0,299,65,1,0,0,0,300,310,3,50,25,
	0,301,302,3,10,5,0,302,303,5,59,0,0,303,304,3,16,8,0,304,310,1,0,0,0,305,
	306,3,10,5,0,306,307,5,59,0,0,307,308,3,60,30,0,308,310,1,0,0,0,309,300,
	1,0,0,0,309,301,1,0,0,0,309,305,1,0,0,0,310,67,1,0,0,0,311,313,3,70,35,
	0,312,311,1,0,0,0,312,313,1,0,0,0,313,315,1,0,0,0,314,316,5,18,0,0,315,
	314,1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,14,0,0,318,330,3,
	56,28,0,319,320,5,41,0,0,320,325,3,52,26,0,321,322,5,60,0,0,322,324,3,52,
	26,0,323,321,1,0,0,0,324,327,1,0,0,0,325,323,1,0,0,0,325,326,1,0,0,0,326,
	328,1,0,0,0,327,325,1,0,0,0,328,329,5,42,0,0,329,331,1,0,0,0,330,319,1,
	0,0,0,330,331,1,0,0,0,331,341,1,0,0,0,332,333,5,15,0,0,333,338,3,56,28,
	0,334,335,5,60,0,0,335,337,3,56,28,0,336,334,1,0,0,0,337,340,1,0,0,0,338,
	336,1,0,0,0,338,339,1,0,0,0,339,342,1,0,0,0,340,338,1,0,0,0,341,332,1,0,
	0,0,341,342,1,0,0,0,342,343,1,0,0,0,343,352,5,45,0,0,344,349,3,72,36,0,
	345,346,5,60,0,0,346,348,3,72,36,0,347,345,1,0,0,0,348,351,1,0,0,0,349,
	347,1,0,0,0,349,350,1,0,0,0,350,353,1,0,0,0,351,349,1,0,0,0,352,344,1,0,
	0,0,352,353,1,0,0,0,353,354,1,0,0,0,354,355,5,46,0,0,355,69,1,0,0,0,356,
	357,7,0,0,0,357,71,1,0,0,0,358,362,3,74,37,0,359,362,3,80,40,0,360,362,
	3,82,41,0,361,358,1,0,0,0,361,359,1,0,0,0,361,360,1,0,0,0,362,73,1,0,0,
	0,363,365,3,70,35,0,364,363,1,0,0,0,364,365,1,0,0,0,365,366,1,0,0,0,366,
	367,5,18,0,0,367,368,3,76,38,0,368,75,1,0,0,0,369,370,5,16,0,0,370,382,
	3,10,5,0,371,372,5,49,0,0,372,377,3,78,39,0,373,374,5,60,0,0,374,376,3,
	78,39,0,375,373,1,0,0,0,376,379,1,0,0,0,377,375,1,0,0,0,377,378,1,0,0,0,
	378,380,1,0,0,0,379,377,1,0,0,0,380,381,5,48,0,0,381,383,1,0,0,0,382,371,
	1,0,0,0,382,383,1,0,0,0,383,384,1,0,0,0,384,393,5,41,0,0,385,390,3,66,33,
	0,386,387,5,60,0,0,387,389,3,66,33,0,388,386,1,0,0,0,389,392,1,0,0,0,390,
	388,1,0,0,0,390,391,1,0,0,0,391,394,1,0,0,0,392,390,1,0,0,0,393,385,1,0,
	0,0,393,394,1,0,0,0,394,395,1,0,0,0,395,404,5,42,0,0,396,397,4,38,3,1,397,
	398,5,59,0,0,398,405,3,64,32,0,399,402,4,38,4,1,400,401,5,59,0,0,401,403,
	3,64,32,0,402,400,1,0,0,0,402,403,1,0,0,0,403,405,1,0,0,0,404,396,1,0,0,
	0,404,399,1,0,0,0,405,77,1,0,0,0,406,409,3,56,28,0,407,408,5,15,0,0,408,
	410,3,14,7,0,409,407,1,0,0,0,409,410,1,0,0,0,410,79,1,0,0,0,411,413,4,40,
	5,1,412,414,3,70,35,0,413,412,1,0,0,0,413,414,1,0,0,0,414,416,1,0,0,0,415,
	417,5,17,0,0,416,415,1,0,0,0,416,417,1,0,0,0,417,418,1,0,0,0,418,419,3,
	76,38,0,419,423,5,45,0,0,420,422,3,84,42,0,421,420,1,0,0,0,422,425,1,0,
	0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,426,1,0,0,0,425,423,1,0,0,0,426,
	427,5,46,0,0,427,440,1,0,0,0,428,429,4,40,6,1,429,430,3,76,38,0,430,434,
	5,45,0,0,431,433,3,84,42,0,432,431,1,0,0,0,433,436,1,0,0,0,434,432,1,0,
	0,0,434,435,1,0,0,0,435,437,1,0,0,0,436,434,1,0,0,0,437,438,5,46,0,0,438,
	440,1,0,0,0,439,411,1,0,0,0,439,428,1,0,0,0,440,81,1,0,0,0,441,443,4,41,
	7,1,442,444,3,70,35,0,443,442,1,0,0,0,443,444,1,0,0,0,444,445,1,0,0,0,445,
	446,5,17,0,0,446,447,5,19,0,0,447,448,3,76,38,0,448,452,5,45,0,0,449,451,
	3,132,66,0,450,449,1,0,0,0,451,454,1,0,0,0,452,450,1,0,0,0,452,453,1,0,
	0,0,453,455,1,0,0,0,454,452,1,0,0,0,455,456,5,46,0,0,456,470,1,0,0,0,457,
	458,4,41,8,1,458,459,5,19,0,0,459,460,3,76,38,0,460,464,5,45,0,0,461,463,
	3,132,66,0,462,461,1,0,0,0,463,466,1,0,0,0,464,462,1,0,0,0,464,465,1,0,
	0,0,465,467,1,0,0,0,466,464,1,0,0,0,467,468,5,46,0,0,468,470,1,0,0,0,469,
	441,1,0,0,0,469,457,1,0,0,0,470,83,1,0,0,0,471,473,3,12,6,0,472,471,1,0,
	0,0,473,476,1,0,0,0,474,472,1,0,0,0,474,475,1,0,0,0,475,487,1,0,0,0,476,
	474,1,0,0,0,477,488,3,106,53,0,478,488,3,110,55,0,479,488,3,114,57,0,480,
	488,3,104,52,0,481,488,3,100,50,0,482,488,3,98,49,0,483,488,3,88,44,0,484,
	488,3,86,43,0,485,488,3,116,58,0,486,488,3,96,48,0,487,477,1,0,0,0,487,
	478,1,0,0,0,487,479,1,0,0,0,487,480,1,0,0,0,487,481,1,0,0,0,487,482,1,0,
	0,0,487,483,1,0,0,0,487,484,1,0,0,0,487,485,1,0,0,0,487,486,1,0,0,0,488,
	85,1,0,0,0,489,490,5,109,0,0,490,491,3,118,59,0,491,492,5,58,0,0,492,87,
	1,0,0,0,493,494,5,107,0,0,494,498,5,45,0,0,495,497,3,84,42,0,496,495,1,
	0,0,0,497,500,1,0,0,0,498,496,1,0,0,0,498,499,1,0,0,0,499,501,1,0,0,0,500,
	498,1,0,0,0,501,505,5,46,0,0,502,504,3,90,45,0,503,502,1,0,0,0,504,507,
	1,0,0,0,505,503,1,0,0,0,505,506,1,0,0,0,506,509,1,0,0,0,507,505,1,0,0,0,
	508,510,3,92,46,0,509,508,1,0,0,0,509,510,1,0,0,0,510,512,1,0,0,0,511,513,
	3,94,47,0,512,511,1,0,0,0,512,513,1,0,0,0,513,89,1,0,0,0,514,515,5,108,
	0,0,515,516,5,41,0,0,516,517,3,10,5,0,517,518,5,59,0,0,518,523,3,14,7,0,
	519,520,5,75,0,0,520,522,3,14,7,0,521,519,1,0,0,0,522,525,1,0,0,0,523,521,
	1,0,0,0,523,524,1,0,0,0,524,526,1,0,0,0,525,523,1,0,0,0,526,527,5,42,0,
	0,527,531,5,45,0,0,528,530,3,84,42,0,529,528,1,0,0,0,530,533,1,0,0,0,531,
	529,1,0,0,0,531,532,1,0,0,0,532,534,1,0,0,0,533,531,1,0,0,0,534,535,5,46,
	0,0,535,91,1,0,0,0,536,537,5,108,0,0,537,538,5,41,0,0,538,539,5,61,0,0,
	539,540,5,42,0,0,540,544,5,45,0,0,541,543,3,84,42,0,542,541,1,0,0,0,543,
	546,1,0,0,0,544,542,1,0,0,0,544,545,1,0,0,0,545,547,1,0,0,0,546,544,1,0,
	0,0,547,548,5,46,0,0,548,93,1,0,0,0,549,550,5,34,0,0,550,554,5,45,0,0,551,
	553,3,84,42,0,552,551,1,0,0,0,553,556,1,0,0,0,554,552,1,0,0,0,554,555,1,
	0,0,0,555,557,1,0,0,0,556,554,1,0,0,0,557,558,5,46,0,0,558,95,1,0,0,0,559,
	560,5,33,0,0,560,97,1,0,0,0,561,562,5,30,0,0,562,572,5,41,0,0,563,564,5,
	24,0,0,564,569,3,108,54,0,565,566,5,60,0,0,566,568,3,108,54,0,567,565,1,
	0,0,0,568,571,1,0,0,0,569,567,1,0,0,0,569,570,1,0,0,0,570,573,1,0,0,0,571,
	569,1,0,0,0,572,563,1,0,0,0,572,573,1,0,0,0,573,574,1,0,0,0,574,583,5,58,
	0,0,575,580,3,118,59,0,576,577,5,60,0,0,577,579,3,118,59,0,578,576,1,0,
	0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,584,1,0,0,0,582,
	580,1,0,0,0,583,575,1,0,0,0,583,584,1,0,0,0,584,585,1,0,0,0,585,594,5,58,
	0,0,586,591,3,118,59,0,587,588,5,60,0,0,588,590,3,118,59,0,589,587,1,0,
	0,0,590,593,1,0,0,0,591,589,1,0,0,0,591,592,1,0,0,0,592,595,1,0,0,0,593,
	591,1,0,0,0,594,586,1,0,0,0,594,595,1,0,0,0,595,596,1,0,0,0,596,597,5,42,
	0,0,597,598,3,102,51,0,598,99,1,0,0,0,599,600,5,105,0,0,600,601,5,41,0,
	0,601,602,3,118,59,0,602,603,5,42,0,0,603,613,3,102,51,0,604,605,5,106,
	0,0,605,606,5,105,0,0,606,607,5,41,0,0,607,608,3,118,59,0,608,609,5,42,
	0,0,609,610,3,102,51,0,610,612,1,0,0,0,611,604,1,0,0,0,612,615,1,0,0,0,
	613,611,1,0,0,0,613,614,1,0,0,0,614,620,1,0,0,0,615,613,1,0,0,0,616,617,
	5,106,0,0,617,619,3,102,51,0,618,616,1,0,0,0,619,622,1,0,0,0,620,618,1,
	0,0,0,620,621,1,0,0,0,621,101,1,0,0,0,622,620,1,0,0,0,623,633,3,84,42,0,
	624,628,5,45,0,0,625,627,3,84,42,0,626,625,1,0,0,0,627,630,1,0,0,0,628,
	626,1,0,0,0,628,629,1,0,0,0,629,631,1,0,0,0,630,628,1,0,0,0,631,633,5,46,
	0,0,632,623,1,0,0,0,632,624,1,0,0,0,633,103,1,0,0,0,634,635,3,118,59,0,
	635,636,5,62,0,0,636,638,1,0,0,0,637,634,1,0,0,0,637,638,1,0,0,0,638,639,
	1,0,0,0,639,640,3,120,60,0,640,641,5,58,0,0,641,105,1,0,0,0,642,643,7,1,
	0,0,643,648,3,108,54,0,644,645,5,60,0,0,645,647,3,108,54,0,646,644,1,0,
	0,0,647,650,1,0,0,0,648,646,1,0,0,0,648,649,1,0,0,0,649,651,1,0,0,0,650,
	648,1,0,0,0,651,652,5,58,0,0,652,107,1,0,0,0,653,657,3,10,5,0,654,655,5,
	59,0,0,655,658,3,16,8,0,656,658,3,60,30,0,657,654,1,0,0,0,657,656,1,0,0,
	0,657,658,1,0,0,0,658,661,1,0,0,0,659,660,5,79,0,0,660,662,3,118,59,0,661,
	659,1,0,0,0,661,662,1,0,0,0,662,109,1,0,0,0,663,664,3,118,59,0,664,665,
	5,62,0,0,665,667,1,0,0,0,666,663,1,0,0,0,666,667,1,0,0,0,667,668,1,0,0,
	0,668,669,3,10,5,0,669,670,3,112,56,0,670,671,3,118,59,0,671,672,5,58,0,
	0,672,111,1,0,0,0,673,674,7,2,0,0,674,113,1,0,0,0,675,676,3,118,59,0,676,
	677,5,41,0,0,677,678,3,118,59,0,678,679,5,42,0,0,679,680,3,112,56,0,680,
	681,3,118,59,0,681,682,5,58,0,0,682,115,1,0,0,0,683,685,5,115,0,0,684,686,
	3,118,59,0,685,684,1,0,0,0,685,686,1,0,0,0,686,687,1,0,0,0,687,688,5,58,
	0,0,688,117,1,0,0,0,689,690,6,59,-1,0,690,691,5,25,0,0,691,738,3,120,60,
	0,692,738,3,120,60,0,693,700,5,37,0,0,694,695,5,41,0,0,695,696,3,118,59,
	0,696,697,5,42,0,0,697,701,1,0,0,0,698,699,5,37,0,0,699,701,3,118,59,0,
	700,694,1,0,0,0,700,698,1,0,0,0,701,738,1,0,0,0,702,703,5,64,0,0,703,738,
	3,118,59,27,704,705,5,65,0,0,705,738,3,118,59,26,706,707,5,66,0,0,707,738,
	3,118,59,25,708,709,5,67,0,0,709,738,3,118,59,24,710,711,5,73,0,0,711,738,
	3,118,59,23,712,713,5,54,0,0,713,738,3,118,59,22,714,738,5,35,0,0,715,738,
	3,10,5,0,716,721,5,36,0,0,717,718,5,49,0,0,718,719,3,10,5,0,719,720,5,48,
	0,0,720,722,1,0,0,0,721,717,1,0,0,0,721,722,1,0,0,0,722,738,1,0,0,0,723,
	738,3,122,61,0,724,725,5,41,0,0,725,726,3,118,59,0,726,727,5,42,0,0,727,
	738,1,0,0,0,728,729,5,49,0,0,729,730,3,14,7,0,730,731,5,48,0,0,731,732,
	3,118,59,3,732,738,1,0,0,0,733,734,3,10,5,0,734,735,3,112,56,0,735,736,
	3,118,59,1,736,738,1,0,0,0,737,689,1,0,0,0,737,692,1,0,0,0,737,693,1,0,
	0,0,737,702,1,0,0,0,737,704,1,0,0,0,737,706,1,0,0,0,737,708,1,0,0,0,737,
	710,1,0,0,0,737,712,1,0,0,0,737,714,1,0,0,0,737,715,1,0,0,0,737,716,1,0,
	0,0,737,723,1,0,0,0,737,724,1,0,0,0,737,728,1,0,0,0,737,733,1,0,0,0,738,
	803,1,0,0,0,739,740,10,21,0,0,740,741,7,3,0,0,741,802,3,118,59,22,742,743,
	10,20,0,0,743,744,7,4,0,0,744,802,3,118,59,21,745,746,10,19,0,0,746,747,
	7,5,0,0,747,802,3,118,59,20,748,749,10,18,0,0,749,750,7,6,0,0,750,802,3,
	118,59,19,751,752,10,17,0,0,752,753,5,38,0,0,753,802,3,118,59,18,754,755,
	10,16,0,0,755,756,5,39,0,0,756,802,3,118,59,17,757,758,10,15,0,0,758,759,
	7,7,0,0,759,802,3,118,59,16,760,761,10,14,0,0,761,762,5,74,0,0,762,802,
	3,118,59,15,763,764,10,13,0,0,764,765,5,72,0,0,765,802,3,118,59,14,766,
	767,10,12,0,0,767,768,5,75,0,0,768,802,3,118,59,13,769,770,10,11,0,0,770,
	771,5,55,0,0,771,802,3,118,59,12,772,773,10,10,0,0,773,774,5,56,0,0,774,
	802,3,118,59,11,775,776,10,9,0,0,776,777,5,57,0,0,777,778,3,118,59,0,778,
	779,5,59,0,0,779,780,3,118,59,10,780,802,1,0,0,0,781,782,10,35,0,0,782,
	783,5,43,0,0,783,784,3,118,59,0,784,785,5,44,0,0,785,802,1,0,0,0,786,787,
	10,34,0,0,787,788,5,62,0,0,788,802,3,10,5,0,789,790,10,31,0,0,790,791,5,
	62,0,0,791,802,3,120,60,0,792,793,10,30,0,0,793,794,6,59,-1,0,794,802,5,
	64,0,0,795,796,10,29,0,0,796,797,6,59,-1,0,797,802,5,65,0,0,798,799,10,
	2,0,0,799,800,5,40,0,0,800,802,3,14,7,0,801,739,1,0,0,0,801,742,1,0,0,0,
	801,745,1,0,0,0,801,748,1,0,0,0,801,751,1,0,0,0,801,754,1,0,0,0,801,757,
	1,0,0,0,801,760,1,0,0,0,801,763,1,0,0,0,801,766,1,0,0,0,801,769,1,0,0,0,
	801,772,1,0,0,0,801,775,1,0,0,0,801,781,1,0,0,0,801,786,1,0,0,0,801,789,
	1,0,0,0,801,792,1,0,0,0,801,795,1,0,0,0,801,798,1,0,0,0,802,805,1,0,0,0,
	803,801,1,0,0,0,803,804,1,0,0,0,804,119,1,0,0,0,805,803,1,0,0,0,806,818,
	3,10,5,0,807,808,5,49,0,0,808,813,3,16,8,0,809,810,5,60,0,0,810,812,3,16,
	8,0,811,809,1,0,0,0,812,815,1,0,0,0,813,811,1,0,0,0,813,814,1,0,0,0,814,
	816,1,0,0,0,815,813,1,0,0,0,816,817,5,48,0,0,817,819,1,0,0,0,818,807,1,
	0,0,0,818,819,1,0,0,0,819,820,1,0,0,0,820,829,5,41,0,0,821,826,3,118,59,
	0,822,823,5,60,0,0,823,825,3,118,59,0,824,822,1,0,0,0,825,828,1,0,0,0,826,
	824,1,0,0,0,826,827,1,0,0,0,827,830,1,0,0,0,828,826,1,0,0,0,829,821,1,0,
	0,0,829,830,1,0,0,0,830,831,1,0,0,0,831,832,5,42,0,0,832,121,1,0,0,0,833,
	843,5,96,0,0,834,843,5,93,0,0,835,843,5,91,0,0,836,843,5,92,0,0,837,843,
	5,94,0,0,838,843,5,95,0,0,839,843,3,124,62,0,840,843,3,126,63,0,841,843,
	3,128,64,0,842,833,1,0,0,0,842,834,1,0,0,0,842,835,1,0,0,0,842,836,1,0,
	0,0,842,837,1,0,0,0,842,838,1,0,0,0,842,839,1,0,0,0,842,840,1,0,0,0,842,
	841,1,0,0,0,843,123,1,0,0,0,844,853,5,43,0,0,845,850,3,118,59,0,846,847,
	5,60,0,0,847,849,3,118,59,0,848,846,1,0,0,0,849,852,1,0,0,0,850,848,1,0,
	0,0,850,851,1,0,0,0,851,854,1,0,0,0,852,850,1,0,0,0,853,845,1,0,0,0,853,
	854,1,0,0,0,854,855,1,0,0,0,855,856,5,44,0,0,856,125,1,0,0,0,857,866,5,
	49,0,0,858,863,3,118,59,0,859,860,5,60,0,0,860,862,3,118,59,0,861,859,1,
	0,0,0,862,865,1,0,0,0,863,861,1,0,0,0,863,864,1,0,0,0,864,867,1,0,0,0,865,
	863,1,0,0,0,866,858,1,0,0,0,866,867,1,0,0,0,867,868,1,0,0,0,868,869,5,48,
	0,0,869,127,1,0,0,0,870,879,5,45,0,0,871,876,3,130,65,0,872,873,5,60,0,
	0,873,875,3,130,65,0,874,872,1,0,0,0,875,878,1,0,0,0,876,874,1,0,0,0,876,
	877,1,0,0,0,877,880,1,0,0,0,878,876,1,0,0,0,879,871,1,0,0,0,879,880,1,0,
	0,0,880,881,1,0,0,0,881,882,5,46,0,0,882,129,1,0,0,0,883,884,3,10,5,0,884,
	885,5,59,0,0,885,886,3,118,59,0,886,131,1,0,0,0,887,889,3,118,59,0,888,
	887,1,0,0,0,889,892,1,0,0,0,890,888,1,0,0,0,890,891,1,0,0,0,891,893,1,0,
	0,0,892,890,1,0,0,0,893,897,3,134,67,0,894,896,5,91,0,0,895,894,1,0,0,0,
	896,899,1,0,0,0,897,895,1,0,0,0,897,898,1,0,0,0,898,900,1,0,0,0,899,897,
	1,0,0,0,900,901,5,58,0,0,901,133,1,0,0,0,902,906,3,136,68,0,903,906,3,138,
	69,0,904,906,3,140,70,0,905,902,1,0,0,0,905,903,1,0,0,0,905,904,1,0,0,0,
	906,135,1,0,0,0,907,908,7,8,0,0,908,137,1,0,0,0,909,910,7,9,0,0,910,139,
	1,0,0,0,911,912,7,10,0,0,912,141,1,0,0,0,94,145,150,155,163,169,178,185,
	189,194,199,205,213,217,244,249,263,266,269,277,287,295,298,309,312,315,
	325,330,338,341,349,352,361,364,377,382,390,393,402,404,409,413,416,423,
	434,439,443,452,464,469,474,487,498,505,509,512,523,531,544,554,569,572,
	580,583,591,594,613,620,628,632,637,648,657,661,666,685,700,721,737,801,
	803,813,818,826,829,842,850,853,863,866,876,879,890,897,905];

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
	public annotation_list(): AnnotationContext[] {
		return this.getTypedRuleContexts(AnnotationContext) as AnnotationContext[];
	}
	public annotation(i: number): AnnotationContext {
		return this.getTypedRuleContext(AnnotationContext, i) as AnnotationContext;
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
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
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


export class Data_typeContext extends ParserRuleContext {
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
    public get ruleIndex(): number {
    	return ComposeParser.RULE_data_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterData_type) {
	 		listener.enterData_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitData_type) {
	 		listener.exitData_type(this);
		}
	}
}


export class Data_type_or_nullContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public PIPE(): TerminalNode {
		return this.getToken(ComposeParser.PIPE, 0);
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_data_type_or_null;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterData_type_or_null) {
	 		listener.enterData_type_or_null(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitData_type_or_null) {
	 		listener.exitData_type_or_null(this);
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
	public data_type_or_null(): Data_type_or_nullContext {
		return this.getTypedRuleContext(Data_type_or_nullContext, 0) as Data_type_or_nullContext;
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
	public data_type_or_null(): Data_type_or_nullContext {
		return this.getTypedRuleContext(Data_type_or_nullContext, 0) as Data_type_or_nullContext;
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
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(ComposeParser.ABSTRACT, 0);
	}
	public function_prototype(): Function_prototypeContext {
		return this.getTypedRuleContext(Function_prototypeContext, 0) as Function_prototypeContext;
	}
	public accessibility(): AccessibilityContext {
		return this.getTypedRuleContext(AccessibilityContext, 0) as AccessibilityContext;
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


export class Function_prototypeContext extends ParserRuleContext {
	public mandatory_return: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, mandatory_return: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.mandatory_return = mandatory_return;
	}
	public FUNCTION(): TerminalNode {
		return this.getToken(ComposeParser.FUNCTION, 0);
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
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
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
	public data_type_list(): Data_typeContext[] {
		return this.getTypedRuleContexts(Data_typeContext) as Data_typeContext[];
	}
	public data_type(i: number): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, i) as Data_typeContext;
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
	public data_type_or_null(): Data_type_or_nullContext {
		return this.getTypedRuleContext(Data_type_or_nullContext, 0) as Data_type_or_nullContext;
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
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
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
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
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
	public data_type_or_null_list(): Data_type_or_nullContext[] {
		return this.getTypedRuleContexts(Data_type_or_nullContext) as Data_type_or_nullContext[];
	}
	public data_type_or_null(i: number): Data_type_or_nullContext {
		return this.getTypedRuleContext(Data_type_or_nullContext, i) as Data_type_or_nullContext;
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
