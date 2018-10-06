import React, {Component} from "react"
import WindowContainer from "./WindowContainer"
import WindowBar from "./WindowBar"
import WindowContent from "./WindowContent"
import {observer} from "mobx-react"


@observer
class Window extends Component {
  render() {
    return (
      <WindowContainer>
        <WindowBar />
        <WindowContent/>
      </WindowContainer>
    )
  }
}

export default Window