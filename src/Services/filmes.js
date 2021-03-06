const filmes = [
    {
        id: 1,
        nome: "Clube do Imperador",
        genero: "Educação",
        descricao:  "História de William Hundert, um professor apaixonado pelo trabalho que tem sua vida pacata e controlada totalmente mudada quando um novo estudante, Sedgewick Bell, chega à escola. Porém, o que começa como uma terrível guerra de egos acaba se transformando em uma profunda amizade entre professor e aluno, a qual terá reflexos na vida de ambos nos próximos anos.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/02/30/19871199.jpg"
    },
    {
        id: 2,
        nome: "Entre os Muros da Escola",
        genero: "Educação",
        descricao: "Baseado em livro homônimo, o filme mostra as experiências do professor de literatura François Marin em uma escola de Ensino Médio, localizada na periferia de Paris. O docente tenta estimular os estudantes, mesmo tendo que lidar com o descaso dos alunos.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/03/83/20039763.jpg"
    },
    {
        id: 3,
        nome: "Sociedade dos poetas mortos",
        genero: "Educação",
        descricao: "Robin William é um professor de poesia nada ortodoxo, em uma escola preparatória para jovens. Com o seu talento e sabedoria, ele inspira os seus alunos a perseguir as suas paixões individuais e tornar as suas vidas extraordinárias",
        capa: "https://miro.medium.com/max/605/1*AOkKtO-sZr6KaUegrLfTfA.png"
    },
    {
        id: 4,
        nome: "A Onda",
        genero: "Educação",
        descricao: "Professor decide fazer um projeto com os alunos transformando a sala em um tipo de governo fascista realmente, mas os alunos começam a sair do controle e começam a propagar “A onda” por toda a cidade tornando o projeto um movimento real. Quando as coisas começam a sair do controle, o professor tenta parar o movimento, mas já é tarde demais.",
        capa: "https://www.tribunadeituverava.com.br/wp-content/uploads/2018/05/die-welle.jpg"
    },
    {
        id: 5,
        nome: " Escritores da Liberdade",
        genero: "Educação",
        descricao: "Uma professora tenta combater um sistema deficiente e fazer com que a sala de aula faça a diferença na vida de seus alunos, criados em meio à violência e à agressividade. Por meio de diários, os adolescentes escrevem suas histórias e têm a chance de ter uma voz própria. O longa foi inspirado em eventos reais, relatados pela professora Erin Gruwell e seus alunos no livro “O Diário dos Escritores da Liberdade”.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/94/01/58/20295889.jpg"
    },
    {
        id: 6,
        nome: "Encontrando Forrester",
        genero: "Educação",
        descricao: "O filme retrata diversos cenários do cotidiano envolvendo sentimentos de amizade, confiança e escolha. Mostra o caminho de um jovem de dezesseis anos da periferia de Nova York que consegue uma bolsa de estudos em uma das melhores escolas particulares da cidade, graças às notas que conquistou no colégio público. Só que ele não consegue superar a barreira do preconceito, por ser negro e pobre. O talento do rapaz em escrever o leva a conhecer William Forrester (Sean Connery), um brilhante escritor que vive recluso. Ele percebe a capacidade do jovem e o incentiva a prosseguir. Desse relacionamento, nasce uma bela e edificante amizade.",
        capa: "https://catharsistogo.files.wordpress.com/2013/03/finding-forrester.jpg?w=497"
    },
    {
        id: 7,
        nome: "Larry Crowne – O Amor Está de Volta",
        genero: "Educação",
        descricao: "Larry Crowne (Tom Hanks) trabalha há anos em uma loja, onde já foi escolhido por nove vezes como o funcionário do mês. Um dia, para sua surpresa, ele é demitido por não ter curso superior. Precisando recomeçar do zero, ele resolve se matricular na faculdade. Um dos cursos que realiza é o de oratório, ministrado por Mercedes Tainot (Julia Roberts), que está desanimada devido ao desinteresse dos alunos por sua matéria. A vida na faculdade faz com que Larry ganhe novos amigos, mude seu estilo de vida e se aproxime, cada vez mais, de Mercedes. ",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/91/24/88/20136443.jpg"
    },
    {
        id: 8,
        nome: "Gênio Indomável",
        genero: "Educação",
        descricao: "Will Hunting (Matt Damon) tem 20 anos e já registrou algumas passagens pela polícia. Trabalhando como servente em uma universidade, se revela um gênio em matemática. Ele faz terapia, por decisão judicial, mas não apresenta resultados de melhora porque debocha de todos os analistas. Até encontrar um com quem de se identifica.",
        capa: "https://efemeridesdoefemello.files.wordpress.com/2017/12/2dec17.jpg?w=700&h=700"
    },
    {
        id: 9,
        nome: "Uma Mente Brilhante",
        genero: "Educação",
        descricao: "O filme conta a história real de John Nash que, aos 21 anos, formulou um teorema que provou sua genialidade. Brilhante, Nash chegou a ganhar o Prêmio Nobel. Diagnosticado como esquizofrênico pelos médicos, Nash enfrentou batalhas em sua vida pessoal.",
        capa: "https://upload.wikimedia.org/wikipedia/pt/b/b1/UmaMenteBrilhante.jpg"
    },
    {
        id: 10,
        nome: "Preciosa – Uma História de Esperança",
        genero: "Educação",
        descricao: "Claireece “Preciosa” Jones (Gabourey Sidibe) é uma adolescente de 16 anos que sofre uma série de privações durante sua juventude. Abusada pela mãe, violentada pelo pai e grávida de seu segundo filho, é convidada a frequentar uma escola alternativa, na qual vê a esperança de conseguir dar um novo rumo à sua vida.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/87/90/11/19962710.asp.jpg"
    },
    {
        id: 11,
        nome: "Ao Mestre com Carinho",
        genero: "Educação",
        descricao: "Desempregado, o engenheiro Mark Thackeray (Sidney Poitier) acaba por lecionar em uma escola no East Wend de Londres formada por alunos pobres e sem disciplina. O professor sofre um bocado na mão deles, mas, aos poucos, consegue impor respeito e ganhar a amizade dos estudantes. A canção que leva o nome original do filme, To Sir with Love, da cantora Lulu (que também participa do longa), ficou por cinco semanas no topo da parada norte-americana. Um clássico das sessões vespertinas da TV.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/93/99/17/20293655.jpg"
    },
    {
        id: 12,
        nome: "Mentes Perigosas",
        genero: "Educação",
        descricao: "Michelle Pfeiffer interpreta a professora Louanne Johnson que, após ser hostilizada pelos alunos de uma escola na periferia, aposta em métodos pouco convencionais, como o karatê, para ensiná-los. O longa, baseado em uma história real, ficou famoso pela cançãoGangsta’s Paradise, do rapper Coolio.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/93/99/04/20293398.jpg"
    },
    {
        id: 13,
        nome: "Ser e Ter",
        genero: "Educação",
        descricao: "O documentário de Nicolas Philibert acompanha a rotina de um dedicado professor, George Lopez, no interior da França. Crianças entre 4 e 11 anos dividem a mesma sala de aula do Ensino Fundamental e aprendem a ler, escrever e se relacionar. Indicado a vários prêmios, como o César, (o Oscar francês), o longa tem sido estudado e mostrado em escolas de várias partes do mundo.",
        capa: "https://br.web.img3.acsta.net/pictures/15/01/27/20/53/217567.jpg"
    },
    {
        id: 14,
        nome: "Half Nelson",
        genero: "Educação",
        descricao: "Numa escola do Brooklyn, Nova York, frequentada majoritariamente por alunos negros e latinos, o professor Dan Dunne (Ryan Gosling) ensina História e é técnico do time de basquete feminino. Dunne, que é viciado em drogas, deixa a disciplina de lado e se concentra em discutir filosofia e dialética com os estudantes. O filme centra-se em sua relação com Drew (Shareeka Epps), uma aluna de 13 anos frustrada com a vida que leva. Gosling recebeu uma indicação ao Oscar de melhor ator.",
        capa: "https://upload.wikimedia.org/wikipedia/pt/8/85/Half_Nelson.jpg"
    },
    {
        id: 15,
        nome: "Pro Dia Nascer Feliz",
        genero: "Educação",
        descricao: "Enquanto nos colégios de classe alta de São Paulo, jovens sentem a pressão dos últimos exames do ano, no grande Rio, interior de Pernambuco ou na periferia paulista, alunos professores desmotivados faltam às aulas, escolas enfrentam situações precárias e alunos transformam o ambiente escolar no único compromisso social que têm na semana. Neste documentário angustiante, João Jardim ajuda a traçar um retrato obre a situação escolar do país.",
        capa: "https://1.bp.blogspot.com/-pVdeQFTm9ho/Vk9edtlrXqI/AAAAAAAAHp4/viXa_yES7WY/s1600/157.jpg"
    },
    {
        id: 16,
        nome: "O Sorriso de Mona Lisa",
        genero: "Educação",
        descricao: "A história do filme possui uma lógica bastante parecida com a de “Sociedade dos Poetas Mortos”. Em ambos, um professor está disposto a romper as barreiras impostas pela educação tradicional para mostrar aos estudantes a importância de correrem atrás de seu potencial, evitando uma postura conformista perante a vida. Porém, retrata um colégio exclusivo para garotas, com Julia Roberts (Katherine Ann Watson).",
        capa: "https://2.bp.blogspot.com/-bC5a7CtCz_M/Wp1_z1Qsu0I/AAAAAAAAAeY/S5xX7Ik-sKsItXVPdLtaKeM6IlSW_VJeACLcBGAs/s1600/O-SORRISO-DE-MONA-LISA.jpg"
    },
    {
        id: 17,
        nome: "Escola de Rock",
        genero: "Educação",
        descricao: "Dewey Finn, personagem de Jack Black, é um músico sem banda e endividado que assume temporariamente uma turma da quarta série em uma escola privada. Em pouquíssimo tempo, Finn detecta o talento musical de seus estudantes e resolve formar a banda que dá nome ao filme. No processo, as crianças vão adquirindo mais segurança em relação a seus interesses e a suas identidades.",
        capa: "https://br.web.img3.acsta.net/medias/nmedia/18/91/90/98/20169244.jpg"
    },
    {
        id: 18,
        nome: "Matilda",
        genero: "Educação",
        descricao: "Matilda, personagem da atriz Mara Wilson, tem 6 anos e é extremamente inteligente. O problema é que toda essa inteligência passa completamente despercebida em casa, onde ela convive com pais mal-humorados. Na escola, sua situação não é muito melhor. Para lidar com seus problemas, Matilda começa a desenvolver poderes paranormais e é ajudada por uma professora muito afetuosa, Miss Honey, que se solidariza com a situação.",
        capa: "https://br.web.img3.acsta.net/pictures/210/123/21012312_20130613132958221.jpg"
    }
]

export default filmes