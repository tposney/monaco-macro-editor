
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/sidebarTabs/sidebarDirectories/sceneDirectory.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * A directory listing of active game scenes\n */\ndeclare class SceneDirectory extends SidebarDirectory {\n  /**\n   * @override\n   */\n  static get entity(): 'Scene';\n\n  /**\n   * @override\n   * @see {@link Game.scenes}\n   */\n  static get collection(): Game['scenes'];\n\n  /**\n   * @override\n   * @remarks This is never called.\n   */\n  protected _onCreate(event: Event): Promise<Scene>;\n\n  /**\n   * @override\n   */\n  protected _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  