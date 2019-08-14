import {types, destroy} from 'mobx-state-tree'
import {Window} from './Window'
import {randomBytes} from 'crypto'
import Apps from 'src/apps/apps'

export const WindowsStore = types
  .model('windowsStore', {
    windows: types.optional(types.array(Window), []),
  })
  .views(self => ({
    get getWindows() {
      return self.windows
    },
  }))
  .actions(self => ({
    searchActive: () => {
      self.getWindows.map(item => (item.isActive ? item.active() : ''))
    },
    openWindow: id => {
      self.searchActive()
      self.windows.push({
        key: randomBytes(64).toString('hex'),
        ...Apps[id],
      })
    },
    closeWindow: item => {
      destroy(item)
    },
  }))
