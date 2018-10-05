import React, {Component} from "react"
import {ContentContainer} from "./styled"
import {inject, observer} from "mobx-react"

@inject("window")
@observer
class WindowContent extends Component {
  render() {
    return (
      <ContentContainer>
        <iframe src="http://rochalski.me/"/>

      </ContentContainer>
    )
  }
}

export default WindowContent