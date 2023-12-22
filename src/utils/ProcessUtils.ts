import {isNodeJs} from "./ImportUtils.ts";

type Process = { env: object };
// deno-lint-ignore no-var
declare var process: Process;

export function getEnv(name: string): string | null {
    if(isNodeJs()) {
        return process && process.env[name];
    } else
        return Deno.env.get(name);
}
