import { combineReducers } from "redux";

import { connectRouter } from "connected-react-router";

import { userReducer } from "./userReducer";
import { contactsReducer } from "./contactsReducer";
import { chatsReducer } from "./chatsReducer";
import { messageReducer } from "./messageReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    userReducer,
    contactsReducer,
    chatsReducer,
    messageReducer,
  });

export default createRootReducer;
