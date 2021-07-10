export function debounce<T extends unknown[]>(fn: (...args:T) => void, ms = 200) {
  let timeout: ReturnType<typeof setTimeout> | null
  return function (...args:T) {
    if(timeout) {
      clearTimeout(timeout)
      timeout = null
    }

    timeout = setTimeout(fn, ms, ...args)
  }
}
