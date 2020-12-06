import React from "react"
import tutoriais from "../Services/dadosTutoriais";
import "../Styles/Pages/tutoriais.css";
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro";


const Tutoriais = () => {
  const [value, setValue] = React.useState("");
  const [tutoriaisFiltrados, setTutoriaisFiltrados] = React.useState(tutoriais);
  
  React.useEffect(() => {
    const busca=tutoriais.filter(tutorial => tutorial.nome.includes(value))

    setTutoriaisFiltrados(busca)
  },[value])

  const handleOnChance = (event) => {
    setValue(event.target.value)
  }
    
    

  return (
    <>
      <Sidebar />
      <BuscaFiltro handleOnChance={handleOnChance}/>
      
      <div id="container">
        {tutoriaisFiltrados.map((tutorial) => {
          return (
            <div className="card-tutoriais">
              <h3>{tutorial.nome}</h3>
              <p>Gênero:{tutorial.genero}</p>
              
              <img src={tutorial.img} alt="img" />
              <p>Descrição: {tutorial.descricao}</p>
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">Acessar o canal</a>
              
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Tutoriais;