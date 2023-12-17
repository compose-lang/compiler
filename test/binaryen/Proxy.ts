class WasmArrayHandler implements ProxyHandler<object> {

    static isValidArrayIndex(key: string) {
        try {
            const index = parseInt(key);
            return index >= 0;
        } catch {
            return false;
        }
    }

    static isValidArrayKey(key: string) {
        return key=="length" || WasmArrayHandler.isValidArrayIndex(key);
    }

    get(target: object, key: string): any {
        return WasmArrayHandler.isValidArrayKey(key) ? target[key as keyof typeof target] : undefined;
    }
}


abstract class ArrayProxy {

    static of<T>(target: object): T[] {
        return new Proxy(target, new WasmArrayHandler()) as T[];
    }

}

const wasm_array = {};
const proxied = ArrayProxy.of(wasm_array);

const value = proxied.length;
const item = proxied[2];

