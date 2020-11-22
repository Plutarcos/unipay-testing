import React from 'react'
import './Deposits.css'
import Card from '../../../../layout/Card/Card'
import { Button, Alert } from 'react-bootstrap'

function showBtcAddres() {
    document.getElementById('btcAddres').textContent = "KLJoTD89YT8ubIGHhtyIOdc44fDwsKk872"
    document.getElementById('btcWarning').style = 'display:block'
}

export default function Deposits() {

    return (
        <div className="Deposits">
            <Card titulo="Depositar">
                <h3>Endereço bitcoin: <h3 id="btcAddres"> ---------------------------------- </h3></h3>
                <Alert id="btcWarning" Style="display:none" variant="warning">Utilize este endereço para transferir para a sua conta de outros bancos</Alert>
                <Button onClick={() => showBtcAddres()} variant="warning" type="button">Mostrar</Button>
            </Card>
        </div>
    )
}