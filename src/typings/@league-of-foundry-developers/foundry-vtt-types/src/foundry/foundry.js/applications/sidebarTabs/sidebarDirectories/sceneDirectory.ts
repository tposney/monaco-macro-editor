
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\sidebarTabs\\sidebarDirectories\\sceneDirectory.d.ts",
      "/**\n * A directory listing of active game scenes\n */declare class SceneDirectory extends SidebarDirectory{/**\n * @override\n */static get entity():'Scene';/**\n * @override\n * @see {@link Game.scenes}\n */static get collection():Game['scenes'];/**\n * @override\n * @remarks This is never called.\n */protected _onCreate(event:Event):Promise<Scene>;/**\n * @override\n */protected _getEntryContextOptions():ContextMenuEntry[];}"
    ]
  