import Accessibility from "../declaration/Accessibility";
import Prototype from "../declaration/Prototype";
import Identifier from "../builder/Identifier";
import TypedParameter from "../parameter/TypedParameter";
import NativeFunctionDeclaration from "../declaration/NativeFunctionDeclaration";
import Instruction from "../assembly/Instruction";
import VoidType from "../type/VoidType";
import AnyType from "../type/AnyType";
import CompilationUnit from "../compiler/CompilationUnit";
import ParameterList from "../parameter/ParameterList";

export default class AssertFunction extends NativeFunctionDeclaration {

    constructor(unit: CompilationUnit) {
        const functionId = new Identifier("assert");
        const params = [new TypedParameter(new Identifier("value"), AnyType.instance)]
        const proto = new Prototype(functionId, null, ParameterList.from(params), VoidType.instance);
        const instructions: Instruction[] = []; // TODO
        super(Accessibility.PUBLIC, proto, instructions);
        this.unit = unit;
    }

}
