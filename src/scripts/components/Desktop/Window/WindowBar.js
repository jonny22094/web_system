import React, {Component} from 'react'
import {BarContainer, Button, Title} from './styled'
import {inject} from 'mobx-react'

@inject('window')
class WindowBar extends Component {
  render() {
    const {handleColor, title, isResizable, close, hide, maximize} = this.props.window

    return (
      <BarContainer className="handle" color={handleColor}>
        <Button onClick={close} />
        <Button onClick={hide} />
        {isResizable && <Button onClick={maximize} />}
        <Title>{title}</Title>
      </BarContainer>
    )
  }
}

export default WindowBar
