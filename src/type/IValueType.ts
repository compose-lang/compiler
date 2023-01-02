import IType from "./IType";

export default interface IValueType extends IType {

    sizeof(): number;
    alignof(): number;

}
