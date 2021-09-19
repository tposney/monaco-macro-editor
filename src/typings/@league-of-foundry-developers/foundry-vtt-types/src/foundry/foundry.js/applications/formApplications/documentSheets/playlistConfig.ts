
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\applications\\formApplications\\documentSheets\\playlistConfig.d.ts",
      "/**\n * Playlist Configuration Sheet\n */declare class PlaylistConfig extends DocumentSheet<DocumentSheet.Options,PlaylistConfig.Data,Playlist>{/**\n * @defaultValue\n * ```typescript\n * const options = super.defaultOptions;\n * options.id = \"playlist-config\";\n * options.template = \"templates/playlist/edit-playlist.html\";\n * options.width = 360;\n * ```\n */static get defaultOptions():typeof DocumentSheet['defaultOptions'];/**\n * @override\n */get title():string;/**\n * @param options - (unused)\n * @override\n */\ngetData(options?:Partial<DocumentSheet.Options>):PlaylistConfig.Data;}declare namespace PlaylistConfig{interface Data extends foundry.utils.Duplicated<PlaylistConfig['object']['data']>{modes:Record<string,ValueOf<typeof foundry.CONST['PLAYLIST_MODES']>>;}}"
    ]
  