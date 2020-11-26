import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

export default class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            client: {
                cpf: "",
                password: "",
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
            return <Redirect to="/Main" />;
        } else {
            return (
                <div className="loginForm">
                    <form onSubmit={this.handleSubmit}>
                        <input id="cpf" name="cpf" type="text" placeholder="CPF" minLength="11" maxLength="11" required value={this.state.client.cpf} onChange={this.handleInputChange} /> <br />
                        <input id="password" name="password" type="password" placeholder="Senha" minLength="8" required value={this.state.client.password} onChange={this.handleInputChange} /> <br />
                        <Button type="submit" variant="outline-warning">Login</Button>
                        <a href="/Cadastro"><Button variant="outline-warning" type="button">Cadastrar</Button> </a>
                    </form>
                </div>
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

        fetch(`${process.env.REACT_APP_API_URL}/sistema/login/${this.state.client.cpf}/${this.state.client.password}`, {
        })

            .then(data => {
                if (data.ok) {
                    this.setState({ redirect: true }); 
                    localStorage.setItem("isLoggedIn", 'true')
                    localStorage.setItem("userCPF", this.state.client.cpf)
                    window.location.reload()


                } else {
                    data.json().then(data => {
                        if (data.error) {
                            this.setState({ erro: data.error });
                            alert('CPF ou Senha Incorretos')
                            window.location.reload()
                        }
                    });
                }
            })
        event.preventDefault();
    };
}
