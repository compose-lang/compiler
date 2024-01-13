import CompilationUnit from "../compiler/CompilationUnit.ts";
import {
    CharStream,
    CommonTokenStream,
    ParserRuleContext,
    ParseTree,
    ParseTreeWalker,
    TerminalNode,
    Token
} from "npm:antlr4";
import ComposeParser, {
    Abstract_function_declarationContext,
    AddExpressionContext,
    AndExpressionContext,
    AnnotationContext,
    Any_typeContext, ArrayTypeContext,
    Assign_instance_statementContext,
    Assign_item_statementContext,
    Attribute_declarationContext,
    Attribute_refContext,
    Attribute_type_or_nullContext,
    Attribute_typeContext,
    AttributeParameterContext,
    BitAndExpressionContext,
    BitOrExpressionContext,
    BitShiftExpressionContext,
    BitXorExpressionContext,
    Boolean_typeContext,
    BooleanLiteralContext,
    CharLiteralContext,
    ChildCallExpressionContext,
    Class_declarationContext,
    CompareExpressionContext,
    Compilation_atomContext,
    Compilation_unitContext,
    Concrete_function_declarationContext,
    Decimal_typeContext,
    DecimalLiteralContext,
    DeclarationContext,
    Declare_instances_statementContext,
    Declare_oneContext, Embeddable_statementContext,
    Enum_declarationContext,
    Enum_itemContext,
    EqualsExpressionContext,
    F32_typeContext,
    F64_typeContext,
    Field_declarationContext,
    For_statementContext,
    Function_call_statementContext,
    Function_callContext,
    Function_declarationContext,
    Function_prototypeContext,
    Function_type_or_nullContext,
    Function_typeContext,
    FunctionParameterContext,
    Generic_parameterContext,
    Global_statementContext,
    I32_typeContext,
    I64_typeContext,
    IdentifierContext,
    IdentifierExpressionContext,
    If_statementContext,
    Import_sourceContext,
    Import_statementContext,
    InstructionContext,
    Integer_typeContext,
    IntegerLiteralContext, ItemExpressionContext,
    List_literalContext,
    ListLiteralContext,
    LiteralExpressionContext,
    Map_entryContext,
    Map_literalContext,
    MapLiteralContext,
    MemberExpressionContext,
    MultiplyExpressionContext,
    Native_function_declarationContext,
    Native_typeContext, NativeTypeContext, NewExpressionContext,
    NullLiteralContext,
    Number_typeContext,
    OrExpressionContext,
    ParenthesisExpressionContext, PostDecrementExpressionContext, PostIncrementExpressionContext,
    PreCastExpressionContext, PreDecrementExpressionContext, PreIncrementExpressionContext, Record_declarationContext,
    Return_statementContext,
    Return_typeContext,
    Return_typesContext,
    Set_literalContext,
    SetLiteralContext, SetTypeContext,
    SimpleCallExpressionContext,
    Standalone_statementContext,
    StatementContext,
    StatementsContext,
    String_typeContext,
    StringLiteralContext, Struct_refContext, Struct_typeContext, StructTypeContext,
    TernaryExpressionContext,
    Throw_statementContext,
    TypedParameterContext,
    U32_typeContext,
    U64_typeContext, Unary_statementContext,
    UnaryBitNotExpressionContext,
    UnaryNotExpressionContext,
    Value_type_or_nullContext
} from "../parser/ComposeParser.ts";
import ComposeLexer from "../parser/ComposeLexer.ts";
import ComposeParserListener from "../parser/ComposeParserListener.ts";
import Identifier from "./Identifier.ts";
import Fragment from "./Fragment.ts";
import CodeFragment from "./CodeFragment.ts";
import StringType from "../type/StringType.ts";
import IValueType from "../type/IValueType.ts";
import AttributeDeclaration from "../declaration/AttributeDeclaration.ts";
import IDeclaration from "../declaration/IDeclaration.ts";
import ClassDeclaration from "../declaration/ClassDeclaration.ts";
import FunctionDeclarationBase from "../declaration/FunctionDeclarationBase.ts";
import AttributeType from "../type/AttributeType.ts";
import IParameter from "../parameter/IParameter.ts";
import IType from "../type/IType.ts";
import Prototype from "../declaration/Prototype.ts";
import AbstractFunctionDeclaration from "../declaration/AbstractFunctionDeclaration.ts";
import BooleanType from "../type/BooleanType.ts";
import AttributeParameter from "../parameter/AttributeParameter.ts";
import TypedParameter from "../parameter/TypedParameter.ts";
import FunctionType from "../type/FunctionType.ts";
import TypeList from "../type/TypeList.ts";
import VoidType from "../type/VoidType.ts";
import FunctionParameter from "../parameter/FunctionParameter.ts";
import IExpression from "../expression/IExpression.ts";
import NullLiteral from "../literal/NullLiteral.ts";
import BooleanLiteral from "../literal/BooleanLiteral.ts";
import IntegerLiteral from "../literal/IntegerLiteral.ts";
import DecimalLiteral from "../literal/DecimalLiteral.ts";
import CharLiteral from "../literal/CharLiteral.ts";
import StringLiteral from "../literal/StringLiteral.ts";
import ArrayLiteral from "../literal/ArrayLiteral.ts";
import SetLiteral from "../literal/SetLiteral.ts";
import KeyValuePair from "../utils/KeyValuePair.ts";
import MapLiteral from "../literal/MapLiteral.ts";
import UnresolvedIdentifierExpression from "../expression/UnresolvedIdentifierExpression.ts";
import IStatement from "../statement/IStatement.ts";
import ReturnStatement from "../statement/ReturnStatement.ts";
import ConcreteFunctionDeclaration from "../declaration/ConcreteFunctionDeclaration.ts";
import Int32Type from "../type/Int32Type.ts";
import Float32Type from "../type/Float32Type.ts";
import Float64Type from "../type/Float64Type.ts";
import Int64Type from "../type/Int64Type.ts";
import UInt64Type from "../type/UInt64Type.ts";
import UInt32Type from "../type/UInt32Type.ts";
import InstanceModifier from "../statement/InstanceModifier.ts";
import Annotation from "./Annotation.ts";
import FunctionCall from "../expression/FunctionCall.ts";
import StatementBase from "../statement/StatementBase.ts";
import DeclarationBase from "../declaration/DeclarationBase.ts";
import DeclareInstanceStatement from "../statement/DeclareInstanceStatement.ts";
import AssignOperator from "../statement/AssignOperator.ts";
import AssignInstanceStatement from "../statement/AssignInstanceStatement.ts";
import AssignItemStatement from "../statement/AssignItemStatement.ts";
import TupleType from "../type/TupleType.ts";
import FunctionCallStatement from "../statement/FunctionCallStatement.ts";
import GenericParameter from "../declaration/GenericParameter.ts";
import BinaryOperator from "../expression/BinaryOperator.ts";
import BinaryExpression from "../expression/BinaryExpression.ts";
import Accessibility from "../declaration/Accessibility.ts";
import OpCode from "../compiler/OpCode.ts";
import Instruction from "../assembly/Instruction.ts";
import NativeFunctionDeclaration from "../declaration/NativeFunctionDeclaration.ts";
import StatementList from "../statement/StatementList.ts";
import ImportStatement from "../module/ImportStatement.ts";
import ImportSource from "../module/ImportSource.ts";
import ExportType from "../compiler/ExportType.ts";
import EnumDeclaration from "../declaration/EnumDeclaration.ts";
import ILiteralExpression from "../literal/ILiteralExpression.ts";
import FieldDeclaration from "../declaration/FieldDeclaration.ts";
import MemberExpression from "../expression/MemberExpression.ts";
import TernaryExpression from "../expression/TernaryExpression.ts";
import ParenthesisExpression from "../expression/ParenthesisExpression.ts";
import CastExpression from "../expression/CastExpression.ts";
import BitNotExpression from "../expression/BitNotExpression.ts";
import AnyType from "../type/AnyType.ts";
import IfStatement, {IfBlock} from "../statement/IfStatement.ts";
import CompareExpression from "../expression/CompareExpression.ts";
import Comparator from "../expression/Comparator.ts";
import EqualsExpression from "../expression/EqualsExpression.ts";
import AndExpression from "../expression/AndExpression.ts";
import OrExpression from "../expression/OrExpression.ts";
import LogicalNotExpression from "../expression/LogicalNotExpression.ts";
import ThrowStatement from "../statement/ThrowStatement.ts";
import ForStatement from "../statement/ForStatement.ts";
import ConstructorExpression from "../expression/ConstructorExpression.ts";
import UnaryExpression from "../expression/UnaryExpression.ts";
import UnaryOperator from "../expression/UnaryOperator.ts";
import UnaryStatement from "../statement/UnaryStatement.ts";
import RestParameter from "../parameter/RestParameter.ts";
import ArrayType from "../type/ArrayType.ts";
import SetType from "../type/SetType.ts";
import ParameterList from "../parameter/ParameterList.ts";
import { assertTrue } from "../../deps.ts";
import preprocessedStream from "./PreprocessedStream.ts";
import ItemExpression from "../expression/ItemExpression.ts";
import StructType from "../type/StructType.ts";
import RecordDeclaration from "../declaration/RecordDeclaration.ts";

