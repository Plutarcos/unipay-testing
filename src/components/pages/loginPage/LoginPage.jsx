import React from 'react'
import './LoginPage.css'
import LoginForm from './LoginForm'
import Card from '../../layout/Card/Card'


export default function LoginPage() {

        return (

            <div className="LoginPage">
                <Card titulo="Login" color="dimgrey">
                    <LoginForm />
                </Card>
            </div>
        )

}