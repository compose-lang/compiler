import { getEnv } from "../platform/deno/ProcessUtils.ts";

export default abstract class CiCdUtils {

    static isRunningInCI() {
        return getEnv("CI") == "true";
    }
}
