const storeChats = {
    chats: [ 
        {
            chatName: 'Chat 1',
            chatId: 1,
        },
        {
            chatName: 'Chat 2',
            chatId: 2,
        },
        {
            chatName: 'Chat 3',
            chatId: 3,
        },
    ]
}

export default (store = storeChats, action) => {
    switch(action.type) {
        default:
            return store;
    }
}