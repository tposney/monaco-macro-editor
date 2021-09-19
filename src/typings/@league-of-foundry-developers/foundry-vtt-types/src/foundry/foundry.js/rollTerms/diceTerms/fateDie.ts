
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\rollTerms\\diceTerms\\fateDie.d.ts",
      "/**\n * A type of DiceTerm used to represent a three-sided Fate/Fudge die.\n * Mathematically behaves like 1d3-2\n */declare class FateDie extends DiceTerm{constructor(termData?:Partial<DiceTerm.TermData>);faces:3;/**\n * @defaultValue `'f'`\n */static DENOMINATION:string;/**\n * @override\n */\nroll({minimize,maximize}?:{minimize:boolean;maximize:boolean}):DiceTerm.Result;/**\n * @override\n */\ngetResultLabel(result:DiceTerm.Result):string;}"
    ]
  