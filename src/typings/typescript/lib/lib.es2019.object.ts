
    export default [
      "typescript\\lib\\lib.es2019.object.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\n/// <reference lib=\"es2015.iterable\" />\r\ninterface ObjectConstructor{/**\r * Returns an object created by key-value entries for properties and methods\r * @param entries An iterable object that contains key-value entries for properties and methods.\r */\nfromEntries<T=any>(entries:Iterable<readonly[PropertyKey,T]>):{[k:string]:T};/**\r * Returns an object created by key-value entries for properties and methods\r * @param entries An iterable object that contains key-value entries for properties and methods.\r */\nfromEntries(entries:Iterable<readonly any[]>):any;}"
    ]
  