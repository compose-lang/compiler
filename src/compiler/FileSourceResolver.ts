import { dirname, fileExistsSync} from "../platform/deno/FileUtils.ts";

const FileSourceResolver = (unitURL: URL, importSource: string): URL | null => {
    if(unitURL.protocol != "file:")
        throw new Error(`Unsupported protocol "${unitURL.protocol}" !`)
    const unitPath = unitURL.pathname;
    let dirPath = dirname(unitPath);
    const parts = importSource.split("/");
    for(let i=0 ; i < parts.length; i++) {
        const part = parts[i];
        if(part == "..")
            dirPath = dirname(dirPath);
        else if(part != ".")
            dirPath = dirPath + "/" + part;
    }
    if(fileExistsSync(dirPath))
        return new URL("file://" + dirPath);
    else if(fileExistsSync(dirPath + ".cots"))
        return  new URL("file://" + dirPath + ".cots");
    else
        return null;
}

export default FileSourceResolver;
