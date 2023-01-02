// Generated from ComposeParser.g4 by ANTLR 4.11.2-SNAPSHOT

import {ParseTreeListener} from "antlr4";


import { Compilation_unitContext } from "./ComposeParser";
import { PreambleContext } from "./ComposeParser";
import { Import_statementContext } from "./ComposeParser";
import { Import_sourceContext } from "./ComposeParser";
import { Compilation_atomContext } from "./ComposeParser";
import { Global_statementContext } from "./ComposeParser";
import { DeclarationContext } from "./ComposeParser";
import { Enum_declarationContext } from "./ComposeParser";
import { Enum_itemContext } from "./ComposeParser";
import { Attribute_declarationContext } from "./ComposeParser";
import { IdentifierContext } from "./ComposeParser";
import { AnnotationContext } from "./ComposeParser";
import { Data_typeContext } from "./ComposeParser";
import { Data_type_or_nullContext } from "./ComposeParser";
import { Native_typeContext } from "./ComposeParser";
import { Boolean_typeContext } from "./ComposeParser";
import { Number_typeContext } from "./ComposeParser";
import { Integer_typeContext } from "./ComposeParser";
import { Decimal_typeContext } from "./ComposeParser";
import { I32_typeContext } from "./ComposeParser";
import { I64_typeContext } from "./ComposeParser";
import { Isize_typeContext } from "./ComposeParser";
import { U32_typeContext } from "./ComposeParser";
import { U64_typeContext } from "./ComposeParser";
import { Usize_typeContext } from "./ComposeParser";
import { F32_typeContext } from "./ComposeParser";
import { F64_typeContext } from "./ComposeParser";
import { String_typeContext } from "./ComposeParser";
import { Void_typeContext } from "./ComposeParser";
import { Attribute_typeContext } from "./ComposeParser";
import { Attribute_type_or_nullContext } from "./ComposeParser";
import { Attribute_refContext } from "./ComposeParser";
import { Class_typeContext } from "./ComposeParser";
import { Class_refContext } from "./ComposeParser";
import { Function_typeContext } from "./ComposeParser";
import { Function_type_or_nullContext } from "./ComposeParser";
import { Return_typeContext } from "./ComposeParser";
import { Return_typesContext } from "./ComposeParser";
import { AttributeParameterContext } from "./ComposeParser";
import { TypedParameterContext } from "./ComposeParser";
import { FunctionParameterContext } from "./ComposeParser";
import { Class_declarationContext } from "./ComposeParser";
import { AccessibilityContext } from "./ComposeParser";
import { Field_declarationContext } from "./ComposeParser";
import { Function_declarationContext } from "./ComposeParser";
import { Abstract_function_declarationContext } from "./ComposeParser";
import { Concrete_function_declarationContext } from "./ComposeParser";
import { Native_function_declarationContext } from "./ComposeParser";
import { Function_prototypeContext } from "./ComposeParser";
import { Generic_parameterContext } from "./ComposeParser";
import { StatementContext } from "./ComposeParser";
import { Throw_statementContext } from "./ComposeParser";
import { Try_statementContext } from "./ComposeParser";
import { Catch_clauseContext } from "./ComposeParser";
import { Catch_all_clauseContext } from "./ComposeParser";
import { Finally_clauseContext } from "./ComposeParser";
import { Break_statementContext } from "./ComposeParser";
import { For_statementContext } from "./ComposeParser";
import { If_statementContext } from "./ComposeParser";
import { StatementsContext } from "./ComposeParser";
import { Function_call_statementContext } from "./ComposeParser";
import { Declare_instances_statementContext } from "./ComposeParser";
import { Declare_oneContext } from "./ComposeParser";
import { Assign_instance_statementContext } from "./ComposeParser";
import { Assign_opContext } from "./ComposeParser";
import { Assign_item_statementContext } from "./ComposeParser";
import { Return_statementContext } from "./ComposeParser";
import { ChildCallExpressionContext } from "./ComposeParser";
import { TernaryExpressionContext } from "./ComposeParser";
import { AssignExpressionContext } from "./ComposeParser";
import { SimpleCallExpressionContext } from "./ComposeParser";
import { InExpressionContext } from "./ComposeParser";
import { ItemExpressionContext } from "./ComposeParser";
import { CompareExpressionContext } from "./ComposeParser";
import { OrExpressionContext } from "./ComposeParser";
import { SizeofExpressionContext } from "./ComposeParser";
import { AlignofExpressionContext } from "./ComposeParser";
import { ThisExpressionContext } from "./ComposeParser";
import { PreCastExpressionContext } from "./ComposeParser";
import { AndExpressionContext } from "./ComposeParser";
import { UnaryMinusExpressionContext } from "./ComposeParser";
import { TypeofExpressionContext } from "./ComposeParser";
import { InstanceofExpressionContext } from "./ComposeParser";
import { UnaryPlusExpressionContext } from "./ComposeParser";
import { PostDecrementExpressionContext } from "./ComposeParser";
import { CastAsExpressionContext } from "./ComposeParser";
import { SuperExpressionContext } from "./ComposeParser";
import { BitShiftExpressionContext } from "./ComposeParser";
import { UnaryNotExpressionContext } from "./ComposeParser";
import { PostIncrementExpressionContext } from "./ComposeParser";
import { NewExpressionContext } from "./ComposeParser";
import { ParenthesisExpressionContext } from "./ComposeParser";
import { LiteralExpressionContext } from "./ComposeParser";
import { MultiplyExpressionContext } from "./ComposeParser";
import { BitXorExpressionContext } from "./ComposeParser";
import { UnaryPreIncrementExpressionContext } from "./ComposeParser";
import { IdentifierExpressionContext } from "./ComposeParser";
import { UnaryBitNotExpressionContext } from "./ComposeParser";
import { MemberExpressionContext } from "./ComposeParser";
import { BitAndExpressionContext } from "./ComposeParser";
import { AddExpressionContext } from "./ComposeParser";
import { BitOrExpressionContext } from "./ComposeParser";
import { UnaryPreDecrementExpressionContext } from "./ComposeParser";
import { EqualsExpressionContext } from "./ComposeParser";
import { Function_callContext } from "./ComposeParser";
import { NullLiteralContext } from "./ComposeParser";
import { BooleanLiteralContext } from "./ComposeParser";
import { IntegerLiteralContext } from "./ComposeParser";
import { DecimalLiteralContext } from "./ComposeParser";
import { CharLiteralContext } from "./ComposeParser";
import { StringLiteralContext } from "./ComposeParser";
import { ListLiteralContext } from "./ComposeParser";
import { SetLiteralContext } from "./ComposeParser";
import { MapLiteralContext } from "./ComposeParser";
import { List_literalContext } from "./ComposeParser";
import { Set_literalContext } from "./ComposeParser";
import { Map_literalContext } from "./ComposeParser";
import { Map_entryContext } from "./ComposeParser";
import { InstructionContext } from "./ComposeParser";
import { OpcodeContext } from "./ComposeParser";
import { Plain_opcodeContext } from "./ComposeParser";
import { Keyword_opcodeContext } from "./ComposeParser";
import { Composite_opcodeContext } from "./ComposeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `ComposeParser`.
 */
