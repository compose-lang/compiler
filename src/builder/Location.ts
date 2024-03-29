import { Token } from 'npm:antlr4';

export default class Location {

    static min(l1: Location, l2: Location) {
        return l1.tokenIndex < l2.tokenIndex ? l1 : l2;
    }

    static max(l1: Location, l2: Location) {
        return l2.tokenIndex > l2.tokenIndex ? l2 : l1;
    }

    tokenIndex: number;
    line: number;
    column: number;

    constructor(token: Token, isEnd = false) {
        if(token) {
            this.tokenIndex = token.tokenIndex;
            this.line = token.line;
            this.column = token.column;
            if(isEnd && token.text)
                this.column += token.text.length;
        }
    }

    clone(): Location {
        const location = new Location(null);
        location.tokenIndex = this.tokenIndex;
        location.line = this.line;
        location.column = this.column;
        return location;
    }
}
