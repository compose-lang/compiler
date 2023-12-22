import {isNodeJs} from "./ImportUtils.ts";

export function getEnv(name: string): string | null {
    if(isNodeJs())
        return eval("process && !!process.env[name]");
    else
        return Deno.env.get(name);
}
