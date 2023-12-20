import RunnableModule from "./RunnableModule.ts";

type ModuleInfos = { runnable: RunnableModule, imports: WebAssembly.ModuleImports };
type Imports = Record<string, ModuleInfos>;

export default Imports;
