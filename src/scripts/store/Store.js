import {types} from "mobx-state-tree";
import {Window} from "./models/Window";
import {AppStore} from "./models/AppStore";

export const Store = types.model("store", {
  windows: types.optional(types.array(Window), [{
    key: "1232413",
    title: "Portfolio",
    type: "link",
    link: "rochalski.me"
  }]),
  appStore: types.optional(AppStore, {})
})
.views(self => ({
  get getWindows() {
    return self.windows
  }
}))