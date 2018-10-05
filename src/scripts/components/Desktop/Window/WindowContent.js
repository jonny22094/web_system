import React, {Component} from "react"
import {ContentContainer, Curtain} from "./styled"
import {inject, observer} from "mobx-react"

@inject("window")
@observer
class WindowContent extends Component {
  render() {
    const {isDragged} = this.props.window

    return (
      <ContentContainer>
        <iframe src="http://rochalski.me/"/>
        <Curtain hidden={!isDragged}/>
      </ContentContainer>
    )
  }
}

export default WindowContent