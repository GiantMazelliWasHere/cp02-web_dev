import React from "react"

export default function Contato() {

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');

    const onChangeN = event => {
        localStorage.setItem('nome', event.target.value);
        
        setNome(event.target.value);
    
    }

    const onChangeS = event => {
        localStorage.setItem('sobrenome', event.target.value);
        
        setSobrenome(event.target.value);
    }

    const onChangeE = event => {
        localStorage.setItem('email', event.target.value);

        setEmail(event.target.value);
    }

    const onChangeT = event => {
        localStorage.setItem('telefone', event.target.value);
        
        setTelefone(event.target.value);
    }

    const onChangeM = event => {
        localStorage.setItem('mensagem', event.target.value);
        
        setMensagem(event.target.value);
    }

    function enviar(event) {
        event.preventDefault();
        
        const contato = {'nome': localStorage.getItem('nome'), 'sobrenome':localStorage.getItem('sobrenome'), 'email': localStorage.getItem('email'), 'telefone': localStorage.getItem('telefone')}
        
        console.log(`Nome: ${localStorage.getItem('nome')}, Sobrenome: ${localStorage.getItem('sobrenome')}, Email: ${localStorage.getItem('email')}, Telefone: ${localStorage.getItem('telefone')}, Mensagem: ${localStorage.getItem('mensagem')}`)
    
    }


    return (
        <div className="flex flex-col items-center p-10  font-mono">
            
            <h2 className="text-5xl pb-10 font-bold"> Contato </h2>
            
            <p className="text-4xl pb-10">Entre em contato pelo formulário abaixo</p>
            
            <div className="grid grid-cols-2 gap-5 text-xl">
                <div>
                    <div>
                        <label for="nome">Nome</label>
                        <div>
                            <input value={nome} onChange={onChangeN} type="text" name="nome" id="nome" placeholder="Nome"/>
                        </div>
                    </div>
                    <div className="mt-5">
                        <label for="Sobrenome">Sobrenome</label>
                        <div>
                            <input value={sobrenome} onChange={onChangeS} type="text" name="sobrenome" id="sobrenome" placeholder="Sobrenome"/>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <label for="email">Email</label>
                        <div>
                            <input value={email} onChange={onChangeE} id="email" name="email" type="email" placeholder="exemplo@email.com"/>
                        </div>
                    </div>

                    <div className="mt-5">
                        <label for="telefone">Telefone</label>
                        <div>
                            <input value={telefone} onChange={onChangeT} id="telefones" name="telefone" type="text" placeholder="(XX) XXXXX-XXXX "/>
                        </div>
                    </div>
                </div>   
                
                <div className=" col-span-full">
                    <label For="about">About</label>   
                    <div>
                        <textarea value={mensagem} onChange={onChangeM} id="about" name="about" rows={3}defaultValue={''} placeholder="Escreva sua mensagem aqui" className=" w-full"/>
                    </div> 
                </div>
            </div>
            
            <div className="mt-5 text-2xl">
                <button onClick={enviar} type="submit" className="border border-solid rounded-lg bg-gradient-to-r from-rose-500 to-rose-900 shadow-lg shadow-gray-500 p-2">Enviar</button>
            </div>


        </div>
    )
}