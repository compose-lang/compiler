// Generated from Directive.g4 by ANTLR 4.13.1
// noinspection ES6UnusedImports,JSUnusedGlobalSymbols,JSUnusedLocalSymbols
import {
	ATN,
	ATNDeserializer,
	CharStream,
	DecisionState, DFA,
	Lexer,
	LexerATNSimulator,
	RuleContext,
	PredictionContextCache,
	Token
} from "npm:antlr4";
export default class DirectiveLexer extends Lexer {
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

	public static readonly channelNames: string[] = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
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
	public static readonly modeNames: string[] = [ "DEFAULT_MODE", ];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "T__3", "T__4", "T__5", "T__6", "T__7", "T__8",
		"T__9", "T__10", "T__11", "T__12", "T__13", "T__14", "T__15", "T__16",
		"T__17", "IDENTIFIER", "Letter", "LetterOrDigit", "WS", "TRAILER",
	];


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(this, DirectiveLexer._ATN, DirectiveLexer.DecisionsToDFA, new PredictionContextCache());
	}

	public get grammarFileName(): string { return "Directive.g4"; }

	public get literalNames(): (string | null)[] { return DirectiveLexer.literalNames; }
	public get symbolicNames(): (string | null)[] { return DirectiveLexer.symbolicNames; }
	public get ruleNames(): string[] { return DirectiveLexer.ruleNames; }

	public get serializedATN(): number[] { return DirectiveLexer._serializedATN; }

	public get channelNames(): string[] { return DirectiveLexer.channelNames; }

	public get modeNames(): string[] { return DirectiveLexer.modeNames; }

	public static readonly _serializedATN: number[] = [4,0,21,170,6,-1,2,0,
	7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,
	7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,
	16,2,17,7,17,2,18,7,18,2,19,7,19,2,20,7,20,2,21,7,21,2,22,7,22,1,0,1,0,
	1,0,1,0,1,1,1,1,1,1,1,1,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,3,1,3,1,3,
	1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,
	1,6,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,9,
	1,9,1,9,1,9,1,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,11,1,11,1,11,1,11,1,
	11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,14,1,14,
	1,15,1,15,1,15,1,15,1,15,1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,17,1,17,1,
	18,1,18,5,18,150,8,18,10,18,12,18,153,9,18,1,19,1,19,1,20,1,20,1,21,4,21,
	160,8,21,11,21,12,21,161,1,21,1,21,1,22,4,22,167,8,22,11,22,12,22,168,0,
	0,23,1,1,3,2,5,3,7,4,9,5,11,6,13,7,15,8,17,9,19,10,21,11,23,12,25,13,27,
	14,29,15,31,16,33,17,35,18,37,19,39,0,41,0,43,20,45,21,1,0,4,4,0,36,36,
	65,90,95,95,97,122,5,0,36,36,48,57,65,90,95,95,97,122,2,0,9,9,32,32,2,0,
	10,10,126,126,170,0,1,1,0,0,0,0,3,1,0,0,0,0,5,1,0,0,0,0,7,1,0,0,0,0,9,1,
	0,0,0,0,11,1,0,0,0,0,13,1,0,0,0,0,15,1,0,0,0,0,17,1,0,0,0,0,19,1,0,0,0,
	0,21,1,0,0,0,0,23,1,0,0,0,0,25,1,0,0,0,0,27,1,0,0,0,0,29,1,0,0,0,0,31,1,
	0,0,0,0,33,1,0,0,0,0,35,1,0,0,0,0,37,1,0,0,0,0,43,1,0,0,0,0,45,1,0,0,0,
	1,47,1,0,0,0,3,51,1,0,0,0,5,55,1,0,0,0,7,64,1,0,0,0,9,70,1,0,0,0,11,79,
	1,0,0,0,13,85,1,0,0,0,15,91,1,0,0,0,17,97,1,0,0,0,19,102,1,0,0,0,21,109,
	1,0,0,0,23,114,1,0,0,0,25,121,1,0,0,0,27,126,1,0,0,0,29,131,1,0,0,0,31,
	133,1,0,0,0,33,139,1,0,0,0,35,145,1,0,0,0,37,147,1,0,0,0,39,154,1,0,0,0,
	41,156,1,0,0,0,43,159,1,0,0,0,45,166,1,0,0,0,47,48,5,35,0,0,48,49,5,105,
	0,0,49,50,5,102,0,0,50,2,1,0,0,0,51,52,5,35,0,0,52,53,5,73,0,0,53,54,5,
	70,0,0,54,4,1,0,0,0,55,56,5,35,0,0,56,57,5,101,0,0,57,58,5,108,0,0,58,59,
	5,115,0,0,59,60,5,101,0,0,60,61,5,32,0,0,61,62,5,105,0,0,62,63,5,102,0,
	0,63,6,1,0,0,0,64,65,5,35,0,0,65,66,5,101,0,0,66,67,5,108,0,0,67,68,5,105,
	0,0,68,69,5,102,0,0,69,8,1,0,0,0,70,71,5,35,0,0,71,72,5,69,0,0,72,73,5,
	76,0,0,73,74,5,83,0,0,74,75,5,69,0,0,75,76,5,32,0,0,76,77,5,73,0,0,77,78,
	5,70,0,0,78,10,1,0,0,0,79,80,5,35,0,0,80,81,5,69,0,0,81,82,5,76,0,0,82,
	83,5,73,0,0,83,84,5,70,0,0,84,12,1,0,0,0,85,86,5,35,0,0,86,87,5,101,0,0,
	87,88,5,108,0,0,88,89,5,115,0,0,89,90,5,101,0,0,90,14,1,0,0,0,91,92,5,35,
	0,0,92,93,5,69,0,0,93,94,5,76,0,0,94,95,5,83,0,0,95,96,5,69,0,0,96,16,1,
	0,0,0,97,98,5,35,0,0,98,99,5,101,0,0,99,100,5,110,0,0,100,101,5,100,0,0,
	101,18,1,0,0,0,102,103,5,35,0,0,103,104,5,101,0,0,104,105,5,110,0,0,105,
	106,5,100,0,0,106,107,5,105,0,0,107,108,5,102,0,0,108,20,1,0,0,0,109,110,
	5,35,0,0,110,111,5,69,0,0,111,112,5,78,0,0,112,113,5,68,0,0,113,22,1,0,
	0,0,114,115,5,35,0,0,115,116,5,69,0,0,116,117,5,78,0,0,117,118,5,68,0,0,
	118,119,5,73,0,0,119,120,5,70,0,0,120,24,1,0,0,0,121,122,5,116,0,0,122,
	123,5,114,0,0,123,124,5,117,0,0,124,125,5,101,0,0,125,26,1,0,0,0,126,127,
	5,84,0,0,127,128,5,82,0,0,128,129,5,85,0,0,129,130,5,69,0,0,130,28,1,0,
	0,0,131,132,5,49,0,0,132,30,1,0,0,0,133,134,5,102,0,0,134,135,5,97,0,0,
	135,136,5,108,0,0,136,137,5,115,0,0,137,138,5,101,0,0,138,32,1,0,0,0,139,
	140,5,70,0,0,140,141,5,65,0,0,141,142,5,76,0,0,142,143,5,83,0,0,143,144,
	5,69,0,0,144,34,1,0,0,0,145,146,5,48,0,0,146,36,1,0,0,0,147,151,3,39,19,
	0,148,150,3,41,20,0,149,148,1,0,0,0,150,153,1,0,0,0,151,149,1,0,0,0,151,
	152,1,0,0,0,152,38,1,0,0,0,153,151,1,0,0,0,154,155,7,0,0,0,155,40,1,0,0,
	0,156,157,7,1,0,0,157,42,1,0,0,0,158,160,7,2,0,0,159,158,1,0,0,0,160,161,
	1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,164,6,21,0,
	0,164,44,1,0,0,0,165,167,7,3,0,0,166,165,1,0,0,0,167,168,1,0,0,0,168,166,
	1,0,0,0,168,169,1,0,0,0,169,46,1,0,0,0,4,0,151,161,168,1,6,0,0];

	private static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!DirectiveLexer.__ATN) {
			DirectiveLexer.__ATN = new ATNDeserializer().deserialize(DirectiveLexer._serializedATN);
		}

		return DirectiveLexer.__ATN;
	}


	static DecisionsToDFA = DirectiveLexer._ATN.decisionToState.map( (ds: DecisionState, index: number) => new DFA(ds, index) );
}
