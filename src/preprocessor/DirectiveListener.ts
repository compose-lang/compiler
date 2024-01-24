// Generated from Directive.g4 by ANTLR 4.13.1

import {ParseTreeListener} from 'npm:antlr4';


import { DirectiveContext } from "./DirectiveParser.ts";
import { If_directiveContext } from "./DirectiveParser.ts";
import { Else_if_directiveContext } from "./DirectiveParser.ts";
import { Else_directiveContext } from "./DirectiveParser.ts";
import { End_directiveContext } from "./DirectiveParser.ts";
import { ValueContext } from "./DirectiveParser.ts";
import { TrailerContext } from "./DirectiveParser.ts";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `DirectiveParser`.
 */
export default class DirectiveListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `DirectiveParser.directive`.
	 * @param ctx the parse tree
	 */
	enterDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.directive`.
	 * @param ctx the parse tree
	 */
	exitDirective?: (ctx: DirectiveContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.if_directive`.
	 * @param ctx the parse tree
	 */
	enterIf_directive?: (ctx: If_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.if_directive`.
	 * @param ctx the parse tree
	 */
	exitIf_directive?: (ctx: If_directiveContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.else_if_directive`.
	 * @param ctx the parse tree
	 */
	enterElse_if_directive?: (ctx: Else_if_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.else_if_directive`.
	 * @param ctx the parse tree
	 */
	exitElse_if_directive?: (ctx: Else_if_directiveContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.else_directive`.
	 * @param ctx the parse tree
	 */
	enterElse_directive?: (ctx: Else_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.else_directive`.
	 * @param ctx the parse tree
	 */
	exitElse_directive?: (ctx: Else_directiveContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.end_directive`.
	 * @param ctx the parse tree
	 */
	enterEnd_directive?: (ctx: End_directiveContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.end_directive`.
	 * @param ctx the parse tree
	 */
	exitEnd_directive?: (ctx: End_directiveContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.value`.
	 * @param ctx the parse tree
	 */
	enterValue?: (ctx: ValueContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.value`.
	 * @param ctx the parse tree
	 */
	exitValue?: (ctx: ValueContext) => void;
	/**
	 * Enter a parse tree produced by `DirectiveParser.trailer`.
	 * @param ctx the parse tree
	 */
	enterTrailer?: (ctx: TrailerContext) => void;
	/**
	 * Exit a parse tree produced by `DirectiveParser.trailer`.
	 * @param ctx the parse tree
	 */
	exitTrailer?: (ctx: TrailerContext) => void;
}

