export function registerSettings() {
  if ("settings" in game) {
    game.settings.register("monaco-editor", "theme", {
      scope: "client",
      config: true,
      name: "Theme",
      type: String,
      default: "vs-dark",
      choices: {
        "vs-dark": "Dark",
        vs: "Light",
        "hc-black": "High Contrast",
      },
    });

    game.settings.register("monaco-editor", "fontFamily", {
      scope: "client",
      config: true,
      name: "Font Family",
      default: `Jetbrains Mono, Fira Code, sanserif`,
      type: String,
    });

    game.settings.register("monaco-editor", "fontLigatures", {
      scope: "client",
      config: true,
      name: "Font Ligatures",
      type: Boolean,
      default: true,
    });

    game.settings.register("monaco-editor", "fontSize", {
      scope: "client",
      config: true,
      name: "Font Size",
      type: Number,
      default: 12,
    });

    game.settings.register("monaco-editor", "wordWrap", {
      scope: "client",
      config: true,
      name: "Word Wrap",
      type: Boolean,
      default: true,
    });
  }
}
