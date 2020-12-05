import { Link } from 'react-router-dom'
import '../Styles/Pages/sobre.css'


const Home = () => {
    return (
        <div className="body-sobre" >
            <header>

                <div className="header">
                    <h1> Professor(a) On-line!</h1>

                </div>
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
                </div>
            </header>

            <div >

                <main>

                    <div className="sobre">

                        <div className="div-sobre">


                        <p><h2>Propósito</h2>
                        Exposição de conhecimentos, ferramentas e habilidades/Skills requeridas dos Professores que migraram do Ensino Presencial para o Ensino On-line – tanto em Redes Públicas como em Redes Privadas. Neste espaço, você irá acessar uma coletânea de Depoimentos de Professores e Tutoriais com Ferramentas que exemplificam os vários cenários nos desafios de interagir  com Tecnologia e desenvolver um processo de aprendizado humanizado. Está disponível, também, um vasto espaço de indicações de Filmes Educativos que emocionam a vida de muitos de nós. Vale a pena conferir. E ainda, um outro vasto arcenal de ferramentas que oferecem facilidades para intensificar o ensino em espaços Educacionais que já possuem o Ensino Híbrido e para os espaços não-híbridos. Sendo que nesses, foram implantadas 'de repente' a conexão e interatividade de uso das ferramentas. Ao Perceber as barreiras e resistências ao NOVO NORMAL, os profissionais mergulham em um arrojado contato com o Ensino On-line(remoto) no ano de 2020. E o que mais é possível? Aproveite este espaço!</p>


                            <div>
                                <ul>
                                    <h2>Ferramentas/PDF</h2>
                                    <Link to={{pathname:"https://sistemas.eel.usp.br/material-apoio/arquivos/meet/extensoes%20e%20dicas%20para%20aulas%20ao%20vivo/TutorialGoogleMeet_USP.pdf"}} target="_blank"><li>Google Meet</li></Link>
                                    <Link to={{pathname:"http://www.nehte.com.br/simposio/anais/Anais-Hipertexto-2015/A%20utiliza%C3%A7%C3%A3o%20do%20aplicativo.pdf"}} target="_blank"><li>WhatsApp Sala de Aula</li></Link>
                                    <Link to={{pathname:"https://nti.ufes.br/sites/npd.ufes.br/files/field/anexo/tutorial_sobre_o_zoom.pdf"}} target="_blank"><li>Zoom</li></Link>
                                    <Link to={{pathname:"https://www.ifb.edu.br/attachments/article/24429/GuiaTutoriaisGoogleClassroom.pdf"}} target="_blank"><li>Google Classroom</li></Link>
                                    <Link to={{pathname:"https://nucondi.paginas.ufsc.br/files/2020/07/Tutorial-Google-Forms.pdf"}} target="_blank"><li>Google Forms</li></Link>
                                    <Link to={{pathname: "https://www.danieldigital.com.br/blog/como-usar-o-google-drive-tutorial-completo/"}} target="_blank"><li>Google Drive</li></Link>
                                    <Link to={{pathname: "http://diaestudio.com/wp-content/uploads/2016/03/eBook_Botaacaraefaz_rev1.pdf"}} target="_blank"><li>Youtube</li></Link>
                                    <Link to={{pathname: "http://ftp.demec.ufpr.br/disciplinas/TM225/Excel/Apostilas/powerpoint_curso_basico.pdf"}} target="_blank"><li>Power Point</li></Link>
                                    <Link to={{pathname: "http://k01.com.br/downloads/sindusfarma/dec16/TUT_GOOGLE_DOCS.pdf"}} target="_blank"><li>Google Docs</li></Link>
                                    <Link to={{pathname: "https://ufsj.edu.br/portal-repositorio/File/indetec/TUTORIAL%20CANVAS.pdf"}} target="_blank"><li>Canvas</li></Link>
                                </ul>

                            </div>

                            <div>
                                <ul>
                                    <h2>Veja mais:</h2>
                                    <Link to={{pathname: "https://rpead.com.br/"}} target="_blank"><li>Rede Pedagógica</li></Link>
                                    <Link to={{pathname: "https://www.cruzeirodosulvirtual.com.br/cursos-livres-gratuitos/"}} target="_blank"><li>Cruzeiro do Sul Virtual</li></Link>
                                    <Link to={{pathname: "https://www.youtube.com/watch?v=f-NF0VXrHiU&ab_channel=ABQAPRegionalAmap%C3%A1"}} target="_blank"><li>“De repente Professor On-line”</li></Link>
                                    <Link to={{pathname: "https://www.youtube.com/watch?v=9G5mS_OKT0A&ab_channel=TEDxTalks"}} target="_blank"><li>O Profissional do Futuro</li></Link>
                                    <Link to={{pathname: "https://www.youtube.com/watch?v=6OXiGO651NM&list=PLUoUZN9-Ulr8J-5KYH3be6iuVic2iPljM&ab_channel=SebraeSantaCatarina"}} target="_blank"><li>Crescimento exponencial na crise</li></Link>
                                    <Link to={{pathname: "https://www.youtube.com/watch?v=47yJ6e0Fi2o&ab_channel=i9prof"}} target="_blank"><li>Professor Youtuber</li></Link>
                                    <Link to={{pathname: "https://www.youtube.com/watch?v=Sl5rojq8MJI&ab_channel=MoonshotEduca%C3%A7%C3%A3o"}} target="_blank"><li>Engajar e interagir On-line com alunos</li></Link>
                                    <Link to={{pathname:"https://www.youtube.com/watch?v=izpCTPduvvE&ab_channel=UniversidadeAndarilho"}} target="_blank"><li>MINDSET de crescimento</li></Link>
                                </ul>

                            </div>

                        </div>
                    </div>

                </main>
                <footer>

                    <Link to={{ pathname: "https://www.instagram.com/gilmat337/" }} target="_blank">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174855.svg" alt="" height='50px' width='50px' />
                    </Link>

                    <Link to={{ pathname: "https://www.linkedin.com/in/gilvanete-silva/" }} target="_blank">
                        <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt="" height='50px' width='50px' />
                    </Link>
                    <Link to={{ pathname: "https://github.com/Giljared" }} target="_blank">
                        <img src="https://www.flaticon.com/premium-icon/icons/svg/3291/3291695.svg" alt="" height='50px' width='50px' />
                    </Link>
                    <Link to={{pathname: "https://www.facebook.com/Gil1970/"}} target="_blank"><img src="https://www.flaticon.com/svg/static/icons/svg/733/733547.svg" alt="" height='50px' width='50px'/></Link>
                </footer>

            </div>
        </div>
    )
}

export default Home