/// @ts-check
const path = require("path");
const { existsSync } = require("fs");
const fs = require("fs/promises");
const mkdirp = require("mkdirp");
const ROOT = path.resolve(__dirname, "..");
const TYPINGS_DIR = path.resolve(ROOT, "src/typings");
const FOUNDRY_TYPES_FILE = `@league-of-foundry-developers/foundry-vtt-types`;
const ts = require("typescript");
const minifier = require("dts-minify").createMinifier(ts);
const rimraf = require("rimraf");

const MINIFY_TYPES = process.env.MINIFY ?? false

if (!existsSync(path.resolve(ROOT, "./node_modules")))
  cheerio("No Node Modules.");
if (!existsSync(path.resolve(ROOT, "./node_modules", FOUNDRY_TYPES_FILE)))
  cheerio("No Foundry type file");

const { files, dependencies } = require(path.join(
  FOUNDRY_TYPES_FILE,
  "package.json"
));

const relevantTypes = [
  "@league-of-foundry-developers",
  ...Object.keys(dependencies)
    .filter((item) => item !== "typescript")
    .map((item) => item.replace(/^@types\//, "")),
    "typescript/lib/lib"
];

(async () => {
  const nodeModulesLoc = path.resolve("node_modules");
  console.log("Deleting old types");
  await rm(TYPINGS_DIR);

  const program = ts.createProgram(
    files.map((file) => path.resolve("node_modules", FOUNDRY_TYPES_FILE, file)),
    {
      noLib: false,
      libs: [],
    }
  );

  await Promise.all(
    program
      .getSourceFiles()
      .filter((file) =>
        relevantTypes.some((typeFile) => file.fileName.includes(typeFile))
      )
      .map(async (file) => {
        const relativeFileName = path
          .relative(nodeModulesLoc, file.fileName)
          .replace(/^@types[\\/]/, "")
          .replace(/.+[\\/]node_modules[\\/]/, "");
        const outputPath = path
          .resolve(TYPINGS_DIR, relativeFileName)
          .replace(/^@types[\\/]/, "/")
          .replace(/.+[\\/]node_modules[\\/]/, "");
        const outputDir = path.dirname(outputPath);

        try {
          await mkdirp(outputDir);
        } catch {}

        let contents = await fs.readFile(file.fileName, "utf8");

        if (MINIFY_TYPES) {
          // This is a bit of a hack, we're replacing newlines on unix with carriage returns
          // as the minifier doesn't seem to deal well with them, which we'll use as a feature
          contents.replace(/\r\n/g, '\n')
          // replace our hacky carriage returns with new lines
          contents = minifier.minify(contents, { keepJsDocs: true })
        }

        return fs.writeFile(
          path.resolve(outputPath.replace(/(?:(\.d)?\.ts)?$/, ".ts")).replace(/\\/g,'/'),
          makeDefContent(relativeFileName, contents)
        );
      })
  );
})();

function rm(path, options) {
  return new Promise((resolve, reject) => {
    if (options) rimraf(path, options, callback);

    rimraf(path, callback);

    function callback(err) {
      if (err) reject(err);
      resolve();
    }
  });
}

function makeDefContent(str, content) {
  return `
    export default [
      ${JSON.stringify(str)},
      ${JSON.stringify(content)}
    ]
  `;
}

function cheerio(str) {
  console.error(str);
  process.exit();
}

// async function asyncReplace(str, regex, replacer) {
//   const outputStr = [];
//   let i = 0;
//   for (const match of str.matchAll(regex)) {
//     outputStr.push(str.slice(i, match.index));
//     i = match.index + match[0].length;
//     outputStr.push(await replacer(...match));
//   }
//   outputStr.push(str.slice(i));
//   return outputStr.join("");
// }
