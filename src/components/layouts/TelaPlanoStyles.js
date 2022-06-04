import styled from "styled-components";

const Conteudo = styled.div`
  &, form, ol, .infoDoPlano, .beneficios { 
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    box-sizing: border-box;
  }

  &, form{
    align-items: center;
    justify-content: center;
  }

  img{
    width: 100%;
    max-width: 140px;
    height: auto;
    margin-bottom: 12px;
  }

  h2{
    font-weight: 700;
    font-size: 2em;
    line-height: 2.37em;
    margin-bottom: 22px;

    color: var(--cor-branca);
  }
  
  .infoDoPlano{
    max-width: 298px;
    h4, p{
      display: flex;
      align-items: center;
      width: 100%; 
      height: auto; 
      font-weight: 400;
      
      color: var(--cor-branca);
    }

    h4{
      font-size: 1em;
      line-height: 1.18em;
    }

    p, ol{
      font-size: 0.87em;
      line-height: 1em;
    }

    p{
      margin-top: 2px;
    }

    ol{
      justify-content: center;
      margin-top: 8px;
      margin-bottom: 12px;
      padding-left: 18px;
      font-weight: 400;
      list-style: decimal;
      box-sizing: border-box;
      color: var(--cor-branca);
    }

    li{
      margin-top: 2px;
    }
  }

  form{
    margin: 34px 0;
    gap: 8px;

    input{
      width: 100%;
      max-width: 299px;
      height: 3.72em;
      padding-left: 14px;
      border: none;
      border-radius: 8px;
  
      font-weight: 400;
      font-size: 14px;
      line-height: 16px;
      box-sizing: border-box;
      color: var(--cor-cinza-escuro);
    }
  }

  .tituloInfo{
    display: flex;
    align-items: center;
    width: 100%;
    gap: 4px;
  }
  
  .seguranca{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 9px;
    box-sizing: border-box;
    input{
      width: 100%;
      max-width: 145px;
      padding-left: 7px;
    }
  }

  .react-icons{
    color: #FF4791;
    size: 1em;
  }

  .money{
    width: 16px;
    height: auto;
  }

  @media(max-width: 374px){
    .seguranca{
      flex-direction: column;
      input{
        width: 100%;
        max-width: 299px;
      }
    }
  }
`;

const Topo = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  box-sizing: border-box;

  .react-icons{
    color: var(--cor-branca);
    width: 28px;
    height: 27px;
    margin: 24px 0 35px 20px;
  }
  .react-icons:hover{
    cursor: pointer;
  }
`;

export { Conteudo, Topo };