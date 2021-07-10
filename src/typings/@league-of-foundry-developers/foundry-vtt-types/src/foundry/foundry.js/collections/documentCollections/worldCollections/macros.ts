
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\collections\\documentCollections\\worldCollections\\macros.d.ts",
      "import { ConfiguredDocumentClass } from '../../../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * The singleton collection of Macro documents which exist within the active World.\n   * This Collection is accessible within the Game object as game.macros.\n   *\n   * @see {@link Macro} The Macro entity\n   * @see {@link MacroDirectory} The MacroDirectory sidebar directory\n   */\n  class Macros extends WorldCollection<typeof foundry.documents.BaseMacro, 'Macros'> {\n    /** @override */\n    static documentName: 'Macro';\n\n    /** @override */\n    get directory(): typeof ui.macros;\n\n    /** @override */\n    fromCompendium(\n      document:\n        | InstanceType<ConfiguredDocumentClass<typeof foundry.documents.BaseMacro>>\n        | InstanceType<ConfiguredDocumentClass<typeof foundry.documents.BaseMacro>>['data']['_source']\n    ): Omit<\n      InstanceType<ConfiguredDocumentClass<typeof foundry.documents.BaseMacro>>['data']['_source'],\n      '_id' | 'folder'\n    >;\n\n    /**\n     * You are calling Macros.canUseScripts which has been deprecated in favor of User#can('MACRO_SCRIPT')\n     * @deprecated since 0.8.1\n     */\n    static canUseScripts(user: InstanceType<ConfiguredDocumentClass<typeof foundry.documents.BaseUser>>): boolean;\n  }\n}\n"
    ]
  