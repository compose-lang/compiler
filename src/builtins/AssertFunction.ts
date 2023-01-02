import Accessibility from "../declaration/Accessibility";
import Prototype from "../declaration/Prototype";
import Identifier from "../builder/Identifier";
import TypedParameter from "../parameter/TypedParameter";
import NativeFunctionDeclaration from "../declaration/NativeFunctionDeclaration";
import Instruction from "../assembly/Instruction";
import VoidType from "../type/VoidType";
import AnyType from "../type/AnyType";

export default class AssertFunction extends NativeFunctionDeclaration {

    constructor() {
        const functionId = new Identifier("assert");
        const params = [new TypedParameter(new Identifier("value"), AnyType.instance)]
        const proto = new Prototype(functionId, null, params, VoidType.instance);
        const instructions: Instruction[] = []; // TODO
        super(Accessibility.PUBLIC, proto, instructions);
    }

}
