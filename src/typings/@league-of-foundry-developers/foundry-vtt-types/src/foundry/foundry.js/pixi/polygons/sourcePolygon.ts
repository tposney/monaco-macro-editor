
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/polygons/sourcePolygon.d.ts",
      "/**\n * An extension of the base PIXI.Polygon class designed for polygons which are constructed as a radius around\n * some central origin.\n */\ndeclare class SourcePolygon extends PIXI.Polygon {\n  constructor(x: number, y: number, radius: number, ...points: ({ x: number; y: number }[] | number[])[]);\n\n  x: number;\n\n  y: number;\n\n  radius: number;\n\n  /** @override */\n  clone(): this;\n\n  /**\n   * Optimize Polygon membership test by first checking the hypotenuse of the candidate point against the known origin\n   * @see PIXI.Polygon#contains\n   * @param x - The candidate x-coordinate\n   * @param y - The candidate y-coordinate\n   * @returns Is the provided point contained within the SourcePolygon?\n   */\n  contains(x: number, y: number): boolean;\n}\n"
    ]
  