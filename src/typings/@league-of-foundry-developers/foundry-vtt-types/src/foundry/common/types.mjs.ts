
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\types.mjs.d.ts",
      "/**\n * A single point, expressed as an object \\{x, y\\}\n */\ndeclare type Point = PIXI.Point | { x: number; y: number };\n\n/**\n * A single point, expressed as an array \\[x,y\\]\n */\ndeclare type PointArray = [x: number, y: number];\n\n/**\n * A Ray intersection point\n */\ndeclare type RayIntersection = {\n  x: number;\n  y: number;\n  t0: number;\n  t1: number;\n} | null;\n\n/**\n * A standard rectangle interface.\n */\ndeclare type Rectangle =\n  | PIXI.Rectangle\n  | {\n      x: number;\n      y: number;\n      width: number;\n      height: number;\n    };\n\ntype RequestData = object | object[] | string | string[];\n\ninterface SocketRequest {\n  /**\n   * The server-side action being requested\n   */\n  action?: string;\n\n  /**\n   * The type of object being modified\n   */\n  type?: string;\n\n  /**\n   * Data applied to the operation\n   */\n  data?: RequestData;\n\n  /**\n   * A Compendium pack name\n   */\n  pack?: string;\n\n  /**\n   * The type of parent document\n   */\n  parentType?: string;\n\n  /**\n   * The ID of a parent document\n   */\n  parentId?: string;\n\n  /**\n   * Additional options applied to the request\n   */\n  options?: object;\n}\n\ninterface SocketResponse {\n  /**\n   * The initial request\n   */\n  request: SocketRequest;\n\n  /**\n   * An error, if one occurred\n   */\n  error?: Error;\n\n  /**\n   * The status of the request\n   */\n  status?: string;\n\n  /**\n   * The ID of the requesting User\n   */\n  userId?: string;\n\n  /**\n   * Data returned as a result of the request\n   */\n  data?: RequestData;\n}\n"
    ]
  