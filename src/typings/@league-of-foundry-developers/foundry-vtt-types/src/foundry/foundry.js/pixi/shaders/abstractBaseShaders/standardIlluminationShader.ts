
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/foundry.js/pixi/shaders/abstractBaseShaders/standardIlluminationShader.d.ts",
      "/**\n * The default coloration shader used by standard rendering and animations\n * A fragment shader which creates a solid light source.\n */\ndeclare class StandardIlluminationShader extends AbstractBaseShader {\n  static fragmentShader: string;\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * {\n   *   alpha: 1.0,\n   *   ratio: 0.5,\n   *   colorDim: [0.5, 0.5, 0.5],\n   *   colorBright: [1.0, 1.0, 1.0],\n   *   time: 0,\n   *   intensity: 5\n   * }\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  