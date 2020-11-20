import React from 'react'
import './Header.css'

export default function Header() {

    const userName = localStorage.getItem("userName")

    return (
        <header className="MainHeader">
            <div className="userData">
                <h2>{userName}</h2>
            </div>
        </header>
    )
}