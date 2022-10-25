// Generated from ComposeParser.g4 by ANTLR 4.11.1
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
	public static readonly U32 = 3;
	public static readonly U64 = 4;
	public static readonly F32 = 5;
	public static readonly F64 = 6;
	public static readonly V128 = 7;
	public static readonly STRING = 8;
	public static readonly BOOLEAN = 9;
	public static readonly VOID = 10;
	public static readonly ATTR = 11;
	public static readonly ABSTRACT = 12;
	public static readonly CLASS = 13;
	public static readonly EXTENDS = 14;
	public static readonly FN = 15;
	public static readonly IF = 16;
	public static readonly ELSE = 17;
	public static readonly FOR = 18;
	public static readonly DO = 19;
	public static readonly WHILE = 20;
	public static readonly BREAK = 21;
	public static readonly TRY = 22;
	public static readonly WHEN = 23;
	public static readonly LPAR = 24;
	public static readonly RPAR = 25;
	public static readonly LBRAK = 26;
	public static readonly RBRAK = 27;
	public static readonly LCURL = 28;
	public static readonly RCURL = 29;
	public static readonly ARROW = 30;
	public static readonly GT = 31;
	public static readonly LT = 32;
	public static readonly LTE = 33;
	public static readonly GTE = 34;
	public static readonly EQUAL = 35;
	public static readonly NOTEQUAL = 36;
	public static readonly BANG = 37;
	public static readonly AND = 38;
	public static readonly OR = 39;
	public static readonly QUESTION = 40;
	public static readonly COLON = 41;
	public static readonly COMMA = 42;
	public static readonly DOT = 43;
	public static readonly AT = 44;
	public static readonly INC = 45;
	public static readonly DEC = 46;
	public static readonly PLUS = 47;
	public static readonly MINUS = 48;
	public static readonly STAR = 49;
	public static readonly SLASH = 50;
	public static readonly BSLASH = 51;
	public static readonly CARET = 52;
	public static readonly PERCENT = 53;
	public static readonly AMP = 54;
	public static readonly PIPE = 55;
	public static readonly ASSIGN = 56;
	public static readonly ADD_ASSIGN = 57;
	public static readonly SUB_ASSIGN = 58;
	public static readonly MUL_ASSIGN = 59;
	public static readonly DIV_ASSIGN = 60;
	public static readonly AND_ASSIGN = 61;
	public static readonly OR_ASSIGN = 62;
	public static readonly XOR_ASSIGN = 63;
	public static readonly MOD_ASSIGN = 64;
	public static readonly LSHIFT_ASSIGN = 65;
	public static readonly RSHIFT_ASSIGN = 66;
	public static readonly URSHIFT_ASSIGN = 67;
	public static readonly INTEGER_LITERAL = 68;
	public static readonly DECIMAL_LITERAL = 69;
	public static readonly BOOLEAN_LITERAL = 70;
	public static readonly CHAR_LITERAL = 71;
	public static readonly STRING_LITERAL = 72;
	public static readonly NULL_LITERAL = 73;
	public static readonly IDENTIFIER = 74;
	public static readonly WS = 75;
	public static readonly COMMENT = 76;
	public static readonly LINE_COMMENT = 77;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_unit = 0;
	public static readonly RULE_declaration = 1;
	public static readonly RULE_attribute_declaration = 2;
	public static readonly RULE_identifier = 3;
	public static readonly RULE_type = 4;
	public static readonly RULE_data_type = 5;
	public static readonly RULE_native_type = 6;
	public static readonly RULE_boolean_type = 7;
	public static readonly RULE_number_type = 8;
	public static readonly RULE_integer_type = 9;
	public static readonly RULE_decimal_type = 10;
	public static readonly RULE_i32_type = 11;
	public static readonly RULE_i64_type = 12;
	public static readonly RULE_u32_type = 13;
	public static readonly RULE_u64_type = 14;
	public static readonly RULE_f32_type = 15;
	public static readonly RULE_f64_type = 16;
	public static readonly RULE_string_type = 17;
	public static readonly RULE_void_type = 18;
	public static readonly RULE_attribute_type = 19;
	public static readonly RULE_attribute_ref = 20;
	public static readonly RULE_class_type = 21;
	public static readonly RULE_class_ref = 22;
	public static readonly RULE_method_type = 23;
	public static readonly RULE_return_types = 24;
	public static readonly RULE_parameter = 25;
	public static readonly RULE_class_declaration = 26;
	public static readonly RULE_method_declaration = 27;
	public static readonly RULE_abstract_method_declaration = 28;
	public static readonly RULE_method_prototype = 29;
	public static readonly RULE_concrete_method_declaration = 30;
	public static readonly RULE_statement = 31;
	public static readonly RULE_assign_statement = 32;
	public static readonly RULE_expression = 33;
	public static readonly RULE_literal_expression = 34;
	public static readonly RULE_list_literal = 35;
	public static readonly RULE_set_literal = 36;
	public static readonly RULE_map_literal = 37;
	public static readonly RULE_map_entry = 38;
	public static readonly literalNames: string[] = [ null, "'i32'", "'i64'", 
                                                   "'u32'", "'u64'", "'f32'", 
                                                   "'f64'", "'v128'", "'string'", 
                                                   "'boolean'", "'void'", 
                                                   "'attr'", "'abstract'", 
                                                   "'class'", "'extends'", 
                                                   "'fn'", "'if'", "'else'", 
                                                   "'for'", "'do'", "'while'", 
                                                   "'break'", "'try'", "'when'", 
                                                   "'('", "')'", "'['", 
                                                   "']'", "'{'", "'}'", 
                                                   "'=>'", "'>'", "'<'", 
                                                   "'<='", "'>='", "'=='", 
                                                   "'!='", "'!'", "'&&'", 
                                                   "'||'", "'?'", "':'", 
                                                   "','", "'.'", "'@'", 
                                                   "'++'", "'--'", "'+'", 
                                                   "'-'", "'*'", "'/'", 
                                                   "'\\'", "'^'", "'%'", 
                                                   "'&'", "'|'", "'='", 
                                                   "'+='", "'-='", "'*='", 
                                                   "'/='", "'&='", "'|='", 
                                                   "'^='", "'%='", "'<<='", 
                                                   "'>>='", "'>>>='", null, 
                                                   null, null, null, null, 
                                                   "'null'" ];
	public static readonly symbolicNames: string[] = [ null, "I32", "I64", 
                                                    "U32", "U64", "F32", 
                                                    "F64", "V128", "STRING", 
                                                    "BOOLEAN", "VOID", "ATTR", 
                                                    "ABSTRACT", "CLASS", 
                                                    "EXTENDS", "FN", "IF", 
                                                    "ELSE", "FOR", "DO", 
                                                    "WHILE", "BREAK", "TRY", 
                                                    "WHEN", "LPAR", "RPAR", 
                                                    "LBRAK", "RBRAK", "LCURL", 
                                                    "RCURL", "ARROW", "GT", 
                                                    "LT", "LTE", "GTE", 
                                                    "EQUAL", "NOTEQUAL", 
                                                    "BANG", "AND", "OR", 
                                                    "QUESTION", "COLON", 
                                                    "COMMA", "DOT", "AT", 
                                                    "INC", "DEC", "PLUS", 
                                                    "MINUS", "STAR", "SLASH", 
                                                    "BSLASH", "CARET", "PERCENT", 
                                                    "AMP", "PIPE", "ASSIGN", 
                                                    "ADD_ASSIGN", "SUB_ASSIGN", 
                                                    "MUL_ASSIGN", "DIV_ASSIGN", 
                                                    "AND_ASSIGN", "OR_ASSIGN", 
                                                    "XOR_ASSIGN", "MOD_ASSIGN", 
                                                    "LSHIFT_ASSIGN", "RSHIFT_ASSIGN", 
                                                    "URSHIFT_ASSIGN", "INTEGER_LITERAL", 
                                                    "DECIMAL_LITERAL", "BOOLEAN_LITERAL", 
                                                    "CHAR_LITERAL", "STRING_LITERAL", 
                                                    "NULL_LITERAL", "IDENTIFIER", 
                                                    "WS", "COMMENT", "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"unit", "declaration", "attribute_declaration", "identifier", "type", 
		"data_type", "native_type", "boolean_type", "number_type", "integer_type", 
		"decimal_type", "i32_type", "i64_type", "u32_type", "u64_type", "f32_type", 
		"f64_type", "string_type", "void_type", "attribute_type", "attribute_ref", 
		"class_type", "class_ref", "method_type", "return_types", "parameter", 
		"class_declaration", "method_declaration", "abstract_method_declaration", 
		"method_prototype", "concrete_method_declaration", "statement", "assign_statement", 
		"expression", "literal_expression", "list_literal", "set_literal", "map_literal", 
		"map_entry",
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
	public unit(): UnitContext {
		let localctx: UnitContext = new UnitContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, ComposeParser.RULE_unit);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 47104) !== 0)) {
				{
				{
				this.state = 78;
				this.declaration();
				}
				}
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
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
		this.enterRule(localctx, 2, ComposeParser.RULE_declaration);
		try {
			this.state = 87;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 1, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 84;
				this.attribute_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 85;
				this.class_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 86;
				this.method_declaration();
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
	public attribute_declaration(): Attribute_declarationContext {
		let localctx: Attribute_declarationContext = new Attribute_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, ComposeParser.RULE_attribute_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 89;
			this.match(ComposeParser.ATTR);
			this.state = 90;
			this.identifier();
			this.state = 91;
			this.match(ComposeParser.COLON);
			this.state = 92;
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
		this.enterRule(localctx, 6, ComposeParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 94;
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
	public type_(): TypeContext {
		let localctx: TypeContext = new TypeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, ComposeParser.RULE_type);
		try {
			this.state = 99;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 96;
				this.data_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 97;
				this.attribute_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 98;
				this.method_type();
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
	public data_type(): Data_typeContext {
		let localctx: Data_typeContext = new Data_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ComposeParser.RULE_data_type);
		try {
			this.state = 103;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 101;
				this.native_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 102;
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
	public native_type(): Native_typeContext {
		let localctx: Native_typeContext = new Native_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, ComposeParser.RULE_native_type);
		try {
			this.state = 108;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 105;
				this.boolean_type();
				}
				break;
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 106;
				this.number_type();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 107;
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
		this.enterRule(localctx, 14, ComposeParser.RULE_boolean_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 110;
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
		this.enterRule(localctx, 16, ComposeParser.RULE_number_type);
		try {
			this.state = 114;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 112;
				this.integer_type();
				}
				break;
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 113;
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
		this.enterRule(localctx, 18, ComposeParser.RULE_integer_type);
		try {
			this.state = 120;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 116;
				this.i32_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 117;
				this.u32_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 118;
				this.i64_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 119;
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
		this.enterRule(localctx, 20, ComposeParser.RULE_decimal_type);
		try {
			this.state = 124;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 122;
				this.f32_type();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 123;
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
		this.enterRule(localctx, 22, ComposeParser.RULE_i32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 126;
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
		this.enterRule(localctx, 24, ComposeParser.RULE_i64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 128;
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
		this.enterRule(localctx, 26, ComposeParser.RULE_u32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 130;
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
		this.enterRule(localctx, 28, ComposeParser.RULE_u64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 132;
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
		this.enterRule(localctx, 30, ComposeParser.RULE_f32_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 134;
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
		this.enterRule(localctx, 32, ComposeParser.RULE_f64_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 136;
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
		this.enterRule(localctx, 34, ComposeParser.RULE_string_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 138;
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
		this.enterRule(localctx, 36, ComposeParser.RULE_void_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 140;
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
		this.enterRule(localctx, 38, ComposeParser.RULE_attribute_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 142;
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
	public attribute_ref(): Attribute_refContext {
		let localctx: Attribute_refContext = new Attribute_refContext(this, this._ctx, this.state);
		this.enterRule(localctx, 40, ComposeParser.RULE_attribute_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 144;
			if (!( this.willBeLowercase() )) {
				throw this.createFailedPredicateException(" this.willBeLowercase() ");
			}
			this.state = 145;
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
	public class_type(): Class_typeContext {
		let localctx: Class_typeContext = new Class_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 42, ComposeParser.RULE_class_type);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 147;
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
		this.enterRule(localctx, 44, ComposeParser.RULE_class_ref);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 149;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 150;
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
	public method_type(): Method_typeContext {
		let localctx: Method_typeContext = new Method_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 46, ComposeParser.RULE_method_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 165;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 152;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 153;
				this.match(ComposeParser.LPAR);
				this.state = 162;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 154;
					this.parameter();
					this.state = 159;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===42) {
						{
						{
						this.state = 155;
						this.match(ComposeParser.COMMA);
						this.state = 156;
						this.parameter();
						}
						}
						this.state = 161;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 164;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 167;
			this.match(ComposeParser.ARROW);
			this.state = 168;
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
	public return_types(): Return_typesContext {
		let localctx: Return_typesContext = new Return_typesContext(this, this._ctx, this.state);
		this.enterRule(localctx, 48, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 179;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 12, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 170;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 171;
				this.type_();
				this.state = 176;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 172;
						this.match(ComposeParser.COMMA);
						this.state = 173;
						this.type_();
						}
						}
					}
					this.state = 178;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 11, this._ctx);
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
		this.enterRule(localctx, 50, ComposeParser.RULE_parameter);
		try {
			this.state = 190;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 181;
				this.attribute_type();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 182;
				this.identifier();
				this.state = 183;
				this.match(ComposeParser.COLON);
				this.state = 184;
				this.data_type();
				}
				break;
			case 3:
				localctx = new MethodParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 186;
				this.identifier();
				this.state = 187;
				this.match(ComposeParser.COLON);
				this.state = 188;
				this.method_type();
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
		this.enterRule(localctx, 52, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 193;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 192;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 195;
			this.match(ComposeParser.CLASS);
			this.state = 196;
			localctx._id = this.class_ref();
			this.state = 208;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===24) {
				{
				this.state = 197;
				this.match(ComposeParser.LPAR);
				this.state = 198;
				this.attribute_ref();
				this.state = 203;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 199;
					this.match(ComposeParser.COMMA);
					this.state = 200;
					this.attribute_ref();
					}
					}
					this.state = 205;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 206;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 219;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 210;
				this.match(ComposeParser.EXTENDS);
				this.state = 211;
				this.class_ref();
				this.state = 216;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 212;
					this.match(ComposeParser.COMMA);
					this.state = 213;
					this.class_ref();
					}
					}
					this.state = 218;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 221;
			this.match(ComposeParser.LCURL);
			this.state = 230;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===15) {
				{
				this.state = 222;
				this.method_declaration();
				this.state = 227;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 223;
					this.match(ComposeParser.COMMA);
					this.state = 224;
					this.method_declaration();
					}
					}
					this.state = 229;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 232;
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
	public method_declaration(): Method_declarationContext {
		let localctx: Method_declarationContext = new Method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 54, ComposeParser.RULE_method_declaration);
		try {
			this.state = 236;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 234;
				this.abstract_method_declaration();
				}
				break;
			case 15:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 235;
				this.concrete_method_declaration();
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
	public abstract_method_declaration(): Abstract_method_declarationContext {
		let localctx: Abstract_method_declarationContext = new Abstract_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, ComposeParser.RULE_abstract_method_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 238;
			this.match(ComposeParser.ABSTRACT);
			this.state = 239;
			this.method_prototype(true);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public method_prototype(mandatory_return: boolean): Method_prototypeContext {
		let localctx: Method_prototypeContext = new Method_prototypeContext(this, this._ctx, this.state, mandatory_return);
		this.enterRule(localctx, 58, ComposeParser.RULE_method_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 241;
			this.match(ComposeParser.FN);
			this.state = 242;
			this.identifier();
			this.state = 243;
			this.match(ComposeParser.LPAR);
			this.state = 252;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 23, this._ctx) ) {
			case 1:
				{
				this.state = 244;
				this.parameter();
				this.state = 249;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 245;
					this.match(ComposeParser.COMMA);
					this.state = 246;
					this.parameter();
					}
					}
					this.state = 251;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 254;
			this.match(ComposeParser.RPAR);
			this.state = 263;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 25, this._ctx) ) {
			case 1:
				{
				this.state = 255;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 256;
				this.match(ComposeParser.COLON);
				this.state = 257;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 258;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 261;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===41) {
					{
					this.state = 259;
					this.match(ComposeParser.COLON);
					this.state = 260;
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
	public concrete_method_declaration(): Concrete_method_declarationContext {
		let localctx: Concrete_method_declarationContext = new Concrete_method_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 60, ComposeParser.RULE_concrete_method_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 265;
			this.method_prototype(false);
			this.state = 266;
			this.match(ComposeParser.LCURL);
			this.state = 270;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===74) {
				{
				{
				this.state = 267;
				this.statement();
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
	public statement(): StatementContext {
		let localctx: StatementContext = new StatementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ComposeParser.RULE_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 275;
			this.assign_statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public assign_statement(): Assign_statementContext {
		let localctx: Assign_statementContext = new Assign_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 64, ComposeParser.RULE_assign_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 277;
			this.identifier();
			this.state = 281;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 27, this._ctx) ) {
			case 1:
				{
				this.state = 278;
				this.match(ComposeParser.COLON);
				this.state = 279;
				this.data_type();
				}
				break;
			case 2:
				{
				this.state = 280;
				this.method_type();
				}
				break;
			}
			this.state = 283;
			this.match(ComposeParser.ASSIGN);
			this.state = 284;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public expression(): ExpressionContext {
		let localctx: ExpressionContext = new ExpressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 66, ComposeParser.RULE_expression);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 286;
			this.literal_expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 68, ComposeParser.RULE_literal_expression);
		try {
			this.state = 297;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 73:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 288;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 70:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 289;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 68:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 290;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 69:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 291;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 71:
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 292;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 72:
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 293;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 26:
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 294;
				this.list_literal();
				}
				break;
			case 32:
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 295;
				this.set_literal();
				}
				break;
			case 28:
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 296;
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
		this.enterRule(localctx, 70, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 299;
			this.match(ComposeParser.LBRAK);
			this.state = 308;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 69) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 63) !== 0)) {
				{
				this.state = 300;
				this.expression();
				this.state = 305;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 301;
					this.match(ComposeParser.COMMA);
					this.state = 302;
					this.expression();
					}
					}
					this.state = 307;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 310;
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
		this.enterRule(localctx, 72, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 312;
			this.match(ComposeParser.LT);
			this.state = 321;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 26)) & ~0x1F) === 0 && ((1 << (_la - 26)) & 69) !== 0) || ((((_la - 68)) & ~0x1F) === 0 && ((1 << (_la - 68)) & 63) !== 0)) {
				{
				this.state = 313;
				this.expression();
				this.state = 318;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 314;
					this.match(ComposeParser.COMMA);
					this.state = 315;
					this.expression();
					}
					}
					this.state = 320;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 323;
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
		this.enterRule(localctx, 74, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 325;
			this.match(ComposeParser.LCURL);
			this.state = 334;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===74) {
				{
				this.state = 326;
				this.map_entry();
				this.state = 331;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===42) {
					{
					{
					this.state = 327;
					this.match(ComposeParser.COMMA);
					this.state = 328;
					this.map_entry();
					}
					}
					this.state = 333;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 336;
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
		this.enterRule(localctx, 76, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 338;
			this.match(ComposeParser.IDENTIFIER);
			this.state = 339;
			this.match(ComposeParser.COLON);
			this.state = 340;
			this.expression();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
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
		case 20:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 22:
			return this.class_ref_sempred(localctx as Class_refContext, predIndex);
		case 29:
			return this.method_prototype_sempred(localctx as Method_prototypeContext, predIndex);
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
	private method_prototype_sempred(localctx: Method_prototypeContext, predIndex: number): boolean {
		switch (predIndex) {
		case 2:
			return  localctx.mandatory_return ;
		case 3:
			return  !localctx.mandatory_return ;
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,77,343,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,
	0,5,0,80,8,0,10,0,12,0,83,9,0,1,1,1,1,1,1,3,1,88,8,1,1,2,1,2,1,2,1,2,1,
	2,1,3,1,3,1,4,1,4,1,4,3,4,100,8,4,1,5,1,5,3,5,104,8,5,1,6,1,6,1,6,3,6,109,
	8,6,1,7,1,7,1,8,1,8,3,8,115,8,8,1,9,1,9,1,9,1,9,3,9,121,8,9,1,10,1,10,3,
	10,125,8,10,1,11,1,11,1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,
	1,17,1,17,1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,
	23,1,23,1,23,1,23,1,23,5,23,158,8,23,10,23,12,23,161,9,23,3,23,163,8,23,
	1,23,3,23,166,8,23,1,23,1,23,1,23,1,24,1,24,1,24,1,24,5,24,175,8,24,10,
	24,12,24,178,9,24,3,24,180,8,24,1,25,1,25,1,25,1,25,1,25,1,25,1,25,1,25,
	1,25,3,25,191,8,25,1,26,3,26,194,8,26,1,26,1,26,1,26,1,26,1,26,1,26,5,26,
	202,8,26,10,26,12,26,205,9,26,1,26,1,26,3,26,209,8,26,1,26,1,26,1,26,1,
	26,5,26,215,8,26,10,26,12,26,218,9,26,3,26,220,8,26,1,26,1,26,1,26,1,26,
	5,26,226,8,26,10,26,12,26,229,9,26,3,26,231,8,26,1,26,1,26,1,27,1,27,3,
	27,237,8,27,1,28,1,28,1,28,1,29,1,29,1,29,1,29,1,29,1,29,5,29,248,8,29,
	10,29,12,29,251,9,29,3,29,253,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,
	29,262,8,29,3,29,264,8,29,1,30,1,30,1,30,5,30,269,8,30,10,30,12,30,272,
	9,30,1,30,1,30,1,31,1,31,1,32,1,32,1,32,1,32,3,32,282,8,32,1,32,1,32,1,
	32,1,33,1,33,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,1,34,3,34,298,8,34,
	1,35,1,35,1,35,1,35,5,35,304,8,35,10,35,12,35,307,9,35,3,35,309,8,35,1,
	35,1,35,1,36,1,36,1,36,1,36,5,36,317,8,36,10,36,12,36,320,9,36,3,36,322,
	8,36,1,36,1,36,1,37,1,37,1,37,1,37,5,37,330,8,37,10,37,12,37,333,9,37,3,
	37,335,8,37,1,37,1,37,1,38,1,38,1,38,1,38,1,38,0,0,39,0,2,4,6,8,10,12,14,
	16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,
	64,66,68,70,72,74,76,0,0,351,0,81,1,0,0,0,2,87,1,0,0,0,4,89,1,0,0,0,6,94,
	1,0,0,0,8,99,1,0,0,0,10,103,1,0,0,0,12,108,1,0,0,0,14,110,1,0,0,0,16,114,
	1,0,0,0,18,120,1,0,0,0,20,124,1,0,0,0,22,126,1,0,0,0,24,128,1,0,0,0,26,
	130,1,0,0,0,28,132,1,0,0,0,30,134,1,0,0,0,32,136,1,0,0,0,34,138,1,0,0,0,
	36,140,1,0,0,0,38,142,1,0,0,0,40,144,1,0,0,0,42,147,1,0,0,0,44,149,1,0,
	0,0,46,165,1,0,0,0,48,179,1,0,0,0,50,190,1,0,0,0,52,193,1,0,0,0,54,236,
	1,0,0,0,56,238,1,0,0,0,58,241,1,0,0,0,60,265,1,0,0,0,62,275,1,0,0,0,64,
	277,1,0,0,0,66,286,1,0,0,0,68,297,1,0,0,0,70,299,1,0,0,0,72,312,1,0,0,0,
	74,325,1,0,0,0,76,338,1,0,0,0,78,80,3,2,1,0,79,78,1,0,0,0,80,83,1,0,0,0,
	81,79,1,0,0,0,81,82,1,0,0,0,82,1,1,0,0,0,83,81,1,0,0,0,84,88,3,4,2,0,85,
	88,3,52,26,0,86,88,3,54,27,0,87,84,1,0,0,0,87,85,1,0,0,0,87,86,1,0,0,0,
	88,3,1,0,0,0,89,90,5,11,0,0,90,91,3,6,3,0,91,92,5,41,0,0,92,93,3,10,5,0,
	93,5,1,0,0,0,94,95,5,74,0,0,95,7,1,0,0,0,96,100,3,10,5,0,97,100,3,38,19,
	0,98,100,3,46,23,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,9,1,0,
	0,0,101,104,3,12,6,0,102,104,3,42,21,0,103,101,1,0,0,0,103,102,1,0,0,0,
	104,11,1,0,0,0,105,109,3,14,7,0,106,109,3,16,8,0,107,109,3,34,17,0,108,
	105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,0,109,13,1,0,0,0,110,111,5,9,
	0,0,111,15,1,0,0,0,112,115,3,18,9,0,113,115,3,20,10,0,114,112,1,0,0,0,114,
	113,1,0,0,0,115,17,1,0,0,0,116,121,3,22,11,0,117,121,3,26,13,0,118,121,
	3,24,12,0,119,121,3,28,14,0,120,116,1,0,0,0,120,117,1,0,0,0,120,118,1,0,
	0,0,120,119,1,0,0,0,121,19,1,0,0,0,122,125,3,30,15,0,123,125,3,32,16,0,
	124,122,1,0,0,0,124,123,1,0,0,0,125,21,1,0,0,0,126,127,5,1,0,0,127,23,1,
	0,0,0,128,129,5,2,0,0,129,25,1,0,0,0,130,131,5,3,0,0,131,27,1,0,0,0,132,
	133,5,4,0,0,133,29,1,0,0,0,134,135,5,5,0,0,135,31,1,0,0,0,136,137,5,6,0,
	0,137,33,1,0,0,0,138,139,5,8,0,0,139,35,1,0,0,0,140,141,5,10,0,0,141,37,
	1,0,0,0,142,143,3,40,20,0,143,39,1,0,0,0,144,145,4,20,0,0,145,146,5,74,
	0,0,146,41,1,0,0,0,147,148,3,44,22,0,148,43,1,0,0,0,149,150,4,22,1,0,150,
	151,5,74,0,0,151,45,1,0,0,0,152,166,3,38,19,0,153,162,5,24,0,0,154,159,
	3,50,25,0,155,156,5,42,0,0,156,158,3,50,25,0,157,155,1,0,0,0,158,161,1,
	0,0,0,159,157,1,0,0,0,159,160,1,0,0,0,160,163,1,0,0,0,161,159,1,0,0,0,162,
	154,1,0,0,0,162,163,1,0,0,0,163,164,1,0,0,0,164,166,5,25,0,0,165,152,1,
	0,0,0,165,153,1,0,0,0,166,167,1,0,0,0,167,168,5,30,0,0,168,169,3,48,24,
	0,169,47,1,0,0,0,170,180,3,36,18,0,171,176,3,8,4,0,172,173,5,42,0,0,173,
	175,3,8,4,0,174,172,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,
	0,0,177,180,1,0,0,0,178,176,1,0,0,0,179,170,1,0,0,0,179,171,1,0,0,0,180,
	49,1,0,0,0,181,191,3,38,19,0,182,183,3,6,3,0,183,184,5,41,0,0,184,185,3,
	10,5,0,185,191,1,0,0,0,186,187,3,6,3,0,187,188,5,41,0,0,188,189,3,46,23,
	0,189,191,1,0,0,0,190,181,1,0,0,0,190,182,1,0,0,0,190,186,1,0,0,0,191,51,
	1,0,0,0,192,194,5,12,0,0,193,192,1,0,0,0,193,194,1,0,0,0,194,195,1,0,0,
	0,195,196,5,13,0,0,196,208,3,44,22,0,197,198,5,24,0,0,198,203,3,40,20,0,
	199,200,5,42,0,0,200,202,3,40,20,0,201,199,1,0,0,0,202,205,1,0,0,0,203,
	201,1,0,0,0,203,204,1,0,0,0,204,206,1,0,0,0,205,203,1,0,0,0,206,207,5,25,
	0,0,207,209,1,0,0,0,208,197,1,0,0,0,208,209,1,0,0,0,209,219,1,0,0,0,210,
	211,5,14,0,0,211,216,3,44,22,0,212,213,5,42,0,0,213,215,3,44,22,0,214,212,
	1,0,0,0,215,218,1,0,0,0,216,214,1,0,0,0,216,217,1,0,0,0,217,220,1,0,0,0,
	218,216,1,0,0,0,219,210,1,0,0,0,219,220,1,0,0,0,220,221,1,0,0,0,221,230,
	5,28,0,0,222,227,3,54,27,0,223,224,5,42,0,0,224,226,3,54,27,0,225,223,1,
	0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,231,1,0,0,0,229,
	227,1,0,0,0,230,222,1,0,0,0,230,231,1,0,0,0,231,232,1,0,0,0,232,233,5,29,
	0,0,233,53,1,0,0,0,234,237,3,56,28,0,235,237,3,60,30,0,236,234,1,0,0,0,
	236,235,1,0,0,0,237,55,1,0,0,0,238,239,5,12,0,0,239,240,3,58,29,0,240,57,
	1,0,0,0,241,242,5,15,0,0,242,243,3,6,3,0,243,252,5,24,0,0,244,249,3,50,
	25,0,245,246,5,42,0,0,246,248,3,50,25,0,247,245,1,0,0,0,248,251,1,0,0,0,
	249,247,1,0,0,0,249,250,1,0,0,0,250,253,1,0,0,0,251,249,1,0,0,0,252,244,
	1,0,0,0,252,253,1,0,0,0,253,254,1,0,0,0,254,263,5,25,0,0,255,256,4,29,2,
	1,256,257,5,41,0,0,257,264,3,48,24,0,258,261,4,29,3,1,259,260,5,41,0,0,
	260,262,3,48,24,0,261,259,1,0,0,0,261,262,1,0,0,0,262,264,1,0,0,0,263,255,
	1,0,0,0,263,258,1,0,0,0,264,59,1,0,0,0,265,266,3,58,29,0,266,270,5,28,0,
	0,267,269,3,62,31,0,268,267,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,
	271,1,0,0,0,271,273,1,0,0,0,272,270,1,0,0,0,273,274,5,29,0,0,274,61,1,0,
	0,0,275,276,3,64,32,0,276,63,1,0,0,0,277,281,3,6,3,0,278,279,5,41,0,0,279,
	282,3,10,5,0,280,282,3,46,23,0,281,278,1,0,0,0,281,280,1,0,0,0,282,283,
	1,0,0,0,283,284,5,56,0,0,284,285,3,66,33,0,285,65,1,0,0,0,286,287,3,68,
	34,0,287,67,1,0,0,0,288,298,5,73,0,0,289,298,5,70,0,0,290,298,5,68,0,0,
	291,298,5,69,0,0,292,298,5,71,0,0,293,298,5,72,0,0,294,298,3,70,35,0,295,
	298,3,72,36,0,296,298,3,74,37,0,297,288,1,0,0,0,297,289,1,0,0,0,297,290,
	1,0,0,0,297,291,1,0,0,0,297,292,1,0,0,0,297,293,1,0,0,0,297,294,1,0,0,0,
	297,295,1,0,0,0,297,296,1,0,0,0,298,69,1,0,0,0,299,308,5,26,0,0,300,305,
	3,66,33,0,301,302,5,42,0,0,302,304,3,66,33,0,303,301,1,0,0,0,304,307,1,
	0,0,0,305,303,1,0,0,0,305,306,1,0,0,0,306,309,1,0,0,0,307,305,1,0,0,0,308,
	300,1,0,0,0,308,309,1,0,0,0,309,310,1,0,0,0,310,311,5,27,0,0,311,71,1,0,
	0,0,312,321,5,32,0,0,313,318,3,66,33,0,314,315,5,42,0,0,315,317,3,66,33,
	0,316,314,1,0,0,0,317,320,1,0,0,0,318,316,1,0,0,0,318,319,1,0,0,0,319,322,
	1,0,0,0,320,318,1,0,0,0,321,313,1,0,0,0,321,322,1,0,0,0,322,323,1,0,0,0,
	323,324,5,31,0,0,324,73,1,0,0,0,325,334,5,28,0,0,326,331,3,76,38,0,327,
	328,5,42,0,0,328,330,3,76,38,0,329,327,1,0,0,0,330,333,1,0,0,0,331,329,
	1,0,0,0,331,332,1,0,0,0,332,335,1,0,0,0,333,331,1,0,0,0,334,326,1,0,0,0,
	334,335,1,0,0,0,335,336,1,0,0,0,336,337,5,29,0,0,337,75,1,0,0,0,338,339,
	5,74,0,0,339,340,5,41,0,0,340,341,3,66,33,0,341,77,1,0,0,0,35,81,87,99,
	103,108,114,120,124,159,162,165,176,179,190,193,203,208,216,219,227,230,
	236,249,252,261,263,270,281,297,305,308,318,321,331,334];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!ComposeParser.__ATN) {
			ComposeParser.__ATN = new ATNDeserializer().deserialize(ComposeParser._serializedATN);
		}

		return ComposeParser.__ATN;
	}


	static DecisionsToDFA = ComposeParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class UnitContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_unit;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterUnit) {
	 		listener.enterUnit(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitUnit) {
	 		listener.exitUnit(this);
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
	public method_declaration(): Method_declarationContext {
		return this.getTypedRuleContext(Method_declarationContext, 0) as Method_declarationContext;
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
	public ATTR(): TerminalNode {
		return this.getToken(ComposeParser.ATTR, 0);
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


export class TypeContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public attribute_type(): Attribute_typeContext {
		return this.getTypedRuleContext(Attribute_typeContext, 0) as Attribute_typeContext;
	}
	public method_type(): Method_typeContext {
		return this.getTypedRuleContext(Method_typeContext, 0) as Method_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterType) {
	 		listener.enterType(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitType) {
	 		listener.exitType(this);
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
	public u32_type(): U32_typeContext {
		return this.getTypedRuleContext(U32_typeContext, 0) as U32_typeContext;
	}
	public i64_type(): I64_typeContext {
		return this.getTypedRuleContext(I64_typeContext, 0) as I64_typeContext;
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


export class Attribute_refContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
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


export class Method_typeContext extends ParserRuleContext {
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
    	return ComposeParser.RULE_method_type;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMethod_type) {
	 		listener.enterMethod_type(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMethod_type) {
	 		listener.exitMethod_type(this);
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
	public type__list(): TypeContext[] {
		return this.getTypedRuleContexts(TypeContext) as TypeContext[];
	}
	public type_(i: number): TypeContext {
		return this.getTypedRuleContext(TypeContext, i) as TypeContext;
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
	public attribute_type(): Attribute_typeContext {
		return this.getTypedRuleContext(Attribute_typeContext, 0) as Attribute_typeContext;
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
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
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
export class MethodParameterContext extends ParameterContext {
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
	public method_type(): Method_typeContext {
		return this.getTypedRuleContext(Method_typeContext, 0) as Method_typeContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMethodParameter) {
	 		listener.enterMethodParameter(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMethodParameter) {
	 		listener.exitMethodParameter(this);
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
	public method_declaration_list(): Method_declarationContext[] {
		return this.getTypedRuleContexts(Method_declarationContext) as Method_declarationContext[];
	}
	public method_declaration(i: number): Method_declarationContext {
		return this.getTypedRuleContext(Method_declarationContext, i) as Method_declarationContext;
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


export class Method_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public abstract_method_declaration(): Abstract_method_declarationContext {
		return this.getTypedRuleContext(Abstract_method_declarationContext, 0) as Abstract_method_declarationContext;
	}
	public concrete_method_declaration(): Concrete_method_declarationContext {
		return this.getTypedRuleContext(Concrete_method_declarationContext, 0) as Concrete_method_declarationContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_method_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMethod_declaration) {
	 		listener.enterMethod_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMethod_declaration) {
	 		listener.exitMethod_declaration(this);
		}
	}
}


export class Abstract_method_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public ABSTRACT(): TerminalNode {
		return this.getToken(ComposeParser.ABSTRACT, 0);
	}
	public method_prototype(): Method_prototypeContext {
		return this.getTypedRuleContext(Method_prototypeContext, 0) as Method_prototypeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_abstract_method_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAbstract_method_declaration) {
	 		listener.enterAbstract_method_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAbstract_method_declaration) {
	 		listener.exitAbstract_method_declaration(this);
		}
	}
}


export class Method_prototypeContext extends ParserRuleContext {
	public mandatory_return: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, mandatory_return: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.mandatory_return = mandatory_return;
	}
	public FN(): TerminalNode {
		return this.getToken(ComposeParser.FN, 0);
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
    	return ComposeParser.RULE_method_prototype;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterMethod_prototype) {
	 		listener.enterMethod_prototype(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitMethod_prototype) {
	 		listener.exitMethod_prototype(this);
		}
	}
}


export class Concrete_method_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public method_prototype(): Method_prototypeContext {
		return this.getTypedRuleContext(Method_prototypeContext, 0) as Method_prototypeContext;
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
    	return ComposeParser.RULE_concrete_method_declaration;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterConcrete_method_declaration) {
	 		listener.enterConcrete_method_declaration(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitConcrete_method_declaration) {
	 		listener.exitConcrete_method_declaration(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign_statement(): Assign_statementContext {
		return this.getTypedRuleContext(Assign_statementContext, 0) as Assign_statementContext;
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


export class Assign_statementContext extends ParserRuleContext {
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
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public method_type(): Method_typeContext {
		return this.getTypedRuleContext(Method_typeContext, 0) as Method_typeContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_assign_statement;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterAssign_statement) {
	 		listener.enterAssign_statement(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitAssign_statement) {
	 		listener.exitAssign_statement(this);
		}
	}
}


export class ExpressionContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public literal_expression(): Literal_expressionContext {
		return this.getTypedRuleContext(Literal_expressionContext, 0) as Literal_expressionContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_expression;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterExpression) {
	 		listener.enterExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitExpression) {
	 		listener.exitExpression(this);
		}
	}
}


export class Literal_expressionContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public NULL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.NULL_LITERAL, 0);
	}
	public BOOLEAN_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.BOOLEAN_LITERAL, 0);
	}
	public INTEGER_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.INTEGER_LITERAL, 0);
	}
	public DECIMAL_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.DECIMAL_LITERAL, 0);
	}
	public CHAR_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.CHAR_LITERAL, 0);
	}
	public STRING_LITERAL(): TerminalNode {
		return this.getToken(ComposeParser.STRING_LITERAL, 0);
	}
	public list_literal(): List_literalContext {
		return this.getTypedRuleContext(List_literalContext, 0) as List_literalContext;
	}
	public set_literal(): Set_literalContext {
		return this.getTypedRuleContext(Set_literalContext, 0) as Set_literalContext;
	}
	public map_literal(): Map_literalContext {
		return this.getTypedRuleContext(Map_literalContext, 0) as Map_literalContext;
	}
    public get ruleIndex(): number {
    	return ComposeParser.RULE_literal_expression;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterLiteral_expression) {
	 		listener.enterLiteral_expression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitLiteral_expression) {
	 		listener.exitLiteral_expression(this);
		}
	}
}


export class List_literalContext extends ParserRuleContext {
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
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
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
