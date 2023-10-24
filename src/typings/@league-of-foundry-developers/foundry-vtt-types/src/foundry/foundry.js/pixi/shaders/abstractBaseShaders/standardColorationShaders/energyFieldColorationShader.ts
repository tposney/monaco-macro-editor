
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/shaders/abstractBaseShaders/standardColorationShaders/energyFieldColorationShader.d.ts",
      "/**\n * Energy field animation coloration shader\n */\ndeclare class EnergyFieldColorationShader extends StandardColorationShader {\n  static fragmentShader: string;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * Object.assign({}, super.defaultUniforms, {\n   *   pulse: 0,\n   *   color: PIXI.utils.hex2rgb(0xCEECEE)\n   * })\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  