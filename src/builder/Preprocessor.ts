import DirectiveListener from "../preprocessor/DirectiveListener.ts";
import {CharStreams, CommonTokenStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token} from "npm:antlr4";
import DirectiveLexer from "../preprocessor/DirectiveLexer.ts";
import DirectiveParser, {
    DirectiveContext,
    Else_directiveContext,
    Else_if_directiveContext, End_directiveContext,
    If_directiveContext
} from "../preprocessor/DirectiveParser.ts";

abstract class Directive {

}

class IfDirective extends Directive {

    id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }

}

class ElseIfDirective extends Directive {

    id: string;

    constructor(id: string) {
        super();
        this.id = id;
    }

}

class ElseDirective extends Directive {

}

class EndDirective extends Directive {

}

interface IndexedNode {
    __id?: number;
}

class DirectiveBuilder extends DirectiveListener {

    static parse(line: string): Directive {
        const stream = CharStreams.fromString(line);
        const lexer = new DirectiveLexer(stream);
        const tokenStream = new CommonTokenStream(lexer);
        const parser = new DirectiveParser(tokenStream);
        const tree = parser.directive();
        const builder = new DirectiveBuilder(parser);
        const walker = new ParseTreeWalker();
        walker.walk(builder, tree);
        return builder.getNodeValue<Directive>(tree);
    }

    parser: DirectiveParser;
    nodeValues = new Map<number, object>();
    nextNodeId = 0;

    constructor(parser: DirectiveParser) {
        super();
        this.parser = parser;
    }

    getNodeValue<T>(node: ParseTree): T | null {
        const indexedNode = node as IndexedNode;
        const id = indexedNode == null ? undefined : indexedNode.__id;
        if (id == undefined)
            return null;
        else
            return this.nodeValues.get(id) as unknown as T || null;
    }

    setNodeValue(node: ParserRuleContext, value: object | null) {
        if(value == null)
            return;
        const indexedNode = node as IndexedNode;
        let id = indexedNode.__id
        if (id == undefined) {
            id = this.nextNodeId++;
            indexedNode.__id = id;
        }
        this.nodeValues.set(id, value);
    }

    exitDirective = (ctx: DirectiveContext) => {
        this.setNodeValue(ctx, this.getNodeValue<Directive>(ctx.getChild(0)));
    }

    exitIf_directive = (ctx: If_directiveContext) => {
        const id = ctx.value().getText();
        this.setNodeValue(ctx, new IfDirective(id));
    }

    exitElse_if_directive = (ctx: Else_if_directiveContext) => {
        const id = ctx.value().getText();
        this.setNodeValue(ctx, new ElseIfDirective(id));
    }

    exitElse_directive = (ctx: Else_directiveContext) => {
        this.setNodeValue(ctx, new ElseDirective());
    }

    exitEnd_directive = (ctx: End_directiveContext) => {
        this.setNodeValue(ctx, new EndDirective());
    }

}

interface AcceptState {
    directive: Directive;
    hasAcceptedCode: boolean; // from previous conditions
    acceptingCode: boolean;
}


class Analyzer {

    directives: Map<string, boolean>;
    ignoredIntervals = new Intervals();
    stateStack: AcceptState[] = [];
    offset = 1; // use same 1-based index as antlr

    constructor(directives: Map<string, boolean>) {
        this.directives = directives;
    }

    analyzeLine(line: string) {
        if (line.startsWith("#"))
            this.analyzeDirective(line);
        else
            this.analyzeCode(line);
        this.offset += line.length;
    }

    analyzeDirective(line: string) {
        this.ignoredIntervals.ignoreInterval(this.offset, this.offset + line.length - 1);
        const directive = DirectiveBuilder.parse(line);
        if(directive instanceof IfDirective) {
            const acceptingCode = this.directives.has(directive.id) && this.directives.get(directive.id);
            this.stateStack.push({directive: directive, hasAcceptedCode: false, acceptingCode: acceptingCode});
        } else if (directive instanceof EndDirective) {
            assert(this.stateStack.length > 0);
            this.stateStack.pop();
        } else {
            assert(this.stateStack.length > 0);
            const state = this.stateStack.pop();
            const hasAcceptedCode = state.hasAcceptedCode || state.acceptingCode;
            let acceptingCode = !hasAcceptedCode;
            if(acceptingCode && directive instanceof ElseIfDirective)
                acceptingCode = this.directives.has(directive.id) && this.directives.get(directive.id);
            this.stateStack.push({directive: directive, hasAcceptedCode: hasAcceptedCode, acceptingCode: acceptingCode});
        }
    }

    analyzeCode(line: string) {
        if(this.isIgnoringCode())
            this.ignoredIntervals.ignoreInterval(this.offset, this.offset + line.length - 1);
    }

    isAcceptingCode() {
        return this.stateStack.length == 0 ? true : this.stateStack.every(s => s.acceptingCode);
    }

    isIgnoringCode() {
        return this.stateStack.length == 0 ? false : this.stateStack.some(s => !s.acceptingCode);
    }
}

interface Interval {
    first: number;
    last: number;
}

class Intervals extends Array<Interval> {

    ignoreInterval(first: number, last: number) {
        if(this.length == 0)
            this.push({first, last});
        // this is always called sequentially so only need to check last interval
        const interval = this.at(-1);
        if(first <= interval.last + 1)
            interval.last = last;
        else
            this.push({first, last});
    }

    contains(index: number) {
        if(this.length == 0)
            return false;
        let left: number = 0;
        let right: number = this.length - 1;
        while (left <= right) {
            const mid: number = Math.floor((left + right) / 2);
            const interval = this[mid];
            if(index < interval.first)
                right = mid - 1;
            else if(index > interval.last)
                left = mid + 1;
            else
                return true;
        }
        return false;
    }
}

const LF = '\n'.charCodeAt(0);
const WS = ' '.charCodeAt(0);
const DEFAULT_DIRECTIVES = new Map([["true", true], ["TRUE", true], ["1", true], ["false", false], ["FALSE", false], ["0", false]]);

export default class Preprocessor {

    directives: Map<string, boolean>;
    ignoredIntervals: Intervals = null;

    constructor(directives?: Map<string, boolean>) {
        this.directives = directives ? new Map([...directives.entries(), ...DEFAULT_DIRECTIVES.entries()]): DEFAULT_DIRECTIVES;
    }

    analyze(data: string) {
        const lines = data.split("\n");
        const analyzer = new Analyzer(this.directives);
        lines.forEach(line => analyzer.analyzeLine(line + "\n"), this);
        this.ignoredIntervals = analyzer.ignoredIntervals;
    }

    LA(index: number, fetchLA: () => number) {
        const t = fetchLA();
        if(t == Token.EOF || t == LF)
            return t;
        else if(this.ignoredIntervals.contains(index))
            return WS;
        else
            return t;
    }
}
