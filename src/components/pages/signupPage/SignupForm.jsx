import React from 'react'

export default function SignupForm() {

    return (
        <form action="/Login">
            <label>Nome</label> <input type="text" /> <label>Sobrenome</label> <input type="text" /> <br />
            <label>E-Mail</label> <input type="text" /> <label>Senha</label> <input type="password" /> <br />
            <label>CPF</label>
            <input type="text" />
            <label>Telefone</label> <input type="text" /> <br />
            <button type="submit">Cadastrar</button>
        </form>
    )


}