import React from 'react'
import Chatbot from 'react-chatbot-kit'

import ActionProvider from './ActionProvider';
import MessageParser from './MessageParser';
import config from './config';


export default function ChatbotComponent() {
    return (
        <div>
            <Chatbot headerText="Conversando com: PimBot" placeholderText="Envie sua mensagem" config={config} actionProvider={ActionProvider} messageParser={MessageParser} />
        </div>
    )
}