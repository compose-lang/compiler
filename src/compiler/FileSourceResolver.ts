import {fileExists} from "../utils/FileUtils.ts";

const FileSourceResolver = (unitPath: string, importSource: string) => {
    let dirPath = dirname(unitPath);
    const parts = importSource.split("/");
    for(let i=0 ; i < parts.length; i++) {
        const part = parts[i];
        if(part == "..")
            dirPath = dirname(dirPath);
        else if(part != ".")
            dirPath = dirPath + "/" + part;
    }
    if(fileExists(dirPath))
        return dirPath;
    else if(fileExists(dirPath + ".cots"))
        return dirPath + ".cots";
    else
        return null;
}

export default FileSourceResolver;
