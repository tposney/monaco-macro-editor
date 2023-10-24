
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseRollTable.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { BaseTableResult } from './baseTableResult';\n\n/**\n * The base RollTable model definition which defines common behavior of an RollTable document between both client and server.\n */\nexport declare class BaseRollTable extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'RollTable';\n      collection: 'tables';\n      label: 'DOCUMENT.RollTable';\n      embedded: {\n        TableResult: typeof BaseTableResult;\n      };\n      isPrimary: true;\n    }\n  >;\n}\n"
    ]
  