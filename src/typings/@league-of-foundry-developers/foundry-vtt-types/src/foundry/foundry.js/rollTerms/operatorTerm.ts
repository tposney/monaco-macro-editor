
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/rollTerms/operatorTerm.d.ts",
      "/**\n * A type of RollTerm used to denote and perform an arithmetic operation.\n */\ndeclare class OperatorTerm extends RollTerm {\n  constructor({ operator, options }?: Partial<OperatorTerm.TermData>);\n\n  operator: OperatorTerm.TermData['operator'];\n\n  /** An array of operators which represent arithmetic operations */\n  static OPERATORS: ['+', '-', '*', '/'];\n}\n\ndeclare namespace OperatorTerm {\n  interface TermData {\n    operator: string;\n    options?: RollTerm.Options;\n  }\n}\n"
    ]
  