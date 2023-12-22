import IType from "../type/IType.ts";
import {ExpressionRef} from "../binaryen/binaryen_wasm.d.ts";

export default interface IResults { type: IType, refs: ExpressionRef[] }
