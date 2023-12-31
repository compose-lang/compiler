import Accessibility from "../declaration/Accessibility.ts";
import Prototype from "../declaration/Prototype.ts";
import Identifier from "../builder/Identifier.ts";
import TypedParameter from "../parameter/TypedParameter.ts";
import NativeFunctionDeclaration from "../declaration/NativeFunctionDeclaration.ts";
import Instruction from "../assembly/Instruction.ts";
import VoidType from "../type/VoidType.ts";
import AnyType from "../type/AnyType.ts";
import CompilationUnit from "../compiler/CompilationUnit.ts";
import ParameterList from "../parameter/ParameterList.ts";
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
