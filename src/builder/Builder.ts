import CompilationUnit from "../compiler/CompilationUnit";
import {
    CharStream,
    CommonTokenStream,
    FileStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token
} from "antlr4";
import {fileExists} from "../utils/FileUtils";
import ComposeParser, {
    Attribute_declarationContext, Attribute_typeContext, Class_declarationContext, Class_typeContext,
    Data_typeContext, DeclarationContext,
    IdentifierContext,
    Native_typeContext,
    String_typeContext, UnitContext
} from "../parser/ComposeParser";
import ComposeLexer from "../parser/ComposeLexer";
import ComposeParserListener from "../parser/ComposeParserListener";
import Identifier from "./Identifier";
import Section from "./Section";
import CodeSection from "./CodeSection";
import StringType from "../type/StringType";
import IDataType from "../type/IDataType";
import AttributeDeclaration from "../declaration/AttributeDeclaration";
import IDeclaration from "../declaration/IDeclaration";
import ClassDeclaration from "../declaration/ClassDeclaration";
import MethodDeclaration from "../declaration/MethodDeclaration";

interface IndexedNode {
    __id?: number;
}

export default class Builder extends ComposeParserListener {

    static parse_unit(data: string): CompilationUnit | null {
        return Builder.doParse<CompilationUnit>((parser: ComposeParser) => parser.unit(), data)
    }

    static doParse<T>(rule: (parser: ComposeParser) => ParseTree, data?: string, stream?: CharStream): T | null {
        try {
            const isFile = data && fileExists(data);
            const path = isFile ? data : "";
            stream = stream || isFile ? new FileStream(data, false) : new CharStream(data, false);
            const lexer = new ComposeLexer(stream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new ComposeParser(tokenStream);
            const tree = rule(parser);
            const builder = new Builder(parser, path);
            const walker = new ParseTreeWalker();
            walker.walk(builder, tree);
            return builder.getNodeValue<T>(tree);
        } catch (e: any) {
            if (e instanceof Error)
                console.log(e.stack);
        }
    }

    parser: ComposeParser;
    path: string;
    nodeValues = new Map<number, object>();
    nextNodeId = 0;

    constructor(parser: ComposeParser, path: string) {
        super();
        this.parser = parser;
        this.path = path;
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
        if (value instanceof CodeSection) {
            this.buildSection(node, value);
        }
    }

    buildSection(node: ParserRuleContext, codeSection: CodeSection) {
        if(!codeSection.section) {
            const first = this.findFirstValidToken(node.start.tokenIndex);
            const last = this.findLastValidToken(node.stop!.tokenIndex);
            codeSection.section = Section.fromTokens(this.path, first!, last!);
        }
    }

    findFirstValidToken(idx: number): Token | null {
        if (idx == -1) { // happens because input.index() is called before any other read operation (bug?)
            idx = 0;
        }
        do {
            const token = this.readValidToken(idx++);
            if (token) {
                return token;
            }
        } while (idx < this.parser._input.size);
        return null;
    }

    findLastValidToken(idx: number): Token | null {
        if (idx == -1) { // happens because input.index() is called before any other read operation (bug?)
            idx = 0;
        }
        while (idx >= 0) {
            const token = this.readValidToken(idx--);
            if (token != null) {
                return token;
            }
        }
        return null;
    }

    readValidToken(idx: number): Token | null {
        const token = this.parser._input.get(idx);
        const text = token.text;
        // ignore trailing whitespace
        if (text != null && text.replace(/([\n\r\t ])/g, "").length > 0) {
            return token;
        } else {
            return null;
        }
    }

    exitIdentifier = (ctx: IdentifierContext) => {
        const id = new Identifier(ctx.getText());
        this.setNodeValue(ctx, id);
    }

    exitAttribute_type = (ctx: Attribute_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue<Identifier>(ctx.IDENTIFIER()))
    }

    exitClass_type = (ctx: Class_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue<Identifier>(ctx.IDENTIFIER()))
    }

    exitString_type = (ctx: String_typeContext) => {
        this.setNodeValue(ctx, StringType.instance);
    }

    exitNative_type = (ctx: Native_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitData_type = (ctx: Data_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAttribute_declaration = (ctx: Attribute_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IDataType>(ctx.data_type());
        this.setNodeValue(ctx, new AttributeDeclaration(id, type));
    }

    exitClass_declaration = (ctx: Class_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx._id);
        const attributes = ctx.attribute_type_list()
            .map(child => this.getNodeValue<Identifier>(child), this);
        const parents = ctx.class_type_list()
            .map(child => this.getNodeValue<Identifier>(child), this);
        const methods = ctx.method_declaration_list()
            .map(child => this.getNodeValue<MethodDeclaration>(child), this);
        this.setNodeValue(ctx, new ClassDeclaration(id, attributes, parents, methods, ctx.ABSTRACT() != null));
    }

    exitDeclaration = (ctx: DeclarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitUnit = (ctx: UnitContext) => {
        const declarations = ctx.declaration_list()
            .map(child => this.getNodeValue<IDeclaration>(child), this);
        this.setNodeValue(ctx, new CompilationUnit(declarations));
    }

}
