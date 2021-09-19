
    export default [
      "typescript\\lib\\lib.es2015.symbol.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\ninterface SymbolConstructor{/**\r * A reference to the prototype.\r */readonly prototype:Symbol;/**\r * Returns a new unique Symbol value.\r * @param  description Description of the new Symbol object.\r */(description?:string|number):symbol;/**\r * Returns a Symbol object from the global symbol registry matching the given key if found.\r * Otherwise, returns a new symbol with this key.\r * @param key key to search for.\r */for(key:string):symbol;/**\r * Returns a key from the global symbol registry matching the given Symbol if found.\r * Otherwise, returns a undefined.\r * @param sym Symbol to find the key for.\r */\nkeyFor(sym:symbol):string|undefined;}declare var Symbol:SymbolConstructor;"
    ]
  