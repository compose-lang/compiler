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
	public static readonly U32 = 3;
	public static readonly U64 = 4;
	public static readonly F32 = 5;
	public static readonly F64 = 6;
	public static readonly V128 = 7;
	public static readonly STRING = 8;
	public static readonly BOOLEAN = 9;
	public static readonly VOID = 10;
	public static readonly ATTRIBUTE = 11;
	public static readonly ABSTRACT = 12;
	public static readonly CLASS = 13;
	public static readonly EXTENDS = 14;
	public static readonly STATIC = 15;
	public static readonly FUNCTION = 16;
	public static readonly LET = 17;
	public static readonly NEW = 18;
	public static readonly CONST = 19;
	public static readonly RETURN = 20;
	public static readonly IF = 21;
	public static readonly ELSE = 22;
	public static readonly SWITCH = 23;
	public static readonly CASE = 24;
	public static readonly FOR = 25;
	public static readonly DO = 26;
	public static readonly WHILE = 27;
	public static readonly BREAK = 28;
	public static readonly TRY = 29;
	public static readonly CATCH = 30;
	public static readonly FINALLY = 31;
	public static readonly THIS = 32;
	public static readonly SUPER = 33;
	public static readonly TYPE_OF = 34;
	public static readonly INSTANCE_OF = 35;
	public static readonly IN = 36;
	public static readonly AS = 37;
	public static readonly LPAR = 38;
	public static readonly RPAR = 39;
	public static readonly LBRAK = 40;
	public static readonly RBRAK = 41;
	public static readonly LCURL = 42;
	public static readonly RCURL = 43;
	public static readonly ARROW = 44;
	public static readonly GT = 45;
	public static readonly LT = 46;
	public static readonly LTE = 47;
	public static readonly GTE = 48;
	public static readonly EQUALS = 49;
	public static readonly NOT_EQUALS = 50;
	public static readonly NOT = 51;
	public static readonly AND = 52;
	public static readonly OR = 53;
	public static readonly QUESTION = 54;
	public static readonly SEMI = 55;
	public static readonly COLON = 56;
	public static readonly COMMA = 57;
	public static readonly DOT = 58;
	public static readonly AT = 59;
	public static readonly INC = 60;
	public static readonly DEC = 61;
	public static readonly PLUS = 62;
	public static readonly MINUS = 63;
	public static readonly STAR = 64;
	public static readonly SLASH = 65;
	public static readonly BSLASH = 66;
	public static readonly PERCENT = 67;
	public static readonly CARET = 68;
	public static readonly TILDE = 69;
	public static readonly AMP = 70;
	public static readonly PIPE = 71;
	public static readonly LSHIFT = 72;
	public static readonly RSHIFT = 73;
	public static readonly URSHIFT = 74;
	public static readonly ASSIGN = 75;
	public static readonly ADD_ASSIGN = 76;
	public static readonly SUB_ASSIGN = 77;
	public static readonly MUL_ASSIGN = 78;
	public static readonly DIV_ASSIGN = 79;
	public static readonly AND_ASSIGN = 80;
	public static readonly OR_ASSIGN = 81;
	public static readonly XOR_ASSIGN = 82;
	public static readonly MOD_ASSIGN = 83;
	public static readonly LSHIFT_ASSIGN = 84;
	public static readonly RSHIFT_ASSIGN = 85;
	public static readonly URSHIFT_ASSIGN = 86;
	public static readonly INTEGER_LITERAL = 87;
	public static readonly DECIMAL_LITERAL = 88;
	public static readonly BOOLEAN_LITERAL = 89;
	public static readonly CHAR_LITERAL = 90;
	public static readonly STRING_LITERAL = 91;
	public static readonly NULL_LITERAL = 92;
	public static readonly IDENTIFIER = 93;
	public static readonly WS = 94;
	public static readonly COMMENT = 95;
	public static readonly LINE_COMMENT = 96;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_compilation_unit = 0;
	public static readonly RULE_global_statement = 1;
	public static readonly RULE_declaration = 2;
	public static readonly RULE_attribute_declaration = 3;
	public static readonly RULE_identifier = 4;
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
	public static readonly RULE_function_type = 23;
	public static readonly RULE_return_type = 24;
	public static readonly RULE_return_types = 25;
	public static readonly RULE_parameter = 26;
	public static readonly RULE_class_declaration = 27;
	public static readonly RULE_function_declaration = 28;
	public static readonly RULE_abstract_function_declaration = 29;
	public static readonly RULE_function_prototype = 30;
	public static readonly RULE_concrete_function_declaration = 31;
	public static readonly RULE_statement = 32;
	public static readonly RULE_assign_instance_statement = 33;
	public static readonly RULE_return_statement = 34;
	public static readonly RULE_expression = 35;
	public static readonly RULE_function_call_expression = 36;
	public static readonly RULE_literal_expression = 37;
	public static readonly RULE_list_literal = 38;
	public static readonly RULE_set_literal = 39;
	public static readonly RULE_map_literal = 40;
	public static readonly RULE_map_entry = 41;
	public static readonly literalNames: string[] = [ null, "'i32'", "'i64'", 
                                                   "'u32'", "'u64'", "'f32'", 
                                                   "'f64'", "'v128'", "'string'", 
                                                   "'boolean'", "'void'", 
                                                   "'attribute'", "'abstract'", 
                                                   "'class'", "'extends'", 
                                                   "'static'", "'function'", 
                                                   "'let'", "'new'", "'const'", 
                                                   "'return'", "'if'", "'else'", 
                                                   "'switch'", "'case'", 
                                                   "'for'", "'do'", "'while'", 
                                                   "'break'", "'try'", "'catch'", 
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
                                                   "'.'", "'@'", "'++'", 
                                                   "'--'", "'+'", "'-'", 
                                                   "'*'", "'/'", "'\\'", 
                                                   "'%'", "'^'", "'~'", 
                                                   "'&'", "'|'", "'<<'", 
                                                   "'>>'", "'>>>'", "'='", 
                                                   "'+='", "'-='", "'*='", 
                                                   "'/='", "'&='", "'|='", 
                                                   "'^='", "'%='", "'<<='", 
                                                   "'>>='", "'>>>='", null, 
                                                   null, null, null, null, 
                                                   "'null'" ];
	public static readonly symbolicNames: string[] = [ null, "I32", "I64", 
                                                    "U32", "U64", "F32", 
                                                    "F64", "V128", "STRING", 
                                                    "BOOLEAN", "VOID", "ATTRIBUTE", 
                                                    "ABSTRACT", "CLASS", 
                                                    "EXTENDS", "STATIC", 
                                                    "FUNCTION", "LET", "NEW", 
                                                    "CONST", "RETURN", "IF", 
                                                    "ELSE", "SWITCH", "CASE", 
                                                    "FOR", "DO", "WHILE", 
                                                    "BREAK", "TRY", "CATCH", 
                                                    "FINALLY", "THIS", "SUPER", 
                                                    "TYPE_OF", "INSTANCE_OF", 
                                                    "IN", "AS", "LPAR", 
                                                    "RPAR", "LBRAK", "RBRAK", 
                                                    "LCURL", "RCURL", "ARROW", 
                                                    "GT", "LT", "LTE", "GTE", 
                                                    "EQUALS", "NOT_EQUALS", 
                                                    "NOT", "AND", "OR", 
                                                    "QUESTION", "SEMI", 
                                                    "COLON", "COMMA", "DOT", 
                                                    "AT", "INC", "DEC", 
                                                    "PLUS", "MINUS", "STAR", 
                                                    "SLASH", "BSLASH", "PERCENT", 
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
                                                    "NULL_LITERAL", "IDENTIFIER", 
                                                    "WS", "COMMENT", "LINE_COMMENT" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"compilation_unit", "global_statement", "declaration", "attribute_declaration", 
		"identifier", "data_type", "native_type", "boolean_type", "number_type", 
		"integer_type", "decimal_type", "i32_type", "i64_type", "u32_type", "u64_type", 
		"f32_type", "f64_type", "string_type", "void_type", "attribute_type", 
		"attribute_ref", "class_type", "class_ref", "function_type", "return_type", 
		"return_types", "parameter", "class_declaration", "function_declaration", 
		"abstract_function_declaration", "function_prototype", "concrete_function_declaration", 
		"statement", "assign_instance_statement", "return_statement", "expression", 
		"function_call_expression", "literal_expression", "list_literal", "set_literal", 
		"map_literal", "map_entry",
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
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 87;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 84;
					this.global_statement();
					}
					}
				}
				this.state = 89;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 0, this._ctx);
			}
			this.state = 93;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 79872) !== 0)) {
				{
				{
				this.state = 90;
				this.declaration();
				}
				}
				this.state = 95;
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
	public global_statement(): Global_statementContext {
		let localctx: Global_statementContext = new Global_statementContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, ComposeParser.RULE_global_statement);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 96;
			this.assign_instance_statement(true);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
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
		this.enterRule(localctx, 4, ComposeParser.RULE_declaration);
		try {
			this.state = 101;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 98;
				this.attribute_declaration();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 99;
				this.class_declaration();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 100;
				this.function_declaration();
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
		this.enterRule(localctx, 6, ComposeParser.RULE_attribute_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 103;
			this.match(ComposeParser.ATTRIBUTE);
			this.state = 104;
			this.identifier();
			this.state = 105;
			this.match(ComposeParser.COLON);
			this.state = 106;
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
		this.enterRule(localctx, 8, ComposeParser.RULE_identifier);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 108;
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
	public data_type(): Data_typeContext {
		let localctx: Data_typeContext = new Data_typeContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, ComposeParser.RULE_data_type);
		try {
			this.state = 112;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 3, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 110;
				this.native_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 111;
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
			this.state = 117;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 9:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 114;
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
				this.state = 115;
				this.number_type();
				}
				break;
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 116;
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
			this.state = 119;
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
			this.state = 123;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
			case 3:
			case 4:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 121;
				this.integer_type();
				}
				break;
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 122;
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
			this.state = 129;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 125;
				this.i32_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 126;
				this.u32_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 127;
				this.i64_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 128;
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
			this.state = 133;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 5:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 131;
				this.f32_type();
				}
				break;
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 132;
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
			this.state = 135;
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
			this.state = 137;
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
			this.state = 139;
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
			this.state = 141;
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
			this.state = 143;
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
			this.state = 145;
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
			this.state = 147;
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
			this.state = 149;
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
			this.state = 151;
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
			this.state = 153;
			if (!( this.willBeLowercase() )) {
				throw this.createFailedPredicateException(" this.willBeLowercase() ");
			}
			this.state = 154;
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
			this.state = 156;
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
			this.state = 158;
			if (!( this.willBeUppercase() )) {
				throw this.createFailedPredicateException(" this.willBeUppercase() ");
			}
			this.state = 159;
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
		this.enterRule(localctx, 46, ComposeParser.RULE_function_type);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 174;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 10, this._ctx) ) {
			case 1:
				{
				this.state = 161;
				this.attribute_type();
				}
				break;
			case 2:
				{
				this.state = 162;
				this.match(ComposeParser.LPAR);
				this.state = 171;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 9, this._ctx) ) {
				case 1:
					{
					this.state = 163;
					this.parameter();
					this.state = 168;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					while (_la===57) {
						{
						{
						this.state = 164;
						this.match(ComposeParser.COMMA);
						this.state = 165;
						this.parameter();
						}
						}
						this.state = 170;
						this._errHandler.sync(this);
						_la = this._input.LA(1);
					}
					}
					break;
				}
				this.state = 173;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this.state = 176;
			this.match(ComposeParser.ARROW);
			this.state = 177;
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
	public return_type(requireParenthesis: boolean): Return_typeContext {
		let localctx: Return_typeContext = new Return_typeContext(this, this._ctx, this.state, requireParenthesis);
		this.enterRule(localctx, 48, ComposeParser.RULE_return_type);
		try {
			this.state = 187;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 11, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 179;
				this.data_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 180;
				this.attribute_type();
				}
				break;
			case 3:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 181;
				if (!( !localctx.requireParenthesis )) {
					throw this.createFailedPredicateException(" !$requireParenthesis ");
				}
				this.state = 182;
				this.function_type();
				}
				break;
			case 4:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 183;
				this.match(ComposeParser.LPAR);
				this.state = 184;
				this.function_type();
				this.state = 185;
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
		this.enterRule(localctx, 50, ComposeParser.RULE_return_types);
		try {
			let _alt: number;
			this.state = 198;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 13, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 189;
				this.void_type();
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 190;
				this.return_type(true);
				this.state = 195;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
				while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
					if (_alt === 1) {
						{
						{
						this.state = 191;
						this.match(ComposeParser.COMMA);
						this.state = 192;
						this.return_type(false);
						}
						}
					}
					this.state = 197;
					this._errHandler.sync(this);
					_alt = this._interp.adaptivePredict(this._input, 12, this._ctx);
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
		this.enterRule(localctx, 52, ComposeParser.RULE_parameter);
		try {
			this.state = 209;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 14, this._ctx) ) {
			case 1:
				localctx = new AttributeParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 200;
				this.attribute_type();
				}
				break;
			case 2:
				localctx = new TypedParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 201;
				this.identifier();
				this.state = 202;
				this.match(ComposeParser.COLON);
				this.state = 203;
				this.data_type();
				}
				break;
			case 3:
				localctx = new FunctionParameterContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 205;
				this.identifier();
				this.state = 206;
				this.match(ComposeParser.COLON);
				this.state = 207;
				this.function_type();
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
		this.enterRule(localctx, 54, ComposeParser.RULE_class_declaration);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 212;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12) {
				{
				this.state = 211;
				this.match(ComposeParser.ABSTRACT);
				}
			}

			this.state = 214;
			this.match(ComposeParser.CLASS);
			this.state = 215;
			localctx._id = this.class_ref();
			this.state = 227;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===38) {
				{
				this.state = 216;
				this.match(ComposeParser.LPAR);
				this.state = 217;
				this.attribute_ref();
				this.state = 222;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 218;
					this.match(ComposeParser.COMMA);
					this.state = 219;
					this.attribute_ref();
					}
					}
					this.state = 224;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				this.state = 225;
				this.match(ComposeParser.RPAR);
				}
			}

			this.state = 238;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===14) {
				{
				this.state = 229;
				this.match(ComposeParser.EXTENDS);
				this.state = 230;
				this.class_ref();
				this.state = 235;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 231;
					this.match(ComposeParser.COMMA);
					this.state = 232;
					this.class_ref();
					}
					}
					this.state = 237;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 240;
			this.match(ComposeParser.LCURL);
			this.state = 249;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===12 || _la===16) {
				{
				this.state = 241;
				this.function_declaration();
				this.state = 246;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 242;
					this.match(ComposeParser.COMMA);
					this.state = 243;
					this.function_declaration();
					}
					}
					this.state = 248;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
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
	public function_declaration(): Function_declarationContext {
		let localctx: Function_declarationContext = new Function_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 56, ComposeParser.RULE_function_declaration);
		try {
			this.state = 255;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 12:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 253;
				this.abstract_function_declaration();
				}
				break;
			case 16:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 254;
				this.concrete_function_declaration();
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
	public abstract_function_declaration(): Abstract_function_declarationContext {
		let localctx: Abstract_function_declarationContext = new Abstract_function_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 58, ComposeParser.RULE_abstract_function_declaration);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 257;
			this.match(ComposeParser.ABSTRACT);
			this.state = 258;
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
		this.enterRule(localctx, 60, ComposeParser.RULE_function_prototype);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 260;
			this.match(ComposeParser.FUNCTION);
			this.state = 261;
			this.identifier();
			this.state = 262;
			this.match(ComposeParser.LPAR);
			this.state = 271;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 24, this._ctx) ) {
			case 1:
				{
				this.state = 263;
				this.parameter();
				this.state = 268;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 264;
					this.match(ComposeParser.COMMA);
					this.state = 265;
					this.parameter();
					}
					}
					this.state = 270;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
				break;
			}
			this.state = 273;
			this.match(ComposeParser.RPAR);
			this.state = 282;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 26, this._ctx) ) {
			case 1:
				{
				this.state = 274;
				if (!( localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" $mandatory_return ");
				}
				this.state = 275;
				this.match(ComposeParser.COLON);
				this.state = 276;
				this.return_types();
				}
				break;
			case 2:
				{
				this.state = 277;
				if (!( !localctx.mandatory_return )) {
					throw this.createFailedPredicateException(" !$mandatory_return ");
				}
				this.state = 280;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===56) {
					{
					this.state = 278;
					this.match(ComposeParser.COLON);
					this.state = 279;
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
	public concrete_function_declaration(): Concrete_function_declarationContext {
		let localctx: Concrete_function_declarationContext = new Concrete_function_declarationContext(this, this._ctx, this.state);
		this.enterRule(localctx, 62, ComposeParser.RULE_concrete_function_declaration);
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 284;
			this.function_prototype(false);
			this.state = 285;
			this.match(ComposeParser.LCURL);
			this.state = 289;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					{
					this.state = 286;
					this.statement();
					}
					}
				}
				this.state = 291;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 27, this._ctx);
			}
			this.state = 292;
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
		this.enterRule(localctx, 64, ComposeParser.RULE_statement);
		try {
			this.state = 296;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 28, this._ctx) ) {
			case 1:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 294;
				this.assign_instance_statement(false);
				}
				break;
			case 2:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 295;
				this.return_statement();
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
	public assign_instance_statement(requireModifier: boolean): Assign_instance_statementContext {
		let localctx: Assign_instance_statementContext = new Assign_instance_statementContext(this, this._ctx, this.state, requireModifier);
		this.enterRule(localctx, 66, ComposeParser.RULE_assign_instance_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 304;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 30, this._ctx) ) {
			case 1:
				{
				this.state = 298;
				if (!( localctx.requireModifier )) {
					throw this.createFailedPredicateException(" $requireModifier ");
				}
				this.state = 299;
				_la = this._input.LA(1);
				if(!(_la===17 || _la===19)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				break;
			case 2:
				{
				 !localctx.requireModifier 
				this.state = 302;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===17 || _la===19) {
					{
					this.state = 301;
					_la = this._input.LA(1);
					if(!(_la===17 || _la===19)) {
					this._errHandler.recoverInline(this);
					}
					else {
						this._errHandler.reportMatch(this);
					    this.consume();
					}
					}
				}

				}
				break;
			}
			this.state = 306;
			this.identifier();
			this.state = 310;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 31, this._ctx) ) {
			case 1:
				{
				this.state = 307;
				this.match(ComposeParser.COLON);
				this.state = 308;
				this.data_type();
				}
				break;
			case 2:
				{
				this.state = 309;
				this.function_type();
				}
				break;
			}
			this.state = 312;
			this.match(ComposeParser.ASSIGN);
			this.state = 313;
			this.expression(0);
			this.state = 314;
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
		this.enterRule(localctx, 68, ComposeParser.RULE_return_statement);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 316;
			this.match(ComposeParser.RETURN);
			this.state = 318;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4027073863) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 33292289) !== 0)) {
				{
				this.state = 317;
				this.expression(0);
				}
			}

			this.state = 320;
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
		let _startState: number = 70;
		this.enterRecursionRule(localctx, 70, ComposeParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 360;
			this._errHandler.sync(this);
			switch ( this._interp.adaptivePredict(this._input, 35, this._ctx) ) {
			case 1:
				{
				localctx = new NewExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;

				this.state = 323;
				this.match(ComposeParser.NEW);
				this.state = 324;
				this.function_call_expression();
				}
				break;
			case 2:
				{
				localctx = new FunctionCallExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 325;
				this.function_call_expression();
				}
				break;
			case 3:
				{
				localctx = new TypeofExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 326;
				this.match(ComposeParser.TYPE_OF);
				this.state = 333;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case 38:
					{
					{
					this.state = 327;
					this.match(ComposeParser.LPAR);
					this.state = 328;
					this.expression(0);
					this.state = 329;
					this.match(ComposeParser.RPAR);
					}
					}
					break;
				case 34:
					{
					this.state = 331;
					this.match(ComposeParser.TYPE_OF);
					this.state = 332;
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
				this.state = 335;
				this.match(ComposeParser.INC);
				this.state = 336;
				this.expression(25);
				}
				break;
			case 5:
				{
				localctx = new UnaryPreDecrementExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 337;
				this.match(ComposeParser.DEC);
				this.state = 338;
				this.expression(24);
				}
				break;
			case 6:
				{
				localctx = new UnaryPlusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 339;
				this.match(ComposeParser.PLUS);
				this.state = 340;
				this.expression(23);
				}
				break;
			case 7:
				{
				localctx = new UnaryMinusExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 341;
				this.match(ComposeParser.MINUS);
				this.state = 342;
				this.expression(22);
				}
				break;
			case 8:
				{
				localctx = new UnaryBitNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 343;
				this.match(ComposeParser.TILDE);
				this.state = 344;
				this.expression(21);
				}
				break;
			case 9:
				{
				localctx = new UnaryNotExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 345;
				this.match(ComposeParser.NOT);
				this.state = 346;
				this.expression(20);
				}
				break;
			case 10:
				{
				localctx = new ThisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 347;
				this.match(ComposeParser.THIS);
				}
				break;
			case 11:
				{
				localctx = new IdentifierExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 348;
				this.identifier();
				}
				break;
			case 12:
				{
				localctx = new SuperExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 349;
				this.match(ComposeParser.SUPER);
				this.state = 353;
				this._errHandler.sync(this);
				switch ( this._interp.adaptivePredict(this._input, 34, this._ctx) ) {
				case 1:
					{
					this.state = 350;
					this.match(ComposeParser.LT);
					this.state = 351;
					this.match(ComposeParser.IDENTIFIER);
					this.state = 352;
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
				this.state = 355;
				this.literal_expression();
				}
				break;
			case 14:
				{
				localctx = new ParenthesisExpressionContext(this, localctx);
				this._ctx = localctx;
				_prevctx = localctx;
				this.state = 356;
				this.match(ComposeParser.LPAR);
				this.state = 357;
				this.expression(0);
				this.state = 358;
				this.match(ComposeParser.RPAR);
				}
				break;
			}
			this._ctx.stop = this._input.LT(-1);
			this.state = 423;
			this._errHandler.sync(this);
			_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					if (this._parseListeners != null) {
						this.triggerExitRuleEvent();
					}
					_prevctx = localctx;
					{
					this.state = 421;
					this._errHandler.sync(this);
					switch ( this._interp.adaptivePredict(this._input, 36, this._ctx) ) {
					case 1:
						{
						localctx = new MemberExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MemberExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 362;
						if (!(this.precpred(this._ctx, 31))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 31)");
						}
						this.state = 363;
						this.match(ComposeParser.DOT);
						this.state = 364;
						(localctx as MemberExpressionContext)._member = this.expression(32);
						}
						break;
					case 2:
						{
						localctx = new MultiplyExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as MultiplyExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 365;
						if (!(this.precpred(this._ctx, 19))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 19)");
						}
						this.state = 366;
						_la = this._input.LA(1);
						if(!(((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 11) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 367;
						(localctx as MultiplyExpressionContext)._right = this.expression(20);
						}
						break;
					case 3:
						{
						localctx = new AddExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AddExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 368;
						if (!(this.precpred(this._ctx, 18))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 18)");
						}
						this.state = 369;
						_la = this._input.LA(1);
						if(!(_la===62 || _la===63)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 370;
						(localctx as AddExpressionContext)._right = this.expression(19);
						}
						break;
					case 4:
						{
						localctx = new BitShiftExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitShiftExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 371;
						if (!(this.precpred(this._ctx, 17))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 17)");
						}
						this.state = 372;
						_la = this._input.LA(1);
						if(!(((((_la - 72)) & ~0x1F) === 0 && ((1 << (_la - 72)) & 7) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 373;
						(localctx as BitShiftExpressionContext)._right = this.expression(18);
						}
						break;
					case 5:
						{
						localctx = new CompareExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CompareExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 374;
						if (!(this.precpred(this._ctx, 16))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 16)");
						}
						this.state = 375;
						_la = this._input.LA(1);
						if(!(((((_la - 45)) & ~0x1F) === 0 && ((1 << (_la - 45)) & 15) !== 0))) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 376;
						(localctx as CompareExpressionContext)._right = this.expression(17);
						}
						break;
					case 6:
						{
						localctx = new InstanceofExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InstanceofExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 377;
						if (!(this.precpred(this._ctx, 15))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 15)");
						}
						this.state = 378;
						this.match(ComposeParser.INSTANCE_OF);
						this.state = 379;
						(localctx as InstanceofExpressionContext)._right = this.expression(16);
						}
						break;
					case 7:
						{
						localctx = new InExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as InExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 380;
						if (!(this.precpred(this._ctx, 14))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 14)");
						}
						this.state = 381;
						this.match(ComposeParser.IN);
						this.state = 382;
						(localctx as InExpressionContext)._right = this.expression(15);
						}
						break;
					case 8:
						{
						localctx = new EqualsExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as EqualsExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 383;
						if (!(this.precpred(this._ctx, 13))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 13)");
						}
						this.state = 384;
						_la = this._input.LA(1);
						if(!(_la===49 || _la===50)) {
						this._errHandler.recoverInline(this);
						}
						else {
							this._errHandler.reportMatch(this);
						    this.consume();
						}
						this.state = 385;
						(localctx as EqualsExpressionContext)._right = this.expression(14);
						}
						break;
					case 9:
						{
						localctx = new BitAndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitAndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 386;
						if (!(this.precpred(this._ctx, 12))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 12)");
						}
						this.state = 387;
						this.match(ComposeParser.AMP);
						this.state = 388;
						(localctx as BitAndExpressionContext)._right = this.expression(13);
						}
						break;
					case 10:
						{
						localctx = new BitXorExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitXorExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 389;
						if (!(this.precpred(this._ctx, 11))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 11)");
						}
						this.state = 390;
						this.match(ComposeParser.CARET);
						this.state = 391;
						(localctx as BitXorExpressionContext)._right = this.expression(12);
						}
						break;
					case 11:
						{
						localctx = new BitOrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as BitOrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 392;
						if (!(this.precpred(this._ctx, 10))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 10)");
						}
						this.state = 393;
						this.match(ComposeParser.PIPE);
						this.state = 394;
						(localctx as BitOrExpressionContext)._right = this.expression(11);
						}
						break;
					case 12:
						{
						localctx = new AndExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as AndExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 395;
						if (!(this.precpred(this._ctx, 9))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 9)");
						}
						this.state = 396;
						this.match(ComposeParser.AND);
						this.state = 397;
						(localctx as AndExpressionContext)._right = this.expression(10);
						}
						break;
					case 13:
						{
						localctx = new OrExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as OrExpressionContext)._left = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 398;
						if (!(this.precpred(this._ctx, 8))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 8)");
						}
						this.state = 399;
						this.match(ComposeParser.OR);
						this.state = 400;
						(localctx as OrExpressionContext)._right = this.expression(9);
						}
						break;
					case 14:
						{
						localctx = new TernaryExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as TernaryExpressionContext)._condition = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 401;
						if (!(this.precpred(this._ctx, 7))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 7)");
						}
						this.state = 402;
						this.match(ComposeParser.QUESTION);
						this.state = 403;
						(localctx as TernaryExpressionContext)._if_true = this.expression(0);
						this.state = 404;
						this.match(ComposeParser.COLON);
						this.state = 405;
						(localctx as TernaryExpressionContext)._if_false = this.expression(8);
						}
						break;
					case 15:
						{
						localctx = new ItemExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as ItemExpressionContext)._parent = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 407;
						if (!(this.precpred(this._ctx, 32))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 32)");
						}
						this.state = 408;
						this.match(ComposeParser.LBRAK);
						this.state = 409;
						(localctx as ItemExpressionContext)._item = this.expression(0);
						this.state = 410;
						this.match(ComposeParser.RBRAK);
						}
						break;
					case 16:
						{
						localctx = new PostIncrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 412;
						if (!(this.precpred(this._ctx, 28))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 28)");
						}
						 this.willNotContainLineTerminator()
						this.state = 414;
						this.match(ComposeParser.INC);
						}
						break;
					case 17:
						{
						localctx = new PostDecrementExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 415;
						if (!(this.precpred(this._ctx, 27))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 27)");
						}
						 this.willNotContainLineTerminator()
						this.state = 417;
						this.match(ComposeParser.DEC);
						}
						break;
					case 18:
						{
						localctx = new CastExpressionContext(this, new ExpressionContext(this, _parentctx, _parentState));
						(localctx as CastExpressionContext)._exp = _prevctx;
						this.pushNewRecursionContext(localctx, _startState, ComposeParser.RULE_expression);
						this.state = 418;
						if (!(this.precpred(this._ctx, 1))) {
							throw this.createFailedPredicateException("this.precpred(this._ctx, 1)");
						}
						this.state = 419;
						this.match(ComposeParser.AS);
						this.state = 420;
						this.match(ComposeParser.IDENTIFIER);
						}
						break;
					}
					}
				}
				this.state = 425;
				this._errHandler.sync(this);
				_alt = this._interp.adaptivePredict(this._input, 37, this._ctx);
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
	public function_call_expression(): Function_call_expressionContext {
		let localctx: Function_call_expressionContext = new Function_call_expressionContext(this, this._ctx, this.state);
		this.enterRule(localctx, 72, ComposeParser.RULE_function_call_expression);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 426;
			this.identifier();
			this.state = 427;
			this.match(ComposeParser.LPAR);
			this.state = 436;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4027073863) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 33292289) !== 0)) {
				{
				this.state = 428;
				localctx._arg = this.expression(0);
				this.state = 433;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 429;
					this.match(ComposeParser.COMMA);
					this.state = 430;
					localctx._arg = this.expression(0);
					}
					}
					this.state = 435;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 438;
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
		this.enterRule(localctx, 74, ComposeParser.RULE_literal_expression);
		try {
			this.state = 449;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 92:
				localctx = new NullLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 440;
				this.match(ComposeParser.NULL_LITERAL);
				}
				break;
			case 89:
				localctx = new BooleanLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 441;
				this.match(ComposeParser.BOOLEAN_LITERAL);
				}
				break;
			case 87:
				localctx = new IntegerLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 442;
				this.match(ComposeParser.INTEGER_LITERAL);
				}
				break;
			case 88:
				localctx = new DecimalLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 443;
				this.match(ComposeParser.DECIMAL_LITERAL);
				}
				break;
			case 90:
				localctx = new CharLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 5);
				{
				this.state = 444;
				this.match(ComposeParser.CHAR_LITERAL);
				}
				break;
			case 91:
				localctx = new StringLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 6);
				{
				this.state = 445;
				this.match(ComposeParser.STRING_LITERAL);
				}
				break;
			case 40:
				localctx = new ListLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 7);
				{
				this.state = 446;
				this.list_literal();
				}
				break;
			case 46:
				localctx = new SetLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 8);
				{
				this.state = 447;
				this.set_literal();
				}
				break;
			case 42:
				localctx = new MapLiteralContext(this, localctx);
				this.enterOuterAlt(localctx, 9);
				{
				this.state = 448;
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
		this.enterRule(localctx, 76, ComposeParser.RULE_list_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 451;
			this.match(ComposeParser.LBRAK);
			this.state = 460;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4027073863) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 33292289) !== 0)) {
				{
				this.state = 452;
				localctx._exp = this.expression(0);
				this.state = 457;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 453;
					this.match(ComposeParser.COMMA);
					this.state = 454;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 459;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 462;
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
		this.enterRule(localctx, 78, ComposeParser.RULE_set_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 464;
			this.match(ComposeParser.LT);
			this.state = 473;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===18 || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4027073863) !== 0) || ((((_la - 69)) & ~0x1F) === 0 && ((1 << (_la - 69)) & 33292289) !== 0)) {
				{
				this.state = 465;
				localctx._exp = this.expression(0);
				this.state = 470;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 466;
					this.match(ComposeParser.COMMA);
					this.state = 467;
					localctx._exp = this.expression(0);
					}
					}
					this.state = 472;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 475;
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
		this.enterRule(localctx, 80, ComposeParser.RULE_map_literal);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 477;
			this.match(ComposeParser.LCURL);
			this.state = 486;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===93) {
				{
				this.state = 478;
				localctx._entry = this.map_entry();
				this.state = 483;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===57) {
					{
					{
					this.state = 479;
					this.match(ComposeParser.COMMA);
					this.state = 480;
					localctx._entry = this.map_entry();
					}
					}
					this.state = 485;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 488;
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
		this.enterRule(localctx, 82, ComposeParser.RULE_map_entry);
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 490;
			this.identifier();
			this.state = 491;
			this.match(ComposeParser.COLON);
			this.state = 492;
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

	public sempred(localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 20:
			return this.attribute_ref_sempred(localctx as Attribute_refContext, predIndex);
		case 22:
			return this.class_ref_sempred(localctx as Class_refContext, predIndex);
		case 24:
			return this.return_type_sempred(localctx as Return_typeContext, predIndex);
		case 30:
			return this.function_prototype_sempred(localctx as Function_prototypeContext, predIndex);
		case 33:
			return this.assign_instance_statement_sempred(localctx as Assign_instance_statementContext, predIndex);
		case 35:
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
	private assign_instance_statement_sempred(localctx: Assign_instance_statementContext, predIndex: number): boolean {
		switch (predIndex) {
		case 5:
			return  localctx.requireModifier ;
		}
		return true;
	}
	private expression_sempred(localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 6:
			return this.precpred(this._ctx, 31);
		case 7:
			return this.precpred(this._ctx, 19);
		case 8:
			return this.precpred(this._ctx, 18);
		case 9:
			return this.precpred(this._ctx, 17);
		case 10:
			return this.precpred(this._ctx, 16);
		case 11:
			return this.precpred(this._ctx, 15);
		case 12:
			return this.precpred(this._ctx, 14);
		case 13:
			return this.precpred(this._ctx, 13);
		case 14:
			return this.precpred(this._ctx, 12);
		case 15:
			return this.precpred(this._ctx, 11);
		case 16:
			return this.precpred(this._ctx, 10);
		case 17:
			return this.precpred(this._ctx, 9);
		case 18:
			return this.precpred(this._ctx, 8);
		case 19:
			return this.precpred(this._ctx, 7);
		case 20:
			return this.precpred(this._ctx, 32);
		case 21:
			return this.precpred(this._ctx, 28);
		case 22:
			return this.precpred(this._ctx, 27);
		case 23:
			return this.precpred(this._ctx, 1);
		}
		return true;
	}

	public static readonly _serializedATN: number[] = [4,1,96,495,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,
	10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,
	7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,
	24,2,25,7,25,2,26,7,26,2,27,7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,
	2,32,7,32,2,33,7,33,2,34,7,34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,
	39,7,39,2,40,7,40,2,41,7,41,1,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,5,0,92,
	8,0,10,0,12,0,95,9,0,1,1,1,1,1,2,1,2,1,2,3,2,102,8,2,1,3,1,3,1,3,1,3,1,
	3,1,4,1,4,1,5,1,5,3,5,113,8,5,1,6,1,6,1,6,3,6,118,8,6,1,7,1,7,1,8,1,8,3,
	8,124,8,8,1,9,1,9,1,9,1,9,3,9,130,8,9,1,10,1,10,3,10,134,8,10,1,11,1,11,
	1,12,1,12,1,13,1,13,1,14,1,14,1,15,1,15,1,16,1,16,1,17,1,17,1,18,1,18,1,
	19,1,19,1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,1,23,1,23,1,23,1,23,1,23,
	5,23,167,8,23,10,23,12,23,170,9,23,3,23,172,8,23,1,23,3,23,175,8,23,1,23,
	1,23,1,23,1,24,1,24,1,24,1,24,1,24,1,24,1,24,1,24,3,24,188,8,24,1,25,1,
	25,1,25,1,25,5,25,194,8,25,10,25,12,25,197,9,25,3,25,199,8,25,1,26,1,26,
	1,26,1,26,1,26,1,26,1,26,1,26,1,26,3,26,210,8,26,1,27,3,27,213,8,27,1,27,
	1,27,1,27,1,27,1,27,1,27,5,27,221,8,27,10,27,12,27,224,9,27,1,27,1,27,3,
	27,228,8,27,1,27,1,27,1,27,1,27,5,27,234,8,27,10,27,12,27,237,9,27,3,27,
	239,8,27,1,27,1,27,1,27,1,27,5,27,245,8,27,10,27,12,27,248,9,27,3,27,250,
	8,27,1,27,1,27,1,28,1,28,3,28,256,8,28,1,29,1,29,1,29,1,30,1,30,1,30,1,
	30,1,30,1,30,5,30,267,8,30,10,30,12,30,270,9,30,3,30,272,8,30,1,30,1,30,
	1,30,1,30,1,30,1,30,1,30,3,30,281,8,30,3,30,283,8,30,1,31,1,31,1,31,5,31,
	288,8,31,10,31,12,31,291,9,31,1,31,1,31,1,32,1,32,3,32,297,8,32,1,33,1,
	33,1,33,1,33,3,33,303,8,33,3,33,305,8,33,1,33,1,33,1,33,1,33,3,33,311,8,
	33,1,33,1,33,1,33,1,33,1,34,1,34,3,34,319,8,34,1,34,1,34,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,334,8,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	3,35,354,8,35,1,35,1,35,1,35,1,35,1,35,3,35,361,8,35,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
	1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
	35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,5,35,422,8,35,
	10,35,12,35,425,9,35,1,36,1,36,1,36,1,36,1,36,5,36,432,8,36,10,36,12,36,
	435,9,36,3,36,437,8,36,1,36,1,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
	1,37,3,37,450,8,37,1,38,1,38,1,38,1,38,5,38,456,8,38,10,38,12,38,459,9,
	38,3,38,461,8,38,1,38,1,38,1,39,1,39,1,39,1,39,5,39,469,8,39,10,39,12,39,
	472,9,39,3,39,474,8,39,1,39,1,39,1,40,1,40,1,40,1,40,5,40,482,8,40,10,40,
	12,40,485,9,40,3,40,487,8,40,1,40,1,40,1,41,1,41,1,41,1,41,1,41,0,1,70,
	42,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,
	50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,80,82,0,6,2,0,17,17,19,19,
	2,0,64,65,67,67,1,0,62,63,1,0,72,74,1,0,45,48,1,0,49,50,542,0,87,1,0,0,
	0,2,96,1,0,0,0,4,101,1,0,0,0,6,103,1,0,0,0,8,108,1,0,0,0,10,112,1,0,0,0,
	12,117,1,0,0,0,14,119,1,0,0,0,16,123,1,0,0,0,18,129,1,0,0,0,20,133,1,0,
	0,0,22,135,1,0,0,0,24,137,1,0,0,0,26,139,1,0,0,0,28,141,1,0,0,0,30,143,
	1,0,0,0,32,145,1,0,0,0,34,147,1,0,0,0,36,149,1,0,0,0,38,151,1,0,0,0,40,
	153,1,0,0,0,42,156,1,0,0,0,44,158,1,0,0,0,46,174,1,0,0,0,48,187,1,0,0,0,
	50,198,1,0,0,0,52,209,1,0,0,0,54,212,1,0,0,0,56,255,1,0,0,0,58,257,1,0,
	0,0,60,260,1,0,0,0,62,284,1,0,0,0,64,296,1,0,0,0,66,304,1,0,0,0,68,316,
	1,0,0,0,70,360,1,0,0,0,72,426,1,0,0,0,74,449,1,0,0,0,76,451,1,0,0,0,78,
	464,1,0,0,0,80,477,1,0,0,0,82,490,1,0,0,0,84,86,3,2,1,0,85,84,1,0,0,0,86,
	89,1,0,0,0,87,85,1,0,0,0,87,88,1,0,0,0,88,93,1,0,0,0,89,87,1,0,0,0,90,92,
	3,4,2,0,91,90,1,0,0,0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,1,1,
	0,0,0,95,93,1,0,0,0,96,97,3,66,33,0,97,3,1,0,0,0,98,102,3,6,3,0,99,102,
	3,54,27,0,100,102,3,56,28,0,101,98,1,0,0,0,101,99,1,0,0,0,101,100,1,0,0,
	0,102,5,1,0,0,0,103,104,5,11,0,0,104,105,3,8,4,0,105,106,5,56,0,0,106,107,
	3,10,5,0,107,7,1,0,0,0,108,109,5,93,0,0,109,9,1,0,0,0,110,113,3,12,6,0,
	111,113,3,42,21,0,112,110,1,0,0,0,112,111,1,0,0,0,113,11,1,0,0,0,114,118,
	3,14,7,0,115,118,3,16,8,0,116,118,3,34,17,0,117,114,1,0,0,0,117,115,1,0,
	0,0,117,116,1,0,0,0,118,13,1,0,0,0,119,120,5,9,0,0,120,15,1,0,0,0,121,124,
	3,18,9,0,122,124,3,20,10,0,123,121,1,0,0,0,123,122,1,0,0,0,124,17,1,0,0,
	0,125,130,3,22,11,0,126,130,3,26,13,0,127,130,3,24,12,0,128,130,3,28,14,
	0,129,125,1,0,0,0,129,126,1,0,0,0,129,127,1,0,0,0,129,128,1,0,0,0,130,19,
	1,0,0,0,131,134,3,30,15,0,132,134,3,32,16,0,133,131,1,0,0,0,133,132,1,0,
	0,0,134,21,1,0,0,0,135,136,5,1,0,0,136,23,1,0,0,0,137,138,5,2,0,0,138,25,
	1,0,0,0,139,140,5,3,0,0,140,27,1,0,0,0,141,142,5,4,0,0,142,29,1,0,0,0,143,
	144,5,5,0,0,144,31,1,0,0,0,145,146,5,6,0,0,146,33,1,0,0,0,147,148,5,8,0,
	0,148,35,1,0,0,0,149,150,5,10,0,0,150,37,1,0,0,0,151,152,3,40,20,0,152,
	39,1,0,0,0,153,154,4,20,0,0,154,155,5,93,0,0,155,41,1,0,0,0,156,157,3,44,
	22,0,157,43,1,0,0,0,158,159,4,22,1,0,159,160,5,93,0,0,160,45,1,0,0,0,161,
	175,3,38,19,0,162,171,5,38,0,0,163,168,3,52,26,0,164,165,5,57,0,0,165,167,
	3,52,26,0,166,164,1,0,0,0,167,170,1,0,0,0,168,166,1,0,0,0,168,169,1,0,0,
	0,169,172,1,0,0,0,170,168,1,0,0,0,171,163,1,0,0,0,171,172,1,0,0,0,172,173,
	1,0,0,0,173,175,5,39,0,0,174,161,1,0,0,0,174,162,1,0,0,0,175,176,1,0,0,
	0,176,177,5,44,0,0,177,178,3,50,25,0,178,47,1,0,0,0,179,188,3,10,5,0,180,
	188,3,38,19,0,181,182,4,24,2,1,182,188,3,46,23,0,183,184,5,38,0,0,184,185,
	3,46,23,0,185,186,5,39,0,0,186,188,1,0,0,0,187,179,1,0,0,0,187,180,1,0,
	0,0,187,181,1,0,0,0,187,183,1,0,0,0,188,49,1,0,0,0,189,199,3,36,18,0,190,
	195,3,48,24,0,191,192,5,57,0,0,192,194,3,48,24,0,193,191,1,0,0,0,194,197,
	1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,
	198,189,1,0,0,0,198,190,1,0,0,0,199,51,1,0,0,0,200,210,3,38,19,0,201,202,
	3,8,4,0,202,203,5,56,0,0,203,204,3,10,5,0,204,210,1,0,0,0,205,206,3,8,4,
	0,206,207,5,56,0,0,207,208,3,46,23,0,208,210,1,0,0,0,209,200,1,0,0,0,209,
	201,1,0,0,0,209,205,1,0,0,0,210,53,1,0,0,0,211,213,5,12,0,0,212,211,1,0,
	0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,215,5,13,0,0,215,227,3,44,22,0,
	216,217,5,38,0,0,217,222,3,40,20,0,218,219,5,57,0,0,219,221,3,40,20,0,220,
	218,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,222,223,1,0,0,0,223,225,1,0,
	0,0,224,222,1,0,0,0,225,226,5,39,0,0,226,228,1,0,0,0,227,216,1,0,0,0,227,
	228,1,0,0,0,228,238,1,0,0,0,229,230,5,14,0,0,230,235,3,44,22,0,231,232,
	5,57,0,0,232,234,3,44,22,0,233,231,1,0,0,0,234,237,1,0,0,0,235,233,1,0,
	0,0,235,236,1,0,0,0,236,239,1,0,0,0,237,235,1,0,0,0,238,229,1,0,0,0,238,
	239,1,0,0,0,239,240,1,0,0,0,240,249,5,42,0,0,241,246,3,56,28,0,242,243,
	5,57,0,0,243,245,3,56,28,0,244,242,1,0,0,0,245,248,1,0,0,0,246,244,1,0,
	0,0,246,247,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,249,241,1,0,0,0,249,
	250,1,0,0,0,250,251,1,0,0,0,251,252,5,43,0,0,252,55,1,0,0,0,253,256,3,58,
	29,0,254,256,3,62,31,0,255,253,1,0,0,0,255,254,1,0,0,0,256,57,1,0,0,0,257,
	258,5,12,0,0,258,259,3,60,30,0,259,59,1,0,0,0,260,261,5,16,0,0,261,262,
	3,8,4,0,262,271,5,38,0,0,263,268,3,52,26,0,264,265,5,57,0,0,265,267,3,52,
	26,0,266,264,1,0,0,0,267,270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,
	272,1,0,0,0,270,268,1,0,0,0,271,263,1,0,0,0,271,272,1,0,0,0,272,273,1,0,
	0,0,273,282,5,39,0,0,274,275,4,30,3,1,275,276,5,56,0,0,276,283,3,50,25,
	0,277,280,4,30,4,1,278,279,5,56,0,0,279,281,3,50,25,0,280,278,1,0,0,0,280,
	281,1,0,0,0,281,283,1,0,0,0,282,274,1,0,0,0,282,277,1,0,0,0,283,61,1,0,
	0,0,284,285,3,60,30,0,285,289,5,42,0,0,286,288,3,64,32,0,287,286,1,0,0,
	0,288,291,1,0,0,0,289,287,1,0,0,0,289,290,1,0,0,0,290,292,1,0,0,0,291,289,
	1,0,0,0,292,293,5,43,0,0,293,63,1,0,0,0,294,297,3,66,33,0,295,297,3,68,
	34,0,296,294,1,0,0,0,296,295,1,0,0,0,297,65,1,0,0,0,298,299,4,33,5,1,299,
	305,7,0,0,0,300,302,6,33,-1,0,301,303,7,0,0,0,302,301,1,0,0,0,302,303,1,
	0,0,0,303,305,1,0,0,0,304,298,1,0,0,0,304,300,1,0,0,0,305,306,1,0,0,0,306,
	310,3,8,4,0,307,308,5,56,0,0,308,311,3,10,5,0,309,311,3,46,23,0,310,307,
	1,0,0,0,310,309,1,0,0,0,310,311,1,0,0,0,311,312,1,0,0,0,312,313,5,75,0,
	0,313,314,3,70,35,0,314,315,5,55,0,0,315,67,1,0,0,0,316,318,5,20,0,0,317,
	319,3,70,35,0,318,317,1,0,0,0,318,319,1,0,0,0,319,320,1,0,0,0,320,321,5,
	55,0,0,321,69,1,0,0,0,322,323,6,35,-1,0,323,324,5,18,0,0,324,361,3,72,36,
	0,325,361,3,72,36,0,326,333,5,34,0,0,327,328,5,38,0,0,328,329,3,70,35,0,
	329,330,5,39,0,0,330,334,1,0,0,0,331,332,5,34,0,0,332,334,3,70,35,0,333,
	327,1,0,0,0,333,331,1,0,0,0,334,361,1,0,0,0,335,336,5,60,0,0,336,361,3,
	70,35,25,337,338,5,61,0,0,338,361,3,70,35,24,339,340,5,62,0,0,340,361,3,
	70,35,23,341,342,5,63,0,0,342,361,3,70,35,22,343,344,5,69,0,0,344,361,3,
	70,35,21,345,346,5,51,0,0,346,361,3,70,35,20,347,361,5,32,0,0,348,361,3,
	8,4,0,349,353,5,33,0,0,350,351,5,46,0,0,351,352,5,93,0,0,352,354,5,45,0,
	0,353,350,1,0,0,0,353,354,1,0,0,0,354,361,1,0,0,0,355,361,3,74,37,0,356,
	357,5,38,0,0,357,358,3,70,35,0,358,359,5,39,0,0,359,361,1,0,0,0,360,322,
	1,0,0,0,360,325,1,0,0,0,360,326,1,0,0,0,360,335,1,0,0,0,360,337,1,0,0,0,
	360,339,1,0,0,0,360,341,1,0,0,0,360,343,1,0,0,0,360,345,1,0,0,0,360,347,
	1,0,0,0,360,348,1,0,0,0,360,349,1,0,0,0,360,355,1,0,0,0,360,356,1,0,0,0,
	361,423,1,0,0,0,362,363,10,31,0,0,363,364,5,58,0,0,364,422,3,70,35,32,365,
	366,10,19,0,0,366,367,7,1,0,0,367,422,3,70,35,20,368,369,10,18,0,0,369,
	370,7,2,0,0,370,422,3,70,35,19,371,372,10,17,0,0,372,373,7,3,0,0,373,422,
	3,70,35,18,374,375,10,16,0,0,375,376,7,4,0,0,376,422,3,70,35,17,377,378,
	10,15,0,0,378,379,5,35,0,0,379,422,3,70,35,16,380,381,10,14,0,0,381,382,
	5,36,0,0,382,422,3,70,35,15,383,384,10,13,0,0,384,385,7,5,0,0,385,422,3,
	70,35,14,386,387,10,12,0,0,387,388,5,70,0,0,388,422,3,70,35,13,389,390,
	10,11,0,0,390,391,5,68,0,0,391,422,3,70,35,12,392,393,10,10,0,0,393,394,
	5,71,0,0,394,422,3,70,35,11,395,396,10,9,0,0,396,397,5,52,0,0,397,422,3,
	70,35,10,398,399,10,8,0,0,399,400,5,53,0,0,400,422,3,70,35,9,401,402,10,
	7,0,0,402,403,5,54,0,0,403,404,3,70,35,0,404,405,5,56,0,0,405,406,3,70,
	35,8,406,422,1,0,0,0,407,408,10,32,0,0,408,409,5,40,0,0,409,410,3,70,35,
	0,410,411,5,41,0,0,411,422,1,0,0,0,412,413,10,28,0,0,413,414,6,35,-1,0,
	414,422,5,60,0,0,415,416,10,27,0,0,416,417,6,35,-1,0,417,422,5,61,0,0,418,
	419,10,1,0,0,419,420,5,37,0,0,420,422,5,93,0,0,421,362,1,0,0,0,421,365,
	1,0,0,0,421,368,1,0,0,0,421,371,1,0,0,0,421,374,1,0,0,0,421,377,1,0,0,0,
	421,380,1,0,0,0,421,383,1,0,0,0,421,386,1,0,0,0,421,389,1,0,0,0,421,392,
	1,0,0,0,421,395,1,0,0,0,421,398,1,0,0,0,421,401,1,0,0,0,421,407,1,0,0,0,
	421,412,1,0,0,0,421,415,1,0,0,0,421,418,1,0,0,0,422,425,1,0,0,0,423,421,
	1,0,0,0,423,424,1,0,0,0,424,71,1,0,0,0,425,423,1,0,0,0,426,427,3,8,4,0,
	427,436,5,38,0,0,428,433,3,70,35,0,429,430,5,57,0,0,430,432,3,70,35,0,431,
	429,1,0,0,0,432,435,1,0,0,0,433,431,1,0,0,0,433,434,1,0,0,0,434,437,1,0,
	0,0,435,433,1,0,0,0,436,428,1,0,0,0,436,437,1,0,0,0,437,438,1,0,0,0,438,
	439,5,39,0,0,439,73,1,0,0,0,440,450,5,92,0,0,441,450,5,89,0,0,442,450,5,
	87,0,0,443,450,5,88,0,0,444,450,5,90,0,0,445,450,5,91,0,0,446,450,3,76,
	38,0,447,450,3,78,39,0,448,450,3,80,40,0,449,440,1,0,0,0,449,441,1,0,0,
	0,449,442,1,0,0,0,449,443,1,0,0,0,449,444,1,0,0,0,449,445,1,0,0,0,449,446,
	1,0,0,0,449,447,1,0,0,0,449,448,1,0,0,0,450,75,1,0,0,0,451,460,5,40,0,0,
	452,457,3,70,35,0,453,454,5,57,0,0,454,456,3,70,35,0,455,453,1,0,0,0,456,
	459,1,0,0,0,457,455,1,0,0,0,457,458,1,0,0,0,458,461,1,0,0,0,459,457,1,0,
	0,0,460,452,1,0,0,0,460,461,1,0,0,0,461,462,1,0,0,0,462,463,5,41,0,0,463,
	77,1,0,0,0,464,473,5,46,0,0,465,470,3,70,35,0,466,467,5,57,0,0,467,469,
	3,70,35,0,468,466,1,0,0,0,469,472,1,0,0,0,470,468,1,0,0,0,470,471,1,0,0,
	0,471,474,1,0,0,0,472,470,1,0,0,0,473,465,1,0,0,0,473,474,1,0,0,0,474,475,
	1,0,0,0,475,476,5,45,0,0,476,79,1,0,0,0,477,486,5,42,0,0,478,483,3,82,41,
	0,479,480,5,57,0,0,480,482,3,82,41,0,481,479,1,0,0,0,482,485,1,0,0,0,483,
	481,1,0,0,0,483,484,1,0,0,0,484,487,1,0,0,0,485,483,1,0,0,0,486,478,1,0,
	0,0,486,487,1,0,0,0,487,488,1,0,0,0,488,489,5,43,0,0,489,81,1,0,0,0,490,
	491,3,8,4,0,491,492,5,56,0,0,492,493,3,70,35,0,493,83,1,0,0,0,47,87,93,
	101,112,117,123,129,133,168,171,174,187,195,198,209,212,222,227,235,238,
	246,249,255,268,271,280,282,289,296,302,304,310,318,333,353,360,421,423,
	433,436,449,457,460,470,473,483,486];

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
	public global_statement_list(): Global_statementContext[] {
		return this.getTypedRuleContexts(Global_statementContext) as Global_statementContext[];
	}
	public global_statement(i: number): Global_statementContext {
		return this.getTypedRuleContext(Global_statementContext, i) as Global_statementContext;
	}
	public declaration_list(): DeclarationContext[] {
		return this.getTypedRuleContexts(DeclarationContext) as DeclarationContext[];
	}
	public declaration(i: number): DeclarationContext {
		return this.getTypedRuleContext(DeclarationContext, i) as DeclarationContext;
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


export class Global_statementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
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


export class Return_typeContext extends ParserRuleContext {
	public requireParenthesis: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, requireParenthesis: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.requireParenthesis = requireParenthesis;
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public attribute_type(): Attribute_typeContext {
		return this.getTypedRuleContext(Attribute_typeContext, 0) as Attribute_typeContext;
	}
	public function_type(): Function_typeContext {
		return this.getTypedRuleContext(Function_typeContext, 0) as Function_typeContext;
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
	public function_type(): Function_typeContext {
		return this.getTypedRuleContext(Function_typeContext, 0) as Function_typeContext;
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


export class Function_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public abstract_function_declaration(): Abstract_function_declarationContext {
		return this.getTypedRuleContext(Abstract_function_declarationContext, 0) as Abstract_function_declarationContext;
	}
	public concrete_function_declaration(): Concrete_function_declarationContext {
		return this.getTypedRuleContext(Concrete_function_declarationContext, 0) as Concrete_function_declarationContext;
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


export class Concrete_function_declarationContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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


export class StatementContext extends ParserRuleContext {
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public assign_instance_statement(): Assign_instance_statementContext {
		return this.getTypedRuleContext(Assign_instance_statementContext, 0) as Assign_instance_statementContext;
	}
	public return_statement(): Return_statementContext {
		return this.getTypedRuleContext(Return_statementContext, 0) as Return_statementContext;
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


export class Assign_instance_statementContext extends ParserRuleContext {
	public requireModifier: boolean;
	constructor(parser: ComposeParser, parent: ParserRuleContext, invokingState: number, requireModifier: boolean) {
		super(parent, invokingState);
    	this.parser = parser;
        this.requireModifier = requireModifier;
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
	public SEMI(): TerminalNode {
		return this.getToken(ComposeParser.SEMI, 0);
	}
	public LET(): TerminalNode {
		return this.getToken(ComposeParser.LET, 0);
	}
	public CONST(): TerminalNode {
		return this.getToken(ComposeParser.CONST, 0);
	}
	public COLON(): TerminalNode {
		return this.getToken(ComposeParser.COLON, 0);
	}
	public data_type(): Data_typeContext {
		return this.getTypedRuleContext(Data_typeContext, 0) as Data_typeContext;
	}
	public function_type(): Function_typeContext {
		return this.getTypedRuleContext(Function_typeContext, 0) as Function_typeContext;
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
export class FunctionCallExpressionContext extends ExpressionContext {
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public function_call_expression(): Function_call_expressionContext {
		return this.getTypedRuleContext(Function_call_expressionContext, 0) as Function_call_expressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunctionCallExpression) {
	 		listener.enterFunctionCallExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunctionCallExpression) {
	 		listener.exitFunctionCallExpression(this);
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
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
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
	public function_call_expression(): Function_call_expressionContext {
		return this.getTypedRuleContext(Function_call_expressionContext, 0) as Function_call_expressionContext;
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
	public _member!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public DOT(): TerminalNode {
		return this.getToken(ComposeParser.DOT, 0);
	}
	public expression_list(): ExpressionContext[] {
		return this.getTypedRuleContexts(ExpressionContext) as ExpressionContext[];
	}
	public expression(i: number): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, i) as ExpressionContext;
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
export class CastExpressionContext extends ExpressionContext {
	public _exp!: ExpressionContext;
	constructor(parser: ComposeParser, ctx: ExpressionContext) {
		super(parser, ctx.parentCtx, ctx.invokingState);
		super.copyFrom(ctx);
	}
	public AS(): TerminalNode {
		return this.getToken(ComposeParser.AS, 0);
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(ComposeParser.IDENTIFIER, 0);
	}
	public expression(): ExpressionContext {
		return this.getTypedRuleContext(ExpressionContext, 0) as ExpressionContext;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterCastExpression) {
	 		listener.enterCastExpression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitCastExpression) {
	 		listener.exitCastExpression(this);
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


export class Function_call_expressionContext extends ParserRuleContext {
	public _arg!: ExpressionContext;
	constructor(parser?: ComposeParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
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
    	return ComposeParser.RULE_function_call_expression;
	}
	public enterRule(listener: ComposeParserListener): void {
	    if(listener.enterFunction_call_expression) {
	 		listener.enterFunction_call_expression(this);
		}
	}
	public exitRule(listener: ComposeParserListener): void {
	    if(listener.exitFunction_call_expression) {
	 		listener.exitFunction_call_expression(this);
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
