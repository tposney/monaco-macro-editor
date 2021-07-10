
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\basePlaylist.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { BasePlaylistSound } from './basePlaylistSound';\n\n/**\n * The base Playlist model definition which defines common behavior of an Playlist document between both client and server.\n */\nexport declare class BasePlaylist extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Playlist';\n      collection: 'playlists';\n      label: 'DOCUMENT.Playlist';\n      embedded: {\n        PlaylistSound: typeof BasePlaylistSound;\n      };\n      isPrimary: true;\n    }\n  >;\n}\n"
    ]
  