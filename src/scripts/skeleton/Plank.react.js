import React, {Component} from "react"
import {PlankContainer, MenuButton} from "./styled"
import OpenApps from "../components/Plank/OpenApps"
import Menu from "../components/Plank/Menu"
import {observable} from "mobx";
import {inject, observer} from "mobx-react"

@inject("store")
@observer
class Plank extends Component {
  @observable isMenuOpen = false

  toggleMenu = () => {
    this.isMenuOpen = !this.isMenuOpen
  }

  render() {
    return (
      <PlankContainer>
        <Menu isOpen={this.isMenuOpen}/>
        <MenuButton onClick={this.toggleMenu}>
          <i className="far fa-circle"/>
        </MenuButton>
        <OpenApps/>
      </PlankContainer>
    )
  }
}

export default Plank;