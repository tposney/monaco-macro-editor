
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseAmbientLight.d.ts",
      "import{ConfiguredDocumentClass}from'../../../types/helperTypes';import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import*as data from'../data/data.mjs';import{BaseScene}from'./baseScene';/**\n * The base AmbientLight model definition which defines common behavior of an AmbientLight document between both client and server.\n */export declare class BaseAmbientLight extends Document<\ndata.AmbientLightData,InstanceType<ConfiguredDocumentClass<typeof BaseScene>>>{static get schema():typeof data.AmbientLightData;static get metadata():Merge<\nDocumentMetadata,{name:'AmbientLight';collection:'lights';label:'DOCUMENT.AmbientLight';isEmbedded:true;}>;/** @override */protected _initialize():void;}"
    ]
  