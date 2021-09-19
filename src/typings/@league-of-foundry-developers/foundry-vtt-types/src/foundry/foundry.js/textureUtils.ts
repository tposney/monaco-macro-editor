
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\textureUtils.d.ts",
      "/**\n * Test whether a file source exists by performing a HEAD request against it\n * @param src - The source URL or path to test\n * @returns Does the file exist at the provided url?\n */declare function srcExists(src:string):Promise<boolean>;/**\n * Get a single texture from the cache\n */declare function getTexture(src:string):PIXI.Texture|null;/**\n * Load a single texture and return a Promise which resolves once the texture is ready to use\n * @param src      - The requested texture source\n * @param fallback - A fallback texture to use if the requested source is unavailable or invalid\n */declare function loadTexture(src:string,{fallback}?:{/**\n * A fallback texture to use if the requested source is unavailable or invalid\n */\nfallback?:string;}):Promise<PIXI.Texture>;"
    ]
  