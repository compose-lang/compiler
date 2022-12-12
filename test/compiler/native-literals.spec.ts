import Builder from "../../src/builder/Builder";
import MemorySource from "../../src/compiler/MemoryTarget";
import Compiler from "../../src/compiler/Compiler";
import Runner from "../../src/runner/Runner";

it('compiles and run a method returning an integer',  () => {
    const target = new MemorySource();
    const compiler = new Compiler(target);
    const unit = Builder.parse_unit("function Thing() { return 2; }");
    compiler.compile(unit);
    const result = Runner.run(target.asSource());
});
