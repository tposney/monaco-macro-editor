
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\common\\data\\data.mjs\\sceneData.d.ts",
      "// TODO: This is just a stub that must be filled with live\nimport { PropertiesToSource } from '../../../../types/helperTypes';\nimport { DocumentData } from '../../abstract/module.mjs';\nimport { BaseScene } from '../../documents.mjs';\n\ninterface SceneDataProperties {\n  _id: string | null;\n}\n\ninterface SceneDataConstructorData {\n  _id?: string | null;\n}\n\nexport declare class SceneData extends DocumentData<\n  any,\n  SceneDataProperties,\n  PropertiesToSource<SceneDataProperties>,\n  SceneDataConstructorData,\n  BaseScene\n> {}\n\n// eslint-disable-next-line @typescript-eslint/no-empty-interface\nexport declare interface SceneData extends SceneDataProperties {}\n"
    ]
  