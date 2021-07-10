import { some } from "../utils/iter/some"

const ERROR_MSG = `Monaco Macro Editor: The (Ace) Macro Editor is also enabled, if you want to use the Monaco Macro Editor please disable the Macro Editor Module.`

const hasMacroEditorSetting = some((item:string) => item.startsWith('macroeditor.'))

export function bailOnMacroEditor () {
  if("settings" in game) {
    if(hasMacroEditorSetting(game.settings.settings.keys())) {
      ui.notifications?.error(ERROR_MSG, { permanent: true })
      throw new Error(ERROR_MSG)
    }
  }
}
