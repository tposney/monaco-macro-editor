
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/applications/pause.d.ts",
      "/**\n * Pause notification in the HUD\n *\n * @typeParam Options - the type of the options object\n * @typeParam Data    - The data structure used to render the handlebars template.\n */\ndeclare class Pause<\n  Options extends Application.Options = Application.Options,\n  Data extends object = Pause.Data\n> extends Application<Options> {\n  static get defaultOptions(): Application.Options;\n\n  /** @override */\n  getData(options?: Partial<Options>): Data | Promise<Data>;\n}\n\ndeclare namespace Pause {\n  interface Data {\n    paused: boolean;\n  }\n}\n"
    ]
  