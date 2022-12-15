import ParameterList from "../parameter/ParameterList";
import TypeList from "./TypeList";
import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";

export default class FunctionType extends CodeFragment implements IType {

    parameters: ParameterList;
    returnTypes: TypeList;

    constructor(parameters: ParameterList, returnTypes: TypeList) {
        super();
        this.parameters = parameters;
        this.returnTypes = returnTypes;
    }

    get typeName(): string {
        return "<method>";
    }

    byteLength(): number {
        const paramLength = this.parameters.map(param => param.type.byteLength()).reduce((p,v) => p + v, 0);
        const returnTypes = this.returnTypes.filter(type => type.byteLength() > 0);
        const returnLength = returnTypes.map(type => type.byteLength()).reduce((p,v) => p + v, 0);;
        return 1 // function type
            + LEB128.unsignedLength(this.parameters.length)
            + paramLength
            + LEB128.unsignedLength(returnTypes.length)
            + returnLength;
    }

    writeTo(target: IWasmTarget) {
        target.writeUInts(0x60, this.parameters.length);
        this.parameters.map(param => param.type).forEach(type => type.writeTo(target));
        const returnTypes = this.returnTypes.filter(type => type.byteLength() > 0);
        target.writeUInts(returnTypes.length);
        returnTypes.forEach(type => type.writeTo(target));
    }

    toString(): string {
        const params = this.parameters.map(param => param.toString());
        const returns = this.returnTypes.map(type => type.toString());
        return FunctionType.flatten(params) + " => " + FunctionType.flatten(returns);
    }

    private static flatten(values: string[]): string {
        switch(values.length) {
            case 0:
                return "()";
            case 1:
                const value = values[0];
                if(value.indexOf(":")>=0)
                    return "(" + value + ")";
                else
                    return value;
            default:
                return "(" + values.join(", ") + ")";
        }
    }
}
