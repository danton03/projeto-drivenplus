import { useParams } from "react-router-dom";

export default function TelaPlano() {
  const {idDoPlano} = useParams();
  
  return(
    <h1 style={{color: "white"}}>Eu sou a tela do Plano {idDoPlano}</h1>
  );
}