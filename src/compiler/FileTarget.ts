import ITarget from "./ITarget";

export default class FileTarget implements ITarget {

    targetPath: string;

    constructor(targetPath: string) {
        this.targetPath = targetPath;
    }

};
