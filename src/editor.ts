import { debounce } from "./utils/debounce";
import { settings } from "./settings";
import { NewOptionsType } from "./types";
import type * as MonacoTypings from "monaco-editor";

const activeEditors = new Set<MonacoTypings.editor.IStandaloneCodeEditor>();
export let monaco: typeof import("monaco-editor");

export function updateActiveEditors<T extends keyof NewOptionsType>(
  str: T,
  value: NewOptionsType[T]
) {
  for (const editor of activeEditors) {
    editor.updateOptions({
      [str]: value,
    });
  }
}

export let registerTypes = (_: string, __: string): void => {};

export async function setupMonaco() {
  // make sure that process.env exists before initializing monaco
  // @ts-ignore
  (globalThis.process ??= {}).env ??= {};

  monaco = await import("monaco-editor");


  // redefine registerTypes
  registerTypes = async function registerTypes(filePath: string, code: string) {
    const modifiedPath = filePath
      // strip relative
      .replace(/^(?:\.\.?\/)*/giu, "")
      // replace starting point with `injected/`
      .replace(/^\/?/gu, "injected/")
      // add/replace ending with `.d.ts`
      .replace(/(?:(:\.\d)?\.ts)?\$/giu, ".d.ts");

    monaco.languages.typescript.javascriptDefaults.addExtraLib(
      code,
      modifiedPath
    );

    monaco.editor.createModel(
      code,
      "typescript",
      monaco.Uri.parse(modifiedPath)
    );
  };

  monaco.languages.typescript.javascriptDefaults.setDiagnosticsOptions({
    noSemanticValidation: true,
    noSyntaxValidation: false,
  });

  // compiler options
  monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
    target: monaco.languages.typescript.ScriptTarget.ESNext,
    module: monaco.languages.typescript.ModuleKind.ESNext,
    moduleResolution: monaco.languages.typescript.ModuleResolutionKind.NodeJs,
    allowNonTsExtensions: true,
    allowJs: true,
    strict: false,
    lib: ["DOM", "ESNext"],
    types: ["injected/**/*.ts"],
    allowSyntheticDefaultImports: true,
    esModuleInterop: true,
  });

  if(settings.loadTypesImmediately) {
    Hooks.callAll("monaco-editor.ready", registerTypes);
  }
}

let typesLoaded = false
let monacoLoaded = false

export async function attachMonacoEditor(form: HTMLFormElement) {
  if(!monacoLoaded) {
     // settings is not available all the time so we need to do this in fairly dumb way
    if(!settings.delayedLoading) {
      monacoLoaded = true
    } else {
      await setupMonaco()
      monacoLoaded = true
    }
  }
  const oldTextArea = form.querySelector<HTMLTextAreaElement>(
    'textarea[name="command"]'
  );
  const commandLabel = form.querySelector<HTMLLabelElement>(
    ".form-group.command"
  );

  if(!typesLoaded) {
    typesLoaded = true
    Hooks.callAll("monaco-editor.ready", registerTypes);
  }

  if (!oldTextArea || !commandLabel) {
    throw new Error("Monaco Macro Editor | Couldn't find old text area");
  }

  oldTextArea.style.display = "none";

  const div = document.createElement("div");
  Object.assign(div.style, { width: "100%", height: "calc(100% - 24px)" });

  const select: HTMLSelectElement = form.querySelector('select[name="type"]')!;

  commandLabel.insertAdjacentElement("beforeend", div);

  const editor = monaco.editor.create(div, {
    // editor specific
    value: oldTextArea.value,
    language: select.value === "script" ? "javascript" : "plaintext",

    // permanent ones
    minimap: {
      enabled: false,
    },
    contextmenu: false,

    // user changeable
    wordWrap: settings.wordWrap ? "on" : "off",
    fontFamily: settings.fontFamily,
    fontLigatures: settings.fontLigatures,
    theme: settings.theme,
    fontSize: settings.fontSize,
  });

  activeEditors.add(editor);

  editor.onDidChangeModelContent(
    debounce(() => {
      oldTextArea.value = editor.getValue();
    })
  );

  const observer = new ResizeObserver(() => {
    editor.layout({ height: 0, width: 0 });
    editor.layout();
  });
  observer.observe(editor.getContainerDomNode());

  form.addEventListener("submit", () => {
    activeEditors.delete(editor);
    editor.dispose();
    // probably unnecessary but we should clean up after ourselves.
    observer.disconnect();
  });

  select.addEventListener("change", (e) => {
    const model = editor.getModel();
    if (!model) return;

    monaco.editor.setModelLanguage(
      model,
      select.value === "script" ? "javascript" : "plaintext"
    );

    if (!["script", "chat"].includes(select.value)) {
      console.warn(
        `Monaco Editor | Received "${select.value}" from select, defaulted to plaintext editor`
      );
    }
  });
}
