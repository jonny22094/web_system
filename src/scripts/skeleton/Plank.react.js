import React, {Component} from "react"
import {PlankContainer} from "./styled"
import OpenApps from "../components/Plank/OpenApps"

class Plank extends Component {
  render() {
    return (
      <PlankContainer>
        <OpenApps/>
      </PlankContainer>
    )
  }
}

export default Plank;