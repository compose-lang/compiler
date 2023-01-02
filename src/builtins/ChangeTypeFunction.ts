import ConcreteFunctionDeclaration from "../declaration/ConcreteFunctionDeclaration";
import Accessibility from "../declaration/Accessibility";
import Prototype from "../declaration/Prototype";
import Identifier from "../builder/Identifier";
import StatementList from "../statement/StatementList";
import Context from "../context/Context";
import GenericParameter from "../declaration/GenericParameter";
import TypedParameter from "../parameter/TypedParameter";
import AnyType from "../type/AnyType";
import ClassType from "../type/ClassType";

export default class ChangeTypeFunction extends ConcreteFunctionDeclaration {

    constructor() {
        const functionId = new Identifier("changetype");
        const genericId = new Identifier("T");
        const generics = [new GenericParameter(genericId, null)];
        const params = [new TypedParameter(new Identifier("value"), AnyType.instance)]
        const proto = new Prototype(functionId, generics, params, new ClassType(genericId));
        const stmts = new StatementList();
        super(Accessibility.PUBLIC, false, proto, stmts);
    }

    isConst(context: Context): boolean {
        return true;
    }
}
