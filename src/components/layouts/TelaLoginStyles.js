import styled from "styled-components";

const Conteudo = styled.div`
  &, form { display: flex;
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
  }

  input{
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

    background: var(--cor-rosa);
    border-radius: 8px;
  }
`;

export {Conteudo};