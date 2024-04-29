import Info from "../componentes/Info/Info"
import Linguas from "../componentes/Linguas/Linguas"
import Skills from "../componentes/Skills/Skills"

export default function Home() {

    const baseUsuarios = [
        {nome:"Eduardo Mazelli", email: "eduardo.mazelli@gmail.com", telefone: "(11) 97649-4397"}
    ]

    const baseLinguagens = [
        {nome: "HTML", nivel: "Intermediário"},
        {nome: "CSS", nivel: "Básico"},
        {nome: "javaScript", nivel: "Básico"},
        {nome: "Python", nivel: "Intermediário"},
    ]

    const baseLinguas = [
        {nome: "Português", nivel: "Nativo"},
        {nome: "Inglês", nivel: "Fluente"},
        {nome: "Alemão", nivel: "Básico" },
        {nome: "Japonês", nivel: "Básico"}
    ]


    return (
        <div>
            <h1>Home</h1>
            <Info baseUsuario={baseUsuarios}/>
            <Skills baseLinguagem={baseLinguagens}/>
            <Linguas baseLingua={baseLinguas}/>
            
        </div>
    )
}