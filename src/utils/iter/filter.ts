export function* filter<T>(iter: Iterable<T>, predicate: (item:T, index: number) => unknown) {
  let i = 0
  for (const item of iter) {
    if(predicate(item, i++)) yield item
  }
}
