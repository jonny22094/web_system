import React, {Component} from "react"
import {MenuContainer} from "./styled"

class Menu extends Component {
  render() {
    return (
      <MenuContainer open={this.props.isOpen}>
      </MenuContainer>
    )
  }
}

export default Menu;