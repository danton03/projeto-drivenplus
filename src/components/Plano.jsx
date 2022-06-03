import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Plano(props) {
  const navigate = useNavigate();
  function verPlano() {
    navigate(`/subscriptions/${props.id}`)
  }

  return(
    <CardPlano onClick={verPlano}>
      {props.children}
    </CardPlano>
  );
}

const CardPlano = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 11em;
  max-width: 290px;
  padding: 0 16px;
  gap: 22px;

  background-color: var(--cor-preta);
  border: 3px solid var(--cor-cinza-escuro);
  border-radius: 12px;

  img{
    width: 50%;
    height: auto;
  }
  
  h2{
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
    text-align: center;

    color: var(--cor-branca);
  }

  &:hover{
    cursor: pointer;
  }
`;