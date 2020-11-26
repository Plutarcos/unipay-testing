import React, { Component } from 'react'
import './Deposits.css'
import Card from '../../../../layout/Card/Card'
import { Button, Alert } from 'react-bootstrap'


export default class Deposits extends Component {

    state = {
        client: {},
    };

    componentDidMount() {
        const cpf = localStorage.getItem("userCPF")

        fetch(`${process.env.REACT_APP_API_URL}/sistema/clients/${cpf}`)
            .then(client =>
                client.json().then(client => this.setState({ client }))
            )
            .catch(erro => this.setState({ erro }))
    }

    showBtcAddres() {
        document.getElementById('btcAddres').style = "display:block"
        document.getElementById('btcWarning').style = 'display:block'
    }

    render() {
        const { client } = this.state;

        return (
            <div className="Deposits">
                <Card titulo="Depositar">
                    <h3>Endereço bitcoin: <h3 id="btcAddres" Style="display:none">{client.blockchainAddress}</h3></h3>
                    <Alert id="btcWarning" Style="display:none" variant="warning">Utilize este endereço para transferir para a sua conta de outros bancos</Alert>
                    <Button onClick={this.showBtcAddres} variant="warning" type="button">Mostrar</Button>
                </Card>
            </div>
        )
    }
}