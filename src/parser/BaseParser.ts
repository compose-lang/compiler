import {Parser} from 'antlr4';

export default class BaseParser extends Parser {

    willBeUppercase() {
        const text = this.getTokenStream().LT(1).text;
        const char = text[0] || '';
        return char >= 'A' && char <= 'Z';
    }

    willBeLowercase() {
        return !this.willBeUppercase();
    }

}
