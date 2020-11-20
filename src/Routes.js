import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import MainPage from './components/pages/MainPage/MainPage'
import SignupPage from './components/pages/signupPage/SignupPage'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Login" component={LoginPage} />
                <Route exact path="/Main" component={MainPage} />
                <Route exact path="/Cadastro" component={SignupPage} />



                {/* Redireciona para a pagina de Login automaticamente */}
                <Route exact path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )

}