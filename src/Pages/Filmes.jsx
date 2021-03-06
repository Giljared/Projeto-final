import React from "react"
import filmes from '../Services/filmes'
import '../Styles/Pages/filmes.css'
import Sidebar from '../Components/Sidebar'
import BuscaFiltro from '../Components/BuscaFiltro'

const Filmes = () => {
    const [value, setValue] = React.useState("")
    const [filmesFiltrados, setFilmesFiltrados]=React.useState(filmes)
    React.useEffect(()=>{
        const busca=filmes.filter(filme =>filme.nome.includes(value))
        setFilmesFiltrados(busca)
    },[value])

    const handleOnChance = (event) =>{
            setValue(event.target.value)
    }
    return (
        <>
            <Sidebar />
            <BuscaFiltro handleOnChance={handleOnChance} />
            <div id="container">
                {filmesFiltrados.map(filme => {
                    return <div className="card-filmes" key={filme.id}>
                        <h3>Título: {filme.nome}</h3>
                        <p>Gênero: {filme.genero}</p>
                        <p>Descrição: {filme.descricao}</p>
                        <img src={filme.capa} alt="capa" />
                    </div>

                })}
            </div>
        </>
    )
}
export default Filmes