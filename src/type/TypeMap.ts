import IType from "./IType";
import Context from "../context/Context";
import VoidType from "./VoidType";
import DecimalType from "./DecimalType";
import * as assert from "assert";

export default class TypeMap extends Map<string, IType> {

    add(type: IType) {
        this.set(type.typeName, type);
    }

    inferType(context: Context) {
        if(this.size == 0)
            return VoidType.instance;
        else if(this.size == 1)
            return this.values().next().value;
        else
            return this._inferType(context);
    }

    private _inferType(context: Context) {
        let inferred: IType = null;
        // first pass: get less specific type
        this.forEach((type, ) => {
            if(!inferred) {// TODO || inferred == NullType.instance) {
                inferred = type;
            } else if(inferred.isAssignableFrom(context, type)) {
                inferred = type instanceof DecimalType ? type : inferred;
            } else if(type.isAssignableFrom(context, inferred)) {
                inferred = type;
            } else {
                const common: IType = null; // TODO this._inferCommonBaseType(context, inferred, type);
                assert.ok(common);
                // if(common)
                    inferred = common;
                // else
                //     context.problemListener.reportIncompatibleTypes(section, type, inferred);
            }
        }, this);
        if(inferred) {
            // second pass: check compatibility
            this.forEach((type, ) => {
                assert.ok(type == inferred || inferred.isAssignableFrom(context, type))
                // if (type != inferred && !inferred?.isAssignableFrom(context, type)) {
                //     context.problemListener.reportIncompatibleTypes(section, inferred!, type);
                // }
            }, this);
            return inferred;
        } else
            return VoidType.instance;

    }
}
