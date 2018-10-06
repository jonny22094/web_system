import styled from "styled-components"

export const IocnsContainer = styled.div`
  position: absolute;
`

export const Icon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 50px;

  margin-top: 20px;
  margin-left: 20px;

  i {
    display: flex;
    justify-content: center;
    font-size: 45px;
    color: black; 
  }

  p {
    margin: 5px 0; 
  }
`