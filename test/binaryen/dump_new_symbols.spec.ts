import * as binaryen from "../../src/binaryen/binaryen_ts.ts";
import {dumpObject} from "./dump_utils.ts";

it("dumps new binaryen symbols",  () => {
    dumpObject("", binaryen);
});

it("dumps new binaryen constants",  () => {
    console.log(binaryen.f64);
    console.log(binaryen.ExternalKinds.Function);
    console.log(binaryen.Operations.AbsFloat32);
    console.log(binaryen.Feature.BulkMemory);
    console.log(binaryen.SideEffects.DanglingPop);
    console.log(binaryen.ExpressionRunnerFlags.TraverseCalls);

});
