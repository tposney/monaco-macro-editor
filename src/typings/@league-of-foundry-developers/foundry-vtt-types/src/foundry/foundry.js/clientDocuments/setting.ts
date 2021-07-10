
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\setting.d.ts",
      "// TODO\ndeclare global {\n  /**\n   * The client-side Setting document which extends the common BaseSetting abstraction.\n   * Each Setting document contains SettingData which defines its data schema.\n   *\n   * @see {@link data.SettingData}              The Setting data schema\n   * @see {@link documents.WorldSettings}       The world-level collection of Setting documents\n   *\n   * @param data - Initial data provided to construct the Setting document\n   */\n  class Setting extends ClientDocumentMixin(foundry.documents.BaseSetting) {}\n}\n\nexport {};\n"
    ]
  