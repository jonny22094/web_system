import styled from "styled-components";
import {ActiveButton} from "../shared/styled"

export const DesktopContainer = styled.div`
  display: flex;

  width: 100vw;
  height: 100vh;
  overflow: hidden;
`

export const PlankContainer = styled.div`
  position: absolute;
  display: flex;

  width: 100vw;
  height: 50px;

  background-color: ${_ => _.theme.colors.main};
  bottom: 0;
  `

export const MenuButton = styled(ActiveButton)`
  display: flex;

  width: 50px;
  height: 50px;

  align-items: center;
  justify-content: center;

  color: ${_ => _.theme.colors.text};
  font-size: 25px;
`