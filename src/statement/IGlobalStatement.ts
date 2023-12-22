import Context from "../context/Context.ts";
import IStatement from "./IStatement.ts";

export default interface IGlobalStatement extends IStatement {
    register(context: Context): void;
}
