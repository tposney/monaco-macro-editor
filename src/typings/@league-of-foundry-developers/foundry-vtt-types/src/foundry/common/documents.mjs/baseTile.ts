
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseTile.d.ts",
      "import{ConfiguredDocumentClass}from'../../../types/helperTypes';import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import*as data from'../data/data.mjs';import{BaseScene}from'./baseScene';/**\n * The base Tile model definition which defines common behavior of an Tile document between both client and server.\n */export declare class BaseTile extends Document<data.TileData,InstanceType<ConfiguredDocumentClass<typeof BaseScene>>>{/** @override */static get schema():typeof data.TileData;/** @override */static get metadata():Merge<\nDocumentMetadata,{name:'Tile';collection:'tiles';label:'DOCUMENT.Tile';isEmbedded:true;}>;}"
    ]
  