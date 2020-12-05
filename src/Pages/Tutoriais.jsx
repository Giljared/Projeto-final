import React from "react"
// import { useState, useEffect } from "react";
import tutoriais from "../Services/dadosTutoriais";
import "../Styles/Pages/filmes.css";
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro";
// import { Link } from "react-router-dom";
// import {getUnsubscribedTrailer} from "../Services/youtubeVideosServices.js";

const Tutoriais = () => {
  const [value, setValue] = React.useState("");
  const [tutoriaisFiltrados, setTutoriaisFiltrados] = React.useState(tutoriais);
  
  React.useEffect(() => {
    const busca=tutoriais.filter(tutorial => tutorial.nome.includes(value))

    setTutoriaisFiltrados(busca)
  },[value, tutoriais])

  const handleOnChance = (event) => {
    setValue(event.target.value)
  }
    
    

  return (
    <>
      <Sidebar />
      <BuscaFiltro handleOnChance={handleOnChance}/>

      {/* <div className="div-busca">
        <input
          className="busca"
          type="text"
          placeholder="Pesquisar aqui"
          onChange={(e) => {
            setTutoriaisFiltrados(e.target.value);
          }}
        />
      </div> */}

      <div id="container">
        {tutoriaisFiltrados.map((tutorial) => {
          return (
            <div className="card">
              <h3>{tutorial.nome}</h3>
              <p>Gênero:{tutorial.genero}</p>
              
              <img src={tutorial.img} alt="img" />
              <p>Descrição: {tutorial.descricao}</p>
              <a href={tutorial.link} target="_blank" rel="noopener noreferrer">Acessar o canal</a>
              {/* <Link to="/youtube"target="_blank"><p>Link:{tutorial.link}</p></Link> */}
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Tutoriais;




















// import React from 'react'
// import Templete from '../Templetes/Templete.jsx'

// const Tutoriais = () => {

//     return (

//         <Tutoriais>
//             <p>
//                 Chamar aqui os tutoriais
//             </p>
//         </Tutoriais>
//     )
// }

// export default Tutoriais