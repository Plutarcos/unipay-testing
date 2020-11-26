import React, { Component } from 'react'
import './MyAccount.css'
import Card from '../../../../layout/Card/Card'
import moment from 'moment'
import 'moment/locale/pt-br'

export default class MyAccount extends Component {
    
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
    

    render() {
        moment.locale('pt-br');
        const { client } = this.state;

        return (
            <div className="MyAccount">
                <Card titulo="Dados da Conta">
                    
                    <h2>Nome: {client.clientName}</h2>
                    <hr/>
                    <h2>Conta: N°{client.id}</h2>
                    <hr/>
                    <h2>CPF: {client.cpf} </h2>
                    <hr/>
                    <h2>Data de Nascimento: {moment(client.dataNasc).format('LL')} </h2>
                    <hr/>
                    <h2>E-mail: {client.email} </h2>
                    <hr/>
                    <h2>Endereço: {client.address} </h2>
                    <hr/>
                    <h2>Telefone: {client.phoneNumber} </h2>
                    <hr/>
                    <h2>Membro desde: {moment(client.createdAt).format('LL')} </h2>
                </Card>
            </div>
        )
    }
}