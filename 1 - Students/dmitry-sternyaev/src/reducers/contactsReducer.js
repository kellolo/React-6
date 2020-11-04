import update from "react-addons-update";

import { RECEIVE_CONTACTS } from "../constants/actionTypes";

const initStore = {
  contacts: [],
};

export const contactsReducer = (store = initStore, action) => {
  switch (action.type) {
    case RECEIVE_CONTACTS:
      return update(store, {
        contacts: {
          $set: action.contacts,
        },
      });
    default:
      return store;
  }
};
