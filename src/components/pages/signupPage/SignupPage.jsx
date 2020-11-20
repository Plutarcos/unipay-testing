import React from 'react'
import SignupForm from './SignupForm'
import Card from '../../layout/Card/Card'
import './Signup.css'

export default function LoginPage() {
    return (
        <div>

            <div className="UpperMenu">
                <Card color="grey">
                    <a href="/Login"><button type="button">Voltar</button></a>
                    <a href="https://www.google.com">Ajuda</a>
                </Card>
            </div>

            <div className="signupForm">
                <Card titulo="Cadastre-se" color="dimgrey">
                    <SignupForm />
                </Card>
            </div>
        </div>
    )
}