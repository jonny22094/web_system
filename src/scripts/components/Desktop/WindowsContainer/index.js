import React, {Component} from 'react'
import {WindowsContainer} from './styled'
import {Provider, inject, observer} from 'mobx-react'
import Window from '../Window'

@inject('store')
@observer
class Windows extends Component {
  render() {
    const {getWindows} = this.props.store.windowsStore

    return (
      <WindowsContainer>
        {getWindows.map(item => (
          <Provider key={item.key} window={item}>
            <Window data={item} />
          </Provider>
        ))}
      </WindowsContainer>
    )
  }
}

export default Windows
