import React, {Component} from "react"
import {IocnsContainer} from "./styled"
import {inject} from "mobx-react"
import Apps from "../../../../apps/apps"

@inject("store")
class Icons extends Component {
  render() {
    const {openWindow} = this.props.store.windowsStore

    return (
      <IocnsContainer>
        {Apps.map(({title, icon}, key) => 
          <div key={key} onClick={() => openWindow(key)}>
            <i className="fab fa-adn"/>
          </div>
        )}
      </IocnsContainer>
    )
  }
}

export default Icons