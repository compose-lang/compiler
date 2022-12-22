import IType from "./IType";
import IWasmTarget from "../compiler/IWasmTarget";
import TypeList from "./TypeList";
import Context from "../context/Context";
import FunctionType from "./FunctionType";
import UserType from "./UserType";

export default class MultiType extends UserType {

    nullable = false;
    typeName = "Multi";
    types: TypeList;

    constructor(types: TypeList) {
        super();
        this.types = types;
    }

    toString() {
        const returns = this.types.map(type => type.toString());
        return FunctionType.flatten(returns);
    }

    byteLength(): number {
        return this.validTypes().map(type => type.byteLength()).reduce((p,v) => p + v, 0);
    }

    count(): number {
        return this.validTypes().length;
    }

    isAssignableFrom(context: Context, type: IType): boolean {
        return false;
    }

    writeTo(target: IWasmTarget): void {
        this.validTypes().forEach(type => type.writeTo(target));
    }

    private validTypes() {
        return this.types.filter(type => type.byteLength() > 0);
    }
}

