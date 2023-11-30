export default class CompilerFlags {

    static readonly DEFAULTS = new CompilerFlags(false, false);
    static readonly DEBUG = new CompilerFlags(true, false);
    static readonly RELEASE = new CompilerFlags(false, true);

    readonly debug;
    readonly optimize;
    readonly dwarfPath: string;

    constructor(debug: boolean, optimize: boolean, dwarfPath?: string) {
        this.debug = debug;
        this.optimize = optimize;
        this.dwarfPath = dwarfPath;
    }
}
