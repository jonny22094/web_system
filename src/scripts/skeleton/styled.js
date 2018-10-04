import styled from "styled-components";

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