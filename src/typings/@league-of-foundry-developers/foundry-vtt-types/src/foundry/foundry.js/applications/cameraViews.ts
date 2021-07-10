
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\cameraViews.d.ts",
      "// TODO: Remove when updating this class!!!\n// eslint-disable-next-line\n// @ts-nocheck\n\n/**\n * The Camera UI View that displays all the camera feeds as individual video elements.\n * @typeParam P - the type of the options object\n */\ndeclare class CameraViews<P extends Application.Options = Application.Options> extends Application<P> {\n  /**\n   * @param webrtc - The WebRTC Implementation to display\n   *                 (unused)\n   */\n  constructor(webrtc?: any, options?: Partial<P>);\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * mergeObject(super.defaultOptions, {\n   *   id: \"camera-views\",\n   *   template: \"templates/hud/camera-views.html\",\n   *   popOut: false\n   * });\n   * ```\n   */\n  static get defaultOptions(): typeof Application['defaultOptions'];\n\n  /**\n   * A reference to the master AV orchestrator instance\n   */\n  get webrtc(): Game['webrtc'];\n\n  /**\n   * Obtain a reference to the div.camera-view which is used to portray a given Foundry User.\n   * @param userId - The ID of the User entity\n   */\n  getUserCameraView(userId: string): HTMLElement | null;\n\n  /**\n   * Obtain a reference to the video.user-camera which displays the video channel for a requested Foundry User.\n   * If the user is not broadcasting video this will return null.\n   * @param userId - The ID of the User entity\n   */\n  getUserVideoElement(userId: string): HTMLVideoElement | null;\n\n  /**\n   * Sets whether a user is currently speaking or not\n   *\n   * @param userId   - The ID of the user\n   * @param speaking - Whether the user is speaking\n   */\n  setUserIsSpeaking(userId: string, speaking: boolean): void;\n\n  /**\n   * Extend the render logic to first check whether a render is necessary based on the context\n   * If a specific context was provided, make sure an update to the navigation is necessary before rendering\n   */\n  render(force?: boolean, context?: Application.RenderOptions): Application['render'];\n\n  /** @override */\n  protected _render(force?: boolean, options?: Application.RenderOptions): Promise<void>;\n\n  /**\n   * @param options - (unused)\n   * @override\n   */\n  getData(options?: Application.RenderOptions): CameraViews.Data;\n\n  maxZ: number;\n\n  /**\n   * Prepare rendering data for a single user\n   */\n  protected _getDataForUser(userId: string, settings: AVSettings.UserSettings): CameraViews.Data.User | null;\n\n  /**\n   * A custom sorting function that orders/arranges the user display frames\n   */\n  protected static _sortUsers(a: CameraViews.Data.User, b: CameraViews.Data.User): number;\n\n  /** @override */\n  activateListeners(html: JQuery): void;\n\n  /**\n   * On hover in a camera container, show/hide the controls.\n   * @param event - The original mouseover or mouseout hover event\n   */\n  protected _onCameraViewHover(event: JQuery.MouseEnterEvent | JQuery.MouseLeaveEvent): void;\n\n  /**\n   * On clicking on a toggle, disable/enable the audio or video stream.\n   * @param event - The originating click event\n   */\n  protected _onClickControl(event: JQuery.ClickEvent): Promise<void>;\n\n  /**\n   * Change volume control for a stream\n   * @param event - The originating change event from interaction with the range input\n   */\n  protected _onVolumeChange(event: JQuery.ChangeEvent): void;\n\n  /**\n   * Dynamically refresh the state of a single camera view\n   * @param view - The view container div\n   */\n  protected _refreshView(view: HTMLElement): void;\n\n  /**\n   * Render changes needed to the PlayerList ui.\n   * Show/Hide players depending on option.\n   */\n  protected _setPlayerListVisibility(): void;\n\n  /**\n   * Get the icon class that should be used for various action buttons with different toggled states.\n   * The returned icon should represent the visual status of the NEXT state (not the CURRENT state).\n   *\n   * @param action - The named av-control button action\n   * @param state  - The CURRENT action state.\n   * @returns The icon that represents the NEXT action state.\n   */\n  protected _getToggleIcon(action: string, state?: boolean): null;\n\n  /**\n   * Get the text title that should be used for various action buttons with different toggled states.\n   * The returned title should represent the tooltip of the NEXT state (not the CURRENT state).\n   *\n   * @param action - The named av-control button action\n   * @param state - The CURRENT action state.\n   * @returns The icon that represents the NEXT action state.\n   */\n  protected _getToggleTooltip(action: string, state: boolean): string;\n\n  /**\n   * Show or hide UI control elements\n   * This replaces the use of jquery.show/hide as it simply adds a class which has display:none\n   * which allows us to have elements with display:flex which can be hidden then shown without\n   * breaking their display style.\n   * This will show/hide the toggle buttons, volume controls and overlay sidebars\n   * @param container - The container for which to show/hide control elements\n   * @param show      - Whether to show or hide the controls\n   * @param selector  - Override selector to specify which controls to show or hide\n   *                    (default: `'.control-bar'`)\n   */\n  protected _toggleControlVisibility(container: HTMLElement, show: boolean, selector?: string): void;\n}\n\ndeclare namespace CameraViews {\n  interface Data {\n    self: Game['user'];\n    users: CameraViews.Data.User[];\n    dockClass: string;\n    muteAll: boolean;\n  }\n\n  namespace Data {\n    interface User {\n      user: globalThis.User;\n      id: globalThis.User['id'];\n      local: globalThis.User['isSelf'];\n      name: globalThis.User['name'];\n      color: globalThis.User['data']['color'];\n      colorAlpha: ReturnType<typeof foundry.utils.hexToRGBAString>;\n      charname: string;\n      avatar: globalThis.User['avatar'];\n      settings: AVSettings.UserSettings;\n      volume: ReturnType<typeof AudioHelper['volumeToInput']>;\n      cameraViewClass: ReturnType<Array<string>['filterJoin']>;\n    }\n  }\n}\n"
    ]
  