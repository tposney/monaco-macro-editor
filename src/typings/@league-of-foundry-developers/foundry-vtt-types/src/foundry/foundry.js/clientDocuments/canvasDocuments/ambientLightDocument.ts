
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\canvasDocuments\\ambientLightDocument.d.ts",
      "declare global{/**\n * The client-side AmbientLight document which extends the common BaseAmbientLight model.\n * Each AmbientLight document contains AmbientLightData which defines its data schema.\n *\n * @see {@link data.AmbientLightData}             The AmbientLight data schema\n * @see {@link documents.Scene}                   The Scene document type which contains AmbientLight embedded documents\n * @see {@link applications.LightConfig}          The AmbientLight configuration application\n */class AmbientLightDocument extends CanvasDocumentMixin(foundry.documents.BaseAmbientLight){/**\n * Is this ambient light source global in nature?\n */get isGlobal():boolean;}}export{};"
    ]
  