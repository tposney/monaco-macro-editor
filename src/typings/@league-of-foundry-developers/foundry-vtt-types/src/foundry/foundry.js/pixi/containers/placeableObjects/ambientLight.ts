
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\containers\\placeableObjects\\ambientLight.d.ts",
      "import { BaseAmbientLight } from '../../../../common/documents.mjs';\n\ndeclare global {\n  /**\n   * An AmbientLight is an implementation of PlaceableObject which represents a dynamic light source within the Scene.\n   *\n   * @example\n   * ```typescript\n   * AmbientLight.create<AmbientLight>({\n   *   t: \"l\",\n   *   x: 1000,\n   *   y: 1000,\n   *   rotation: 0,\n   *   dim: 30,\n   *   bright: 15,\n   *   angle: 360,\n   *   tintColor: \"#FF0000\",\n   *   tintAlpha: 0.05\n   * });\n   * ```\n   */\n  class AmbientLight extends PlaceableObject<BaseAmbientLight> {\n    /**\n     * A reference to the PointSource object which defines this light source area of effect\n     */\n    source: PointSource;\n\n    /** @override */\n    static embeddedName: 'AmbientLight';\n\n    /** @override */\n    get bounds(): NormalizedRectangle;\n\n    /**\n     * Test whether a specific AmbientLight source provides global illumination\n     */\n    get global(): boolean;\n\n    /**\n     * Get the pixel radius of dim light emitted by this light source\n     */\n    get dimRadius(): number;\n\n    /**\n     * Get the pixel radius of bright light emitted by this light source\n     */\n    get brightRadius(): number;\n\n    /**\n     * Return whether the light source is currently visible in the scene\n     */\n    get isVisible(): boolean;\n\n    /** @override */\n    draw(): Promise<this>;\n\n    /**\n     * Draw the ControlIcon for the AmbientLight\n     */\n    protected _drawControlIcon(): ControlIcon;\n\n    /** @override */\n    refresh(): this;\n\n    /**\n     * The named identified for the source object associated with this light\n     */\n    get sourceId(): string;\n\n    /**\n     * Update the source object associated with this light\n     * @param defer   - Defer refreshing the LightingLayer to manually call that refresh later.\n     * @param deleted - Indicate that this light source has been deleted.\n     */\n    updateSource({ defer, deleted }?: { defer: boolean; deleted: boolean }): boolean | null | void;\n\n    /** @override */\n    protected _onCreate(): void;\n\n    /** @override */\n    protected _onUpdate(data: AmbientLight.Data): void;\n\n    /** @override */\n    protected _onDelete(): void;\n\n    /** @override */\n    protected _canHUD(user: User, event?: any): boolean;\n\n    /** @override */\n    protected _canConfigure(user: User, event?: any): boolean;\n\n    /** @override */\n    protected _onClickRight(event: PIXI.InteractionEvent): Promise<this>;\n\n    /** @override */\n    protected _onDragLeftStart(event: PIXI.InteractionEvent): void;\n\n    /** @override */\n    protected _onDragLeftMove(event: PIXI.InteractionEvent): void;\n\n    /** @override */\n    protected _onDragLeftCancel(event: MouseEvent): void;\n  }\n\n  namespace AmbientLight {\n    interface Data {\n      angle: number;\n      bright: number;\n      darknessThreshold: number;\n      dim: number;\n      hidden: boolean;\n      lightAnimation: { speed: number; intensity: number; type?: keyof typeof CONFIG['Canvas']['lightAnimations'] };\n      locked: boolean;\n      rotation: number;\n      t: foundry.CONST.SourceType;\n      tintAlpha: number;\n      x: number;\n      y: number;\n    }\n  }\n}\n"
    ]
  