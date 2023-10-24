
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/headsUpDisplay.d.ts",
      "/**\n * Render the HUD container\n */\ndeclare class HeadsUpDisplay extends Application {\n  /**\n   * Token HUD\n   */\n  token: TokenHUD;\n\n  /**\n   * Tile HUD\n   */\n  tile: TileHUD;\n\n  /**\n   * Drawing HUD\n   */\n  drawing: DrawingHUD;\n\n  /**\n   * Chat Bubbles\n   */\n  bubbles: ChatBubbles;\n\n  /**\n   * Define default options which configure the HUD\n   * @defaultValue\n   * ```\n   * mergeObject(super.defaultOptions, {\n   *   id: \"hud\",\n   *   template: \"templates/hud/hud.html\",\n   *   popOut: false,\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  getData(): {} | { width: number; height: number };\n\n  _render(...args: Parameters<Application['_render']>): Promise<void>;\n\n  align(): void;\n}\n"
    ]
  