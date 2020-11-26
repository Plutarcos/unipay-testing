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
            <Card titulo="Transferir" color="gold" borderR="5px">
                <Form onSubmit={() => Transfer()}>
                    <Form.Label>Endereço Blockchain Destinatário</Form.Label>
                    <Form.Control required placeholder="Endereço Blockchain" /><br />
                    <hr />
                    <Form.Label>Valor</Form.Label>
                    <Form.Control required placeholder="R$00,00" /> <br />
                    <Button variant="outline-primary" type="submit">Transferir</Button>
                </Form>
            </Card>
        </div>
    )
}