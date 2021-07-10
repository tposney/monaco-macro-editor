
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseNote.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\n\n/**\n * The base Note model definition which defines common behavior of an Note document between both client and server.\n */\nexport declare class BaseNote extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Note';\n      collection: 'notes';\n      label: 'DOCUMENT.Note';\n      isEmbedded: true;\n    }\n  >;\n}\n"
    ]
  