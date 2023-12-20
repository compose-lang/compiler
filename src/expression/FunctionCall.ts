import ExpressionBase from "./ExpressionBase.ts";
import Identifier from "../builder/Identifier.ts";
import WasmModule from "../module/WasmModule.ts";
import IType from "../type/IType.ts";
import Context from "../context/Context.ts";
import IExpression from "./IExpression.ts";
import FunctionBody from "../module/FunctionBody.ts";
import FunctionFinder from "../finder/FunctionFinder.ts";
import OpCode from "../compiler/OpCode.ts";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration.ts";
import RestParameter from "../parameter/RestParameter.ts";
import IntegerLiteral from "../literal/IntegerLiteral.ts";
import CompilerFlags from "../compiler/CompilerFlags.ts";
import IResult from "./IResult.ts";

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
        this.args.forEach(arg => arg.rehearse(context, module, body));
    }

    compile(context: Context, module: WasmModule, flags: CompilerFlags, body: FunctionBody): IResult {
        const decl = FunctionFinder.findDeclaration(context, this);
        assert(decl);
        const args = this.makeArgs(context, decl);
        const argRefs = args.map(arg => arg.compile(context, module, flags, body)).map(result => result.ref);
        const result = module.call(decl.name, argRefs, decl.returnType.asType());
        return { ref: result, type: decl.returnType };
    }

    private makeArgs(context: Context, decl: IFunctionDeclaration) {
        const actualArgs = Array.from(this.args);
        const convertedArgs: IExpression[] = [];
        decl.parameters.forEach(param => {
            const actualArg = actualArgs.length > 0 ? actualArgs.shift() : param.defaultValue;
            assert(actualArg);
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
                // TODO compile new array + items
                convertedArg = new IntegerLiteral("0"); // TODO placeholder to push something on the stack
            }
            convertedArgs.push(convertedArg);
        });
        return convertedArgs;
    }

    private findDeclaration(context: Context) {
        this.args.forEach(arg => arg.check(context));
        const decl = FunctionFinder.findDeclaration(context, this); // will instantiate generic function if required
        assert(decl, "Could not find function '" + this.name + "' at " + this.fragment.toString());
        return decl;
    }

}
