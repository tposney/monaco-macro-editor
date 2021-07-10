
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\basePlaylistSound.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\n\n/**\n * The PlaylistSound model definition which defines common behaviour of a PlaylistSound document between both client and server.\n */\nexport declare class BasePlaylistSound extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'PlaylistSound';\n      collection: 'sounds';\n      label: 'DOCUMENT.PlaylistSound';\n      isEmbedded: true;\n    }\n  >;\n}\n"
    ]
  