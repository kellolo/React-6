class Chats {
    // list = () => ['Chat1', "Chat2", "Chat3"]
    chatsList = () => [
        {title: 'Винсент и Джулс', id: 'ch_1', messageList: ['mes_1', 'mes_2','mes_3', 'mes_4', 'mes_5']},
        {title: 'Золотые часы', id: 'ch_2', messageList: ['mes_6', 'mes_7', 'mes_8', 'mes_9']},
        {title: 'Винсент Вега и жена Марселласа Уоллеса', id: 'ch_3', messageList: ['mes_10', 'mes_11', 'mes_12', 'mes_13']},
        {title: 'empty chat', id: 'ch_4', messageList: []},
    ]

    messagesList = () =>
        [
            { text: "!The system AI mes_1", sender: 'The system AI', _id: 'mes_1'},
            { text: "!user1@me.is mes_2", sender: 'user1@me.is', _id: 'mes_2'},
            { text: "!The system AI mes_3", sender: '', _id: 'mes_3'},
            { text: "!user1@me.is mes_4", sender: '', _id: 'mes_4'},
            { text: "!The system AI mes_5", sender: '', _id: 'mes_5'},
            { text: "!user1@me.is mes_6", sender: '', _id: 'mes_6'},
            { text: "!The system AI mes_7", sender: '', _id: 'mes_7'}

        ]

    getChats = () => this.chatsList().slice()
    getMessages = (chat_id) => {


        if (chat_id == '') {
            return []
        } else {
            let chat = this.chatsList().find(chatEl => chatEl._id===chat_id)
            return this.messagesList().filter(el => el._id === 'mes_6')
        }
    }
}

export let chats = new Chats()