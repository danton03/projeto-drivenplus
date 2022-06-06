import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Button } from "./layouts/Button";
import { ContainerPage } from "./layouts/ContainerPage";
import { Conteudo } from "./layouts/TelaLoginStyles";

export default function TelaCadastro() {
  const navigate = useNavigate();
  const URL = "https://mock-api.driven.com.br/api/v4/driven-plus/auth/sign-up";
  
  //Estado que controla os inputs e botões do formulário
  const [stateForm, setStateForm] = useState({
    email: '',
    nome: '',
	  cpf: '',
    senha: '',
    disabled: false
  });

  //Função acionada ao clicar no botão de cadastrar
  function handleSubmit(event) {
    event.preventDefault(); //previne o reload da página
    const cpfValido = validaCPF(stateForm.cpf);
    if(cpfValido){
      //Dados que serão enviados para a API
      const dadosUsuario = {
        email: stateForm.email,
        name: stateForm.nome,
        cpf: stateForm.cpf,
        password: stateForm.senha
      }

      //Bloqueia a edição do form enquanto a requisição é feita
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: true,
        }
      });

      //Requisição para a API de cadastro
      const promise = axios.post(URL, dadosUsuario);
      promise.then(successRequest); //sucesso
      promise.catch(failInRequest); //falha
      
      function successRequest() {
        toast.success("Conta criada com sucesso!", {
          className: 'black-background',
        });
        navigate("/");
      }

      function failInRequest() {
        alert("Erro ao tentar cadastrar.\nVerifique se preencheu os campos corretamente.");
        setStateForm((valorAnterior) => {
          return {
            ...valorAnterior, 
            disabled: false,
          }
        });
      }
    }
    else{
      alert("Por favor, insira um cpf válido.\nExemplo: 555.555.555-55");
    }
  }

  function validaCPF(cpf) {
    // eslint-disable-next-line no-useless-escape
    const validacao = /[0-9]{3}[\.][0-9]{3}[\.][0-9]{3}[-][0-9]{2}/i;
    return validacao.test(cpf);
  } 
  
  return(
    <ContainerPage>
      <Conteudo topo={"147px"}>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          placeholder="Nome"
          value={stateForm.nome}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, nome: event.target.value}})}
          required
          />

          <input 
          type="text" 
          placeholder="CPF"
          value={stateForm.cpf}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, cpf: event.target.value}})}
          required
          />
        
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
            Cadastrar
          </Button>

          <Button 
          type="button" 
          className="mudarForm" 
          background="initial"
          disabled={stateForm.disabled}
          onClick={() => navigate("/")}
          >
            Já possui uma conta? Entre
          </Button>
        </form>
      </Conteudo>
    </ContainerPage>
  );
}