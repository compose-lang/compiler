import IDwarfTarget from "./IDwarfTarget";

export default class DwarfExternalTarget implements IDwarfTarget {

    readonly dwarfPath: string;

    constructor(dwarfPath: string) {
        this.dwarfPath = dwarfPath;
    }

    isExternal(): boolean {
        return true;
    }

    externalPath(): string {
        return this.dwarfPath;
    }

}
