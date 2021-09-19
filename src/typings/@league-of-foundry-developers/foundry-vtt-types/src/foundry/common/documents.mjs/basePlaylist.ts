
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\documents.mjs\\basePlaylist.d.ts",
      "import{DocumentMetadata}from'../abstract/document.mjs';import{Document}from'../abstract/module.mjs';import{BasePlaylistSound}from'./basePlaylistSound';/**\n * The base Playlist model definition which defines common behavior of an Playlist document between both client and server.\n */export declare class BasePlaylist extends Document<any,any>{static get metadata():Merge<\nDocumentMetadata,{name:'Playlist';collection:'playlists';label:'DOCUMENT.Playlist';embedded:{PlaylistSound:typeof BasePlaylistSound;};isPrimary:true;}>;}"
    ]
  