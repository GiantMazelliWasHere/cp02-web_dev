import React from "react"

export default function Contato() {

    const [nome, setNome] = React.useState('');
    const [sobrenome, setSobrenome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');

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

    function onSubmit(event) {
        event.preventDefault();
        
        const contato = {'nome': localStorage.getItem('nome'), 'sobrenome':localStorage.getItem('sobrenome'), 'email': localStorage.getItem('email'), 'telefone': localStorage.getItem('telefone')}
        
        console.log(contato)
    
    }


    return (
        <div>
            <h2>Contato</h2>

            <div>
                <div>
                    <label for="nome">Nome</label>
                    <div>
                        <input value={nome} onChange={onChangeN} type="text" name="nome" id="nome" autocomplete="nome"/>
                    </div>
                </div>
                <div>
                    <label for="Sobrenome">Sobrenome</label>
                    <div>
                        <input value={sobrenome} onChange={onChangeS} type="text" name="sobrenome" id="sobrenome" autocomplete="sobrenome"/>
                    </div>
                </div>
                <div>
                    <label for="email">Email</label>
                    <div>
                        <input value={email} onChange={onChangeE} id="email" name="email" type="email" autocomplete="email"/>
                    </div>
                </div>

                <div>
                    <label for="telefone">Telefone</label>
                    <div>
                        <input value={telefone} onChange={onChangeT} id="telefones" name="telefone" type="text" autocomplete="telefone"/>
                    </div>
                </div>
                <button onClick={onSubmit} type="submit">Save</button>
            </div>
        </div>
    )
}