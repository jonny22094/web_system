import React, {Component} from "react"
import {ContentContainer, Curtain} from "./styled"
import {inject, observer} from "mobx-react"

@inject("window")
@observer
class WindowContent extends Component {

  createElement = () => {
    const {type, link} = this.props.window

    return (!!(type === "link") ?
      <iframe src={link} allowFullScreen/> :
      React.createElement(require(`../../../../apps/${link}`))
    )
  }

  render() {
    const {isDragged} = this.props.window

    return (
      <ContentContainer>
        {this.createElement()}
        <Curtain hidden={!isDragged}/>
      </ContentContainer>
    )
  }
}

export default WindowContent