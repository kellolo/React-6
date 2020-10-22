const storeChats = {
    chats: [
        {title: 'Chat1', id: 'ch_1', messageList: ['mes_1', 'mes_2','mes_3', 'mes_4']},
        {title: 'Chat2', id: 'ch_2', messageList: ['mes_5', 'mes_6']},
        {title: 'Chat3', id: 'ch_3', messageList: ['mes_7']},
        {title: 'Chat4', id: 'ch_4', messageList: []},
    ]
}

export default (store = storeChats, action) => {
    switch (action.type) {
        default:
            return store;
    }
}