import React, {Component} from 'react'
import {OpenContainer, AppLabel} from './styled'
import {inject, observer} from 'mobx-react'

@inject('store')
@observer
class OpenApps extends Component {
  render() {
    const {getWindows} = this.props.store.windowsStore

    return (
      <OpenContainer>
        {getWindows.map(({key, title, isActive, hide}) => (
          <AppLabel key={key} isActive={isActive} onClick={hide}>
            {title}
          </AppLabel>
        ))}
      </OpenContainer>
    )
  }
}

export default OpenApps
