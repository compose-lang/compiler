import CodeSection from "../builder/CodeSection";
import IDataType from "./IDataType";

export default class NativeType extends CodeSection implements IDataType {

    typeName: string;

    protected constructor(typeName: string) {
        super();
        this.typeName = typeName;
    }

}
