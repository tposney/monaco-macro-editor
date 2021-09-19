
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\chatPopout.d.ts",
      "/**\n * @typeParam P - the type of the options object\n */declare class ChatPopout<P extends Application.Options=Application.Options>extends Application<P>{constructor(message:ChatPopout['message'],options?:Partial<P>);/**\n * The displayed Chat Message entity\n */\nmessage:ChatMessage;/**\n * @override\n * @defaultValue\n * ```typescript\n * mergeObject(super.defaultOptions, {\n *   width: 300,\n *   height: \"auto\",\n *   classes: [\"chat-popout\"]\n * })\n * ```\n */static get defaultOptions():typeof Application['defaultOptions'];/** @override */get id():string;/** @override */get title():string;/**\n * @param data    - (unused)\n * @param options - (unused)\n * @override\n */protected _renderInner(data?:any,options?:any):ReturnType<this['message']['render']>;}"
    ]
  