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
                    widget: "moreInfo",
                }
            );

        this.updateChatbotState(message);
    };

    criptoWorks = () => {
        const message =
            this.createChatBotMessage(
                "A criptomoeda é um código virtual que pode ser convertido em valores reais. Geralmente, é necessário comprar do emissor ou de alguém que já tenha a moeda. A criptomoeda utiliza criptografia. Ou seja, são códigos difíceis de quebrar e que garantem que as transações sejam muito mais seguras 🔐.",
                {
                    widget: "moreInfo",
                }
            );

        this.updateChatbotState(message);
    };

    criptoBorn = () => {
        const message =
            this.createChatBotMessage(
                "A primeira criptomoeda descentralizada, o Bitcoin, foi criado em 2009 por Satoshi Nakamoto.",
                {
                    widget: "moreInfo",
                }
            );

        this.updateChatbotState(message);
    };

    criptoHow = () => {
        const message =
            this.createChatBotMessage(
                "Nossa plataforma garante um ótimo inicio para quem quer começar a investir em Criptomoedas. Basta criar uma conta e começar a fazer suas transações 🤑",
                {
                    widget: "moreInfo",
                }
            );

        this.updateChatbotState(message);
    };
    moreInfo = () => {
        const message =
            this.createChatBotMessage(
                "Qual sua dúvida?",
                {
                    widget: "doubtOptions",
                }
            );

        this.updateChatbotState(message);
    };
    byeBye = () => {
        const message =
            this.createChatBotMessage(
                "Espero ter ajudado😉",
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
            "Ainda estou aprendendo seu idioma😅 Qual seria sua dúvida?",

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