import { updateActiveEditors } from "../editor";
import { NewOptionsType } from "../types";
import { titleCase } from "../utils/titleCase";

type JSPrimitive<T> = {
  constructor: ClientSettings.PartialSetting<T>["type"];
};

type Settings = {
  fontFamily: string;
  fontLigatures: string;
  theme: string;
  fontSize: number;
  wordWrap: boolean;
};

/**
 * Because I'm lazy
 */
export const settings: Settings = new Proxy({} as unknown as Settings, {
  get(_t: never, k: string) {
    if (!("settings" in game)) {
      throw new Error("Settings missing");
    }
    return game.settings.get("monaco-macro-editor", k);
  },
});


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
    onChange(value) {
      updateActiveEditors("wordWrap", value ? "on" : "off")
    }
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
      onChange: (value) => {
        updateActiveEditors(settingName as keyof NewOptionsType, value)
      },
      ...options,
    });
  }
}
