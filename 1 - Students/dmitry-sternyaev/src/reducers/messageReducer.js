import update from "react-addons-update";

import { SET_MESSAGE } from "../constants/actionTypes";

const initStore = {
  message: null,
};

export const messageReducer = (store = initStore, action) => {
  switch (action.type) {
    case SET_MESSAGE:
      return update(store, {
        message: {
          $set: action.message,
        },
      });
    default:
      return store;
  }
};
