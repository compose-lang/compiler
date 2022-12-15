import StatementBase from "./StatementBase";
import Identifier from "../builder/Identifier";
import IType from "../type/IType";
import IExpression from "../expression/IExpression";
import WasmModule from "../module/WasmModule";
import FunctionCode from "../module/FunctionCode";
import Context from "../context/Context";
import OpCode from "../compiler/OpCode";
import Variable from "../context/Variable";
import InstanceModifier from "../context/InstanceModifier";

export default class AssignLocalStatement extends StatementBase {

    modifier: InstanceModifier;
    id: Identifier;
    type: IType;
    expression: IExpression;

    constructor(modifier: InstanceModifier, id: Identifier, type: IType, expression: IExpression) {
        super();
        this.modifier = modifier;
        this.id = id;
        this.type = type;
        this.expression = expression;
    }

    get name() {
        return this.id.value;
    }

    declare(context: Context, module: WasmModule): void {
        // const type = this.type || this.expression.check(context);
        // type.declare(context, module);
        this.expression.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionCode): void {
        this.expression.rehearse(context, module, body);
        const type = this.type || this.expression.check(context);
        if(this.modifier !== null) {
            context.registerLocal(new Variable(this.modifier, this.id, type));
            body.registerLocal(this.name, type);
        }
    }

    compile(context: Context, module: WasmModule, body: FunctionCode): void {
        this.expression.compile(context, module, body);
        const type = this.type || this.expression.check(context);
        if(this.modifier !== null)
            context.registerLocal(new Variable(this.modifier, this.id, type));
        const index = body.getRegisteredLocalIndex(this.name);
        body.addOpCode(OpCode.LOCAL_SET, [index]); // TODO encode if index > 0x7F
    }

}
