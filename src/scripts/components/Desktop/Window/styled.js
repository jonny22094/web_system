import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  background-color: ${_ => _.theme.colors.main};
  border: 2px solid ${_ => _.theme.colors.active};
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

export const ContentContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;

  iframe {
    width: 100%;
    height: 100%;

    border: 0;
  }
`

export const Curtain = styled.div`
  display: block;
  position: absolute;

  width: 100%;
  height: 100%;

  &[hidden] {
    display: none;
  }
`