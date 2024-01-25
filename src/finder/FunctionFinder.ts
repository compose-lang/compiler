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

    static findRuntimeDeclaration(context: Context, parentName: string | null, methodName: string, argTypes: IType[], typeArguments: IType[] = null) {
        const parent = new UnresolvedIdentifierExpression(new Identifier(parentName));
        const id = new Identifier(methodName);
        const finder = FunctionFinder.newFinder(context, parent, id, argTypes, typeArguments, true);
        return finder ? finder.find() : null;
    }

    private static newFinder(context: Context, parent: IExpression, id: Identifier, argTypes: IType[], typeArguments: IType[] = null, isRuntime = false): FunctionFinder {
        const isGeneric = typeArguments && typeArguments.length > 0;
        const factory = FinderFactories.get(isRuntime).get(isGeneric).get(!!parent);
        if(!factory)
            throw new Error("Not implemented yet!")
        else
            return factory(context, parent, id, argTypes, typeArguments);
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
        const argTypes = Array.from(this.argTypes);
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

    constructor(context: Context, id: Identifier, argTypes: IType[], typeArguments: IType[]) {
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

    protected resolveGenericType(_decl: IFunctionDeclaration, type: IType) {
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

    protected resolveGenericType(_decl: IFunctionDeclaration, type: IType) {
        return type;
    }

}

type FinderFactory = (context: Context, parent: IExpression, id: Identifier, argTypes: IType[], typeArguments: IType[]) => FunctionFinder;

const FinderFactories = new Map<boolean, Map<boolean, Map<boolean, FinderFactory>>>([
    // not runtime
    [ false, new Map<boolean, Map<boolean, FinderFactory>>([
        // not generic
        [ false, new Map<boolean, FinderFactory>([
            // not member
            [ false, (context, _parent, id, argTypes, _typeArguments) => new GlobalSimpleFinder(context, id, argTypes) ],
            // member
            [ true, (context, parent, id, argTypes, _typeArguments) => new MemberSimpleFinder(context, parent, id, argTypes) ]
        ]) ],
        // generic
        [ true, new Map<boolean, FinderFactory>([
            // not member
            [ false, (context, _parent, id, argTypes, typeArguments) => new GlobalGenericsFinder(context, id, argTypes, typeArguments) ],
            // member
            [ true, null ] // TODO
        ]) ]
    ])],
    // runtime
    [ true, new Map<boolean, Map<boolean, FinderFactory>>([
        // not generic
        [ false, new Map<boolean, FinderFactory>([
            // not member
            [ false, null ], // TODO
            // member
            [ true, null ] // TODO
        ]) ],
        // generic
        [ true, new Map<boolean, FinderFactory>([
            // not member
            [ false, null ], // TODO
            // member
            [ true, null ] // TODO
        ]) ]
    ])],
])


