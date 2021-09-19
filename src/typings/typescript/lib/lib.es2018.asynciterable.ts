
    export default [
      "typescript\\lib\\lib.es2018.asynciterable.d.ts",
      "/// <reference no-default-lib=\"true\"/>\r\n/// <reference lib=\"es2015.symbol\" />\r\n/// <reference lib=\"es2015.iterable\" />\r\ninterface SymbolConstructor{/**\r * A method that returns the default async iterator for an object. Called by the semantics of\r * the for-await-of statement.\r */readonly asyncIterator:unique symbol;}interface AsyncIterator<T,TReturn=any,TNext=undefined>{next(...args:[]|[TNext]):Promise<IteratorResult<T,TReturn>>;return?(value?:TReturn|PromiseLike<TReturn>):Promise<IteratorResult<T,TReturn>>;throw?(e?:any):Promise<IteratorResult<T,TReturn>>;}interface AsyncIterable<T>{[Symbol.asyncIterator]():AsyncIterator<T>;}interface AsyncIterableIterator<T>extends AsyncIterator<T>{[Symbol.asyncIterator]():AsyncIterableIterator<T>;}"
    ]
  