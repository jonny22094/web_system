import React, {Component} from "react"
import Draggable from 'react-draggable'
import {inject ,observer} from "mobx-react"
import {Container} from "./styled"

@inject("window")
@observer
class WindowContainer extends Component {
  handleDrag = (e, ui) => {
    const {position} = this.props.window

    position.set({
      x: position.x + ui.deltaX,
      y: position.y + ui.deltaY
    })
  }

  render() {
    const {position, onDragging, isHidden} = this.props.window

    return (
      <Draggable
        handle=".handle"
        position={position.get}
        onDrag={this.handleDrag}
        onStart={onDragging}
        onStop={onDragging}
      > 
        <Container hidden={isHidden}>
          {this.props.children}
        </Container>
      </Draggable>
    )
  }
}

export default WindowContainer