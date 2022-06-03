import styled from "styled-components";

const Conteudo = styled.div`
  &, form { 
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;
  box-sizing: border-box;
  }

  img{
    width: 100%;
    max-width: 300px;
    height: auto;
    margin-top: 134px;
    margin-bottom: 100px;
  }

  form{
    margin-top: ${props => props.topo ? props.topo : "0"};
    gap: 16px;

    input{
      width: 100%;
      max-width: 298px;
      height: 52px;
      border: none;
      border-radius: 8px;
  
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      color: var(--cor-texto-input);
    }
  }

`;

export {Conteudo};