
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/rollTerms/diceTerms/fateDie.d.ts",
      "/**\n * A type of DiceTerm used to represent a three-sided Fate/Fudge die.\n * Mathematically behaves like 1d3-2\n */\ndeclare class FateDie extends DiceTerm {\n  constructor(termData?: Partial<DiceTerm.TermData>);\n\n  faces: 3;\n\n  /**\n   * @defaultValue `'f'`\n   */\n  static DENOMINATION: string;\n\n  /**\n   * @override\n   */\n  roll({ minimize, maximize }?: { minimize: boolean; maximize: boolean }): DiceTerm.Result;\n\n  /**\n   * @override\n   */\n  getResultLabel(result: DiceTerm.Result): string;\n}\n"
    ]
  