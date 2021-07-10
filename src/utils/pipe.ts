import { PipeInput } from "../types";

/**
 * Returns a function that applies the given functions to the input in the order they were provided
 * The curried version of apply
 *
 * @template Input the input of the first function in `fns`
 * @template Output the output of the last function in `fns`
 * @param fns array of functions to apply to the input
 * @example
 * ```ts
 * const double = x => x * 2
 * const plus5 = x => x + 5
 *
 * const doubleThenAdd5 = pipe([double, add5])
 * doubleThenAdd5(5) // returns 15
 * ```
 * @see apply
 */
export function pipe<Input, Output = Input>(fns: PipeInput<Input, Output>) {
  return (input: Input): Output => (fns.reduce((input, fn) => fn(input as never), input) as unknown) as Output;
}
