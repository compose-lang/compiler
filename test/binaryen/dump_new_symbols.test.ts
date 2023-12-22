import * as binaryen from "../../src/binaryen/binaryen_wasm.js";
import {dumpObject} from "./dump_utils.ts";

Deno.test("dumps new binaryen symbols",  () => {
    dumpObject("", binaryen);
});

Deno.test("dumps new binaryen constants",  () => {
    console.log(binaryen.f64);
    console.log(binaryen.ExternalKinds.Function);
    console.log(binaryen.Operations.AbsFloat32);
    console.log(binaryen.Feature.BulkMemory);
    console.log(binaryen.SideEffects.DanglingPop);
    console.log(binaryen.ExpressionRunnerFlags.TraverseCalls);

});
