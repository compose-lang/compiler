import CodeFragment from "./CodeFragment";
import Identifier from "./Identifier";

export default class Annotation extends CodeFragment {

    id: Identifier;

    constructor(id: Identifier) {
        super();
        this.id = id;
    }

    get name(): string {
        return this.id.value;
    }

}
