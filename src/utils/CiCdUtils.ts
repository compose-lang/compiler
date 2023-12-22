import { getEnv } from "./ProcessUtils.ts";

export default abstract class CiCdUtils {

    static isRunningInCI() {
        return getEnv("CI") == "true";
    }
}
