const storeContacts = {
    contacts: ['Larry', 'Ваня','Вероника', 'Грузин', 'Molly', 'Саня', 'Юрист', 'Весельчак' ]
    // [
    //     {
    //         id: 'chat_1',
    //         contact: 'Larry'
    //     },
    //     {
    //         id: 'chat_2',
    //         contact: 'Ваня'
    //     },
    //     {
    //         id: 'chat_3',
    //         contact: 'Вероника'
    //     },
    //     {
    //         id: 'chat_4',
    //         contact: 'Грузин'
    //     },
    //     {
    //         contact: 'Molly'
    //     },
    //     {
    //         contact: 'Саня'
    //     },
    //     {
    //         contact: 'Юрист'
    //     },
    //     {
    //         contact: 'Весельчак'
    //     },
    // ]
  };
  
  export default (store = storeContacts, action) => {
    switch (action.type) {
      default:
        return store;
    }
  };
