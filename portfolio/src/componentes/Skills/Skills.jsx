export default function Skills(props) {
    return (
        <div>
            <h1 className="text-5xl font-bold">Habilidades:</h1>
            {props.baseLinguagem.map((linguagem)=>(
                <div className="border border-gray-500 rounded-lg bg-gradient-to-r from-rose-500 to-rose-900 p-1 my-5 w-96 shadow-lg shadow-gray-500">
                    <h3 className="text-2xl font-bold">{linguagem.nome}</h3>
                    <p className="text-xl font-medium">Nível: {linguagem.nivel}</p>
                </div>
            ))}
        </div>
    )
}