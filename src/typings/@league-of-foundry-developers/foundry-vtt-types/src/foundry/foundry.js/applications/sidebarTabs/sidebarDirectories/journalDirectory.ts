
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\sidebarTabs\\sidebarDirectories\\journalDirectory.d.ts",
      "/**\n * A directory list of JournalEntry entities in the Sidebar\n */declare class JournalDirectory extends SidebarDirectory<JournalDirectory.Options>{/**\n * @override\n */static get defaultOptions():JournalDirectory.Options;/**\n * @override\n */get title():string;/**\n * @override\n */static get entity():'JournalEntry';/**\n * @override\n * @see {@link Game.journal}\n */static get collection():Game['journal'];/**\n * @override\n */protected _getEntryContextOptions():ContextMenuEntry[];}declare namespace JournalDirectory{interface Options extends SidebarDirectory.Options{/**\n * @defaultValue `'journal'`\n */\nid:string;/**\n * @defaultValue `'templates/sidebar/journal-directory.html'`\n */\ntemplate:string;}}"
    ]
  