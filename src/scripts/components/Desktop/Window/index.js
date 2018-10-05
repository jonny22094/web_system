import React, {Component} from "react"
import WindowContainer from "./WindowContainer"
import WindowBar from "./WindowBar"
import {observer} from "mobx-react"

@observer
class Window extends Component {
  render() {
    return (
      <WindowContainer data={this.props.data}>
        <WindowBar data={this.props.data}/>
      </WindowContainer>
    )
  }
}

export default Window