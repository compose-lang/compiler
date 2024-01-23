import IExpression from "../expression/IExpression.ts";
import TypeBase from "./TypeBase.ts";
import {Type} from "../binaryen/binaryen_wasm.d.ts";
import Context from "../context/Context.ts";

export default abstract class NativeType extends TypeBase {

    typeName: string;

    protected constructor(typeName: string) {
        super();
        this.typeName = typeName;
    }

    toString() {
        return this.typeName;
    }

    abstract defaultValue(): IExpression;

}
