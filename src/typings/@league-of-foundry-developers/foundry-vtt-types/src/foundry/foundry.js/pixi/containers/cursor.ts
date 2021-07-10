
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\cursor.d.ts",
      "/**\n * A single Mouse Cursor\n */\ndeclare class Cursor extends PIXI.Container {\n  constructor(user: User);\n\n  target: { x: number; y: number };\n\n  /**\n   * Draw the user's cursor as a small dot with their user name attached as text\n   */\n  draw(user: User): void;\n\n  /**\n   * Move an existing cursor to a new position smoothly along the animation loop\n   */\n  protected _animate(): void;\n\n  /**\n   * Remove the cursor update from the animation loop and destroy the container.\n   * @param options - Additional options passed to the parent `PIXI.Container.destroy()` method\n   */\n  destroy(options?: { children?: boolean; texture?: boolean; baseTexture?: boolean }): void;\n}\n"
    ]
  