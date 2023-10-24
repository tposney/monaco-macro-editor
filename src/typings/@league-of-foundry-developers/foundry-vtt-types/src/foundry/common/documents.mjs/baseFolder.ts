
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseFolder.d.ts",
      "import * as data from '../data/data.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { DocumentMetadata } from '../abstract/document.mjs';\n\n/**\n * The base Folder model definition which defines common behavior of an Folder document between both client and server.\n */\nexport declare class BaseFolder extends Document<data.FolderData, BaseFolder> {\n  static get schema(): typeof data.FolderData;\n\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Folder';\n      collection: 'folders';\n      label: 'DOCUMENT.Folder';\n      isPrimary: true;\n      types: typeof CONST.FOLDER_ENTITY_TYPES;\n    }\n  >;\n}\n"
    ]
  