import React from 'react'
import SignupForm from './SignupForm'
import Card from '../../layout/Card/Card'

import Button from 'react-bootstrap/Button'


import './Signup.css'

export default function LoginPage() {
    return (
        <div>

            <div className="UpperMenu">
                <Card color="gold" borderR="10px">
                    <a href="/Login"><Button variant="outline-warning" type="button">Voltar</Button></a>
                </Card>
            </div>

            <div className="signupForm">
                <Card titulo="Cadastre-se" color="gold">
                    <SignupForm />
                </Card>
            </div>
        </div>
    )
}