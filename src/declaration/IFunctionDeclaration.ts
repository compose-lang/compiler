import IDeclaration from "./IDeclaration.ts";
import ParameterList from "../parameter/ParameterList.ts";
import FunctionType from "../type/FunctionType.ts";
import IType from "../type/IType.ts";
import Prototype from "./Prototype.ts";
import ClassDeclaration from "./ClassDeclaration.ts";
import Context from "../context/Context.ts";
import ICompilable from "../compiler/ICompilable.ts";

export default interface IFunctionDeclaration extends IDeclaration, ICompilable {

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
