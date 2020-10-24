const storeMsg = {
  messages: [
    {  text: "Привет, Как здоровье !?" },
    {  text: "Давно тебя небыло видно ..." },
  ],
};

export default (store = storeMsg, action) => {
  switch (action.type) {
    default:
      return store;
  }
};

// [
//     {
//         id: 'chat_1',
//         messages: 'Hello! Hower are you?',
//         sender: 'Larry'
//     },
//     {
//         id: 'chat_2',
//         messages: 'Салют!',
//         sender: 'Ваня'
//     },
//     {
//         id: 'chat_3',
//         messages: 'Давно не виделись!',
//         sender: 'Вероника'
//     },
//     {
//         id: 'chat_4',
//         messages: 'Привет! Как сам?',
//         sender: 'Грузин'
//     }
// ]
