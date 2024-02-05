import Pipeline from "../../src/compiler/Pipeline.ts";
import ComposeBuilder from "../../src/builder/ComposeBuilder.ts";
import Runner from "../../src/runner/Runner.ts";
import {assertEquals, assertTrue} from "../../src/platform/deno/AssertUtils.ts";

Deno.test('returns an opaque i32 struct ref',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data(`
    attribute count: i32;
    struct Counted(count);
    @ModuleExport 
    function stuff(): Counted { 
        return new Counted(5); 
    }
   `);
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertTrue(result);
});

Deno.test('returns an i32 struct member',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data(`
    attribute count: i32;
    struct Counted(count);
    @ModuleExport 
    function stuff(): i32 { 
        const c = new Counted(5); 
        return c.count;
    }
   `);
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff");
    assertEquals(result, 5);
});


Deno.test('sets and returns an i32 struct member',  () => {
    const pipeline = new Pipeline();
    const unit = ComposeBuilder.parse_unit_data(`
    attribute count: i32;
    struct Counted(count);
    @ModuleExport 
    function stuff(count: i32): i32 { 
        const c = new Counted(5); 
        c.count = count;
        return c.count;
    }
   `);
    const wasmTarget = pipeline.build([unit])[0];
    const runner = Runner.of(wasmTarget.asWasmSource());
    const result = runner.runFunction<number>("stuff", 19);
    assertEquals(result, 19);
});
