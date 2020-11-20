import React from 'react'
import { Redirect } from 'react-router-dom'


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
                    <input id="userName" type="text" placeholder="Usuario" /> <br />
                    <input type="password" placeholder="Senha" /> <br />
                    <button type="submit">Login</button>
                    <a href="/Cadastro"><button type="button">Cadastrar</button> </a>
                </form>
            </div>
        )
    } else {
        return (
            <Redirect to="/Main" />
        )
    }

}