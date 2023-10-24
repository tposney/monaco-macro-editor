
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseAmbientSound.d.ts",
      "import { ConfiguredDocumentClass } from '../../../types/helperTypes';\nimport { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport * as data from '../data/data.mjs';\nimport { BaseScene } from './baseScene';\n\n/**\n * The base AmbientSound model definition which defines common behavior of an AmbientSound document between both client and server.\n */\nexport declare class BaseAmbientSound extends Document<\n  data.AmbientSoundData,\n  InstanceType<ConfiguredDocumentClass<typeof BaseScene>>\n> {\n  static get schema(): typeof data.AmbientSoundData;\n\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'AmbientSound';\n      collection: 'sounds';\n      label: 'DOCUMENT.AmbientSound';\n      isEmbedded: true;\n      types: ['l', 'g'];\n    }\n  >;\n}\n"
    ]
  