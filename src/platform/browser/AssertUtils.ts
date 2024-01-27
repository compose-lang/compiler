export function assertTrue(expression: boolean, message?: string) {
    console.assert(expression, message);
}

export function assertFalse(expression: boolean, message?: string) {
    console.assert(!(expression), message);
}

export function assertEquals(a: boolean, b: boolean, message?: string) {
    console.assert(a === b, message);
}

export function assertNotEquals(a: boolean, b: boolean, message?: string) {
    console.assert(a !== b, message);
}
