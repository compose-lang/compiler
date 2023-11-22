import IParameter from "./IParameter";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";
import FunctionBody from "../module/FunctionBody";

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
