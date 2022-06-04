import { ContainerPage } from "./layouts/ContainerPage";
import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContext from "../contexts/UserContext";
import Plano from "./Plano";

export default function TelaPlanos() {
  const URL = 'https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships';
  const [planos, setPlanos] = useState([]);
  const { userData } = useContext(UserContext);
  const { token } = userData;
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  useEffect(() => {
    //Requisição para a API de dados dos planos
    const promise = axios.get(URL, config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest(response) {
      const listaDePlanos = response.data;
      setPlanos(listaDePlanos);
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar listar os planos.\nTente novamente mais tarde.");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderizaPlanos() {
    return planos.map((plano) => (
      <Plano key={plano.id} id={plano.id}>
        <img src={plano.image} alt={plano.price} />
        <h2>{`R$ ${plano.price.replace('.', ',')}`}</h2>
      </Plano>
    ))
  }

  return (
    <ContainerPage>
      <Titulo>
        Escolha seu Plano
      </Titulo>

      <ContainerPlanos>
        {planos.length ? renderizaPlanos() : "Carregando..."}
      </ContainerPlanos>
    </ContainerPage>
  );
}

const Titulo = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 29px;
  margin-bottom: 24px;
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;

  color: var(--cor-branca);
`;

const ContainerPlanos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  margin-bottom: 16px;
  gap: 10px;

  box-sizing: border-box;
  color: var(--cor-branca);
`;
