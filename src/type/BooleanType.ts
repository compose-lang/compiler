import NativeType from "./NativeType";

export default class BooleanType extends NativeType {

    static instance = new BooleanType()

    private constructor() {
        super("boolean")
    }
}
