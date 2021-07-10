
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollections\\fogExplorations.d.ts",
      "/**\n * The singleton collection of FogExploration documents which exist within the active World.\n * This Collection is accessible within the Game object as game.fog.\n *\n * @see {@link FogExploration} The FogExploration document\n */\ndeclare class FogExplorations extends WorldCollection<typeof foundry.documents.BaseFogExploration, 'FogExplorations'> {\n  static documentName: 'FogExploration';\n}\n"
    ]
  