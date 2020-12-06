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