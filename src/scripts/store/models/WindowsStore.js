import {types, destroy} from "mobx-state-tree"
import {Window} from "./Window"
import {randomBytes} from "crypto"
import Apps from "../../../apps/apps"

export const WindowStore = types.model("windowStore", {
  windows: types.optional(types.array(Window), [{
    key: "1232413",
    title: "Portfolio",
    type: "link",
    link: "http://rochalski.me/"
  }]),

})
.views(self => ({
  get getWindows() {
    return self.windows
  }
}))
.actions(self => ({
  openWindow: id => {
    self.windows.push({
      key: randomBytes(256).toString("hex"),
      ...Apps[id],
    })
  },
  closeWindow: item => {

    destroy(item)
  }
}))