import React, { Component } from 'react'
import './MyAccount.css'
import Card from '../../../../layout/Card/Card'
import { Button } from 'react-bootstrap'
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
                    <hr />
                    <h2>Conta: N°{client.id}</h2>
                    <hr />
                    <h2>CPF: {client.cpf} </h2>
                    <hr />
                    <h2>Data de Nascimento: {moment(client.dataNasc).format('LL')} </h2>
                    <hr />
                    <h2>E-mail: {client.email} </h2>
                    <hr />
                    <h2>Endereço: {client.address} </h2>
                    <hr />
                    <h2>Telefone: {client.phoneNumber} </h2>
                    <hr />
                    <h2>Membro desde: {moment(client.createdAt).format('LL')} </h2>

                    <Button variant="outline-danger" onClick={this.handleClick}>Transferir</Button>
                </Card>
            </div>
        )
    }
    handleClick = event => {
        const { id } = this.props.match.params;

        fetch(`${process.env.REACT_APP_API_URL}/sistema/clients/${id}`, {
            method: "delete"
        })
            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true });
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                        }
                    });
                }
            })
            .catch(erro => this.setState({ erro: erro }));

        event.preventDefault();
    };

}