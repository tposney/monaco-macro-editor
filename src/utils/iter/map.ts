export function* mapʹ<T,U>(iter: Iterable<T>, mapFn: (item:T, index: number) => U) {
  let i = 0
  for (const item of iter) {
    yield mapFn(item, i++)
  }
}

export function map<T>(predicate: (item:T, index: number) => unknown) {
  return (iter:Iterable<T>) => mapʹ(iter, predicate)
}
