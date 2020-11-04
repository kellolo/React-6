import { RECEIVE_CONTACTS } from "../constants/actionTypes.js";

export const receiveContacts = (contacts) => ({
  type: RECEIVE_CONTACTS,
  contacts,
});
