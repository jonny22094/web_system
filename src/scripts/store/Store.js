import {types} from "mobx-state-tree";

export const Store = types.model("store", {
  test: types.optional(types.string, "")
})