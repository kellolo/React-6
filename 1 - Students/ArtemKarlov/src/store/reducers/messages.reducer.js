const initStore = {
    messages: [
        {id: 'msg_0', sender: 'Bot', text: 'Wake up, Neo…'},
        {id: 'msg_1', sender: 'Bot', text: 'Follow the white rabbit.'},
    ]
}

export default (store = initStore, action) => {
    switch(action.type) {
        default:
            return store;
    }
}