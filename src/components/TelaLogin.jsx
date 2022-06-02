import { ContainerPage } from "./layouts/ContainerPage"
import { Conteudo } from "./layouts/TelaLoginStyles";

export default function TelaLogin() {
  return(
    <ContainerPage>
      <Conteudo>
        <img src="/assets/images/drivenplus_logo.svg" alt="Logo da Driven" />
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit">Entrar</button>
        </form>
      </Conteudo>
    </ContainerPage>
  );
}

