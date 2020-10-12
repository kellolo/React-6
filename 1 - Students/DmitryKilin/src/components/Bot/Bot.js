class Bot {
    constructor() {
        this.name = 'The system AI'
    }
    getAnswer (message) {return {sender: this.name, text: 'Master ' + message.sender + '! Don\'t bother me!!! I\'m thinking ...'}}
}

export let chatBot = new Bot()