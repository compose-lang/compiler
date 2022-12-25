import IFunctionDeclaration from "./IFunctionDeclaration";
import DeclarationBase from "./DeclarationBase";
import ParameterList from "../parameter/ParameterList";
import Prototype from "./Prototype";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";
import GenericParameter from "./GenericParameter";
import * as assert from "assert";
import Accessibility from "./Accessibility";

export default abstract class FunctionDeclarationBase extends DeclarationBase implements IFunctionDeclaration {

    accessibility: Accessibility;
    generics: GenericParameter[];
    parameters: ParameterList;
    returnType: IType;

    protected constructor(accessibility: Accessibility, proto: Prototype) {
        super(proto.id);
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.generics = proto.generics;
        this.parameters = proto.parameters;
        this.returnType = proto.returnType || null;
    }

    type(): FunctionType {
        return new FunctionType(this.parameters, this.returnType);
    }

    isGeneric() {
        return this.generics.length > 0;
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.generics, this.parameters, this.returnType);
    }

    resolveGenericType(type: IType, typeArguments: IType[]): IType {
        const index = this.generics.findIndex(g => g.name === type.typeName);
        return index >= 0 ? typeArguments[index] : type;
    }

    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration {
        assert.ok(false);
    }

}
