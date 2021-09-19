
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\cursor.d.ts",
      "import{ConfiguredDocumentClass}from'../../../../types/helperTypes';declare global{/**\n * A single Mouse Cursor\n */class Cursor extends PIXI.Container{constructor(user:InstanceType<ConfiguredDocumentClass<typeof User>>);/**\n * @defaultValue `{x: 0, y: 0}`\n */\ntarget:{x:number;y:number};/**\n * Draw the user's cursor as a small dot with their user name attached as text\n */\ndraw(user:InstanceType<ConfiguredDocumentClass<typeof User>>):void;/**\n * Move an existing cursor to a new position smoothly along the animation loop\n */protected _animate():void;/** @override */\ndestroy(options?:Parameters<PIXI.Container['destroy']>[0]):void;}}"
    ]
  