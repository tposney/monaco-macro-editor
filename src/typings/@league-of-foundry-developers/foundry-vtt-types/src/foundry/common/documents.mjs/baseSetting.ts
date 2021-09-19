
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\baseSetting.d.ts",
      "import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import*as data from'../data/data.mjs';/**\n * The base Setting model definition which defines common behavior of an Setting document between both client and server.\n */export declare class BaseSetting extends Document<data.SettingData>{/** @override */static get schema():typeof data.SettingData;/** @override */static get metadata():Merge<\nDocumentMetadata,{name:'Setting';collection:'settings';label:'DOCUMENT.Setting';isPrimary:true;permissions:{create:'SETTINGS_MODIFY';update:'SETTINGS_MODIFY';delete:'SETTINGS_MODIFY';};}>;/**\n * A convenience reference to the key which identifies this game setting.\n */get key():string;/**\n * The parsed value of the saved setting\n */get value():unknown;}"
    ]
  