import {types} from "mobx-state-tree";

export const AppStore = types.model("appStore", {
  wallpaper: types.optional(types.string, '')
})