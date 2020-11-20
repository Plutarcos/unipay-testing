import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'


var isLoggedIn = localStorage.getItem("isLoggedIn") || false

function Login() {
    isLoggedIn = true;
    var userName = document.getElementById("userName").value
    localStorage.setItem("isLoggedIn", isLoggedIn)
    localStorage.setItem("userName", userName)
}

export default function LoginForm() {

    if (isLoggedIn === false) {
        return (
            <div>
                <form onSubmit={() => Login()}>
                    <input id="userName" type="text" placeholder="Usuario" required /> <br />
                    <input type="password" placeholder="Senha" required/> <br />
                    <Button type="submit" variant="outline-warning">Login</Button>
                    <a href="/Cadastro"><Button variant="outline-warning" type="button">Cadastrar</Button> </a>
                </form>
            </div>
        )
    } else {
        return (
            <Redirect to="/Main" />
        )
    }

}