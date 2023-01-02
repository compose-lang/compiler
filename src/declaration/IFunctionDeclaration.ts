import IDeclaration from "./IDeclaration";
import ParameterList from "../parameter/ParameterList";
import FunctionType from "../type/FunctionType";
import IType from "../type/IType";
import Prototype from "./Prototype";
import ClassDeclaration from "./ClassDeclaration";
import Context from "../context/Context";

export default interface IFunctionDeclaration extends IDeclaration {

    isStatic: boolean;
    parentClass: ClassDeclaration;
    parameters: ParameterList;
    returnType: IType;

    functionType(): FunctionType;
    prototype(): Prototype;
    isGeneric(): boolean;
    resolveGenericType(type: IType, typeArguments: IType[]): IType;
    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration;

    isConst(context: Context): boolean;
}
