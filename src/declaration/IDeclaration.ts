import ICodeFragment from "../builder/ICodeFragment";
import Context from "../context/Context";
import Annotation from "../builder/Annotation";
import ICompilable from "../compiler/ICompilable";
import IDeclarable from "../compiler/IDeclarable";

export default interface IDeclaration extends ICodeFragment {

    name: string;
    annotations: Annotation[];

    register(context: Context): void;
    check(context: Context): void;
    getDeclarables(context: Context): IDeclarable[];
}
