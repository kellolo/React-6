

const initStore = {
    account: {
        id: "u-0",
        name: "Ivan",
        middleName: "Petrovich",
        surname: "Ivanov",
        avatarUrl: "https://www.flaticon.com/svg/static/icons/svg/149/149071.svg",
        email: "IvanIvanov@gmail.com",
        tel: "+79271234567",
        contacts: ["u-1", "u-2", "u-3", "u-4", "u-5", "u-6"],
        chats: ["cu-0"],
    }
};


export default (store = initStore, action) => {
    switch(action.type) {
        default: 
            return store;
    }
}