export function getEnv(name: string): string | null {
    return Deno.env.get(name);
}
