const storeContacts = {
    contacts: ['Саша', 'Ваня','Димон', 'Катя', 'Иван Петрович', 'Витёк', 'Влад', 'Дашка', 'Люся', 'Виталик', 'Стас' ]
};


export default (store = storeContacts, action) => {
        switch (action.type) {
          default:
            return store;
        }
 };