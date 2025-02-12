import { attachMonacoEditor, registerTypes, setupMonaco } from "./editor";
import { furnaceFix } from "./fixes/furnace";
import { bailOnMacroEditor } from "./fixes/macroeditor";
import { registerSettings, settings } from "./settings";


Hooks.once("init", async function () {
  registerSettings();
  if (settings.enableMonacoEditor) {
    if(!settings.delayedLoading)
      await setupMonaco()
  }
});

Hooks.on("monaco-editor.ready", async (register: typeof registerTypes) => {
  console.log("Monaco Editor | Load types")
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

Hooks.on("renderMacroConfig", (app: any, html: any, data: any) => {
  let { form } = app;
  if (!form) form = app.element;
  const windowSizes = {
    "small": { width: 900, height: 650 },
    "medium": { width: 1500, height: 1000 },
    "large": { width: 1800, height: 1200 }
  }
  //@ts-expect-error
  const size: any = windowSizes[settings.windowSize] ?? "medium";
  app.setPosition(size);
  if (settings.enableMonacoEditor) {
    bailOnMacroEditor()
    furnaceFix(form);
    attachMonacoEditor(form)
  }
});
