import React, {Component} from "react"
import Draggable from 'react-draggable'
import {observer} from "mobx-react"
import {Container} from "./styled"

@observer
class WindowContainer extends Component {
  handleDrag = (e, ui) => {
    this.props.data.newPosition({
      x: this.props.data.position.x + ui.deltaX,
      y: this.props.data.position.y + ui.deltaY
    })
  }

  render() {
    const {position} = this.props.data

    return (
      <Draggable
        handle=".handle"
        position={position}
        onDrag={this.handleDrag}
      > 
        <Container>
          {this.props.children}
        </Container>
      </Draggable>
    )
  }
}

export default WindowContainer