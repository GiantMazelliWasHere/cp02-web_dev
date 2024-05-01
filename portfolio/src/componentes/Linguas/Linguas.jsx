export default function Linguas(props) {
    return (
        <div>
            <h2 className="text-5xl mt-10">Línguas:</h2>
            {props.baseLingua.map((lingua)=>(
                <div className="flex gap-3 mt-5 text-2xl border border-gray-500 rounded-lg bg-gradient-to-r from-purple-500 to-purple-900 pl-0.5 pr-1.5 w-fit shadow-lg shadow-gray-500">
                    <p className=" font-bold">{lingua.nome}</p> 
                    - 
                    <p>{lingua.nivel}</p>
                </div>
            ))}
        </div>
    )
}