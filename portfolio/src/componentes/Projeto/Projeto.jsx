export default function Projeto(props) {
    return (

        <div>
            {props.baseProjetos.map((projeto)=>(
                <div>
                    <h2>{projeto.nome}</h2>
                    <p>{projeto.descricao}</p>
                    <a href={projeto.link}>Link do Projeto no Github</a>
                </div>
            ))}
        </div>
    )
}