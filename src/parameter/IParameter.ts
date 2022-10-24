import ICodeSection from "../builder/ICodeSection";
import IType from "../type/IType";

export default interface IParameter extends ICodeSection {
    name: string;
    type: IType;
}
