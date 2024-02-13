import Identifier from "./Identifier.ts";
import CodeFragment from "./CodeFragment.ts";

export default class GenericsId extends CodeFragment {

    static of(id: Identifier): GenericsId {
        const result = new GenericsId(id, null);
        result.fragment = id.fragment ? id.fragment.clone() : null;
        return result;
    }

    readonly id: Identifier;
    readonly params: GenericsId[]
    constructor(id: Identifier, params: GenericsId[]) {
        super();
        this.id = id;
        this.params = params;
    }
}
