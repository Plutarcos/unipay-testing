import React, { Component } from 'react'
import Card from '../../layout/Card/Card'
import { Redirect } from "react-router-dom"


import './MainPage.css'


var isLoggedIn = localStorage.getItem("isLoggedIn") || false


export default class MainPage extends Component {

    state = {
        client: {},
    };

    componentDidMount() {
        const cpf = localStorage.getItem("userCPF")

        fetch(`${process.env.REACT_APP_API_URL}/sistema/clients/${cpf}`)
            .then(client =>
                client.json().then(client => this.setState({ client },
                    localStorage.setItem("userName", client.clientName))
                )
                
            )
            .catch(erro => this.setState({ erro }))

    }

    

    render() {
        const { client } = this.state;

        if (isLoggedIn) {

            return (
                <div>
                    <div className="mainContent">
                        <Card titulo="Resumo da Conta" color="gold" width="500px" height="300px">
                            <h3 style={client.moneyBalance <= 0 ? { color: 'red' } : { color: 'green' }}>Saldo: {parseFloat(client.moneyBalance).toFixed(2)}Btc</h3>
                            <h2>Conta: N°{client.id}</h2>
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
}