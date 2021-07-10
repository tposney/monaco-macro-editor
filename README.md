# Monaco Macro Editor

This module adds the [Monaco Editor](https://github.com/Microsoft/monaco-editor) (the editor used in VS Code, as well as other online editors) as the macro editor in Foundry, allowing users to use a slightly slimmed down version of the editor within foundry itself. It also adds [types](https://github.com/League-of-Foundry-Developers/foundry-vtt-types) provided by the League Of Foundry Developers to allow for a nicer scripting experience from within Foundry itself.

A thing to note about the module, whilst the Monaco Editor is very powerful, it could be a bit too heavy for those who are on a weaker machine, in which case I'd recommend using the [Ace Macro Editor](https://foundryvtt.com/packages/macroeditor) instead.

## For Library/Module Developers

To make it easier to add new typings for other modules and libraries to foundry, a hook provides a function to register types. the register function takes a fake filepath and the typescript file as a string.
```ts
Hooks.on("monaco-editor.ready", (registerTypes) => {
  registerTypes("module-name/index.ts", `
declare class Foo {
  bar (): string | null
}
  `)
})
```
