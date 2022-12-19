import CompilationUnit from "../compiler/CompilationUnit";
import {
    CharStream,
    CommonTokenStream,
    FileStream, ParserRuleContext, ParseTree, ParseTreeWalker, Token
} from "antlr4";
import {fileExists} from "../utils/FileUtils";
import ComposeParser, {
    Abstract_function_declarationContext, AnnotationContext, Assign_instance_statementContext,
    Attribute_declarationContext,
    Attribute_refContext,
    Attribute_typeContext,
    AttributeParameterContext,
    Boolean_typeContext,
    BooleanLiteralContext,
    CharLiteralContext,
    Class_declarationContext,
    Class_refContext,
    Class_typeContext,
    Compilation_unitContext, Concrete_function_declarationContext,
    Data_typeContext,
    Decimal_typeContext,
    DecimalLiteralContext,
    DeclarationContext,
    F32_typeContext,
    F64_typeContext, Function_declarationContext, Function_prototypeContext,
    Function_typeContext,
    FunctionParameterContext, Global_statementContext,
    I32_typeContext,
    I64_typeContext,
    IdentifierContext,
    IdentifierExpressionContext,
    Integer_typeContext,
    IntegerLiteralContext,
    List_literalContext,
    ListLiteralContext,
    LiteralExpressionContext,
    Map_entryContext,
    Map_literalContext,
    MapLiteralContext,
    Native_typeContext,
    NullLiteralContext,
    Number_typeContext,
    Return_statementContext,
    Return_typeContext,
    Return_typesContext,
    Set_literalContext,
    SetLiteralContext,
    StatementContext,
    String_typeContext,
    StringLiteralContext,
    TypedParameterContext,
    U32_typeContext,
    U64_typeContext
} from "../parser/ComposeParser";
import ComposeLexer from "../parser/ComposeLexer";
import ComposeParserListener from "../parser/ComposeParserListener";
import Identifier from "./Identifier";
import Fragment from "./Fragment";
import CodeFragment from "./CodeFragment";
import StringType from "../type/StringType";
import IDataType from "../type/IDataType";
import AttributeDeclaration from "../declaration/AttributeDeclaration";
import IDeclaration from "../declaration/IDeclaration";
import ClassDeclaration from "../declaration/ClassDeclaration";
import FunctionDeclarationBase from "../declaration/FunctionDeclarationBase";
import AttributeType from "../type/AttributeType";
import ClassType from "../type/ClassType";
import IParameter from "../parameter/IParameter";
import IType from "../type/IType";
import Prototype from "../declaration/Prototype";
import AbstractFunctionDeclaration from "../declaration/AbstractFunctionDeclaration";
import BooleanType from "../type/BooleanType";
import AttributeParameter from "../parameter/AttributeParameter";
import TypedParameter from "../parameter/TypedParameter";
import FunctionType from "../type/FunctionType";
import TypeList from "../type/TypeList";
import VoidType from "../type/VoidType";
import FunctionParameter from "../parameter/FunctionParameter";
import IExpression from "../expression/IExpression";
import NullLiteral from "../literal/NullLiteral";
import BooleanLiteral from "../literal/BooleanLiteral";
import IntegerLiteral from "../literal/IntegerLiteral";
import DecimalLiteral from "../literal/DecimalLiteral";
import CharLiteral from "../literal/CharLiteral";
import StringLiteral from "../literal/StringLiteral";
import ListLiteral from "../literal/ListLiteral";
import SetLiteral from "../literal/SetLiteral";
import KeyValuePair from "../utils/KeyValuePair";
import MapLiteral from "../literal/MapLiteral";
import InstanceExpression from "../expression/InstanceExpression";
import IStatement from "../statement/IStatement";
import ReturnStatement from "../statement/ReturnStatement";
import ConcreteFunctionDeclaration from "../declaration/ConcreteFunctionDeclaration";
import Int32Type from "../type/Int32Type";
import Float32Type from "../type/Float32Type";
import Float64Type from "../type/Float64Type";
import Int64Type from "../type/Int64Type";
import UInt64Type from "../type/UInt64Type";
import UInt32Type from "../type/UInt32Type";
import AssignInstanceStatement from "../statement/AssignInstanceStatement";
import InstanceModifier from "../context/InstanceModifier";
import Annotation from "./Annotation";

