
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseTile.d.ts",
      "import { ConfiguredDocumentClass } from '../../../types/helperTypes';\nimport { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport * as data from '../data/data.mjs';\nimport { BaseScene } from './baseScene';\n\n/**\n * The base Tile model definition which defines common behavior of an Tile document between both client and server.\n */\nexport declare class BaseTile extends Document<data.TileData, InstanceType<ConfiguredDocumentClass<typeof BaseScene>>> {\n  /** @override */\n  static get schema(): typeof data.TileData;\n\n  /** @override */\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Tile';\n      collection: 'tiles';\n      label: 'DOCUMENT.Tile';\n      isEmbedded: true;\n    }\n  >;\n}\n"
    ]
  