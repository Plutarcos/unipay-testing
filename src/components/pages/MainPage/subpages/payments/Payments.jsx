import React, { Component } from "react";
import './Payments.css'
import Card from '../../../../layout/Card/Card'

import { Form, Button } from 'react-bootstrap'


class Payments extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client: {
                moneyBalance: ""
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
        if (this.state.client.moneyBalance <= 0) {
            return (
                <div className="Payments">
                    <Card titulo="Pagamentos" color="gold" borderR="5px">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.File disabled label="Boleto em PDF" />
                            <hr />
                            <Form.Label>Número do Boleto</Form.Label>
                            <Form.Control disabled placeholder="Insira aqui o numero do boleto" /> <br />
                            <hr />
                            <h4 style={{ color: 'red' }}>Saldo Insuficiente</h4>
                            <Form.Control disabled id="moneyBalance" name="moneyBalance" type="text" required placeholder="R$00,00" onChange={this.handleInputChange} /> <br />
                            <Button disabled variant="outline-primary" type="submit">Transferir</Button>
                        </Form>
                    </Card>
                </div>
            )
        } else {
            return (
                <div className="Payments">
                    <Card titulo="Pagamentos" color="gold" borderR="5px">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.File label="Boleto em PDF" />
                            <hr />
                            <Form.Label>Número do Boleto</Form.Label>
                            <Form.Control placeholder="Insira aqui o numero do boleto" /> <br />
                            <hr />
                            <Form.Label>Valor a pagar <Form.Label style={{opacity: 0.4}}>- (em reais)</Form.Label></Form.Label>
                            <Form.Control id="moneyBalance" name="moneyBalance" type="text" required placeholder="R$00,00" onChange={this.handleInputChange} /> <br />
                            <Button variant="outline-primary" type="submit">Transferir</Button>
                        </Form>
                    </Card>
                </div>
            )
        }
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
        const { id } = this.state.client
        fetch(`${process.env.REACT_APP_API_URL}/sistema/pay/${id}`, {
            method: "put",
            body: JSON.stringify(this.state.client),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(data => {
                if (data.ok) {
                    alert('Pagamento realizado com sucesso')
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

export default Payments
