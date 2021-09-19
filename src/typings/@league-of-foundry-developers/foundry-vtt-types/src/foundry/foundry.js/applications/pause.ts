
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\pause.d.ts",
      "/**\n * Pause notification in the HUD\n *\n * @typeParam Options - the type of the options object\n * @typeParam Data    - The data structure used to render the handlebars template.\n */declare class Pause<\nOptions extends Application.Options=Application.Options,Data extends object=Pause.Data>extends Application<Options>{static get defaultOptions():Application.Options;/** @override */\ngetData(options?:Partial<Options>):Data|Promise<Data>;}declare namespace Pause{interface Data{paused:boolean;}}"
    ]
  