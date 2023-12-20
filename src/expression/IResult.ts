import IType from "../type/IType.ts";
import {ExpressionRef} from "../binaryen/binaryen_ts.ts";

export default interface IResult { type: IType, ref: ExpressionRef  }
