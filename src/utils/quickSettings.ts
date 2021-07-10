type Settings = {
  fontFamily: string;
  fontLigatures: string;
  theme: string;
  fontSize: number;
  wordWrap: boolean;
};

export const settings: Settings = new Proxy({} as unknown as Settings, {
  get(_t: never, k: string) {
    if (!("settings" in game)) {
      throw new Error("Settings missing");
    }
    return game.settings.get("monaco-editor", k);
  },
});
