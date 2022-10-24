import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IdentifierList from "../builder/IdentifierList";
import CodeSection from "../builder/CodeSection";
import MethodList from "../builder/MethodList";

export default class ClassDeclaration extends CodeSection implements IDeclaration {

    id: Identifier;
    attributes: IdentifierList;
    parents: IdentifierList;
    methods: MethodList;
    abstract: boolean;

    constructor(id: Identifier, attributes: IdentifierList, parents: IdentifierList, methods: MethodList, abstract: boolean) {
        super();
        this.id = id;
        this.attributes = attributes;
        this.parents = parents;
        this.methods = methods;
        this.abstract = abstract;
    }

    get name(): string {
        return this.id.value;
    }
}
