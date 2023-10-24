
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/shaders/abstractBaseShaders/standardColorationShaders/emanationColorationShader.d.ts",
      "/**\n * Emanation animation coloration shader\n */\ndeclare class EmanationColorationShader extends StandardColorationShader {\n  static fragmentShader: string;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * Object.assign({}, super.defaultUniforms, {\n   *   color: PIXI.utils.hex2rgb(0xCEECEE)\n   * })\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  