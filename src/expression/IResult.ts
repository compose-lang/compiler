import binaryen from "binaryen";
import IType from "../type/IType";

export default interface IResult { type: IType, ref: binaryen.ExpressionRef  }
