import styled from "styled-components";

const Perfil = styled.div`
  position: absolute;
  top: 22px;
  right: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .react-icons{
    width: 34px;
    height: 33px;
    color: var(--cor-branca);
  }
`;

const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 32px;
  box-sizing: border-box;
  
  .imgPlano{
    display: flex;
    width: 100%;
    height: auto;

    img{
      width: 75px;
      height: 51px;
    }
  }
`;

const Titulo = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 300px;
  margin-top: 16px;
  font-weight: 700;
  font-size: 24px;
  line-height: 28px;

  color: var(--cor-branca);
`;

const Beneficios = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 53px;
  gap: 8px;
  box-sizing: border-box;
`;

const ButtonLink = styled.a`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  text-decoration: none;
  color: var(--cor-branca);

  &:visited{
    color: var(--cor-branca);
  }
`;

const Menu = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
  padding: 0 38px 12px 38px;
  gap: 8px;
  box-sizing: border-box;
`;

export { Beneficios, ButtonLink, Conteudo, Menu,Perfil, Titulo };