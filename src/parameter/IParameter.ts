import ICodeFragment from "../builder/ICodeFragment";
import IType from "../type/IType";
import ILiteralExpression from "../literal/ILiteralExpression";

export default interface IParameter extends ICodeFragment {
    name: string;
    type: IType;
    defaultValue: ILiteralExpression
}
