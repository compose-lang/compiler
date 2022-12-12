import ITarget from "./ITarget";
import ISource from "../runner/ISource";

export default class MemoryTarget implements ITarget {

    asSource(): ISource {
        return undefined;
    }
}
