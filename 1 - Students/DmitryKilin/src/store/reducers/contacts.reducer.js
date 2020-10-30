const storeContacts = {
    contacts: [
        {name: 'Butch', id: 'cn_1', email: 'butch@mi.is', avatar: 'butch.jpg'},
        {name: 'Esmeralda', id: 'cn_2', email: 'esmeralda@mi.is', avatar: 'esmeralda.jpg'},
        {name: 'Jules', id: 'cn_3', email: 'jules@mi.is', avatar: 'jules.jpg'},
        {name: 'Mia', id: 'cn_4', email: 'mia@mi.is', avatar: 'mia.jpg'},
        {name: 'Tarantino', id: 'cn_3', email: 'tarantino@mi.is', avatar: 'tarantino.jpg'},
        {name: 'Vincent', id: 'cn_4', email: 'vincent@mi.is', avatar: 'vincent.jpg'},
    ]
}

export default (store = storeContacts, action) => {
    switch (action.type) {
        default:
            return store;
    }
}