import React, {Component} from "react"
import {WindowsContainer} from "./styled"
import {inject, observer} from "mobx-react"
import Window from "../Window"

@inject("store")
@observer
class Windows extends Component {
  render() {
      const {getWindows} = this.props.store

      return (
        <WindowsContainer>
          {getWindows.map(item => 
            <Window key={item.key} data={item} />
          )}
        </WindowsContainer>
      )
    }
}

export default Windows