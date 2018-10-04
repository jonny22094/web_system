import {types} from "mobx-state-tree";

export const Window = types.model("window", {
  key: types.string,
  title: types.string,
  hidden: types.optional(types.boolean, false),
  handleColor: types.optional(types.string, "#4C4C4C"),
  resizable: types.optional(types.boolean, true),
  height: types.optional(types.number, 450),
  width: types.optional(types.number, 700),
  category: types.optional(types.string, "other"),
  type: types.string,
  link: types.string
})