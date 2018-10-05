import styled from "styled-components"

export const ActiveButton = styled.div`
  &:hover {
    background-color: ${_ => _.theme.colors.active};
  }
`