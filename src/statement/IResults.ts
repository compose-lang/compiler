import binaryen from "binaryen";
import IType from "../type/IType";

export default interface IResults { type: IType, refs: binaryen.ExpressionRef[]  }
