export function someʹ<T>(iter: Iterable<T>, predicate: (item:T, index: number) => unknown) {
  let i = 0
  for (const item of iter) {
    if(predicate(item, i++)) return true
  }
  return false
}

export function some<T>(predicate: (item:T, index: number) => unknown) {
  return (iter:Iterable<T>) => someʹ(iter, predicate)
}
