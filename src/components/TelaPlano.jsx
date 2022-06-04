import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import { ContainerPage } from "./layouts/ContainerPage";
import { Conteudo, Topo } from "./layouts/TelaPlanoStyles";
import { FaMoneyBillWave as MoneyIcon, FaArrowLeft as ArrowIcon } from "react-icons/fa";
import { HiOutlineClipboardList as ChecklistIcon} from "react-icons/hi";
import { Button } from "./layouts/Button";
import { Modal } from "./layouts/Modal";

export default function TelaPlano() {
  const navigate = useNavigate()
  const {idDoPlano} = useParams();
  const [plano, setPlano] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const URL_DADOS_DO_PLANO = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions/memberships/${idDoPlano}`;
  const URL_DA_ASSINATURA = `https://mock-api.driven.com.br/api/v4/driven-plus/subscriptions`
  const { userData, setUserData } = useContext(UserContext);
  const { token } = userData;
  const config = {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  };

  //Estado que controla os inputs e botões do formulário
  const [stateForm, setStateForm] = useState({
    nome: '',
    numeroCartao: '',
	  cvv: '',
    validade: '',
    disabled: false
  });

  useEffect(() => {
    //Requisição para a API de dados do plano
    const promise = axios.get(URL_DADOS_DO_PLANO, config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest(response) {
      const dadosDoPlano = response.data;
      setPlano(dadosDoPlano);
    }

    function failInRequest() {
      alert("Ops, tivemos um erro interno ao tentar listar os planos.\nTente novamente mais tarde.");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderizaConteudo() {
    return (
      <Conteudo>
        <img src={plano.image} alt={plano.name} />

        <h2>{plano.name}</h2>

        <div className="infoDoPlano">
          <div className="tituloInfo">
            <ChecklistIcon />
            <h4>Benefícios</h4>
          </div>
          <ol>
            {rederizaBeneficios()}
          </ol>
        </div>

        <div className="infoDoPlano">
          <div className="tituloInfo">
            <MoneyIcon className="money"/>
            <h4>Preço</h4>
          </div>
          <p>{`R$ ${plano.price.replace('.', ',')} cobrados mensalmente`}</p>
        </div>

        <form onSubmit={handleConfirm}>
          <input 
          type="text" 
          placeholder="Nome impresso no cartão"
          value={stateForm.nome}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, nome: event.target.value}})}
          required
          />

          <input 
          type="text" 
          placeholder="Digitos do cartão"
          value={stateForm.numeroCartao}
          disabled={stateForm.disabled}
          onChange={(event) => setStateForm(
            (valorAnterior) => {
            return {...valorAnterior, numeroCartao: event.target.value}})}
          required
          />

          <div className="seguranca">
            <input 
            type="text"
            className="inputSeguranca" 
            placeholder="Código de segurança"
            value={stateForm.cvv}
            disabled={stateForm.disabled}
            onChange={(event) => setStateForm(
              (valorAnterior) => {
              return {...valorAnterior, cvv: event.target.value}})}
            required
            />

            <input 
            type="text" 
            placeholder="validade"
            value={stateForm.validade}
            disabled={stateForm.disabled}
            onChange={(event) => setStateForm(
              (valorAnterior) => {
              return {...valorAnterior, validade: event.target.value}})}
            required
            />
          </div>

          <Button 
          type="submit" 
          background="#FF4791"
          disabled={stateForm.disabled}
          >
            Assinar
          </Button>
        </form>
      </Conteudo>
    );
  }

  function rederizaBeneficios() {
    return(
      plano.perks.map((beneficio) => (
        <li key={beneficio.id}id={beneficio.id}>{beneficio.title}</li>
      ))
    );
  }

  function renderizaModal() {
    return(
      <Modal>
        <div className="fechar" onClick={toggleModal}>
          <p>x</p>
        </div>

        <div className="card">
          <p>
            {`Tem certeza que deseja assinar o plano Driven Plus (R$ ${plano.price.replace('.', ',')})?`}
          </p>

          <div className="botoes">
            <Button 
            type="button" 
            onClick={toggleModal}
            background={"#CECECE"}>
              não
            </Button>
            
            <Button 
            type="button" 
            onClick={handleSubmit} 
            background={"#FF4791"}>
              sim
            </Button>
          </div>
        </div>
      </Modal>
    );
  }

  function handleConfirm(e) {
    e.preventDefault();
    toggleModal();
  }

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function handleSubmit() {
    setStateForm((valorAnterior) => {
      return {
        ...valorAnterior, 
        disabled: true,
      }
    });
    toggleModal();

    const dadosDaAssinatura = {
      membershipId: plano.id,
      cardName: stateForm.nome,
      cardNumber: stateForm.numeroCartao,
      securityNumber: stateForm.cvv,
      expirationDate: stateForm.validade
    }

    //Requisição para a API de assinatura do plano
    const promise = axios.post(URL_DA_ASSINATURA, dadosDaAssinatura, config);
    promise.then(successRequest); //sucesso
    promise.catch(failInRequest); //falha

    function successRequest(response) {
      const planoAssinado = response.data.membership;
      const dadosAtualizados = {
        ...userData,
        membership: planoAssinado,
      }
      setUserData(dadosAtualizados);
      navigate("/home");
    }

    function failInRequest() {
      alert("Ops, tivemos um erro ao tentar concluir a assinatura do seu plano.\nConfira se os dados do seu cartão estão corretos.");
      setStateForm((valorAnterior) => {
        return {
          ...valorAnterior, 
          disabled: false,
        }
      });
    }
  }

  return(
    <>
      <Topo>
        <ArrowIcon onClick={() => navigate(-1)}/>
      </Topo>
      <ContainerPage>

        { plano ? renderizaConteudo() : ''}

        {modalVisible ? renderizaModal() : ''}
      </ContainerPage>
    </>
  );
}

/* function validaCartao(numeroDoCartao, cvv, validade) {
    //Validação para os dados do form (adicionar posteriormente.falta melhorias)
    const validaNumero = /[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}[\s]?[0-9]{4}/g;
    const validaCVV = /[0-9]{3}/i;
    const validaVencimento = /\b(0[1-9]|1[012])[\/][2-9]{2}\b/i;
    const testeNumero = validaNumero.teste(numeroDoCartao);
    const testeCVV = validaCVV.teste(cvv)
    const testeValidade = validaVencimento(validade)
    if(testeNumero && testeCVV && testeValidade){
      return true;
    }
    else{
      return false;
    }
  } */