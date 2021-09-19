
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseRollTable.d.ts",
      "import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import{BaseTableResult}from'./baseTableResult';/**\n * The base RollTable model definition which defines common behavior of an RollTable document between both client and server.\n */export declare class BaseRollTable extends Document<any,any>{static get metadata():Merge<\nDocumentMetadata,{name:'RollTable';collection:'tables';label:'DOCUMENT.RollTable';embedded:{TableResult:typeof BaseTableResult;};isPrimary:true;}>;}"
    ]
  