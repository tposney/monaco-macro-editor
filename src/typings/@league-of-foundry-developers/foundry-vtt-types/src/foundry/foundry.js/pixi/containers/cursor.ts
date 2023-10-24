
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/containers/cursor.d.ts",
      "import { ConfiguredDocumentClass } from '../../../../types/helperTypes';\n\ndeclare global {\n  /**\n   * A single Mouse Cursor\n   */\n  class Cursor extends PIXI.Container {\n    constructor(user: InstanceType<ConfiguredDocumentClass<typeof User>>);\n\n    /**\n     * @defaultValue `{x: 0, y: 0}`\n     */\n    target: { x: number; y: number };\n\n    /**\n     * Draw the user's cursor as a small dot with their user name attached as text\n     */\n    draw(user: InstanceType<ConfiguredDocumentClass<typeof User>>): void;\n\n    /**\n     * Move an existing cursor to a new position smoothly along the animation loop\n     */\n    protected _animate(): void;\n\n    /** @override */\n    destroy(options?: Parameters<PIXI.Container['destroy']>[0]): void;\n  }\n}\n"
    ]
  