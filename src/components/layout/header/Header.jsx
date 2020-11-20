import React from 'react'
import './Header.css'
import SideBar from '../sideBar/SideBar'

export default function Header() {

    const userName = localStorage.getItem("userName")

    return (
        <header className="MainHeader">
            <div className="Sidebar">
                <SideBar />
            </div>

            <div className="userData">
                <h3>{userName}</h3>
            </div>
        </header>
    )
}