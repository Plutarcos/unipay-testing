import React from 'react'
import './Card.css'

export default function Card(props){

    const cardStyle = {
        backgroundColor: props.color || 'gold',
        borderColor: props.color || 'gold',
        width: props.width || 'fit-content',
        height: props.height || 'fit-content',
        borderRadius: props.borderR || '80px'
    }
    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{props.titulo}</div>
            <div className="Content">{props.children}</div>
        </div>
    )
}