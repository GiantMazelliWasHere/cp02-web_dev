import { FaGithubSquare } from "react-icons/fa";

export default function Projeto(props) {
    return (

        <div>
            {props.baseProjetos.map((projeto)=>(
                <div className=" flex justify-center flex-col my-20 border border-red-400 shadow-xl shadow-gray-700 text-3xl">
                    <div className="flex flex-col bg-gradient-to-r from-rose-500 to-rose-900">
                        <h2 className="self-center p-2 font-bold">{projeto.nome}</h2>
                    </div>
                    <p className=" px-5 pt-2 text-xl text-wrap">{projeto.descricao}</p>
                    <div className="mx-auto my-3 border border-gray-600 bg-gradient-to-r from-rose-500 to-rose-900 rounded-lg shadow-md shadow-gray-600 p-1">
                        <div className="flex justify-center gap-2 p-0.5">
                        <FaGithubSquare className=" self-center"/>
                        <a href={projeto.link} className=" font-light">  Link do Projeto no Github</a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}