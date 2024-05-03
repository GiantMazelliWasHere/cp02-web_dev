import Projeto from "../componentes/Projeto/Projeto"

export default function Projetos() {

    const baseProjetos = [
        {nome: "Challange FIAP e HC", descricao: "Desafio proposto pelo time InovaHC onde deviamos desenvolver uma solução para a falta de conhecimento sobre os exames realisados pelso pacientes", link: "https://github.com/GiantMazelliWasHere/HC-Challenge"},
        {nome: "Sistema báscio de busca e randomizador", descricao: "Um sistema simples de busca e randomização de elementos que funciona em um documento .txt e serve escolher o que assisstir ou ouvir", link: "https://github.com/GiantMazelliWasHere/Services"},
        {nome: "Aplicativo de dosagem de remédio", descricao: "Um app com capacidade de calcular a dosagem de remédios, baseado no peso e na altura do paciente. Ele também conta com um conversor de medidas", link: "https://github.com/GiantMazelliWasHere/HC-Challenge-Sprint_3-Python"} 
    ]


    return (
        <div className="flex flex-col items-center p-10 font-mono ">
            <h1 className=" text-5xl font-bold">Projetos</h1>
            <Projeto baseProjetos={baseProjetos}/>
        </div>
    )
}