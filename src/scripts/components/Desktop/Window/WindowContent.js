import React, {Component} from 'react'
import {ContentContainer, Curtain} from './styled'
import {inject, observer} from 'mobx-react'

@inject('window')
@observer
class WindowContent extends Component {
  render() {
    const {isDragged, type, link} = this.props.window

    return (
      <ContentContainer>
        {type === 'link' ? (
          <iframe src={link} allowFullScreen />
        ) : (
          React.createElement(require(`../../../../apps/${link}`))
        )}
        <Curtain hidden={!isDragged} />
      </ContentContainer>
    )
  }
}

export default WindowContent
