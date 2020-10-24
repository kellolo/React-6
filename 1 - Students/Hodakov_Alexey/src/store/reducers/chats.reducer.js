const storeChats = {
    chats: [
        {
            id: 'chat_1',
            contact: 'Larry'
        },
        {
            id: 'chat_2',
            contact: 'Ваня'
        },
        {
            id: 'chat_3',
            contact: 'Вероника'
        },
        {
            id: 'chat_4',
            contact: 'Грузин'
        }
    ],
}

export default (store = storeChats, action) => {
    switch(action.type) {
        default:
            return store;
    }
}
