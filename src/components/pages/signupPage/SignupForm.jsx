import React from 'react'
import Button from 'react-bootstrap/Button'

var data = new Date()
var diaLimite = (data.getFullYear() - 18) + "-" + (data.getMonth() + 1) + "-" + data.getDate();
console.log("Data limite:" + diaLimite)

export default function SignupForm() {


    return (
        <form action="/Login">
            <fieldset>
                <label>Nome completo</label> <br /> <input required type="text" size="40"/> <br />
                <hr/>
                <label>E-Mail</label> <br /> <input required type="text" size="30" /> <br />
                <hr/>
                <label>CPF</label> <br /> <input required type="text" minLength="11" maxlength="11" size="11" /> <br />
                <hr/>
                <label>Data de Nascimento</label> <br /> <input required type="date" max={diaLimite} /> <br />
                <hr/>
                <label>Senha</label> <br /> <input required type="password" minLength="8" /> <br />
                <hr/>
                <label>Endereço</label> <br /> <input required type="text" size="50" /> <br />
                <hr/>
                <label>Telefone</label> <br /> <input required type="text" />  <br />
                
                <Button type="submit" variant="outline-warning">Cadastrar</Button>
            </fieldset>
        </form>
    )


}