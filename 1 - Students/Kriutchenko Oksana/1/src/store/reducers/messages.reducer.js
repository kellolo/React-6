import update from 'react-addons-update';

const storeMsg = {
    messages: [
        {sender: 'Bot', text: '...'},
        {sender: 'Me', text: 'Some text 1'},
        {sender: 'Me', text: 'Some text2'},
        {sender: 'Bot', text: '...'},
    ]
}

 export default (store = storeMsg, action) => {
    switch(action.type) {
        
        default:
            return store;
    }
} 