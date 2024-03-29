import React, {Component} from "react"
import Draggable from "react-draggable"
import Resizable from "re-resizable"
import {inject ,observer} from "mobx-react"
import {Container} from "./styled"

@inject("window")
@observer
class WindowContainer extends Component {
  handleDrag = ({}, ui) => {
    const {position} = this.props.window

    position.set({
      x: position.x + ui.deltaX,
      y: position.y + ui.deltaY
    })
  }

  handleResize = (e, dir, ref) => {
    const {size, position} = this.props.window
    
    position.set({
      x: position.x + (!!(
        (dir === "left" || dir === "bottomLeft" || dir === "topLeft")
        && ref.clientWidth > 250) ? e.movementX : 0),
      y: position.y + (!!(
        (dir === "top" || dir === "topRight" || dir === "topLeft")
        && ref.clientHeight > 250) ? e.movementY : 0)
    })

    size.set({
      width: ref.clientWidth,
      height: ref.clientHeight
    })
  }

  render() {
    const {
      position,
      onDragging,
      isHidden,
      size,
      isResizable
    } = this.props.window

    return (
      <Draggable
          handle=".handle"
          position={position.get}
          onDrag={this.handleDrag}
          onStart={onDragging}
          onStop={onDragging}
      >
        <Resizable
          style={{
            position: "absolute",
            zIndex: 1,
            display: isHidden ? 'none' : 'block'}}
          size={size.get}
          enable={{
            top: isResizable,
            right: isResizable,
            bottom: isResizable,
            left: isResizable,
            topRight: isResizable,
            bottomRight: isResizable,
            bottomLeft: isResizable,
            topLeft: isResizable
          }}
          onResize={this.handleResize}
          onResizeStart={onDragging}
          onResizeStop={onDragging}
          minWidth={250}
          minHeight={250}
        >
          <Container>         
            {this.props.children}
          </Container>
        </Resizable>
      </Draggable>
    )
  }
}

export default WindowContainer