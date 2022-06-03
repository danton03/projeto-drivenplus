import styled from "styled-components";

const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 298px;
  height: 52px;

  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  
  color: var(--cor-branca);
  background-color: ${props => props.background};
  border-radius: 8px;
  border: none;

  &:hover{
  cursor: pointer;
  }

  &:disabled{
    filter: opacity(75%);
    cursor: not-allowed;
  }

  .mudarForm{
    background-color: transparent;
    height: fit-content;
    width: fit-content;
    margin-top: 25px;
    
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
  }
`;

export {Button};