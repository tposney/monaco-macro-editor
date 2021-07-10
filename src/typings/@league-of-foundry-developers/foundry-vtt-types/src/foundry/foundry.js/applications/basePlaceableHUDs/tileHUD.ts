
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\basePlaceableHUDs\\tileHUD.d.ts",
      "/**\n * An implementation of the PlaceableHUD base class which renders a heads-up-display interface for Tile objects.\n */\ndeclare class TileHUD extends BasePlaceableHUD<Tile> {\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(super.defaultOptions, {\n   *   id: \"tile-hud\",\n   *   template: \"templates/hud/drawing-hud.html\"\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /** @override */\n  getData(): ReturnType<BasePlaceableHUD<Tile>['getData']> & {\n    lockedClass: string;\n    visibilityClass: string;\n  };\n\n  /** @override */\n  setPosition(): void;\n}\n"
    ]
  