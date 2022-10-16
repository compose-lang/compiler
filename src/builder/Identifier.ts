import CodeSection from "./CodeSection";

export default class Identifier extends CodeSection {

    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }
}