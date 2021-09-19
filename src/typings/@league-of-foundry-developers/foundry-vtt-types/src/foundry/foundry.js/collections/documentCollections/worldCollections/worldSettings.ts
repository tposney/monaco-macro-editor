
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollections\\worldSettings.d.ts",
      "/**\n * The Collection of Setting documents which exist within the active World.\n * This collection is accessible as game.settings.storage.get(\"world\")\n *\n * @see {@link Setting} The Setting document\n */declare class WorldSettings extends WorldCollection<typeof foundry.documents.BaseSetting,'WorldSettings'>{/** @override */static documentName:'Setting';/** @override */get directory():null;/**\n * Return the Setting document with the given key.\n * @param key - The setting key\n * @returns The Setting.\n */\ngetSetting(key:string):ReturnType<this['find']>;/**\n * Return the serialized value of the world setting as a string\n * @param key - The setting key\n * @returns The serialized setting string\n */\ngetItem(key:string):string|null;}"
    ]
  