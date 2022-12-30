import IType from "./IType";

export default interface IDataType extends IType {

    sizeof(): number;
    alignof(): number;

}
