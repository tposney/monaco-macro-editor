
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\gridConfig.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * A tool for fine tuning the grid in a Scene\n * @typeParam P - the type of the options object\n */\ndeclare class GridConfig<P extends FormApplication.Options = FormApplication.Options> extends FormApplication<\n  P,\n  GridConfig.Data,\n  Scene\n> {\n  constructor(scene: Scene, sheet: GridConfig['sheet'], options?: Partial<P>);\n\n  /**\n   * Track the Scene Configuration sheet reference\n   */\n  sheet: SceneConfig;\n\n  /**\n   * The counter-factual dimensions being evaluated\n   * @defaultValue `{}`\n   */\n  protected _dimensions: Canvas.Dimensions | {};\n\n  /**\n   * A reference to the bound key handler function so it can be removed\n   * @defaultValue `null`\n   */\n  protected _keyHandler: ((event: KeyboardEvent) => void) | null;\n\n  /**\n   * A reference to the bound mousewheel handler function so it can be removed\n   * @defaultValue `null`\n   */\n  protected _wheelHandler: ((event: WheelEvent) => void) | null;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   id: \"grid-config\",\n   *   template: \"templates/scene/grid-config.html\",\n   *   title: game.i18n.localize(\"SCENES.GridConfigTool\"),\n   *   width: 480,\n   *   height: \"auto\",\n   *   closeOnSubmit: true,\n   *   submitOnChange: true\n   * });\n   * ```\n   */\n  static get defaultOptions(): typeof FormApplication['defaultOptions'];\n\n  /**\n   * @override\n   */\n  getData(options?: Application.RenderOptions): GridConfig.Data;\n\n  /**\n   * @override\n   */\n  protected _render(force?: boolean, options?: Application.RenderOptions): Promise<void>;\n\n  /**\n   * @override\n   */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * @override\n   */\n  close(options?: FormApplication.CloseOptions): ReturnType<FormApplication['close']>;\n\n  /**\n   * Handle resetting the form and re-drawing back to the original dimensions\n   * @param event - The original keydown event\n   */\n  protected _onKeyDown(event: KeyboardEvent): void;\n\n  /**\n   * Handle resetting the form and re-drawing back to the original dimensions\n   * @param event - The original wheel event\n   */\n  protected _onWheel(event: WheelEvent): void;\n\n  /**\n   * Handle resetting the form and re-drawing back to the original dimensions\n   * @param event - The original click event\n   */\n  protected _onReset(event: JQuery.ClickEvent): void;\n\n  /**\n   * Scale the background size relative to the grid size\n   * @param delta - The directional change in background size\n   */\n  protected _scaleBackgroundSize(delta: number): void;\n\n  /**\n   * Scale the grid size relative to the background image.\n   * When scaling the grid size in this way, constrain the allowed values between 50px and 300px.\n   * @param delta - The grid size in pixels\n   */\n  protected _scaleGridSize(delta: number): void;\n\n  /**\n   * Shift the background image relative to the grid layer\n   * @param deltaX - The number of pixels to shift in the x-direction\n   *                 (default: `0`)\n   * @param deltaY - The number of pixels to shift in the y-direction\n   *                 (default: `0`)\n   */\n  protected _shiftBackground({\n    deltaX,\n    deltaY\n  }?: {\n    deltaX?: number;\n    deltaY?: number;\n  }): ReturnType<GridConfig['_refresh']>;\n\n  /**\n   * Temporarily refresh the display of the BackgroundLayer and GridLayer for the new pending dimensions\n   * @param background - Refresh the background display?\n   *                     (default: `false`)\n   * @param grid       - Refresh the grid display?\n   *                     (default: `false`)\n   */\n  protected _refresh({ background, grid }?: { background?: boolean; grid?: boolean }): void;\n\n  /**\n   * @override\n   */\n  protected _onChangeInput(event: JQuery.ChangeEvent): void;\n\n  /**\n   * @param event - (unused)\n   * @override\n   */\n  protected _updateObject(event: Event, formData: GridConfig.FormData): ReturnType<Scene['update']>;\n}\n\ndeclare namespace GridConfig {\n  interface Data {\n    gridTypes: ReturnType<typeof SceneConfig['_getGridTypes']>;\n    scale: number;\n    scene: Scene.Data;\n  }\n\n  type FormData = Pick<Scene.Data, 'gridType'> & {\n    grid: Scene.Data['grid'] | null;\n    scale: number | null;\n    shiftX: Scene.Data['shiftX'] | null;\n    shiftY: Scene.Data['shiftY'] | null;\n  };\n}\n"
    ]
  