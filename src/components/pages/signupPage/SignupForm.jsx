import React from 'react'
import Button from 'react-bootstrap/Button'

export default function SignupForm() {

    return (
        <form action="/Login">
            <label>Nome</label> <input required type="text" /> <label>Sobrenome</label> <input required type="text" /> <br />
            <label>E-Mail</label> <input required type="text" /> <label>Senha</label> <input required type="password" /> <br />
            <label>CPF</label>
            <input required type="text" />
            <label>Telefone</label> <input required type="text" /> <br />
            <Button type="submit" variant="outline-warning">Cadastrar</Button>
        </form>
    )


}