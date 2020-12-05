import { Link } from 'react-router-dom'
import '../Styles/Pages/home.css'

const Home = () => {
    return (
        <div id="page-landing">

            <div className="content-wrapper">

                <main>
                    <h1> De repente: Professor(a) On-line!</h1>
                    <Link to="/depoimentos" >
                        <button className="btn-1">Professores</button>
                    </Link>

                    <Link to="/sobre" >
                        <button className="btn-2">Sobre o Projeto</button>
                    </Link>

                    <Link to="/tutoriais">
                        <button className="btn-3">Tutoriais e Ferramentas</button>
                    </Link>

                    <Link to="/filmes">
                        <button className="btn-4">Filmes Educativos</button>
                    </Link>
                </main>

            </div>
        </div>
    )
}

export default Home




















// import React from 'react'
// import Templete from '../Templetes/Templete.jsx'

// const Contato = () => {

//     return (

//         <Templete>
//             <h3>CONTATO - Redes Sociais</h3>
//             <p><a href="https://github.com/Giljared" alt="github"></a></p>
//             <p><a href="https://www.linkedin.com/in/gilvanete-silva/" alt="linkedin"></a></p>
//         </Templete>
//     )
// }

// export default Contato