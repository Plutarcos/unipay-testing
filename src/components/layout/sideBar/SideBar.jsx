import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

import './SideBar.css'


function Logout() {
    localStorage.clear()
}

export default function SideBar() {
    return (
        <div>
            <div className="sideBar">
                <Dropdown >
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Menu
                </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="/Main">Pagina Principal</Dropdown.Item>
                        <Dropdown.Item href="/Main/User">Minha Conta</Dropdown.Item>
                        <Dropdown.Item href="/Main/Payments">Pagamentos</Dropdown.Item>
                        <Dropdown.Item href="/Main/Deposits">Depósitos</Dropdown.Item>
                        <Dropdown.Item href="/Main/Transferences">Transferir</Dropdown.Item>
                        <Dropdown.Item href="/Login" onClick={() => Logout()}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}