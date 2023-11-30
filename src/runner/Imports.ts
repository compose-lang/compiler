import RunnableModule from "./RunnableModule";

type ModuleInfos = { runnable: RunnableModule, imports: WebAssembly.ModuleImports };
type Imports = Record<string, ModuleInfos>;

export default Imports;
