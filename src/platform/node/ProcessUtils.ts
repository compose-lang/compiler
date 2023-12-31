declare const process: { env: { get: (string) => string | null } }
export function getEnv(name: string): string | null {
    return process.env.get(name);
}
