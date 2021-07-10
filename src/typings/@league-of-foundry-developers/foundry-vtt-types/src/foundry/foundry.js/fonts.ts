
    export default [
      "@league-of-foundry-developers\\foundry-vtt-types\\src\\foundry\\foundry.js\\fonts.d.ts",
      "/**\n * A configuration of font families which are initialized when the page loads\n */\ndeclare const FONTS: {\n  FontAwesome: {\n    custom: {\n      families: ['FontAwesome'];\n      urls: ['fonts/fontawesome/css/all.min.css'];\n    };\n  };\n  Signika: {\n    custom: {\n      families: ['Signika'];\n      urls: ['fonts/signika/signika.css'];\n    };\n  };\n  _loaded: [];\n};\n\n/**\n * Load font, and perform a callback once the font has been rendered\n * @deprecated since 0.6.4, to be removed in 0.8.x\n */\ndeclare function loadFont(fontName: string, callback: () => void): void;\n"
    ]
  