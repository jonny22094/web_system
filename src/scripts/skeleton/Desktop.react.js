import React, {Component} from "react"
import {DesktopContainer} from "./styled"
import Windows from "../components/Desktop/WindowsContainer"
import Icons from "../components/Desktop/IocnsContainer"

export default class Desktop extends Component {
  render() {
    return (
      <DesktopContainer>
        <Windows/>
        <Icons/>
      </DesktopContainer>
    )
  }
}