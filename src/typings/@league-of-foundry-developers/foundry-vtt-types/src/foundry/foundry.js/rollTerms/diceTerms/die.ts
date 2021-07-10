
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\rollTerms\\diceTerms\\die.d.ts",
      "/**\n * A type of DiceTerm used to represent rolling a fair n-sided die.\n *\n * @example\n * ```typescript\n * // Roll 4 six-sided dice\n * let die = new Die({faces: 6, number: 4}).evaluate();\n * ```\n */\ndeclare class Die extends DiceTerm {\n  constructor(termData?: Partial<Die.TermData>);\n\n  /**\n   * @override\n   * @defaultValue `\"d\"`\n   */\n  static DENOMINATION: string;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * {\n   *   r: 'reroll';\n   *   rr: 'rerollRecursive';\n   *   x: 'explode';\n   *   xo: 'explodeOnce';\n   *   k: 'keep';\n   *   kh: 'keep';\n   *   kl: 'keep';\n   *   d: 'drop';\n   *   dh: 'drop';\n   *   dl: 'drop';\n   *   min: 'minimum';\n   *   max: 'maximum';\n   *   even: 'countEven';\n   *   odd: 'countOdd';\n   *   cs: 'countSuccess';\n   *   cf: 'countFailures';\n   *   df: 'deductFailures';\n   *   sf: 'subtractFailures';\n   *   ms: 'marginSuccess';\n   * }\n   * ```\n   */\n  static MODIFIERS: Die.Modifiers;\n\n  /**\n   * @override\n   */\n  get total(): number | null;\n\n  /**\n   * Re-roll the Die, rolling additional results for any values which fall within a target set.\n   * If no target number is specified, re-roll the lowest possible result.\n   *\n   * 20d20r         reroll all 1s\n   * 20d20r1        reroll all 1s\n   * 20d20r=1       reroll all 1s\n   * 20d20r1=1      reroll a single 1\n   *\n   * @param modifier - The matched modifier query\n   * @param recursive - Reroll recursively, continuing to reroll until the condition is no longer met\n   * @returns False if the modifier was unmatched\n   */\n  reroll(modifier: string, { recursive }?: { recursive?: boolean }): boolean | void;\n\n  /**\n   * @see {@link Die#reroll}\n   */\n  rerollRecursive(modifier: string): boolean | void;\n\n  /**\n   * Explode the Die, rolling additional results for any values which match the target set.\n   * If no target number is specified, explode the highest possible result.\n   * Explosion can be a \"small explode\" using a lower-case x or a \"big explode\" using an upper-case \"X\"\n   *\n   * @param modifier  - The matched modifier query\n   * @param recursive - Explode recursively, such that new rolls can also explode?\n   *                    (default: `true`)\n   */\n  explode(modifier: string, { recursive }?: { recursive: boolean }): boolean | void;\n\n  /**\n   * @see {@link Die#explode}\n   */\n  explodeOnce(modifier: string): boolean | void;\n\n  /**\n   * Keep a certain number of highest or lowest dice rolls from the result set.\n   *\n   * 20d20k       Keep the 1 highest die\n   * 20d20kh      Keep the 1 highest die\n   * 20d20kh10    Keep the 10 highest die\n   * 20d20kl      Keep the 1 lowest die\n   * 20d20kl10    Keep the 10 lowest die\n   *\n   * @param modifier - The matched modifier query\n   */\n  keep(modifier: string): boolean | void;\n\n  /**\n   * Drop a certain number of highest or lowest dice rolls from the result set.\n   *\n   * 20d20d       Drop the 1 lowest die\n   * 20d20dh      Drop the 1 highest die\n   * 20d20dl      Drop the 1 lowest die\n   * 20d20dh10    Drop the 10 highest die\n   * 20d20dl10    Drop the 10 lowest die\n   *\n   * @param modifier - The matched modifier query\n   */\n  drop(modifier: string): boolean | void;\n\n  /**\n   * Count the number of successful results which occurred in a given result set.\n   * Successes are counted relative to some target, or relative to the maximum possible value if no target is given.\n   * Applying a count-success modifier to the results re-casts all results to 1 (success) or 0 (failure)\n   *\n   * 20d20cs      Count the number of dice which rolled a 20\n   * 20d20cs\\>10   Count the number of dice which rolled higher than 10\n   * 20d20cs\\<10   Count the number of dice which rolled less than 10\n   *\n   * @param modifier - The matched modifier query\n   */\n  countSuccess(modifier: string): boolean | void;\n\n  /**\n   * Count the number of failed results which occurred in a given result set.\n   * Failures are counted relative to some target, or relative to the lowest possible value if no target is given.\n   * Applying a count-failures modifier to the results re-casts all results to 1 (failure) or 0 (non-failure)\n   *\n   * 6d6cf      Count the number of dice which rolled a 1 as failures\n   * 6d6cf\\<=3   Count the number of dice which rolled less than 3 as failures\n   * 6d6cf\\>4    Count the number of dice which rolled greater than 4 as failures\n   *\n   * @param modifier - The matched modifier query\n   */\n  countFailures(modifier: string): boolean | void;\n\n  /**\n   * Count the number of even results which occurred in a given result set.\n   * Even numbers are marked as a success and counted as 1\n   * Odd numbers are marked as a non-success and counted as 0.\n   *\n   * 6d6even    Count the number of even numbers rolled\n   *\n   * @param modifier - The matched modifier query\n   */\n  countEven(modifier: string): boolean | void;\n\n  /**\n   * Count the number of odd results which occurred in a given result set.\n   * Odd numbers are marked as a success and counted as 1\n   * Even numbers are marked as a non-success and counted as 0.\n   *\n   * 6d6odd    Count the number of odd numbers rolled\n   *\n   * @param modifier - The matched modifier query\n   */\n  countOdd(modifier: string): boolean | void;\n\n  /**\n   * Deduct the number of failures from the dice result, counting each failure as -1\n   * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.\n   * Applying a deduct-failures modifier to the results counts all failed results as -1.\n   *\n   * 6d6df      Subtract the number of dice which rolled a 1 from the non-failed total.\n   * 6d6cs\\>3df  Subtract the number of dice which rolled a 3 or less from the non-failed count.\n   * 6d6cf\\<3df  Subtract the number of dice which rolled less than 3 from the non-failed count.\n   *\n   * @param modifier - The matched modifier query\n   */\n  deductFailures(modifier: string): boolean | void;\n\n  /**\n   * Subtract the value of failed dice from the non-failed total, where each failure counts as its negative value.\n   * Failures are identified relative to some target, or relative to the lowest possible value if no target is given.\n   * Applying a deduct-failures modifier to the results counts all failed results as -1.\n   *\n   * 6d6df\\<3    Subtract the value of results which rolled less than 3 from the non-failed total.\n   *\n   * @param modifier - The matched modifier query\n   */\n  subtractFailures(modifier: string): boolean | void;\n\n  /**\n   * Subtract the total value of the DiceTerm from a target value, treating the difference as the final total.\n   * Example: 6d6ms\\>12    Roll 6d6 and subtract 12 from the resulting total.\n   * @param modifier - The matched modifier query\n   */\n  marginSuccess(modifier: string): boolean | void;\n\n  /**\n   * Constrain each rolled result to be at least some minimum value.\n   * Example: 6d6min2    Roll 6d6, each result must be at least 2\n   * @param modifier - The matched modifier query\n   */\n  minimum(modifier: string): boolean | void;\n\n  /**\n   * Constrain each rolled result to be at most some maximum value.\n   * Example: 6d6max5    Roll 6d6, each result must be at most 5\n   * @param modifier - The matched modifier query\n   */\n  maximum(modifier: string): boolean | void;\n}\n\ndeclare namespace Die {\n  interface Data extends Partial<TermData> {\n    class: 'Die';\n    results: DiceTerm.Result[];\n  }\n\n  interface TermData extends DiceTerm.TermData {\n    modifiers: Array<keyof typeof Die['MODIFIERS']>;\n  }\n\n  interface Modifiers {\n    r: 'reroll';\n    rr: 'rerollRecursive';\n    x: 'explode';\n    xo: 'explodeOnce';\n    k: 'keep';\n    kh: 'keep';\n    kl: 'keep';\n    d: 'drop';\n    dh: 'drop';\n    dl: 'drop';\n    min: 'minimum';\n    max: 'maximum';\n    even: 'countEven';\n    odd: 'countOdd';\n    cs: 'countSuccess';\n    cf: 'countFailures';\n    df: 'deductFailures';\n    sf: 'subtractFailures';\n    ms: 'marginSuccess';\n  }\n}\n"
    ]
  