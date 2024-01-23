export default abstract class TypeInfo {

    typeIndex: number;
    name: string

    constructor(typeIndex: number, name: string) {
        this.typeIndex = typeIndex;
        this.name = name;
    }
}
