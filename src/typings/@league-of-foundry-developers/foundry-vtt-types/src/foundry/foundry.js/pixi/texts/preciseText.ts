
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/texts/preciseText.d.ts",
      "/**\n * An extension of the default PIXI.Text object which forces double resolution.\n * At default resolution Text often looks blurry or fuzzy.\n */\ndeclare class PreciseText extends PIXI.Text {\n  constructor(...args: ConstructorParameters<typeof PIXI.Text>);\n\n  _autoResolution: false;\n  _resolution: 2;\n}\n"
    ]
  