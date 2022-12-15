import IDeclaration from "./IDeclaration";
import Identifier from "../builder/Identifier";
import IdentifierList from "../builder/IdentifierList";
import FunctionList from "../builder/FunctionList";
import DeclarationBase from "./DeclarationBase";
import Context from "../context/Context";

export default class ClassDeclaration extends DeclarationBase implements IDeclaration {

    attributes: IdentifierList;
    parents: IdentifierList;
    functions: FunctionList;
    abstract: boolean;

    constructor(id: Identifier, attributes: IdentifierList, parents: IdentifierList, functions: FunctionList, abstract: boolean) {
        super(id);
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
