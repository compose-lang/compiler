import assert from 'node:assert';

export function assertTrue(expression: boolean, message?: string) {
    assert(expression, message);
}

export function assertFalse(expression: boolean, message?: string) {
    assert(!(expression), message);
}

export function assertEquals(a: boolean, b: boolean, message?: string) {
    assert.deepEqual(a, b, message);
}

export function assertNotEquals(a: boolean, b: boolean, message?: string) {
    assert.notDeepEqual(a, b, message);
}
