import update from "react-addons-update";
import { SUCCESSS_CONTACTS_LOADING } from "../actions/contacts.actions.js";

const storeContacts = {
  contacts: [

  ],
};

export default (store = storeContacts, action) => {
  switch (action.type) {
    case SUCCESSS_CONTACTS_LOADING: {
      return update(store, { contacts: { $set: action.payload.contacts } });
    }
    default:
      return store;
  }
};
