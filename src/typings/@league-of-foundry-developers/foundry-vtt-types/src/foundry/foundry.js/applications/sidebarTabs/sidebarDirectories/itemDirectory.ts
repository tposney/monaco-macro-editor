
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\sidebarTabs\\sidebarDirectories\\itemDirectory.d.ts",
      "/**\n * A directory of Item entities in the Sidebar\n */declare class ItemDirectory extends SidebarDirectory{/**\n * @override\n */static get entity():'Item';/**\n * @override\n * @see {@link Game.items}\n */static get collection():Game['items'];/**\n * @param selector - (unused)\n * @override\n */protected _canDragStart(selector:string|null):boolean;/**\n * @param selector - (unused)\n * @override\n */protected _canDragDrop(selector:string|null):boolean;/**\n * @override\n */protected _getEntryContextOptions():ContextMenuEntry[];}"
    ]
  