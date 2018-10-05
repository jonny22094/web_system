import {types, destroy} from "mobx-state-tree"
import {Window} from "./Window"

export const WindowStore = types.model("windowStore", {
  windows: types.optional(types.array(Window), [{
    key: "1232413",
    title: "Portfolio",
    type: "link",
    link: "rochalski.me"
  }]),

})
.views(self => ({
  get getWindows() {
    return self.windows
  }
}))
.actions(self => ({
  closeWindow: item => {
    destroy(item)
  }
}))