interface IndexedNode {
    __id?: number;
}

export default class ComposeBuilder extends ComposeParserListener {

    static parse_unit_data(data: string, directives?: Map<string, boolean>): CompilationUnit | null {
        return ComposeBuilder.parse_unit_stream(new CharStream(data), directives);
    }

    static parse_unit_stream(stream: CharStream, directives?: Map<string, boolean>): CompilationUnit | null {
        const unit = ComposeBuilder.doParse<CompilationUnit>((parser: ComposeParser) => parser.compilation_unit(), stream, directives);
        unit.path = (stream["fileName" as keyof typeof stream] as unknown as string) || "<memory>";
        return unit;
    }

    static parse_import(data: string): ImportStatement | null {
        return ComposeBuilder.doParse<ImportStatement>((parser: ComposeParser) => parser.import_statement(), new CharStream(data),);
    }

    static parse_function_type(data: string): FunctionType | null {
        return ComposeBuilder.doParse<FunctionType>((parser: ComposeParser) => parser.function_type(), new CharStream(data));
    }

    static parse_expression(data: string): IExpression | null {
        return ComposeBuilder.doParse<IExpression>((parser: ComposeParser) => parser.expression(), new CharStream(data));
    }

    static parse_statement(data: string): IStatement | null {
        return ComposeBuilder.doParse<IStatement>((parser: ComposeParser) => parser.statement(), new CharStream(data));
    }

