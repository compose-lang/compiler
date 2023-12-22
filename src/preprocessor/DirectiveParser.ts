// Generated from Directive.g4 by ANTLR 4.13.1
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
import DirectiveListener from "./DirectiveListener.ts";
// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;

export default class DirectiveParser extends Parser {
	public static readonly T__0 = 1;
	public static readonly T__1 = 2;
	public static readonly T__2 = 3;
	public static readonly T__3 = 4;
	public static readonly T__4 = 5;
	public static readonly T__5 = 6;
	public static readonly T__6 = 7;
	public static readonly T__7 = 8;
	public static readonly T__8 = 9;
	public static readonly T__9 = 10;
	public static readonly T__10 = 11;
	public static readonly T__11 = 12;
	public static readonly T__12 = 13;
	public static readonly T__13 = 14;
	public static readonly T__14 = 15;
	public static readonly T__15 = 16;
	public static readonly T__16 = 17;
	public static readonly T__17 = 18;
	public static readonly IDENTIFIER = 19;
	public static readonly WS = 20;
	public static readonly TRAILER = 21;
	public static readonly EOF = Token.EOF;
	public static readonly RULE_directive = 0;
	public static readonly RULE_if_directive = 1;
	public static readonly RULE_else_if_directive = 2;
	public static readonly RULE_else_directive = 3;
	public static readonly RULE_end_directive = 4;
	public static readonly RULE_value = 5;
	public static readonly RULE_trailer = 6;
	public static readonly literalNames: (string | null)[] = [ null, "'#if'",
                                                            "'#IF'", "'#else if'",
                                                            "'#elif'", "'#ELSE IF'",
                                                            "'#ELIF'", "'#else'",
                                                            "'#ELSE'", "'#end'",
                                                            "'#endif'",
                                                            "'#END'", "'#ENDIF'",
                                                            "'true'", "'TRUE'",
                                                            "'1'", "'false'",
                                                            "'FALSE'", "'0'" ];
	public static readonly symbolicNames: (string | null)[] = [ null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, null,
                                                             null, "IDENTIFIER",
                                                             "WS", "TRAILER" ];
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"directive", "if_directive", "else_if_directive", "else_directive", "end_directive",
		"value", "trailer",
	];
	public get grammarFileName(): string { return "Directive.g4"; }
	public get literalNames(): (string | null)[] { return DirectiveParser.literalNames; }
	public get symbolicNames(): (string | null)[] { return DirectiveParser.symbolicNames; }
	public get ruleNames(): string[] { return DirectiveParser.ruleNames; }
	public get serializedATN(): number[] { return DirectiveParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(this, DirectiveParser._ATN, DirectiveParser.DecisionsToDFA, new PredictionContextCache());
	}
	// @RuleVersion(0)
	public directive(): DirectiveContext {
		let localctx: DirectiveContext = new DirectiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 0, DirectiveParser.RULE_directive);
		try {
			this.state = 18;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case 1:
			case 2:
				this.enterOuterAlt(localctx, 1);
				{
				this.state = 14;
				this.if_directive();
				}
				break;
			case 3:
			case 4:
			case 5:
			case 6:
				this.enterOuterAlt(localctx, 2);
				{
				this.state = 15;
				this.else_if_directive();
				}
				break;
			case 7:
			case 8:
				this.enterOuterAlt(localctx, 3);
				{
				this.state = 16;
				this.else_directive();
				}
				break;
			case 9:
			case 10:
			case 11:
			case 12:
				this.enterOuterAlt(localctx, 4);
				{
				this.state = 17;
				this.end_directive();
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
	public if_directive(): If_directiveContext {
		let localctx: If_directiveContext = new If_directiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 2, DirectiveParser.RULE_if_directive);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 20;
			_la = this._input.LA(1);
			if(!(_la===1 || _la===2)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 21;
			this.value();
			this.state = 22;
			this.trailer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_if_directive(): Else_if_directiveContext {
		let localctx: Else_if_directiveContext = new Else_if_directiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 4, DirectiveParser.RULE_else_if_directive);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 24;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 120) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 25;
			this.value();
			this.state = 26;
			this.trailer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public else_directive(): Else_directiveContext {
		let localctx: Else_directiveContext = new Else_directiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 6, DirectiveParser.RULE_else_directive);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 28;
			_la = this._input.LA(1);
			if(!(_la===7 || _la===8)) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 29;
			this.trailer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public end_directive(): End_directiveContext {
		let localctx: End_directiveContext = new End_directiveContext(this, this._ctx, this.state);
		this.enterRule(localctx, 8, DirectiveParser.RULE_end_directive);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 31;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 7680) !== 0))) {
			this._errHandler.recoverInline(this);
			}
			else {
				this._errHandler.reportMatch(this);
			    this.consume();
			}
			this.state = 32;
			this.trailer();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}
	// @RuleVersion(0)
	public value(): ValueContext {
		let localctx: ValueContext = new ValueContext(this, this._ctx, this.state);
		this.enterRule(localctx, 10, DirectiveParser.RULE_value);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 34;
			_la = this._input.LA(1);
			if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 1040384) !== 0))) {
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
	public trailer(): TrailerContext {
		let localctx: TrailerContext = new TrailerContext(this, this._ctx, this.state);
		this.enterRule(localctx, 12, DirectiveParser.RULE_trailer);
		let _la: number;
		try {
			this.enterOuterAlt(localctx, 1);
			{
			this.state = 39;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la===19 || _la===21) {
				{
				{
				this.state = 36;
				_la = this._input.LA(1);
				if(!(_la===19 || _la===21)) {
				this._errHandler.recoverInline(this);
				}
				else {
					this._errHandler.reportMatch(this);
				    this.consume();
				}
				}
				}
				this.state = 41;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 42;
			this.match(DirectiveParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return localctx;
	}

	public static readonly _serializedATN: number[] = [4,1,21,45,2,0,7,0,2,
	1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,1,0,1,0,1,0,1,0,3,0,19,8,
	0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,3,1,3,1,3,1,4,1,4,1,4,1,5,1,5,1,6,5,
	6,38,8,6,10,6,12,6,41,9,6,1,6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,6,1,0,1,2,
	1,0,3,6,1,0,7,8,1,0,9,12,1,0,13,19,2,0,19,19,21,21,41,0,18,1,0,0,0,2,20,
	1,0,0,0,4,24,1,0,0,0,6,28,1,0,0,0,8,31,1,0,0,0,10,34,1,0,0,0,12,39,1,0,
	0,0,14,19,3,2,1,0,15,19,3,4,2,0,16,19,3,6,3,0,17,19,3,8,4,0,18,14,1,0,0,
	0,18,15,1,0,0,0,18,16,1,0,0,0,18,17,1,0,0,0,19,1,1,0,0,0,20,21,7,0,0,0,
	21,22,3,10,5,0,22,23,3,12,6,0,23,3,1,0,0,0,24,25,7,1,0,0,25,26,3,10,5,0,
	26,27,3,12,6,0,27,5,1,0,0,0,28,29,7,2,0,0,29,30,3,12,6,0,30,7,1,0,0,0,31,
	32,7,3,0,0,32,33,3,12,6,0,33,9,1,0,0,0,34,35,7,4,0,0,35,11,1,0,0,0,36,38,
	7,5,0,0,37,36,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,40,1,0,0,0,40,42,1,
	0,0,0,41,39,1,0,0,0,42,43,5,0,0,1,43,13,1,0,0,0,2,18,39];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DirectiveParser.__ATN) {
			DirectiveParser.__ATN = new ATNDeserializer().deserialize(DirectiveParser._serializedATN);
		}

		return DirectiveParser.__ATN;
	}


	static DecisionsToDFA = DirectiveParser._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );

}

