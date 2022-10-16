import {Token} from "antlr4";
import Location from "./Location";

export default class Section {

    static fromTokens(path: string, start: Token, end: Token): Section {
        const section = new Section();
        section.path = path;
        section.startLocation = new Location(start);
        section.endLocation = new Location(end, true);
        section.isBreakpoint = false;
        return section;
    }

    path: string;
    startLocation: Location;
    endLocation: Location;
    isBreakpoint: boolean;

}