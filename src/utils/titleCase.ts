export function titleCase(str:string) {
  const words = str.split(/(?<=\p{Ll})(?=\p{Lu})|[-_\s]+/gu)
  return words
    .map(titleCaseWord)
    .join(' ')
}

export function titleCaseWord(str:string) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase()
}
