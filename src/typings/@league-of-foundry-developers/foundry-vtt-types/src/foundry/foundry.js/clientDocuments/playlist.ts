
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\clientDocuments\\playlist.d.ts",
      "// TODO\ndeclare global {\n  /**\n   * The client-side Playlist document which extends the common BasePlaylist abstraction.\n   * Each Playlist document contains PlaylistData which defines its data schema.\n   *\n   * @see {@link data.PlaylistData}               The Playlist data schema\n   * @see {@link documents.Playlists}             The world-level collection of Playlist documents\n   * @see {@link embedded.PlaylistSound}          The PlaylistSound embedded document within a parent Playlist\n   * @see {@link applications.PlaylistConfig}     The Playlist configuration application\n   *\n   * @param data - Initial data provided to construct the Playlist document\n   */\n  class Playlist extends ClientDocumentMixin(foundry.documents.BasePlaylist) {}\n}\n\nexport {};\n"
    ]
  