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
                <Dropdown>
                    <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                        Menu
                </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/User">Minha Conta</Dropdown.Item>
                        <Dropdown.Item href="#/Deposits">Depósitos</Dropdown.Item>
                        <Dropdown.Item href="#/Payments">Pagamentos</Dropdown.Item>
                        <Dropdown.Item href="#/Cards">Cartões</Dropdown.Item>
                        <Dropdown.Item href="#/Extract">Extrato</Dropdown.Item>
                        <Dropdown.Item href="/Login" onClick={() => Logout()}>Sair</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        </div>
    )
}