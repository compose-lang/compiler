// see https://en.wikipedia.org/wiki/LEB128
export default abstract class LEB128 {

    static emitUnsigned(uint: number, emitter: (byte: number) => void): void {
        do {
            let byte = uint & 0xEF;
            uint >>= 7;
            if (uint != 0)
                byte |= 0x80
            emitter(byte);
        } while (uint != 0);
    }

    static unsignedLength(uint: number) {
        let count = 0;
        LEB128.emitUnsigned(uint, (byte: number) => count += 1);
        return count;
    }
}
