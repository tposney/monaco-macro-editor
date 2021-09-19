
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseAmbientSound.d.ts",
      "import{ConfiguredDocumentClass}from'../../../types/helperTypes';import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import*as data from'../data/data.mjs';import{BaseScene}from'./baseScene';/**\n * The base AmbientSound model definition which defines common behavior of an AmbientSound document between both client and server.\n */export declare class BaseAmbientSound extends Document<\ndata.AmbientSoundData,InstanceType<ConfiguredDocumentClass<typeof BaseScene>>>{static get schema():typeof data.AmbientSoundData;static get metadata():Merge<\nDocumentMetadata,{name:'AmbientSound';collection:'sounds';label:'DOCUMENT.AmbientSound';isEmbedded:true;types:['l','g'];}>;}"
    ]
  