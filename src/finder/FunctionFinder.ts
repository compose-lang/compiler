import FunctionCall from "../expression/FunctionCall";
import Context from "../context/Context";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import FunctionType from "../type/FunctionType";
import * as assert from "assert";

enum Score {
    WORSE = -1,
    SIMILAR,
    BETTER
}

export default abstract class FunctionFinder {

    static findFunction(context: Context, call: FunctionCall): IFunctionDeclaration {
        const argTypes = call.args.map(x => x.check(context));
        const finder = FunctionFinder.newFinder(context, call, argTypes);
        return finder ? finder.find() : null;
    }

    private static newFinder(context: Context, call: FunctionCall, argTypes: IType[]): FunctionFinder {
        if(call.parent)
            return null; // TODO
        else if(call.isGeneric())
            return new GlobalGenericsFinder(context, call.id, call.genericTypes, argTypes);
        else
            return new GlobalSimpleFinder(context, call.id, argTypes);
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
        for(let i=0; i < decl.parameters.length; i++) {
            const param = decl.parameters[i];
            if(i >= this.argTypes.length && param.defaultValue == null)
                return false;
            const argType = this.argTypes[i];
            const paramType = this.resolveGenericType(decl, param.type);
            if(!paramType.isAssignableFrom(this.context, argType))
                return false;
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
        assert.equal(ambiguous.length, 0);
        return candidate;
    }

    protected compareSpecificity(decl1: IFunctionDeclaration, decl2: IFunctionDeclaration): Score {
        const types1 = decl1.type().parameters.map(param => param.type);
        const types2 = decl2.type().parameters.map(param => param.type);
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
