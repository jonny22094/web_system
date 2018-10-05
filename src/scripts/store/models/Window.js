import {types} from "mobx-state-tree"
import {Size, Position} from "./windowModels/models"

export const Window = types.model("window", {
  key: types.string,
  title: types.string,
  isHidden: types.optional(types.boolean, false),
  isActive: types.optional(types.boolean, true),
  isDregged: types.optional(types.boolean, false),
  isMaximize: types.optional(types.boolean, false),
  handleColor: types.optional(types.string, "#4C4C4C"),
  resizable: types.optional(types.boolean, true),
  size: types.optional(Size, {}),
  position: types.optional(Position, {}),
  category: types.optional(types.string, "other"),
  type: types.string,
  link: types.string
})
.views(self => ({
}))
.actions(self => ({
  onDragging: () => {
    self.isDregged = !self.isDregged
  }
}))
.actions(self => ({
  hide: () => {
    self.isActive = self.isHidden
    self.isHidden = !self.isHidden
  },
  close: () => {

  },
  maximize: () => {
    
  }
}))