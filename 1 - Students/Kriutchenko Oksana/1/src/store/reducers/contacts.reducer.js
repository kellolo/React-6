const storeContacts = {
    contacts: ['Саша', 'Ваня','Димон', 'Катя', 'Иван Петрович', 'Витёк', 'Влад', 'Дашка' ]
};


export default (store = storeContacts, action) => {
        switch (action.type) {
          default:
            return store;
        }
 };