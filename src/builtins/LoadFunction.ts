import Accessibility from "../declaration/Accessibility";
import Prototype from "../declaration/Prototype";
import Identifier from "../builder/Identifier";
import GenericParameter from "../declaration/GenericParameter";
import TypedParameter from "../parameter/TypedParameter";
import ClassType from "../type/ClassType";
import NativeFunctionDeclaration from "../declaration/NativeFunctionDeclaration";
import USizeType from "../type/USizeType";
import Instruction from "../assembly/Instruction";
import IntegerLiteral from "../literal/IntegerLiteral";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import IType from "../type/IType";
import CompilationUnit from "../compiler/CompilationUnit";

export default class LoadFunction extends NativeFunctionDeclaration {

    constructor(unit: CompilationUnit) {
        const functionId = new Identifier("load");
        const genericId = new Identifier("T");
        const generics = [new GenericParameter(genericId, null)];
        const params = [new TypedParameter(new Identifier("ptr"), USizeType.instance),
            new TypedParameter(new Identifier("immOffset"), USizeType.instance, new IntegerLiteral("0")),
            new TypedParameter(new Identifier("immAlign"), USizeType.instance, new IntegerLiteral("0"))
        ]
        const proto = new Prototype(functionId, generics, params, new ClassType(genericId));
        const instructions: Instruction[] = [];
        super(Accessibility.PUBLIC, proto, instructions);
        this.unit = unit;
    }

    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration {
        const func = new SpecificLoadFunction(typeArguments[0]);
        func.unit = this.unit;
        return func;
    }

}

class SpecificLoadFunction extends NativeFunctionDeclaration {

    constructor(type: IType) {
        const functionId = new Identifier("load$" + type.typeName);
        const params = [new TypedParameter(new Identifier("ptr"), USizeType.instance),
            new TypedParameter(new Identifier("immOffset"), USizeType.instance, new IntegerLiteral("0")),
            new TypedParameter(new Identifier("immAlign"), USizeType.instance, new IntegerLiteral("0"))
        ]
        const proto = new Prototype(functionId, null, params, type);
        const instructions: Instruction[] = [];
        super(Accessibility.PUBLIC, proto, instructions);
    }
}

