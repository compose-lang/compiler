import IFunctionDeclaration from "./IFunctionDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import Prototype from "./Prototype";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";
import GenericParameter from "./GenericParameter";
import * as assert from "assert";
import Accessibility from "./Accessibility";
import ClassDeclaration from "./ClassDeclaration";
import Context from "../context/Context";

export default abstract class FunctionDeclarationBase extends DeclarationBase implements IFunctionDeclaration {

    parentClass: ClassDeclaration;
    accessibility: Accessibility;
    generics: GenericParameter[];
    parameters: ParameterList;
    returnType: IType;

    protected constructor(accessibility: Accessibility, proto: Prototype) {
        super(proto.id);
        this.parentClass = null;
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.generics = proto.generics;
        this.parameters = proto.parameters;
        this.returnType = proto.returnType || null;
    }

    abstract get isStatic(): boolean;

    isConst(context: Context): boolean {
        return false;
    }

    functionType(): FunctionType {
        return new FunctionType(this.parameters, this.returnType);
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.generics, this.parameters, this.returnType);
    }

    isGeneric() {
        return this.generics.length > 0;
    }

    register(context: Context): void {
        context.registerFunction(this);
    }

    resolveGenericType(type: IType, typeArguments: IType[]): IType {
        const index = this.generics.findIndex(g => g.name === type.typeName);
        return index >= 0 ? typeArguments[index] : type;
    }

    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration {
        assert.ok(false);
    }

}
