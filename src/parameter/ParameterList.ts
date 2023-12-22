import IParameter from "./IParameter.ts";
import Context from "../context/Context.ts";
import WasmModule from "../module/WasmModule.ts";
import FunctionBody from "../module/FunctionBody.ts";

export default class ParameterList extends Array<IParameter> {

    static from(parameters: IParameter[]): ParameterList {
        const result = Array.from(parameters);
        Object.setPrototypeOf(result, ParameterList.prototype);
        return result as ParameterList;
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        this.forEach(param => param.rehearse(context, module, body), this);
    }

}
