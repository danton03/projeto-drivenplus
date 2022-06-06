import {ContainerPage} from "./layouts/ContainerPage";
import { IoPersonCircleSharp as PersonIcon } from "react-icons/io5";
import { Beneficios, ButtonLink, Conteudo, Menu, Perfil, Titulo } from "./layouts/TelaHomeStyles";
import { Button } from "./layouts/Button";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import { toast } from "react-toastify";

export default function TelaHome() {
  const { userData } = useContext(UserContext);
  const { token } = userData;
  const navigate = useNavigate();
  const URL_Cancelar_Plano = "https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions";
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  function renderizaConteudo() {
    const {name, membership} = userData;
    const {image, perks} = membership;

    function renderizaBeneficios() {
      return(
        perks.map((beneficio) => {
          const{id, link, title} = beneficio;
          return(
            <Button type="button" 
            key={id} 
            background={"#FF4791"}>
              <ButtonLink id={id} href={link} target="_blank">
                {title}
              </ButtonLink>
            </Button>
          );
        })
      );
    }


    return(
      <>
        <Perfil>
          <PersonIcon />
        </Perfil>

        <Conteudo>
          <div className="imgPlano">
            <img src={image} alt={membership.name} />
          </div>
          <Titulo> {`Ola, ${name}`} </Titulo>
          <Beneficios>
            {renderizaBeneficios()}
          </Beneficios>
        </Conteudo>
      </>
    );
  }

  function mudarPlano() {
    navigate("/subscriptions");
  }

  function cancelarPlano() {
    //Requisição para a API de cancelamento de plano
    const promise = axios.delete(URL_Cancelar_Plano, config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest() {
      toast.success("Plano cancelado com sucesso!", {
        className: 'black-background',
      });
      navigate("/subscriptions");
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar cancelar o seu plano.\nTente novamente mais tarde.");
    }
  }

  return(
    <ContainerPage>
      {
      userData ?
      renderizaConteudo()
      : <p style={{color:"#FFFFFF"}}>"Carregando..."</p> 
      }

      <Menu>
        <Button 
        type="button"
        background={"#FF4791"}
        onClick={mudarPlano}
        >
          Mudar plano
        </Button>

        <Button 
        type="button"
        background={"#FF4747"}
        onClick={cancelarPlano}
        >
          Cancelar plano
        </Button>
      </Menu>
    </ContainerPage>
  );
}