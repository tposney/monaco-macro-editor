
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseTableResult.d.ts",
      "import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import{BaseUser}from'./baseUser';/**\n * The base TableResult model definition which defines common behavior of an TableResult document between both client and server.\n */export declare class BaseTableResult extends Document<any,any>{static get metadata():Merge<\nDocumentMetadata,{name:'TableResult';collection:'results';label:'DOCUMENT.TableResult';types:typeof CONST.TABLE_RESULT_TYPES;permissions:{update:(user:BaseUser,doc:any,data?:object)=>boolean;};}>;}"
    ]
  