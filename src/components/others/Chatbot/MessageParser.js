class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        const greetingMessages = [
            "eae",
            "oi",
            "olá",
            "ola",
            "Oi",
            "alo",
            "alô"
        ]

        if (greetingMessages.includes(lowerCaseMessage)) {
            this.actionProvider.greet()
        }else{
            this.actionProvider.sorry();
        }

    }
}

export default MessageParser;