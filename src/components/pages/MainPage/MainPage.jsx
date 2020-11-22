import React from 'react'
import Card from '../../layout/Card/Card'
import { Redirect } from "react-router-dom"


import './MainPage.css'


var isLoggedIn = localStorage.getItem("isLoggedIn") || false


export default function MainPage() {

    if (isLoggedIn) {

        return (
            <div>
                <div className="mainContent">
                    <Card titulo="Resumo da Conta" color="gold" width="500px" height="300px">
                        <h3>Saldo: 35.00Btc</h3>
                        <h3>Conta: 11154-5</h3>
                    </Card>

                </div>

            </div>
        )
    } else {
        return (
            <Redirect to="/" />
        )
    }
}