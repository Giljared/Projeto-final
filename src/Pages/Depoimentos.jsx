import React from "react"
// import { useState, useEffect } from "react";
import depoimentos from "../Services/dadosDepoimentos";
import "../Styles/Pages/filmes.css";
import Sidebar from "../Components/Sidebar";
import BuscaFiltro from "../Components/BuscaFiltro"
// import { Link } from "react-router-dom";


const Depoimentos = () => {
  const [value, setValue] = React.useState("");
  const [depoimentosFiltrados, setDepoimentosFiltrados] = React.useState(depoimentos)

  React.useEffect(() => {
    const busca=depoimentos.filter(depoimento => depoimento.nome.includes(value))

    setDepoimentosFiltrados(busca)
  },[value, depoimentos])

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
            <div className="card">
              <h2>{depoimento.nome}</h2>
              <h3>{depoimento.descricao}</h3>
              <p><strong><i>{depoimento.mensagem}</i></strong></p>

              <a href={depoimento.facebook} alt="clique" rel="noopener noreferrer" target="_blank">Facebook</a>
              <p><a href={depoimento.instagram} alt="clique" rel="noopener noreferrer" target="_blank">Instagram</a></p>
              <img src={depoimento.foto} alt="foto" />
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Depoimentos;



























// import React from 'react'
// import Templete from '../Templetes/Templete.jsx'

// const Depoimentos = () => {

//     return (

//         <Templete>

//             <h2>DEPOIMENTOS 1 + foto - SOLANI SILVEIRA, Professora de Ciências na Rede Pública e Privada (Visão do 'novo normal')</h2>
//             <p>
//                 A condição de imigrante Digital me permitiu aprender sem medo e sem nenhuma vergonha. Aprendi a
//                 navegar neste mar de informações. Hoje sou uma facilitadora e colaboradora no processo de aprendizagem
//                 dos estudantes que estão comigo na Escola da tarde. Aprendi a desenhar uma caixa de texto e foi o marco
//                 divisor. Minha vida se divide em antes e depois de saber colocar a caixa de texto onde eu quiser. Me tornei
//                 uma fã de tecnologia. Hoje meu computador faz parte da minha alma. Sou grata por tudo que aprendi. Sou
//                 grata por perceber que ocorreu uma ruptura no mundo da Educação. A cultura MAKER veio para ficar. O
//                 ensino híbrido fará parte do meu fazer em sala de aula. Jamais poderei trabalhar algum conteúdo sem
//                 contextualizar com material disponível na rede. Por exemplo: trabalhei um texto de Monteiro Lobato e como
//                 material de apoio disponibilizei o link da música: Emília de Baby do Brasil. Me senti viva e criança novamente.
//                 Descobri o valor da educação libertadora que faz a gente amar o conhecimento, aquele que a gente
//                 descobre tateando no escuro e quando se aprende tudo se ilumina e não volta a ser o que era antes. Dos
//                 inúmeros aprendizados que tive durante a pandemia tenho a certeza que nunca mais minhas aulas serão
//                 baseadas em certezas e sim em dúvidas provisórias.

//             </p>
//             <img src="" alt="fotoSolani.PNG"/>

//             <h2>DEPOIMENTOS 2 + foto - REJANE FLORES, Professora de Língua Portuguesa na Rede Pública e Privada (Escolha da profissão)</h2>
//             <p>
//                 Escolhi ser professora, proque o magistério é uma das profissões mais encantadora que existe.
//                 Para mim, sempre foi extremamente gratificante acompanhar as descobertas dos meus alunos: seys olhos brilhando neste momento da aprendizagem é algo que sempre encheu o meu coração de orgulho e felicidade.
//                 Sem contar, é claro, o privilégio de poder acompanhar o desenvolvimento individual e pessoal de cada aluno, como ser humano, nessa fase tão linda da vida.
//                 Enfim, toda essa troca de experiências que este ofício nos proporciona é algo muito recompensador e fascinante na profissão, sem dúvidas.
//             </p>
//             <img src="" alt="fotoRejane.PNG"/>

//             <h2>DEPOIMENTOS 3 + foto - KARINY MACEDO, Professora Pedagoga na Rede Pública e Profissional de Desenvolvimento Pessoal (Visão do 'novo normal')</h2>
//             <p>
//                 Visão antes no 'novo normal': Cansada e desmotivada.
//                 Vivendo o nomento atual: Feliz e motivada.
//                 Visão do ambiente educacional antes de migrar para as aulas On-line: Saturado e sem melhorias.
//                 Habilidades você já possuía antes da migração: Oralidade, comunicação interpessoal.
//                 O que representou o Ensino Presencial- Positivo: conectividade e interação, vivências construídas coletivamente.
//                 Negativos: excesso de conteúdo, falta de práticas.

//                 O que tem representando o Ensino On-line (remoto): Superação, novas habilidades, renovação e estudo.
//                 E se tudo ficar definitivamente remoto na Educação, visão de como seria para as
//                 futuras gerações: Criação de  autorresponsabilidade.
//                 Ponto de vista da Educação em 2020: Resistência por parte dos profissionais.
//                 Mensagem para os profissionais: Mudar faz parte e você poderá desfrutar de algo que nem poderia imaginar.
//             </p>
//             <img src="" alt="fotoKariny.jpg"/>

//         </Templete>
//     )
// }

// export default Depoimentos