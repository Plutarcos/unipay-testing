import React from 'react'
import ChatbotComponent from '../../others/Chatbot/Chatbot'
import Dropdown from 'react-bootstrap/Dropdown'

import './SideBar.css'


function Logout() {
    localStorage.clear()
}

export default function SideBar() {
    return (
        <div>
            <div className="sideBar">
                <div className="buttons">
                    <a href="#User">Minha Conta</a>
                    <a href="#Deposits">Depósitos</a>
                    <a href="#Payments">Pagamentos</a>
                    <a href="#Cards">Cartões</a>
                    <a href="#Extract">Extrato</a>
                    <a href="/Login" onClick={() => Logout()}>Sair</a>
                </div>
            </div>

            <div className="Chatbot">
                <Dropdown>
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