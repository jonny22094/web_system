import styled from "styled-components";

export const OpenContainer = styled.div`
  display: flex;
  flex: 1;
`

export const AppLabel = styled.div`
  display: flex;
  flex: 1;
  max-width: 150px;
  align-items: center;
  justify-content: center;

  color: ${_ => _.theme.colors.text};
  background-color: ${_ => _.isActive ? _.theme.colors.active : "rgba(0, 0, 0, 0)"};
`