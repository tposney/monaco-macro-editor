
    export default [
      "typescript\\lib\\lib.es2020.symbol.wellknown.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\n/// <reference lib=\"es2015.iterable\" />\r\n/// <reference lib=\"es2015.symbol\" />\r\ninterface SymbolConstructor{/**\r * A regular expression method that matches the regular expression against a string. Called\r * by the String.prototype.matchAll method.\r */readonly matchAll:unique symbol;}interface RegExp{/**\r * Matches a string with this regular expression, and returns an iterable of matches\r * containing the results of that search.\r * @param string A string to search within.\r */[Symbol.matchAll](str:string):IterableIterator<RegExpMatchArray>;}"
    ]
  