import { createChatBotMessage } from "react-chatbot-kit"
import DoubtOptions from "../ChatOptions/criptocurrencys"


const config = {
    botName: 'PimBot',
    initialMessages: [
        createChatBotMessage(`Olá, eu sou o PimBot, O Assistente virtual da Unipay. Em que posso ajuda-lo? `,{
        widget: "doubtOptions",
        
    }),
  ],

 widgets: [
     {
     	widgetName: "doubtOptions",
    	widgetFunc: (props) => <DoubtOptions {...props} />,
     },
 ],
}



export default config