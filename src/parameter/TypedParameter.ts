import CodeSection from "../builder/CodeSection";
import IParameter from "./IParameter";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";

export default class TypedParameter extends CodeSection implements IParameter {

    id: Identifier;
    type: IDataType;

    constructor(id: Identifier, type: IDataType) {
        super();
        this.id = id;
        this.type = type;
    }

    get name(): string {
        return this.id.value;
    }
}
