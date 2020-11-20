class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    greet() {
        const greetingMessages = [
            "Eae Man!",
            "Fala mano, de boa?",
            "Eae, como cê ta?"
        ]

        var randomNumber = Math.floor(Math.random() * greetingMessages.length);

        const greetingMessage = this.createChatBotMessage(greetingMessages[randomNumber])
        this.updateChatbotState(greetingMessage)
    }

    sorry() {

        const sorryMessages = [
            "Desculpa, não consigo entender.",
            "Não sei, foi mal.",
            "Perdão, não tenho conhecimento sobre isso :("
        ]

        var randomNumber = Math.floor(Math.random() * sorryMessages.length);

        const sorryMessage = this.createChatBotMessage(sorryMessages[randomNumber])
        this.updateChatbotState(sorryMessage)
    }


    updateChatbotState(message) {

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}


export default ActionProvider;