export default class ComposeParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `ComposeParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	enterCompilation_unit?: (ctx: Compilation_unitContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.compilation_unit`.
	 * @param ctx the parse tree
	 */
	exitCompilation_unit?: (ctx: Compilation_unitContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.preamble`.
	 * @param ctx the parse tree
	 */
	enterPreamble?: (ctx: PreambleContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.preamble`.
	 * @param ctx the parse tree
	 */
	exitPreamble?: (ctx: PreambleContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.import_statement`.
	 * @param ctx the parse tree
	 */
	enterImport_statement?: (ctx: Import_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.import_statement`.
	 * @param ctx the parse tree
	 */
	exitImport_statement?: (ctx: Import_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.import_source`.
	 * @param ctx the parse tree
	 */
	enterImport_source?: (ctx: Import_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.import_source`.
	 * @param ctx the parse tree
	 */
	exitImport_source?: (ctx: Import_sourceContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.compilation_atom`.
	 * @param ctx the parse tree
	 */
	enterCompilation_atom?: (ctx: Compilation_atomContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.compilation_atom`.
	 * @param ctx the parse tree
	 */
	exitCompilation_atom?: (ctx: Compilation_atomContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.global_statement`.
	 * @param ctx the parse tree
	 */
	enterGlobal_statement?: (ctx: Global_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.global_statement`.
	 * @param ctx the parse tree
	 */
	exitGlobal_statement?: (ctx: Global_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.declaration`.
	 * @param ctx the parse tree
	 */
	enterDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.declaration`.
	 * @param ctx the parse tree
	 */
	exitDeclaration?: (ctx: DeclarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.enum_declaration`.
	 * @param ctx the parse tree
	 */
	enterEnum_declaration?: (ctx: Enum_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.enum_declaration`.
	 * @param ctx the parse tree
	 */
	exitEnum_declaration?: (ctx: Enum_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.enum_item`.
	 * @param ctx the parse tree
	 */
	enterEnum_item?: (ctx: Enum_itemContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.enum_item`.
	 * @param ctx the parse tree
	 */
	exitEnum_item?: (ctx: Enum_itemContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.attribute_declaration`.
	 * @param ctx the parse tree
	 */
	enterAttribute_declaration?: (ctx: Attribute_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.attribute_declaration`.
	 * @param ctx the parse tree
	 */
	exitAttribute_declaration?: (ctx: Attribute_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.annotation`.
	 * @param ctx the parse tree
	 */
	enterAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.annotation`.
	 * @param ctx the parse tree
	 */
	exitAnnotation?: (ctx: AnnotationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.data_type_or_null`.
	 * @param ctx the parse tree
	 */
	enterData_type_or_null?: (ctx: Data_type_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.data_type_or_null`.
	 * @param ctx the parse tree
	 */
	exitData_type_or_null?: (ctx: Data_type_or_nullContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.native_type`.
	 * @param ctx the parse tree
	 */
	enterNative_type?: (ctx: Native_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.native_type`.
	 * @param ctx the parse tree
	 */
	exitNative_type?: (ctx: Native_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.boolean_type`.
	 * @param ctx the parse tree
	 */
	enterBoolean_type?: (ctx: Boolean_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.boolean_type`.
	 * @param ctx the parse tree
	 */
	exitBoolean_type?: (ctx: Boolean_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.number_type`.
	 * @param ctx the parse tree
	 */
	enterNumber_type?: (ctx: Number_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.number_type`.
	 * @param ctx the parse tree
	 */
	exitNumber_type?: (ctx: Number_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.integer_type`.
	 * @param ctx the parse tree
	 */
	enterInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.integer_type`.
	 * @param ctx the parse tree
	 */
	exitInteger_type?: (ctx: Integer_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.decimal_type`.
	 * @param ctx the parse tree
	 */
	enterDecimal_type?: (ctx: Decimal_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.decimal_type`.
	 * @param ctx the parse tree
	 */
	exitDecimal_type?: (ctx: Decimal_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.i32_type`.
	 * @param ctx the parse tree
	 */
	enterI32_type?: (ctx: I32_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.i32_type`.
	 * @param ctx the parse tree
	 */
	exitI32_type?: (ctx: I32_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.i64_type`.
	 * @param ctx the parse tree
	 */
	enterI64_type?: (ctx: I64_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.i64_type`.
	 * @param ctx the parse tree
	 */
	exitI64_type?: (ctx: I64_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.isize_type`.
	 * @param ctx the parse tree
	 */
	enterIsize_type?: (ctx: Isize_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.isize_type`.
	 * @param ctx the parse tree
	 */
	exitIsize_type?: (ctx: Isize_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.u32_type`.
	 * @param ctx the parse tree
	 */
	enterU32_type?: (ctx: U32_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.u32_type`.
	 * @param ctx the parse tree
	 */
	exitU32_type?: (ctx: U32_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.u64_type`.
	 * @param ctx the parse tree
	 */
	enterU64_type?: (ctx: U64_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.u64_type`.
	 * @param ctx the parse tree
	 */
	exitU64_type?: (ctx: U64_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.usize_type`.
	 * @param ctx the parse tree
	 */
	enterUsize_type?: (ctx: Usize_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.usize_type`.
	 * @param ctx the parse tree
	 */
	exitUsize_type?: (ctx: Usize_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.f32_type`.
	 * @param ctx the parse tree
	 */
	enterF32_type?: (ctx: F32_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.f32_type`.
	 * @param ctx the parse tree
	 */
	exitF32_type?: (ctx: F32_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.f64_type`.
	 * @param ctx the parse tree
	 */
	enterF64_type?: (ctx: F64_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.f64_type`.
	 * @param ctx the parse tree
	 */
	exitF64_type?: (ctx: F64_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.string_type`.
	 * @param ctx the parse tree
	 */
	enterString_type?: (ctx: String_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.string_type`.
	 * @param ctx the parse tree
	 */
	exitString_type?: (ctx: String_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.void_type`.
	 * @param ctx the parse tree
	 */
	enterVoid_type?: (ctx: Void_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.void_type`.
	 * @param ctx the parse tree
	 */
	exitVoid_type?: (ctx: Void_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.attribute_type`.
	 * @param ctx the parse tree
	 */
	enterAttribute_type?: (ctx: Attribute_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.attribute_type`.
	 * @param ctx the parse tree
	 */
	exitAttribute_type?: (ctx: Attribute_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.attribute_type_or_null`.
	 * @param ctx the parse tree
	 */
	enterAttribute_type_or_null?: (ctx: Attribute_type_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.attribute_type_or_null`.
	 * @param ctx the parse tree
	 */
	exitAttribute_type_or_null?: (ctx: Attribute_type_or_nullContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.attribute_ref`.
	 * @param ctx the parse tree
	 */
	enterAttribute_ref?: (ctx: Attribute_refContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.attribute_ref`.
	 * @param ctx the parse tree
	 */
	exitAttribute_ref?: (ctx: Attribute_refContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.class_type`.
	 * @param ctx the parse tree
	 */
	enterClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.class_type`.
	 * @param ctx the parse tree
	 */
	exitClass_type?: (ctx: Class_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.class_ref`.
	 * @param ctx the parse tree
	 */
	enterClass_ref?: (ctx: Class_refContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.class_ref`.
	 * @param ctx the parse tree
	 */
	exitClass_ref?: (ctx: Class_refContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_type`.
	 * @param ctx the parse tree
	 */
	enterFunction_type?: (ctx: Function_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_type`.
	 * @param ctx the parse tree
	 */
	exitFunction_type?: (ctx: Function_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_type_or_null`.
	 * @param ctx the parse tree
	 */
	enterFunction_type_or_null?: (ctx: Function_type_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_type_or_null`.
	 * @param ctx the parse tree
	 */
	exitFunction_type_or_null?: (ctx: Function_type_or_nullContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.return_type`.
	 * @param ctx the parse tree
	 */
	enterReturn_type?: (ctx: Return_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.return_type`.
	 * @param ctx the parse tree
	 */
	exitReturn_type?: (ctx: Return_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.return_types`.
	 * @param ctx the parse tree
	 */
	enterReturn_types?: (ctx: Return_typesContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.return_types`.
	 * @param ctx the parse tree
	 */
	exitReturn_types?: (ctx: Return_typesContext) => void;
	/**
	 * Enter a parse tree produced by the `AttributeParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterAttributeParameter?: (ctx: AttributeParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `AttributeParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitAttributeParameter?: (ctx: AttributeParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `TypedParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterTypedParameter?: (ctx: TypedParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `TypedParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitTypedParameter?: (ctx: TypedParameterContext) => void;
	/**
	 * Enter a parse tree produced by the `FunctionParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `FunctionParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitFunctionParameter?: (ctx: FunctionParameterContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	enterClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.class_declaration`.
	 * @param ctx the parse tree
	 */
	exitClass_declaration?: (ctx: Class_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.accessibility`.
	 * @param ctx the parse tree
	 */
	enterAccessibility?: (ctx: AccessibilityContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.accessibility`.
	 * @param ctx the parse tree
	 */
	exitAccessibility?: (ctx: AccessibilityContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	enterField_declaration?: (ctx: Field_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.field_declaration`.
	 * @param ctx the parse tree
	 */
	exitField_declaration?: (ctx: Field_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	enterFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_declaration`.
	 * @param ctx the parse tree
	 */
	exitFunction_declaration?: (ctx: Function_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.abstract_function_declaration`.
	 * @param ctx the parse tree
	 */
	enterAbstract_function_declaration?: (ctx: Abstract_function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.abstract_function_declaration`.
	 * @param ctx the parse tree
	 */
	exitAbstract_function_declaration?: (ctx: Abstract_function_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.concrete_function_declaration`.
	 * @param ctx the parse tree
	 */
	enterConcrete_function_declaration?: (ctx: Concrete_function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.concrete_function_declaration`.
	 * @param ctx the parse tree
	 */
	exitConcrete_function_declaration?: (ctx: Concrete_function_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.native_function_declaration`.
	 * @param ctx the parse tree
	 */
	enterNative_function_declaration?: (ctx: Native_function_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.native_function_declaration`.
	 * @param ctx the parse tree
	 */
	exitNative_function_declaration?: (ctx: Native_function_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	enterFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_prototype`.
	 * @param ctx the parse tree
	 */
	exitFunction_prototype?: (ctx: Function_prototypeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.generic_parameter`.
	 * @param ctx the parse tree
	 */
	enterGeneric_parameter?: (ctx: Generic_parameterContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.generic_parameter`.
	 * @param ctx the parse tree
	 */
	exitGeneric_parameter?: (ctx: Generic_parameterContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	enterThrow_statement?: (ctx: Throw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	exitThrow_statement?: (ctx: Throw_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.try_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.try_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_statement?: (ctx: Try_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.catch_clause`.
	 * @param ctx the parse tree
	 */
	enterCatch_clause?: (ctx: Catch_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.catch_clause`.
	 * @param ctx the parse tree
	 */
	exitCatch_clause?: (ctx: Catch_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.catch_all_clause`.
	 * @param ctx the parse tree
	 */
	enterCatch_all_clause?: (ctx: Catch_all_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.catch_all_clause`.
	 * @param ctx the parse tree
	 */
	exitCatch_all_clause?: (ctx: Catch_all_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	enterFinally_clause?: (ctx: Finally_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.finally_clause`.
	 * @param ctx the parse tree
	 */
	exitFinally_clause?: (ctx: Finally_clauseContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.for_statement`.
	 * @param ctx the parse tree
	 */
	enterFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.for_statement`.
	 * @param ctx the parse tree
	 */
	exitFor_statement?: (ctx: For_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.statements`.
	 * @param ctx the parse tree
	 */
	enterStatements?: (ctx: StatementsContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.statements`.
	 * @param ctx the parse tree
	 */
	exitStatements?: (ctx: StatementsContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_call_statement`.
	 * @param ctx the parse tree
	 */
	enterFunction_call_statement?: (ctx: Function_call_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_call_statement`.
	 * @param ctx the parse tree
	 */
	exitFunction_call_statement?: (ctx: Function_call_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.declare_instances_statement`.
	 * @param ctx the parse tree
	 */
	enterDeclare_instances_statement?: (ctx: Declare_instances_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.declare_instances_statement`.
	 * @param ctx the parse tree
	 */
	exitDeclare_instances_statement?: (ctx: Declare_instances_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.declare_one`.
	 * @param ctx the parse tree
	 */
	enterDeclare_one?: (ctx: Declare_oneContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.declare_one`.
	 * @param ctx the parse tree
	 */
	exitDeclare_one?: (ctx: Declare_oneContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.assign_instance_statement`.
	 * @param ctx the parse tree
	 */
	enterAssign_instance_statement?: (ctx: Assign_instance_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.assign_instance_statement`.
	 * @param ctx the parse tree
	 */
	exitAssign_instance_statement?: (ctx: Assign_instance_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.assign_op`.
	 * @param ctx the parse tree
	 */
	enterAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.assign_op`.
	 * @param ctx the parse tree
	 */
	exitAssign_op?: (ctx: Assign_opContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.assign_item_statement`.
	 * @param ctx the parse tree
	 */
	enterAssign_item_statement?: (ctx: Assign_item_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.assign_item_statement`.
	 * @param ctx the parse tree
	 */
	exitAssign_item_statement?: (ctx: Assign_item_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	enterReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.return_statement`.
	 * @param ctx the parse tree
	 */
	exitReturn_statement?: (ctx: Return_statementContext) => void;
	/**
	 * Enter a parse tree produced by the `ChildCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterChildCallExpression?: (ctx: ChildCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ChildCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitChildCallExpression?: (ctx: ChildCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TernaryExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTernaryExpression?: (ctx: TernaryExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AssignExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAssignExpression?: (ctx: AssignExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AssignExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAssignExpression?: (ctx: AssignExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `SimpleCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSimpleCallExpression?: (ctx: SimpleCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SimpleCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSimpleCallExpression?: (ctx: SimpleCallExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `InExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInExpression?: (ctx: InExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ItemExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterItemExpression?: (ctx: ItemExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ItemExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitItemExpression?: (ctx: ItemExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CompareExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCompareExpression?: (ctx: CompareExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CompareExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCompareExpression?: (ctx: CompareExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `OrExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `OrExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitOrExpression?: (ctx: OrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `SizeofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSizeofExpression?: (ctx: SizeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SizeofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSizeofExpression?: (ctx: SizeofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AlignofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAlignofExpression?: (ctx: AlignofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AlignofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAlignofExpression?: (ctx: AlignofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ThisExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitThisExpression?: (ctx: ThisExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PreCastExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPreCastExpression?: (ctx: PreCastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreCastExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPreCastExpression?: (ctx: PreCastExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AndExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AndExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAndExpression?: (ctx: AndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryMinusExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryMinusExpression?: (ctx: UnaryMinusExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `TypeofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitTypeofExpression?: (ctx: TypeofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `InstanceofExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitInstanceofExpression?: (ctx: InstanceofExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPlusExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPlusExpression?: (ctx: UnaryPlusExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PostDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostDecrementExpression?: (ctx: PostDecrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastAsExpression?: (ctx: CastAsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastAsExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastAsExpression?: (ctx: CastAsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `SuperExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `SuperExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitSuperExpression?: (ctx: SuperExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitShiftExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitShiftExpression?: (ctx: BitShiftExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryNotExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryNotExpression?: (ctx: UnaryNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryNotExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryNotExpression?: (ctx: UnaryNotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PostIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPostIncrementExpression?: (ctx: PostIncrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `NewExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `NewExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitNewExpression?: (ctx: NewExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `ParenthesisExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitParenthesisExpression?: (ctx: ParenthesisExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `LiteralExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitLiteralExpression?: (ctx: LiteralExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MultiplyExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MultiplyExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMultiplyExpression?: (ctx: MultiplyExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitXorExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitXorExpression?: (ctx: BitXorExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitXorExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitXorExpression?: (ctx: BitXorExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryPreIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPreIncrementExpression?: (ctx: UnaryPreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPreIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPreIncrementExpression?: (ctx: UnaryPreIncrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `IdentifierExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitIdentifierExpression?: (ctx: IdentifierExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryBitNotExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryBitNotExpression?: (ctx: UnaryBitNotExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryBitNotExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryBitNotExpression?: (ctx: UnaryBitNotExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `MemberExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMemberExpression?: (ctx: MemberExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MemberExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMemberExpression?: (ctx: MemberExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitAndExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitAndExpression?: (ctx: BitAndExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `AddExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `AddExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `BitOrExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitBitOrExpression?: (ctx: BitOrExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `UnaryPreDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterUnaryPreDecrementExpression?: (ctx: UnaryPreDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `UnaryPreDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitUnaryPreDecrementExpression?: (ctx: UnaryPreDecrementExpressionContext) => void;
	/**
	 * Enter a parse tree produced by the `EqualsExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterEqualsExpression?: (ctx: EqualsExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `EqualsExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitEqualsExpression?: (ctx: EqualsExpressionContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Enter a parse tree produced by the `NullLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `NullLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitNullLiteral?: (ctx: NullLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `BooleanLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitBooleanLiteral?: (ctx: BooleanLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `IntegerLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitIntegerLiteral?: (ctx: IntegerLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `DecimalLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `DecimalLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitDecimalLiteral?: (ctx: DecimalLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `CharLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterCharLiteral?: (ctx: CharLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `CharLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitCharLiteral?: (ctx: CharLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `StringLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `StringLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitStringLiteral?: (ctx: StringLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `ListLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `ListLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitListLiteral?: (ctx: ListLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `SetLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterSetLiteral?: (ctx: SetLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `SetLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitSetLiteral?: (ctx: SetLiteralContext) => void;
	/**
	 * Enter a parse tree produced by the `MapLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	enterMapLiteral?: (ctx: MapLiteralContext) => void;
	/**
	 * Exit a parse tree produced by the `MapLiteral`
	 * labeled alternative in `ComposeParser.literal_expression`.
	 * @param ctx the parse tree
	 */
	exitMapLiteral?: (ctx: MapLiteralContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.list_literal`.
	 * @param ctx the parse tree
	 */
	enterList_literal?: (ctx: List_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.list_literal`.
	 * @param ctx the parse tree
	 */
	exitList_literal?: (ctx: List_literalContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.set_literal`.
	 * @param ctx the parse tree
	 */
	enterSet_literal?: (ctx: Set_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.set_literal`.
	 * @param ctx the parse tree
	 */
	exitSet_literal?: (ctx: Set_literalContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.map_literal`.
	 * @param ctx the parse tree
	 */
	enterMap_literal?: (ctx: Map_literalContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.map_literal`.
	 * @param ctx the parse tree
	 */
	exitMap_literal?: (ctx: Map_literalContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.map_entry`.
	 * @param ctx the parse tree
	 */
	enterMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.map_entry`.
	 * @param ctx the parse tree
	 */
	exitMap_entry?: (ctx: Map_entryContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.instruction`.
	 * @param ctx the parse tree
	 */
	enterInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.instruction`.
	 * @param ctx the parse tree
	 */
	exitInstruction?: (ctx: InstructionContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.opcode`.
	 * @param ctx the parse tree
	 */
	enterOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.opcode`.
	 * @param ctx the parse tree
	 */
	exitOpcode?: (ctx: OpcodeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.plain_opcode`.
	 * @param ctx the parse tree
	 */
	enterPlain_opcode?: (ctx: Plain_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.plain_opcode`.
	 * @param ctx the parse tree
	 */
	exitPlain_opcode?: (ctx: Plain_opcodeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.keyword_opcode`.
	 * @param ctx the parse tree
	 */
	enterKeyword_opcode?: (ctx: Keyword_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.keyword_opcode`.
	 * @param ctx the parse tree
	 */
	exitKeyword_opcode?: (ctx: Keyword_opcodeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.composite_opcode`.
	 * @param ctx the parse tree
	 */
	enterComposite_opcode?: (ctx: Composite_opcodeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.composite_opcode`.
	 * @param ctx the parse tree
	 */
	exitComposite_opcode?: (ctx: Composite_opcodeContext) => void;
}

