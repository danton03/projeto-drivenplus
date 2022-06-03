import { ContainerPage } from "./layouts/ContainerPage"
import { Conteudo } from "./layouts/TelaLoginStyles";
import Logo from "../assets/images/drivenplus_logo.svg";
import { Button } from "./layouts/Button";
import UserContext from "../contexts/UserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TelaLogin() {
  const { setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  //URL da requisição
  const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/login";
  
  //Estado que controla os inputs e botões do formulário
  const [stateForm, setStateForm] = useState({
    email: '',
    senha: '',
    disabled: false
  });

  //Função acionada ao clicar no botão de cadastrar
  function handleSubmit(event) {
    event.preventDefault(); //previne o reload da página

    //Dados que serão enviados para a API
    const dadosUsuario = {
      email: stateForm.email,
      password: stateForm.senha
    }

    //Bloqueia a edição do form enquanto a requisição é feita
    setStateForm((valorAnterior) => {
      return {
        ...valorAnterior, 
        disabled: true,
      }
    });

    //Requisição para a API de login
    const promise = axios.post(URL, dadosUsuario);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha
    
    function successRequest(response) {
      const data = response.data;
      setUserData({
        "id": data.id,
        "name": data.name,
        "cpf": data.cpf,
        "email": data.email,
        "password": data.password,
        "membership": data.membership,
        "token": data.token
      });
      //OBS.: Se o usuário não tiver assinatura, o atributo membership tem valor null

      //Verificando se o usuário tem assinatura para redirecionar para a página certa
      if (data.membership) {
        navigate("/home");
      }
      else{
        navigate("/subscriptions");
      }
    }

    function failInRequest() {
      alert("Erro ao tentar logar.\nVerifique se preencheu os campos corretamente.");
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: false,
        }
      });
    }
    
  }

  return(
    <ContainerPage>
      <Conteudo>
        <img src={Logo} alt="Logo da Driven" />
        <form onSubmit={handleSubmit}>
          <input 
          type="email" 
          placeholder="E-mail"
          value={stateForm.email}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, email: event.target.value}})}
          required
          />

          <input 
          type="password" 
          placeholder="Senha"
          value={stateForm.senha}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, senha: event.target.value}})}
          required
          />

          <Button 
          type="submit" 
          background="#FF4791"
          disabled={stateForm.disabled}
          >
            Entrar
          </Button>

          <Button 
          type="button" 
          className="mudarForm" 
          background="initial"
          disabled={stateForm.disabled}
          onClick={() => navigate("/sign-up")}
          >
            Não possuí uma conta? Cadastre-se
          </Button>
        </form>
      </Conteudo>
    </ContainerPage>
  );
}

