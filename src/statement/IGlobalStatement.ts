import Context from "../context/Context";
import IStatement from "./IStatement";

export default interface IGlobalStatement extends IStatement {
    register(context: Context): void;
}