    static parse_instruction(data: string): Instruction | null {
        return ComposeBuilder.doParse<Instruction>((parser: ComposeParser) => parser.instruction(), new CharStream(data));
    }

    static readAccessibility(ctx: ParserRuleContext) {
        if(ctx) {
            switch(ctx.start.type) {
                case ComposeParser.PUBLIC:
                    return Accessibility.PUBLIC;
                case ComposeParser.PROTECTED:
                    return Accessibility.PROTECTED;
                case ComposeParser.PRIVATE:
                    return Accessibility.PRIVATE;
                default:
                    assertTrue(false);
            }
        }
        return null;
    }

    static readOpCode(ctx: ParserRuleContext) {
        const text = ctx.start.text;
        const name = text.replace(/\./g,"_").toUpperCase();
        return OpCode[name as keyof typeof OpCode];
    }

    private static readExportType(exportNode: TerminalNode, defaultNode: TerminalNode) {
        return exportNode ? ( defaultNode ? ExportType.MAIN : ExportType.CHILD ) : ExportType.NONE;
    }


    static doParse<T>(rule: (parser: ComposeParser) => ParseTree, stream: CharStream, directives?: Map<string, boolean>): T | null {
        try {
            const path: string = (stream["fileName" as keyof typeof stream] as unknown as string) || "<memory>";
            stream = preprocessedStream(stream, directives);
            const lexer = new ComposeLexer(stream);
            const tokenStream = new CommonTokenStream(lexer);
            const parser = new ComposeParser(tokenStream);
            const tree = rule(parser);
            const builder = new ComposeBuilder(parser, path);
            const walker = new ParseTreeWalker();
            walker.walk(builder, tree);
            return builder.getNodeValue<T>(tree);
        // deno-lint-ignore no-explicit-any
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

    exitAttribute_type_or_null = (ctx: Attribute_type_or_nullContext) => {
        const type = this.getNodeValue<IType>(ctx.getChild(0));
        type.nullable = ctx.NULL_LITERAL() != null;
        this.setNodeValue(ctx, type);
    }

    exitAttribute_ref = (ctx: Attribute_refContext) => {
        this.setNodeValue(ctx, new Identifier(ctx.IDENTIFIER().getText()));
    }

    exitStruct_type = (ctx: Struct_typeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.struct_ref());
        this.setNodeValue(ctx, new StructType(id));
    }

    exitStruct_ref = (ctx: Struct_refContext) => {
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

    exitNativeType = (ctx: NativeTypeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitStructType = (ctx: StructTypeContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitArrayType = (ctx: ArrayTypeContext) => {
        const type = this.getNodeValue<IType>(ctx.value_type());
        this.setNodeValue(ctx, new ArrayType(type));
    }

    exitSetType = (ctx: SetTypeContext) => {
        const type = this.getNodeValue<IType>(ctx.value_type());
        this.setNodeValue(ctx, new SetType(type));
    }

    exitValue_type_or_null = (ctx: Value_type_or_nullContext) => {
        const type = this.getNodeValue<IType>(ctx.getChild(0));
        type.nullable = ctx.NULL_LITERAL() != null;
        this.setNodeValue(ctx, type);
    }

    exitFunction_type = (ctx: Function_typeContext) => {
        const attr = ctx.attribute_type();
        const parameters = attr
                ? [ new AttributeParameter(this.getNodeValue<AttributeType>(attr)) ]
                : ctx.parameter_list().map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types()) || [];
        let returnType: IType = null;
        if(returnTypes.length == 1)
            returnType = returnTypes[0];
        else if(returnTypes.length > 1)
            returnType = new TupleType(returnTypes);
        this.setNodeValue(ctx, new FunctionType(ParameterList.from(parameters), returnType));
    }

    exitFunction_type_or_null = (ctx: Function_type_or_nullContext) => {
        const type = this.getNodeValue<IType>(ctx.getChild(0));
        type.nullable = ctx.NULL_LITERAL() != null;
        this.setNodeValue(ctx, type);
    }

    exitReturn_type = (ctx: Return_typeContext) => {
        const child = ctx.value_type_or_null() || ctx.attribute_type_or_null() || ctx.function_type_or_null();
        this.setNodeValue(ctx, this.getNodeValue(child));
    }

    exitReturn_types = (ctx: Return_typesContext) => {
        const types = ctx.void_type() ? [ VoidType.instance ] :
            ctx.return_type_list().map(child => this.getNodeValue<IType>(child), this);
        this.setNodeValue(ctx, types);
    }

    exitAttribute_declaration = (ctx: Attribute_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IValueType>(ctx.value_type_or_null());
        this.setNodeValue(ctx, new AttributeDeclaration(id, type));
    }

    exitRecord_declaration = (ctx: Record_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx._id);
        const attributes = ctx.attribute_ref_list()
            .map(child => this.getNodeValue<Identifier>(child), this);
        const parents = ctx.struct_ref_list()
            .slice(1) // skip id which is also a class_type
            .map(child => this.getNodeValue<Identifier>(child), this);
        this.setNodeValue(ctx, new RecordDeclaration(id, attributes, parents));
    }

    exitClass_declaration = (ctx: Class_declarationContext) => {
        const accessibility = ComposeBuilder.readAccessibility(ctx.accessibility());
        const id = this.getNodeValue<Identifier>(ctx._id);
        const attributes = ctx.attribute_ref_list()
            .map(child => this.getNodeValue<Identifier>(child), this);
        const fields = ctx.field_declaration_list()
            .map(child => this.getNodeValue<FieldDeclaration>(child), this);
        const parents = ctx.struct_ref_list()
            .slice(1) // skip id which is also a class_type
            .map(child => this.getNodeValue<Identifier>(child), this);
        const functions = ctx.function_declaration_list()
            .map(child => this.getNodeValue<FunctionDeclarationBase>(child), this);
        this.setNodeValue(ctx, new ClassDeclaration(accessibility, ctx.ABSTRACT() != null, id, attributes, parents, fields, functions));
    }

    exitField_declaration = (ctx: Field_declarationContext) => {
        const accessibility = ComposeBuilder.readAccessibility(ctx.accessibility());
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IValueType>(ctx.value_type_or_null());
        this.setNodeValue(ctx, new FieldDeclaration(accessibility, ctx.STATIC() != null, id, type));
    }

    exitEnum_declaration = (ctx: Enum_declarationContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const members = ctx.enum_item_list().map(item => this.getNodeValue<KeyValuePair<Identifier, IExpression>>(item), this);
        this.setNodeValue(ctx, new EnumDeclaration(id, members));
    }

    exitEnum_item = (ctx: Enum_itemContext) => {
        const key = this.getNodeValue<Identifier>(ctx.identifier());
        const value = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new KeyValuePair(key, value));
    }

    exitAttributeParameter = (ctx: AttributeParameterContext) => {
        const type = this.getNodeValue<AttributeType>(ctx.attribute_type_or_null());
        this.setNodeValue(ctx, new AttributeParameter(type));
    }

    exitTypedParameter = (ctx: TypedParameterContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<IValueType>(ctx.value_type_or_null());
        const param = ctx.ETC() != null ? new RestParameter(id, type) : new TypedParameter(id, type);
        this.setNodeValue(ctx, param);
    }

    exitFunctionParameter = (ctx: FunctionParameterContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const type = this.getNodeValue<FunctionType>(ctx.function_type_or_null());
        this.setNodeValue(ctx, new FunctionParameter(id, type));
    }

    exitFunction_prototype = (ctx: Function_prototypeContext) => {
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const generics = ctx.generic_parameter_list().map(child => this.getNodeValue<GenericParameter>(child), this);
        const params = ctx.parameter_list().map(child => this.getNodeValue<IParameter>(child), this);
        const returnTypes = this.getNodeValue<TypeList>(ctx.return_types()) || [];
        let returnType: IType = null;
        if(returnTypes.length == 1)
            returnType = returnTypes[0];
        else if(returnTypes.length > 1)
            returnType = new TupleType(returnTypes);
        this.setNodeValue(ctx, new Prototype(id, generics, ParameterList.from(params), returnType));
    }

    exitGeneric_parameter = (ctx: Generic_parameterContext) => {
        const id = this.getNodeValue<Identifier>(ctx.struct_ref());
        const constraint = this.getNodeValue<IType>(ctx.value_type());
        this.setNodeValue(ctx, new GenericParameter(id, constraint));
    }

    exitAbstract_function_declaration = (ctx: Abstract_function_declarationContext) => {
        const accessibility = ComposeBuilder.readAccessibility(ctx.accessibility());
        const proto = this.getNodeValue<Prototype>(ctx.function_prototype());
        this.setNodeValue(ctx, new AbstractFunctionDeclaration(accessibility, proto));
    }

    exitConcrete_function_declaration = (ctx: Concrete_function_declarationContext) => {
        const accessibility = ComposeBuilder.readAccessibility(ctx.accessibility());
        const isStatic = ctx.STATIC() != null;
        const proto = this.getNodeValue<Prototype>(ctx.function_prototype());
        const stmts = ctx.statement_list().flatMap(s => this.getNodeValue<IStatement>(s));
        this.setNodeValue(ctx, new ConcreteFunctionDeclaration(accessibility, isStatic, proto, StatementList.from(stmts)));
    }

    exitNative_function_declaration = (ctx: Native_function_declarationContext) => {
        const accessibility = ComposeBuilder.readAccessibility(ctx.accessibility());
        const proto = this.getNodeValue<Prototype>(ctx.function_prototype());
        const instructions = ctx.instruction_list().flatMap(s => this.getNodeValue<Instruction>(s));
        this.setNodeValue(ctx, new NativeFunctionDeclaration(accessibility, proto, instructions));
    }

    exitFunction_declaration = (ctx: Function_declarationContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitAnnotation = (ctx: AnnotationContext) => {
        const id = new Identifier(ctx.ANNOTATION().getText());
        this.buildSection(ctx, id);
        const value = this.getNodeValue<ILiteralExpression>(ctx.literal_expression());
        this.setNodeValue(ctx, new Annotation(id, value));
    }

    exitDeclaration = (ctx: DeclarationContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const exportType = ComposeBuilder.readExportType(ctx.EXPORT(), ctx.DEFAULT());
        const decl = this.getNodeValue<IDeclaration>(ctx.getChild(annotations.length + exportType));
        decl.annotations = annotations;
        decl.exportType = exportType;
        this.setNodeValue(ctx, decl);
    }

    exitCompilation_atom = (ctx: Compilation_atomContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitCompilation_unit = (ctx: Compilation_unitContext) => {
        const imports = ctx.preamble().import_statement_list().map(stmt => this.getNodeValue<ImportStatement>(stmt));
        const all = ctx.compilation_atom_list().flatMap(child => this.getNodeValue<any>(child), this);
        const globals = all.filter(a => a instanceof StatementBase); // can't use reflection on interfaces
        const declarations = all.filter(a => a instanceof DeclarationBase); // can't use reflection on interfaces
        const mainExports = declarations.filter(decl => decl.exportType == ExportType.MAIN)
            .concat(globals.filter(stmt => stmt.exportType == ExportType.MAIN));
        assertTrue(mainExports.length <= 1);
        const mainExport = mainExports.length > 0 ? mainExports[0] : null;
        const childExports = declarations.filter(decl => decl.exportType == ExportType.CHILD).concat(globals.filter(stmt => stmt.exportType == ExportType.CHILD));
        this.setNodeValue(ctx, new CompilationUnit(imports, globals, declarations, mainExport, childExports));
    }

    exitImport_statement = (ctx: Import_statementContext) => {
        const main = ctx._main ? this.getNodeValue<Identifier>(ctx._main) : null;
        const children = ctx.identifier_list().filter(c => c!=ctx._main).map(id => this.getNodeValue<Identifier>(id), this);
        const source = this.getNodeValue<ImportSource>(ctx.import_source());
        this.setNodeValue(ctx, new ImportStatement(main, children, source));
    }

    exitImport_source = (ctx: Import_sourceContext) => {
        const source = ctx.getText();
        this.setNodeValue(ctx, new ImportSource(source.substring(1, source.length - 1)));
    }

    exitGlobal_statement = (ctx: Global_statementContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const exportType = ComposeBuilder.readExportType(ctx.EXPORT(), ctx.DEFAULT());
        const stmt = this.getNodeValue<IStatement>(ctx.getChild(annotations.length + exportType));
        const stmts: IStatement[] = Array.isArray(stmt) ? stmt : [stmt];
        stmts.forEach(s => {
            s.annotations = annotations;
            s.exportType = exportType;
        });
        this.setNodeValue(ctx, stmt);
    }

    exitNullLiteral = (ctx: NullLiteralContext) => {
        this.setNodeValue(ctx, new NullLiteral());
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
        this.setNodeValue(ctx, new ArrayLiteral(ctx.getText(), items));
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
        this.setNodeValue(ctx, new UnresolvedIdentifierExpression(id));
    }

    exitLiteralExpression = (ctx: LiteralExpressionContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitStatement = (ctx: StatementContext) => {
        const annotations = ctx.annotation_list().map(child => this.getNodeValue<Annotation>(child), this);
        const stmt = this.getNodeValue<IStatement>(ctx.getChild(annotations.length));
        if(stmt) stmt.annotations = annotations; // TODO cleanup
        this.setNodeValue(ctx, stmt);
    }

    exitEmbeddable_statement = (ctx: Embeddable_statementContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitStandalone_statement = (ctx: Standalone_statementContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitReturn_statement = (ctx: Return_statementContext) => {
        const exp = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new ReturnStatement(exp));
    }

    exitIf_statement = (ctx: If_statementContext) => {
        const conditions = ctx.expression_list().map(c => this.getNodeValue<IExpression>(c), this);
        const lists = ctx.statements_list().map(c => this.getNodeValue<StatementList>(c), this);
        assertTrue(lists.length == conditions.length || lists.length == conditions.length + 1);
        const blocks: IfBlock[] = [];
        for(let i=0; i<conditions.length; i++) {
            const block: IfBlock = { condition: conditions[i], statements: lists[i] };
            blocks.push(block);
        }
        if(lists.length > conditions.length) {
            const block: IfBlock = { condition: null, statements: lists.at(-1) };
            blocks.push(block);
        }
        this.setNodeValue(ctx, new IfStatement(blocks));
    }

    exitStatements = (ctx: StatementsContext) => {
        const statements = ctx.statement_list().flatMap(s => this.getNodeValue<IStatement>(s), this);
        this.setNodeValue(ctx, StatementList.from(statements));
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

    exitAny_type = (ctx: Any_typeContext) => {
        this.setNodeValue(ctx, AnyType.instance);
    }



    exitDeclare_instances_statement = (ctx: Declare_instances_statementContext) => {
        const modifier = ctx.LET() !== null ? InstanceModifier.LET : ctx.CONST() !== null ? InstanceModifier.CONST : null;
        const declare_ones = ctx.declare_one_list().map(child => this.getNodeValue<DeclareInstanceStatement>(child), this);
        declare_ones.forEach(one => one.modifier = modifier);
        this.setNodeValue(ctx, declare_ones);
    }

    exitDeclare_one = (ctx: Declare_oneContext) => {
        const type = this.getNodeValue<IType>(ctx.value_type_or_null() || ctx.function_type_or_null());
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const exp = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new DeclareInstanceStatement(null, id, type, exp));
    }

    exitAssign_instance_statement = (ctx: Assign_instance_statementContext) => {
        const parent = this.getNodeValue<IExpression>(ctx._parent);
        const id = this.getNodeValue<Identifier>(ctx.identifier());
        const op = this.getNodeValue<AssignOperator>(ctx.assign_op());
        const exp = this.getNodeValue<IExpression>(ctx._value);
        this.setNodeValue(ctx, new AssignInstanceStatement(parent, id, op, exp));
    }

    exitAssign_item_statement = (ctx: Assign_item_statementContext) => {
        const parent = this.getNodeValue<IExpression>(ctx._parent);
        const item = this.getNodeValue<IExpression>(ctx._item);
        const op = this.getNodeValue<AssignOperator>(ctx.assign_op());
        const exp = this.getNodeValue<IExpression>(ctx._value);
        this.setNodeValue(ctx, new AssignItemStatement(parent, item, op, exp));
    }

    exitFunction_call_statement = (ctx: Function_call_statementContext) => {
        const call = this.getNodeValue<FunctionCall>(ctx.function_call());
        call.parent = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new FunctionCallStatement(call));
    }

    exitFunction_call = (ctx: Function_callContext) => {
        const id = this.getNodeValue<Identifier>(ctx._name);
        const types = ctx.value_type_or_null_list().map(t => this.getNodeValue<IType>(t), this);
        const args = ctx.expression_list().map(x => this.getNodeValue<IExpression>(x), this);
        this.setNodeValue(ctx, new FunctionCall(null, id, types, args));
    }

    exitSimpleCallExpression = (ctx: SimpleCallExpressionContext) => {
        this.setNodeValue(ctx, this.getNodeValue(ctx.getChild(0)));
    }

    exitChildCallExpression = (ctx: ChildCallExpressionContext) => {
        const call = this.getNodeValue<FunctionCall>(ctx.function_call());
        call.parent = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, call);
    }

    exitAddExpression = (ctx: AddExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        const op = ctx.PLUS() ? BinaryOperator.PLUS : BinaryOperator.MINUS;
        this.setNodeValue(ctx, new BinaryExpression(left, op, right));
    }

    exitMultiplyExpression = (ctx: MultiplyExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        const op = ctx.STAR() ? BinaryOperator.MULTIPLY : ctx.SLASH() ? BinaryOperator.DIVIDE : BinaryOperator.MODULO;
        this.setNodeValue(ctx, new BinaryExpression(left, op, right));
    }

    exitBitShiftExpression = (ctx: BitShiftExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        const op = ctx.LSHIFT() ? BinaryOperator.LSHIFT : ctx.RSHIFT() ? BinaryOperator.RSHIFT : BinaryOperator.URSHIFT;
        this.setNodeValue(ctx, new BinaryExpression(left, op, right));
    }

    exitCompareExpression = (ctx: CompareExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        const op = ctx.GT() ? Comparator.GT : ctx.GTE() ? Comparator.GTE : ctx.LT() ? Comparator.LT : Comparator.LTE;
        this.setNodeValue(ctx, new CompareExpression(left, op, right));
    }

    exitEqualsExpression = (ctx: EqualsExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        const reverse = ctx.EQUALS() == null;
        this.setNodeValue(ctx, new EqualsExpression(left, reverse, right));
    }

    exitAndExpression = (ctx: AndExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        this.setNodeValue(ctx, new AndExpression(left, right));
    }

    exitOrExpression = (ctx: OrExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        this.setNodeValue(ctx, new OrExpression(left, right));
    }

    exitUnaryNotExpression = (ctx: UnaryNotExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new LogicalNotExpression(expression));
    }

    exitUnaryBitNotExpression = (ctx: UnaryBitNotExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new BitNotExpression(expression));
    }

    exitBitOrExpression = (ctx: BitOrExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        this.setNodeValue(ctx, new BinaryExpression(left, BinaryOperator.BIT_OR, right));
    }

    exitBitXorExpression = (ctx: BitXorExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        this.setNodeValue(ctx, new BinaryExpression(left, BinaryOperator.BIT_XOR, right));
    }

    exitBitAndExpression = (ctx: BitAndExpressionContext) => {
        const left = this.getNodeValue<IExpression>(ctx._left);
        const right = this.getNodeValue<IExpression>(ctx._right);
        this.setNodeValue(ctx, new BinaryExpression(left, BinaryOperator.BIT_AND, right));
    }

    exitMemberExpression = (ctx: MemberExpressionContext) => {
        const parent = this.getNodeValue<IExpression>(ctx._parent);
        const id = this.getNodeValue<Identifier>(ctx._member);
        this.setNodeValue(ctx, new MemberExpression(parent, id));
    }

    exitItemExpression = (ctx: ItemExpressionContext) => {
        const parent = this.getNodeValue<IExpression>(ctx._parent);
        const item = this.getNodeValue<IExpression>(ctx._item);
        this.setNodeValue(ctx, new ItemExpression(parent, item));
    }

    exitTernaryExpression = (ctx: TernaryExpressionContext) => {
        const condition = this.getNodeValue<IExpression>(ctx._condition);
        const ifTrue = this.getNodeValue<IExpression>(ctx._if_true);
        const ifFalse = this.getNodeValue<IExpression>(ctx._if_false);
        this.setNodeValue(ctx, new TernaryExpression(condition, ifTrue, ifFalse));
    }

    exitPreCastExpression = (ctx: PreCastExpressionContext) => {
        const type = this.getNodeValue<IValueType>(ctx.value_type());
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new CastExpression(type, expression));
    }

