import React, {Component} from "react"
import styled from "styled-components";
import {Provider} from "mobx-react";
import {Store} from "./store/Store";
import Desktop from "./skeleton/Desktop.react"
import Plank from "./skeleton/Plank.react";

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
        <Container>
          <Desktop/>
          <Plank/>
        </Container>
      </Provider>
    )
  }
}