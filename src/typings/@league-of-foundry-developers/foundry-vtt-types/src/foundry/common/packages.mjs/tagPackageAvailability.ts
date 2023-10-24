
    export default [
      "@league-of-foundry-developers/foundry-vtt-types/src/foundry/common/packages.mjs/tagPackageAvailability.d.ts",
      "/**\n * Checks a package against its availability code to see if it requires a compability warning, and if so, updates the pkg\n * @param pkg - The package\n * @remarks This doesn't actually update the package, it just sets the `unavailable` and `incompatible` flags if needed.\n */\nexport declare function tagPackageAvailability(pkg: {\n  availability: foundry.CONST.PackageAvailabilityCode;\n  type: foundry.CONST.PackageTypes;\n}): void;\n"
    ]
  