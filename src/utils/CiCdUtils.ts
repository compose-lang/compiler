import {isNodeJs} from "./ImportUtils.ts";

export default abstract class CiCdUtils {

    static isCiCd() {
        if(isNodeJs())
            return eval("process && !!process.env.CI");
        else
            return false; // TODO
    }
}
