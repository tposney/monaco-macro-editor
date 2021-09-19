
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\polygons\\sourcePolygon.d.ts",
      "/**\n * An extension of the base PIXI.Polygon class designed for polygons which are constructed as a radius around\n * some central origin.\n */declare class SourcePolygon extends PIXI.Polygon{constructor(x:number,y:number,radius:number,...points:({x:number;y:number}[]|number[])[]);x:number;y:number;radius:number;/** @override */\nclone():this;/**\n * Optimize Polygon membership test by first checking the hypotenuse of the candidate point against the known origin\n * @see PIXI.Polygon#contains\n * @param x - The candidate x-coordinate\n * @param y - The candidate y-coordinate\n * @returns Is the provided point contained within the SourcePolygon?\n */\ncontains(x:number,y:number):boolean;}"
    ]
  