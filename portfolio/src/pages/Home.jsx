import Info from "../componentes/Info/Info";
import Linguas from "../componentes/Linguas/Linguas";
import Skills from "../componentes/Skills/Skills";
import perfil from "../img/perfil.png";

export default function Home() {

    const baseUsuarios = [
        {img: perfil, nome:"Eduardo Mazelli", email: "eduardo.mazelli@gmail.com", telefone: "(11) 97649-4397"}
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
        <div className="flex justify-between m-0 py-10 px-20 font-mono">
            <div>
                <Info baseUsuario={baseUsuarios}/>
                <Linguas baseLingua={baseLinguas}/>
            </div>
            <Skills baseLinguagem={baseLinguagens}/>
            
        </div>
    )
}