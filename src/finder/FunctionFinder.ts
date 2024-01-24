import FunctionCall from "../expression/FunctionCall.ts";
import Context from "../context/Context.ts";
import Identifier from "../builder/Identifier.ts";
import IType from "../type/IType.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import IExpression from "../expression/IExpression.ts";
import VoidType from "../type/VoidType.ts";
import RestParameter from "../parameter/RestParameter.ts";
import {assertTrue, assertEquals} from "../../deps.ts";
import UnresolvedIdentifierExpression from "../expression/UnresolvedIdentifierExpression.ts";

enum Score {
    WORSE = -1,
    SIMILAR,
    BETTER
}

export default abstract class FunctionFinder {

    static findDeclaration(context: Context, call: FunctionCall): IFunctionDeclaration {
        const argTypes = call.args.map(x => x.check(context));
        const finder = FunctionFinder.newFinder(context, call.parent, call.id, argTypes, call.genericTypes);
        return finder ? finder.find() : null;
    }

    static findBuiltin(context: Context, parentName: string | null, methodName: string, argTypes: IType[]) {
        const parent = new UnresolvedIdentifierExpression(new Identifier(parentName));
        const id = new Identifier(methodName);
        const finder = FunctionFinder.newFinder(context, parent, id, argTypes);
        return finder ? finder.find() : null;
    }

    private static newFinder(context: Context, parent: IExpression, id: Identifier, argTypes: IType[], genericTypes: IType[] = null): FunctionFinder {
        const isGeneric = genericTypes && genericTypes.length > 0;
        if(parent) {
            if(isGeneric)
                return null; // TODO
            else
                return new MemberSimpleFinder(context, parent, id, argTypes);
        } else if(isGeneric)
            return new GlobalGenericsFinder(context, id, genericTypes, argTypes);
        else
            return new GlobalSimpleFinder(context, id, argTypes);
    }

    context: Context;
    id: Identifier;
    argTypes: IType[];

    constructor(context: Context, id: Identifier, argTypes: IType[]) {
        this.context = context;
        this.id = id;
        this.argTypes = argTypes;
    }

    find(): IFunctionDeclaration {
        this.resolveContext();
        const candidates = this.context.getRegisteredFunctions(this.id);
        const compatibles = this.filterCompatibles(candidates);
        switch(compatibles.length) {
            case 0:
                return null;
            case 1:
                return compatibles[0];
            default:
                return this.findMostSpecific(compatibles);
        }
    }

    protected filterCompatibles(candidates: IFunctionDeclaration[]) {
        return candidates.filter(decl => this.isCompatible(decl), this);
    }

    protected isCompatible(decl: IFunctionDeclaration) {
        let argTypes = Array.from(this.argTypes);
        for(let i=0; i < decl.parameters.length; i++) {
            const param = decl.parameters[i];
            if(argTypes.length == 0 && param.defaultValue == null)
                return false;
            const argType = argTypes.length > 0 ? argTypes.shift() : param.defaultValue.check(this.context);
            let paramType = param instanceof RestParameter ? param.atomicType : param.type;
            paramType = this.resolveGenericType(decl, paramType);
            if(!paramType.isAssignableFrom(this.context, argType))
                return false;
            if(param instanceof RestParameter) {
                while(argTypes.length > 0) {
                    const argType = argTypes.shift();
                    if(!paramType.isAssignableFrom(this.context, argType))
                        return false;
                }
            }
        }
        return true;
    }

    protected findMostSpecific(candidates: IFunctionDeclaration[]): IFunctionDeclaration {
        let candidate: IFunctionDeclaration = null;
        let ambiguous: IFunctionDeclaration[] = [];
        candidates.forEach(decl => {
            if(candidate == null)
                candidate = decl;
            const score = this.compareSpecificity(candidate, decl);
            switch(score) {
                case Score.WORSE:
                    candidate = decl;
                    ambiguous = [];
                    break;
                case Score.BETTER:
                    break;
                case Score.SIMILAR:
                    ambiguous.push(decl);
            }
        }, this);
        assertEquals(ambiguous.length, 0);
        return candidate;
    }

    protected compareSpecificity(decl1: IFunctionDeclaration, decl2: IFunctionDeclaration): Score {
        const types1 = decl1.functionType().parameters.map(param => param.type);
        const types2 = decl2.functionType().parameters.map(param => param.type);
        for(let i=0; i < this.argTypes.length; i++) {
            const type1 = types1[i];
            const type2 = types2[i];
            const ok1 = type1.isAssignableFrom(this.context, type2);
            const ok2 = type2.isAssignableFrom(this.context, type1);
            if(ok1 && !ok2)
                return Score.WORSE;
            else if(ok2 && !ok1)
                return Score.BETTER;
        }
        return Score.SIMILAR;
    }

    protected abstract resolveGenericType(decl: IFunctionDeclaration, type: IType): IType;

    protected resolveContext(): void {
        // nothing to do;
    }
}

class GlobalGenericsFinder extends FunctionFinder {

    typeArguments: IType[];

    constructor(context: Context, id: Identifier, typeArguments: IType[], argTypes: IType[]) {
        super(context, id, argTypes);
        this.typeArguments = typeArguments;
    }

    protected resolveGenericType(decl: IFunctionDeclaration, type: IType) {
        return decl.resolveGenericType(type, this.typeArguments);
    }

    find(): IFunctionDeclaration {
        const decl = super.find();
        return decl ? decl.instantiateGeneric(this.typeArguments) : null;
    }

}


class GlobalSimpleFinder extends FunctionFinder {

    protected resolveGenericType(decl: IFunctionDeclaration, type: IType) {
        return type;
    }

}

class MemberSimpleFinder extends FunctionFinder {

    parent: IExpression;

    constructor(context: Context, parent: IExpression, id: Identifier, argTypes: IType[]) {
        super(context, id, argTypes);
        this.parent = parent;
    }

    protected resolveContext(): void {
        const type = this.parent.check(this.context);
        assertTrue(type);
        assertTrue(type != VoidType.instance);
        this.context = type.prepareContext(this.context);
    }

    protected resolveGenericType(decl: IFunctionDeclaration, type: IType) {
        return type;
    }

}
