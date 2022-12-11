// Generated from ComposeParser.g4 by ANTLR 4.11.2-SNAPSHOT

import {ParseTreeListener} from "antlr4";


import { Compilation_unitContext } from "./ComposeParser";
import { DeclarationContext } from "./ComposeParser";
import { Attribute_declarationContext } from "./ComposeParser";
import { IdentifierContext } from "./ComposeParser";
import { Data_typeContext } from "./ComposeParser";
import { Native_typeContext } from "./ComposeParser";
import { Boolean_typeContext } from "./ComposeParser";
import { Number_typeContext } from "./ComposeParser";
import { Integer_typeContext } from "./ComposeParser";
import { Decimal_typeContext } from "./ComposeParser";
import { I32_typeContext } from "./ComposeParser";
import { I64_typeContext } from "./ComposeParser";
import { U32_typeContext } from "./ComposeParser";
import { U64_typeContext } from "./ComposeParser";
import { F32_typeContext } from "./ComposeParser";
import { F64_typeContext } from "./ComposeParser";
import { String_typeContext } from "./ComposeParser";
import { Void_typeContext } from "./ComposeParser";
import { Attribute_typeContext } from "./ComposeParser";
import { Attribute_refContext } from "./ComposeParser";
import { Class_typeContext } from "./ComposeParser";
import { Class_refContext } from "./ComposeParser";
import { Method_typeContext } from "./ComposeParser";
import { Return_typeContext } from "./ComposeParser";
import { Return_typesContext } from "./ComposeParser";
import { AttributeParameterContext } from "./ComposeParser";
import { TypedParameterContext } from "./ComposeParser";
import { MethodParameterContext } from "./ComposeParser";
import { Class_declarationContext } from "./ComposeParser";
import { Method_declarationContext } from "./ComposeParser";
import { Abstract_method_declarationContext } from "./ComposeParser";
import { Method_prototypeContext } from "./ComposeParser";
import { Concrete_method_declarationContext } from "./ComposeParser";
import { StatementContext } from "./ComposeParser";
import { Assign_statementContext } from "./ComposeParser";
import { Return_statementContext } from "./ComposeParser";
import { TernaryExpressionContext } from "./ComposeParser";
import { InExpressionContext } from "./ComposeParser";
import { ItemExpressionContext } from "./ComposeParser";
import { CompareExpressionContext } from "./ComposeParser";
import { OrExpressionContext } from "./ComposeParser";
import { ThisExpressionContext } from "./ComposeParser";
import { AndExpressionContext } from "./ComposeParser";
import { MethodCallExpressionContext } from "./ComposeParser";
import { UnaryMinusExpressionContext } from "./ComposeParser";
import { TypeofExpressionContext } from "./ComposeParser";
import { InstanceofExpressionContext } from "./ComposeParser";
import { UnaryPlusExpressionContext } from "./ComposeParser";
import { PostDecrementExpressionContext } from "./ComposeParser";
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
import { CastExpressionContext } from "./ComposeParser";
import { UnaryPreDecrementExpressionContext } from "./ComposeParser";
import { EqualsExpressionContext } from "./ComposeParser";
import { Method_call_expressionContext } from "./ComposeParser";
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
	 * Enter a parse tree produced by `ComposeParser.method_type`.
	 * @param ctx the parse tree
	 */
	enterMethod_type?: (ctx: Method_typeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.method_type`.
	 * @param ctx the parse tree
	 */
	exitMethod_type?: (ctx: Method_typeContext) => void;
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
	 * Enter a parse tree produced by the `MethodParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	enterMethodParameter?: (ctx: MethodParameterContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodParameter`
	 * labeled alternative in `ComposeParser.parameter`.
	 * @param ctx the parse tree
	 */
	exitMethodParameter?: (ctx: MethodParameterContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.method_declaration`.
	 * @param ctx the parse tree
	 */
	enterMethod_declaration?: (ctx: Method_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.method_declaration`.
	 * @param ctx the parse tree
	 */
	exitMethod_declaration?: (ctx: Method_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.abstract_method_declaration`.
	 * @param ctx the parse tree
	 */
	enterAbstract_method_declaration?: (ctx: Abstract_method_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.abstract_method_declaration`.
	 * @param ctx the parse tree
	 */
	exitAbstract_method_declaration?: (ctx: Abstract_method_declarationContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	enterMethod_prototype?: (ctx: Method_prototypeContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.method_prototype`.
	 * @param ctx the parse tree
	 */
	exitMethod_prototype?: (ctx: Method_prototypeContext) => void;
	/**
	 * Enter a parse tree produced by `ComposeParser.concrete_method_declaration`.
	 * @param ctx the parse tree
	 */
	enterConcrete_method_declaration?: (ctx: Concrete_method_declarationContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.concrete_method_declaration`.
	 * @param ctx the parse tree
	 */
	exitConcrete_method_declaration?: (ctx: Concrete_method_declarationContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.assign_statement`.
	 * @param ctx the parse tree
	 */
	enterAssign_statement?: (ctx: Assign_statementContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.assign_statement`.
	 * @param ctx the parse tree
	 */
	exitAssign_statement?: (ctx: Assign_statementContext) => void;
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
	 * Enter a parse tree produced by the `MethodCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `MethodCallExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitMethodCallExpression?: (ctx: MethodCallExpressionContext) => void;
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
	 * Enter a parse tree produced by the `CastExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	enterCastExpression?: (ctx: CastExpressionContext) => void;
	/**
	 * Exit a parse tree produced by the `CastExpression`
	 * labeled alternative in `ComposeParser.expression`.
	 * @param ctx the parse tree
	 */
	exitCastExpression?: (ctx: CastExpressionContext) => void;
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
	 * Enter a parse tree produced by `ComposeParser.method_call_expression`.
	 * @param ctx the parse tree
	 */
	enterMethod_call_expression?: (ctx: Method_call_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `ComposeParser.method_call_expression`.
	 * @param ctx the parse tree
	 */
	exitMethod_call_expression?: (ctx: Method_call_expressionContext) => void;
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
}

