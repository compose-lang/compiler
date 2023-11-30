import CodeFragment from "../builder/CodeFragment";

export default class ImportSource extends CodeFragment {

    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    equals(other: any) {
        return this == other || (other instanceof ImportSource && this.value == other.value);
    }

}
