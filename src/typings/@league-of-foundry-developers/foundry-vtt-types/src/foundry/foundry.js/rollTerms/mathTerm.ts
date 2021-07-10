
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\rollTerms\\mathTerm.d.ts",
      "declare global {\n  /**\n   * A type of RollTerm used to apply a function from the Math library.\n   */\n  class MathTerm extends RollTerm {\n    constructor({ fn, terms, options }: MathTermData);\n\n    /**\n     * The named function in the Math environment which should be applied to the term\n     */\n    fn: MathTermData['fn'];\n\n    /** An array of string argument terms for the function */\n    terms: NonNullable<MathTermData['terms']>;\n\n    /**\n     * The cached Roll instances for each function argument\n     * @defaultValue `[]`\n     */\n    rolls: Roll[];\n\n    /**\n     * The cached result of evaluating the method arguments\n     * @defaultValue `undefined`\n     */\n    result?: number;\n\n    /**\n     * @defaultValue `true`\n     */\n    isIntermediate: boolean;\n\n    /**\n     * @defaultValue `[\"fn\", \"terms\"]`\n     */\n    static SERIALIZE_ATTRIBUTES: string[];\n\n    /**\n     * An array of evaluated DiceTerm instances that should be bubbled up to the parent Roll\n     */\n    get dice(): DiceTerm[] | undefined;\n\n    get total(): number | undefined;\n\n    get expression(): string;\n\n    protected _evaluateSync({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): this;\n\n    protected _evaluate({ minimize, maximize }?: { minimize?: boolean; maximize?: boolean }): Promise<this>;\n  }\n}\n\ninterface MathTermData {\n  fn: string;\n\n  /**\n   * @defaultValue `[]`\n   */\n  terms?: string[];\n\n  /**\n   * @defaultValue `{}`\n   */\n  options?: RollTerm.Options;\n}\n\nexport {};\n"
    ]
  