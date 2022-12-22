import ParameterList from "../parameter/ParameterList";
import CodeFragment from "../builder/CodeFragment";
import IType from "./IType";
import LEB128 from "../utils/LEB128";
import IWasmTarget from "../compiler/IWasmTarget";
import Context from "../context/Context";

export default class FunctionType extends CodeFragment implements IType {

    nullable = false;
    parameters: ParameterList;
    returnType: IType;

    constructor(parameters: ParameterList, returnType: IType) {
        super();
        this.parameters = parameters;
        this.returnType = returnType;
    }

    get typeName(): string {
        return "<method>";
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        if(!(type instanceof FunctionType))
            return false;
        if(this.parameters.length !== type.parameters.length)
            return false;
        for(let i=0; i<this.parameters.length; i++) {
            if(!this.parameters[i].type.isAssignableFrom(context, type.parameters[i].type))
                return false;
        }
        // noinspection RedundantIfStatementJS
        if(!this.returnType.isAssignableFrom(context, type.returnType))
            return false;
        return true;
    }

    count(): number {
        return 1;
    }

    byteLength(): number {
        const paramLength = this.parameters.map(param => param.type.byteLength()).reduce((p,v) => p + v, 0);
        const returnLength = this.returnType ? this.returnType.byteLength() : 0;
        return 1 // function type
            + LEB128.unsignedLength(this.parameters.length)
            + paramLength
            + LEB128.unsignedLength(this.returnType ? this.returnType.count() : 0)
            + returnLength;
    }

    writeTo(target: IWasmTarget) {
        target.writeUInts(0x60, this.parameters.length);
        this.parameters.map(param => param.type).forEach(type => type.writeTo(target));
         if(this.returnType) {
            target.writeUInts(this.returnType.count());
            this.returnType.writeTo(target);
        } else
            target.writeUInts(0);
    }

    toString(): string {
        const paramStrings = this.parameters.map(param => param.toString());
        const returnString = this.returnType ? this.returnType.toString() : "()";
        return FunctionType.flatten(paramStrings) + " => " + returnString;
    }

    static flatten(values: string[]): string {
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