    exitParenthesisExpression = (ctx: ParenthesisExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new ParenthesisExpression(expression));
    }

    exitNewExpression = (ctx: NewExpressionContext) => {
        const call = this.getNodeValue<FunctionCall>(ctx.function_call());
        this.setNodeValue(ctx, new ConstructorExpression(call.id, call.genericTypes, call.args));
    }

    exitPreIncrementExpression = (ctx: PreIncrementExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new UnaryExpression(expression, UnaryOperator.PRE_INC));
    }

    exitPreDecrementExpression = (ctx: PreDecrementExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new UnaryExpression(expression, UnaryOperator.PRE_DEC));
    }

    exitPostIncrementExpression = (ctx: PostIncrementExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new UnaryExpression(expression, UnaryOperator.POST_INC));
    }

    exitPostDecrementExpression = (ctx: PostDecrementExpressionContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new UnaryExpression(expression, UnaryOperator.POST_DEC));
    }

    exitThrow_statement = (ctx: Throw_statementContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        this.setNodeValue(ctx, new ThrowStatement(expression));
    }

    exitFor_statement = (ctx: For_statementContext) => {
        const declare_ones = ctx.declare_one_list().map(child => this.getNodeValue<DeclareInstanceStatement>(child), this);
        declare_ones.forEach(one => one.modifier = InstanceModifier.LET);
        const checkExpressions = ctx.expression_list().map(child => this.getNodeValue<IExpression>(child), this);
        const loopStatements = ctx.embeddable_statement_list().map(child => this.getNodeValue<IStatement>(child), this);
        const statements = this.getNodeValue<StatementList>(ctx.statements());
        this.setNodeValue(ctx, new ForStatement(declare_ones, checkExpressions, StatementList.from(loopStatements), statements));
    }

    exitUnary_statement = (ctx: Unary_statementContext) => {
        const expression = this.getNodeValue<IExpression>(ctx.expression());
        const isPost = ctx.getChild(0) == ctx.expression();
        const op = ctx.INC() != null ?
            (isPost ? UnaryOperator.POST_INC : UnaryOperator.PRE_INC)
            : (isPost ? UnaryOperator.POST_DEC : UnaryOperator.PRE_DEC);
        this.setNodeValue(ctx, new UnaryStatement(expression, op));
    }

    exitInstruction = (ctx: InstructionContext) => {
        const expressions = ctx.expression_list().map(e => this.getNodeValue<IExpression>(e), this);
        const opcode = ComposeBuilder.readOpCode(ctx.opcode());
        const variants = ctx.INTEGER_LITERAL_list().map(i => IntegerLiteral.parseInteger(i.getText()));
        this.setNodeValue(ctx, new Instruction(expressions, opcode, variants) );
    }

 }
