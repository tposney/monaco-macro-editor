
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/shaders/abstractBaseShaders/standardColorationShaders/torchColorationShader.d.ts",
      "/**\n * Torch animation coloration shader\n */\ndeclare class TorchColorationShader extends StandardColorationShader {\n  static fragmentShader: string;\n\n  /**\n   * @override\n   * @defaultValue\n   * ```typescript\n   * Object.assign({}, super.defaultUniforms, {\n   *   ratio: 0\n   * })\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  