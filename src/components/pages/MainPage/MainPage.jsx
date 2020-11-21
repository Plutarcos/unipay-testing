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
                    <Card titulo="Minha Conta" color="gold" width="500px" height="300px">
                        <h3>Saldo: </h3>
                        <h3>Fatura: </h3>
                        <h3>Limite: </h3>
                    </Card>


                        {/* Map com as transferências feitas */}
                    <Card titulo="Transferências" color="gold" width="500px" height="300px">
                        <ul style={{ listStyle: 'none', textAlign: 'initial' }}>
                            <li> 1- Nome: Marcos Paulo - Valor:R$50,00</li>
                            <li> 1- Nome: Paulo Marcos - Valor:R$500,00</li>
                            <li> 1- Nome: Parcos Maulo - Valor:R$5000,00</li>
                            <li> 1- Nome: Marlo Paucos - Valor:R$50000,00</li>
                        </ul>
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