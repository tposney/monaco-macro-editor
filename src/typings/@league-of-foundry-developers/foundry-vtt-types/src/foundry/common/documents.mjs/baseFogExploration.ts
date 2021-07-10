
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseFogExploration.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { BaseUser } from './baseUser';\n\n/**\n * The base FogExploration model definition which defines common behavior of an FogExploration document between both client and server.\n */\nexport declare class BaseFogExploration extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'FogExploration';\n      collection: 'fog';\n      label: 'DOCUMENT.FogExploration';\n      isPrimary: true;\n      permissions: {\n        create: 'PLAYER';\n        update: (user: BaseUser, doc: any, data?: object) => boolean;\n        delete: (user: BaseUser, doc: any, data?: object) => boolean;\n      };\n    }\n  >;\n}\n"
    ]
  