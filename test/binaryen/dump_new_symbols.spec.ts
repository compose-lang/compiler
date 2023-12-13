import * as binaryen from "../../src/binaryen/binaryen_ts";
import {dumpObject} from "./dump_utils";

it("dumps new binaryen symbols",  () => {
    dumpObject("", binaryen);
});

it("dumps new binaryen constants",  () => {
    console.log(binaryen.f64);
    console.log(binaryen.ExternalKinds.Function);
    console.log(binaryen.Operations.AbsFloat32);
    console.log(binaryen.Features.BulkMemory);
    console.log(binaryen.SideEffects.DanglingPop);
    console.log(binaryen.ExpressionRunnerFlags.TraverseCalls);

});
