import IFunctionDeclaration from "./IFunctionDeclaration.ts";
import DeclarationBase from "./DeclarationBase.ts";
import ParameterList from "../parameter/ParameterList.ts";
import Prototype from "./Prototype.ts";
import FunctionType from "../type/FunctionType.ts";
import IType from "../type/IType.ts";
import GenericParameter from "./GenericParameter.ts";
import Accessibility from "./Accessibility.ts";
import ClassDeclaration from "./ClassDeclaration.ts";
import Context from "../context/Context.ts";
import RestParameter from "../parameter/RestParameter.ts";
import WasmModule from "../module/WasmModule.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import {assert, assertEquals} from "../../deps.ts";

export default abstract class FunctionDeclarationBase extends DeclarationBase implements IFunctionDeclaration {

    parentClass: ClassDeclaration;
    accessibility: Accessibility;
    generics: GenericParameter[];
    parameters: ParameterList;
    returnType: IType;

    protected constructor(accessibility: Accessibility, proto: Prototype) {
        super(proto.id);
        this.parentClass = null;
        this.accessibility = accessibility | Accessibility.PUBLIC;
        this.generics = proto.generics;
        this.parameters = proto.parameters;
        this.returnType = proto.returnType || null;
    }

    abstract get isStatic(): boolean;
    abstract compile(context: Context, module: WasmModule, flags: CompilerFlags): void;

    isConst(context: Context): boolean {
        return false;
    }

    functionType(): FunctionType {
        return new FunctionType(this.parameters, this.returnType);
    }

    prototype(): Prototype {
        return new Prototype(this.id, this.generics, this.parameters, this.returnType);
    }

    isGeneric() {
        return this.generics.length > 0;
    }

    register(context: Context): void {
        context.registerFunction(this);
    }

    resolveGenericType(type: IType, typeArguments: IType[]): IType {
        const index = this.generics.findIndex(g => g.name === type.typeName);
        return index >= 0 ? typeArguments[index] : type;
    }

    instantiateGeneric(typeArguments: IType[]): IFunctionDeclaration {
        assert(false);
    }

    checkRestParameters(context: Context): void {
        const restParams = this.parameters.filter(param => param instanceof RestParameter);
        assert(restParams.length <= 1);
        if(restParams.length == 1)
            assertEquals(this.parameters.at(-1), restParams[0]); // must be last
    }

}
