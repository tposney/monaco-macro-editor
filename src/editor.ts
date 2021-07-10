import * as monaco from 'monaco-editor'
import { debounce } from "./utils/debounce";
import { settings } from "./utils/quickSettings";

export function registerTypes(filePath: string, code: string) {
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

  monaco.editor.createModel(code, "typescript", monaco.Uri.parse(modifiedPath));
}


export function setupMonaco(){
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
}

export function attachMonacoEditor (form: HTMLFormElement) {

  const oldTextArea = form.querySelector<HTMLTextAreaElement>(
    'textarea[name="command"]'
  );
  const commandLabel = form.querySelector<HTMLLabelElement>(
    ".form-group.command"
  );

  if (!oldTextArea || !commandLabel) {
    throw new Error("Monaco Macro Editor Error: Couldn't find old text area");
  }

  const div = document.createElement("div");
  Object.assign(div.style, { width: "100%", height: "calc(100% - 24px)" });

  const select: HTMLSelectElement = form.querySelector('select[name="type"]')!;

  commandLabel.insertAdjacentElement("beforeend", div);

  const editor = ((window as any).editor = monaco.editor.create(div, {
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
  }));

  editor.onDidChangeModelContent(
    debounce(() => {
      oldTextArea.value = editor.getValue();
    })
  );

  new ResizeObserver(() => {
    editor.layout({ height: 0, width: 0 });
    editor.layout();
  }).observe(editor.getContainerDomNode());

  form.addEventListener("submit", () => {
    editor.dispose();
  });

  select.addEventListener("change", (e) => {
    const model = editor.getModel();
    if (!model) return;
    if (select.value === "script") {
      monaco.editor.setModelLanguage(model, "javascript");
    } else if (select.value === "chat") {
      monaco.editor.setModelLanguage(model, "plaintext");
    }
  });
}
