
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseTableResult.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { BaseUser } from './baseUser';\n\n/**\n * The base TableResult model definition which defines common behavior of an TableResult document between both client and server.\n */\nexport declare class BaseTableResult extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'TableResult';\n      collection: 'results';\n      label: 'DOCUMENT.TableResult';\n      types: typeof CONST.TABLE_RESULT_TYPES;\n      permissions: {\n        update: (user: BaseUser, doc: any, data?: object) => boolean;\n      };\n    }\n  >;\n}\n"
    ]
  