import IDataType from "./IDataType";

export default class StringType implements IDataType {

    static instance = new StringType()

    typeName = "string";

    private constructor() {}
}
