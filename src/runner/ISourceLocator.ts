import IWasmSource from "./IWasmSource.ts";

type ISourceLocator = (url: URL) => IWasmSource;

export default ISourceLocator;
