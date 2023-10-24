
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/sidebarTabs/sidebarDirectories/itemDirectory.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * A directory of Item entities in the Sidebar\n */\ndeclare class ItemDirectory extends SidebarDirectory {\n  /**\n   * @override\n   */\n  static get entity(): 'Item';\n\n  /**\n   * @override\n   * @see {@link Game.items}\n   */\n  static get collection(): Game['items'];\n\n  /**\n   * @param selector - (unused)\n   * @override\n   */\n  protected _canDragStart(selector: string | null): boolean;\n\n  /**\n   * @param selector - (unused)\n   * @override\n   */\n  protected _canDragDrop(selector: string | null): boolean;\n\n  /**\n   * @override\n   */\n  protected _getEntryContextOptions(): ContextMenuEntry[];\n}\n"
    ]
  