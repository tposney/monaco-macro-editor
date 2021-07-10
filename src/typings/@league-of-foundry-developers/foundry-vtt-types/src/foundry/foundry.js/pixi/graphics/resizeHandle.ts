
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\graphics\\resizeHandle.d.ts",
      "declare class ResizeHandle extends PIXI.Graphics {\n  constructor(offset: ResizeHandle['offset'], ...args: ConstructorParameters<typeof PIXI.Graphics>);\n\n  offset: [widthOffset: number, heightOffset: number];\n\n  refresh(bounds: Rectangle): void;\n\n  updateDimensions(\n    current: Rectangle,\n    origin: Rectangle,\n    destination: Rectangle,\n    { aspectRatio }?: { aspectRatio?: number | null }\n  ): Rectangle;\n}\n"
    ]
  