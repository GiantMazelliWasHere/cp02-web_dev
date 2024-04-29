export default function Linguas(props) {
    return (
        <div>
            <h2>Línguas:</h2>
            {props.baseLingua.map((lingua)=>(
                <div>
                    <p>{lingua.nome} - {lingua.nivel}</p>
                </div>
            ))}
        </div>
    )
}