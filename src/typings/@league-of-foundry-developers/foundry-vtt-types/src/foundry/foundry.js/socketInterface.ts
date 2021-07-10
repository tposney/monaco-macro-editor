
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\socketInterface.d.ts",
      "declare class SocketInterface {\n  /**\n   * Standardize the way that socket messages are dispatched and their results are handled\n   * @param eventName - The socket event name being handled\n   * @param request   - Data provided to the Socket event\n   * @returns A Promise which resolves to the SocketResponse\n   */\n  static dispatch(eventName: string, request: SocketInterface.Request): Promise<SocketInterface.Response>;\n\n  /* -------------------------------------------- */\n\n  /**\n   * Handle an error returned from the database, displaying it on screen and in the console\n   * @param err - The provided Error message\n   */\n  protected static _handleError(err: Error): Error;\n}\n\ndeclare namespace SocketInterface {\n  namespace Requests {\n    interface ModifyEmbeddedDocument {\n      action: Action;\n      data: any; // TODO: add generics to this\n      options: Entity.CreateOptions;\n      parentId: string;\n      parentType: string;\n      type: string;\n    }\n\n    // TODO: add remaining actions\n    type Action = 'create' | 'update' | 'delete';\n  }\n\n  namespace Responses {\n    interface ModifyEmbeddedDocument {\n      request: Requests.ModifyEmbeddedDocument;\n      result: any[]; // TODO\n      userId: string;\n    }\n  }\n\n  // TODO: go through all SocketInterface.dispatch calls and collect requests\n  type Request = Requests.ModifyEmbeddedDocument;\n\n  type Response = Responses.ModifyEmbeddedDocument;\n}\n"
    ]
  