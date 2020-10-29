const initStore = {
    chats: [
        {
            id: "ch_0",
            title: "IvanovI",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "Hi our deadlines are...",
        },
        {
            id: "ch_1",
            title: "PetrovP",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "I'm fine",
        },
        {
            id: "ch_2",
            title: "SidorovS",
            avatarUrl: 'https://www.flaticon.com/svg/static/icons/svg/149/149071.svg',
            status: "my life my rules",
        },
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        default:
            return store;
    }
}