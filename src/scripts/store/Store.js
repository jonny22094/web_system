import {types} from "mobx-state-tree";
import {Window} from "./models/Window";

export const Store = types.model("store", {
  windows: types.optional(types.array(Window), [])
})