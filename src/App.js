/* Importação do estilo global */
import GlobalStyle from "./assets/styles/GlobalStyle";

/* Importação das Bibliotecas */
import { BrowserRouter, Route, Routes } from "react-router-dom";

/* Importação das páginas repassadas nas rotas */
import TelaLogin from "./components/TelaLogin";
import TelaCadastro from "./components/TelaCadastro";
import TelaPlanos from "./components/TelaPlanos";
import TelaPlano from "./components/TelaPlano";
import TelaHome from "./components/TelaHome";


function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/sign-up" element={<TelaCadastro/>} />
        <Route path="/subscriptions" element={<TelaPlanos />} />
        <Route path="/subscriptions/ID_DO_PLANO" element={<TelaPlano/>} />
        <Route path="/home" element={<TelaHome/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
