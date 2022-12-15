// see https://en.wikipedia.org/wiki/LEB128
export default abstract class LEB128 {

    static unsignedLength(uint: number) {
        let count = 0;
        LEB128.emitUnsigned(uint, (byte: number) => count += 1);
        return count;
    }

    static emitUnsigned(uint: number, emitter: (byte: number) => void): void {
        do {
            let byte = uint & 0x7F;
            uint >>= 7;
            if (uint != 0)
                byte |= 0x80
            emitter(byte);
        } while (uint != 0);
    }

    static signedLength(int: number) {
        let count = 0;
        LEB128.emitSigned(int, (byte: number) => count += 1);
        return count;
    }

    static emitSigned(int: number, emitter: (byte: number) => void): void {
        if(int >= 0)
            this.emitUnsigned(int, emitter);
        else {
            int = -int;
            const reversed = LEB128.make7bitsAndComplement2(int);
            this.emitUnsigned(reversed, emitter);
        }
    }

    private static make7bitsAndComplement2(value: number): number {
        let result = 0;
        let shift = 0;
        do {
            result |= (~value & 0x7F) << shift;
            value >>= 7;
            shift += 7;
        } while (value > 0);
        return result + 1;
    }
}
