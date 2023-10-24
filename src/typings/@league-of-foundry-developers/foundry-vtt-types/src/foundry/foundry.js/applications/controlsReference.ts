
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/controlsReference.d.ts",
      "/**\n * Keyboard Controls Reference Sheet\n */\ndeclare class ControlsReference extends Application {\n  /**\n   * @defaultValue\n   * ```typescript\n   * const options = super.defaultOptions;\n   * options.title = game.i18n.localize(\"CONTROLS.Title\");\n   * options.id = \"controls-reference\";\n   * options.template = \"templates/sidebar/apps/controls-reference.html\";\n   * options.width = 600;\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n}\n"
    ]
  