import React from 'react'
import './Payments.css'
import Card from '../../../../layout/Card/Card'

import { Form, Button } from 'react-bootstrap'

function Pay(){
    alert("Pagamento realizado com sucesso")
}

export default function Payments() {

    return (
        <div className="Payments">
            <Card titulo="Pagamentos" color="gold" borderR="5px">
                <Form onSubmit={() => Pay()}>
                    <Form.File required label="Boleto em PDF" />
                    <hr />
                    <Form.Label>Valor a pagar</Form.Label>
                    <Form.Control required placeholder="R$00,00" /> <br />
                    <Button variant="outline-primary" type="submit">Transferir</Button>
                </Form>
            </Card>
        </div>
    )
}