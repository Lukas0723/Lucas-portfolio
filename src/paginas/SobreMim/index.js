import styles from "./SobreMim.module.css"

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/minhaFoto.png"


export default function SobreMim() {
    return (
       <PostModelo 
       fotoCapa={fotoCapa}
       titulo="Sobre mim">

        <h3 className={styles.subtitulo}>
            Olá, eu sou o Lucas
        </h3>

        <img src={fotoSobreMim}
            alt="Foto do Lucas em uma quadra de futsal"
            className={styles.fotoSobreMim}
        />
        <p className={styles.paragrafo}>
        Olá, seja bem vindo, meu nome é Lucas Roberto de Jesus Silva Mercurio, atualmente eu moro em Bragança Paulista e estudo no AZ Internacional, escola que eu entrei em 2020 e estou até o momento. Nesse site eu vou contar um pouco sobre mim e minha tragetória até os dias de hoje.
        </p>

        <p className={styles.paragrafo}> 
        Eu nasci no dia 22 de Novembro de 2007, em São Paulo. Morei lá até os meus 4 ou 5 anos de idade e depois me mudei para Bragança Paulista em 2013/2014. Durante o tempo que eu estive aqui passei por diversas escolas como Educare, Colégio Adventista e agora estou no AZ Internacional. Aqui muita coisa mudou, comecei a estudar por um computador e parei de usar livros, e isso facilitou muito minha vida principalmente durante a pandemia de 2020 onde tive que ter aulas online e não podia sair de casa.
        </p>

        <p className={styles.paragrafo}>
        Atualmente tenho focado na minha carreira futura com a Programação. De um tempo pra cá participei de alguns eventos gratuitos para ver como seria montar um site ou algo do tipo e decidi que era isso que eu queria pra minha vida como profissão. Então comecei a estudar programação em 2022 por alguns cursos gratuitos e depois me inscrevi na Alura onde aprendi a maior parte da programação que sei hoje. Esse site tinha uma base de um curso da Alura, então decidi reaproveitar algumas partes e fazer um <i>portfólio</i> para mim.
        </p>       

       </PostModelo>
    )
}