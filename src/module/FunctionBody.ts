import IType from "../type/IType";
import IValueType from "../type/IValueType";
import binaryen from "binaryen";

enum LocalScope {
    PARAM,
    LOCAL,
    GLOBAL
}

interface Local {
    index:number;
    scope: LocalScope;
    name: string;
    type: IType;
}

export default class FunctionBody {

    locals: Local[] = [];
    localsMap = new Map<string, Local>();

    registerParameter(name: string, type: IValueType) {
        const local = { index: this.locals.length, scope: LocalScope.PARAM, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    registerLocal(name: string, type: IType) {
        const local = { index: this.locals.length, scope: LocalScope.LOCAL, name, type }
        this.locals.push(local);
        this.localsMap.set(name, local);
        return local.index;
    }

    getRegisteredLocalIndex(name: string) {
        if(this.localsMap.has(name))
            return this.localsMap.get(name)
        else
            return -1;
    }

}
