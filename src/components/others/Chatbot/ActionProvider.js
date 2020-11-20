class ActionProvider {
    constructor(createChatBotMessage, setStateFunc, createClientMessage) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
        this.createClientMessage = createClientMessage;
    }

    criptoInfo = () => {
        const message =
            this.createChatBotMessage(
                "Uma criptomoeda é um meio de troca, podendo ser centralizado ou descentralizado que se utiliza da tecnologia de blockchain e da criptografia para assegurar a validade das transações e a criação de novas unidades da moeda 😎.",
                {
                    widget: "doubtOptions",
                }
            );

        this.updateChatbotState(message);
    };

    greet() {
        const greetingMessages = [
            "Olá! o que gostaria de saber?",
            "Oi, em que posso ajudá-lo?",
            "Eae😎 Qual é sua dúvida?",

        ]

        var randomNumber = Math.floor(Math.random() * greetingMessages.length);

        const greetingMessage = this.createChatBotMessage(greetingMessages[randomNumber],
            {
                widget: "doubtOptions",
            })
        this.updateChatbotState(greetingMessage)
    }

    sorry() {

        const sorryMessages = [
            "Desculpa, não consegui decifrar sua mensagem 😔 Selecione uma opção:",
            "Foi mal, não consegui entender o que disse 😅 Talvez queira saber:",
            "Não entendi. Qual seria a sua dúvida?",

        ]

        var randomNumber = Math.floor(Math.random() * sorryMessages.length);

        const sorryMessage = this.createChatBotMessage(sorryMessages[randomNumber],
            {
                widget: "doubtOptions",
            }
        )
        this.updateChatbotState(sorryMessage)
    }


    updateChatbotState(message) {

        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}


export default ActionProvider;