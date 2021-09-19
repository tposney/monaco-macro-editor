
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\headsUpDisplay.d.ts",
      "/**\n * Render the HUD container\n */declare class HeadsUpDisplay extends Application{/**\n * Token HUD\n */\ntoken:TokenHUD;/**\n * Tile HUD\n */\ntile:TileHUD;/**\n * Drawing HUD\n */\ndrawing:DrawingHUD;/**\n * Chat Bubbles\n */\nbubbles:ChatBubbles;/**\n * Define default options which configure the HUD\n * @defaultValue\n * ```\n * mergeObject(super.defaultOptions, {\n *   id: \"hud\",\n *   template: \"templates/hud/hud.html\",\n *   popOut: false,\n * })\n * ```\n */static get defaultOptions():typeof Application['defaultOptions'];getData():{}|{width:number;height:number};_render(...args:Parameters<Application['_render']>):Promise<void>;align():void;}"
    ]
  