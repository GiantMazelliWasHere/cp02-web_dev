export default function Info(props) {
    return (
        <div>
            <h2 className="text-5xl">Informações Pessoais:</h2>
            {props.baseUsuario.map((usuario)=>(
                <div className="flex justify-between pt-5 gap-2">
                    <img src={usuario.img} alt="Eduardo Mazelli" className=" size-52 rounded-md"/>
                    <div className="flex flex-col">
                        <p className="text-2xl mb-14">Nome: {usuario.nome}</p>
                        <p className="text-2xl mb-14">Email: {usuario.email}</p>
                        <p className="text-2xl">Telefone: {usuario.telefone}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}