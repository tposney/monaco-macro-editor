
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\pause.d.ts",
      "/**\n * Pause notification in the HUD\n */\ndeclare class Pause<D extends Pause.Data = Pause.Data> extends Application {\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /**\n   * Prepare the default data which is required to render the Pause UI\n   */\n  getData(): D | Promise<D>;\n}\n\ndeclare namespace Pause {\n  interface Data {\n    paused: boolean;\n  }\n}\n"
    ]
  