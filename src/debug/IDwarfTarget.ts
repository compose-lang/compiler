export default interface IDwarfTarget {
    isExternal(): boolean;
    externalPath(): string;
}
