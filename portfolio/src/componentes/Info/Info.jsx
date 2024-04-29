export default function Info(props) {
    return (
        <div>
            <h2>Informações Pessoais</h2>
            {props.baseUsuario.map((usuario)=>(
                <div>
                    <p>Nome: {usuario.nome}</p>
                    <p>Email: {usuario.email}</p>
                    <p>Telefone: {usuario.telefone}</p>
                </div>
            ))}
        </div>
    )
}