import React, { Component } from "react";
import './Transferences.css'
import Card from '../../../../layout/Card/Card'

import { Form, Button } from 'react-bootstrap'


class Transferences extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client: {
                moneyBalance: "",
                blockchainAddress: "",
            },
            erro: null,
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            )
        }
    }

    componentDidMount() {
        const cpf = localStorage.getItem("userCPF")

        fetch(`${process.env.REACT_APP_API_URL}/sistema/clients/${cpf}`)
            .then(client =>
                client.json().then(client => this.setState({ client }))
            )
            .catch(erro => this.setState({ erro }))
    }

    render() {
        return (
            <div className="Payments">
                <Card titulo="Transferir" color="gold" borderR="5px">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Label>Endereço Blockchain Destinatário</Form.Label>
                        <Form.Control required id="blockchainAddress" name="blockchainAddress" type="text" placeholder="Endereço Blockchain" onChange={this.handleInputChange} /><br />
                        <hr />
                        <Form.Label>Valor</Form.Label>
                        <Form.Control required id="moneyBalance" name="moneyBalance" type="text" placeholder="R$00,00" onChange={this.handleInputChange} /> <br />
                        <Button variant="outline-primary" type="submit">Transferir</Button>
                    </Form>
                </Card>
            </div>
        )
    }

    handleInputChange = event => {
        const target = event.target
        const name = target.name
        const value = target.value

        this.setState(prevState => ({
            client: { ...prevState.client, [name]: value }
        }))
    }

    handleSubmit = event => {
        const { id, blockchainAddress, moneyBalance } = this.state.client

        fetch(`${process.env.REACT_APP_API_URL}/sistema/pay/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.client),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    alert('Realizando Transferência...')
                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error })
                        }
                    });
                }
            })

            .catch(erro => this.setState({ erro: erro }))
            fetch(`${process.env.REACT_APP_API_URL}/sistema/transfer/${blockchainAddress}`, {
                method: "put",
                body: {"moneyBalance": moneyBalance},
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(data => {
                    if (data.ok) {
                        alert('Transferência Realizada!')
                    } else {
                        data.json().then(data => {
                            if (data.error) {
                                this.setState({ erro: data.error })
                            }
                        });
                    }
                })
                .catch(erro => this.setState({ erro: erro }))

        event.preventDefault()
    };
}

export default Transferences
