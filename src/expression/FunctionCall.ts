import ExpressionBase from "./ExpressionBase.ts";
import Identifier from "../builder/Identifier.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import FunctionFinder from "../finder/FunctionFinder.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import RestParameter from "../parameter/RestParameter.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";
import { assertTrue } from "../../deps.ts";
import ArrayLiteral from "../literal/ArrayLiteral.ts";
import BuiltinFunctionDeclaration from "../declaration/BuiltinFunctionDeclaration.ts";

export default class FunctionCall extends ExpressionBase {

    parent: IExpression;
    id: Identifier;
    genericTypes: IType[];
    args: IExpression[];

    constructor(parent: IExpression, id: Identifier, genericTypes: IType[], args: IExpression[]) {
        super();
        this.parent = parent;
        this.id = id;
        this.genericTypes = genericTypes;
        this.args = args;
    }

    get name(): string {
        return this.id.value;
    }

    isGeneric() {
        return this.genericTypes.length > 0;
    }

    check(context: Context): IType {
        const decl = this.findDeclaration(context);
        return decl.returnType;
    }

    isConst(context: Context): boolean {
        const decl = this.findDeclaration(context);
        return decl.isConst(context);
    }

    declare(context: Context, module: WasmModule): void {
        const decl = this.findDeclaration(context);
        if(this.isGeneric())
            decl.declare(context, module);
    }

    rehearse(context: Context, module: WasmModule, body: FunctionBody) {
        const decl = FunctionFinder.findDeclaration(context, this);
        assertTrue(decl);
        // TODO tactical, should be removed once
        if(decl instanceof BuiltinFunctionDeclaration)
            module.declareImportedFunction(decl);
        this.args.forEach(arg => arg.rehearse(context, module, body));
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const decl = FunctionFinder.findDeclaration(context, this);
        assertTrue(decl);
        const args = this.makeArgs(context, decl);
        const argRefs = args.map(arg => arg.compile(context, module, flags, body)).map(result => result.ref);
        const result = module.call(decl.fullName, argRefs, decl.returnType.asType(context));
        return { ref: result, type: decl.returnType };
    }

    private makeArgs(context: Context, decl: IFunctionDeclaration) {
        const actualArgs = Array.from(this.args);
        const convertedArgs: IExpression[] = [];
        if(decl.parentClass) {
            convertedArgs.push(this.parent);
        }
        decl.parameters.forEach(param => {
            const actualArg = actualArgs.length > 0 ? actualArgs.shift() : param.defaultValue;
            assertTrue(actualArg);
            const paramType = param instanceof RestParameter ? param.atomicType : param.type;
            let convertedArg = paramType.convertExpression(context, actualArg);
            if(param instanceof RestParameter) {
                const items: IExpression[] = [];
                items.push(convertedArg);
                while(actualArgs.length > 0) {
                    const actualArg = actualArgs.shift();
                    const convertedArg = paramType.convertExpression(context, actualArg);
                    items.push(convertedArg);
                }
                const text = "[" + items.join(", ") + "]";
                convertedArg = new ArrayLiteral(text, true, items, paramType);
            }
            convertedArgs.push(convertedArg);
        });
        return convertedArgs;
    }

    private findDeclaration(context: Context) {
        this.args.forEach(arg => arg.check(context));
        const decl = FunctionFinder.findDeclaration(context, this); // will instantiate generic function if required
        assertTrue(decl, "Could not find function '" + this.name + "' at " + this.fragment.toString());
        return decl;
    }

}
