
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/documents.mjs/baseJournalEntry.d.ts",
      "import * as data from '../data/data.mjs';\nimport { Document } from '../abstract/module.mjs';\nimport { DocumentMetadata } from '../abstract/document.mjs';\n\n/**\n * The base JournalEntry model definition which defines common behavior of an JournalEntry document between both client and server.\n */\nexport declare class BaseJournalEntry extends Document<data.JournalEntryData> {\n  static get schema(): typeof data.JournalEntryData;\n\n  static get metadata(): Merge<\n    DocumentMetadata,\n    {\n      name: 'JournalEntry';\n      collection: 'journal';\n      label: 'DOCUMENT.JournalEntry';\n      isPrimary: true;\n      permissions: {\n        create: 'JOURNAL_CREATE';\n      };\n    }\n  >;\n}\n"
    ]
  