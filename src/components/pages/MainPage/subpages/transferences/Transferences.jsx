import React from 'react'
import './Transferences.css'
import Card from '../../../../layout/Card/Card'

export default function Transferences() {

    return (
        <div className="Transferences">
            <h1>Transferências</h1>
            <Card>
                <form action="">
                    <label>CPF</label><input required type="text" placeholder="000.000.000-00"/> <br/>
                </form>
            </Card>
        </div>
    )
}