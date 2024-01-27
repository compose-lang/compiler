// Generated from ComposeParser.g4 by ANTLR 4.13.1

import {ParseTreeListener} from 'npm:antlr4';


import { Compilation_unitContext } from "./ComposeParser.ts";
import { PreambleContext } from "./ComposeParser.ts";
import { Import_statementContext } from "./ComposeParser.ts";
import { Import_sourceContext } from "./ComposeParser.ts";
import { Compilation_atomContext } from "./ComposeParser.ts";
import { Global_statementContext } from "./ComposeParser.ts";
import { DeclarationContext } from "./ComposeParser.ts";
import { Enum_declarationContext } from "./ComposeParser.ts";
import { Enum_itemContext } from "./ComposeParser.ts";
import { Attribute_declarationContext } from "./ComposeParser.ts";
import { IdentifierContext } from "./ComposeParser.ts";
import { AnnotationContext } from "./ComposeParser.ts";
import { ArrayTypeContext } from "./ComposeParser.ts";
import { SetTypeContext } from "./ComposeParser.ts";
import { NativeTypeContext } from "./ComposeParser.ts";
import { UserTypeContext } from "./ComposeParser.ts";
import { Value_type_or_nullContext } from "./ComposeParser.ts";
import { Native_typeContext } from "./ComposeParser.ts";
import { Any_typeContext } from "./ComposeParser.ts";
import { Boolean_typeContext } from "./ComposeParser.ts";
import { Char_typeContext } from "./ComposeParser.ts";
import { Number_typeContext } from "./ComposeParser.ts";
import { Integer_typeContext } from "./ComposeParser.ts";
import { Decimal_typeContext } from "./ComposeParser.ts";
import { I8_typeContext } from "./ComposeParser.ts";
import { I16_typeContext } from "./ComposeParser.ts";
import { I32_typeContext } from "./ComposeParser.ts";
import { I64_typeContext } from "./ComposeParser.ts";
import { U8_typeContext } from "./ComposeParser.ts";
import { U16_typeContext } from "./ComposeParser.ts";
import { U32_typeContext } from "./ComposeParser.ts";
import { U64_typeContext } from "./ComposeParser.ts";
import { F32_typeContext } from "./ComposeParser.ts";
import { F64_typeContext } from "./ComposeParser.ts";
import { String_typeContext } from "./ComposeParser.ts";
import { Void_typeContext } from "./ComposeParser.ts";
import { Attribute_typeContext } from "./ComposeParser.ts";
import { Attribute_type_or_nullContext } from "./ComposeParser.ts";
import { Attribute_refContext } from "./ComposeParser.ts";
import { User_typeContext } from "./ComposeParser.ts";
import { User_refContext } from "./ComposeParser.ts";
import { Function_typeContext } from "./ComposeParser.ts";
import { Function_type_or_nullContext } from "./ComposeParser.ts";
import { Return_typeContext } from "./ComposeParser.ts";
import { Return_typesContext } from "./ComposeParser.ts";
import { AttributeParameterContext } from "./ComposeParser.ts";
import { TypedParameterContext } from "./ComposeParser.ts";
import { FunctionParameterContext } from "./ComposeParser.ts";
import { Class_declarationContext } from "./ComposeParser.ts";
import { Struct_declarationContext } from "./ComposeParser.ts";
import { AccessibilityContext } from "./ComposeParser.ts";
import { Field_declarationContext } from "./ComposeParser.ts";
import { Function_declarationContext } from "./ComposeParser.ts";
import { Abstract_function_declarationContext } from "./ComposeParser.ts";
import { Concrete_function_declarationContext } from "./ComposeParser.ts";
import { Native_function_declarationContext } from "./ComposeParser.ts";
import { Function_prototypeContext } from "./ComposeParser.ts";
import { Generic_parameterContext } from "./ComposeParser.ts";
import { StatementContext } from "./ComposeParser.ts";
import { Embeddable_statementContext } from "./ComposeParser.ts";
import { Standalone_statementContext } from "./ComposeParser.ts";
import { Unary_statementContext } from "./ComposeParser.ts";
import { Throw_statementContext } from "./ComposeParser.ts";
import { Try_statementContext } from "./ComposeParser.ts";
import { Catch_clauseContext } from "./ComposeParser.ts";
import { Catch_all_clauseContext } from "./ComposeParser.ts";
import { Finally_clauseContext } from "./ComposeParser.ts";
import { Break_statementContext } from "./ComposeParser.ts";
import { For_statementContext } from "./ComposeParser.ts";
import { While_statementContext } from "./ComposeParser.ts";
import { Do_while_statementContext } from "./ComposeParser.ts";
import { If_statementContext } from "./ComposeParser.ts";
import { StatementsContext } from "./ComposeParser.ts";
import { Function_call_statementContext } from "./ComposeParser.ts";
import { Declare_instances_statementContext } from "./ComposeParser.ts";
import { Declare_oneContext } from "./ComposeParser.ts";
import { Assign_instance_statementContext } from "./ComposeParser.ts";
import { Assign_opContext } from "./ComposeParser.ts";
import { Assign_item_statementContext } from "./ComposeParser.ts";
import { Return_statementContext } from "./ComposeParser.ts";
import { ChildCallExpressionContext } from "./ComposeParser.ts";
import { TernaryExpressionContext } from "./ComposeParser.ts";
import { AssignExpressionContext } from "./ComposeParser.ts";
import { PreIncrementExpressionContext } from "./ComposeParser.ts";
import { SimpleCallExpressionContext } from "./ComposeParser.ts";
import { InExpressionContext } from "./ComposeParser.ts";
import { ItemExpressionContext } from "./ComposeParser.ts";
import { CompareExpressionContext } from "./ComposeParser.ts";
import { OrExpressionContext } from "./ComposeParser.ts";
import { ThisExpressionContext } from "./ComposeParser.ts";
import { PreCastExpressionContext } from "./ComposeParser.ts";
import { AndExpressionContext } from "./ComposeParser.ts";
import { UnaryMinusExpressionContext } from "./ComposeParser.ts";
import { TypeofExpressionContext } from "./ComposeParser.ts";
import { InstanceofExpressionContext } from "./ComposeParser.ts";
import { UnaryPlusExpressionContext } from "./ComposeParser.ts";
import { PostDecrementExpressionContext } from "./ComposeParser.ts";
import { CastAsExpressionContext } from "./ComposeParser.ts";
import { SuperExpressionContext } from "./ComposeParser.ts";
import { BitShiftExpressionContext } from "./ComposeParser.ts";
import { UnaryNotExpressionContext } from "./ComposeParser.ts";
import { PostIncrementExpressionContext } from "./ComposeParser.ts";
import { PreDecrementExpressionContext } from "./ComposeParser.ts";
import { NewExpressionContext } from "./ComposeParser.ts";
import { ParenthesisExpressionContext } from "./ComposeParser.ts";
import { LiteralExpressionContext } from "./ComposeParser.ts";
import { MultiplyExpressionContext } from "./ComposeParser.ts";
import { BitXorExpressionContext } from "./ComposeParser.ts";
import { IdentifierExpressionContext } from "./ComposeParser.ts";
import { UnaryBitNotExpressionContext } from "./ComposeParser.ts";
import { MemberExpressionContext } from "./ComposeParser.ts";
import { BitAndExpressionContext } from "./ComposeParser.ts";
import { AddExpressionContext } from "./ComposeParser.ts";
import { BitOrExpressionContext } from "./ComposeParser.ts";
import { EqualsExpressionContext } from "./ComposeParser.ts";
import { Function_callContext } from "./ComposeParser.ts";
import { NullLiteralContext } from "./ComposeParser.ts";
import { BooleanLiteralContext } from "./ComposeParser.ts";
import { IntegerLiteralContext } from "./ComposeParser.ts";
import { DecimalLiteralContext } from "./ComposeParser.ts";
import { CharLiteralContext } from "./ComposeParser.ts";
import { StringLiteralContext } from "./ComposeParser.ts";
import { ListLiteralContext } from "./ComposeParser.ts";
import { SetLiteralContext } from "./ComposeParser.ts";
import { MapLiteralContext } from "./ComposeParser.ts";
import { List_literalContext } from "./ComposeParser.ts";
import { Set_literalContext } from "./ComposeParser.ts";
import { Map_literalContext } from "./ComposeParser.ts";
import { Map_entryContext } from "./ComposeParser.ts";
import { InstructionContext } from "./ComposeParser.ts";
import { OpcodeContext } from "./ComposeParser.ts";
import { Plain_opcodeContext } from "./ComposeParser.ts";
import { Keyword_opcodeContext } from "./ComposeParser.ts";
import { Composite_opcodeContext } from "./ComposeParser.ts";


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
	 * Enter a parse tree produced by the `ArrayType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `ArrayType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitArrayType?: (ctx: ArrayTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `SetType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `SetType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitSetType?: (ctx: SetTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `NativeType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterNativeType?: (ctx: NativeTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `NativeType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitNativeType?: (ctx: NativeTypeContext) => void;
	/**
	 * Enter a parse tree produced by the `UserType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	enterUserType?: (ctx: UserTypeContext) => void;
	/**
	 * Exit a parse tree produced by the `UserType`
	 * labeled alternative in `ComposeParser.value_type`.
	 * @param ctx the parse tree
	 */
	exitUserType?: (ctx: UserTypeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.value_type_or_null`.
	 * @param ctx the parse tree
	 */
	enterValue_type_or_null?: (ctx: Value_type_or_nullContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.value_type_or_null`.
	 * @param ctx the parse tree
	 */
	exitValue_type_or_null?: (ctx: Value_type_or_nullContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.any_type`.
	 * @param ctx the parse tree
	 */
	enterAny_type?: (ctx: Any_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.any_type`.
	 * @param ctx the parse tree
	 */
	exitAny_type?: (ctx: Any_typeContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.char_type`.
	 * @param ctx the parse tree
	 */
	enterChar_type?: (ctx: Char_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.char_type`.
	 * @param ctx the parse tree
	 */
	exitChar_type?: (ctx: Char_typeContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.i8_type`.
	 * @param ctx the parse tree
	 */
	enterI8_type?: (ctx: I8_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.i8_type`.
	 * @param ctx the parse tree
	 */
	exitI8_type?: (ctx: I8_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.i16_type`.
	 * @param ctx the parse tree
	 */
	enterI16_type?: (ctx: I16_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.i16_type`.
	 * @param ctx the parse tree
	 */
	exitI16_type?: (ctx: I16_typeContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.u8_type`.
	 * @param ctx the parse tree
	 */
	enterU8_type?: (ctx: U8_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.u8_type`.
	 * @param ctx the parse tree
	 */
	exitU8_type?: (ctx: U8_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.u16_type`.
	 * @param ctx the parse tree
	 */
	enterU16_type?: (ctx: U16_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.u16_type`.
	 * @param ctx the parse tree
	 */
	exitU16_type?: (ctx: U16_typeContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.user_type`.
	 * @param ctx the parse tree
	 */
	enterUser_type?: (ctx: User_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.user_type`.
	 * @param ctx the parse tree
	 */
	exitUser_type?: (ctx: User_typeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.user_ref`.
	 * @param ctx the parse tree
	 */
	enterUser_ref?: (ctx: User_refContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.user_ref`.
	 * @param ctx the parse tree
	 */
	exitUser_ref?: (ctx: User_refContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	enterStruct_declaration?: (ctx: Struct_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.struct_declaration`.
	 * @param ctx the parse tree
	 */
	exitStruct_declaration?: (ctx: Struct_declarationContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.embeddable_statement`.
	 * @param ctx the parse tree
	 */
	enterEmbeddable_statement?: (ctx: Embeddable_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.embeddable_statement`.
	 * @param ctx the parse tree
	 */
	exitEmbeddable_statement?: (ctx: Embeddable_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.standalone_statement`.
	 * @param ctx the parse tree
	 */
	enterStandalone_statement?: (ctx: Standalone_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.standalone_statement`.
	 * @param ctx the parse tree
	 */
	exitStandalone_statement?: (ctx: Standalone_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.unary_statement`.
	 * @param ctx the parse tree
	 */
	enterUnary_statement?: (ctx: Unary_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.unary_statement`.
	 * @param ctx the parse tree
	 */
	exitUnary_statement?: (ctx: Unary_statementContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.do_while_statement`.
	 * @param ctx the parse tree
	 */
	enterDo_while_statement?: (ctx: Do_while_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.do_while_statement`.
	 * @param ctx the parse tree
	 */
	exitDo_while_statement?: (ctx: Do_while_statementContext) => void;
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
	 * Enter a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreIncrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPreIncrementExpression?: (ctx: PreIncrementExpressionContext) => void;
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
	 * Enter a parse tree produced by the `PreDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `PreDecrementExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitPreDecrementExpression?: (ctx: PreDecrementExpressionContext) => void;
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

