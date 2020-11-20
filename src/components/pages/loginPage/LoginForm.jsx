import React from 'react'
import { Redirect, BrowserRouter, Switch, Route } from 'react-router-dom'


var isLoggedIn = localStorage.getItem("isLoggedIn") || false

function Login() {
    isLoggedIn = true;
    localStorage.setItem("isLoggedIn", isLoggedIn)
}

export default function LoginForm() {

    if (isLoggedIn == false) {
        return (
            <div>
                <form onSubmit={() => Login()}>
                    <input type="text" placeholder="Usuario" /> <br />
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