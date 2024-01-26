import ParameterList from "../parameter/ParameterList.ts";
import IType from "./IType.ts";
import Context from "../context/Context.ts";
import UserType from "./UserType.ts";
import {equalArrays, equalObjects} from "../utils/ObjectUtils.ts";
import NullLiteral from "../literal/NullLiteral.ts";
import IExpression from "../expression/IExpression.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
/// <reference types="../binaryen/binaryen_wasm.d.ts" />
import {createType} from "../binaryen/binaryen_wasm.js";
import {assertTrue} from "../../deps.ts";
import TypeInfo from "../reflection/TypeInfo.ts";

export default class FunctionType extends UserType {

    nullable = false;
    parameters: ParameterList;
    returnType: IType;

    constructor(parameters: ParameterList, returnType: IType) {
        super();
        this.parameters = parameters;
        this.returnType = returnType;
    }

    defaultValue(): IExpression {
        return new NullLiteral();
    }

    // deno-lint-ignore no-explicit-any
    equals(other: any) {
        return this == other || (other instanceof FunctionType && this.equalsFunctionType(other));
    }

    equalsFunctionType(other: FunctionType) {
        return this.nullable == other.nullable && equalArrays(this.parameters, other.parameters, (p1, p2) => p1.equals(p2)) && equalObjects(this.returnType, other.returnType, (t1, t2) => t1.typeName == t2.typeName);
    }

    get typeName(): string {
        return this.toString();
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(!(type instanceof FunctionType))
            return false;
        if(this.parameters.length !== type.parameters.length)
            return false;
        for(let i=0; i<this.parameters.length; i++) {
            if(!this.parameters[i].type.isAssignableFrom(context, type.parameters[i].type))
                return false;
        }
        // noinspection RedundantIfStatementJS
        if(!this.returnType.isAssignableFrom(context, type.returnType))
            return false;
        return true;
    }

    prepareContext(_context: Context): Context {
        assertTrue(false); // TODO
    }

    asType(context: Context): Type {
        const types = this.parameters.map(param => param.type.asType(context));
        return createType(types);
    }

    asTypeInfo(_context: Context): TypeInfo {
        assertTrue(false); // should never get there
    }

    toString(): string {
        const paramStrings = this.parameters.map(param => param.toString());
        const returnString = this.returnType ? this.returnType.toString() : "()";
        return FunctionType.flatten(paramStrings) + " => " + returnString;
    }

    static flatten(values: string[]): string {
        switch(values.length) {
            case 0:
                return "()";
            case 1: {
                const value = values[0];
                if (value.indexOf(":") >= 0)
                    return "(" + value + ")";
                else
                    return value;
            }
            default:
                return "(" + values.join(", ") + ")";
        }
    }

}
