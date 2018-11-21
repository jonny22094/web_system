import styled from "styled-components"

export const MenuContainer = styled.div`
  position: absolute;
  display: none;

  width: 350px;
  height: 500px;

  bottom: 50px;
  left: 0;

  align-items: center;
  justify-content: center;

  background-color: ${_ => _.theme.colors.main};
  color: ${_ => _.theme.colors.text};
  font-size: 25px;

  &[open] {
    display: flex;
  }
`