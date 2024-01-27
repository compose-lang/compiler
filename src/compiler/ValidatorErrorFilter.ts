type Writer = (...data: any[]) => void;
export default class ValidatorErrorFilter {

    readonly writer: Writer;
    accumulatedLines: string[] = null;

    constructor(writer: Writer) {
        this.writer = writer;
    }
    logMany(data: any) {
        if(typeof(data)=='object') {
            for(let key in (data as object)) {
                this.logOne(data[key]);
            }
        } else {
            this.logOne(data)
        }
    }

    logOne(data: any) {
        if(Array.isArray(data) || typeof(data)=='object') {
            this.logMany(data);
            return;
        }
        const isString = typeof (data) == 'string';
        const isStart = isString && data.indexOf("[wasm-validator error") >= 0;
        if (isStart) {
            this.flush();
            this.accumulatedLines = [data];
        } else if (isString) {
            if (this.accumulatedLines)
                this.accumulatedLines.push(data);
            else
                this.writer(data);
        } else {
            this.flush();
            this.writer(data);
        }
    }

    static IGNORABLE_FRAGMENTS = [
        "non-final block elements returning a value must be drop()ed",
        "block with value must not have last element that is none"
    ]

    flush() {
        if (!this.accumulatedLines)
            return;
        const isFiltered = this.accumulatedLines.some(line => ValidatorErrorFilter.IGNORABLE_FRAGMENTS.some(fragment => line.includes(fragment)));
        if (!isFiltered)
            this.accumulatedLines.forEach(line => this.writer(line), this);
        this.accumulatedLines = null;
    }
}
