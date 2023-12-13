import IType from "../type/IType";
import {ExpressionRef} from "../binaryen/binaryen_ts";

export default interface IResults { type: IType, refs: ExpressionRef[]  }
