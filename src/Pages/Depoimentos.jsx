import React from "react"
import depoimentos from "../Services/dadosDepoimentos";
import "../Styles/Pages/depoimentos.css";
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro"


const Depoimentos = () => {
  const [value, setValue] = React.useState("");
  const [depoimentosFiltrados, setDepoimentosFiltrados] = React.useState(depoimentos)

  React.useEffect(() => {
    const busca=depoimentos.filter(depoimento => depoimento.nome.includes(value))

    setDepoimentosFiltrados(busca)
  },[value])

  const handleOnChance = (event) => {
    setValue(event.target.value)
  }

  return (
    <>
      <Sidebar />
      <BuscaFiltro handleOnChance={handleOnChance}/>
      
      <div id="container">
        {depoimentosFiltrados.map((depoimento) => {
          return (
            <div className="card-depoimentos">
              <h2>{depoimento.nome}</h2>
              <h3>{depoimento.descricao}</h3>
              <p><strong><i>{depoimento.mensagem}</i></strong></p>

              <a href={depoimento.facebook} alt="clique" rel="noopener noreferrer" target="_blank">Facebook</a>
              {
                depoimento.instagram && <p><a href={depoimento.instagram} alt="clique" rel="noopener noreferrer" target="_blank">Instagram</a></p>
              }
              
              <img src={depoimento.foto} alt="foto" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Depoimentos;