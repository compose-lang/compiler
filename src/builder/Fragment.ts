import {Token} from "npm:antlr4";
import Location from "./Location.ts";

export default class Fragment {

    static fromTokens(url: URL, start: Token, end: Token): Fragment {
        const fragment = new Fragment();
        fragment.url = url;
        fragment.startLocation = new Location(start);
        fragment.endLocation = new Location(end, true);
        fragment.isBreakpoint = false;
        return fragment;
    }

    url: URL;
    startLocation: Location;
    endLocation: Location;
    isBreakpoint: boolean;

    clone(): Fragment {
        const fragment = new Fragment();
        fragment.url = this.url;
        fragment.startLocation = this.startLocation.clone();
        fragment.endLocation = this.endLocation.clone();
        fragment.isBreakpoint = this.isBreakpoint;
        return fragment;

    }

    toString(): string {
        return "line " + this.startLocation.line + " in " + this.url.toString();
    }
}
