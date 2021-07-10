
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\pixi\\shaders\\abstractBaseShaders\\standardColorationShaders\\pulseColorationShader.d.ts",
      "/**\n * Pulse animation coloration shader\n */\ndeclare class PulseColorationShader extends StandardColorationShader {\n  static fragmentShader: string;\n\n  /**\n   * @defaultValue\n   * ```typescript\n   * {\n   *   alpha: 1.0,\n   *   color: [1.0, 1.0, 1.0],\n   *   time: 0,\n   *   intensity: 5,\n   *   darkness: false,\n   *   pulse: 0,\n   * }\n   * ```\n   */\n  static defaultUniforms: AbstractBaseShader.Uniforms;\n}\n"
    ]
  