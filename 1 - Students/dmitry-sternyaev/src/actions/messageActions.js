import { SET_MESSAGE } from "../constants/actionTypes.js";

export const setMessage = (message) => ({
  type: SET_MESSAGE,
  message,
});
