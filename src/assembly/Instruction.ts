import OpCode from "../compiler/OpCode";
import IExpression from "../expression/IExpression";

export default class Instruction {

    opcode: OpCode;
    expressions: IExpression[];

    constructor(opcode: OpCode, expressions: IExpression[]) {
        this.opcode = opcode;
        this.expressions = expressions;
    }
}
