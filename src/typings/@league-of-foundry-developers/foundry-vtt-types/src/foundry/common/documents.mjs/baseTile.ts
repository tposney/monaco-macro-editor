
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseTile.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\n\n/**\n * The base Tile model definition which defines common behavior of an Tile document between both client and server.\n */\nexport declare class BaseTile extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Tile';\n      collection: 'tiles';\n      label: 'DOCUMENT.Tile';\n      isEmbedded: true;\n    }\n  >;\n}\n"
    ]
  