interface IndexedNode {
    __id?: number;
}

export default class Builder extends ComposeParserListener {

    static parse_unit(data: string): CompilationUnit | null {
        return Builder.doParse<CompilationUnit>((parser: ComposeParser) => parser.compilation_unit(), data);
    }

    static parse_function_type(data: string): FunctionType | null {
        return Builder.doParse<FunctionType>((parser: ComposeParser) => parser.function_type(), data);
    }

    static parse_expression(data: string): IExpression | null {
        return Builder.doParse<IExpression>((parser: ComposeParser) => parser.expression(), data);
    }

    static parse_statement(data: string): IStatement | null {
        return Builder.doParse<IStatement>((parser: ComposeParser) => parser.statement(), data);
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
        if (value instanceof CodeFragment) {
            this.buildSection(node, value);
        }
    }

    buildSection(node: ParserRuleContext, codeSection: CodeFragment) {
        if(!codeSection.fragment) {
            const first = this.findFirstValidToken(node.start.tokenIndex);
            const last = this.findLastValidToken(node.stop!.tokenIndex);
            codeSection.fragment = Fragment.fromTokens(this.path, first!, last!);
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

    exitFunction_type = (ctx: Function_typeContext) => {
        const attr = ctx.attribute_type();
        const parameters = attr
                ? [ new AttributeParameter(this.getNodeValue<AttributeType>(attr)) ]
                : ctx.parameter_list().map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types());
        this.setNodeValue(ctx, new FunctionType(parameters, returnTypes));
    }

    exitReturn_type = (ctx: Return_typeContext) => {
        const child = ctx.data_type() || ctx.attribute_type() || ctx.function_type();
        this.setNodeValue(ctx, this.getNodeValue(child));
    }

    exitReturn_types = (ctx: Return_typesContext) => {
        const types = ctx.void_type() ? [ VoidType.instance ] :
            ctx.return_type_list().map(child => this.getNodeValue<IType>(child), this);
        this.setNodeValue(ctx, types);
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
        const functions = ctx.function_declaration_list()
            .map(child => this.getNodeValue<FunctionDeclarationBase>(child), this);
        this.setNodeValue(ctx, new ClassDeclaration(id, attributes, parents, functions, ctx.ABSTRACT() != null));
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

    exitFunctionParameter = (ctx: FunctionParameterContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<FunctionType>(ctx.function_type());
        this.setNodeValue(ctx, new FunctionParameter(id, type));
    }

    exitFunction_prototype = (ctx: Function_prototypeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const params = ctx.parameter_list()
            .map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types());
        this.setNodeValue(ctx, new Prototype(id, params, returnTypes));
    }

    exitAbstract_function_declaration = (ctx: Abstract_function_declarationContext) => {
        const proto = this.getNodeValue<Prototype>(ctx.function_prototype());
        this.setNodeValue(ctx, new AbstractFunctionDeclaration(proto));
    }

    exitConcrete_function_declaration = (ctx: Concrete_function_declarationContext) => {
        const proto = this.getNodeValue<Prototype>(ctx.function_prototype());
        const stmts = ctx.statement_list().map(s => this.getNodeValue<IStatement>(s));
        this.setNodeValue(ctx, new ConcreteFunctionDeclaration(proto, stmts));
    }

    exitFunction_declaration = (ctx: Function_declarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAnnotation = (ctx: AnnotationContext) => {
        const id = new Identifier(ctx.ANNOTATION().getText());
        this.buildSection(ctx, id);
        this.setNodeValue(ctx, new Annotation(id));
    }

    exitDeclaration = (ctx: DeclarationContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const decl = this.getNodeValue<IDeclaration>(ctx.getChild(annotations.length));
        decl.annotations = annotations;
        this.setNodeValue(ctx, decl);
    }

    exitCompilation_unit = (ctx: Compilation_unitContext) => {
        const globals = ctx.global_statement_list()
            .map(child => this.getNodeValue<IStatement>(child), this);
        const declarations = ctx.declaration_list()
            .map(child => this.getNodeValue<IDeclaration>(child), this);
        this.setNodeValue(ctx, new CompilationUnit(globals, declarations));
    }

    exitGlobal_statement = (ctx: Global_statementContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const stmt = this.getNodeValue<IStatement>(ctx.getChild(annotations.length));
        stmt.annotations = annotations;
        this.setNodeValue(ctx, stmt);
    }

    exitNullLiteral = (ctx: NullLiteralContext) => {
        this.setNodeValue(ctx, new NullLiteral(ctx.getText()));
    }

    exitBooleanLiteral = (ctx: BooleanLiteralContext) => {
        this.setNodeValue(ctx, new BooleanLiteral(ctx.getText()));
    }

    exitIntegerLiteral = (ctx: IntegerLiteralContext) => {
        this.setNodeValue(ctx, new IntegerLiteral(ctx.getText()));
    }

    exitDecimalLiteral = (ctx: DecimalLiteralContext) => {
        this.setNodeValue(ctx, new DecimalLiteral(ctx.getText()));
    }

    exitCharLiteral = (ctx: CharLiteralContext) => {
        this.setNodeValue(ctx, new CharLiteral(ctx.getText()));
    }

    exitStringLiteral = (ctx: StringLiteralContext) => {
        this.setNodeValue(ctx, new StringLiteral(ctx.getText()));
    }

    exitListLiteral = (ctx: ListLiteralContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitList_literal = (ctx: List_literalContext) => {
        const items = ctx.expression_list().map(exp => this.getNodeValue<IExpression>(exp), this);
        this.setNodeValue(ctx, new ListLiteral(ctx.getText(), items));
    }

    exitSetLiteral = (ctx: SetLiteralContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitSet_literal = (ctx: Set_literalContext) => {
        const items = ctx.expression_list().map(exp => this.getNodeValue<IExpression>(exp), this);
        this.setNodeValue(ctx, new SetLiteral(ctx.getText(), items));
    }

    exitMapLiteral = (ctx: MapLiteralContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitMap_literal = (ctx: Map_literalContext) => {
        const items = ctx.map_entry_list().map(entry => this.getNodeValue<KeyValuePair<Identifier, IExpression>>(entry), this);
        this.setNodeValue(ctx, new MapLiteral(ctx.getText(), items));
    }

    exitMap_entry = (ctx: Map_entryContext) => {
        const key = this.getNodeValue<Identifier>(ctx.identifier());
        const value = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new KeyValuePair(key, value));
    }

    exitIdentifierExpression = (ctx: IdentifierExpressionContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        this.setNodeValue(ctx, new InstanceExpression(id));
    }

    exitLiteralExpression = (ctx: LiteralExpressionContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitStatement = (ctx: StatementContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const stmt = this.getNodeValue<IStatement>(ctx.getChild(annotations.length));
        stmt.annotations = annotations;
        this.setNodeValue(ctx, stmt);
    }

    exitReturn_statement = (ctx: Return_statementContext) => {
        const exp = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new ReturnStatement(exp));
    }

    exitI32_type = (ctx: I32_typeContext) => {
        this.setNodeValue(ctx, Int32Type.instance);
    }

    exitI64_type = (ctx: I64_typeContext) => {
        this.setNodeValue(ctx, Int64Type.instance);
    }

    exitU32_type = (ctx: U32_typeContext) => {
        this.setNodeValue(ctx, UInt32Type.instance);
    }

    exitU64_type = (ctx: U64_typeContext) => {
        this.setNodeValue(ctx, UInt64Type.instance);
    }

    exitInteger_type = (ctx: Integer_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitF32_type = (ctx: F32_typeContext) => {
        this.setNodeValue(ctx, Float32Type.instance);
    }

    exitF64_type = (ctx: F64_typeContext) => {
        this.setNodeValue(ctx, Float64Type.instance);
    }

    exitDecimal_type = (ctx: Decimal_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitNumber_type = (ctx: Number_typeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAssign_instance_statement = (ctx: Assign_instance_statementContext) => {
        const modifier = ctx.LET() !== null ? InstanceModifier.LET : ctx.CONST() !== null ? InstanceModifier.CONST : null;
        const type = this.getNodeValue<IType>(ctx.data_type() || ctx.function_type());
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const exp = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new AssignInstanceStatement(modifier, id, type, exp));
    }


}
