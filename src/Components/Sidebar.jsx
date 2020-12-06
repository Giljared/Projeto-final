// import { FiArrowLeft } from 'react-icons/fi'
// import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import '../Styles/Components/sidebar.css'

const Sidebar = () => {


    return (
        <aside className="app-sidebar">
            <footer>

                <div className="header-btn">


                    <Link to="/depoimentos" >
                        <button className="btn-1">Professores</button>
                    </Link>

                    <Link to="/" >
                        <button className="btn-2">Home</button>
                    </Link>

                    <Link to="/tutoriais">
                        <button className="btn-3">Tutoriais e Ferramentas</button>
                    </Link>

                    <Link to="/filmes">
                        <button className="btn-4">Filmes Educativos</button>
                    </Link>

                    <Link to="/sobre">
                        <button className="btn-5">Sobre o Projeto</button>
                    </Link>
                </div>


                {/* <Link to="/" >
                <button type="button" >
                    <FiArrowLeft size={24} color="#FFF" />
                </button>
                </Link>
            
               
                <Link to="/sobre" >
                <button type="button" >
                    <FiArrowRight size={24} color="#FFF" />
                </button>
            </Link> */}
            </footer>
        </aside>
    )
}

export default Sidebar

















// import { FiArrowLeft } from "react-icons/fi"
// import { useHistory } from "react-router-dom";

// import '../Styles/Components/sidebar.css'


// export default function Side (){
//     const { goBack } = useHistory()
//     return(
//         <aside className="app-sidebar">
//             <footer>
//                 <button type="button" onClick={goBack}>
//                     <FiArrowLeft size={24} color="#FFF" />
//                 </button>
//             </footer>
//         </aside>
//     )

// }