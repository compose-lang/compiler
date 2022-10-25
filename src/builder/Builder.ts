import CompilationUnit from "../compiler/CompilationUnit";
import {
    CharStream,
    CommonTokenStream,
    FileStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token
} from "antlr4";
import {fileExists} from "../utils/FileUtils";
import ComposeParser, {
    Abstract_method_declarationContext,
    Attribute_declarationContext, Attribute_refContext,
    Attribute_typeContext, AttributeParameterContext,
    Boolean_typeContext,
    Class_declarationContext, Class_refContext,
    Class_typeContext,
    Data_typeContext,
    DeclarationContext,
    IdentifierContext,
    Method_declarationContext,
    Method_prototypeContext, Method_typeContext,
    Native_typeContext, Return_typesContext,
    String_typeContext,
    TypeContext, TypedParameterContext,
    UnitContext
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
import MethodDeclarationBase from "../declaration/MethodDeclarationBase";
import AttributeType from "../type/AttributeType";
import ClassType from "../type/ClassType";
import IParameter from "../parameter/IParameter";
import IType from "../type/IType";
import Prototype from "../declaration/Prototype";
import AbstractMethodDeclaration from "../declaration/AbstractMethodDeclaration";
import BooleanType from "../type/BooleanType";
import AttributeParameter from "../parameter/AttributeParameter";
import TypedParameter from "../parameter/TypedParameter";
import MethodType from "../type/MethodType";
import TypeList from "../type/TypeList";
import VoidType from "../type/VoidType";

interface IndexedNode {
    __id?: number;
}

export default class Builder extends ComposeParserListener {

    static parse_unit(data: string): CompilationUnit | null {
        return Builder.doParse<CompilationUnit>((parser: ComposeParser) => parser.unit(), data)
    }

    static parse_method_type(data: string): MethodType | null {
        return Builder.doParse<MethodType>((parser: ComposeParser) => parser.method_type(), data)
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
        this.setNodeValue(ctx, new Identifier(ctx.getText()));
    }

    exitAttribute_type = (ctx: Attribute_typeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.attribute_ref());
        this.setNodeValue(ctx, new AttributeType(id));
    }

    exitAttribute_ref = (ctx: Attribute_refContext) => {
        this.setNodeValue(ctx, new Identifier(ctx.IDENTIFIER().getText()));
    }

    exitClass_type = (ctx: Class_typeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.class_ref());
        this.setNodeValue(ctx, new ClassType(id));
    }

    exitClass_ref = (ctx: Class_refContext) => {
        this.setNodeValue(ctx, new Identifier(ctx.IDENTIFIER().getText()));
    }

    exitBoolean_type = (ctx: Boolean_typeContext) => {
        this.setNodeValue(ctx, BooleanType.instance);
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

    exitReturn_types = (ctx: Return_typesContext) => {
        const types = ctx.void_type() ? [ VoidType.instance ] :
            ctx.type__list().map(child => this.getNodeValue<IType>(child), this);
        this.setNodeValue(ctx, types);
    }

    exitMethod_type = (ctx: Method_typeContext) => {
        const parameters = ctx.parameter_list()
            .map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types());
        this.setNodeValue(ctx, new MethodType(parameters, returnTypes));
    }

    exitType = (ctx: TypeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAttribute_declaration = (ctx: Attribute_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IDataType>(ctx.data_type());
        this.setNodeValue(ctx, new AttributeDeclaration(id, type));
    }

    exitClass_declaration = (ctx: Class_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx._id);
        const attributes = ctx.attribute_ref_list()
            .map(child => this.getNodeValue<Identifier>(child), this);
        const parents = ctx.class_ref_list()
            .slice(1) // skip id which is also a class_type
            .map(child => this.getNodeValue<Identifier>(child), this);
        const methods = ctx.method_declaration_list()
            .map(child => this.getNodeValue<MethodDeclarationBase>(child), this);
        this.setNodeValue(ctx, new ClassDeclaration(id, attributes, parents, methods, ctx.ABSTRACT() != null));
    }

    exitAttributeParameter = (ctx: AttributeParameterContext) => {
        const type = this.getNodeValue<AttributeType>(ctx.attribute_type());
        this.setNodeValue(ctx, new AttributeParameter(type));
    }

    exitTypedParameter = (ctx: TypedParameterContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IDataType>(ctx.data_type());
        this.setNodeValue(ctx, new TypedParameter(id, type));
    }

    exitMethod_prototype = (ctx: Method_prototypeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const params = ctx.parameter_list()
            .map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types());
        this.setNodeValue(ctx, new Prototype(id, params, returnTypes));
    }

    exitAbstract_method_declaration = (ctx: Abstract_method_declarationContext) => {
        const proto = this.getNodeValue<Prototype>(ctx.method_prototype());
        this.setNodeValue(ctx, new AbstractMethodDeclaration(proto));
    }

    exitMethod_declaration = (ctx: Method_declarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
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
