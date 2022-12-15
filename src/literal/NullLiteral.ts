import LiteralBase from "./LiteralBase";

export default class NullLiteral extends LiteralBase<any> {

    constructor(text: string) {
        super(text, null);
    }

    toNative(): any {
        return null;
    }

}
