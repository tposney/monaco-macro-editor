import * as monaco from "monaco-editor";
import { attachMonacoEditor, registerTypes, setupMonaco } from "./editor";
import { furnaceFix } from "./fixes/furnace";
import { registerSettings } from "./settings";


Hooks.once("init", async function () {
  registerSettings();
  setupMonaco()

  Hooks.callAll("monaco-editor.ready", registerTypes);
});

Hooks.on("monaco-editor.ready", async (register: typeof registerTypes) => {
  // Load in definitions from @league-of-foundry-developers/foundry-vtt-types
  const context = require.context("./typings", true, /\.ts$/i, "lazy-once");
  const results = await Promise.allSettled(
    context.keys().map(async (item) => {
      const {
        default: [path, content],
      } = await context(item);
      return register(path, content);
    })
  );

  const failed = results.filter(({ status }) => status === "rejected");
  if (failed.length) {
    throw new Error(`Monaco Editor: Failed to get ${failed.length} types`);
  }
});

Hooks.on("renderMacroConfig", ({ form }: { form: HTMLFormElement }) => {
  furnaceFix(form);
  attachMonacoEditor(form)
});
