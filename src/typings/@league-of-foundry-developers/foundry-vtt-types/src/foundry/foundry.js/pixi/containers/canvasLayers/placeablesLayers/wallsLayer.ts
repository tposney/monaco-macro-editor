
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\canvasLayers\\placeablesLayers\\wallsLayer.d.ts",
      "/**\n * The Walls canvas layer which provides a container for Wall objects within the rendered Scene.\n * @see {@link Wall}\n */\ndeclare class WallsLayer extends PlaceablesLayer<Wall> {\n  constructor();\n\n  /**\n   * A graphics layer used to display chained Wall selection\n   * @defaultValue `null`\n   */\n  chain: PIXI.Graphics | null;\n\n  /**\n   * An array of all the unique perception-blocking endpoints which are present in the layer\n   * We keep this array cached for faster sight polygon computations\n   * @defaultValue `[]`\n   */\n  endpoints: PointArray[];\n\n  /**\n   * Track whether we are currently within a chained placement workflow\n   * @defaultValue `false`\n   */\n  protected _chain: boolean;\n\n  /**\n   * Track whether the layer is currently toggled to snap at exact grid precision\n   * @defaultValue `false`\n   */\n  protected _forceSnap: boolean;\n\n  /**\n   * Track the most recently created or updated wall data for use with the clone tool\n   * @defaultValue `null`\n   */\n  protected _cloneType: Wall['data'] | null;\n\n  /**\n   * Reference the last interacted wall endpoint for the purposes of chaining\n   * @defaultValue\n   * ```\n   * {\n   *   id: null,\n   *   point: null,\n   * }\n   * ```\n   */\n  protected last: {\n    id: string | null;\n    point: PointArray | null;\n  };\n\n  /**\n   * @override\n   * @defaultValue\n   * ```\n   * mergeObject(super.layerOptions, {\n   *   controllableObjects: true,\n   *   objectClass: Wall,\n   *   quadtree: true,\n   *   sheetClass: WallConfig,\n   *   sortActiveTop: true,\n   *   zIndex: 40\n   * })\n   * ```\n   */\n  static get layerOptions(): PlaceablesLayer.LayerOptions;\n\n  /**\n   * An Array of Wall instances in the current Scene which currently block Token vision.\n   * This array includes doors regardless of their current door state.\n   */\n  get blockVision(): Wall[];\n\n  /**\n   * An Array of Wall instances in the current Scene which block Token movement.\n   * This array includes doors regardless of their current door state.\n   */\n  get blockMovement(): Wall[];\n\n  /**\n   * An Array of Wall instances in the current Scene which act as Doors.\n   */\n  get doors(): Wall[];\n\n  /**\n   * Gate the precision of wall snapping to become less precise for small scale maps.\n   * @remarks Returns `1 | 4 | 8 | 16`\n   */\n  get gridPrecision(): number;\n\n  /**\n   * @override\n   */\n  draw(): Promise<this>;\n\n  /** @override */\n  deactivate(): this;\n\n  initialize(): void;\n\n  /**\n   * Given a point and the coordinates of a wall, determine which endpoint is closer to the point\n   * @param point - The origin point of the new Wall placement\n   * @param wall  - The existing Wall object being chained to\n   * @returns The [x,y] coordinates of the starting endpoint\n   */\n  static getClosestEndpoint(point: Point, wall: Wall): PointArray;\n\n  /**\n   * Given an array of Wall instances, identify the unique endpoints across all walls.\n   * @param walls         - An array of Wall instances\n   * @param bounds        - An optional bounding rectangle within which the endpoint must lie.\n   * @param blockMovement - Filter for walls that block movement, default is true.\n   *                        (default: `true`)\n   * @param blockSenses   - Filter for walls that block perception, default is true.\n   *                        (default: `true`)\n   * @returns An array of endpoints\n   */\n  static getUniqueEndpoints(\n    walls: Wall[],\n    {\n      bounds,\n      blockMovement,\n      blockSenses\n    }?: { bounds?: Rectangle | null; blockMovement?: boolean; blockSenses?: boolean }\n  ): PointArray[];\n\n  /**\n   * Test whether movement along a given Ray collides with a Wall.\n   * @param ray - The attempted movement\n   * @returns Does a collision occur?\n   */\n  checkCollision(\n    ray: Ray,\n    {\n      blockMovement,\n      blockSenses,\n      mode\n    }?: { blockMovement?: boolean; blockSenses?: boolean; mode?: 'all' | 'closest' | 'any' }\n  ): boolean;\n\n  /**\n   * Highlight the endpoints of Wall segments which are currently group-controlled on the Walls layer\n   */\n  highlightControlledSegments(): void;\n\n  /** @override */\n  releaseAll(): number;\n\n  /**\n   * @override\n   * @remarks `options` is unused\n   */\n  pasteObjects(position: Point, options?: {}): Promise<Wall[]>;\n\n  /**\n   * Pan the canvas view when the cursor position gets close to the edge of the frame\n   * @param event - The originating mouse movement event\n   * @param x     - The x-coordinate\n   * @param y     - The y-coordinate\n   */\n  protected _panCanvasEdge(event: MouseEvent, x: number, y: number): void | Promise<void>;\n\n  /**\n   * Get the endpoint coordinates for a wall placement, snapping to grid at a specified precision\n   * Require snap-to-grid until a redesign of the wall chaining system can occur.\n   * @param  point - The initial candidate point\n   * @param  snap  - Whether to snap to grid\n   *                 (default: `true`)\n   * @returns The endpoint coordinates [x,y]\n   */\n  protected _getWallEndpointCoordinates(point: Point, { snap }?: { snap?: boolean }): PointArray;\n\n  /**\n   * The Scene Controls tools provide several different types of prototypical Walls to choose from\n   * This method helps to translate each tool into a default wall data configuration for that type\n   * @param tool - The active canvas tool\n   */\n  protected _getWallDataFromActiveTool(tool: string):\n    | {\n        move: ValueOf<typeof foundry.CONST['WALL_MOVEMENT_TYPES']>;\n        sense: ValueOf<typeof foundry.CONST['WALL_SENSE_TYPES']>;\n        door?: ValueOf<typeof foundry.CONST['WALL_DOOR_TYPES']>;\n      }\n    | Wall['data'];\n\n  /** @override */\n  protected _onClickLeft(event: PIXI.InteractionEvent): void;\n\n  /** @override */\n  protected _onDragLeftStart(event: PIXI.InteractionEvent): void;\n\n  /** @override */\n  protected _onDragLeftMove(event: PIXI.InteractionEvent): void;\n\n  /** @override */\n  protected _onDragLeftDrop(event: PIXI.InteractionEvent): void;\n\n  /** @override */\n  protected _onDragLeftCancel(event: PointerEvent): void;\n\n  /** @override */\n  protected _onClickRight(event: PIXI.InteractionEvent): void;\n\n  /**\n   * Test a single Ray against a single Wall\n   * @param ray  - The Ray being cast\n   * @param wall - The Wall against which to test\n   * @returns An intersection, if one occurred\n   */\n  static testWall(ray: Ray, wall: Wall): RayIntersection;\n\n  /**\n   * Identify the closest collision point from an array of collisions\n   * @param collisions - An array of intersection points\n   * @returns The closest blocking intersection\n   */\n  static getClosestCollision(collisions: NonNullable<RayIntersection>[]): RayIntersection;\n\n  /**\n   * Get the set of wall collisions for a given Ray\n   * @param ray           - The Ray being tested\n   * @param blockMovement - Test against walls which block movement?\n   * @param blockSenses   - Test against walls which block senses?\n   * @param mode          - The return mode of the test, one of \"all\", \"closest\", or \"any\"\n   * @param _performance  - An internal performance object used for debugging\n   * @returns An array of collisions, if mode is \"all\"; The closest collision, if mode is \"closest\"; Whether any collision occurred if mode is \"any\"\n   */\n  static getRayCollisions(\n    ray: Ray,\n    {\n      blockMovement,\n      blockSenses,\n      mode\n    }?: { blockMovement: boolean; blockSenses: boolean; mode: 'all' | 'closest' | 'any'; _performance: unknown }\n  ): Record<`${string},${string}`, RayIntersection>[] | Record<`${string},${string}`, RayIntersection> | boolean;\n}\n"
    ]
  