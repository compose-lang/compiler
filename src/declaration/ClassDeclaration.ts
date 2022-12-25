import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IdentifierList from "../builder/IdentifierList";
import FunctionList from "../builder/FunctionList";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";
import Accessibility from "./Accessibility";

export default class ClassDeclaration extends DeclarationBase implements IDeclaration {

    accessibility: Accessibility;
    attributes: IdentifierList;
    parents: IdentifierList;
    functions: FunctionList;
    abstract: boolean;

    constructor(accessibility: Accessibility, id: Identifier, attributes: IdentifierList, parents: IdentifierList, functions: FunctionList, abstract: boolean) {
        super(id);
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.attributes = attributes;
        this.parents = parents;
        this.functions = functions;
        this.abstract = abstract;
    }

    get name(): string {
        return this.id.value;
    }

    register(context: Context): void {
        // TODO
    }

    check(context: Context): void {
        // TODO
    }

}
