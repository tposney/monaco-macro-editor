
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseWall.d.ts",
      "import { ConfiguredDocumentClass } from '../../../types/helperTypes';\nimport { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { BaseScene } from './baseScene';\nimport { BaseUser } from './baseUser';\n\n/**\n * The base Wall model definition which defines common behavior of an Wall document between both client and server.\n */\nexport declare class BaseWall extends Document<any, InstanceType<ConfiguredDocumentClass<typeof BaseScene>>> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Wall';\n      collection: 'walls';\n      label: 'DOCUMENT.Wall';\n      isEmbedded: true;\n      permissions: {\n        update: (user: BaseUser, doc: any, data?: object) => boolean;\n      };\n    }\n  >;\n}\n"
    ]
  