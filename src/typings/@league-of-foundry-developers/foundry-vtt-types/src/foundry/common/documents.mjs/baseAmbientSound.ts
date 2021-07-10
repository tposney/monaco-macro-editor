
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseAmbientSound.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\n\n/**\n * The base AmbientSound model definition which defines common behavior of an AmbientSound document between both client and server.\n */\nexport declare class BaseAmbientSound extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'AmbientSound';\n      collection: 'sounds';\n      label: 'DOCUMENT.AmbientSound';\n      isEmbedded: true;\n      types: ['l', 'g'];\n    }\n  >;\n}\n"
    ]
  