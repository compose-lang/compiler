import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IDataType from "../type/IDataType";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";
import WasmModule from "../module/WasmModule";

export default class AttributeDeclaration extends DeclarationBase implements IDeclaration {

    type: IDataType;

    constructor(id: Identifier, type: IDataType) {
        super(id);
        this.type = type;
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): void {
        // TODO
    }

    declare(context: Context, module: WasmModule): void {
        // TODO
    }

    compile(context: Context, module: WasmModule): void {
        // TODO
    }

}
