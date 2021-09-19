
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\controlIcon.d.ts",
      "/**\n * A generic helper for drawing a standard Control Icon\n */declare class ControlIcon extends PIXI.Container{/**\n * @param size        - (default: `40`)\n * @param borderColor - (default: `0xFF5500`)\n * @param tint        - (default: `null`)\n */constructor({texture,size,borderColor,tint}:{texture:string;size?:number;borderColor?:number;tint?:number|null;});iconSrc:string;size:number;rect:[number,number,number,number];borderColor:number;tintColor:number|null;/**\n * @defaultValue `true`\n */\ninteractive:boolean;/**\n * @defaultValue `false`\n */\ninteractiveChildren:boolean;hitArea:PIXI.Rectangle;bg:PIXI.Graphics;icon:PIXI.Sprite;border:PIXI.Graphics;draw():Promise<this>;protected _onHoverIn(event:PIXI.InteractionEvent):void;protected _onHoverOut(event:PIXI.InteractionEvent):void;}"
    ]
  