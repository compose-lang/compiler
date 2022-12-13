import Builder from "../../src/builder/Builder";
import WasmBufferTarget from "../../src/compiler/WasmBufferTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";

it('compiles and run an empty compilation unit',  () => {
    const compiler = new Compiler();
    const target = new WasmBufferTarget();
    const unit = Builder.parse_unit("");
    compiler.compile(unit, target);
    const result = Runner.of(target.asWasmSource());
});
