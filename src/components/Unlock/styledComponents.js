import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to top, #3c2940, #0b0c1e, #161617);
  min-height: 100vh;
`

export const Image = styled.img`
  height: 120px;
  width: 120px;
`

export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-size: 30px;
  color: #e2e8f0;
  margin-bottom: 200px;
`

export const Button = styled.button`
  font-family: 'Roboto';
  font-size: 16px;
  color: #ffffff;
  background-color: #06b6d4;
  padding: 10px;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 10px;
`
