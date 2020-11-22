import React from 'react'
import './Transferences.css'
import Card from '../../../../layout/Card/Card'

import { Form, Button } from 'react-bootstrap'

function Transfer() {
    alert("Transferência Realizada com sucesso");
}

export default function Transferences() {

    return (
        <div className="Transferences">
            <Card titulo="Transferências" color="gold" borderR="5px">
                <Form onSubmit={() => Transfer()}>
                    <Form.Label>CPF Destinatário</Form.Label>
                    <Form.Control required placeholder="000.000.000-00" /><br />
                    <hr />
                    <Form.Label>Conta Destinatário</Form.Label>
                    <Form.Control required placeholder="00000-00" /><br />
                    <hr />
                    <Form.Label>Valor</Form.Label>
                    <Form.Control required placeholder="R$00,00" /> <br />
                    <Button variant="outline-primary" type="submit">Transferir</Button>
                </Form>
            </Card>
        </div>
    )
}