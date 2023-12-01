import Pipeline from "../../src/compiler/Pipeline";
import ComposeBuilder from "../../src/builder/ComposeBuilder";
import Runner from "../../src/runner/Runner";
import assert from "assert";

it('returns a received string', () => {
    const value = "Hello world!"
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit("" +
        "@ModuleExport function stuff(v: string): string { return v; }");
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<string>("stuff", value);
    assert.equal(result, value);
})
