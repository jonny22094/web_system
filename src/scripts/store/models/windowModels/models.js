import {types} from "mobx-state-tree"

export const Size = types.model("size", {
  width: types.optional(types.number, 700),
  height: types.optional(types.number, 450),
})

export const Position = types.model("position", {
  x: types.optional(types.number, 300),
  y: types.optional(types.number, 200)
})
.views(({x, y}) => ({
  get get() {
    return {x, y}
  }
}))
.actions(self => ({
  set: data => {
    self.position = data
  }
}))