import CodeFragment from "../builder/CodeFragment";
import { dirname } from "path";
import {fileExists} from "../utils/FileUtils";

export default class ImportSource extends CodeFragment {

    value: string;

    constructor(value: string) {
        super();
        this.value = value;
    }

    equals(other: any) {
        return this == other || (other instanceof ImportSource && this.value == other.value);
    }

    resolve(callingPath: string) {
        let path = dirname(callingPath);
        const parts = this.value.split("/");
        for(let i=0 ; i < parts.length; i++) {
            const part = parts[i];
            if(part == ".")
                continue;
            else if(part == "..")
                path = dirname(path);
            else
                path = path + "/" + part;
        }
        if(fileExists(path))
            return path;
        else if(fileExists(path + ".cots"))
            return path + ".cots";
        else
            return null;
    }
}
