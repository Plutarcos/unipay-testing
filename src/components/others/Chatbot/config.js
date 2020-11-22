import { createChatBotMessage } from "react-chatbot-kit"
import DoubtOptions from "../ChatOptions/criptocurrencys"
import MoreInfo from "../ChatOptions/moreInfo"



const config = {
    botName: 'PimBot',
    initialMessages: [
        createChatBotMessage(`Olá, eu sou o PimBot, O Assistente virtual da Unipay. Em que posso ajuda-lo? `, {
            widget: "doubtOptions",

        }),
    ],

    widgets: [
        {
            widgetName: "doubtOptions",
            widgetFunc: (props) => <DoubtOptions {...props} />,
        },
        {
            widgetName: "moreInfo",
            widgetFunc: (props) => <MoreInfo {...props} />,
        },
    ],
    customStyles: {
        botMessageBox: {
            backgroundColor: "#DAA520",
        },
        chatButton: {
            backgroundColor: "#DAA520",
        },
    },
    customComponents: {
        botAvatar: (props) => <img alt="c3po" src="https://cdn0.iconfinder.com/data/icons/famous-character-vol-1-colored/48/JD-34-512.png" width="50px" height="50px" />,
    },
}



export default config