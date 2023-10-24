
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/types/augments/pixiParticles.d.ts",
      "import * as pixiParticles from 'pixi-particles';\n\ndeclare global {\n  namespace PIXI {\n    export import particles = pixiParticles; // eslint-disable-line @typescript-eslint/no-unused-vars\n  }\n}\n"
    ]
  