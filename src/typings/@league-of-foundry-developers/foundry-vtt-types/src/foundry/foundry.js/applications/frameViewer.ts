
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/frameViewer.d.ts",
      "/**\n * A simple window application which shows the built documentation pages within an iframe\n */\ndeclare class FrameViewer extends Application {\n  url: string;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(super.defaultOptions, {\n   *   height: window.innerHeight * 0.9,\n   *   width: Math.min(window.innerWidth * 0.9, 1200),\n   *   top: (window.innerHeight - height) / 2,\n   *   left: (window.innerWidth - width) / 2,\n   *   id: \"documentation\",\n   *   template: \"templates/apps/documentation.html\",\n   * })\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /** @override */\n  getData(options?: Partial<Application.Options>): Promise<{ src: string }>;\n\n  /** @override */\n  close(options?: Application.CloseOptions): ReturnType<Application['close']>;\n}\n"
    ]
  