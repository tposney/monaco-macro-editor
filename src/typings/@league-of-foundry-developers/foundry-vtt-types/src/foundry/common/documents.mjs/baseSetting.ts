
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseSetting.d.ts",
      "import { DocumentMetadata } from '../abstract/document.mjs';\nimport { Document } from '../abstract/module.mjs';\n\n/**\n * The base Setting model definition which defines common behavior of an Setting document between both client and server.\n */\nexport declare class BaseSetting extends Document<any, any> {\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'Setting';\n      collection: 'settings';\n      label: 'DOCUMENT.Setting';\n      isPrimary: true;\n      permissions: {\n        create: 'SETTINGS_MODIFY';\n        update: 'SETTINGS_MODIFY';\n        delete: 'SETTINGS_MODIFY';\n      };\n    }\n  >;\n}\n"
    ]
  