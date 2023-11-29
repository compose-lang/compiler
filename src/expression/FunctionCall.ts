import ExpressionBase from "./ExpressionBase";
import Identifier from "../builder/Identifier";
import WasmModule from "../module/WasmModule";
import IType from "../type/IType";
import Context from "../context/Context";
import IExpression from "./IExpression";
import FunctionBody from "../module/FunctionBody";
import * as assert from "assert";
import FunctionFinder from "../finder/FunctionFinder";
import OpCode from "../compiler/OpCode";
import IFunctionDeclaration from "../declaration/IFunctionDeclaration";
import RestParameter from "../parameter/RestParameter";
import IntegerLiteral from "../literal/IntegerLiteral";
import CompilerFlags from "../compiler/CompilerFlags";
import IResult from "./IResult";

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

    compile(context: Context, module: WasmModule, flags: CompilerFlags): IResult {
        const decl = FunctionFinder.findDeclaration(context, this);
        assert.ok(decl);
        const args = this.makeArgs(context, decl);
        const argRefs = args.map(arg => arg.compile(context, module, flags)).map(result => result.ref);
        const result = module.call(decl.name, argRefs, decl.returnType.asType());
        return { ref: result, type: decl.returnType };
    }

    private makeArgs(context: Context, decl: IFunctionDeclaration) {
        const actualArgs = Array.from(this.args);
        const convertedArgs: IExpression[] = [];
        decl.parameters.forEach(param => {
            const actualArg = actualArgs.length > 0 ? actualArgs.shift() : param.defaultValue;
            assert.ok(actualArg);
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
        assert.ok(decl, "Could not find function '" + this.name + "' at " + this.fragment.toString());
        return decl;
    }

}
