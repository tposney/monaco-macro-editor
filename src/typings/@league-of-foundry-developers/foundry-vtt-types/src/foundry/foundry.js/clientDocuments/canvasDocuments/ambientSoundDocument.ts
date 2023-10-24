
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/clientDocuments/canvasDocuments/ambientSoundDocument.d.ts",
      "/**\n * The client-side AmbientSound document which extends the common BaseAmbientSound model.\n * Each AmbientSound document contains AmbientSoundData which defines its data schema.\n *\n * @see {@link data.AmbientSoundData}             The AmbientSound data schema\n * @see {@link documents.Scene}                   The Scene document type which contains AmbientSound embedded documents\n * @see {@link applications.AmbientSoundConfig}   The AmbientSound configuration application\n */\ndeclare class AmbientSoundDocument extends CanvasDocumentMixin(foundry.documents.BaseAmbientSound) {\n  /**\n   * A convenience accessor for the sound type\n   */\n  get type(): foundry.data.AmbientSoundData['type'];\n}\n"
    ]
  