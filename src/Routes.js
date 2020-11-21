import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/loginPage/LoginPage'
import MainPage from './components/pages/MainPage/MainPage'
import SignupPage from './components/pages/signupPage/SignupPage'

import MyAccount from './components/pages/MainPage/subpages/myAccount/MyAccount'
import Transferences from './components/pages/MainPage/subpages/transferences/Transferences'
import Deposits from './components/pages/MainPage/subpages/deposits/Deposits'
import Payments from './components/pages/MainPage/subpages/payments/Payments'
import Cards from './components/pages/MainPage/subpages/cards/Cards'

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/Login" component={LoginPage} />
                <Route exact path="/Main" component={MainPage} />
                <Route exact path="/Cadastro" component={SignupPage} />

                {/* Paginas dentro do Main */}
                <Route path="/Main/User" component={MyAccount} />
                <Route path="/Main/Transferences" component={Transferences} />
                <Route path="/Main/Deposits" component={Deposits} />
                <Route path="/Main/Payments" component={Payments} />
                <Route path="/Main/Cards" component={Cards} />


                {/* Redireciona para a pagina de Login automaticamente */}
                <Route exact path="/" component={LoginPage} />
            </Switch>
        </BrowserRouter>
    )

}