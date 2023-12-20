import IWasmSource from "./IWasmSource.ts";

type ISourceLocator = (path: string) => IWasmSource;

export default ISourceLocator;
