
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollections\\rollTables.d.ts",
      "/**\n * The singleton collection of RollTable documents which exist within the active World.\n * This Collection is accessible within the Game object as game.tables.\n *\n * @see {@link RollTable} The RollTable document\n * @see {@link RollTableDirectory} The RollTableDirectory sidebar directory\n */declare class RollTables extends WorldCollection<typeof foundry.documents.BaseRollTable,'RollTables'>{/** @override */static documentName:'RollTable';/** @override */get directory():typeof ui['tables'];/**\n * Register world settings related to RollTable entities\n */static registerSettings():void;}"
    ]
  