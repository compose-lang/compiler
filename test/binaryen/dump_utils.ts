const TypedArray = Object.getPrototypeOf(Uint8Array);

export function dumpObject(prefix: string, value: any) {
    if(Array.isArray(value) || value instanceof TypedArray)
        return;
    else if(typeof(value) == "function") {
        if(value.prototype) {
            const names = Object.getOwnPropertyNames(value.prototype).filter(n => n != "constructor");
            names.sort().forEach(name => dumpObject(prefix + name + ".", value.prototype[name as keyof typeof Object]));
        } else
            console.log( prefix + value.name + "()");
    } else if(typeof(value) == "object") {
        const names = Object.getOwnPropertyNames(value).filter(n => n[0]<"0" || n[0] > "9");
        names.sort().forEach(name => dumpObject(prefix + name + ".", value[name as keyof typeof Object]));
    } else
        console.log( prefix.substring(0, prefix.length - 1));
}
