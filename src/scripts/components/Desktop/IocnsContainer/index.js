import React, {Component} from "react"
import {IocnsContainer, Icon} from "./styled"
import {inject} from "mobx-react"
import Apps from "src/apps/apps"

@inject("store")
class Icons extends Component {
  render() {
    const {openWindow} = this.props.store.windowsStore

    return (
      <IocnsContainer>
        {Apps.map(({title, icon}, key) => 
          <Icon key={key} onClick={() => openWindow(key)}>
            <i className="fab fa-adn"/>
            <p>{title}</p>
          </Icon>
        )}
      </IocnsContainer>
    )
  }
}

export default Icons