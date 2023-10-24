
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/sidebarTabs/sidebarDirectories/rollTableDirectory.d.ts",
      "/**\n * The sidebar directory which organizes and displays world-level RollTable documents.\n * @typeParam Options - The type of the options object\n */\ndeclare class RollTableDirectory<\n  Options extends SidebarDirectory.Options = SidebarDirectory.Options\n> extends SidebarDirectory<'RollTable', Options> {\n  /** @override */\n  static documentName: 'RollTable';\n}\n"
    ]
  