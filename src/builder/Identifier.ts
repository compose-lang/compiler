import CodeFragment from "./CodeFragment";

export default class Identifier extends CodeFragment {

    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}
