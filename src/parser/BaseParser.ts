import { Parser } from 'antlr4';
import ComposeLexer from "./ComposeLexer";

export default class BaseParser extends Parser {

    willBeUppercase() {
        const text = this.getTokenStream().LT(1).text;
        const char = text[0] || '';
        return char >= 'A' && char <= 'Z';
    }

    willBeLowercase() {
        return !this.willBeUppercase();
    }

    willContainLineTerminator() {
        let idx = 1;
        for(;;) {
            const token = this.getTokenStream().LT(idx++);
            if (token.type !== ComposeLexer.WS)
                return false;
            if (token.text.indexOf("\n") < 0)
                return true;
        }
    }

    willNotContainLineTerminator() {
        return !this.willContainLineTerminator();
    }
}
