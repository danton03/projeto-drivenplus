/* Importação do estilo global */
import GlobalStyle from "./assets/styles/GlobalStyle";

/* Importação das Bibliotecas */
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

/* Importação das páginas repassadas nas rotas */
import TelaLogin from "./components/TelaLogin";
import TelaCadastro from "./components/TelaCadastro";
import TelaPlanos from "./components/TelaPlanos";
import TelaPlano from "./components/TelaPlano";
import TelaHome from "./components/TelaHome";
import UserContext from "./contexts/UserContext";
import { IconContext } from "react-icons";
import { useState } from "react";


function App() {
  const [userData, setUserData] = useState(null);
  return (
    <UserContext.Provider value={{userData, setUserData}}>
      <IconContext.Provider value={{ className: 'react-icons' }}>
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
        <ToastContainer />
      </IconContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
