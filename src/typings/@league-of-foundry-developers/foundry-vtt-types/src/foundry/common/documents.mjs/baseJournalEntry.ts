
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseJournalEntry.d.ts",
      "import*as data from'../data/data.mjs';import{Document}from'../abstract/module.mjs';import{DocumentMetadata}from'../abstract/document.mjs';/**\n * The base JournalEntry model definition which defines common behavior of an JournalEntry document between both client and server.\n */export declare class BaseJournalEntry extends Document<data.JournalEntryData>{static get schema():typeof data.JournalEntryData;static get metadata():Merge<\nDocumentMetadata,{name:'JournalEntry';collection:'journal';label:'DOCUMENT.JournalEntry';isPrimary:true;permissions:{create:'JOURNAL_CREATE';};}>;}"
    ]
  