import IExpression from "../expression/IExpression";
import TypeBase from "./TypeBase";

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

    count(): number {
        return 1;
    }

    abstract asType(): number;

}
