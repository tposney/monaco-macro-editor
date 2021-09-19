let stylesheet: HTMLStyleElement
/**
 * Insert a fix for when furnace is enabled. Note: we're doing it by injecting
 * a stylesheet as it removes the need for
 */
export function furnaceFix(form: HTMLFormElement) {
  if(!stylesheet) {
    stylesheet = document.createElement('style')
    document.head.append(stylesheet)

    stylesheet.sheet?.insertRule(`.furnace-macro-command {
      display: none !important;
    }`)
  }
}
