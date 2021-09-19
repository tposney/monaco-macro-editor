
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\rollTerms\\stringTerm.d.ts",
      "declare global{/**\n * A type of RollTerm used to represent strings which have not yet been matched.\n */class StringTerm extends RollTerm{constructor({term,options}:StringTermConstructorData);term:StringTermConstructorData['term'];/**\n * @defaultValue `[\"term\"]`\n */static SERIALIZE_ATTRIBUTES:string[];get expression():string;get total():string;evaluate(options?:Partial<RollTerm.EvaluationOptions>):never;}}interface StringTermConstructorData{term:string;options?:RollTerm.Options;}export{};"
    ]
  