import {types} from 'mobx-state-tree'
import {AppStore} from './models/AppStore'
import {WindowsStore} from './models/WindowsStore'

export const Store = types
  .model('store', {
    windowsStore: types.optional(WindowsStore, {}),
    appStore: types.optional(AppStore, {}),
  })
    .views(self => ({}))
