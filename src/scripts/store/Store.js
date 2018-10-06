import {types} from "mobx-state-tree"
import {AppStore} from "./models/AppStore"
import {WindowStore} from "./models/WindowsStore"

export const Store = types.model("store", {
  windowsStore: types.optional(WindowStore, {}),
  appStore: types.optional(AppStore, {})
})
.views(self => ({
}))