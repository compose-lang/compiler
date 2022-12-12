import ITarget from "./ITarget";
import ISource from "../runner/ISource";

export default class FileTarget implements ITarget {

    targetPath: string;

    constructor(targetPath: string) {
        this.targetPath = targetPath;
    }

    asSource(): ISource {
        return undefined;
    }

};
