
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollections\\rollTables.d.ts",
      "/**\n * The singleton collection of RollTable documents which exist within the active World.\n * This Collection is accessible within the Game object as game.tables.\n *\n * @see {@link RollTable} The RollTable document\n * @see {@link RollTableDirectory} The RollTableDirectory sidebar directory\n */\ndeclare class RollTables extends WorldCollection<typeof foundry.documents.BaseRollTable, 'RollTables'> {\n  /** @override */\n  static documentName: 'RollTable';\n\n  /** @override */\n  get directory(): typeof ui['tables'];\n\n  /**\n   * Register world settings related to RollTable entities\n   */\n  static registerSettings(): void;\n}\n"
    ]
  