export class DirectiveContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public if_directive(): If_directiveContext {
		return this.getTypedRuleContext(If_directiveContext, 0) as If_directiveContext;
	}
	public else_if_directive(): Else_if_directiveContext {
		return this.getTypedRuleContext(Else_if_directiveContext, 0) as Else_if_directiveContext;
	}
	public else_directive(): Else_directiveContext {
		return this.getTypedRuleContext(Else_directiveContext, 0) as Else_directiveContext;
	}
	public end_directive(): End_directiveContext {
		return this.getTypedRuleContext(End_directiveContext, 0) as End_directiveContext;
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_directive;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterDirective) {
	 		listener.enterDirective(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitDirective) {
	 		listener.exitDirective(this);
		}
	}
}


export class If_directiveContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public trailer(): TrailerContext {
		return this.getTypedRuleContext(TrailerContext, 0) as TrailerContext;
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_if_directive;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterIf_directive) {
	 		listener.enterIf_directive(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitIf_directive) {
	 		listener.exitIf_directive(this);
		}
	}
}


export class Else_if_directiveContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public value(): ValueContext {
		return this.getTypedRuleContext(ValueContext, 0) as ValueContext;
	}
	public trailer(): TrailerContext {
		return this.getTypedRuleContext(TrailerContext, 0) as TrailerContext;
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_else_if_directive;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterElse_if_directive) {
	 		listener.enterElse_if_directive(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitElse_if_directive) {
	 		listener.exitElse_if_directive(this);
		}
	}
}


export class Else_directiveContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public trailer(): TrailerContext {
		return this.getTypedRuleContext(TrailerContext, 0) as TrailerContext;
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_else_directive;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterElse_directive) {
	 		listener.enterElse_directive(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitElse_directive) {
	 		listener.exitElse_directive(this);
		}
	}
}


export class End_directiveContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public trailer(): TrailerContext {
		return this.getTypedRuleContext(TrailerContext, 0) as TrailerContext;
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_end_directive;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterEnd_directive) {
	 		listener.enterEnd_directive(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitEnd_directive) {
	 		listener.exitEnd_directive(this);
		}
	}
}


export class ValueContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public IDENTIFIER(): TerminalNode {
		return this.getToken(DirectiveParser.IDENTIFIER, 0);
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_value;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterValue) {
	 		listener.enterValue(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitValue) {
	 		listener.exitValue(this);
		}
	}
}


export class TrailerContext extends ParserRuleContext {
	constructor(parser?: DirectiveParser, parent?: ParserRuleContext, invokingState?: number) {
		super(parent, invokingState);
    	this.parser = parser;
	}
	public EOF(): TerminalNode {
		return this.getToken(DirectiveParser.EOF, 0);
	}
	public IDENTIFIER_list(): TerminalNode[] {
	    	return this.getTokens(DirectiveParser.IDENTIFIER);
	}
	public IDENTIFIER(i: number): TerminalNode {
		return this.getToken(DirectiveParser.IDENTIFIER, i);
	}
	public TRAILER_list(): TerminalNode[] {
	    	return this.getTokens(DirectiveParser.TRAILER);
	}
	public TRAILER(i: number): TerminalNode {
		return this.getToken(DirectiveParser.TRAILER, i);
	}
    public get ruleIndex(): number {
    	return DirectiveParser.RULE_trailer;
	}
	public enterRule(listener: DirectiveListener): void {
	    if(listener.enterTrailer) {
	 		listener.enterTrailer(this);
		}
	}
	public exitRule(listener: DirectiveListener): void {
	    if(listener.exitTrailer) {
	 		listener.exitTrailer(this);
		}
	}
}
