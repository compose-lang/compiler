import ICodeFragment from "../builder/ICodeFragment";
import IType from "../type/IType";

export default interface IParameter extends ICodeFragment {
    name: string;
    type: IType;
}
