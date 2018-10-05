import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 450px;
  height: 300px;

  background-color: ${_ => _.theme.colors.main};
`

export const BarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  width: 100%;
  height: 20px;

  background-color: ${_ => _.color};

  &:active {
    cursor: grab;
  }
`

export const Button = styled.a`
  width: 12px;
  height: 12px;

  z-index: 1;

  margin-left: 5px;
  border-radius: 45px;
  transition: 0.1s;

  background-color: ${_ => _.theme.colors.inActive};

  &:hover {
    &:first-of-type {
      background-color: ${_ => _.theme.colors.negative};
    }

    &:last-of-type {
      background-color: ${_ => _.theme.colors.positive};
    }

    &:nth-of-type(2) {
      background-color: ${_ => _.theme.colors.warning};
    }
  }
`

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  position: absolute;

  cursor: default;

  color: ${_ => _.theme.colors.text};

  width: 100%;
  height: 100%;
`