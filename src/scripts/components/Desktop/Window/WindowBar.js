import React, {Component} from "react"
import {BarContainer, Button, Title} from "./styled"

class WindowBar extends Component {
  render() {
    const {
      handleColor,
      title,
      resizable,
      close,
      hide,
      maximize
    } = this.props.data

    return (
      <BarContainer className="handle" color={handleColor}>
        <Button onClick={close}/>
        <Button onClick={hide}/>
        {(resizable && <Button onClick={maximize}/>)}
        <Title>{title}</Title>
      </BarContainer>
    )
  }
}

export default WindowBar