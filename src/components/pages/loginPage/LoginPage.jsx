import React from 'react'
import './LoginPage.css'
import { Redirect } from 'react-router-dom'
import LoginForm from './LoginForm'
import Card from '../../layout/Card/Card'
import ChatbotComponent from '../../others/Chatbot/Chatbot'
import { Carousel, Dropdown } from 'react-bootstrap'
import cardAd from '../../../images/cardAd.jpg'
import criptoAd from '../../../images/criptoAd.jpg'


export default function LoginPage() {
    var isLogged = localStorage.getItem("isLoggedIn")

    if (isLogged) {
        return <Redirect to="/Main" />
    } else {
        return (

            <div className="LoginPage">
                <div className="TopHeader">
                    <div className="Chatbot">
                        <Dropdown drop="down">
                            <Dropdown.Toggle variant="warning" id="dropdown-basic">
                                Dúvidas com C3PO
                     </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <ChatbotComponent />
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                    <h2>UNIPAY</h2>
                </div>
                <div className="LoginForm">

                    <Card titulo="Login" color="#ffff00" borderR="20px">
                        <LoginForm />
                    </Card>

                </div>

                {/* Carousel com ad do cartão  e das criptomoedas*/}
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={cardAd}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h1>Cartão Unipay</h1>
                            <h2>Adquira nosso cartão e ganhe descontos exclusivos</h2>
                        </Carousel.Caption>
                    </Carousel.Item>

                    <Carousel.Item>
                        <img className="d-block w-100" src={criptoAd} alt="Second slide" />
                        <Carousel.Caption>
                            <h1>Crescimento das Criptomoedas</h1>
                            <h2>O futuro dos pagamentos agora nas suas mãos</h2>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }

}