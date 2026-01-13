/**
 * Returns a greeting message for the given name.
 *
 * @param name - The name to greet
 * @returns A greeting string
 *
 * @example
 * ```ts
 * greet("World") // "Hello, World!"
 * ```
 */
export function greet(name: string): string {
  return `Hello, ${name}!`;
}

/**
 * Adds two numbers together.
 *
 * @param a - The first number
 * @param b - The second number
 * @returns The sum of a and b
 *
 * @example
 * ```ts
 * add(2, 3) // 5
 * ```
 */
export function add(a: number, b: number): number {
  return a + b;
}
