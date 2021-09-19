
    export default [
      "typescript\\lib\\lib.es2020.string.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\n/// <reference lib=\"es2015.iterable\" />\r\ninterface String{/**\r * Matches a string with a regular expression, and returns an iterable of matches\r * containing the results of that search.\r * @param regexp A variable name or string literal containing the regular expression pattern and flags.\r */\nmatchAll(regexp:RegExp):IterableIterator<RegExpMatchArray>;}"
    ]
  