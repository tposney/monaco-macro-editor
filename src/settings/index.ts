import { titleCase } from "../utils/titleCase";

type JSPrimitive<T> = {
  constructor: ClientSettings.PartialSetting<T>["type"];
};

export function registerSettings() {
  defineSetting("theme", {
    default: "vs-dark",
    choices: {
      "vs-dark": "Dark",
      vs: "Light",
      "hc-black": "High Contrast",
    },
  });

  defineSetting("fontFamily", {
    default: `Jetbrains Mono, Fira Code, san-serif`,
    type: String,
  });

  defineSetting("fontLigatures", {
    type: Boolean,
    default: true,
  });

  defineSetting("fontSize", {
    type: Number,
    default: 12,
  });

  defineSetting("wordWrap", {
    type: Boolean,
    default: true,
  });
}

function defineSetting<T>(
  settingName: string,
  options: Partial<ClientSettings.PartialSetting<T>>
): void {
  if ("settings" in game) {
    game.settings.register<string, string, T>("monaco-macro-editor", settingName, {
      scope: "client",
      config: true,
      name: titleCase(settingName),
      type:
        options.type ??
        (options.default as unknown as JSPrimitive<T>).constructor ??
        undefined,
      ...options,
    });
  }
}
