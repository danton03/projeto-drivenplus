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
import UserContext from "./contexts/UserContext";
import { useState } from "react";


function App() {
  const [userData, setUserData] = useState(null);
  console.log(userData);
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/sign-up" element={<TelaCadastro/>} />
          <Route path="/subscriptions" element={<TelaPlanos />} />
          <Route path="/subscriptions/:idDoPlano" element={<TelaPlano/>} />
          <Route path="/home" element={<TelaHome/>}/>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
