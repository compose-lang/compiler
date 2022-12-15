import ICodeFragment from "../builder/ICodeFragment";
import Context from "../context/Context";
import ICompilableFunction from "../compiler/ICompilableFunction";

export default interface IDeclaration extends ICodeFragment {

    name: string;

    register(context: Context): void;
    check(context: Context): void;
    getCompilables(context: Context): ICompilableFunction[];
}
