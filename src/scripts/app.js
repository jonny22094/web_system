import React, {Component} from "react"
import styled, {ThemeProvider} from "styled-components"
import {Provider} from "mobx-react"
import {Store} from "./store/Store"
import Desktop from "./skeleton/Desktop.react"
import Plank from "./skeleton/Plank.react"
import {theme} from "../config/config"



const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export default class App extends Component {
  render() {
    return (
      <Provider store={Store.create()}>
        <ThemeProvider theme={theme}>
          <Container>
            <Desktop/>
            <Plank/>
          </Container>
        </ThemeProvider>
      </Provider>
    )
  }
}