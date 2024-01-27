import FunctionBody from "../../src/module/FunctionBody.ts";
import Int32Type from "../../src/type/Int32Type.ts";
import { assertEquals, assertNotEquals } from "../../src/platform/deno/AssertUtils.ts";

Deno.test('registers and gets a top-level local',  () => {
    const body = new FunctionBody();
    const registered = body.registerLocal("a", Int32Type.instance);
    const fetched = body.getRegisteredLocal("a");
    assertEquals(registered, fetched.index);
});

Deno.test('registers and gets a top-level local when in sub-scope',  () => {
    const body = new FunctionBody();
    const registered = body.registerLocal("a", Int32Type.instance);
    body.createAndPushLocalsScope(22);
    const fetched = body.getRegisteredLocal("a");
    body.popLocalsScope(22);
    assertEquals(registered, fetched.index);
});

Deno.test('registers and gets a level 1 local',  () => {
    const body = new FunctionBody();
    body.createAndPushLocalsScope(22);
    const registered = body.registerLocal("a", Int32Type.instance);
    const fetched = body.getRegisteredLocal("a");
    body.popLocalsScope(22);
    assertEquals(registered, fetched.index);
    assertEquals("a$1", fetched.name);
});

Deno.test('registers and gets 2 conflicting level 1 locals',  () => {
    const body = new FunctionBody();
    body.createAndPushLocalsScope(22);
    body.registerLocal("a", Int32Type.instance);
    const fetched1 = body.getRegisteredLocal("a");
    body.popLocalsScope(22);
    body.createAndPushLocalsScope(33);
    body.registerLocal("a", Int32Type.instance);
    const fetched2 = body.getRegisteredLocal("a");
    body.popLocalsScope(33);
    assertNotEquals(fetched1.index, fetched2.index);
    assertEquals("a$1", fetched1.name);
    assertEquals("a$2", fetched2.name);
});
