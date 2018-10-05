import {types} from "mobx-state-tree"
import {Size, Position} from "./windowModels/models"

export const Window = types.model("window", {
  key: types.string,
  title: types.string,
  isHidden: types.optional(types.boolean, false),
  isActive: types.optional(types.boolean, true),
  isDragged: types.optional(types.boolean, false),
  isMaximize: types.optional(types.boolean, false),
  isResizable: types.optional(types.boolean, true),
  handleColor: types.optional(types.string, "#4C4C4C"),
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
    self.isDragged = !self.isDragged
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
    self.isMaximize = !self.isMaximize

    self.position.set({
      x: self.isMaximize ? 0 : 250,
      y: self.isMaximize ? 0 : 250
    })

    self.size.set({
      width: self.isMaximize ? window.innerWidth : 650,
      height: self.isMaximize ? window.innerHeight - 45 : 400
    })
  }
}))