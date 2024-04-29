export default function Skills(props) {
    return (
        <div>
            <h2>Habilidades:</h2>
            {props.baseLinguagem.map((linguagem)=>(
                <div>
                    <h3>{linguagem.nome}</h3>
                    <p>Nível: {linguagem.nivel}</p>
                </div>
            ))}
        </div>
    )
}