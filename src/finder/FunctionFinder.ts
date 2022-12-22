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
        if(call.types.length)
            return null; // TODO
        else if(call.parent)
            return null; // TODO
        else
            return new GlobalFinder(context, call.id, argTypes).find();
    }

}

class GlobalFinder extends FunctionFinder {

    context: Context;
    id: Identifier;
    argTypes: IType[];

    constructor(context: Context, id: Identifier, argTypes: IType[]) {
        super();
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

    private findMostSpecific(candidates: IFunctionDeclaration[]): IFunctionDeclaration {
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

    private filterCompatibles(candidates: IFunctionDeclaration[]) {
        return candidates.filter(decl => this.isCompatible(decl.type()), this);
    }

    private isCompatible(type: FunctionType) {
        for(let i=0; i < type.parameters.length; i++) {
            const param = type.parameters[i];
            if(i >= this.argTypes.length && param.defaultValue == null)
                return false;
            const argType = this.argTypes[i];
            if(!param.type.isAssignableFrom(this.context, argType))
                return false;
        }
        return true;
    }

    private compareSpecificity(decl1: IFunctionDeclaration, decl2: IFunctionDeclaration): Score {
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
}
