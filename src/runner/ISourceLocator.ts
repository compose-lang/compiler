import IWasmSource from "./IWasmSource";

type ISourceLocator = (path: string) => IWasmSource;

export default ISourceLocator;
