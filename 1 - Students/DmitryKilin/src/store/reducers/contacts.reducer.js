const storeContacts = {
    contacts: [
        {name: 'Butch', id: 'cn_1', email: 'butch@mi.is', avatar: 'butch.jpg'},
        {name: 'esmeralda', id: 'cn_2', email: 'esmeralda@mi.is', avatar: 'esmeralda.jpg'},
        {name: 'jules', id: 'cn_3', email: 'jules@mi.is', avatar: 'jules.jpg'},
        {name: 'mia', id: 'cn_4', email: 'mia@mi.is', avatar: 'mia.jpg'},
        {name: 'tarantino', id: 'cn_3', email: 'tarantino@mi.is', avatar: 'tarantino.jpg'},
        {name: 'vincent', id: 'cn_4', email: 'vincent@mi.is', avatar: 'vincent.jpg'},
    ]
}

export default (store = storeContacts, action) => {
    switch (action.type) {
        default:
            return store;
    }
}