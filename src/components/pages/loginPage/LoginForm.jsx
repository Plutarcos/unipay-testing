import React from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'



var isLoggedIn = localStorage.getItem("isLoggedIn") || false

function Login() {
    isLoggedIn = true;
    var userName = document.getElementById("userCPF").value
    localStorage.setItem("isLoggedIn", isLoggedIn)
    localStorage.setItem("userName", userName)
}

export default function LoginForm() {

    if (isLoggedIn === false) {
        return (
            <div className="loginForm">
                <form onSubmit={() => Login()}>
                    <input id="userCPF" type="text" placeholder="CPF" minlength="11" maxlength="11" required /> <br />
                    <input type="password" placeholder="Senha" minlength="8" required/> <br />
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