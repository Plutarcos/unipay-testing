import React from 'react'
import './LoginPage.css'

import LoginForm from './LoginForm'
import Card from '../../layout/Card/Card'
import ChatbotComponent from '../../others/Chatbot/Chatbot'
import { Carousel, Dropdown } from 'react-bootstrap'
import cardAd from '../../../images/cardAd.jpg'
import criptoAd from '../../../images/criptoAd.jpg'


export default function LoginPage() {

    return (

        <div className="LoginPage">
            <h2>UNIPAY</h2>
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

            <div className="Chatbot">
                <Dropdown drop="up">
                    <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                        Ajuda
                     </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <ChatbotComponent />
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )

}