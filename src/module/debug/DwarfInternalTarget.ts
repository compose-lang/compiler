import IDwarfTarget from "./IDwarfTarget";

export default class DwarfInternalTarget implements IDwarfTarget {

    isExternal(): boolean {
        return false;
    }

    externalPath(): string {
        throw new Error("Should never get there!");
    }

}
