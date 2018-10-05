import {types} from "mobx-state-tree"

export const Size = types.model("size", {
  width: types.optional(types.number, 700),
  height: types.optional(types.number, 450),
})
.views(self => ({
  get get() {
    return {
      width: self.width,
      height: self.height
    }
  }
}))
.actions(self => ({
  set: ({width, height}) => {
    self.width = width,
    self.height = height
  }
}))

export const Position = types.model("position", {
  x: types.optional(types.number, 300),
  y: types.optional(types.number, 200)
})
.views(self => ({
  get get() {
    return {
      x: self.x,
      y: self.y
    }
  }
}))
.actions(self => ({
  set: ({x, y}) => {
    self.x = x,
    self.y = y 
  }
}))