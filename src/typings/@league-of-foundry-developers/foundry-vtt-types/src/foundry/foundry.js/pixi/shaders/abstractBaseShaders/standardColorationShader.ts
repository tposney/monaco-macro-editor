
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\shaders\\abstractBaseShaders\\standardColorationShader.d.ts",
      "/**\n * The default coloration shader used by standard rendering and animations.\n * A fragment shader which creates a light source.\n */\ndeclare class StandardColorationShader extends AbstractBaseShader {\n  static fragmentShader: string;\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * {\n   *   alpha: 1.0,\n   *   color: [1.0, 1.0, 1.0],\n   *   time: 0,\n   *   intensity: 5,\n   *   darkness: false,\n   * }\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  