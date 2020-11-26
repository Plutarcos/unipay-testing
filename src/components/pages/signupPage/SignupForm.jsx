import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import { Redirect } from "react-router-dom";

var data = new Date()
var diaLimite = (data.getFullYear() - 18) + "-" + (data.getMonth() + 1) + "-" + data.getDate();
console.log("Data limite:" + diaLimite)

var result = '';
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;
for (var i = 0; i < 34; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
}

class SignupClient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            client: {
                clientName: "",
                cpf: "",
                dataNasc: "",
                password: "",
                phoneNumber: "",
                moneyBalance: "00",
                address: "",
                email: "",
                blockchainAddress: result
            },
            erro: null,
            redirect: false
        };
    }

    exibeErro() {
        const { erro } = this.state;

        if (erro) {
            return (
                <div className="alert alert-danger" role="alert">
                    Erro de conexão com o servidor
                </div>
            );
        }
    }


    render() {
        const { redirect } = this.state;
        if (redirect) {
            return <Redirect to="/Login" />;
        } else {
            return (
                <form onSubmit={this.handleSubmit}>
                    <fieldset>
                        <label>Nome completo</label> <br /> <input required id="clientName" name="clientName" type="text" size="40" value={this.state.client.clientName} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>E-Mail</label> <br /> <input required id="email" name="email" type="text" size="30" value={this.state.client.email} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>CPF</label> <br /> <input required id="cpf" name="cpf" type="text" minLength="11" maxLength="11" size="11" value={this.state.client.cpf} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>Data de Nascimento</label> <br /> <input required id="dataNasc" name="dataNasc" type="date" max={diaLimite} value={this.state.client.dataNasc} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>Senha</label> <br /> <input required id="password" name="password" type="password" minLength="8" value={this.state.client.password} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>Endereço</label> <br /> <input required id="address" name="address" type="text" size="50" value={this.state.client.address} onChange={this.handleInputChange} /> <br />
                        <hr />
                        <label>Telefone</label> <br /> <input required id="phoneNumber" name="phoneNumber" type="text" value={this.state.client.phoneNumber} onChange={this.handleInputChange} />  <br />

                        <Button type="submit" variant="outline-warning">Cadastrar</Button>
                    </fieldset>
                </form>
            )
        }
    }

    handleInputChange = event => {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState(prevState => ({
            client: { ...prevState.client, [name]: value }
        }));
        console.log(value);
    };

    handleSubmit = event => {
        fetch(`${process.env.REACT_APP_API_URL}/sistema/clients`, {
            method: "post",
            body: JSON.stringify(this.state.client),
            headers: {
                "Content-Type": "application/json"
            }
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

export default SignupClient;