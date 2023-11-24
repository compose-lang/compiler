export default class ReadStream {

    readonly view: DataView;
    readonly littleEndian: boolean;
    offset = 0;

    constructor(buffer: ArrayBuffer, littleEndian: boolean) {
        this.view = new DataView(buffer);
        this.littleEndian = littleEndian;
    }

    readLEB128(): number {
        let value = 0;
        let shift = 0;
        while (true) {
            const byte = this.view.getUint8(this.offset++);
            value |= ((byte & 0x7F) << shift);
            if ((byte & 0x80) === 0)
                break;
            shift += 7;
        }
        return value;
    }

    readUInt8() {
        return this.view.getUint8(this.offset++);
    }

    readUInt16() {
        const result = this.view.getUint16(this.offset, this.littleEndian);
        this.offset += 2;
        return result;
    }

    readUInt32() {
        const result = this.view.getUint32(this.offset, this.littleEndian);
        this.offset += 4;
        return result;
    }

    readInt8() {
        return this.view.getInt8(this.offset++);
    }

    readInt16() {
        const result = this.view.getInt16(this.offset, this.littleEndian);
        this.offset += 2;
        return result;
    }

    readInt32() {
        const result = this.view.getInt32(this.offset, this.littleEndian);
        this.offset += 4;
        return result;
    }
}
