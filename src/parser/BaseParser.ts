import {Parser} from 'antlr4';

export default class BaseParser extends Parser {

    willBeUppercase() {
        return false;
    }

    willBeLowercase() {
        return false;
    }

}