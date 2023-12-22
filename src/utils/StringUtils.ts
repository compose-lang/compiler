export function arrayToString(buffer: ArrayBuffer): string {
    return String.fromCharCode.apply(null, new Uint16Array(buffer));
}
export function stringToArrayBuffer(str: string): ArrayBuffer {
    const buf = new ArrayBuffer(str.length*2); // 2 bytes for each char
    const view = new Uint16Array(buf);
    for (let i=0, strLen= str.length; i < strLen; i++) {
        view[i] = str.charCodeAt(i);
    }
    return buf;
}
