import update from 'react-addons-update';
import { SEND_MSG } from '../actions/messages.actions.js';


const storeMessages = {
    messages: [
        { text: "А знаешь, как в Париже называют четвертьфунтовый чизбургер?", sender: 'Винсент', id: 'mes_1'},
        { text: "Что, они не зовут его четвертьфунтовый чизбургер?", sender: 'Джулс', id: 'mes_2'},
        { text: "У них там метрическая система. Они вообще там не понимают, что за хрен четверть фунта.", sender: 'Винсент', id: 'mes_3'},
        { text: "И как они его зовут?", sender: 'Джулс', id: 'mes_4'},
        { text: "Они зовут его «Роял чизбургер».", sender: 'Винсент', id: 'mes_5'},
        { text: "Как тебя зовут?", sender: 'Эсмеральда', id: 'mes_6'},
        { text: "Бутч.", sender: 'Бутч', id: 'mes_7'},
        { text: "Что это означает?", sender: 'Эсмеральда', id: 'mes_8'},
        { text: "Я американец, дорогуша. Наши имена вообще ни хера не значат.", sender: 'Бутч', id: 'mes_9'},
        { text: "Ты тоже это ненавидишь?", sender: 'Миа', id: 'mes_10'},
        { text: "Ненавижу что?", sender: 'Винсент', id: 'mes_11'},
        { text: "Неловкое молчание. Почему людям обязательно нужно сморозить какую-нибудь чушь, лишь бы не почувствовать себя в своей тарелке?", sender: 'Миа', id: 'mes_12'},
        { text: "Не знаю. Хороший вопрос.", sender: 'Винсент', id: 'mes_13'}
    ]
}

export default (store = storeMessages, action) => {
    switch (action.type) {
        case SEND_MSG: {
            let {text, sender} = action.message;
            let newMessage = {text, sender, id: 'mes_new'}
            return update(store, { messages: { $push: [ newMessage ] } })
        }
        default:
            return store;
    }
}