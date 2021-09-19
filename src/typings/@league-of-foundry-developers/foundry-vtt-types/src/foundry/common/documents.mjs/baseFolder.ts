
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseFolder.d.ts",
      "import*as data from'../data/data.mjs';import{Document}from'../abstract/module.mjs';import{DocumentMetadata}from'../abstract/document.mjs';/**\n * The base Folder model definition which defines common behavior of an Folder document between both client and server.\n */export declare class BaseFolder extends Document<data.FolderData,BaseFolder>{static get schema():typeof data.FolderData;static get metadata():Merge<\nDocumentMetadata,{name:'Folder';collection:'folders';label:'DOCUMENT.Folder';isPrimary:true;types:typeof CONST.FOLDER_ENTITY_TYPES;}>;}"
    ]
  