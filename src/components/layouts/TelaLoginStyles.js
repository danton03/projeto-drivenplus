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
  }

  form{
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
  
    button{
      display: flex;
      justify-content: center;
      align-items: center;
  
      width: 100%;
      max-width: 298px;
      height: 52px;
      
      color: var(--cor-branca);
      background: var(--cor-rosa);
      border-radius: 8px;
      border: none;
    }
  }

`;

export {Conteudo};